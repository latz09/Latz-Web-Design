'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const ScrollerLogo = ({ data }) => {
	// Duplicate the data to allow seamless loop
	const logos = [...data, ...data, ...data, ...data];

	return (
		<div className=' grid place-items-center pt-10 lg:pt-12 '>
			<h2 className='text-center text-lg tracking-wide uppercase text-dark/60 mb-6'>
				Companies Who Chose Us
			</h2>
			<div className='relative w-full overflow-hidden  py-20 lg:py-24'>
				{/* Absolute positioning takes the animated container out of the normal flow */}
				<motion.div
					className='absolute left-0 top-0 flex gap-20 lg:gap-32'
					style={{ whiteSpace: 'nowrap' }}
					animate={{ x: ['0%', '-50%'] }}
					transition={{
						repeat: Infinity,
						repeatType: 'loop',
						duration: 80, // adjust speed here
						ease: 'linear',
					}}
				>
					{logos.map((client, index) => (
						<div
							key={index}
							className='grid place-items-center flex-shrink-0 w-[100px] h-[100px] lg:w-[130px] lg:h-[130px] '
						>
							<Image
								src={client.logoUrl}
								alt={`${client.companyName} Logo`}
								width={130}
								height={130}
								className='w-[100px] h-[100px] object-contain md:hidden grayscale hover:grayscale-0 transition-all duration-300'
							/>
							<Image
								src={client.logoUrl}
								alt={`${client.companyName} Logo`}
								width={130}
								height={130}
								className='w-[130px] h-[130px] object-contain hidden md:block grayscale hover:grayscale-0 transition-all duration-300'
							/>
						</div>
					))}
				</motion.div>
			</div>
		</div>
	);
};

export default ScrollerLogo;
