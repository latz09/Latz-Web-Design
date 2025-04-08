import ContactFormContainer from '@/components/free-estimate/ContactFormContainer';
import NotMonthlyFees from '@/components/home-page/NoMonthlyFees';
import FetchClientLogos from '@/components/RecentClients/FetchClientLogos';
import ScrollerLogo from '@/components/RecentClients/LogoScroller';
import ReviewContainer from '@/components/reviews/ReviewContainer';
import PageContainer from '@/components/utils/animations/PageContainer';

export const metadata = {
	title: 'Contact Us',
	description: 'Contact us for a free consultation',
};

const ContactPage = () => {
	return (
		<div className='mt-[15vh]  bg-light'>

			
			<ContactFormContainer />
			<FetchClientLogos />
			<NotMonthlyFees />
			<ReviewContainer />
		</div>
	);
};

export default ContactPage;
