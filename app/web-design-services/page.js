import { fetchData } from "@/lib/sanity/sanityFetch";
import { FETCH_SERVICES_PAGE_DATA_QUERY as query } from "@/data/queries/services/FETCH_SERVICES_PAGE_DATA_QUERY";


export const metadata = {
	title: 'Web Design Services',
	description: 'Web Design Services',
};

const WebDesignServicesPage = async () => {
	const [data] = await fetchData(query);
	
	return (
		<div>
			<div>Web Design Services</div>
		</div>
	);
};

export default WebDesignServicesPage;
