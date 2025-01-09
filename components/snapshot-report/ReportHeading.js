import { FadeIn } from '../utils/animations/AnimateUp';
import { Description, MainHeading, TopHeading } from '../utils/Typography';
import SnapshotFormRequest from './SnapshotFormRequest';

export const ReportHeading = ({ headline, subheadline, image }) => {
	return (
		<FadeIn>
			<div className='py-16 lg:py-32 2xl:py-44 max-w-7xl mx-auto grid lg:grid-cols-2 place-items-center  gap-8 lg:gap-24 bg-gradient-to-l from-light via-primary/10 to-light'>
				<div className='space-y-4'>
					<MainHeading title={headline} theme='text-center text-primary px-2' />

					<TopHeading title={subheadline} theme='text-center text-dark' />
					<Description
						description='*Scroll down to See the Details'
						theme='text-center text-dark/60 italic '
					/>
				</div>
				<div className=' w-5/6 lg:w-full'>
               
					<SnapshotFormRequest />
				</div>
			</div>
		</FadeIn>
	);
};
