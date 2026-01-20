"use client";

import { motion } from "framer-motion";
import CTASection from "@/components/ui/CTASection";
import { newsData } from "@/lib/data";
import Link from "next/link";

export default function MediaPage() {
    const featured = newsData[0];
    const rest = newsData.slice(1);

    return (
        <main className="bg-white min-h-screen pt-32 pb-24">
            <div className="max-w-7xl mx-auto px-6">

                {/* Header */}
                <div className="text-center mb-20 max-w-3xl mx-auto">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl font-bold text-gray-900 mb-6"
                    >
                        Insights & Updates
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-gray-500 font-light"
                    >
                        Stay informed about our latest milestones, community initiatives, and industry perspectives.
                    </motion.p>
                </div>

                {/* Featured Story */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className="relative aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden mb-16 group cursor-pointer"
                >
                    <div className="absolute inset-0 bg-gray-200">
                        {/* Replace with real image: <Image src={featured.image} ... /> */}
                        <div className="w-full h-full bg-[url('/Hero/ezgif-frame-100.jpg')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-8 md:p-16 flex flex-col justify-end">
                        <span className="text-brand font-bold uppercase tracking-wider mb-2">{featured.category}</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">{featured.title}</h2>
                        <p className="text-white/80">{featured.date}</p>
                    </div>
                </motion.div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {rest.map((item, i) => (
                        <NewsCard key={item.id} item={item} index={i} />
                    ))}
                    {/* Mock more items for grid visualization */}
                    {[1, 2, 3].map((n, i) => (
                        <div key={`mock-${i}`} className="bg-gray-100 rounded-2xl aspect-[4/3]" />
                    ))}
                </div>

            </div>
            <CTASection title="Stay Connected" subtitle="Subscribe to our newsletter for exclusive updates." primaryText="Subscribe" primaryLink="#" secondaryText="Follow us" secondaryLink="#" />
        </main>
    );
}

function NewsCard({ item, index }: { item: any, index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group cursor-pointer"
        >
            <div className="aspect-[4/3] rounded-xl overflow-hidden mb-6 bg-gray-100 relative">
                <div className="absolute inset-0 bg-gray-300 transition-transform duration-500 group-hover:scale-105" />
            </div>
            <span className="text-brand text-sm font-bold uppercase tracking-wider">{item.category}</span>
            <h3 className="text-2xl font-bold text-gray-900 mt-2 mb-2 group-hover:text-brand transition-colors">
                {item.title}
            </h3>
            <p className="text-gray-500 text-sm">{item.date}</p>
        </motion.div>
    );
}
