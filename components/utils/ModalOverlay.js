import { motion } from 'framer-motion';
import NavigationLinks from '../navigation/NavigationLinks'; // Ensure you have this component

const ModalOverlay = ({ onClose }) => {
	return (
		<motion.div
			initial={{ opacity: 1, scale: 0, originX: 1, originY: 0 }}
			animate={{ opacity: 1, scale: 1 }}
			exit={{ opacity: 0, scale: 0 }}
			transition={{ duration: 1, ease: 'easeOut' }}
			className='fixed inset-0 bg-dark/80 backdrop-blur-lg flex justify-center items-center z-50  '
		>
			<motion.div
				// initial={{ scale: 1, opacity: 0 }}
				// animate={{ scale: 1, opacity: 1 }}
				// exit={{ scale: 1, opacity: 0 }}
				// transition={{ duration: 4 }}
				className='max-w-5xl mx-auto w-full relative'
			>
				<button
					onClick={onClose}
					className='absolute top-4 right-4 text-xl text-gray-500 hover:text-gray-700'
				>
					✕
				</button>
				<div className='flex flex-col  gap-24  lg:flex-row justify-between p-6'>
					{/* Left Section: Navigation Links */}
					<div className='flex flex-col space-y-4'>
						<NavigationLinks onLinkClick={onClose} />
					</div>

					{/* Right Section: Contact Information */}
					<div className='grid place-items-end '>
						<div className='text-light mb-16 text-lg lg:space-y-16'>
							<div className='lg:space-y-4 text-tertiary'>
								<p className=''>jordan@latzwebdesign.com</p>
								<p className=''>(123) 456-7890</p>
							</div>
							<div className='text-light/70'>
								<p className=''>West Saint Paul, MN</p>
							</div>
						</div>
					</div>
				</div>
			</motion.div>
		</motion.div>
	);
};

export default ModalOverlay;
