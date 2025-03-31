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
	'relative h-[90vh] xl:h-[90vh]  mt-8 overflow-hidden bg-dark text-light';
const INNER_CONTAINER_CLASSES =
	'relative z-10 flex flex-col justify-center items-center h-full max-w-5xl px-2 mx-auto  ';
const HEADING_CLASSES = 'grid gap-4 space-y-4';
const TOP_HEADING_CLASSES =
	'text-lg lg:text-2xl font-light uppercase tracking-widest text-tertiary ';
const MAIN_HEADING_CLASSES =
	'text-3xl lg:text-7xl font-extrabold text-white leading-tight';
const SUB_HEADING_CLASSES = 'text-md lg:text-2xl text-light/80';

// Component
const LandingHero = ({ heading, subHeading, topHeading, links = [] }) => {
	return (
		<div className={CONTAINER_CLASSES}>
			{/* Animated Lines Background */}
			{/* <div className='absolute inset-0 opacity-5 pointer-events-none'>
				{generateLines(20)}
			</div> */}

			{/* Hero Content */}
			<div className={INNER_CONTAINER_CLASSES}>
				<motion.div
					className={HEADING_CLASSES}
					initial={{ opacity: 0, scale: 0.95 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 1, delay: 0.3 }}
				>
					<p className={TOP_HEADING_CLASSES}>{topHeading}</p>
					<h1 className={MAIN_HEADING_CLASSES}>{heading}</h1>
					{/* <h2 className={SUB_HEADING_CLASSES}>{subHeading}</h2> */}
				</motion.div>

				{/* Links Section */}
				<div className='w-full space-y-4 mt-12 '>
				<p className='text-lg italic text-center'>Select Your Area</p>
					<motion.div
						className='grid gap-6 md:flex md:gap-4 '
						initial={{ opacity: 0, scale: 0.95 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 1, delay: 0.5 }}
					>
						
						{links.map((link, index) => (
							<Link key={index} href={`/${link.slug}`} className='md:w-1/2'>
								<span
									className={`transition duration-700 hover:scale-95 block text-center p-3 lg:p-4 w-full text-lg lg:text-2xl  rounded-sm font-bold ${
										index === 0
											? 'bg-light text-dark hover:bg-tertiary/0 hover:text-tertiary hover:border' // First link
											: 'text-tertiary border border-tertiary hover:border-tertiary/0  hover:bg-light hover:text-dark' // Other links
									}`}
								>
									{link.title}
								</span>
							</Link>
						))}
					</motion.div>
					
				</div>
			</div>
		</div>
	);
};

export default LandingHero;
