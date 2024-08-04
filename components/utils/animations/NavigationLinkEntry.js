'use client';
import { motion } from 'framer-motion';

const NavigationLinkEntry = ({ children, className, ...rest }) => {
	return (
		<>
			<motion.div
				className={className}
				initial={{x: -100,  opacity: 0, }}
				whileInView={{ x: 0, opacity: 1,  }}
				transition={{ duration: .8, delay: .6, ease: 'easeOut' }}
				viewport={{ once: true }}
				{...rest}
			>
				<div>{children}</div>
			</motion.div>
		</>
	);
};

export default NavigationLinkEntry;
