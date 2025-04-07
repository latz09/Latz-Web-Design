import { fetchData } from '@/lib/sanity/sanityFetch';
import { FETCH_BUSINESS_SNAPSHOT_REPORT_DATA as query } from '@/data/queries/snapshotReport/FETCH_BUSINESS_SNAPSHOT_REPORT_DATA';

import PageContainer from '@/components/utils/animations/PageContainer';
import { MainHeading } from '@/components/utils/Typography';
import SnapshotFormRequest from '@/components/snapshot-report/SnapshotFormRequest';
import { ReportHeading } from '@/components/snapshot-report/ReportHeading';
import { ReportDetails } from '@/components/snapshot-report/ReportDetails';

const FreeBusinessReport = async () => {
	const data = await fetchData(query);

	return (
		<PageContainer className='bg-light'>
			<div>
				<div>
					<ReportHeading
						headline={data.headline}
						subheadline={data.subheadline}
						image={data.imageUrl}
					/>
					<ReportDetails
						scrollNote={data.scrollNote}
						snapshotDetails={data.snapshotDetails}
					/>
					<div className='py-16 lg:py-32 space-y-8 lg:space-y-16 border-b border-primary/20 w-5/6 lg:w-2/3 mx-auto mb-12'>
						<MainHeading title={data.headline} theme='text-center text-dark uppercase' />

						<div className=' w-full max-w-2xl mx-auto  '>
							<SnapshotFormRequest />
						</div>
					</div>
				</div>
			</div>
		</PageContainer>
	);
};

export default FreeBusinessReport;
export const revalidate = 10;
