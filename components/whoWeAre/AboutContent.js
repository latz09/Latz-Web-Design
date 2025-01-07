import AnimatedCheck from '../utils/animations/AnimatedCheck';
import AnimateUp, { FadeIn } from '../utils/animations/AnimateUp';
import { Description, MainHeading } from '../utils/Typography';

const AboutContent = ({ data }) => {
	// Separate all items except the last
	const allButLast = data.slice(0, -1);
	const lastItem = data[data.length - 1];

	return (
		<div className='py-16 lg:py-24'>
			{/* Grid for all items except the last */}
			<div className='grid gap-12 lg:gap-6 max-w-7xl mx-auto text-center lg:text-start lg:grid-cols-2'>
				{allButLast.map((section, index) => (
					<AnimateUp key={index}>
						<div
							className={`space-y-4 lg:space-y-8 lg:border lg:border-primary/20 lg:shadow lg:shadow-primary/30 lg:p-10 lg:rounded ${
								index % 2 !== 0 ? 'lg:mt-24' : ''
							}`}
						>
							<MainHeading
								title={section.heading}
								theme='text-dark mx-4 lg:mx-0'
							/>
							<FadeIn>
								<Description
									description={section.text}
									theme='text-dark/80 mx-4 lg:ml-2'
								/>
							</FadeIn>
						</div>
					</AnimateUp>
				))}
			</div>

			{/* The last item, rendered separately */}
			{lastItem && (
				<AnimateUp>
					<div className='mt-12 lg:mt-16 space-y-4 lg:space-y-8 lg:border lg:border-primary/20 lg:shadow lg:shadow-primary/30 lg:p-10 lg:rounded lg:w-1/2 lg:text-center  lg:bg-dark max-w-7xl mx-auto text-center'>
						<MainHeading
							title={lastItem.heading}
							theme='lg:text-light mx-4 lg:mx-0'
						/>
						<FadeIn>
							<Description
								description={lastItem.text}
								theme='lg:text-light mx-4 lg:ml-2'
							/>
						</FadeIn>
					</div>
				</AnimateUp>
			)}
		</div>
	);
};

export default AboutContent;
