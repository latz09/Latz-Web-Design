'use client';
import { motion } from 'framer-motion';
import React from 'react';
import LandingBackground from '../utils/animations/LandingBackground';
import ScrollIndicator from '../utils/animations/ScrollIndicator';
import Link from 'next/link';

// Function to generate random line properties
const generateRandomLineProperties = () => ({
	x: `${Math.random() * 100}vw`,
	y: `${Math.random() * 100}vh`,
	length: `${Math.random() * 500 + 150}px`,
	delay: Math.random() * 5,
	direction: Math.random() > 0.5 ? 'horizontal' : 'vertical',
});

// Generate lines (keep original logic)
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

// Animation Variants
const textVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: { opacity: 1, y: 0 },
};

const buttonHover = {
	hover: { scale: 1.05, transition: { type: 'spring', stiffness: 300 } },
};

// Constants for repeated class names
const CONTAINER_CLASSES =
	'relative h-[90vh] xl:h-[100vh] overflow-hidden bg-dark text-light';
const INNER_CONTAINER_CLASSES =
	'relative z-10 flex flex-col justify-center items-center h-full max-w-5xl px-4 mx-auto text-center';
const HEADING_CLASSES = 'grid gap-4 lg:space-y-4';
const TOP_HEADING_CLASSES =
	'text-lg lg:text-2xl font-light uppercase tracking-widest text-tertiary';
const MAIN_HEADING_CLASSES =
	'text-3xl lg:text-7xl text-center font-extrabold text-white tracking-wide';
const SUB_HEADING_CLASSES = 'text-md lg:text-2xl text-light/80';
const BUTTON_CLASSES =
	'transition duration-700 block text-center p-3 lg:p-4 lg:w-1/2 mx-auto text-lg lg:text-2xl rounded-full font-bold bg-tertiary text-dark hover:bg-tertiary/0 hover:text-tertiary hover:border';

// Component
const AreaLandingHero = ({ heading, subHeading, topHeading }) => {
	return (
		<div className={CONTAINER_CLASSES}>
			{/* Background Lines */}
			<div className="absolute inset-0 opacity-20 pointer-events-none">
				{generateLines(20)}
			</div>

			{/* Hero Content */}
			<motion.div
				className={INNER_CONTAINER_CLASSES}
				initial="hidden"
				animate="visible"
				variants={{
					visible: { transition: { staggerChildren: 0.3 } },
				}}
			>
				<div className={HEADING_CLASSES}>
					<motion.p
						className={TOP_HEADING_CLASSES}
						variants={textVariants}
						transition={{ duration: 0.8 }}
					>
						{topHeading}
					</motion.p>
					<motion.h1
						className={MAIN_HEADING_CLASSES}
						variants={textVariants}
						transition={{ duration: 1 }}
					>
						{heading}
					</motion.h1>
					<motion.h2
						className={SUB_HEADING_CLASSES}
						variants={textVariants}
						transition={{ duration: 1.2 }}
					>
						{subHeading}
					</motion.h2>
					<motion.div
						variants={textVariants}
						transition={{ duration: 1.4 }}
					>
						<Link href="/contact-latz-web-design">
							<motion.span
								className={BUTTON_CLASSES}
								whileHover="hover"
								variants={buttonHover}
							>
								Get Started Now
							</motion.span>
						</Link>
					</motion.div>

					<ScrollIndicator />
				</div>
			</motion.div>
		</div>
	);
};

export default AreaLandingHero;
