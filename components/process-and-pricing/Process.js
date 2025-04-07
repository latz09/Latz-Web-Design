import * as Icons from 'react-icons/ai'; // Import all AI icons
import { LuCalendarDays } from "react-icons/lu";
import { Description, MainHeading, TopHeading } from '../utils/Typography';
import StepsAnimation from '../utils/animations/StepsAnimation';
import AnimateUp from '../utils/animations/AnimateUp';
import FreeEstimate from '../utils/FreeEstimate';
import SlideIn from '../utils/animations/SlideIn';
import DelayAnimateUp from '../utils/animations/DelayAnimateUp';

const Process = ({ data }) => {
	return (
		<div className='bg-gradient-to py-12 lg:py-32 '>
			<div className='max-w-[95rem] mx-auto px-4 lg:px-0 space-y-12 flex flex-col lg:flex-row  '>
				{/* Left Column: Headings */}
				<div className='flex-1 lg:pr-8 lg:h-[85vh] lg:flex lg:items-center lg:justify-center lg:sticky lg:top-8  text-center lg:text-start mb-4 lg:mb-0'>
					<div className='space-y-4 lg:pl-2'>
						<div className='lg:space-y-4'>
							{' '}
							<AnimateUp>
								<MainHeading
									title={data.heading}
									theme='text-dark my-3 lg:my-0'
								/>
							</AnimateUp>
							<DelayAnimateUp>
								<TopHeading title={data.subheading} theme='text-dark/80' />
							</DelayAnimateUp>
						</div>

						{/* <div className='ml-2 hidden lg:block'>
							<FreeEstimate />
						</div> */}
					</div>
				</div>

				{/* Right Column: Steps */}
				<div className='flex-1 space-y-20 z-[1] '>
					<StepsAnimation>
						{data.steps.map((step, index) => {
							// Dynamically get the icon component from react-icons
							const IconComponent =
								Icons[step.icon] || Icons.AiOutlineQuestionCircle;

							return (
								<div
									key={index}
									className='grid place-items-center lg:flex lg:items-center mb-12 text-dark'
								>
									{/* Left Section: Icon */}
									<div className='flex-shrink-0 mr-4 lg:mr-8 self-start mb-4 lg:mb-0 '>
										<div className='border  border-primary/70 rounded-full p-3 lg:p-4 '>
											<div className=' bg-dark border-dark/30 rounded-full p-2 lg:p-4 text-4xl shadow shadow-dark/20'>
												<IconComponent className='text-primary' />
											</div>
										</div>
									</div>

									{/* Right Section: Text */}
									<div className='flex-1'>
										<MainHeading
											title={step.stepHeading}
											theme='text-dark/90 text-center lg:text-start'
										/>

										<Description
											description={step.description}
											theme='text-dark mt-4'
										/>
									</div>
								</div>
							);
						})}
					</StepsAnimation>
					{/* <div className='lg:hidden grid place-items-center'>
						<FreeEstimate />
					</div> */}
				</div>
			</div>
		</div>
	);
};

export default Process;

export const revalidate = 1;
