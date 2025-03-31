import dynamic from 'next/dynamic';
import { MainHeading, TopHeading } from '@/components/utils/Typography';
import React from 'react';

// Import specific icons
import { FaPalette, FaRobot, FaRegAddressCard, FaWrench } from 'react-icons/fa';
import Link from 'next/link';
import AnimateUp from '@/components/utils/animations/AnimateUp';

const VideoPlayer = dynamic(() => import('@/components/utils/VideoPlayer'), {
	ssr: false,
});

const iconsMap = {
	FaPalette: FaPalette,
	FaRobot: FaRobot,
	FaRegAddressCard: FaRegAddressCard,
	FaWrench: FaWrench,
};

const ChatWidget = ({ data }) => {
	const {
		heading,
		subheading,
		featuredHeading,
		features,
		cta,
		ctaLink,
		videoVisuals,
	} = data;

	return (
		<section className='bg-dark text-light py-24 lg:py-32'>
			<div className='max-w-5xl mx-auto space-y-6 text-center px-6 lg:px-12 pb-8'>
				<MainHeading title={heading} theme='text-tertiary' />
				<div className='text-lg lg:text-xl text-light/90 leading-relaxed'>
					{subheading.split('.').map((sentence, index, array) => (
						<p
							key={index}
							className={`mb-2 ${
								index === array.length - 1 ? ' tracking-wide pt-8 text-tertiary mb-0' : 'text-xl lg:text-2xl leading-8 lg:leading-9'
							}`}
						>
							{sentence.trim()}
						</p>
					))}
				</div>
			</div>
			<div className='md:w-2/3 2xl:w-1/2 mx-auto'>
				<VideoPlayer videoData={videoVisuals[0]} />
			</div>

			{/* Featured Heading */}
			{featuredHeading && (
				<div className='max-w-4xl mx-auto mt-16  text-center px-6 lg:px-12'>
					<h3 className='text-xl lg:text-2xl font-bold text-light'>
						{featuredHeading}
					</h3>
				</div>
			)}

			{/* Features Section */}
			{/* {features && features.length > 0 && (
				<div className='max-w-6xl mx-auto mt-12 grid gap-12 lg:gap-8 lg:grid-cols-2 place-items-center '>
					{features.map((feature, index) => {
						const IconComponent = iconsMap[feature.icon]; // Map icon names to components
						return (
							<AnimateUp key={index}>
								<div className='flex flex-col items-center text-center shadow-md shadow-light/30 bg-light  '>
									<div className='flex items-center justify-around bg-dark text-light py-4 w-full border border-tertiary/10 '>
										{IconComponent && (
											<div className='t text-4xl mb-4 text-tertiary  '>
												<IconComponent />
											</div>
										)}
										<TopHeading title={feature.title} theme=' font-bold mb-2 text-tertiary' />
									</div>
									<p className='lg:text-lg font-bold text-dark leading-relaxed px-6 py-10 lg:py-12 bg-gradient-to-l from-light via-primary/10 to-light rounded-b '>
										{feature.description}
									</p>
								</div>
							</AnimateUp>
						);
					})}
				</div>
			)} */}

			{/* Call to Action */}
			{cta && (
				<div className='text-center mt-16 px-6 lg:px-12'>
					<Link href={'/custom-ai-assistant'}>
						<span
							href={ctaLink || '#'}
							className='inline-block px-8 py-3 bg-tertiary text-dark font-semibold border border-light/0 lg:text-lg rounded-md shadow-md hover:border-light/70 hover:bg-dark hover:text-light hover:scale-95 transition duration-700'
						>
							{cta}
						</span>
					</Link>
				</div>
			)}
		</section>
	);
};

export default ChatWidget;
