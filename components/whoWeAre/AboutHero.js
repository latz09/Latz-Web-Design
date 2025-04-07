import { MainHeading, TopHeading } from '../utils/Typography';
import Image from 'next/image';

const AboutHero = ({ image, heading, subheading }) => {
	return (
		<div className='relative h-[40vh] lg:h-[50vh] 2xl:h-[60vh] w-full'>
			{/* Background Image */}
			<Image
				src={image}
				alt='Background'
				fill
				style={{ objectFit: 'cover', objectPosition: 'top' }}
				priority
				className='z-0 shadow-lg shadow-primary/20'
			/>

			{/* Dark overlay */}
			<div className='absolute inset-0 bg-gradient-to-b from-dark/40 via-dark/10 to-dark/40 z-10'></div>

			{/* Scrollable Content */}
			<div className='absolute inset-0 overflow-y-auto z-20 flex flex-col items-center justify-end'>
				{/* Add your scrollable content here */}
				<div className='p-2 lg:p-4 max-w-4xl text-center lg:space-y-2'>
					<div className="text-center uppercase">
					<MainHeading title={'Meet Latz'} theme='text-light' />
					<MainHeading title={'WEB DESIGN'} theme='text-light' /></div>
					<TopHeading title={subheading} theme='text-light' />
				
                    
				</div>
			</div>
		</div>
	);
};

export default AboutHero;
