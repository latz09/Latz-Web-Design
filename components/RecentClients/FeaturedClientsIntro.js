import { CurveDividerTop } from '../utils/dividers/Dividers';
import { MainHeading, TopHeading, Description } from '../utils/Typography';

const FeaturedClientsIntro = () => {
	return (
		<div className="py-12 ">
			
			<div className='px-4 lg:px-8 lg:w-3/4 lg:mx-auto '>
				<div className='grid place-items-cente gap-4'>
					<div className='space-y-4 text-centr px-2 lg:px-0'>
						<MainHeading
							title='Work That Speaks for Itself'
							theme='text-dark'
						/>
						<TopHeading
							title={`A look at some of the custom websites we've built for businesses like yours.`}
							theme='text-dark'
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FeaturedClientsIntro;
