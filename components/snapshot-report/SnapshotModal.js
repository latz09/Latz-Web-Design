import { fetchData } from '@/lib/sanity/sanityFetch';
import { FETCH_BUSINESS_SNAPSHOT_REPORT_DATA as query } from '@/data/queries/snapshotReport/FETCH_BUSINESS_SNAPSHOT_REPORT_DATA';
import SnapshotPopup from './SnapshotPopup';

const SnapshotModal = async () => {
	const data = await fetchData(query);

	return (
		<div>
			<SnapshotPopup data={data} />
		</div>
	);
};

export default SnapshotModal;
