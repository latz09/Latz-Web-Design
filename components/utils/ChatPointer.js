'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import logo from '@/public/web-design-in-saint-paul.png';
import { useState, useEffect } from 'react';

const ChatPointer = () => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsVisible(false);
            setTimeout(() => setIsVisible(true), 18000); // Visible for 8 seconds
        }, 8000); // Show every 10 seconds
        return () => clearInterval(interval);
    }, []);

    const containerVariants = {
        hidden: { opacity: 0, y: 50 }, // Initial hidden state
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }, // Slide in
        exit: { opacity: 0, y: 50, transition: { duration: 0.8 } }, // Slide out
    };

    const pulseVariants = {
        visible: {
            scale: [1, 1.05, 1],
            transition: {
                duration: 1.5,
                repeat: Infinity,
            },
        },
    };

    return (
        <motion.div
            className="fixed bottom-5 right-20 bg-light text-primary px-3 py-2 rounded-lg shadow-lg z-[999999] flex items-center gap-3 tracking-wider font-bold text-xs"
            initial="hidden"
            animate={isVisible ? 'visible' : 'exit'} // Control animation state
            variants={containerVariants}
        >
            <motion.div
                className="flex items-center gap-3"
                animate="visible"
                variants={pulseVariants}
            >
                <Image
                    src={logo}
                    alt="Logo"
                    width={13}
                    height={13}
                    className="rounded-full"
                />
                Chat with Us!
            </motion.div>
        </motion.div>
    );
};

export default ChatPointer;
