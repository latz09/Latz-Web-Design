import { fetchData } from '@/lib/sanity/sanityFetch';
import { FETCH_LANDING_PAGE_DATA as query } from '@/data/queries/landingPages/FETCH_LANDING_PAGE_DATA';
import LandingHero from '@/components/heros/LandingHero';

import SharedContent from '@/components/site-content/SharedContent';

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
			<SharedContent />
		</main>
	);
}

export const revalidate = 10;

{
	/* <LandingHero
image={data.landingImage}
heading={data.landingHeading}
subHeading={data.landingSubHeading}
topHeading={data.topHeading}
/>
<div className='grid gap-24 w-full'>
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
</div> */
}
