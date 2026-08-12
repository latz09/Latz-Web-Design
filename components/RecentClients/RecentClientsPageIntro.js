import AnimateUp, { FadeIn } from '../utils/animations/AnimateUp';
import DelayAnimateUp from '../utils/animations/DelayAnimateUp';
import { CurveDividerBottom } from '../utils/dividers/Dividers';
import { MainHeading, TopHeading, Description } from '../utils/Typography';

const RecentClientsPageIntro = () => {
	return (
		<div className='mb-4 lg:mb-8 '>
			<div className=' pt-8 lg:pt-16 pb-12 bg-dark'>
				<div className='grid place-items-center gap-4 '>
					<div className='space-y-2 px-2 lg:px-0  max-w-7xl mx-auto'>
						<TopHeading title='Our Work' theme='text-light' />
						<div className='grid gap-2 '>
							<MainHeading title='Built to Convert.' theme='text-tertiary' />
							<FadeIn>
								<MainHeading title='Not Just Look Good.' theme='text-light' />
							</FadeIn>
						</div>
					</div>

					
				</div>
			</div>
			<CurveDividerBottom />
		</div>
	);
};

export default RecentClientsPageIntro;
