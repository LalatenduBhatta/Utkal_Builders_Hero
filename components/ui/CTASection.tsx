"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface CTASectionProps {
    title?: string;
    subtitle?: string;
    primaryLink?: string;
    primaryText?: string;
    secondaryLink?: string;
    secondaryText?: string;
}

export default function CTASection({
    title = "Ready to elevate your lifestyle?",
    subtitle = "Experience the pinnacle of modern architecture and design.",
    primaryLink = "/contact",
    primaryText = "Schedule a Visit",
    secondaryLink = "/projects",
    secondaryText = "View All Projects",
}: CTASectionProps) {
    return (
        <section className="py-32 px-6 bg-offwhite border-t border-gray-200">
            <div className="max-w-4xl mx-auto text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
                >
                    {title}
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-xl text-gray-500 mb-12 font-light"
                >
                    {subtitle}
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="flex flex-col sm:flex-row gap-6 justify-center"
                >
                    <Link href={primaryLink}>
                        <button className="w-full sm:w-auto px-10 py-4 bg-brand text-white text-lg font-medium rounded-full hover:bg-brand-dark transition-all transform hover:scale-105 shadow-xl hover:shadow-2xl">
                            {primaryText}
                        </button>
                    </Link>
                    <Link href={secondaryLink}>
                        <button className="w-full sm:w-auto px-10 py-4 bg-transparent text-gray-900 border border-gray-300 text-lg font-medium rounded-full hover:bg-white hover:border-brand hover:text-brand transition-all transform hover:scale-105">
                            {secondaryText}
                        </button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
