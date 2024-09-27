import {
	AutomationDescription,
	Description,
	MainHeading,
	TopHeading,
} from '@/components/utils/Typography';
import AutomationIcon from '../design-utils/AutomationIcon';
import dynamic from 'next/dynamic';
import { AutomationsLink } from '../design-utils/GetStartedNow';
const VideoPlayer = dynamic(() => import('@/components/utils/VideoPlayer'), {
	ssr: false,
});

const Introduction = ({
	title,
	headline,
	intro,
	icon,
	videoData,
	descriptionHeading,
}) => {
	
	return (
		<div className='grid gap-16 lg:gap-24 '>
			<div className='grid place-items-center lg:flex items-center gap-5 lg:w-2/3'>
				{/* Icon container */}
				<AutomationIcon
					name={icon}
					size={56}
					color='text-dark'
					background='bg-tertiary'
					className='mx-auto'
				/>
				{/* Text container */}
				<div className='grid gap-2 place-items-center lg:place-items-start text-center lg:text-start'>
					<MainHeading title={title} />
					<div className='opacity-80 px-4 lg:px-0'>
						<TopHeading title={headline} />
					</div>
				</div>
			</div>

			{/* Conditionally render this section only if videoData exists */}
			{videoData ? (
				<div className='grid lg:grid-cols-2 place-items-center gap-8'>
					{/* VideoPlayer Component */}
					<div className='w-full h-auto'>
						<VideoPlayer videoData={videoData} />
					</div>
					<div className='space-y-4 p-4 opacity-90 text-center lg:text-start'>
						<MainHeading title={descriptionHeading} />
						<div className='font-bold lg:text-justify space-y-4'>
							{intro.map((paragraph, index) => (
								<p key={index} className='leading-6'>
									{paragraph}
								</p>
							))}
						</div>
						<div className='pt-4' >
							<AutomationsLink variant='dark'/>
						</div>
					</div>
				</div>
			) : (
				<div className='space-y-4 p-4 opacity-90 text-center lg:text-start w-2/3 '>
					<MainHeading title={descriptionHeading} />
					<div className='font-bold lg:text-start space-y-4 opacity-80'>
						{intro.map((paragraph, index) => (
							<p key={index} className=''>
								{paragraph}
							</p>
						))}
					</div>
					<div className='pt-6 lg:w-1/2' >
						<AutomationsLink variant='dark'/>
					</div>
				</div>
			)}
		</div>
	);
};

export default Introduction;
