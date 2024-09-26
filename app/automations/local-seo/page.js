import { fetchData } from '@/lib/sanity/sanityFetch';
import { FETCH_AUTOMATION_SERVICES_QUERY as query } from '@/data/queries/service-automations/FETCH_AUTOMATION_SERVICES_QUERY';
import Introduction from '@/components/automations/sections/Introduction';
import KeyBenefits from '@/components/automations/sections/KeyBenefits';
import dynamic from 'next/dynamic';
const VideoPlayer = dynamic(() => import('@/components/utils/VideoPlayer'), {
	ssr: false,
});

const LocalSeo = async () => {
	const [data] = await fetchData(query('localSEO'));

	return (
		<div className='max-w-7xl mx-auto grid gap-16'>
			<Introduction
				title={data.serviceName}
				headline={data.headline}
				intro={data.expandedCopy}
			/>
			<div>
				{data.videoVisuals.map((video, index) => (
					<VideoPlayer key={index} videoData={video} />
				))}
			</div>
			<KeyBenefits data={data.keyBenefits} />
		</div>
	);
};

export default LocalSeo;

export const revalidate = 10;
