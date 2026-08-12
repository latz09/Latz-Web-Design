import { fetchData } from '@/lib/sanity/sanityFetch';

import { FETCH_CLIENT_SHOWCASE_QUERY as query } from '@/data/queries/recent-clients/FETCH_CLIENT_SHOWCASE_QUERY';
import FeaturedClientsIntro from './FeaturedClientsIntro';
import RecentClientCard from './RecentClientCard';

import RecentClientsPageIntro from './RecentClientsPageIntro';
import {  TopHeading } from '../utils/Typography';
import Link from 'next/link';


const RecentClientsContainer = async ({
	featuredOnly = true,
	includeViewMore,
}) => {
	const data = await fetchData(query);

	// Conditionally slice the clients if includeViewMore is true
	const clientsToDisplay = includeViewMore
		? data.clients.slice(0, 4)
		: data.clients;

	return (
		<div className='p bg-dar bg-primary/5'>
			{featuredOnly && <FeaturedClientsIntro />}
			{!featuredOnly && <RecentClientsPageIntro />  }
			

			<div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-16 lg:gap-y-32 px-1 lg:px-4 py-12 place-items-center'>
				{clientsToDisplay.map((client, index) => (
					<RecentClientCard key={index} data={client} />
				))}
			</div>

			{includeViewMore && (
				<div className='text-center mt-8 p-4  grid place-items-center w-4/5 lg:w-1/3 mx-auto rounded-sm hover:scale-95 transition duration-300 cursor-pointer'>
					<Link href='/our-work' passHref>
						<span className='w-full h-full block'>
							<TopHeading title='View More' theme='text-primary uppercase' />
						</span>
					</Link>
				</div>
			)}
		</div>
	);
};

export default RecentClientsContainer;
export const revalidate = 10;