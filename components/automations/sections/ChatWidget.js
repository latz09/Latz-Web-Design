import dynamic from 'next/dynamic';
import { MainHeading } from '@/components/utils/Typography';
const VideoPlayer = dynamic(() => import('@/components/utils/VideoPlayer'), {
    ssr: false,
  });

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
		<section className='bg-dark text-light py-20 '>
			<div className='max-w-5xl mx-auto space-y-6 text-center px-6 lg:px-12'>
				<MainHeading title={heading} theme='text-tertiary' />
				<p className='text-lg lg:text-xl text-light/90 leading-relaxed'>
					{subheading}
				</p>
			</div>
			<div className='md:w-2/3 2xl:w-1/2 mx-auto'>
				<VideoPlayer videoData={videoVisuals[0]} />
			</div>

			{/* Featured Heading */}
			{featuredHeading && (
				<div className='max-w-4xl mx-auto mt-16 text-center px-6 lg:px-12'>
					<h3 className='text-xl lg:text-2xl font-bold text-tertiary'>
						{featuredHeading}
					</h3>
				</div>
			)}

			{/* Features Section */}
			{features && features.length > 0 && (
				<div className='max-w-6xl mx-auto mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 px-6 lg:px-12'>
					{features.map((feature, index) => (
						<div
							key={index}
							className='flex flex-col items-center text-center p-6 bg-light rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300'
						>
							<h4 className='text-lg lg:text-xl font-semibold mb-3 text-primary'>
								{feature.title}
							</h4>
							<p className='text-sm lg:text-base text-dark/70 leading-relaxed'>
								{feature.description}
							</p>
						</div>
					))}
				</div>
			)}

			{/* Call to Action */}
			{cta && (
				<div className='text-center mt-16 px-6 lg:px-12'>
					<a
						href={ctaLink || '#'}
						className='inline-block px-8 py-4 bg-tertiary text-dark font-semibold text-lg rounded-md shadow-md hover:bg-tertiary/90 transition-colors duration-300'
					>
						{cta}
					</a>
				</div>
			)}
		</section>
	);
};

export default ChatWidget;
