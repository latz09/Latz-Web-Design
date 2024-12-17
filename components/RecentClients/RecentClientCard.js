import Image from 'next/image';
import { FaLongArrowAltRight } from 'react-icons/fa';
import AnimateUp from '../utils/animations/AnimateUp';

const RecentClientCard = ({ data }) => {
	const { websiteImageUrl, companyName, companyUrl, websiteDescription } = data;

	return (
		<AnimateUp>
			<a
				href={companyUrl}
				target='_blank'
				rel='noopener noreferrer'
				className='block group  overflow-hidden transition-transform duration-300 hover:scale-[1.02]'
			>
				{/* Image Section */}
				<div className='relative w-full h-60 lg:h-72   '>
					<Image
						src={websiteImageUrl}
						alt={`${companyName} Website`}
						fill
						style={{ objectFit: 'cover', objectPosition: 'center' }}
						className='transition-transform duration-500 group-hover:scale-105 shadow-lg'
					/>
				</div>

				{/* Content Section */}
				<div className='p-5 bg-dark text-light mt-4 rounded-sm '>
					{/* Company Name and Visit Link */}
					<div className='flex items-center justify-between mb-2 '>
						<h3 className='text-lg lg:text-xl font-bold text-light group-hover:text-primary transition-colors duration-300'>
							{companyName}
						</h3>
						<div className='flex items-center text-primary'>
							<span className='font-semibold'>Visit Site</span>
							<FaLongArrowAltRight className='ml-2 text-lg lg:text-2xl transform transition-transform duration-300 group-hover:translate-x-1' />
						</div>
					</div>

					{/* Website Description */}
					<p className='text-sm lg:text-base text-light'>
						{websiteDescription}
					</p>
				</div>
			</a>
		</AnimateUp>
	);
};

export default RecentClientCard;
export const revalidate = 10;
