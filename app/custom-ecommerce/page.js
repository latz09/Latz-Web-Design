import { fetchData } from '@/lib/sanity/sanityFetch';
import { OWN_YOUR_STOREFRONT_QUERY as query } from '@/data/queries/store-front/OWN_YOUR_STOREFRONT_QUERY';

import HeroSection from '@/components/ecommerce/HeroSection';
import PainPoints from '@/components/ecommerce/PainPoints';
import CoreBenefits from '@/components/ecommerce/CoreBenefits';
import WhoItsFor from '@/components/ecommerce/WhoItsFor';
import ShopifyDrawbacks from '@/components/ecommerce/ShopifyDrawbacks';
import HowItWorks from '@/components/ecommerce/HowItWorks';
import CallToAction from '@/components/ecommerce/CallToAction';
import PageContainer from '@/components/utils/animations/PageContainer';
import Mockups from '@/components/ecommerce/MockUps';

const CustomEcommerce = async () => {
	const data = await fetchData(query);

	return (
		<PageContainer className='bg-light'>
			<div className='space-y-24 lg:space-y-32    '>
				<HeroSection
					headline={data.headline}
					subheadline={data.subheadline}
					image={data.heroImageUrl}
				/>

				<PainPoints
					heading={data.paintPointHeading}
					questions={data.painPointQuestions}
					answers={data.painPointAnswers}
				/>
				<Mockups
					sectionKey='two-phones-cart-and-checkout'
					width={350}
					height={350}
				/>
				<CoreBenefits benefits={data.coreBenefits} />
				<WhoItsFor list={data.whoItsFor} image={data.whoItsForImageUrl} />
				<HowItWorks steps={data.howItWorks} />
				<div className="pb-40">
                <Mockups sectionKey='custom-rod-builder' width={450} height={450} />
					<CallToAction
						heading={data.cta?.ctaHeading}
						text={data.cta?.ctaText}
						description={data.cta?.ctaDescription}
					/>
					
				</div>
				{/* <ShopifyDrawbacks items={data.shopifyDrawbacks} /> */}
			</div>
		</PageContainer>
	);
};

export default CustomEcommerce;

export const revalidate = 10;
