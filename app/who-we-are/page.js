import { fetchData } from '@/lib/sanity/sanityFetch';
import { FETCH_WHO_WE_ARE_PAGE as query } from '@/data/queries/who-we-are/FETCH_WHO_WE_ARE_PAGE';
import PageContainer from '@/components/utils/animations/PageContainer';

import AboutHero from '@/components/whoWeAre/AboutHero';
import AboutContent from '@/components/whoWeAre/AboutContent';
import AboutCta from '@/components/whoWeAre/AboutCta';
import { CurveDividerBottom, CurveDividerTop } from '@/components/utils/dividers/Dividers';

const WhoWeAre = async () => {
	const [data] = await fetchData(query);

	return (
		<PageContainer>
			<div className='bg-dark'>
				<AboutHero image={data.landingImageUrl} heading={data.mainHeading} subheading={data.subHeading} />
				<CurveDividerBottom color='primary'/>

				<AboutContent data={data.paragraphs} />
				<CurveDividerTop color='primary'/>
				<AboutCta image={data.finalImageUrl} cta={data.cta} />
			</div>
		</PageContainer>
	);
};

export default WhoWeAre;

export const revalidate = 10;
