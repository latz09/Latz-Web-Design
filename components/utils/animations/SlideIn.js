'use client';
import { motion } from 'framer-motion';

const SlideIn = ({ children, className, ...rest }) => {
	return (
		<>
			<motion.div
				className={className}
				initial={{ scale: .5, opacity: 0, }}
				whileInView={{ scale: 1, opacity: 1,  }}
				transition={{ duration: 1.1, delay: 0 }}
				viewport={{ once: true }}
				{...rest}
			>
				<div>{children}</div>
			</motion.div>
		</>
	);
};

export default SlideIn;
