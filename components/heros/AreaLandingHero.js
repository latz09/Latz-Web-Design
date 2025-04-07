'use client';
import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import LandingBlob from '../utils/animations/LandingBlob';
import Link from 'next/link';

export function preventWidow(text) {
	const words = text.trim().split(' ');
	if (words.length < 2) return text;
	const lastTwo = words.splice(-2, 2).join('\u00A0'); // non-breaking space
	return [...words, lastTwo].join(' ');
}

const CONTAINER_CLASSES =
	'relative py-24 lg:py-36 mt-20 lg:mt-28 overflow-hidden bg-dark text-light grid place-items-center';
const INNER_CONTAINER_CLASSES =
	'relative z-10 flex flex-col justify-center items-center h-full max-w-7xl px-2 mx-auto text-center';
const HEADING_CLASSES = 'grid gap-4 lg:space-y-2';
const TOP_HEADING_CLASSES =
	'text-lg lg:text-2xl font-light uppercase tracking-widest text-tertiary';
const MAIN_HEADING_CLASSES =
	'uppercase text-4xl sm:text-5xl lg:text-7xl font-bold tracking-wider font-heading';
const SUB_HEADING_CLASSES = 'text-lg lg:text-2xl text-light text-center';

const buttonHover = {
	hover: { scale: 1.05, transition: { type: 'spring', stiffness: 300 } },
};

const textVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: { opacity: 1, y: 0 },
};

const AreaLandingHero = ({ heading, subHeading, topHeading }) => {
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
			if (windowWidth < 640) return `${80 + Math.random() * 30}px`;
			if (windowWidth < 1024) return `${120 + Math.random() * 60}px`;
			return `${200 + Math.random() * 100}px`;
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
			{/* Background */}
			<>
				<motion.div
					className='absolute inset-0 z-0 pointer-events-none'
					style={{
						background: 'linear-gradient(120deg, #1d1d1d, #252525, #2c2c2c)',
						backgroundSize: '600% 600%',
					}}
					animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
					transition={{ duration: 40, ease: 'easeInOut', repeat: Infinity }}
				/>
				<div className='absolute inset-0 z-0 bg-gradient-to-b from-dark via-dark/90 to-dark pointer-events-none'>
					<div className='absolute inset-0 opacity-30'>{blobs}</div>
				</div>
			</>

			{/* Content */}
			<motion.div
				className={INNER_CONTAINER_CLASSES}
				initial='hidden'
				animate='visible'
				variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
			>
				<div className={HEADING_CLASSES}>
					<div className="pb-2 lg:pb-4">
						<motion.h1
							className={MAIN_HEADING_CLASSES}
							variants={textVariants}
							transition={{ duration: 1 }}
						>
							<span>{heading} </span>
							<br className='sm:hidden' />
							<span>Web Design</span>
						</motion.h1>
						<motion.p
							className='pb-2 text-xl lg:text-2xl italic tracking-widest text-primary text-center'
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 1.2, delay: 0.5 }}
						>
							& Development
						</motion.p>
					</div>
				</div>

				<motion.p
					className={TOP_HEADING_CLASSES}
					variants={textVariants}
					transition={{ duration: 0.8 }}
				>
					{topHeading}
				</motion.p>

				<motion.div
					variants={textVariants}
					transition={{ duration: 1.4 }}
					className='w-full'
				>
					<div className='w-full grid md:grid-cols-2 gap-4 lg:gap-8 mt-8 '>
						<Link
							href='/contact-latz-web-design'
							className='w-full rounded-sm mx-auto bg-tertiary text-dark py-3 lg:py-3 grid place-items-center uppercase lg:text-2xl font-bold shadow-lg shadow-tertiary/30 hover:scale-95 transition duration-500'
						>
							<motion.span whileHover='hover' variants={buttonHover}>
								Get Started Now
							</motion.span>
						</Link>

						<Link
							href='/free-business-report'
							className='w-full mx-auto border border-tertiary/20 text-tertiary rounded-sm py-3 lg:py-3 grid uppercase lg:text-2xl place-items-center shadow shadow-tertiary/20 hover:shadow-tertiary/50 hover:border-tertiary/50 transition duration-500'
						>
							<motion.span whileHover='hover' variants={buttonHover}>
								Claim Your Free Report!
							</motion.span>
						</Link>
					</div>
				</motion.div>

				<div className='pt-6 lg:pt-8'>
					<motion.h2
						className={SUB_HEADING_CLASSES}
						variants={textVariants}
						transition={{ duration: 1.2 }}
					>
						{preventWidow(subHeading)}
					</motion.h2>
				</div>
			</motion.div>
		</div>
	);
};

export default AreaLandingHero;
