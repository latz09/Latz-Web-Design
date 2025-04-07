import Link from 'next/link';
import { MainHeading, TopHeading } from '../utils/Typography';
import Image from 'next/image';

const AboutCta = ({ image, cta }) => {
	return (
		<div className='relative h-[70vh] lg:h-screen w-full mt-12 '>
			{/* Background Image */}
			<Image
				src={image}
				alt='Background'
				fill
				style={{ objectFit: 'cover', objectPosition: 'top' }}
				className='z-0 shadow-xl shadow-primary/30'
			/>

			{/* Dark overlay */}
			<div className='absolute inset-0  z-10'></div>

			{/* Scrollable Content */}
			<div className='absolute bg-gradient-to-b from-dark/20 via-dark/0 to-dark/20 inset-0 overflow-y-auto z-20 flex flex-col items-center justify-end 2xl:justify-center pb-12 2xl:pb-0'>
				<Link href='/contact-latz-web-design'>
					<div className='px-8 py-2 lg:py-4 max-w-4xl text-center rounded-sm bg-dark/95 lg:hover:bg-primary lg:hover:scale-95 transition duration-500 '>
						<TopHeading title={cta} theme='text-light' />
					</div>
				</Link>
			</div>
		</div>
	);
};

export default AboutCta;
