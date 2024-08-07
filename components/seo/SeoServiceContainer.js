import KeyBenefits from '../cms/cms-page/KeyBenefits';
import AnimateUp from '../utils/animations/AnimateUp';
import DelayAnimateUp from '../utils/animations/DelayAnimateUp';
import { Description, MainHeading } from '../utils/Typography';
import SeoFeatures from './SeoFeatures';

const SeoServiceContainer = ({ section }) => {
	return (
		<div>
			<div className='bg-gradient-to-b from-light via-primary/50 to-light'>
				<div className='text-center max-w-5xl mx-auto py-12 lg:py-24  '>
					<AnimateUp>
						<MainHeading title={section.heading} theme='text-dark/80 m-4' />
						<Description
							description={section.introDescription}
							theme='text-dark lg:font-semibold mx-4 lg:w-3/4 lg:mx-auto'
						/>
					</AnimateUp>
				</div>
			</div>
			<DelayAnimateUp>
				<div className='bg-dark pb-12 pt-16 lg:pb-16 lg:pt-20 '>
					<SeoFeatures
						features={section.features}
						heading={section.subheading}
					/>
				</div>
			</DelayAnimateUp>
		</div>
	);
};

export default SeoServiceContainer;
