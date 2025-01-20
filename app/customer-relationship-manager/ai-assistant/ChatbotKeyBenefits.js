'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MainHeading, TopHeading } from '@/components/utils/Typography'; // Ensure this component exists
import AnimatedCheck from '@/components/utils/animations/AnimatedCheck'; // Adjust the path as necessary

const ChatbotKeyBenefits = ({ data }) => {
	

	return (
		<section className=' '>
			<div className='max-w-7xl mx-auto px-4'>
				{/* Section Header */}
				<div className='text-center mb-16'>
					<MainHeading title='Key Benefits' theme='text-dark' />
					<p className='mt-2 text-gray-600 text-lg'>
						Discover the advantages our AI chat assistant brings to your
						business.
					</p>
				</div>

				{/* Benefits List */}
				<div className='space-y-8 mx-auto max-w-3xl grid place-items-center'>
					{data.map((benefit, index) => (
						<motion.div
							key={index}
							className='flex items-start'
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.4, delay: index * 0.2 }}
						>
							{/* Animated Check */}

							{/* Benefit Content */}
							<div className='text-center'>
								<div className='flex-shrink-0'>
									<AnimatedCheck />
								</div>
							
                                <TopHeading title={benefit.benefitTitle} theme='text-dark' />
								<p className='mt-2 text-gray-600'>
									{benefit.benefitDescription}
								</p>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default ChatbotKeyBenefits;
