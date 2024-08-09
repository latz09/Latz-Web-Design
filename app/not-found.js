// app/not-found.js

'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

export default function NotFound() {
  const router = useRouter();
  const [countdown, setCountdown] = useState(7);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    const timeout = setTimeout(() => {
      router.push('/');
    }, 7000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [router]);

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center bg-light px-4">
      <motion.h1
        className="text-6xl font-bold mb-4"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        404
      </motion.h1>
      <motion.p
        className="text-xl mb-6 font-bold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        Oops! The page you are looking for does not exist.
      </motion.p>
      <motion.div
        className="text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        Redirecting to the homepage in <span className="font-bold"> {countdown}...</span>
      </motion.div>
      <motion.div
        className="mt-10"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <button
          onClick={() => router.push('/')}
          className="px-4 py-2 bg-primary text-light text-xl font-black rounded-lg hover:bg-blue-700"
        >
          Go to Homepage Now
        </button>
      </motion.div>
    </div>
  );
}
