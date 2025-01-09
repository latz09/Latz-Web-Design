import { Suspense } from 'react';
import DynamicReportRequest from '@/components/thank-you-components/DynamicReportRequest';

const RequestAReport = () => {
	return (
		<div>
			
           < Suspense
					fallback={
						<div className='h-full'>
							<Placeholder />
						</div>
					}
				>
					<DynamicReportRequest />
				</Suspense>
		</div>
	);
};

export default RequestAReport;


const Placeholder = () => (
	<div className='grid place-items-center h-full'>
		<div className='text-center grid gap-3'>
			<div className='h-8 w-40 bg-dark/10 rounded'></div>
			<div className='h-4 w-60 bg-dark/10 rounded mt-2'></div>
			<div className='h-4 w-40 bg-dark/10 rounded mt-2'></div>
			<div className='mt-8'>
				<div className='h-10 w-40 bg-dark/10 rounded'></div>
			</div>
		</div>
	</div>
);