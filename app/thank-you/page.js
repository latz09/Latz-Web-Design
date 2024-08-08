import { Suspense } from 'react';
import OverviewContainer from '@/components/cms/overview/OverviewContainer';
import ProcessAndPricingContainer from '@/components/process-and-pricing/ProcessAndPricingContainer';
import ReviewContainer from '@/components/reviews/ReviewContainer';

import DynamicHello from '@/components/thank-you-components/DynamicHello';
import PageContainer from '@/components/utils/animations/PageContainer';

export const metadata = {
	title: 'Thank You',
};

const ThankYouPage = () => {
	return (
		<PageContainer className='bg-light'>
			<div className=' bg-dark flex flex-col items-center justify-center h-[50vh] border-b border-primary'>
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
			<div className='grid gap-16'>
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
			<div className='h-8 w-40 bg-gray-200 rounded'></div>
			<div className='h-4 w-60 bg-gray-200 rounded mt-2'></div>
			<div className='h-4 w-40 bg-gray-200 rounded mt-2'></div>
			<div className='mt-8'>
				<div className='h-10 w-40 bg-gray-200 rounded'></div>
			</div>
		</div>
	</div>
);
