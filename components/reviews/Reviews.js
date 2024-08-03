import Image from 'next/image';
import AnimateUp from '../utils/animations/AnimateUp';

const Reviews = ({ data }) => {
	return (
		<div className='grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-4 max-w-7xl mx-auto p-4'>
			{data.map((review, index) => {
				return (
					
						<article 
						key={index}
						className='bg-prmary/5 grid gap-4 p-6 h-full '>
						
							<div className='flex flex-col justify-between h-full'>
								{/* Logo and Website Name */}
								<div className='flex flex-col justify-start items-cente mb-4'>
									<div className='flex justify-center lg:justify-start items-center h-20'>
										<Image
											src={review.logo}
											alt={`${review.websiteName} Logo`}
											width={125} // Adjust the width as needed
											height={75} // Adjust the height as needed
											className='grayscale filter contrast-200 pb-6 mx-8'
											objectFit='contain'
											objectPosition='center'
										/>
									</div>
									<p className=' text-lg font-black tracking-wider pt-6 border-t border-dark/30 text-prmary'>
										{review.websiteName}
									</p>
								</div>

								{/* Review Text */}
								<div className='flex-1 flex items-center justify-center'>
									<p className='lg:font-semibold text-dark/80 leading-7'>
										{`"${review.reviewText}"`}
									</p>
								</div>

								{/* Reviewer Name and Title */}
								<div className='flex flex-col  mt-8 uppercase opacity-70'>
									<h3 className=' font-bold '>{review.reviewerName},</h3>
									<p className='text-sm italic mt-2'>{review.reviewerTitle}</p>
								</div>
							</div>
							
						</article>
				);
			})}
		</div>
	);
};

export default Reviews;
