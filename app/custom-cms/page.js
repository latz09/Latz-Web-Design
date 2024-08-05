import { fetchData } from '@/lib/sanity/sanityFetch';
import { FETCH_CMS_PAGE_DATA_QUERY as query } from '@/data/queries/CMS/FETCH_CMS_PAGE_DATA.QUERY';

import PageContainer from '@/components/utils/animations/PageContainer';
import {
	Description,
	MainHeading,
	TopHeading,
} from '@/components/utils/Typography';
import OverviewContainer, {
	LearnMoreNowButtonLink,
} from '@/components/cms/overview/OverviewContainer';
import CmsIntro from '@/components/cms/cms-page/CmsIntro';
import KeyBenefits from '@/components/cms/cms-page/KeyBenefits';
import AnimateUp from '@/components/utils/animations/AnimateUp';

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
					<div className=' grid gap-12 lg:gap-16 bg-dark py-24'>
						<section className='  lg:w-full  '>
							<div className="max-w-5xl mx-4 lg:mx-auto">
								<AnimateUp>
									<MainHeading title={title} theme='text-light mb-4' />
									<Description
										description={introText}
										theme='text-light/80 mb-6'
									/>
								</AnimateUp>
							</div>
							<KeyBenefits data={keyBenefits} />
						</section>

						<div className='lg:mt-8 px-8  lg:px-2   grid place-items-center gap-4 '>
							<MainHeading
								title='Take Control of Your Content Today'
								theme='text-tertiary mb-4 text-center'
							/>
							<LearnMoreNowButtonLink
								title='Get Started Now'
								href='/contact-latz-web-design'
							/>
						</div>
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
