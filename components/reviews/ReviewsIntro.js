import SlideIn from '../utils/animations/SlideIn';
import { Description, MainHeading, TopHeading } from '../utils/Typography';

const ReviewsIntro = () => {
	return (
		<SlideIn>
			<div className='grid place-items-center gap-4'>
				<div className='space-y-2 lg:space-y-4 text-center px-2 lg:px-0 lg:w-3/5 mx-auto'>
					<TopHeading title='Client Stories' theme='text-dark/80' />

					<h3 className='text-3xl lg:text-5xl font-black '>
					
					</h3>
					<MainHeading title=' Real Results, Real Feedback'/>
				</div>
			</div>
		</SlideIn>
	);
};

export default ReviewsIntro;
