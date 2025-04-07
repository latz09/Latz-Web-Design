import AnimateUp, { FadeIn } from '../utils/animations/AnimateUp';

import { Description, MainHeading, TopHeading } from '../utils/Typography';

const ContactFormIntro = () => {
	return (
		<AnimateUp>
			<div className='text-center lg:text-start text-dark space-y-4'>
				<div className="space-y-2">
					<MainHeading title={`Let's Build`} theme='text-primary' />
					<MainHeading title={`Something Great`} theme='text-dark' />
					<MainHeading title={`Together`} theme='text-dark' />
				</div>
				<div className='text-lg lg:text-xl font-normal space-y-4 lg:space-y-2 py-4'>
					<p className='leading-8 lg:leading-10'>
						{`Looking for a custom website that actually performs? Need help simplifying your workflow with CRM and automation? I'm here to help — no pressure, no BS.
`}
					</p>
					<p className='leading-8 lg:leading-10 font-bold uppercase'>
						{`Fill out the form, and I'll personally reach out to learn more about your goals.`}
					</p>
				</div>
			</div>
		</AnimateUp>
	);
};

export default ContactFormIntro;
