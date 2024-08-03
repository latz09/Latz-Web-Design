import logoIcon from '@/public/web-design-in-saint-paul.png';
import Image from 'next/image';
import { motion } from 'framer-motion';
const NavigationLogo = ({ scrolled }) => {
	return (
		<div className=''>
			{scrolled ? (
			<motion.div
			initial={{ opacity: 0, rotate: 0 }} // Start with no rotation and zero opacity
			whileInView={{ opacity: 1, rotate: 360 }} // Full opacity and one full rotation
			transition={{ duration: 1.25, ease: "easeInOut" }} // Smooth transition
		  >
					<Image
						src={logoIcon}
						alt='Web design in Saint Paul'
						className=''
						width={35}
						height={35}
					/>
				</motion.div>
			) : (
				<div>
					<span className='md:text-lg lg:text-2xl uppercase font-black scale-y-125 tracking-wider'>
						Latz Web Design
					</span>
				</div>
			)}
		</div>
	);
};

export default NavigationLogo;
