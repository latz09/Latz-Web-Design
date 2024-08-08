import OverviewContainer from '@/components/cms/overview/OverviewContainer';
import ProcessAndPricingContainer from '@/components/process-and-pricing/ProcessAndPricingContainer';
import ReviewContainer from '@/components/reviews/ReviewContainer';

import DynamicHello from '@/components/thank-you-components/DynamicHello';
import PageContainer from '@/components/utils/animations/PageContainer';

export const metadata = {
	title: 'Thank You',
	description:
		'Thank you for reaching out to us. We will get back to you shortly.',
};

const ThankYouPage = () => {
	return (
		<PageContainer className="bg-light">
			<div className=' bg-dark flex flex-col items-center justify-center h-[50vh] border-b border-primary'>
				<DynamicHello />
			</div>
			<div className="grid gap-16">
				<OverviewContainer includeLink={true} />
				<ProcessAndPricingContainer />
				<ReviewContainer />
			</div>
		</PageContainer>
	);
};

export default ThankYouPage;
