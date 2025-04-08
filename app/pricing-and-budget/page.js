import NotMonthlyFees from '@/components/home-page/NoMonthlyFees';
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
			<div className='bg-light'>
				<ProcessAndPricingContainer />
				<NotMonthlyFees />
				<div className='bg-light'>
					<ReviewContainer />
				</div>
			</div>
		</PageContainer>
	);
};

export default PricingAndBudgetPage;

export const revalidate = 10;
