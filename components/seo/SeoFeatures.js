import { FaArrowTrendUp } from 'react-icons/fa6';
import FreeEstimate from '../utils/FreeEstimate';
import { MainHeading, TopHeading } from '../utils/Typography';
import AnimateUp from '../utils/animations/AnimateUp';
import StepsAnimation from '../utils/animations/StepsAnimation';

const SeoFeatures = ({ features, heading }) => {
	return (
		<div className='max-w-7xl mx-auto px-2 lg:px-0 lg:space-y-12 flex flex-col lg:flex-row b'>
			{/* Left Column: Main Heading */}
			<div className='flex-1 lg:pr-8 lg:h-[85vh] lg:flex lg:items-center lg:justify-center lg:sticky lg:top-8 text-center lg:text-start mb-4 lg:mb-0'>
				<AnimateUp>
					<div className='grid gap-4 place-items-start '>
						<MainHeading
							title={heading}
							theme='text-tertiary m-4 lg:m-0 text-cente lg:text-start'
						/>
						<div className='hidden lg:block '>
							<FreeEstimate />
						</div>
					</div>
				</AnimateUp>
			</div>

			{/* Right Column: Features */}
			<div className='flex-1 space-y-20 z-[1] bgd mt-4 lg:mt-0'>
				<div className='grid gap-x-16 gap-y-4'>
					<StepsAnimation>
						{features.map((feature, index) => (
							<div key={index} className='p-4 rounded-md'>
								<TopHeading
									title={feature.feature}
									theme='text-light mb-2 lg:mb-4'
								/>
								<div className='space-y-2'>
									<div className='flex items-center gap-4 lg:gap-6'>
										<FaArrowTrendUp className='text-tertiary text-3xl' />

										<span className='text-light text-lg'>
											{feature.description}
										</span>
									</div>
								</div>
							</div>
						))}
					</StepsAnimation>
				</div>
			</div>
		</div>
	);
};

export default SeoFeatures;
