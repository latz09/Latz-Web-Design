import AnimateUp, { FadeIn } from '@/components/utils/animations/AnimateUp';
import {
	AutomationDescription,
	Description,
	MainHeading,
	TopHeading,
} from '@/components/utils/Typography';
import Image from 'next/image';

const KeyBenefits = ({ data }) => {
	return (
		<section className='lg:px-4 py-8 lg:py-12'>
			{/* <MainHeading title='Key Benefits' /> */}
			<ul className='grid   mt-8 '>
				{data.map((benefit, index) => (
					<AnimateUp key={index} index={index}>
						<li
							key={index}
							className={`grid  border-t-2 border-dark/60 border-dotted  lg:flex p-4 gap-16 py-24 lg:py-8 lg:px-16 lg:gap-24 ${
								index % 2 === 0 ? 'bg-primary/10' : 'bg-tertiary/10'
							} ${index === 0 ? 'rounded-t-3xl border-none' : ''}`}
						>
							{/* Text Section */}
							<div
								className={`flex lg:w-1/2 flex-col justify-center text-center lg:text-lef gap-3  ${
									index % 2 !== 0 ? 'lg:order-2 ' : 'lg:order-1 '
								}`}
							>
								<MainHeading title={benefit.benefitTitle} theme='text-dark' />
								<AutomationDescription
									description={benefit.benefitDescription}
								/>
							</div>

							{/* Image Section */}
							<div
								className={`lg:w-1/2 mx-auto flex justify-center items-center  ${
									index % 2 !== 0 ? 'lg:order-1 ' : 'lg:order-2 '
								}`}
							>
								<FadeIn>
									<Image
										src={benefit.benefitScreenshotUrl}
										alt={benefit.benefitTitle}
										layout='responsive'
										width={300} // Adjust the width according to your layout
										height={200} // Adjust the height according to your layout
										quality={100}
										className='rounded-lg object-contain lg:p-16'
									/>
								</FadeIn>
							</div>
						</li>
					</AnimateUp>
				))}
			</ul>
		</section>
	);
};

export default KeyBenefits;
