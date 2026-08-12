import { Description, MainHeading, Subheading } from '../utils/Typography';

const SERVICES_CONTAINER_CLASSES =
	' pt-8 pb-8 lg:pb-16 px-4 lg:px-8 grid gap-8 mt-2 mx-4 lg:w-3/4 mx-auto r  ';

export function preventWidow(text) {
	const words = text.trim().split(' ');
	if (words.length < 2) return text;
	const lastTwo = words.splice(-2, 2).join('\u00A0'); // non-breaking space
	return [...words, lastTwo].join(' ');
}
const IntroBlurb = ({ data }) => {
	return (
		<div className={SERVICES_CONTAINER_CLASSES}>
			<h2 className='text-4xl tracking-wide lg:text-6xl font-bold '>
				{preventWidow('You Deserve a Website That Pulls Its Weight')}
			</h2>

			<Description description={`Most small business owners are stuck with sites they can't update, don't trust to convert, or pay monthly just to keep live. Yours should just work.`} />
		</div>
	);
};

export default IntroBlurb;
