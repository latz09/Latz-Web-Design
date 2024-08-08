import * as Icons from 'react-icons/ai'; // Import all AI icons
import { MainHeading, TopHeading } from '../utils/Typography';
import StepsAnimation from '../utils/animations/StepsAnimation';
import AnimateUp from '../utils/animations/AnimateUp';
import FreeEstimate from '../utils/FreeEstimate';

const Process = ({ data }) => {
	return (
		<div className='bg-dark py-12 lg:py-4 '>
			<div className='text-center lg:pt-8 pb-1 lg:pb-12'>
				<TopHeading title={data.subheading} theme='text-light' />
			</div>
			<div className='max-w-6xl mx-auto px-4 lg:px-0 space-y-12 flex flex-col lg:flex-row  '>
				{/* Left Column: Headings */}
				<div className='flex-1 lg:pr-8 lg:h-[85vh] lg:flex lg:items-center lg:justify-center lg:sticky lg:top-8  text-center lg:text-start mb-4 lg:mb-0'>
					<div className='space-y-4 pl-2'>
						<AnimateUp>
							<MainHeading
								title={data.heading}
								theme='text-light my-3 lg:my-0'
							/>
						</AnimateUp>
						<div className='ml-2 hidden lg:block'>
							<FreeEstimate />
						</div>
					</div>
				</div>

				{/* Right Column: Steps */}
				<div className='flex-1 space-y-20 z-[1]'>
					<StepsAnimation>
						{data.steps.map((step, index) => {
							// Dynamically get the icon component from react-icons
							const IconComponent =
								Icons[step.icon] || Icons.AiOutlineQuestionCircle;

							return (
								<div key={index} className='flex items-center mb-12 text-light'>
									{/* Left Section: Icon */}
									<div className='flex-shrink-0 mr-4 lg:mr-8 self-start'>
										<div className='border-2 border-light/80 rounded-full p-3 lg:p-4'>
											<div className='border border-light/70 rounded-full p-2 lg:p-4 text-2xl lg:text-4xl'>
												<IconComponent className='text-light' />
											</div>
										</div>
									</div>

									{/* Right Section: Text */}
									<div className='flex-1'>
										<h3 className='text-xl lg:text-2xl font-bold mb-4 text-primary'>
											{step.stepHeading}
										</h3>
										<p className='lg:text-lg leading-7 lg:leading-8'>
											{step.description}
										</p>
									</div>
								</div>
							);
						})}
					</StepsAnimation>
					<div className='lg:hidden grid place-items-center'>
						<FreeEstimate />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Process;
