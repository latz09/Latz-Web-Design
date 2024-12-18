import { fetchData } from '@/lib/sanity/sanityFetch';
import { FETCH_RECENT_CLIENTS_DATA_QUERY } from '@/data/queries/recent-clients/FETCH_RECENT_CLIENTS_DATA_QUERY';
import FeaturedClientsIntro from './FeaturedClientsIntro';
import RecentClientCard from './RecentClientCard';
import SlideIn from '../utils/animations/SlideIn';
import RecentClientsPageIntro from './RecentClientsPageIntro';
import { MainHeading } from '../utils/Typography';
import Link from 'next/link';

const RecentClientsContainer = async ({
	featuredOnly = true,
	includeViewMore,
}) => {
	const query = FETCH_RECENT_CLIENTS_DATA_QUERY(featuredOnly); // Pass the parameter here
	const data = await fetchData(query);

	return (
		<div className='  pb-12 lg:pb-24 bg-dark'>
			{featuredOnly && <FeaturedClientsIntro />}
			{!featuredOnly && <RecentClientsPageIntro />}

			<div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 lg:gap-y-24  px-1 lg:px-4 py-12  '>
				{data.map((client, index) => (
					<RecentClientCard key={index} data={client} />
				))}
			</div>
			{includeViewMore && (
				<div className='text-center mt-8 p-4 border border-tertiary grid place-items-center w-4/5 lg:w-1/2 mx-auto rounded-sm hover:scale-95 transition duration-300 cursor-pointer'>
					<Link href='/our-work' passHref>
						<span className='w-full h-full block'>
							<MainHeading title='View More' theme='text-tertiary' />
						</span>
					</Link>
				</div>
			)}
		</div>
	);
};

export default RecentClientsContainer;

export const revalidate = 10;

// Page that displays all clients
{
	/* <RecentClientsContainer featuredOnly={false} /> */
}
