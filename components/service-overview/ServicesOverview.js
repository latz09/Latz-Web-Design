'use client';

import React from 'react';
import {
	FaCode,
	
	FaTools,
	FaLightbulb,
	FaSearchLocation,
	FaLaptop,
	FaCloudDownloadAlt,
	FaPenFancy,
	FaThumbsUp
	

} from 'react-icons/fa';
import { Description, MainHeading, TopHeading } from '../utils/Typography';
import AnimateUp from '../utils/animations/AnimateUp';
import { motion } from 'framer-motion';

const SERVICES_WRAPPER_CLASSES =
	'max-w-7xl mx-auto grid gap-x-8 gap-y-16 lg:gap-x-16 lg:gap-y-24 md:grid-cols-2 lg:grid-cols-2 place-items-center text-center ';

const SERVICE_CARD_CLASSES =
	'group  flex flex-col items-center gap-4 transition duration-500';

const iconMap = {
	FaLaptop: FaLaptop,
	FaCode: FaCode,
	FaTools: FaTools,
	FaLightbulb: FaLightbulb,
	FaSearchLocation : FaSearchLocation,
	FaCloudDownloadAlt: FaCloudDownloadAlt,
	FaPenFancy: FaPenFancy,
	FaThumbsUp: FaThumbsUp
};

const ServicesOverview = ({ services }) => {
	return (
		<div className={SERVICES_WRAPPER_CLASSES}>
			{services?.map((service, index) => {
				const Icon = iconMap[service.icon] || FaLaptop;

				return (
					<AnimateUp key={index}>
						<div className={SERVICE_CARD_CLASSES}>
							<motion.div
								initial={{ scale: 0.8 }}
								whileInView={{ scale: 1, rotate: 12 }}
								transition={{ duration: 1 }}
							>
								<Icon className='text-6xl text-dark/80 mb-2 group-hover:-rotate-12 tranistion duration-500 group-hover:text-primary ' />
							</motion.div>
							<motion.div
								initial={{ scale: 0.8 }}
								whileInView={{ scale: 1 }}
								transition={{ duration: 1 }}
							>
								<h2 className='text-2xl lg:text-3xl font-bold uppercase text-primary group-hover:text-dark/80 transition duration-500 '>
									{service.title}
								</h2>
							</motion.div>
							<motion.div
								initial={{ scale: 0.8, rotate: 4, opacity: .6 }}
								whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
								transition={{ duration: 1 }}
							>
								<Description description={service.description} theme='font-semibold text-dark/80 italic g' />
							</motion.div>
						</div>
					</AnimateUp>
				);
			})}
		</div>
	);
};

export default ServicesOverview;
