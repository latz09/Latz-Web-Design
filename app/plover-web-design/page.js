import { fetchData } from '@/lib/sanity/sanityFetch';
import { FETCH_PLOVER_LANDING_PAGE_DATA as query } from '@/data/queries/landingPages/FETCH_PLOVER_LANDING_PAGE_DATA';
import AreaLandingHero from '@/components/heros/AreaLandingHero';
import SharedContent from '@/components/site-content/SharedContent';
import { CurveDividerBottom } from '@/components/utils/dividers/Dividers';

export const metadata = {
	title: {
		default: 'Plover Web Design and Website Development - 2026',
		template: `%s | Latz Web Design`,
	},
	description: `Boost your Plover business with custom web design tailored for growth and success. Our personalized, results-focused websites help you stand out in Central Wisconsin. Take your online presence to the next level. Get a free estimate today!`,
	keywords: [
		'web design in Plover',
		'Plover web design services',
		'custom websites in Plover',
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
