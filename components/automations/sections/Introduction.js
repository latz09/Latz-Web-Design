import {
	Description,
	MainHeading,
	TopHeading,
} from '@/components/utils/Typography';

const Introduction = ({ title, headline, intro }) => {
	return (
		<div className='max-w-5xl mx-auto grid gap-2 px-4'>
			<MainHeading title={title} />
			<TopHeading title={headline} />
			<div className="mt-4 text-center lg:text-start">
				<Description description={intro} />
			</div>
		</div>
	);
};

export default Introduction;
