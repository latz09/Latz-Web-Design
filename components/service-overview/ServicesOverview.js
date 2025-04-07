'use client';

import React from 'react';
import {	FaPencilRuler, FaCogs } from 'react-icons/fa';
import { FiTrendingUp } from 'react-icons/fi';
import { HiOutlineCog6Tooth } from 'react-icons/hi2';
import { FaRocket } from "react-icons/fa6";

import { Description } from '../utils/Typography';
import AnimateUp from '../utils/animations/AnimateUp';
import { motion } from 'framer-motion';

const SERVICES_WRAPPER_CLASSES =
	'max-w-7xl mx-auto grid gap-x-8 gap-y-16 lg:gap-x-16 lg:gap-y-24 lg:grid-cols-2  place-items-center text-center ';

const SERVICE_CARD_CLASSES =
	'group  flex flex-col items-center gap-4 transition duration-500';

const iconMap = {
	FaPencilRuler: FaPencilRuler,
	FaCogs: FaCogs,
	FaRocket: FaRocket,
	FiTrendingUp: FiTrendingUp,
	// Add more icons as needed
};

const ServicesOverview = ({ services }) => {
	return (
		<div className={SERVICES_WRAPPER_CLASSES}>
			{services?.map((service, index) => {
				const Icon = iconMap[service.icon] || FaRocket;

				return (
					<AnimateUp key={index}>
						<div className={SERVICE_CARD_CLASSES}>
							<motion.div
								initial={{ scale: 0.8 }}
								whileInView={{ scale: 1, rotate: 12 }}
								transition={{ duration: 1 }}
							>
								<Icon className='text-6xl text-primary mb-2 group-hover:-rotate-12 tranistion duration-500 group-hover:scale-105	 ' />
							</motion.div>
							<motion.div
								initial={{ scale: 0.8 }}
								whileInView={{ scale: 1 }}
								transition={{ duration: 1 }}
							>
								<h2 className='text-2xl lg:text-3xl font-bold uppercase  group-hover:text-dark/80 transition duration-500 '>
									{service.title}
								</h2>
							</motion.div>
							<motion.div
								initial={{ scale: 0.8, rotate: 4, opacity: 0.6 }}
								whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
								transition={{ duration: 1 }}
							>
								<Description
									description={service.description}
									theme='text-dark'
								/>
							</motion.div>
						</div>
					</AnimateUp>
				);
			})}
		</div>
	);
};

export default ServicesOverview;
