"use client";

import { useMotionValueEvent, useScroll, useTransform, MotionValue } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";

interface ImageSequenceProps {
    progress: MotionValue<number>;
    folderPath: string;
    frameCount: number;
    fileNamePrefix?: string;
    extension?: string;
}

export default function ImageSequence({
    progress,
    folderPath,
    frameCount,
    fileNamePrefix = "ezgif-frame-",
    extension = "jpg",
}: ImageSequenceProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);

    // Preload images
    useEffect(() => {
        let loadedCount = 0;
        const imgs: HTMLImageElement[] = [];

        for (let i = 1; i <= frameCount; i++) {
            const img = new Image();
            const paddedIndex = i.toString().padStart(3, "0");
            img.src = `${folderPath}/${fileNamePrefix}${paddedIndex}.${extension}`;

            img.onload = () => {
                loadedCount++;
                if (loadedCount === frameCount) {
                    setIsLoaded(true);
                }
            };
            imgs.push(img);
        }
        setImages(imgs);
    }, [folderPath, frameCount, fileNamePrefix, extension]);

    // Draw frame based on progress
    const renderFrame = useCallback(
        (currentProgress: number) => {
            const canvas = canvasRef.current;
            if (!canvas || images.length === 0) return;

            const ctx = canvas.getContext("2d");
            if (!ctx) return;

            // Map progress 0-1 to frame index
            let frameIndex = Math.floor(currentProgress * (frameCount - 1));
            // Clamp index
            frameIndex = Math.min(frameCount - 1, Math.max(0, frameIndex));

            const img = images[frameIndex];
            if (!img) return;

            // Canvas sizing (responsive cover)
            const canvasWidth = canvas.width;
            const canvasHeight = canvas.height;

            // Calculate aspect ratios
            const imgRatio = img.width / img.height;
            const canvasRatio = canvasWidth / canvasHeight;

            let drawWidth, drawHeight, offsetX, offsetY;

            if (canvasRatio > imgRatio) {
                drawWidth = canvasWidth;
                drawHeight = canvasWidth / imgRatio;
                offsetX = 0;
                offsetY = (canvasHeight - drawHeight) / 2;
            } else {
                drawWidth = canvasHeight * imgRatio;
                drawHeight = canvasHeight;
                offsetX = (canvasWidth - drawWidth) / 2;
                offsetY = 0;
            }

            ctx.clearRect(0, 0, canvasWidth, canvasHeight);
            ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
        },
        [images, frameCount]
    );

    // Sync with scroll
    useMotionValueEvent(progress, "change", (latest) => {
        if (isLoaded) {
            requestAnimationFrame(() => renderFrame(latest));
        }
    });

    // Handle Resize
    useEffect(() => {
        const handleResize = () => {
            const canvas = canvasRef.current;
            if (canvas) {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
                renderFrame(progress.get());
            }
        };

        window.addEventListener("resize", handleResize);
        handleResize(); // Init

        return () => window.removeEventListener("resize", handleResize);
    }, [renderFrame, progress, isLoaded]);

    // Initial render when loaded
    useEffect(() => {
        if (isLoaded) {
            renderFrame(progress.get());
        }
    }, [isLoaded, renderFrame, progress]);

    return (
        <div className="fixed inset-0 w-full h-full -z-10 bg-black">
            <canvas
                ref={canvasRef}
                className="w-full h-full object-cover block"
            />
            {!isLoaded && (
                <div className="absolute inset-0 flex items-center justify-center bg-black text-white text-sm">
                    Loading Experience...
                </div>
            )}
        </div>
    );
}
