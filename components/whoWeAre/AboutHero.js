import { MainHeading } from '../utils/Typography';
import Image from 'next/image';

const AboutHero = ({ image, heading }) => {
	return (
		<div className='relative h-[40vh] lg:h-[50vh] 2xl:h-[65vh] w-full'>
			{/* Background Image */}
			<Image
				src={image}
				alt='Background'
				fill
				style={{ objectFit: 'cover', objectPosition: 'top' }}
				priority
				className='z-0 shadow-xl shadow-primary/30'
			/>

			{/* Dark overlay */}
			<div className='absolute inset-0 bg-gradient-to-b from-dark/0 via-dark/20 to-dark/40 z-10'></div>

			{/* Scrollable Content */}
			<div className='absolute inset-0 overflow-y-auto z-20 flex flex-col items-center justify-end'>
				{/* Add your scrollable content here */}
				<div className='p-4 max-w-4xl text-center'>
					<MainHeading title={heading} theme='text-light/60' />
				
                    
				</div>
			</div>
		</div>
	);
};

export default AboutHero;
