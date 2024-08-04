import Link from 'next/link';
import NavigationLogo from './NavigationLogo';
import { AiOutlineMenu } from 'react-icons/ai';
const HomeNavigation = ({ scrolled }) => {
	return (
		
		<div
			className={`fixed top-0 left-0 w-full bg-dark px-4 md:px-6 lg:px-8 z-[9999] transition-all duration-1000 ${
				scrolled
					? 'text-dark ext-light z-[1] bg-dark/80 backdrop-blur-sm py-4 '
					: 'text-light py-8'
			}`}
		>
			<div className='flex justify-between items-center lg:mx-16 2xl:mx-24'>
				<NavigationLogo scrolled={scrolled} />
				<div className='flex gap-4 items-center cursor-pointer'>
					<Link href='/contact-latz-web-design'>
						<div
							className={` rounded-full text-center font-semibold text-sm md:text-base ${
								scrolled
									? 'bg-light text-dark/80 border border-primary/50 shadow-lg shadow-primary/20 px-8 py-2'
									: 'bg-tertiary text-dark px-4 lg:px-8 py-2'
							}`}
						>
							Free Estimate
						</div>
					</Link>

					<div
						className={`p-3  rounded-full transition duration-1000 ${
							scrolled ? 'text-dark bg-light' : 'text-light bg-dark'
						}`}
					>
						<AiOutlineMenu className='text-xl lg:text-3xl cursor-pointer ' />
					</div>
				</div>
			</div>
		</div>
	);
};

export default HomeNavigation;
