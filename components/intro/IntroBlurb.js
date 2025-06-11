import { Description, MainHeading, Subheading } from '../utils/Typography';

const SERVICES_CONTAINER_CLASSES =
	' pt-8 pb-24 lg:pb-32 px-4 lg:px-8 grid gap-8 mt-2 mx-4 lg:w-3/4 mx-auto text-center border-b border-primary ';

export function preventWidow(text) {
	const words = text.trim().split(' ');
	if (words.length < 2) return text;
	const lastTwo = words.splice(-2, 2).join('\u00A0'); // non-breaking space
	return [...words, lastTwo].join(' ');
}
const IntroBlurb = ({ data }) => {
	return (
		<div className={SERVICES_CONTAINER_CLASSES}>
			<h2 className='text-4xl tracking-wide lg:text-6xl font-black '>
				{preventWidow('You Deserve a Website That Pulls Its Weight')}
			</h2>

			<Description description='Most small business owners are stuck with sites they can’t update, don’t trust to convert, or are paying monthly just to keep online. You deserve a site that works for your business — not the other way around.' />
		</div>
	);
};

export default IntroBlurb;
