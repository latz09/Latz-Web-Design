import { fetchData } from '@/lib/sanity/sanityFetch';

import { FETCH_RECENT_CLIENTS_DATA_QUERY as query } from '@/data/queries/recent-clients/FETCH_RECENT_CLIENTS_DATA_QUERY';
import PageContainer from '@/components/utils/animations/PageContainer';

export const metadata = {
	title: 'Our Work',
	description: 'Recent clients',
};

const OurWorkPage = async () => {
	const data = await fetchData(query);

	return (
		<PageContainer>
			<div className=''>Recent Clis</div>
			<div className=''>Recent Clients</div>
			<div className=''>Recent Clients</div>
			<div className=''>Recent Clients</div>
			<div className=''>Recent Clients</div>
			<div className=''>Recent Clients</div>
			<div className=''>Recent Clients</div>
			<div className=''>Recent Clients</div>
			<div className=''>Recent Clients</div>
		</PageContainer>
	);
};

export default OurWorkPage;
