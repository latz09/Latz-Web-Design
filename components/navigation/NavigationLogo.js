import logoIcon from '@/public/web-design-in-saint-paul.png';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
const NavigationLogo = ({ scrolled }) => {
	return (
		<Link href={'/'}>
			<div className=''>
				{scrolled ? (
					<motion.div
						initial={{ opacity: 0, rotate: 0 }} // Start with no rotation and zero opacity
						whileInView={{ opacity: 1, rotate: 360 }} // Full opacity and one full rotation
						transition={{ duration: 1.25, ease: 'easeInOut' }} // Smooth transition
					>
					<LogoGuy />
					</motion.div>
				) : (
					<div>
						<span className='md:text-lg lg:text-2xl uppercase font-black scale-y-125 tracking-wider'>
							Latz Web Design
						</span>
					</div>
				)}
			</div>
		</Link>
	);
};

export default NavigationLogo;


export const LogoGuy = () => {
	return (
		<Link href={'/'}>
		<Image
		src={logoIcon}
		alt='Web design in Saint Paul'
		className=''
		width={35}
		height={35}
	/>
	</Link>
	)
}
