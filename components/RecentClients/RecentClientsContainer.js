import { fetchData } from '@/lib/sanity/sanityFetch';
import { FETCH_RECENT_CLIENTS_DATA_QUERY as query } from '@/data/queries/recent-clients/FETCH_RECENT_CLIENTS_DATA_QUERY';
import RecentClientsIntro from './RecentClientsIntro';
import RecentClientCard from './RecentClientCard';

const RecentClientsContainer = async () => {
	const data = await fetchData(query);

	return (
		<div className=' bg-dark pb-24'>
			<div className='bg-gradient-to-b from-dark via-primary/20 to-primary/30 pt-24 pb-12'>
				<RecentClientsIntro />
			</div>
			<div className='max-w-5xl mx-auto grid grid-cols-1   md:grid-cols-2  gap-4 lg:gap-8 px-6 lg:px-4 py-12'>
				{data.map((client, index) => (
					<RecentClientCard key={index} data={client} />
				))}
			</div>
		</div>
	);
};

export default RecentClientsContainer;
