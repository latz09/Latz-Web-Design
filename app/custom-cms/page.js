import { fetchData } from '@/lib/sanity/sanityFetch';
import { FETCH_CMS_PAGE_DATA_QUERY as query } from '@/data/queries/CMS/FETCH_CMS_PAGE_DATA.QUERY';

import PageContainer from '@/components/utils/animations/PageContainer';
import {
	Description,
	MainHeading,
	TopHeading,
} from '@/components/utils/Typography';
import OverviewContainer from '@/components/cms/overview/OverviewContainer';
import CmsIntro from '@/components/cms/cms-page/CmsIntro';
import KeyBenefits from '@/components/cms/cms-page/KeyBenefits';

const CustomCMSPage = async () => {
	const data = await fetchData(query);

	// Destructure the data for easier use
	const { title, introText, keyBenefits, clientSuccessStory, images } = data;

	return (
		<PageContainer>
			<div className='bg-light   '>
				{/* Page Container */}

				<div className='grid gap-16 lg:gap-24 '>
					{/* Client Success Story */}
					<section className='bg-dark py-16 text-light'>
						<CmsIntro
							title='What Our Clients Say'
							successStory={clientSuccessStory}
						/>
					</section>
					<div className=' mb-8'>
						<OverviewContainer includeLink={false} />
					</div>
					{/* Introduction Section */}
					<div className='max-w-5xl mx-auto grid gap-12 lg:gap-16 '>
						<section className='mx-8  lg:w-full lg:mx-auto text-center'>
							<MainHeading title={title} theme='text-dark mb-4' />
							<Description description={introText} theme='text-dark/80 mb-6' />
						</section>

						{/* Key Benefits Section */}
						<section className='lg:space-y-12 mx-2'>
							<MainHeading
								title='Key Benefits'
								theme='text-primary mb-4 text-center lg:text-start'
							/>
							<KeyBenefits data={keyBenefits} />
						</section>

						{/* Images Section */}
						{images && images.length > 0 && (
							<section className=''>
								<h2 className='text-3xl font-bold text-primary mb-4'>
									Screenshots & Examples
								</h2>
								<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
									{images.map((image, index) => (
										<div
											key={index}
											className='border border-gray-200 rounded-md overflow-hidden'
										>
											<img
												src={image.url}
												alt={image.altText}
												className='w-full h-auto'
											/>
											<div className='p-2'>
												<p className='text-sm text-gray-600'>{image.caption}</p>
											</div>
										</div>
									))}
								</div>
							</section>
						)}
					</div>
				</div>
			</div>
		</PageContainer>
	);
};

export default CustomCMSPage;
