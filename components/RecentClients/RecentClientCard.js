import Image from 'next/image';

import { PiArrowRightThin } from "react-icons/pi";

import AnimateUp from '../utils/animations/AnimateUp';

const RecentClientCard = ({ data }) => {
	const { websiteImage: websiteImageUrl, companyName, companyUrl, websiteDescription } = data;

	return (
		<AnimateUp>
			<a
				href={companyUrl}
				target='_blank'
				rel='noopener noreferrer'
				className='block group  overflow-hidden transition-transform duration-300 hover:scale-[1.02]'
			>
				<div className='px-2 pb-6  text-dark mt-4  '>
					{/* Company Name and Visit Link */}
					<div className='flex items-center justify-between mb-2 '>
						<h3 className='text-xl lg:text-3xl font-bold  group-hover:text-primary transition-colors duration-300 uppercase'>
							{companyName}
						</h3>
						<div className='flex items-center '>
							<span className='font-semibold'>Visit Site</span>
							<PiArrowRightThin className='ml-2 text-lg lg:text-2xl transform transition-transform duration-300 group-hover:translate-x-1 text-primary' />
						</div>
					</div>

					{/* Website Description */}
					<p className='lg:text-xl mt-8'>
						{websiteDescription}
					</p>
				</div>
				{/* Image Section */}
				<div className='relative w-full h-[16.5rem] lg:h-[21rem]   '>
					<Image
						src={websiteImageUrl}
						alt={`${companyName} Website`}
						fill
						// style={{ objectFit: 'cover', objectPosition: 'center' }}
						className='transition-transform duration-500  shadow-lg'
					/>
				</div>

				{/* Content Section */}
				
			</a>
		</AnimateUp>
	);
};

export default RecentClientCard;
export const revalidate = 10;
