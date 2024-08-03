import { fetchData } from '@/lib/sanity/sanityFetch';
import { FETCH_RECENT_CLIENTS_DATA_QUERY as query } from '@/data/queries/recent-clients/FETCH_RECENT_CLIENTS_DATA_QUERY';
import RecentClientsIntro from './RecentClientsIntro';
import RecentClientCard from './RecentClientCard';
import SlideIn from '../utils/animations/SlideIn';

const RecentClientsContainer = async () => {
	const data = await fetchData(query);

	return (
		<div className=' bg-dark pb-12 lg:pb-24'>
			
				<div className='bg-gradient-to-b from-dark via-primary/20 to-primary/30 pt-12 lg:pt-24 pb-6 lg:pb-12'>
					<RecentClientsIntro />
				</div>
			
			<div className='max-w-5xl mx-auto grid grid-cols-1   md:grid-cols-2  gap-8 lg:gap-8 px-1 lg:px-4 py-12'>
				{data.map((client, index) => (
					<RecentClientCard key={index} data={client} />
				))}
			</div>
		</div>
	);
};

export default RecentClientsContainer;

export const revalidate = 10;
