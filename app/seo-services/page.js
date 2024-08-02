import { fetchData } from "@/lib/sanity/sanityFetch";
import { FETCH_SEO_PAGE_DATA_QUERY as query } from "@/data/queries/seo-services/FETCH_SEO_PAGE_DATA_QUERY";

export const metadata = {
	title: 'SEO Services',
	description: 'SEO Services',
};

const SeoServicesPage = async () => {
	const [data] = await fetchData(query);
	
	return (
		<div>
			<div>SEO Services</div>
		</div>
	);
};

export default SeoServicesPage;
