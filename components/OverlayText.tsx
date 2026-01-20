"use client";

import { motion, useTransform, MotionValue } from "framer-motion";
import { ReactNode } from "react";

interface OverlayTextProps {
    progress: MotionValue<number>;
    data: {
        start: number;
        end: number;
        text: ReactNode;
        align?: "left" | "center" | "right";
    }[];
}

export default function OverlayText({ progress, data }: OverlayTextProps) {
    return (
        <div className="absolute inset-0 pointer-events-none z-10">
            {data.map((item, index) => (
                <OverlayItem key={index} item={item} progress={progress} />
            ))}
        </div>
    );
}

function OverlayItem({ item, progress }: { item: any, progress: MotionValue<number> }) {
    // Fade in during the first 20% of the range, stay visible, fade out in last 20%
    const rangeDuration = item.end - item.start;
    const fadeInEnd = item.start + rangeDuration * 0.2;
    const fadeOutStart = item.end - rangeDuration * 0.2;

    const opacity = useTransform(
        progress,
        [item.start, fadeInEnd, fadeOutStart, item.end],
        [0, 1, 1, 0]
    );

    const y = useTransform(
        progress,
        [item.start, item.end],
        [20, -20]
    );

    const alignClass =
        item.align === "left"
            ? "items-start justify-center pl-20"
            : item.align === "right"
                ? "items-end justify-center pr-20"
                : "items-center justify-center";

    return (
        <motion.div
            style={{ opacity, y }}
            className={`absolute inset-0 flex flex-col ${alignClass} p-10`}
        >
            <div className="max-w-2xl">
                {item.text}
            </div>
        </motion.div>
    );
}
