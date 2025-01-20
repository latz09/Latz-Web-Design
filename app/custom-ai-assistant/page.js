import { fetchData } from '@/lib/sanity/sanityFetch';
import { FETCH_AI_CHATBOT_LANDING_PAGE as query } from '@/data/queries/service-automations/FETCH_AI_CHATBOT_LANDING_PAGE';
import AiLandingHero from '../customer-relationship-manager/ai-assistant/AiLandingHero';
import WhyThisChatBot from '../customer-relationship-manager/ai-assistant/WhyThisChatbot';
import HowItWorks from '../customer-relationship-manager/ai-assistant/HowItWorks';
import KeyBenefits from '@/components/cms/cms-page/KeyBenefits';
import ChatbotKeyBenefits from '../customer-relationship-manager/ai-assistant/ChatbotKeyBenefits';
import FAQs from '../customer-relationship-manager/ai-assistant/FAQs';
import CallToAction from '../customer-relationship-manager/ai-assistant/CallToAction';
import FooterNote from '../customer-relationship-manager/ai-assistant/FooterNote';
import PageContainer from '@/components/utils/animations/PageContainer';
import FeaturesBanner from '../customer-relationship-manager/ai-assistant/FeaturesBanner';

export const metadata = {
	title:
		'Custom AI Assistant for Midwest Businesses | Enhance Engagement with AI',
	description: `Looking for a custom AI assistant in Stevens Point, Central Wisconsin, or the Midwest? Our AI chatbot solutions are designed to engage customers, automate support, and provide instant solutions for businesses in Wisconsin, the Twin Cities, and beyond.`,
	keywords: [
		'Custom AI assistant Stevens Point',
		'AI chatbot Central Wisconsin',
		'AI solutions Twin Cities',
		'Business automation Wisconsin',
		'Custom AI chatbot Midwest',
		'Plover Wisconsin AI assistant',
		'Wausau AI chatbot',
		'Midwest AI solutions',
	],
};

export default async function StevensPointWebDesign() {
	const [data] = await fetchData(query);

	return (
		<PageContainer className='bg-light py-12 md:py-24'>
			<main className='bg-light grid gap-24'>
				<div className='grid '>
					<div className='h-[60vh] grid place-items-center'>
						<AiLandingHero
							headline={data.headline}
							subheadline={data.subheadline}
						/>
					</div>
					<div className="grid">
						<FeaturesBanner data={data.features} />
					</div>
				</div>
				<WhyThisChatBot data={data.whyThisAIChatbot} />

				<HowItWorks data={data.howItWorks} featuresData={data.features} />
				<ChatbotKeyBenefits data={data.keyBenefits} />
				<FAQs data={data.faqs} />
				<CallToAction data={data.cta} />
				<FeaturesBanner data={data.features} />
				<FooterNote data={data.footerNote} />
			</main>
		</PageContainer>
	);
}

export const revalidate = 10;
