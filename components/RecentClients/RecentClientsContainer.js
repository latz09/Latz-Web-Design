import { fetchData } from '@/lib/sanity/sanityFetch';
import { FETCH_RECENT_CLIENTS_DATA_QUERY } from '@/data/queries/recent-clients/FETCH_RECENT_CLIENTS_DATA_QUERY';
import FeaturedClientsIntro from './FeaturedClientsIntro';
import RecentClientCard from './RecentClientCard';
import SlideIn from '../utils/animations/SlideIn';
import RecentClientsPageIntro from './RecentClientsPageIntro';

const RecentClientsContainer = async ({ featuredOnly = true }) => {
	const query = FETCH_RECENT_CLIENTS_DATA_QUERY(featuredOnly); // Pass the parameter here
	const data = await fetchData(query);

	return (
		<div className=' bg-dark pb-12 lg:pb-24'>
			{featuredOnly && <FeaturedClientsIntro />}
			{!featuredOnly && <RecentClientsPageIntro />}

			<div className='max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-8 px-1 lg:px-4 py-12'>
				{data.map((client, index) => (
					<RecentClientCard key={index} data={client} />
				))}
			</div>
		</div>
	);
};

export default RecentClientsContainer;

export const revalidate = 10;

// Page that displays all clients
{
	/* <RecentClientsContainer featuredOnly={false} /> */
}
