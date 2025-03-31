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
	'relative py-24 lg:py-36  mt-20 lg:mt-28 overflow-hidden bg-dark from-dark via-dark/95 to-dark text-light grid place-items-center';
const INNER_CONTAINER_CLASSES =
	'relative z-10 flex flex-col justify-center items-center h-full max-w-7xl px-2 mx-auto text-center lg:text-start  ';
const HEADING_CLASSES = 'grid gap-4 lg:space-y-2 ';
const TOP_HEADING_CLASSES =
	'text-lg lg:text-2xl font-light uppercase tracking-widest text-tertiary';
const MAIN_HEADING_CLASSES =
	'uppercase text-5xl lg:text-7xl font-bold tracking-wider font-heading  ';
const SUB_HEADING_CLASSES = 'text-lg lg:text-2xl text-light text-center';

// Component
const AreaLandingHero = ({ heading, subHeading, topHeading }) => {
	return (
		<div className={CONTAINER_CLASSES}>
			{/* Background Lines */}
			<div className='absolute inset-0 opacity-5 pointer-events-none'>
				{generateLines(27)}
			</div>

			{/* Hero Content */}
			<motion.div
				className={INNER_CONTAINER_CLASSES}
				initial='hidden'
				animate='visible'
				variants={{
					visible: { transition: { staggerChildren: 0.3 } },
				}}
			>
				<div className={HEADING_CLASSES}>
					<motion.h1
						className={MAIN_HEADING_CLASSES}
						variants={textVariants}
						transition={{ duration: 1 }}
					>
					<span>{heading} </span>
					<br className="sm:hidden" />
				
					<span >Web Design</span>
					</motion.h1>
					<motion.p
						className={TOP_HEADING_CLASSES}
						variants={textVariants}
						transition={{ duration: 0.8 }}
					>
						{topHeading}
					</motion.p>

					<motion.div variants={textVariants} transition={{ duration: 1.4 }}>
						<div className='w-full grid md:grid-cols-2 gap-4 lg:gap-8 mt-8'>
							<Link
								href='/contact-latz-web-design'
								className='w-full rounded-sm mx-auto bg-tertiary text-dark py-3 lg:py-3 grid place-items-center uppercase lg:text-2xl  font-bold shdow-lg shadow-tertiary/30 hover:scale-95 transition duration-500'
							>
								<motion.span
									className=''
									whileHover='hover'
									variants={buttonHover}
								>
									Get Started Now
								</motion.span>
							</Link>

							<Link
								href='/free-business-report'
								className='w-full mx-auto border border-tertiary/20 text-tertiary0 rounded-sm py-3 lg:py-3 grid uppercase lg:text-2xl  place-items-center shadow shadow-tertiary/20 hover:shadow-tertiary/50 hover:border-tertiary/50 transition duration-500 '
							>
								<motion.span
									className=''
									whileHover='hover'
									variants={buttonHover}
								>
									Claim Your Free Report!
								</motion.span>
							</Link>
						</div>
					</motion.div>
					<div className='pt-4'>
						{' '}
						<motion.h2
							className={SUB_HEADING_CLASSES}
							variants={textVariants}
							transition={{ duration: 1.2 }}
						>
							{subHeading}
						</motion.h2>
					</div>

					{/* <ScrollIndicator /> */}
				</div>
			</motion.div>
		</div>
	);
};

export default AreaLandingHero;
