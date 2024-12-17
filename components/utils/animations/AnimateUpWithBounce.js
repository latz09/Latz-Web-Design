import { motion } from 'framer-motion';

const AnimateUpWithBounce = ({ children, className, ...rest }) => {
	return (
		<motion.div
			className={className}
			initial={{ y: 100, opacity: .6 }}
			whileInView={{ y: 0, opacity: 1 }}
			
			transition={{
			ease: 'easeOut',
				duration: .5,
				delay: 0.1,
			}}
			viewport={{ once: true }}
			{...rest}
		>
			<div>{children}</div>
		</motion.div>
	);
};

export default AnimateUpWithBounce;
