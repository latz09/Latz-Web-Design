import { fetchData } from '@/lib/sanity/sanityFetch';
import { FETCH_SEO_PAGE_DATA_QUERY as query } from '@/data/queries/seo-services/FETCH_SEO_PAGE_DATA_QUERY';
import PageContainer from '@/components/utils/animations/PageContainer';
import { MainHeading, TopHeading } from '@/components/utils/Typography';
import SeoServiceContainer from '@/components/seo/SeoServiceContainer';
import ReviewContainer from '@/components/reviews/ReviewContainer';
import FeaturedArticle from '@/components/articles/FeaturedArticle';

export const metadata = {
	title: 'SEO in Saint Paul',
	description:
		'Every website we create comes with a comprehensive on-page SEO strategy, ensuring your site is optimized for search engines and provides an excellent user experience.',
	keywords: ['SEO in Saint Paul', 'SEO services'],
};

const SeoServicesPage = async () => {
	const [data] = await fetchData(query);

	return (
		<PageContainer>
			<div className='grid  bg-light'>
				<div>
					<SeoServiceContainer section={data.onPageSeoSection} />
				</div>
				<div>
					<SeoServiceContainer section={data.offPageSeoSection} />
				</div>
				<div className='py-16 '>
					<ReviewContainer />
				</div>
				<FeaturedArticle featuredArticle={data.featuredArticle} synopsis={data.articleSynopsis} />
			</div>
		</PageContainer>
	);
};

export default SeoServicesPage;
