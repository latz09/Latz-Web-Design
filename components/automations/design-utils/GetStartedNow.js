import {
	Description,
	MainHeading,
	TopHeading,
} from '@/components/utils/Typography';
import Link from 'next/link';

const GetStartedNow = () => {
	return (
		<div className='max-w-4xl mx-auto space-y-4  px-4 py-6 lg:px-8 lg:py-12 bg-dark text-light lg:rounded-lg shadow-lg my-24'>
			<div className='space-y-2'>
				<MainHeading
					title='Ready to Elevate Your Business?'
					theme='text-tertiary'
				/>
				<TopHeading title='Getting Started is Easy' theme='text-tertiary' />
			</div>
			<div className='  lg:w-2/3'>
				<Description
					description={`Simply fill out our contact form, and we'll reach out to discuss how we can tailor our CRM solutions to meet your business needs.`}
				/>
			</div>
			<div className='pt-4 lg:w-2/ '>
				<AutomationsLink />
			</div>
		</div>
	);
};

export default GetStartedNow;

export const AutomationsLink = ({variant = 'light' }) => {
	const buttonStyles =
		variant === 'light'
			? 'bg-tertiary text-dark rounded-full'
			: 'bg-dark text-tertiary rounded';

	return (
		<Link href='/contact-latz-web-design'>
			<button className={`py-3 lg:py-4 ${buttonStyles} w-full text-center font-bold text-lg lg:text-2xl `}>
				Get Started Now
			</button>
		</Link>
	);
};

