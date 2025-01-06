import { fetchData } from '@/lib/sanity/sanityFetch';
import { FETCH_WHO_WE_ARE_PAGE as query } from '@/data/queries/who-we-are/FETCH_WHO_WE_ARE_PAGE';
import PageContainer from '@/components/utils/animations/PageContainer';
import WhoWeAreDisplay from '@/components/whoWeAre/WhoWeAreDisplay';



// =========== Main Component =========== //
const WhoWeAre = async () => {
	const [data] = await fetchData(query);

	return (
		<PageContainer>

			<WhoWeAreDisplay data={data} />
		</PageContainer>
	);
};

export default WhoWeAre;


export const revalidate = 10;