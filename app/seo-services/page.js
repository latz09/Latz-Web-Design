import { fetchData } from '@/lib/sanity/sanityFetch';
import { FETCH_SEO_PAGE_DATA_QUERY as query } from '@/data/queries/seo-services/FETCH_SEO_PAGE_DATA_QUERY';
import PageContainer from '@/components/utils/animations/PageContainer';
import { MainHeading, TopHeading } from '@/components/utils/Typography';
import SeoServiceContainer from '@/components/seo/SeoServiceContainer';
import ReviewContainer from '@/components/reviews/ReviewContainer';

export const metadata = {
	title: 'SEO Services',
	description: 'SEO Services',
};

const SeoServicesPage = async () => {
	const [data] = await fetchData(query);

	return (
		<PageContainer>
			<div className='grid  bg-light'>
				<div className='grid gap-16 lg:gap-24  py-8 lg:py-12 bg-light'>
					<section className=' text-light text-center w-2/3 lg:w-1/2 mx-auto'>
						<TopHeading title={data.title} theme='text-primary' />
					</section>
				</div>
				<div>
					<SeoServiceContainer section={data.onPageSeoSection} />
				</div>
				<div>
					<SeoServiceContainer section={data.offPageSeoSection} />
				</div>
				<div className="py-16 ">
				<ReviewContainer /></div>
			</div>
		</PageContainer>
	);
};

export default SeoServicesPage;
