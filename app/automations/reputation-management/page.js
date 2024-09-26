import { fetchData } from '@/lib/sanity/sanityFetch';
import { FETCH_AUTOMATION_SERVICES_QUERY as query } from '@/data/queries/service-automations/FETCH_AUTOMATION_SERVICES_QUERY';
import Introduction from '@/components/automations/sections/Introduction';
import KeyBenefits from '@/components/automations/sections/KeyBenefits';
import { AutomationPageLayout as Layout } from '@/components/automations/design-utils/AutomationPageLayout';
const ReputationManagement = async () => {
    const [data] = await fetchData(query('reputationManagement'));
   
	return (
        <Layout >
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