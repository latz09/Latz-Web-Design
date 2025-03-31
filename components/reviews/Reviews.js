import Image from 'next/image';
import AnimateUp from '../utils/animations/AnimateUp';
import { Description } from '../utils/Typography';

const Reviews = ({ data }) => {
	return (
		<section className='max-w-7xl mx-auto px-4 py-16'>
			<div className='grid lg:grid-cols-2 place-items-center gap-12 '>
				{data.map((review, index) => (
					<AnimateUp key={index}>
						<article className='py-8 bg-dark/5 rounded-sm shadow-sm shadow-primary/30 hover:shadow-lg transition-transform hover:scale-[1.01] duration-500 p-3 md:p-5 flex flex-col items-center gap-8'>
							{/* Owner Image if available */}
							{review.ownerImage && (
								<div className='relative  overflow-hidden flex-shrink-0 shadow-md'>
									<Image
										src={review.ownerImage}
										alt={`${review.reviewerName} Photo`}
										width={160}
										height={160}
										className='object-cover'
									/>
								</div>
							)}

							{/* Review Content */}
							<div className='flex-1 text-center md:text-left space-y-4'>
								<blockquote className='text-dark text-lg leading-9 '>
									“{review.reviewText}”
								</blockquote>

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

								{/* Logo and Website Name */}
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
	);
};

export default Reviews;
