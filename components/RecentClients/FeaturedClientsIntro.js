import { MainHeading, TopHeading, Description } from '../utils/Typography';

const FeaturedClientsIntro = () => {
	return (
		<div className=' bg-gradient-to-b from-dark via-primary/20 to-primary/30 pt-12 lg:pt-24 pb-6 lg:pb-12'>
			<div className='grid place-items-center gap-4'>
				<div className='space-y-2 text-center px-2 lg:px-0'>
					<TopHeading title='Our Work' theme='text-light' />
					<MainHeading
						title='Recent Website Development Projects'
						theme='text-light'
					/>
				</div>
				<div className='w-full px-2 lg:w-1/3 mx-auto text-center'>
					<Description
						description='Delivering personalized web designs that elevate your brand and boost your online presence.'
						theme='text-light'
					/>
				</div>
			</div>
		</div>
	);
};

export default FeaturedClientsIntro;
