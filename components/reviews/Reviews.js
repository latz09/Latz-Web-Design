'use client';

import Image from 'next/image';
import { FaChevronRight } from 'react-icons/fa';
import { MdClose } from 'react-icons/md';

import AnimateUp from '../utils/animations/AnimateUp';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Reviews = ({ data }) => {
	const [selectedReview, setSelectedReview] = useState(null);
	useEffect(() => {
		if (selectedReview) {
			document.body.classList.add('no-scroll');
		} else {
			document.body.classList.remove('no-scroll');
		}

		return () => {
			document.body.classList.remove('no-scroll'); // cleanup just in case
		};
	}, [selectedReview]);

	return (
		<>
			<section className='max-w-7xl mx-auto px-4 py-16'>
				<div className='grid lg:grid-cols-2 place-items-center gap-12'>
					{data.map((review, index) => (
						<AnimateUp key={index}>
							<article
								onClick={() => setSelectedReview(review)}
								className='cursor-pointer py-8  p-2 md:p-5 flex flex-col items-center gap-8'
							>
								{review.ownerImage && (
									<div className='relative overflow-hidden flex-shrink-0 shadow-md rounded-lg'>
										<Image
											src={review.ownerImage}
											alt={`${review.reviewerName} Photo`}
											width={160}
											height={160}
											className='object-cover rounded-lg'
										/>
									</div>
								)}

								<div className='flex-1 text-center md:text-left space-y-4 group'>
									<blockquote className='text-dark/80 text-xl lg:text-2xl leading-8 lg:leading-9 line-clamp-2 font-bold group-hover:scale-95 group-hover:opacity-80 transition duration-700'>
										“{review.reviewText}”
									</blockquote>
									<div className='text-center p-4 flex items-center justify-center gap-2'>
										<span className=' font-semibold group-hover:text-primary scale-110 group-hover:translate-x-4 transiton duration-700'>
											Read the Full Review
										</span>
									</div>

									<div>
										<p className='text-lg font-semibold text-dark'>
											{review.reviewerName}
										</p>
										<p className='mt-2 text-primary font-medium tracking-wide'>
											{review.websiteName}
										</p>
										<p className='text-sm italic text-gray-500'>
											{review.reviewerTitle}
										</p>
									</div>

									<div className='pt-4 flex items-center justify-self-center lg:justify-self-end gap-4'>
										<Image
											src={review.logo}
											alt={`${review.websiteName} Logo`}
											width={100}
											height={60}
											className='object-contain grayscale contrast-200'
										/>
									</div>
								</div>
							</article>
						</AnimateUp>
					))}
				</div>
			</section>

			{/* Modal */}
			<AnimatePresence>
				{selectedReview && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.3 }}
						className='fixed inset-0 z-[99999] bg-dark/60 flex items-center justify-center px-4'
						onClick={() => setSelectedReview(null)}
					>
						<motion.div
							initial={{ y: 50, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							exit={{ y: 50, opacity: 0 }}
							transition={{ duration: 0.4, type: 'spring' }}
							onClick={(e) => e.stopPropagation()}
							className='max-h-[90vh] overflow-y-auto scrollbar-hide w-full max-w-3xl bg-dark text-light rounded-lg shadow-xl p-4 md:p-10 text-center md:text-left space-y-6 relative'
						>
							<button
								onClick={() => setSelectedReview(null)}
								className='absolute top-4 right-4 text-sm text-gray-500 hover:text-black'
							>
								<MdClose size={24} />
							</button>

							{selectedReview.ownerImage && (
								<div className=' grid place-items-center relative overflow-hidden flex-shrink-0 shadow-md'>
									<Image
										src={selectedReview.ownerImage}
										alt={`${selectedReview.reviewerName} Photo`}
										width={160}
										height={160}
										className='object-cover rounded-2xl'
									/>
								</div>
							)}

							<blockquote className='text-light text-xl leading-9 space-y-4'>
								{selectedReview.reviewText.map((paragraph, index) => (
									<p key={index}>{paragraph}</p>
								))}
							</blockquote>

							<div>
								<p className='text-xl font-semibold text-light'>
									{selectedReview.reviewerName}
								</p>
								<p className='text-primary font-medium tracking-wide'>
									{selectedReview.websiteName}
								</p>
								<p className='text-sm italic text-gray-500'>
									{selectedReview.reviewerTitle}
								</p>
							</div>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
};

export default Reviews;
