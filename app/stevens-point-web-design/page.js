import { fetchData } from '@/lib/sanity/sanityFetch';
import { FETCH_STEVENS_POINT_PAGE_DATA as query } from '@/data/queries/landingPages/FETCH_STEVENS_POINT_LANDING_PAGE_DATA';

import AreaLandingHero from '@/components/heros/AreaLandingHero';
import SharedContent from '@/components/site-content/SharedContent';

export const metadata = {
	title: 'Stevens Point Web Design & Development | Latz Web Design',
	description: `Empower your Central Wisconsin business with a custom, SEO-focused website from Latz Web Design. We help Stevens Point companies drive growth with responsive, mobile-first solutions.`,
	keywords: [
		'Stevens Point web design',
		'Central Wisconsin web development',
		'SEO web design Wisconsin',
		'Stevens Point custom websites',
	],
};

export default async function StevensPointWebDesign() {
	const [data] = await fetchData(query);

	return (
		<main className='grid  bg-light'>
			<AreaLandingHero
				image={data.imageUrl}
				heading={data.headline}
				subHeading={data.subheadline}
				topHeading={data.topHeadline}
			/>

			<SharedContent />
		</main>
	);
}

export const revalidate = 10;
