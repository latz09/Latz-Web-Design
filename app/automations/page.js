import { fetchData } from '@/lib/sanity/sanityFetch';
import { FETCH_AUTOMATION_SERVICES_QUERY as query } from '@/data/queries/service-automations/FETCH_AUTOMATION_SERVICES_QUERY';
import { AutomationPageLayout as Layout } from '@/components/automations/design-utils/AutomationPageLayout';
import Introduction from '@/components/automations/sections/Introduction';
import KeyBenefits from '@/components/automations/sections/KeyBenefits';
import dynamic from 'next/dynamic';
import CheckList from '@/components/automations/sections/Checklist';

const VideoPlayer = dynamic(() => import('@/components/utils/VideoPlayer'), {
	ssr: false,
});
const ServiceLayout = async () => {
	const [data] = await fetchData(query('businessAppCRM'));
	
	return (
		
		<Layout id='automations'>
		<Introduction
			title={data.serviceName}
			headline={data.headline}
			intro={data.expandedCopy}
			icon={data.icon}
			
			descriptionHeading={data.descriptionHeading}
		/>
		
		<KeyBenefits data={data.keyBenefits} />
		<CheckList data={data.checklist} />
	</Layout>
		
	);
};

export default ServiceLayout;

export const revalidate = 10;