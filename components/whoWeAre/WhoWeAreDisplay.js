/* ===========================
   pages/who-we-are/WhoWeAreDisplay.jsx
=========================== */

'use client';

import { motion } from 'framer-motion';
import { Description, MainHeading } from '@/components/utils/Typography';
import Link from 'next/link';
import AnimateUp, { FadeIn } from '../utils/animations/AnimateUp';

/*-----------------------------------------------
|   Child Components
-----------------------------------------------*/
const WhoWeAreDisplay = ({ data }) => {
	return (
		<div className='bg-gradient-to-b from-light via-light/95 to-light'>
			<HeroSection
				mainHeading={data.mainHeading}
				subHeading={data.subHeading}
			/>

			<section className='space-y-16 py-16'>
				{data.paragraphs?.map((paragraph, index) => (
					<AnimateUp key={index}>
						<Paragraph
							key={index}
							heading={paragraph.heading}
							text={paragraph.text}
							imageUrl={paragraph.imageUrl}
						/>
					</AnimateUp>
				))}
				<CallToAction />
			</section>
		</div>
	);
};

export default WhoWeAreDisplay;

/*-----------------------------------------------
|   Hero Section (slight fade-in)
-----------------------------------------------*/
const HeroSection = ({ mainHeading, subHeading }) => {
	return (
		<motion.section
			className='relative text-center bg-gradient-to-b from-gray-900 to-gray-800 pt-16'
			initial={{ opacity: 0, y: 30 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.8, ease: 'easeOut' }}
		>
			<div className='container mx-auto max-w-5xl px-6'>
				{mainHeading && (
					<MainHeading
						title={mainHeading}
						theme='text-dark/60 italic font-bold '
					/>
				)}
				{subHeading && (
					<p className='text-light/80 text-xl lg:text-2xl max-w-2xl mx-auto leading-relaxed'>
						{subHeading}
					</p>
				)}
			</div>
		</motion.section>
	);
};

/*-----------------------------------------------
|   Paragraph with Parallax Background
-----------------------------------------------*/
const Paragraph = ({ heading, text, imageUrl }) => {
	// If there's no image, fall back to a simple text block
	if (!imageUrl) {
		return (
			<div className='container mx-auto max-w-5xl px-6'>
				<div className='text-center py-8'>
					{heading && (
						<MainHeading
							title={heading}
							theme='text-primary font-semibold mb-4'
						/>
					)}
					{text && (
						<p className='text-lg md:text-xl lg:text-2xl  leading-relaxed'>
							{text}
						</p>
					)}
				</div>
			</div>
		);
	}

	// Otherwise, use the parallax background style
	return (
		<div className='relative w-full h-[500px] md:h-[600px] overflow-hidden flex items-center justify-center mx-auto max-w-5xl'>
			{/* Parallax Background */}
			<motion.div
				className='absolute top-0 left-0 w-full h-full bg-cover bg-center shadow-lg shadow-primary'
				style={{ backgroundImage: `url(${imageUrl})` }}
				initial={{ backgroundPositionY: '0%' }}
				whileInView={{ backgroundPositionY: '30%' }}
				transition={{ duration: 1, ease: 'easeInOut' }}
				viewport={{ once: true }}
			/>

			{/* Overlay */}
			<div className='absolute inset-0 bg-gradient-to-b from-dark/30 via-dark/60 to-dark/30' />

			{/* Text Content */}
			<motion.div
				className='relative z-10 max-w-2xl text-center text-light px-4'
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6, ease: 'easeInOut' }}
				viewport={{ once: true }}
			>
				{heading && (
					<MainHeading
						title={heading}
						theme='text-tertiary font-semibold mb-4'
					/>
				)}
				{text && (
					<p className='text-lg md:text-xl lg:text-2xl leading-relaxed'>
						{text}
					</p>
				)}
			</motion.div>
		</div>
	);
};

/*-----------------------------------------------
|   Call to Action
-----------------------------------------------*/
const CallToAction = () => {
	return (
		<div className='grid place-items-center py-16'>
			<Link href='/lets-get-started'>
				<span className='inline-block px-8 py-3 bg-tertiary text-black font-semibold rounded-md shadow-md hover:bg-tertiary/90 hover:shadow-lg transition-all'>
					Get Started Now
				</span>
			</Link>
		</div>
	);
};
