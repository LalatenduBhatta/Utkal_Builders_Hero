"use client";

import { useScroll } from "framer-motion";
import { useRef } from "react";
import ImageSequence from "@/components/ImageSequence";
import StickySection from "@/components/StickySection";
import OverlayText from "@/components/OverlayText";

export default function Projects() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    return (
        <main ref={containerRef} className="relative bg-white">
            {/* Hero Section */}
            <StickySection className="h-[500vh]">
                <ImageSequence
                    progress={scrollYProgress}
                    folderPath="/Hero2"
                    frameCount={240}
                />
                <OverlayText
                    progress={scrollYProgress}
                    data={[
                        {
                            start: 0,
                            end: 0.25,
                            text: (
                                <div className="text-center">
                                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg">
                                        Designed for the way <br /> you live and work.
                                    </h1>
                                </div>
                            ),
                            align: "center",
                        },
                        {
                            start: 0.25,
                            end: 0.50,
                            text: (
                                <div className="bg-white/90 p-8 rounded-lg shadow-xl backdrop-blur-sm">
                                    <h2 className="text-4xl font-bold text-brand mb-4">
                                        Form meets function.
                                    </h2>
                                    <p className="text-gray-600 text-lg">
                                        Interiors, circulation, and amenities designed seamlessly.
                                    </p>
                                </div>
                            ),
                            align: "left",
                        },
                        {
                            start: 0.50,
                            end: 0.75,
                            text: (
                                <div className="text-right">
                                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-md">
                                        Built on experience.
                                    </h2>
                                    <p className="text-white/90 text-xl font-light">
                                        Delivered with trust.
                                    </p>
                                </div>
                            ),
                            align: "right",
                        },
                        {
                            start: 0.75,
                            end: 1,
                            text: (
                                <div className="text-center">
                                    <h2 className="text-4xl md:text-6xl font-bold text-brand mb-8">
                                        Your next chapter starts here.
                                    </h2>
                                    <div className="flex gap-4 justify-center">
                                        <button className="px-8 py-3 bg-brand text-white rounded-full hover:bg-brand-dark transition-colors shadow-lg">
                                            View All Projects
                                        </button>
                                        <button className="px-8 py-3 bg-white text-gray-800 border border-gray-200 rounded-full hover:bg-gray-50 transition-colors shadow-sm">
                                            Schedule Visit
                                        </button>
                                    </div>
                                </div>
                            ),
                            align: "center",
                        },
                    ]}
                />
            </StickySection>

            {/* Additional Content */}
            <div className="py-24 px-6 max-w-7xl mx-auto">
                <h3 className="text-3xl font-bold text-gray-900 mb-12">Featured Collection</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="aspect-[4/5] bg-gray-100 rounded-xl animate-pulse" />
                    ))}
                </div>
            </div>
        </main>
    );
}
