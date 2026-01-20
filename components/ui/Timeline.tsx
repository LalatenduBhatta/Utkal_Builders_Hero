"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface TimelineEvent {
    year: string;
    title: string;
    description: string;
    side: string;
}

interface TimelineProps {
    data: TimelineEvent[];
}

export default function Timeline({ data }: TimelineProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <div ref={containerRef} className="relative py-20">
            {/* Center Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-gray-200 -translate-x-1/2">
                <motion.div
                    style={{ height }}
                    className="w-full bg-brand"
                />
            </div>

            {/* Events */}
            <div className="relative">
                {data.map((event, index) => (
                    <TimelineItem key={index} event={event} index={index} />
                ))}
            </div>
        </div>
    );
}

function TimelineItem({ event, index }: { event: TimelineEvent; index: number }) {
    const isLeft = event.side === "left";

    return (
        <motion.div
            initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={`flex items-center justify-between mb-24 w-full`}
        >
            <div className={`w-[45%] ${isLeft ? "text-right pr-8" : "order-last text-left pl-8"}`}>
                <h3 className="text-5xl font-bold text-gray-200 mb-2">{event.year}</h3>
                <h4 className="text-2xl font-bold text-gray-900 mb-2">{event.title}</h4>
                <p className="text-gray-600 leading-relaxed">{event.description}</p>
            </div>

            {/* Center Dot */}
            <div className="relative z-10 w-4 h-4 rounded-full bg-white border-4 border-brand shadow-md" />

            <div className="w-[45%]" />
        </motion.div>
    );
}
