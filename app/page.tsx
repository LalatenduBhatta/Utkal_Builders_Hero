"use client";

import { useScroll, MotionValue } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import ImageSequence from "@/components/ImageSequence";
import StickySection from "@/components/StickySection";
import OverlayText from "@/components/OverlayText";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <main ref={containerRef} className="relative bg-white">
      <StickySection className={isMobile ? "h-[150vh]" : "h-[300vh]"}>
        <ImageSequence
          progress={scrollYProgress}
          folderPath="/Hero"
          frameCount={240}
        />
        <OverlayText
          progress={scrollYProgress}
          data={[
            {
              start: 0,
              end: 0.15,
              text: (
                <div className="text-center">
                  <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight drop-shadow-lg">
                    Building Landmarks <br /> for Modern Living
                  </h1>
                  <p className="text-xl text-white/90 font-light drop-shadow-md">
                    Residential & commercial spaces designed for tomorrow.
                  </p>
                </div>
              ),
              align: "center",
            },
            {
              start: 0.15,
              end: 0.35,
              text: (
                <div>
                  <h2 className="text-4xl md:text-6xl font-bold text-brand mb-4">
                    Engineered with precision.
                  </h2>
                  <p className="text-lg text-arch-dark/80 max-w-md bg-white/80 p-6 backdrop-blur-sm rounded-lg shadow-sm">
                    Every layer is designed for strength, comfort, and longevity.
                  </p>
                </div>
              ),
              align: "left",
            },
            {
              start: 0.35,
              end: 0.60,
              text: (
                <div className="text-right">
                  <h2 className="text-4xl md:text-6xl font-bold text-white mix-blend-difference mb-4">
                    Crafted to last.
                  </h2>
                  <p className="text-lg text-white/90 max-w-md ml-auto drop-shadow-sm">
                    Premium materials. Thoughtful layouts. Sustainable design.
                  </p>
                </div>
              ),
              align: "right",
            },
            {
              start: 0.60,
              end: 0.80,
              text: (
                <div className="text-center bg-black/40 p-10 backdrop-blur-md rounded-xl">
                  <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
                    Strategically located.
                  </h2>
                  <p className="text-lg text-white/90">
                    Designed for connectivity, growth, and everyday ease.
                  </p>
                </div>
              ),
              align: "center",
            },
            {
              start: 0.80,
              end: 0.98,
              text: (
                <div className="text-center">
                  <h2 className="text-5xl md:text-7xl font-bold text-brand mb-8">
                    Spaces that elevate <br /> everyday life.
                  </h2>
                  <div className="flex flex-col md:flex-row gap-4 justify-center">
                    <button className="px-8 py-4 bg-brand text-white text-lg font-medium rounded-full hover:bg-brand-dark transition-all transform hover:scale-105 shadow-lg">
                      Explore Residential
                    </button>
                    <button className="px-8 py-4 bg-white text-brand border-2 border-brand text-lg font-medium rounded-full hover:bg-gray-50 transition-all transform hover:scale-105 shadow-lg">
                      Contact Us
                    </button>
                  </div>
                </div>
              ),
              align: "center",
            },
          ]}
        />
      </StickySection>

      <div className="h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <p className="text-gray-400 mb-4">Continue Exploring</p>
          <h3 className="text-3xl font-bold text-gray-800">Our Footer / Next Section</h3>
        </div>
      </div>
    </main>
  );
}
