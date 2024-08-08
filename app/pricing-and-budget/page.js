import ProcessAndPricingContainer from '@/components/process-and-pricing/ProcessAndPricingContainer';
import ReviewContainer from '@/components/reviews/ReviewContainer';
import PageContainer from '@/components/utils/animations/PageContainer';

export const metadata = {
	title: 'Pricing and Budget',
	description: 'Pricing and Budget',
};

const PricingAndBudgetPage = async () => {
	return (
		<PageContainer>
			<div className='bg-light grid gap-16 lg:gap-24'>
				<ProcessAndPricingContainer />
				<ReviewContainer />
			</div>
		</PageContainer>
	);
};

export default PricingAndBudgetPage;
