'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const ScrollerLogo = ({ data }) => {
	// Duplicate the data to allow seamless loop
	const logos = [...data, ...data, ...data, ...data];
	const containerRef = useRef(null);
	const [activeIndex, setActiveIndex] = useState(null);

	useEffect(() => {
		if (!containerRef.current) return;

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					const index = parseInt(entry.target.getAttribute('data-index'));
					if (entry.isIntersecting) {
						setActiveIndex(index);
						// Remove the effect after 2 seconds
						setTimeout(() => {
							setActiveIndex(null);
						}, 2000);
					}
				});
			},
			{
				// The container is the viewport for our observer
				root: containerRef.current,
				// Use negative margins to focus on a narrow center band
				rootMargin: '0px -40% 0px -40%',
				threshold: 0.6,
			}
		);

		const elements = containerRef.current.querySelectorAll('.logo-wrap');
		elements.forEach((el) => observer.observe(el));

		return () => observer.disconnect();
	}, []);

	return (
		<div className='grid place-items-center pt-10 lg:pt-12'>
			<h2 className='text-center text-lg tracking-wide uppercase text-dark/60 mb-6'>
				Companies Who Chose Us
			</h2>
			<div ref={containerRef} className='relative w-full overflow-hidden py-20 lg:py-24'>
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
							data-index={index}
							className='logo-wrap grid place-items-center flex-shrink-0 w-[100px] h-[100px] lg:w-[130px] lg:h-[130px]'
						>
							<Image
								src={client.logoUrl}
								alt={`${client.companyName} Logo`}
								width={130}
								height={130}
								className={`w-[100px] h-[100px] object-contain transition-all duration-300 filter md:hidden ${
									activeIndex === index ? 'scale-105' : 'grayscale'
								}`}
							/>
							<Image
								src={client.logoUrl}
								alt={`${client.companyName} Logo`}
								width={130}
								height={130}
								className={`w-[130px] h-[130px] object-contain transition-all duration-300 filter hidden md:block ${
									activeIndex === index ? 'scale-105' : 'grayscale'
								}`}
							/>
						</div>
					))}
				</motion.div>
			</div>
		</div>
	);
};

export default ScrollerLogo;
