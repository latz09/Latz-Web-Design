'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { MainHeading } from '@/components/utils/Typography';

const FAQs = ({ data }) => {
	const [openIndex, setOpenIndex] = useState(null);

	const toggleFAQ = (index) => {
		setOpenIndex(openIndex === index ? null : index);
	};
	console.log(data);

	return (
		<section className='py-24 bg-dark'>
			<div className='max-w-7xl mx-auto px-4'>
				{/* Section Header */}
				<div className='text-center mb-16'>
					<MainHeading
						title='Frequently Asked Questions'
						theme='text-tertiary'
					/>
					<p className='mt-3 text-light italic text-lg'>
						Find answers to the most common questions about our AI assistant.
					</p>
				</div>

				{/* FAQs List */}
				<div className='space-y-6 max-w-3xl mx-auto'>
					{data.map((faq, index) => (
						<div
							key={index}
							className='bg-light shadow-md shadow-light/30 rounded-md overflow-hidden'
						>
							{/* FAQ Question */}
							<button
								className='w-full px-6 py-4 flex  justify-between items-center gap-4 focus:outline-none'
								onClick={() => toggleFAQ(index)}
								aria-expanded={openIndex === index}
								aria-controls={`faq-content-${index}`}
							>
								<span className='md:text-lg font-medium text-dark'>
									{faq.question}
								</span>
								<span className='text-primary text-sm'>
									{openIndex === index ? (
										<FaMinus  />
									) : (
										<FaPlus  />
									)}
								</span>
							</button>

							{/* FAQ Answer (Animated) */}
							<AnimatePresence initial={false}>
								{openIndex === index && (
									<motion.div
										id={`faq-content-${index}`}
										// We hide overflow to prevent text from spilling out during height animation
										style={{ overflow: 'hidden' }}
										initial={{ height: 0, opacity: 0 }}
										animate={{ height: 'auto', opacity: 1 }}
										exit={{ height: 0, opacity: 0 }}
										transition={{ duration: 0.4, ease: 'easeInOut' }}
									>
										<div className='px-6 py-4 text-gray-700'>
											<p className='text-base'>{faq.answer}</p>
										</div>
									</motion.div>
								)}
							</AnimatePresence>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default FAQs;
