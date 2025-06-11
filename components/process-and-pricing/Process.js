import * as Icons from 'react-icons/ai';
import { Description, MainHeading, TopHeading } from '../utils/Typography';
import AnimateUp from '../utils/animations/AnimateUp';
import DelayAnimateUp from '../utils/animations/DelayAnimateUp';
import StepsAnimation from '../utils/animations/StepsAnimation';

const Process = ({ data }) => {
	return (
		<div className='bg-gradient-to py-16 lg:py-32 px-4'>
			<div className='max-w-4xl mx-auto'>

				{/* Headings */}
				<div className='text-center mb-24'>
					<AnimateUp>
						<MainHeading title={data.heading} theme='text-dark mb-4' />
					</AnimateUp>
					<DelayAnimateUp>
						<TopHeading title={data.subheading} theme='text-dark/80' />
					</DelayAnimateUp>
				</div>

				{/* Steps */}
				<div className='relative space-y-20'>

					{/* Centered vertical line */}
					<div className='hidden md:block absolute left-10 top-0 bottom-0 w-[2px] bg-primary/20' />

					<StepsAnimation>
						{data.steps.map((step, index) => {
							const IconComponent =
								Icons[step.icon] || Icons.AiOutlineQuestionCircle;

							return (
								<div key={index} className='flex items-start gap-6 relative'>
									{/* Icon on the left */}
									<div className='flex-shrink-0'>
										<div className='bg-dark p-3 rounded-full border-4 border-primary shadow text-primary text-2xl'>
											<IconComponent />
										</div>
									</div>

									{/* Step Content */}
									<div className='text-left'>
										<MainHeading
											title={step.stepHeading}
											theme='text-dark/90'
										/>
										<Description
											description={step.description}
											theme='text-dark mt-2'
										/>
									</div>
								</div>
							);
						})}
					</StepsAnimation>
				</div>
			</div>
		</div>
	);
};

export default Process;

export const revalidate = 1;
