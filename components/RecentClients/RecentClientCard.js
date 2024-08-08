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
					<div className='absolute inset-0 bg-dark/40 transition-colors duration-500 ease-in-out md:group-hover:bg-dark/30 flex flex-col justify-between text-light '>
						<div className='flex flex-col bg-dark/5 transition-colors duration-500 ease-in-out md:group-hover:bg-dark/100'>
							<h3 className='text-xl lg:text-2xl font-bold px-6 py-2 bg-light/80 text-dark/80 md:group-hover:bg-dark md:group-hover:text-light  shadow-lg  '>{companyName}</h3>
						</div>
						<div className='flex flex-col bg-dark/40 px-6 pt-4  transition-colors duration-500 ease-in-out md:group-hover:bg-light/80 md:group-hover:text-dark'>
							<div className='text-sm lg:text-base md:group-hover:font-bold'>{websiteDescription}</div>
							<div className='text-sm lg:text-base place-self-end py-3 lg:py-2 lg:font-semibold tracking-wider flex items-center '>
								<span className="md:group-hover:text-primary">Visit Site</span>
								<FaLongArrowAltRight className='inline-block text-tertiary ml-2 transform transition-transform duration-500 ease-in-out group-hover:translate-x-2 text-lg lg:text-2xl group-hover:text-primary' />
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
