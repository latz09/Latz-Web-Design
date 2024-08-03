import NavigationLogo from './NavigationLogo';
import { AiOutlineMenu } from 'react-icons/ai';
const HomeNavigation = ({ scrolled }) => {
	return (
		<div
			className={`fixed top-0 left-0 w-full  px-6 lg:px-8 z-50 transition-all duration-1000 ${
				scrolled ? 'text-dark ext-light bg-dark/80 backdrop-blur-sm py-4 ' : 'text-light py-8'
			}`}
		>
			<div className='flex justify-between items-center lg:mx-16 2xl:mx-24'>
				<NavigationLogo scrolled={scrolled} />
				<div className='flex gap-4 items-center cursor-pointer'>
					<div
						className={`px-8 py-2 rounded-full font-semibold text-sm md:text-base ${
							scrolled
								? 'bg-light text-dark/80 border border-primary/50 shadow-lg shadow-primary/20'
								: 'bg-tertiary text-dark'
						}`}
					>
						Free Estimate
					</div>

					<div
						className={`p-3  rounded-full transition duration-1000 ${
							scrolled ? 'text-dark bg-light' : 'text-light bg-dark'
						}`}
					>
						<AiOutlineMenu className='text-3xl cursor-pointer ' />
					</div>
				</div>
			</div>
		</div>
	);
};

export default HomeNavigation;
