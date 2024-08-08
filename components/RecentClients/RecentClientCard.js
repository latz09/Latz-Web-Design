import Image from 'next/image';
import { FaLongArrowAltRight } from 'react-icons/fa';
import AnimateUp from '../utils/animations/AnimateUp';

const RecentClientCard = ({ data }) => {
	const {
		websiteImageUrl,
		clientLogoUrl,
		companyName,
		companyUrl,
		websiteDescription,
	} = data;

	return (
		<AnimateUp>
			<a
				href={companyUrl}
				target='_blank'
				rel='noopener noreferrer'
				className='block group relative w-full h-64 lg:h-80 overflow-hidden transform transition-all duration-700 md:hover:scale-95 rounded-sm'
			>
				<div className='relative w-full h-full'>
					<Image
						src={websiteImageUrl}
						alt={`${companyName} Website`}
						fill
						style={{ objectFit: 'cover', objectPosition: 'center' }}
						className='rounded-sm'
					/>
					<div className='absolute inset-0 bg-gradient-to-b from-dark/0 via-primary/20 to-dark transition-colors duration-500 ease-in-out md:group-hover:bg-dark/30 flex flex-col justify-between text-light'>
						<div className='flex justify-between items-center px-6 py-3 bg-light'>
							<h3 className='text-xl font-bold text-dark '>
								{companyName}
							</h3>
							<div className='text-sm lg:text-base lg:font-semibold  flex items-center'>
								<span className=' text-dark '>Visit Site</span>
								<FaLongArrowAltRight className='inline-block text-primary ml-2 transform transition-transform duration-500 ease-in-out group-hover:translate-x-2 text-lg lg:text-2xl ' />
							</div>
						</div>
						<div className='flex flex-col bg-dark/30 px-6 py-4 transition-colors duration-500 ease-in-out md:group-hover:bg-light/80 md:group-hover:text-dark '>
							<div className='text-sm lg:text-base  md:group-hover:font-bold'>
								{websiteDescription}
							</div>
						</div>
					</div>
				</div>
			</a>
		</AnimateUp>
	);
};

export default RecentClientCard;
export const revalidate = 10;
