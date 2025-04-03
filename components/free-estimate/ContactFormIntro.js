import AnimateUpWithBounce from '../utils/animations/AnimateUpWithBounce';
import SlideIn from '../utils/animations/SlideIn';
import { Description, MainHeading, TopHeading } from '../utils/Typography';

const ContactFormIntro = () => {
	return (
		<SlideIn>
			<div className='text-center lg:text-start text-dark space-y-4'>
				<MainHeading title={`Let's Build Something Great`} theme='text-dark' />
				<div className='text-lg lg:text-xl font-normal space-y-2'>
					<p className='leading-8 lg:leading-10'>
						{`Whether you're looking for a custom website that actually works or want to simplify your workflow with CRM & automation, I'm here to help.`}
					</p>
					<p className='leading-8 lg:leading-10 font-bold'>
						{`Fill out the form below, and I'll personally follow up to chat through your needs — no pressure, no fluff.`}
					</p>
				</div>
			</div>
		</SlideIn>
	);
};

export default ContactFormIntro;
