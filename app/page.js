import { fetchData } from '@/lib/sanity/sanityFetch';
import { FETCH_LANDING_PAGE_DATA as query } from '@/data/queries/landingPages/FETCH_LANDING_PAGE_DATA';
import LandingHero from '@/components/heros/LandingHero';

import SharedContent from '@/components/site-content/SharedContent';
import { CurveDividerTop } from '@/components/utils/dividers/Dividers';

export default async function Home() {
	const [data] = await fetchData(query);

	return (
		<main className='grid bg-light'>
			<LandingHero
				// image={data.landingImage}
				heading={data.headline}
				subHeading={data.subheadline}
				topHeading={data.topHeadline}
				links={data.links}
			/>
			<CurveDividerTop />

			<SharedContent />
		</main>
	);
}

export const revalidate = 10;
