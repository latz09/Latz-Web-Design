

import KeyBenefits from '@/components/cms/cms-page/KeyBenefits';
import Introduction from '../sections/Introduction';

const CampaignsPro = async () => {
	
	return (
		<div className='space-y-4 mt-12'>
		
			<Introduction
				title={data.serviceName}
				headline={data.headline}
				intro={data.expandedCopy}
			/>
			{/* <KeyBenefits data={data.keyBenefits} /> */}
		</div>
	);
};

export default CampaignsPro;

export const revalidate = 10;