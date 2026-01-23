import { fetchData } from '@/lib/sanity/sanityFetch';
import { FETCH_APPLETON_PAGE_DATA as query } from '@/data/queries/landingPages/FETCH_APPLETON_LANDING_PAGE_DATA';

import AreaLandingHero from '@/components/heros/AreaLandingHero';
import SharedContent from '@/components/site-content/SharedContent';
import { CurveDividerBottom } from '@/components/utils/dividers/Dividers';

export const metadata = {
    title: 'Appleton Web Design & Development | Latz Web Design',
    description: `Looking for web design in Appleton? Latz Web Design crafts modern, mobile-friendly sites with on-page SEO to help your business stand out in Central Wisconsin.`,
    keywords: [
        'Appleton web design',
        'Central Wisconsin web development',
        'Wausau Wisconsin web design',
        'SEO web design Wisconsin',
        'Appleton custom websites',
    ],
};

export default async function AppletonWebDesign() {
    const [data] = await fetchData(query);

    return (
        <main className='grid  bg-light'>
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
