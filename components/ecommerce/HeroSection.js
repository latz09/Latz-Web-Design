import { MainHeading, TopHeading } from '../utils/Typography';

const HeroSection = ({ headline, subheadline }) => (
	<div>
		<div className='md:hidden space-y-2 text-center '>
			<TopHeading title={subheadline} theme='text-dark' />
			<div className="">
				<MainHeading title={'Your Products.'} theme='text-dark/80' />
				<MainHeading title={'Your Store.'} theme='text-dark/80' />
				<MainHeading title={'No Monthly Fees'} theme='text-dark/80 pt-2 ' />
			</div>
		</div>
		<div className='hidden md:block text-center space-y-4'>
			<TopHeading title={subheadline} theme='text-dark' />
			<div className="space-y-2 uppercase">
				<MainHeading title={'Your Products. Your Store.'} theme='text-dark/80' />
				<MainHeading title={'No Monthly Fees'} theme='text-dark/80 pt-2' />
			</div>
		</div>
	</div>
);

export default HeroSection;
