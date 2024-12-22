import { fetchData } from '@/lib/sanity/sanityFetch';
import { FETCH_AUTOMATION_SERVICES_QUERY as query } from '@/data/queries/service-automations/FETCH_AUTOMATION_SERVICES_QUERY';
import Introduction from '@/components/automations/sections/Introduction';
import KeyBenefits from '@/components/automations/sections/KeyBenefits';
import { AutomationPageLayout as Layout } from '@/components/automations/design-utils/AutomationPageLayout';


export const metadata = {
	title: 'Reputation Management',
	description: `Monitor, manage, and respond to reviews across multiple platforms with our AI-powered Reputation Management tool. Gain insights into customer sentiment, generate intelligent responses, and build a positive online presence.`,

};

const ReputationManagement = async () => {
    const [data] = await fetchData(query('reputationManagement'));
   
	return (
        <Layout id='#reputationManagement'>
        <Introduction
            title={data.serviceName}
            headline={data.headline}
            intro={data.expandedCopy}
            icon={data.icon}
            image={data.landingImage}
            videoData={data.videoVisuals[0]}
            descriptionHeading={data.descriptionHeading}
        />
        <KeyBenefits data = {data.keyBenefits} />
    </Layout>
	);
};

export default ReputationManagement;

export const revalidate = 10;