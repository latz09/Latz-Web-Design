'use client'; // Required for client-side components & Framer Motion in Next.js 13+
import { MdClose } from 'react-icons/md';
import { FaArrowCircleRight } from 'react-icons/fa';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Description, MainHeading, TopHeading } from '../utils/Typography';
import Image from 'next/image';
import SnapshotFormRequest from './SnapshotFormRequest';
import Link from 'next/link';

const SnapshotPopup = ({ data }) => {
	// Control modal open/close
	const [isOpen, setIsOpen] = useState(false); // Start as closed

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsOpen(true);
		}, 7000); // 7 seconds delay

		return () => clearTimeout(timer); // Clean up the timer
	}, []);

    useEffect(() => {
        if (isOpen) {
          document.body.classList.add('no-scroll');
        } else {
          document.body.classList.remove('no-scroll');
        }
      
        // Cleanup function to remove the class
        return () => {
          document.body.classList.remove('no-scroll');
        };
      }, [isOpen]);

	if (!data) return null;

	const { headline, subheadline, scrollNote, imageUrl } = data;

	return (
		<AnimatePresence>
			{isOpen && (
				<>
					{/* Overlay */}
					<motion.div
						className='fixed inset-0 z-[999999] bg-dark/60 backdrop-blur-sm '
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						onClick={() => setIsOpen(false)}
					/>

					{/* Modal Container */}
					<motion.div
						className='fixed inset-0 z-[9999999] flex items-center justify-center p-4 '
						initial={{ opacity: 0, y: 50 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: 2000 }}
						transition={{ duration: 0.9 }}
						
					>
						<div className='relative w-full max-w-4xl max-h-[90vh] rounded-md bg-light text-dark shadow-lg overflow-y-auto scrollbar-hide '>
							{/* Modal Content */}
							<div className='grid place-items-center gap-4 pb-4 '>
								<div className='grid gap-4 bg-gradient-to-l from-tertiary via-tertiary/60 to-tertiary text-dark p-4 text-center '>
									<div className='place-self-end'>
										<button
											className='text-2xl p-2 rounded-full bg-dark shadow-lg shadow-dark/30 text-light '
											onClick={() => setIsOpen(false)}
										>
											<MdClose />
										</button>
									</div>
									<MainHeading title={headline} />
									<TopHeading title={subheadline} theme='pb-4' />
								</div>
								<div className='w-5/6 lg:w-2/3 mx-auto shadow-lg shadow-primary/30 bg-primary/20 p-2 my-8 '>
									<Image
										src={imageUrl}
										alt={headline}
										layout='responsive'
										width={1200}
										height={800}
									/>
								</div>
								<div className='mb-2 w-5/6 lg:w-3/4'>
									<SnapshotFormRequest />
								</div>
								<div className='pb-6'>
									<Link href={'/free-business-report'}>
										<div className='p-4 font-bold flex items-center gap-2 text-primary'>
											{scrollNote}
											<span>
												<FaArrowCircleRight />{' '}
											</span>
										</div>
									</Link>
								</div>
							</div>
						</div>
					</motion.div>
				</>
			)}
		</AnimatePresence>
	);
};

export default SnapshotPopup;
