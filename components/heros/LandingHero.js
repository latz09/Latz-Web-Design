'use client';
import { motion } from 'framer-motion';
import React from 'react';
import LandingBackground from '../utils/animations/LandingBackground';
import ScrollIndicator from '../utils/animations/ScrollIndicator';
import FreeEstimate from '../utils/FreeEstimate';

// Function to generate random line properties
const generateRandomLineProperties = () => ({
	x: `${Math.random() * 100}vw`,
	y: `${Math.random() * 100}vh`,
	length: `${Math.random() * 200 + 100}px`, // Line length
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
	'relative h-[90vh] xl:h-[100vh] overflow-hidden bg-dark ';
const INNER_CONTAINER_CLASSES =
	'relative z-10 text-light flex flex-col justify-center items-center h-full max-w-7xl mx-auto ';
const CONTENT_CLASSES =
	'lg:w-5/6 mx-auto grid gap-4 bg-dark/70 px-6 lg:px-8 py-2 lg:py-16 ';
const HEADING_CLASSES = 'grid gap-2';
const TOP_HEADING_CLASSES = 'text-lg lg:text-2xl text-tertiary';
const MAIN_HEADING_CLASSES = 'text-4xl lg:text-7xl font-bold';
const SUB_HEADING_CLASSES = 'text-lg lg:text-3xl';
const BUTTON_CONTAINER_CLASSES =
	'lg:text-xl mt-2 lg:mt-8 uppercase font-semibold flex justify-between items-center w-2/3';

const LandingHero = ({ image, heading, subHeading, topHeading }) => {
	return (
		<div className={CONTAINER_CLASSES}>
			{/* Animated Lines */}
			<div className='absolute inset-0 lg:inset-y-0 lg:right-0 lg:w-1/2'>
				{generateLines(15)}
			</div>

			<div className={INNER_CONTAINER_CLASSES}>
				<div className={CONTENT_CLASSES}>
					<div className={HEADING_CLASSES}>
						<p className={TOP_HEADING_CLASSES}>{topHeading}</p>
						<h1 className={MAIN_HEADING_CLASSES}>{heading}</h1>
					</div>
					<h2 className={SUB_HEADING_CLASSES}>{subHeading}</h2>
					<div className={BUTTON_CONTAINER_CLASSES}>
						<FreeEstimate />
					</div>
				</div>
				<ScrollIndicator />
			</div>
		</div>
	);
};

export default LandingHero;
