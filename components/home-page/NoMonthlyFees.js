import Image from 'next/image';
import { Description, MainHeading } from '../utils/Typography';
import savingImage from '@/public/svg/undraw_savings_uwjn.svg'; // or your custom torn receipt image

const NotMonthlyFees = () => {
	return (
		<div className='relative pt-24 pb-32 max-w-5xl mx-auto px-4 overflow-hidden'>
			{/* Background Image */}
			<div className='absolute inset-0 flex justify-center items-center pointer-events-none'>
				<Image
					src={savingImage}
					alt='No Monthly Fees'
					className='opacity-20 w-full h-auto max-w-[500px] object-contain '
				/>
			</div>

			{/* Foreground Text */}
			<div className='relative z-10 space-y-4 text-center'>
				<div className='space-y-2'>
					<MainHeading title='YOU OWN IT' theme='text-center' />
					<MainHeading title='FOREVER.' theme='text-center' />
				</div>
				<Description description={`Most web companies want you locked into a monthly bill just to keep your own site online. We don't work that way. Pay once, own it outright — no subscriptions, no renewals, no surprise invoices down the road.`} theme='font-bold'/>
			</div>
		</div>
	);
};

export default NotMonthlyFees;
