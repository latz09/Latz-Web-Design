'use client';
import { Description, MainHeading } from '../utils/Typography';
import { FaMapMarkedAlt } from 'react-icons/fa';
import { AiOutlineComment, AiOutlineRise } from 'react-icons/ai';
import { MdSpeed } from 'react-icons/md';
import { HiOutlineUserGroup } from 'react-icons/hi';
import AnimateUp, { FadeIn } from '../utils/animations/AnimateUp';

export const ReportDetails = ({ scrollNote, snapshotDetails }) => {
	return (
		<div className='space-y-12 bg-gradient-to-l from-dark via-dark/80 to-dark py-24 '>
			<MainHeading
				title={`${scrollNote}:`}
				theme={'text-center text-light px-2'}
			/>

			<div className='max-w-7xl mx-auto grid place-items-center lg:grid-cols-2 gap-6 text-dark'>
				{snapshotDetails.map((detail, index) => {
					let IconComponent;

					// Match the icon string to the corresponding imported icon
					switch (detail.icon) {
						case 'FaMapMarkedAlt':
							IconComponent = FaMapMarkedAlt;
							break;
						case 'AiOutlineComment':
							IconComponent = AiOutlineComment;
							break;
						case 'MdSpeed':
							IconComponent = MdSpeed;
							break;
						case 'AiOutlineRise':
							IconComponent = AiOutlineRise;
							break;
						case 'HiOutlineUserGroup':
							IconComponent = HiOutlineUserGroup;
							break;
						default:
							IconComponent = null; // Fallback if no icon is provided
					}

					return (
						<AnimateUp
							key={index}
							className={`flex flex-col justify-between p-8 space-y-4 ${
								index === snapshotDetails.length - 1
									? 'col-span-full w-full lg:w-1/2 mx-auto'
									: ''
							}`}
						>
							{/* Render Icon */}
							{IconComponent && (
								<div className='flex justify-center mb-6'>
									<FadeIn>
										<div className='bg-tertiary p-4 rounded-full shadow-lg shadow-tertiary/40'>
											<IconComponent className='text-5xl text-dark' />
										</div>
									</FadeIn>
								</div>
							)}

							{/* Title */}
							<MainHeading
								title={detail.title}
								theme='text-center text-light mb-2'
							/>

							{/* Description */}
							<Description
								description={
									<>
										<span className='text-tertiary'>Why It Matters:</span>{' '}
										<span className='text-light'>{detail.whyItMatters}</span>
									</>
								}
								theme='text-center h-full'
							/>
						</AnimateUp>
					);
				})}
			</div>
		</div>
	);
};
