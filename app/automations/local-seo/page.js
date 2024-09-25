import { fetchData } from '@/lib/sanity/sanityFetch';
import { FETCH_AUTOMATION_SERVICES_QUERY as query } from '@/data/queries/service-automations/FETCH_AUTOMATION_SERVICES_QUERY';
import Introduction from '@/components/automations/sections/Introduction';
import KeyBenefits from '@/components/automations/sections/KeyBenefits';

const LocalSeo = async () => {
	const [data] = await fetchData(query('localSEO'));
	return (
		<div className="max-w-7xl mx-auto grid gap-16">
			<Introduction
				title={data.serviceName}
				headline={data.headline}
				intro={data.expandedCopy}
			/>
            <KeyBenefits data = {data.keyBenefits} />
		</div>
	);
};

export default LocalSeo;
