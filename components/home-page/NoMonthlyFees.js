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
					<MainHeading title='NO MONTHLY FEES.' theme='text-center' />
					<MainHeading title='EVER.' theme='text-center' />
				</div>
				<Description description='Some web companies keep charging you every month just to keep your site online. Not here. We build it, you own it — no subscriptions, no surprise fees, no ongoing costs. Just a one-time investment in your business.' theme='font-bold'/>
			</div>
		</div>
	);
};

export default NotMonthlyFees;
