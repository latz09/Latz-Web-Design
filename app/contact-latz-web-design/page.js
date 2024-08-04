import ContactFormContainer from '@/components/free-estimate/ContactFormContainer';
import ReviewContainer from '@/components/reviews/ReviewContainer';
import PageContainer from '@/components/utils/animations/PageContainer';

export const metadata = {
	title: 'Contact Us',
	description: 'Contact us for a free consultation',
};

const ContactPage = () => {
	return (
		<div className='mt-[15vh] grid gap-24 bg-light'>
			<ContactFormContainer />
			<ReviewContainer />
		</div>
	);
};

export default ContactPage;
