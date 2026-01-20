"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${scrolled || isOpen
                    ? "bg-white/90 backdrop-blur-md py-4 border-b border-gray-200"
                    : "bg-transparent py-6"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                <Link href="/" className={`font-bold text-xl tracking-tight z-50 relative ${(scrolled || isOpen) ? "text-brand-dark" : "text-white mix-blend-difference"
                    }`}>
                    UTKAL BUILDERS
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-8 items-center">
                    <NavLink href="/" label="Home" active={false} scrolled={scrolled} />
                    <NavLink href="/projects" label="Projects" active={false} scrolled={scrolled} />
                    <NavLink href="/about" label="About" active={false} scrolled={scrolled} />
                    <NavLink href="/media" label="Media" active={false} scrolled={scrolled} />
                    <NavLink href="/contact" label="Contact" active={false} scrolled={scrolled} />

                    <button className="px-5 py-2 rounded-full bg-brand text-white text-sm font-medium hover:bg-brand-dark transition-colors">
                        Enquire Now
                    </button>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden z-50 relative focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <div className={`w-6 h-0.5 mb-1.5 transition-all ${(scrolled || isOpen) ? "bg-gray-900" : "bg-white"
                        } ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
                    <div className={`w-6 h-0.5 mb-1.5 transition-all ${(scrolled || isOpen) ? "bg-gray-900" : "bg-white"
                        } ${isOpen ? "opacity-0" : "opacity-100"}`} />
                    <div className={`w-6 h-0.5 transition-all ${(scrolled || isOpen) ? "bg-gray-900" : "bg-white"
                        } ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
                </button>

                {/* Mobile Menu Overlay */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, x: "100%" }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: "100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="fixed inset-0 bg-white/95 backdrop-blur-xl z-40 flex flex-col items-start justify-center space-y-6 md:hidden px-10"
                        >
                            <div className="flex flex-col space-y-6 w-full">
                                <MobileNavLink href="/" label="Home" setIsOpen={setIsOpen} delay={0.1} />
                                <MobileNavLink href="/projects" label="Projects" setIsOpen={setIsOpen} delay={0.2} />
                                <MobileNavLink href="/about" label="About" setIsOpen={setIsOpen} delay={0.3} />
                                <MobileNavLink href="/media" label="Media" setIsOpen={setIsOpen} delay={0.4} />
                                <MobileNavLink href="/contact" label="Contact" setIsOpen={setIsOpen} delay={0.5} />

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.6 }}
                                    className="pt-6"
                                >
                                    <button className="w-full px-6 py-4 rounded-xl bg-brand text-white text-lg font-bold shadow-lg hover:bg-brand-dark transition-all">
                                        Enquire Now
                                    </button>
                                </motion.div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
}

function NavLink({ href, label, active, scrolled }: { href: string; label: string; active: boolean; scrolled: boolean }) {
    return (
        <Link
            href={href}
            className={`relative text-sm font-medium transition-colors ${scrolled ? "text-gray-800 hover:text-brand" : "text-white/90 hover:text-white mix-blend-difference"
                }`}
        >
            {label}
            {active && (
                <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-brand scale-x-100 transition-transform" />
            )}
        </Link>
    );
}

function MobileNavLink({ href, label, setIsOpen, delay }: { href: string; label: string; setIsOpen: (val: boolean) => void, delay: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay }}
        >
            <Link
                href={href}
                onClick={() => setIsOpen(false)}
                className="text-4xl font-bold text-gray-900 hover:text-brand transition-colors tracking-tight block"
            >
                {label}
            </Link>
        </motion.div>
    )
}
