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
			<div className='grid gap-16 max-w-5xl mx-auto text-center lg:text-start '>
				{allButLast.map((section, index) => {
					const IconComponent = IconMap[section.icon?.toLowerCase()] || null;

					return (
						<AnimateUp key={index}>
							<div className='grid place-items-center lg:lace-items-start gap-4 '>
								<div className='grid place-items-center lg:flex items-center gap-2 lg:gap-8 '>
									{/* {IconComponent && (
										<div className='grid place-items-center lg:flex justify-around gap-4 items-center'>
											<IconComponent className='text-primary text-4xl lg:text-5xl  ' />
										</div>
									)} */}
									<MainHeading
										title={section.heading}
										theme='text-light  tracking-wide text-center'
									/>
								</div>

								<FadeIn>
									<Description
										description={section.text}
										theme='text-light px-2 tracking-wide leading-[2.2rem] lg:leading-[2.5rem]'
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
					<div className='mt-12 lg:mt-16 space-y-4 lg:space-y-8 text-center lg:text-start max-w-5xl mx-auto t '>
				

						<MainHeading
							title={lastItem.heading}
							theme='text-tertiary text-center tracking-wide '
						/>
						<FadeIn>
							<Description
								description={lastItem.text}
								theme='text-light px-2 tracking-wide leading-[2.2rem] lg:leading-[2.5rem]'
							/>
						</FadeIn>
					</div>
				</AnimateUp>
			)}
		</div>
	);
};

export default AboutContent;
