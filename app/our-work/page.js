import { fetchData } from '@/lib/sanity/sanityFetch';

import { FETCH_RECENT_CLIENTS_DATA_QUERY as query } from '@/data/queries/recent-clients/FETCH_RECENT_CLIENTS_DATA_QUERY';

export const metadata = {
	title: 'Our Work',
	description: 'Recent clients',
};

const OurWorkPage = async () => {
	const data = await fetchData(query);
	console.log(data)
	return (
		<div>
			<div>Recent Clients</div>
		</div>
	);
};

export default OurWorkPage;
