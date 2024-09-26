import { fetchData } from '@/lib/sanity/sanityFetch';
import { FETCH_AUTOMATION_SERVICES_QUERY as query } from '@/data/queries/service-automations/FETCH_AUTOMATION_SERVICES_QUERY';
import Introduction from '@/components/automations/sections/Introduction';
import KeyBenefits from '@/components/automations/sections/KeyBenefits';
import { AutomationPageLayout as Layout } from '@/components/automations/design-utils/AutomationPageLayout';
import CheckList from '@/components/automations/sections/Checklist';

const CampaignsPro = async () => {
	const [data] = await fetchData(query('campaignsPro'));

	return (
		<Layout id='campaignsPro'>
			<Introduction
			 
				title={data.serviceName}
				headline={data.headline}
				intro={data.expandedCopy}
				icon={data.icon}
				// videoData={data.videoVisuals[0]}
				descriptionHeading={data.descriptionHeading}
			/>
			<div>
			<KeyBenefits data={data.keyBenefits} /></div>
			<CheckList data={data.checklist} />
		</Layout>
	);
};

export default CampaignsPro;

export const revalidate = 10;
