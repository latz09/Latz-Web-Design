'use client';

import React from 'react';
import CaptureEmailForm from '@/components/CaptureEmail/CaptureEmailForm';
import {
    AutomationDescription,
	Description,
	MainHeading,
	TopHeading,
} from '@/components/utils/Typography';

const CallToAction = ({ data }) => {
	return (
		<section className='max-w-4xl mx-auto bg-gradient-to-r from-blue-500 to-indigo-600 text-light'>
			<div className='max-w-7xl mx-auto px-4 text-center'>
				{/* CTA Heading */}

				<MainHeading title={data.ctaHeading} theme='text-dark' />

				{/* CTA Subheading */}

				<AutomationDescription description={data.ctaSubheading} theme='text-dark mt-4' />
				<div className="mt-12 space-y-4  px-4">
					<CaptureEmailForm ctaText={data.ctaText} />
					<AutomationDescription
						description={data.ctaDescription}
						theme='text-dark/80 italic '
					/>
				</div>
			</div>
		</section>
	);
};

export default CallToAction;
