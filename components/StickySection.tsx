"use client";

import { ReactNode } from "react";

interface StickySectionProps {
    children: ReactNode;
    className?: string;
}

export default function StickySection({ children, className = "" }: StickySectionProps) {
    return (
        <div className={`relative ${className}`}>
            <div className="sticky top-0 h-screen w-full overflow-hidden">
                {children}
            </div>
        </div>
    );
}
