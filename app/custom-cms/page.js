import { fetchData } from '@/lib/sanity/sanityFetch';
import { FETCH_CMS_PAGE_DATA_QUERY as query } from '@/data/queries/CMS/FETCH_CMS_PAGE_DATA.QUERY';
import PageContainer from '@/components/utils/animations/PageContainer';

const CustomCMSPage = async () => {
	const data = await fetchData(query);

	return (
		<PageContainer>
			<div>
				<div></div>
			</div>
		</PageContainer>
	);
};

export default CustomCMSPage;
