import { fetchData } from '@/lib/sanity/sanityFetch';
import { FETCH_TWIN_CITIES_PAGE_DATA as query } from '@/data/queries/landingPages/FETCH_TWIN_CITIES_PAGE_DATA';

import AreaLandingHero from '@/components/heros/AreaLandingHero';
import SharedContent from '@/components/site-content/SharedContent';
import { CurveDividerBottom, CurveDividerTop } from '@/components/utils/dividers/Dividers';

export const metadata = {
	title: {
		default: 'St. Paul Web Design and Website Development - 2025',
		template: `%s | Latz Web Design`,
	},
	description: `Your business deserves a website that truly delivers! Experience the difference with personalized web design focused on turning clicks into customers. Discover the power of SEO-integrated, results-driven web design. Ready to outshine the competition? Get a free estimate today!`,
	keywords: ['web design in saint paul, web design services'],
};

export default async function WebDesignInSaintPaulMn() {
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
