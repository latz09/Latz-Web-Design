import SlideIn from '../utils/animations/SlideIn';
import { Description, MainHeading, TopHeading } from '../utils/Typography';

const ContactFormIntro = () => {
	return (
		<div className='text-center lg:text-start   text-light space-y-4'>
			<MainHeading title={`Let's Get Started`} theme='text-tertiary' />

			<p className='text-lg lg:text-xl font-normal leading-8 lg:leading-10 '>
				{`	Let's turn your ideas into an impactful website. Fill out our simple
					form, and we will personally reach out to discuss your vision.`}
			</p>
		</div>
	);
};

export default ContactFormIntro;
