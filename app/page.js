import { fetchData } from '@/lib/sanity/sanityFetch';
import { FETCH_HOME_PAGE_DATA_QUERY as query } from '@/data/queries/home-page/FETCH_HOME_PAGE_DATA_QUERY';
import LandingHero from '@/components/heros/LandingHero';
import CreativeWebDesign from '@/components/home-page/CreativeWebDesign';
import Review from '@/components/utils/Review';
import RecentClientsContainer from '@/components/RecentClients/RecentClientsContainer';

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
			<div className="grid gap-24 w-full">
				<CreativeWebDesign data={data.creativeWebDesign} />
				<RecentClientsContainer / >
				
			</div>
		</main>
	);
}

export const revalidate = 10;



{/* <Review reviews={data.reviews} reviewerName={'Katie Jo'}/>  */}