'use client';
import { motion } from 'framer-motion';

const DelayAnimateUp = ({ children, className, ...rest }) => {
	return (
		<>
			<motion.div
				className={className}
				initial={{ y: 70,   }}
				whileInView={{ y: 0,  }}
				transition={{ duration: 0.8, delay: .4 }}
				viewport={{ once: true }}
				{...rest}
			>
				<div>{children}</div>
			</motion.div>
		</>
	);
};

export default DelayAnimateUp;
