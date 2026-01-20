"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">

                {/* Left: Info & Map */}
                <div className="bg-gray-50 p-12 lg:p-24 flex flex-col justify-between">
                    <div className="pt-20">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-5xl font-bold text-gray-900 mb-8"
                        >
                            Let's Build Something <br /> <span className="text-brand">Together.</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-gray-500 text-lg max-w-md"
                        >
                            Whether you're looking for your dream home or a commercial landmark, we're here to help.
                        </motion.p>
                    </div>

                    <div className="space-y-8 py-12">
                        <div>
                            <h3 className="text-gray-900 font-bold mb-2">Visit Us</h3>
                            <p className="text-gray-600">
                                Utkal Builders HQ, <br />
                                Saheed Nagar, Bhubaneswar, <br />
                                Odisha, India - 751007
                            </p>
                        </div>
                        <div>
                            <h3 className="text-gray-900 font-bold mb-2">Contact</h3>
                            <p className="text-gray-600">
                                hello@utkalbuilders.com <br />
                                +91 993 700 0000
                            </p>
                        </div>
                    </div>

                    <div className="h-64 rounded-2xl bg-gray-200 overflow-hidden relative grayscale opacity-80 hover:grayscale-0 transition-all duration-500">
                        {/* Map Placeholder */}
                        <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                            Interactive Map
                        </div>
                    </div>
                </div>

                {/* Right: Form */}
                <div className="p-12 lg:p-24 flex items-center justify-center bg-white">
                    <ContactForm />
                </div>

            </div>
        </main>
    );
}

function ContactForm() {
    const [focused, setFocused] = useState<string | null>(null);

    return (
        <form className="w-full max-w-lg space-y-8">
            <InputGroup label="Name" id="name" type="text" setFocused={setFocused} focused={focused} />
            <InputGroup label="Email" id="email" type="email" setFocused={setFocused} focused={focused} />
            <InputGroup label="Phone" id="phone" type="tel" setFocused={setFocused} focused={focused} />

            <div className="relative">
                <label className={`block text-sm font-medium transition-colors ${focused === "message" ? "text-brand" : "text-gray-500"}`}>
                    Message
                </label>
                <textarea
                    id="message"
                    rows={4}
                    className="w-full py-3 bg-transparent border-b-2 border-gray-200 focus:border-brand focus:outline-none transition-colors resize-none"
                    onFocus={() => setFocused("message")}
                    onBlur={() => setFocused(null)}
                />
            </div>

            <button type="submit" className="w-full py-4 bg-brand text-white font-bold rounded-lg hover:bg-brand-dark transition-all transform hover:scale-[1.02] shadow-lg">
                Send Enquiry
            </button>
        </form>
    );
}

function InputGroup({ label, id, type, setFocused, focused }: { label: string; id: string; type: string; setFocused: any; focused: any }) {
    return (
        <div className="relative">
            <label
                htmlFor={id}
                className={`block text-sm font-medium transition-colors ${focused === id ? "text-brand" : "text-gray-500"}`}
            >
                {label}
            </label>
            <input
                type={type}
                id={id}
                className="w-full py-3 bg-transparent border-b-2 border-gray-200 focus:border-brand focus:outline-none transition-colors"
                onFocus={() => setFocused(id)}
                onBlur={() => setFocused(null)}
            />
        </div>
    )
}
