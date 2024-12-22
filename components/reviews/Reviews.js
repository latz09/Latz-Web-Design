import Image from 'next/image';
import AnimateUp from '../utils/animations/AnimateUp';

const Reviews = ({ data }) => {
	return (
		<div className="max-w-7xl mx-auto px-4 py-10">
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 place-items-center">
				{data.map((review, index) => (
					<AnimateUp key={index}>
						<article className="bg-tertiary/5 rounded-lg shadow-lg shadow-dark/30 px-6 lg:px-8 py-16 flex flex-col h-full transition-transform transform hover:scale-[1.02] duration-500 border border-primary/60">
							<div className="flex flex-col justify-between h-full">
								{/* Logo and Website Name */}
								<div className="mb-6 text-center lg:text-left">
									<div className="flex justify-center  items-center h-20 mb-4">
										<Image
											src={review.logo}
											alt={`${review.websiteName} Logo`}
											width={140}
											height={90}
											className="grayscale contrast-200 object-contain pb-4 "
										/>
									</div>
									<p className="text-prmary text-xl font-bold tracking-wide  pt-4">
										{review.websiteName}
									</p>
								</div>

								{/* Review Text */}
								<blockquote className="flex-1 flex items-center justify-center text-center lg:text-left  ">
									<p className="text-lg  text-dark leading-relaxed italic">
										“{review.reviewText}”
									</p>
								</blockquote>

								{/* Reviewer Name and Title */}
								<div className="mt-8 text-center lg:text-left">
									<h3 className="text-md font-bold uppercase text-gray-700">
										{review.reviewerName}
									</h3>
									<p className="text-sm italic text-gray-500 mt-1">
										{review.reviewerTitle}
									</p>
								</div>
							</div>
						</article>
					</AnimateUp>
				))}
			</div>
		</div>
	);
};

export default Reviews;
