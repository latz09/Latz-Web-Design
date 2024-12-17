import { fetchData } from '@/lib/sanity/sanityFetch';
import { FETCH_TWIN_CITIES_PAGE_DATA as query } from '@/data/queries/landingPages/FETCH_TWIN_CITIES_PAGE_DATA';
import LandingHero from '@/components/heros/LandingHero';
import CreativeWebDesign from '@/components/home-page/CreativeWebDesign';
import RecentClientsContainer from '@/components/RecentClients/RecentClientsContainer';

import AnimateUp from '@/components/utils/animations/AnimateUp';
import ReviewContainer from '@/components/reviews/ReviewContainer';
import ProcessAndPricingContainer from '@/components/process-and-pricing/ProcessAndPricingContainer';
import OverviewContainer from '@/components/cms/overview/OverviewContainer';
import FeaturedArticle from '@/components/articles/FeaturedArticle';
import CRMBlurb from '@/components/automations/CRMBlurb';
import OurFullCircle from '@/components/automations/OurFullCircle';
import CoreServices from '@/components/home-page/CoreServices';
import AreaLandingHero from '@/components/heros/AreaLandingHero';

export default async function WebDesignInSaintPaulMn() {
	const [data] = await fetchData(query);

	return (
		<main className='grid gap-24 bg-light'>
		
			<AreaLandingHero
				image={data.imageUrl}
				heading={data.headline}
				subHeading={data.subheadline}
				topHeading={data.topHeadline}
			/>
			{/* <div className='grid gap-24 w-full'>
				<OurFullCircle /> 
				<CoreServices />
				<CreativeWebDesign data={data.creativeWebDesign} />
				<AnimateUp>
					<RecentClientsContainer />
				</AnimateUp>
				 <ReviewContainer />
				<CRMBlurb />
				<div className=' pt-12'>
					 <ProcessAndPricingContainer /> 
				</div>
				<div>
					 <OverviewContainer includeLink={true} /> 
				</div>
				 <FeaturedArticle
					featuredArticle={data.featuredArticle}
					synopsis={data.articleSynopsis}
				/> 
			</div> */}
		</main>
	);
}

export const revalidate = 10;
