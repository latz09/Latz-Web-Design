import AnimatedCheck from '../utils/animations/AnimatedCheck';
import AnimateUp, { FadeIn } from '../utils/animations/AnimateUp';
import { Description, MainHeading, TopHeading } from '../utils/Typography';

const AboutContent = ({ data }) => {
	return (
		<div className='   py-16 lg:py-24'>
			{' '}
			<div className='grid gap-12 lg:gap-24   max-w-5xl mx-auto text-center lg:text-start'>
				{data.map((section, index) => (
					<AnimateUp key={index}>
						<div key={index} className='space-y-4  '>
							<MainHeading title={section.heading} theme='text-dark mx-4 lg:mx-0' />

							<FadeIn>
								<Description
									description={section.text}
									theme='text-dark/80 mx-4'
								/>
							</FadeIn>
						</div>
					</AnimateUp>
				))}
			</div>
		</div>
	);
};

export default AboutContent;
