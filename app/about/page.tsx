"use client";

import { motion } from "framer-motion";
import StatsCounter from "@/components/ui/StatsCounter";
import CTASection from "@/components/ui/CTASection";
import Timeline from "@/components/ui/Timeline";
import { timelineData, coreValues, awardsData, statsData } from "@/lib/data";

export default function AboutPage() {
    return (
        <main className="bg-white">
            {/* 1. HERO */}
            <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-gray-50">
                <div className="absolute inset-0 opacity-10">
                    {/* Abstract background pattern or image can go here */}
                    <div className="w-full h-full bg-[url('/Hero/ezgif-frame-050.jpg')] bg-cover bg-center grayscale" />
                </div>

                <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 tracking-tight"
                    >
                        35 Years of <br /> <span className="text-brand">Building Trust</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-xl md:text-2xl text-gray-500 font-light max-w-3xl mx-auto"
                    >
                        A legacy shaped by precision, people, and a promise to deliver more than just structures.
                    </motion.p>
                </div>
            </section>

            {/* 2. STATS */}
            <section className="py-24 border-y border-gray-100 bg-white">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
                    {statsData.map((stat, i) => (
                        <StatsCounter key={i} {...stat} />
                    ))}
                </div>
            </section>

            {/* 3. TIMELINE */}
            <section className="py-32 bg-gray-50">
                <div className="max-w-5xl mx-auto px-6">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
                        <p className="text-gray-500">From humble beginnings to skyline icons.</p>
                    </div>
                    <Timeline data={timelineData} />
                </div>
            </section>

            {/* 4. VALUES */}
            <section className="py-32 bg-brand-dark text-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold mb-8">Guided by Principles.</h2>
                            <p className="text-white/80 text-lg leading-relaxed mb-8">
                                We believe that every project is a reflection of our integrity. We don't just build homes; we build relationships that last generations.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 gap-8">
                            {coreValues.map((value, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="border-l-2 border-brand pl-6"
                                >
                                    <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                                    <p className="text-white/70">{value.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. AWARDS */}
            <section className="py-32 bg-white">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-4xl font-bold text-gray-900 mb-16 text-center">Awards & Recognition</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {awardsData.map((award, i) => (
                            <AwardCard key={i} award={award} index={i} />
                        ))}
                    </div>
                </div>
            </section>

            <CTASection />
        </main>
    );
}

function AwardCard({ award, index }: { award: any; index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group p-8 bg-gray-50 rounded-xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-brand/20"
        >
            <span className="text-brand font-bold block mb-2">{award.year}</span>
            <h3 className="text-2xl font-bold text-gray-900 mb-1 group-hover:text-brand transition-colors">
                {award.title}
            </h3>
            <p className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-4">
                {award.body}
            </p>
            <p className="text-gray-600">
                {award.description}
            </p>
        </motion.div>
    );
}
