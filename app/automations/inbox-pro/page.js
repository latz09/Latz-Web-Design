import { fetchData } from '@/lib/sanity/sanityFetch';
import { FETCH_AUTOMATION_SERVICES_QUERY as query } from '@/data/queries/service-automations/FETCH_AUTOMATION_SERVICES_QUERY';
import { AutomationPageLayout as Layout } from '@/components/automations/design-utils/AutomationPageLayout';
import Introduction from '@/components/automations/sections/Introduction';
import KeyBenefits from '@/components/automations/sections/KeyBenefits';

const InboxPro = async () => {
	const [data] = await fetchData(query('inboxPro'));
	return (
		<Layout>
			<Introduction
				title={data.serviceName}
				headline={data.headline}
				intro={data.expandedCopy}
				icon={data.icon}
				videoData={data.videoVisuals[0]}
			/>
            <KeyBenefits data = {data.keyBenefits} />
		</Layout>
	);
};

export default InboxPro;

export const revalidate = 10;