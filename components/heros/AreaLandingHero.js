'use client';
import { motion } from 'framer-motion';
import React from 'react';
import LandingBackground from '../utils/animations/LandingBackground';
import ScrollIndicator from '../utils/animations/ScrollIndicator';
import Link from 'next/link';
import GetStartedNow from '../automations/design-utils/GetStartedNow';
import FreeEstimate from '../utils/FreeEstimate';
import Image from 'next/image';

// Function to generate random line properties
const generateRandomLineProperties = () => ({
	x: `${Math.random() * 100}vw`,
	y: `${Math.random() * 100}vh`,
	length: `${Math.random() * 500 + 150}px`, // Line length
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
	'relative h-[90vh] xl:h-[100vh]  overflow-hidden bg-dark text-light';
const INNER_CONTAINER_CLASSES =
	'relative z-10 flex flex-col justify-center items-center h-full max-w-5xl px-4 mx-auto text-center';
const HEADING_CLASSES = 'grid gap-4 lg:space-y-4';
const TOP_HEADING_CLASSES =
	'text-lg lg:text-2xl font-light uppercase tracking-widest text-tertiary';
const MAIN_HEADING_CLASSES =
	'text-4xl lg:text-7xl text-center font-extrabold text-white leading-tight';
const SUB_HEADING_CLASSES = 'text-md lg:text-2xl text-light/80';
const BUTTON_CLASSES = 'transition duration-700 hover:scale-95 block text-center p-3 lg:p-4 lg:w-1/2 mx-auto text-lg lg:text-2xl  rounded-full font-bold bg-tertiary text-dark hover:bg-tertiary/0 hover:text-tertiary hover:border';

// Component
const AreaLandingHero = ({ heading, subHeading, topHeading, image }) => {
	return (
		<div className={CONTAINER_CLASSES}>
			{/* Animated Lines Background */}
			<div className='absolute inset-0 opacity-20 pointer-events-none'>
				{generateLines(20)}
			</div>

			{/* Hero Content */}
			<div className={INNER_CONTAINER_CLASSES}>
				<div className={HEADING_CLASSES}>
					<p className={TOP_HEADING_CLASSES}>{topHeading}</p>
					<h1 className={MAIN_HEADING_CLASSES}>{heading}</h1>
					<h2 className={SUB_HEADING_CLASSES}>{subHeading}</h2>
					<div>
						<Link href='/contact-latz-web-design' className=''>
							<span className={BUTTON_CLASSES}>
								Get Started Now
							</span>
						</Link>
						
					</div>
					
					<ScrollIndicator />
				</div>
			</div>
		</div>
	);
};

export default AreaLandingHero;
