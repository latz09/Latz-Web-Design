'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MainHeading, TopHeading } from '@/components/utils/Typography';
import * as FaIcons from 'react-icons/fa'; // Import all Font Awesome icons
import FeaturesBanner from './FeaturesBanner';

const HowItWorks = ({ data, featuresData }) => {
	// Fallback icon if icon name is invalid
	const fallbackIcon = FaIcons.FaRobot;

	return (
		<section className='border-t border-primary/30 bg-gradient-to-b  from-primary/10 via-primary/5 to-primary/0 py-24'>
            {/* <FeaturesBanner data = {featuresData} /> */}
			<div className='max-w-7xl mx-auto px-4'>
				{/* Section Header */}
				<div className='text-center mb-16'>
					<MainHeading title='How It Works' theme='text-dark' />
					<p className='mt-2 text-gray-600 text-lg'>
						Step-by-step guide to getting your AI chatbot ready.
					</p>
				</div>

				{/* Steps Grid */}
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
					{data.map((step, index) => {
						// Dynamically resolve icon
						const IconComponent = FaIcons[step.icon] || fallbackIcon;

						return (
							<motion.div
								key={index}
								className='border border-dark/50 px-4 pt-12 pb-6 bg-gradient-to-l from-light via-dark/10 to-light shadow-lg rounded-md flex flex-col items-center justify-between text-center'
								initial={{ opacity: 0, y: 70 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.4, delay: index * 0.2 }}
							>
								{/* Step Number with Circle */}
                                
								<div className='flex items-center justify-center text-dark/60 italic text-6xl mb-4'>
									{index + 1}
								</div>
								{/* Step Title */}
                                
								<TopHeading
									title={step.stepTitle}
									theme='text-dark uppercase font-black mb-4'
								/>
								{/* Step Description */}
								<p className='text-dark/80'>{step.stepDescription}</p>
								{/* Step Icon */}
								<div className='mt-12 mb-4'>
									<IconComponent size={60} className='text-primary/30' />
								</div>
							</motion.div>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default HowItWorks;
