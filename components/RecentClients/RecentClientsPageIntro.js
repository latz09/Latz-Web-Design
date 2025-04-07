import AnimateUp, { FadeIn } from '../utils/animations/AnimateUp';
import DelayAnimateUp from '../utils/animations/DelayAnimateUp';
import { CurveDividerBottom } from '../utils/dividers/Dividers';
import { MainHeading, TopHeading, Description } from '../utils/Typography';

const RecentClientsPageIntro = () => {
	return (
		<div className='mb-16 lg:mb-32'>
			<div className='bg-dark pt-20 pb-24 '>
				<div className='grid place-items-center gap-4'>
					<div className='space-y-2 text-center px-2 lg:px-0'>
						<TopHeading title='Our Work' theme='text-light/80 font-black' />
						<div className='md:flex gap-2 items-center justify-center'>
							<MainHeading title='Smart Design.' theme='text-light' />
							<FadeIn>
								<MainHeading title='Real Results' theme='text-light' />
							</FadeIn>
						</div>
					</div>

					<div className='w-full px-2 lg:w-1/2 mx-auto text-center '>
						<Description
							description='Custom websites built to connect, convert, and stand out. Each project reflects a clear purpose, clean design, and a strategy that puts your business first.'
							theme='text-light/85'
						/>
					</div>
				</div>
			</div>
			<CurveDividerBottom />
		</div>
	);
};

export default RecentClientsPageIntro;
