import { Suspense } from 'react';
import OverviewContainer from '@/components/cms/overview/OverviewContainer';
import ProcessAndPricingContainer from '@/components/process-and-pricing/ProcessAndPricingContainer';
import ReviewContainer from '@/components/reviews/ReviewContainer';

import DynamicHello from '@/components/thank-you-components/DynamicHello';
import PageContainer from '@/components/utils/animations/PageContainer';
import ChatWidgetContainer from '@/components/automations/ChatWidgetContainer';

export const metadata = {
	title: 'Thank You',
};

const ThankYouPage = () => {
	return (
		<PageContainer className='bg-light'>
			<div className=' bg-gradient-to-b from-light via-primary/10 to-light flex flex-col items-center justify-center py-24 '>
				<Suspense
					fallback={
						<div className='h-full'>
							<Placeholder />
						</div>
					}
				>
					<DynamicHello />
				</Suspense>
			</div>
			<div className='grid '>
				<ChatWidgetContainer />
				<OverviewContainer includeLink={true} />
				<ProcessAndPricingContainer />
				<ReviewContainer />
			</div>
		</PageContainer>
	);
};

export default ThankYouPage;

const Placeholder = () => (
	<div className='grid place-items-center h-full'>
		<div className='text-center grid gap-3'>
			<div className='h-8 w-40 bg-dark/10 rounded'></div>
			<div className='h-4 w-60 bg-dark/10 rounded mt-2'></div>
			<div className='h-4 w-40 bg-dark/10 rounded mt-2'></div>
			<div className='mt-8'>
				<div className='h-10 w-40 bg-dark/10 rounded'></div>
			</div>
		</div>
	</div>
);
