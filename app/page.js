import { fetchData } from '@/lib/sanity/sanityFetch';
import { FETCH_HOME_PAGE_DATA_QUERY as query } from '@/data/queries/home-page/FETCH_HOME_PAGE_DATA_QUERY';
import LandingHero from '@/components/heros/LandingHero';
import CreativeWebDesign from '@/components/home-page/CreativeWebDesign';
import RecentClientsContainer from '@/components/RecentClients/RecentClientsContainer';

import AnimateUp from '@/components/utils/animations/AnimateUp';
import ReviewContainer from '@/components/reviews/ReviewContainer';
import ProcessAndPricingContainer from '@/components/process-and-pricing/ProcessAndPricingContainer';

export default async function Home() {
	const [data] = await fetchData(query);

	return (
		<main className='grid gap-24 pb-32'>
			<LandingHero
				image={data.landingImage}
				heading={data.landingHeading}
				subHeading={data.landingSubHeading}
				topHeading={data.topHeading}
			/>
			<div className='grid gap-24 w-full'>
				<CreativeWebDesign data={data.creativeWebDesign} />
				<AnimateUp>
					<RecentClientsContainer />
				</AnimateUp>
				<ReviewContainer />
				<div className="bg-dark pt-12">
					<ProcessAndPricingContainer />
				</div>
			</div>
		</main>
	);
}

export const revalidate = 10;
