'use client';
import { Description, MainHeading } from '../utils/Typography';
import { FaMapMarkedAlt } from 'react-icons/fa';
import { AiOutlineComment, AiOutlineRise } from 'react-icons/ai';
import { MdSpeed } from 'react-icons/md';
import { HiOutlineUserGroup } from 'react-icons/hi';
import AnimateUp, { FadeIn } from '../utils/animations/AnimateUp';

export const ReportDetails = ({ scrollNote, snapshotDetails }) => {
	return (
		<div className='space-y-12 lg:space-y-32 bg-dark py-24 lg:py-32'>
			<MainHeading
				title={`${scrollNote}:`}
				theme={'text-center text-tertiary px-2'}
			/>

			<div className='max-w-[90rem] mx-auto grid place-items-center lg:grid-cols-2 gap-16 lg:gap-24 text-dark'>
				{snapshotDetails.map((detail, index) => {
					let IconComponent;

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
							IconComponent = null;
					}

					return (
						<AnimateUp
							key={index}
							className={`relative flex flex-col justify-between p-4 space-y-16 rounded-xl overflow-hidden bg-dark/80 ${
								index === snapshotDetails.length - 1
									? 'col-span-full w-full lg:w-1/2 mx-auto'
									: ''
							}`}
						>
							{/* Background Icon */}
							{IconComponent && (
								
									<div className='absolute inset-0 bottom-16 flex items-center justify-center z-0 '>
										<IconComponent className='text-[200px] text-tertiary/15' />
									</div>
								
							)}

							{/* Foreground Content */}
							<div className='relative z-10 space-y-4'>
								<MainHeading
									title={detail.title}
									theme='text-center text-light mb-2'
								/>

								<Description
									description={
										<>
											<span className='text-tertiary uppercase font-black'>Why It Matters:</span>{' '}
											<span className='text-light'>
												{detail.whyItMatters}
											</span>
										</>
									}
									theme='text-center h-full'
								/>
							</div>
						</AnimateUp>
					);
				})}
			</div>
		</div>
	);
};
