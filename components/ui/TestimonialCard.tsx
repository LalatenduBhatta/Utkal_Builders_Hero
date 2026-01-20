"use client";

import { motion } from "framer-motion";

interface TestimonialCardProps {
    text: string;
    author: string;
    role: string;
    delay?: number;
}

export default function TestimonialCard({ text, author, role, delay = 0 }: TestimonialCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay }}
            className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
        >
            <div className="mb-6">
                <svg className="w-8 h-8 text-brand/30" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21L14.017 18C14.017 16.896 14.321 16.062 14.929 15.5C15.537 14.938 16.586 14.656 18.076 14.656L18.252 14.656L18.79 14.656L18.79 11L15.688 11C15.008 11 14.668 10.461 14.668 9.383C14.668 8.133 15.008 7.332 15.688 6.98C16.368 6.629 17.518 6.453 19.138 6.453L19.537 6.453L19.537 3L18.423 3C15.823 3 13.923 3.738 12.723 5.215C11.523 6.691 10.923 8.926 10.923 11.918L10.923 21L14.017 21ZM5.09399 21L5.09399 18C5.09399 16.896 5.39799 16.062 6.00599 15.5C6.61399 14.938 7.66299 14.656 9.15299 14.656L9.32899 14.656L9.86699 14.656L9.86699 11L6.76499 11C6.08499 11 5.74499 10.461 5.74499 9.383C5.74499 8.133 6.08499 7.332 6.76499 6.98C7.44499 6.629 8.59499 6.453 10.215 6.453L10.614 6.453L10.614 3L9.50099 3C6.90099 3 5.00099 3.738 3.80099 5.215C2.60099 6.691 2.00099 8.926 2.00099 11.918L2.00099 21L5.09399 21Z" />
                </svg>
            </div>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed italic">
                "{text}"
            </p>
            <div>
                <h4 className="font-bold text-gray-900">{author}</h4>
                <p className="text-sm text-gray-500">{role}</p>
            </div>
        </motion.div>
    );
}
