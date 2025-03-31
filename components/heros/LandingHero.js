'use client';
import { motion } from 'framer-motion';
import React from 'react';
import LandingBackground from '../utils/animations/LandingBackground';
import ScrollIndicator from '../utils/animations/ScrollIndicator';
import Link from 'next/link';
import AnimateUp from '../utils/animations/AnimateUp';

// Function to generate random line properties
const generateRandomLineProperties = () => ({
	x: `${Math.random() * 100}vw`,
	y: `${Math.random() * 100}vh`,
	length: `${Math.random() * 300 + 150}px`, // Line length
	delay: Math.random() * 5,
	direction: Math.random() > 0.5 ? 'horizontal' : 'vertical', // Random direction
});

// Function to generate lines
const generateLines = (numLines) => {
	return Array.from({ length: numLines }, (_, i) => {
		const { x, y, length, delay, direction } = generateRandomLineProperties();
		return (
			<LandingBackground
				key={i}
				x={x}
				y={y}
				length={length}
				repeateDelay={delay}
				direction={direction}
			/>
		);
	});
};

// Constants for repeated class names
const CONTAINER_CLASSES =
	'relative py-24 lg:py-36  mt-20 lg:mt-28 overflow-hidden bg-dark from-dark via-dark/95 to-dark text-light grid place-items-center';
const INNER_CONTAINER_CLASSES =
	'relative z-10 grid place-items-center   max-w-7xl px-2 text-center lg:text-start  ';
const HEADING_CLASSES = 'grid gap-4 space-y-4 ';
const TOP_HEADING_CLASSES =
	'text-lg lg:text-2xl font-light uppercase tracking-widest text-tertiary font-heading';
const MAIN_HEADING_CLASSES =
	'text-3xl lg:text-6xl font-bold tracking-wider font-heading  ';
const SUB_HEADING_CLASSES = 'text-lg lg:text-2xl text-light text-center';

// Component
const LandingHero = ({ heading, subHeading, topHeading, links = [] }) => {
	return (
		<div className={CONTAINER_CLASSES}>
			{/* Animated Lines Background */}
			<div className='absolute inset-0 opacity-5 pointer-events-none'>
				{generateLines(20)}
			</div>

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
				<div className='w-full mt-12  '>
					<p className='text-lg text-light font-thin text-center mb-4'>Select Your Area</p>
					<motion.div
						className='grid gap-6 md:flex md:gap-4 '
						initial={{ opacity: 0, scale: 0.95 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 1, delay: 0.5 }}
					>
						{links.map((link, index) => (
							<Link key={index} href={`/${link.slug}`} className='md:w-1/2'>
								<span
									className={`transition duration-700 hover:scale-95 block text-center p-3 lg:p-4 w-full  lg:text-xl  rounded-sm font-semibold uppercase ${
										index === 0
											? 'bg-light/70 text-dark hover:bg-light/0 hover:text-tertiary hover:border' // First link
											: 'text-tertiary border border-tertiary hover:border-tertiary/0  hover:bg-light hover:text-dark' // Other links
									}`}
								>
									{link.title}
								</span>
							</Link>
						))}
					</motion.div>
				</div>
				<div className='mt-12'>
					<h2 className={SUB_HEADING_CLASSES}>{subHeading}</h2>
				</div>
			</div>
		</div>
	);
};

export default LandingHero;
