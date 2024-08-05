import { FaArrowTrendUp } from 'react-icons/fa6';
import {
	Description,
	MainHeading,
	TopHeading,
} from '@/components/utils/Typography';
import { LearnMoreNowButtonLink } from '../overview/OverviewContainer';
import AnimateUp from '@/components/utils/animations/AnimateUp';
import StepsAnimation from '@/components/utils/animations/StepsAnimation';
import FreeEstimate from '@/components/utils/FreeEstimate';

const KeyBenefits = ({ data }) => {
	return (
		<section className='bg-dark py-12 lg:py-4'>
			<div className='max-w-7xl mx-auto px-2 lg:px-0 space-y-4 lg:space-y-12 flex flex-col lg:flex-row'>
				{/* Left Column: Main Heading */}
				<div className='flex-1 lg:pr-8 lg:h-[85vh] lg:flex lg:items-center lg:justify-center lg:sticky lg:top-8 text-center lg:text-start mb-4 lg:mb-0'>
					<AnimateUp>
						<div className='grid gap-4 place-items-start '>
							<MainHeading
								title='Key Benefits'
								theme='text-tertiary mb-4 text-center lg:text-start'
							/>
							<div className='hidden lg:block '>
							<FreeEstimate />
							</div>
						</div>
					</AnimateUp>
				</div>

				{/* Right Column: Benefits */}
				<div className='flex-1 space-y-20 z-[1]'>
					<div className='grid  gap-x-16 gap-y-4'>
						<StepsAnimation>
							{data.map((benefit, index) => (
								<div key={index} className='p-4 rounded-md'>
									<TopHeading
										title={benefit.heading}
										theme='text-light mb-2 lg:mb-4'
									/>
									<div className='space-y-2'>
										{benefit.bullets.map((bullet, bulletIndex) => (
											<div
												key={bulletIndex}
												className='flex items-center gap-4 lg:gap-6'
											>
												<FaArrowTrendUp className='text-tertiary text-3xl' />
												<div className='grid gap-2'>
													<span className='text-light text-lg'>
														<span className='font-semibold lg:font-bold text-light'>
															{bullet.title}:{' '}
														</span>
														{bullet.description}
													</span>
												</div>
											</div>
										))}
									</div>
								</div>
							))}
						</StepsAnimation>
					</div>
				</div>
			</div>
		</section>
	);
};

export default KeyBenefits;

{
	/* <div className='mt-12 lg:mt-16 px-8 py-16 lg:px-2 lg:py-8  grid place-items-center gap-8 '>
<MainHeading
    title='Take Control of Your Content Today'
    theme='text-dark mb-4 text-center'
/>
<LearnMoreNowButtonLink
    title='Get Started Now'
    href='/contact-latz-web-design'
/>
</div> */
}
