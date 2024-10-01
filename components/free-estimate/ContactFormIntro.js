import SlideIn from '../utils/animations/SlideIn';
import { Description, MainHeading, TopHeading } from '../utils/Typography';

const ContactFormIntro = () => {
	return (
		<div className='text-center lg:text-start text-dark space-y-4'>
			<MainHeading title={`Let's Get Started`} theme='text-dark' />
			<div className='text-lg lg:text-xl font-normal space-y-2'>
				<p className='leading-8 lg:leading-10'>
					{`Ready to elevate your business? Whether you need a custom website that stands out or want to streamline your operations with our CRM & Automation services, we are here to help. `}
				</p>
				<p className='leading-8 lg:leading-10 font-bold'>
					{`Fill out the form, and we will reach out to discuss how we can bring
					your vision to life.`}
				</p>
			</div>
		</div>
	);
};

export default ContactFormIntro;
