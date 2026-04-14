import { fetchData } from '@/lib/sanity/sanityFetch';
import { FETCH_WAUSUA_LANDING_PAGE_DATA as query } from '@/data/queries/landingPages/FETCH_WAUSUA_LANDING_PAGE_DATA';

import AreaLandingHero from '@/components/heros/AreaLandingHero';
import SharedContent from '@/components/site-content/SharedContent';
import { CurveDividerBottom } from '@/components/utils/dividers/Dividers';

export const metadata = {
	title: {
		default: 'Wausau Web Design and Website Development - 2026',
		template: `%s | Latz Web Design`,
	},
	description: `Empower your Wausau business with custom web design that drives growth and success. Our results-driven approach ensures your website attracts and converts visitors into customers. Discover personalized web solutions tailored for Central Wisconsin businesses. Get a free estimate today!`,
	keywords: [
		'web design in Wausau',
		'Wausau web design services',
		'custom websites in Wausau',
	],
};

export default async function WausauWebDesign() {
	const [data] = await fetchData(query);

	return (
		<main className='bg-light'>
			<AreaLandingHero
				image={data.imageUrl}
				heading={data.headline}
				subHeading={data.subheadline}
				topHeading={data.topHeadline}
			/>
			<CurveDividerBottom />
			<SharedContent />
		</main>
	);
}

export const revalidate = 10;
