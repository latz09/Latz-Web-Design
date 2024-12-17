import { fetchData } from '@/lib/sanity/sanityFetch';
import { FETCH_CORE_SERVICES_OVERVIEW_DATA_QUERY as query } from '@/data/queries/services/FETCH_CORE_SERVICES_OVERVIEW_DATA_QUERY';

const CoreServices = async () => {
	const data = await fetchData(query);

	return (
		<div>
			<h1>{data?.title}</h1>
			{/* Custom Website Development Section */}
			<h2>{data?.customWebsiteDevelopment?.title}</h2>
			<ul>
				{data?.customWebsiteDevelopment?.features?.map((feature, index) => (
					<li key={index}>{feature}</li>
				))}
			</ul>

			{/* Integrated CRM Solutions Section */}
			<h2>{data?.integratedCrmSolutions?.title}</h2>
			<ul>
				{data?.integratedCrmSolutions?.features?.map((feature, index) => (
					<li key={index}>
						<strong>{feature.feature}</strong> - Icon: {feature.icon}
					</li>
				))}
			</ul>

			{/* AI-Powered Add-Ons Section */}
			<h2>{data?.aiPoweredAddOns?.title}</h2>
			<ul>
				{data?.aiPoweredAddOns?.features?.map((addon, index) => (
					<li key={index}>
						<strong>{addon.title}</strong> - {addon.subtitle} - Icon:{' '}
						{addon.icon} - Slug: {addon.slug}
					</li>
				))}
			</ul>
		</div>
	);
};

export default CoreServices;
