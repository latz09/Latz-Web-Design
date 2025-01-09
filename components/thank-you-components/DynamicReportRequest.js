'use client';

import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { RiReactjsFill } from 'react-icons/ri'; // Import React icon
import { TopHeading, Description, MainHeading } from '../utils/Typography';
import PageContainer from '../utils/animations/PageContainer';

const DynamicReportRequest = () => {
	const searchParams = useSearchParams();
	const name = searchParams.get('name') || 'there';
	const email = searchParams.get('email') || 'N/A';
	const website = searchParams.get('website') || 'N/A';

	return (
		<PageContainer>
			<div className='bg-gradient-to-b from-dark via-light/5 to-dark  pb-36 pt-12  px-8 md:px-16 text-center text-light grid place-items-center '>
				<div className='grid place-items-center  space-y-8'>
					<MainHeading title={`Thank You, ${name}!`} />
					<div className='relative w-[200px] h-[200px] flex items-center justify-center '>
						{/* React icon */}
						<RiReactjsFill className='text-tertiary text-8xl animate-pulse' />

						{/* Spinning animated ring */}
						<motion.div
							className='absolute w-[200px] h-[200px] border-2 border-primary rounded-full border-dashed'
							animate={{ rotate: 360 }}
							transition={{
								repeat: Infinity,
								duration: 12,
								ease: 'linear',
							}}
						/>
					</div>
				</div>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className='flex flex-col items-center'
				>
					<div className='grid gap-4 my-12'>
						<MainHeading
							title='We are preparing your free report!'
							theme='text-tertiary'
						/>
						<p className='text-lg'>
							<strong className='text-tertiary/60'>Email:</strong> {email}
						</p>
						<p className='text-lg'>
							<strong className='text-tertiary/60'>Website URL:</strong>{' '}
							{website}
						</p>
					</div>

					{/* Icon with spinning ring */}

					<Description
						description='We will send your report to the provided email in the next few days.'
						theme='italic text-tertiary'
					/>
				</motion.div>
			</div>
		</PageContainer>
	);
};

export default DynamicReportRequest;
