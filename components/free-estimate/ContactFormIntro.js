import SlideIn from '../utils/animations/SlideIn';
import { Description, MainHeading, TopHeading } from '../utils/Typography';

const ContactFormIntro = () => {
	return (
		<div className='text-center lg:text-start  p-6 text-light space-y-4'>
			<MainHeading title={`Let's Get Started`} theme='text-tertiary' />
		
				<p className='text-lg lg:text-xl font-normal leading-8 lg:leading-10 '>
				{`	Let's turn your ideas into an impactful website. Fill out our simple
					form, and we will personally reach out to discuss your vision.
					Together, we'll create a custom solution that aligns with your goals
					and brand identity.`}
				</p>
			
		</div>
	);
};

export default ContactFormIntro;
