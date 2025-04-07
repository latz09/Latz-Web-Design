'use client';
import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import LandingBlob from '../utils/animations/LandingBlob';
import ScrollIndicator from '../utils/animations/ScrollIndicator';
import Link from 'next/link';
import AnimateUp from '../utils/animations/AnimateUp';
import { CurveDividerTop } from '../utils/dividers/Dividers';

// Constants for repeated class names
const CONTAINER_CLASSES =
  'relative py-24 lg:py-36 mt-20 lg:mt-28 overflow-hidden bg-dark from-dark via-dark/95 to-dark text-light grid place-items-center';
const INNER_CONTAINER_CLASSES =
  'relative z-10 grid place-items-center max-w-7xl px-2 text-center lg:text-start';
const HEADING_CLASSES = 'grid gap-4 space-y-4';
const TOP_HEADING_CLASSES =
  'text-lg lg:text-2xl font-light uppercase tracking-widest text-tertiary font-heading';
const MAIN_HEADING_CLASSES =
  'text-3xl lg:text-6xl font-bold tracking-wider font-heading';
const SUB_HEADING_CLASSES = 'text-lg lg:text-2xl text-light text-center';

const LandingHero = ({ heading, subHeading, topHeading, links = [] }) => {
  const [windowWidth, setWindowWidth] = useState(1920);
  const [blobs, setBlobs] = useState([]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWindowWidth(window.innerWidth);
      const handleResize = () => setWindowWidth(window.innerWidth);
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  useEffect(() => {
    const getSize = () => {
      if (windowWidth < 640) return `${80 + Math.random() * 30}px`; // mobile
      if (windowWidth < 1024) return `${120 + Math.random() * 60}px`; // tablet
      return `${200 + Math.random() * 100}px`; // desktop
    };

    const positions = [
      { x: '10vw', y: '20vh' },
      { x: '70vw', y: '15vh' },
      { x: '30vw', y: '60vh' },
      { x: '80vw', y: '75vh' },
      { x: '15vw', y: '80vh' },
    ];

    const blobElements = positions.map((pos, i) => (
      <LandingBlob
        key={i}
        x={pos.x}
        y={pos.y}
        size={getSize()}
        delay={Math.random() * 5}
      />
    ));

    setBlobs(blobElements);
  }, [windowWidth]);

  return (
    <div className={CONTAINER_CLASSES}>
      {/* Soft animated background */}
      <>
        {/* Optional gradient background */}
        <motion.div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            background: 'linear-gradient(120deg, #1d1d1d, #252525, #2c2c2c)',
            backgroundSize: '600% 600%',
          }}
          animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
          transition={{ duration: 40, ease: 'easeInOut', repeat: Infinity }}
        />

        {/* Floating premium blobs */}
        <div className="absolute inset-0 z-0 bg-dark pointer-events-none">
          <div className="absolute inset-0 opacity-10">{blobs}</div>
          
        </div>
      </>

      {/* Hero Content */}
      <div className={INNER_CONTAINER_CLASSES}>
        <motion.div
          className={HEADING_CLASSES}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <h1 className={MAIN_HEADING_CLASSES}>{topHeading}</h1>
          <div>
            <p className={TOP_HEADING_CLASSES}>{heading}</p>
          </div>
        </motion.div>

        {/* Links Section */}
        <div className="w-full mt-12">
          <p className="text-lg text-light font-thin text-center mb-4">
            Select Your Area
          </p>
          <motion.div
            className="grid gap-6 md:flex md:gap-4"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            {links.map((link, index) => (
              <Link key={index} href={`/${link.slug}`} className="md:w-1/2">
                <span
                  className={`transition duration-700 hover:scale-95 block text-center p-3 lg:p-4 w-full lg:text-xl rounded-sm font-semibold uppercase ${
                    index === 0
                      ? 'bg-light text-dark hover:bg-light/0 hover:text-tertiary hover:border'
                      : 'text-tertiary border border-tertiary hover:border-tertiary/0 hover:bg-light hover:text-dark'
                  }`}
                >
                  {link.title}
                </span>
              </Link>
            ))}
          </motion.div>
        </div>
        <div className="mt-12">
          <h2 className={SUB_HEADING_CLASSES}>{subHeading}</h2>
        </div>
      </div>
    </div>
  );
};

export default LandingHero;
