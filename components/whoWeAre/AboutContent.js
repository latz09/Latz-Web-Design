import React from 'react';

import AnimatedCheck from '../utils/animations/AnimatedCheck';
import AnimateUp, { FadeIn } from '../utils/animations/AnimateUp';
import {
	AutomationDescription,
	Description,
	MainHeading,
	TopHeading,
} from '../utils/Typography';
import {
	FaTree,
	FaLaptopCode,
	FaHome,
	FaLightbulb,
	FaHandshake,
} from 'react-icons/fa';

const IconMap = {
	fatree: FaTree,
	falaptopcode: FaLaptopCode,
	fahome: FaHome,
	falightbulb: FaLightbulb,
	fahandshake: FaHandshake,
};

const AboutContent = ({ data }) => {
	// Separate all items except the last
	const allButLast = data.slice(0, -1);
	const lastItem = data[data.length - 1];

	return (
		<div className='py-16 lg:py-24'>
			{/* Grid for all items except the last */}
			<div className='grid gap-16 lg:gap-6 max-w-7xl mx-auto text-center lg:text-start lg:grid-cols-2'>
				{allButLast.map((section, index) => {
					const IconComponent = IconMap[section.icon?.toLowerCase()] || null;

					return (
						<AnimateUp key={index}>
							<div
								className={`space-y-4 lg:space-y-8  lg:p-10 lg:rounded ${
									index % 2 !== 0 ? 'lg:mt-24' : ''
								}`}
							>
								{IconComponent && (
									<div className='grid place-items-center lg:flex justify-around gap-4 items-center'>
										<div className=''>
											<div className=' '>
												<IconComponent className='text-primary text-4xl lg:text-5xl  ' />
											</div>
										</div>
										<TopHeading
											title={section.heading}
											theme='text-light mx-4 lg:mx-0 font-bold tracking-wide'
										/>
									</div>
								)}

								<FadeIn>
									<AutomationDescription
										description={section.text}
										theme='text-light mx-4 lg:ml-2'
									/>
								</FadeIn>
							</div>
						</AnimateUp>
					);
				})}
			</div>

			{/* The last item, rendered separately */}
			{lastItem && (
				<AnimateUp>
					<div className='mt-12 lg:mt-16 space-y-4 lg:space-y-8  lg:p-10 lg:rounded lg:w-1/2 lg:text-center lg:bg-drk max-w-7xl mx-auto text-center'>
						{IconMap[lastItem.icon?.toLowerCase()] && (
							<div className='flex justify-center'>
								<div className='border rounded-full border-tertiary shadow shadow-tertiary/20'>
									<div className='p-6 bg-dark rounded-full '>
										{React.createElement(
											IconMap[lastItem.icon.toLowerCase()],
											{ className: 'text-light text-4xl lg:text-5xl ' },
											null
										)}
									</div>
								</div>
							</div>
						)}
						<MainHeading
							title={lastItem.heading}
							theme='text-tertiary mx-4 lg:mx-0'
						/>
						<FadeIn>
							<Description
								description={lastItem.text}
								theme='text-light mx-4 lg:ml-2'
							/>
						</FadeIn>
					</div>
				</AnimateUp>
			)}
		</div>
	);
};

export default AboutContent;
