'use client';
import { motion } from 'framer-motion';

const DelayAnimateUp = ({ children, className, ...rest }) => {
	return (
		<>
			<motion.div
				className={className}
				initial={{ y: 100, opacity: 0   }}
				whileInView={{ y: 0, opacity: 1  }}
				transition={{ duration: 0.8, delay: .55 }}
				viewport={{ once: true }}
				{...rest}
			>
				<div>{children}</div>
			</motion.div>
		</>
	);
};

export default DelayAnimateUp;
