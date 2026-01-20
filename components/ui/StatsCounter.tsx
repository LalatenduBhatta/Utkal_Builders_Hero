"use client";

import { useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";

interface StatsCounterProps {
    value: number;
    label: string;
    suffix?: string;
}

export default function StatsCounter({ value, label, suffix = "" }: StatsCounterProps) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, {
        damping: 50,
        stiffness: 75,
        duration: 3000,
    });

    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [isInView, value, motionValue]);

    return (
        <div ref={ref} className="text-center p-6 group cursor-default">
            <div className="text-5xl md:text-7xl font-bold text-gray-900 mb-2 group-hover:text-brand transition-colors duration-500 flex justify-center items-baseline gap-1">
                <CounterDisplay value={springValue} />
                <span className="text-4xl text-brand">{suffix}</span>
            </div>
            <p className="text-gray-500 uppercase tracking-widest text-sm font-medium">
                {label}
            </p>
        </div>
    );
}

function CounterDisplay({ value }: { value: any }) {
    const ref = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        return value.on("change", (latest: number) => {
            if (ref.current) {
                ref.current.textContent = Math.floor(latest).toLocaleString();
            }
        });
    }, [value]);

    return <span ref={ref}>0</span>;
}
