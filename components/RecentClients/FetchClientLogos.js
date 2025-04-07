



import { fetchData } from '@/lib/sanity/sanityFetch';
import { FETCH_CLIENT_LOGOS_QUERY as query } from '@/data/queries/recent-clients/FETCH_CLIENT_LOGOS_QUERY';
import ScrollerLogo from './LogoScroller';

const FetchClientLogos = async () => {
	const data = await fetchData(query);

	return (
		<div>
		<ScrollerLogo data={data} />
		</div>
	);
};

export default FetchClientLogos;
