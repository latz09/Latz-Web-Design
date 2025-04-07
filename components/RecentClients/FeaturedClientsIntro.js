import { CurveDividerTop } from '../utils/dividers/Dividers';
import { MainHeading, TopHeading, Description } from '../utils/Typography';

const FeaturedClientsIntro = () => {
	return (
		<div className=' bg-dark  py-24 mb-8 lg:mb-16'>
			<div className='grid place-items-center gap-4'>
				<div className='space-y-4 text-center px-2 lg:px-0'>
					<MainHeading
						title='Work That Speaks for Itself'
						theme='text-tertiary'
					/>
					<TopHeading
						title={`A look at some of the custom websites we've crafted for businesses like yours.`}
						theme='text-light'
					/>
				</div>
			</div>
			
		</div>
	);
};

export default FeaturedClientsIntro;
