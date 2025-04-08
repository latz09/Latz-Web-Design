import PageContainer from '@/components/utils/animations/PageContainer';
import RecentClientsContainer from '@/components/RecentClients/RecentClientsContainer';
import ReviewContainer from '@/components/reviews/ReviewContainer';
import NotMonthlyFees from '@/components/home-page/NoMonthlyFees';

export const metadata = {
	title: 'Our Work',
	description: 'Recent clients',
};

const OurWorkPage = async () => {
	return (
		<PageContainer className='bg-light'>
			<RecentClientsContainer featuredOnly={false} includeViewMore={false} />
			<NotMonthlyFees />

			<ReviewContainer />
		</PageContainer>
	);
};

export default OurWorkPage;

export const revalidate = 10;
