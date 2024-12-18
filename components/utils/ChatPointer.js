'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import logo from '@/public/web-design-in-saint-paul.png';

const ChatPointer = () => {
    const containerVariants = {
        hidden: { opacity: 0, y: 50 }, // Initial hidden state
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }, // Slide in
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
            animate="visible" // Always animate to 'visible'
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
