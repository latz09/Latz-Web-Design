import {
	AutomationDescription,
	Description,
	MainHeading,
	TopHeading,
} from '@/components/utils/Typography';
import AutomationIcon from '../design-utils/AutomationIcon';
import dynamic from 'next/dynamic';
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
		<div className='grid gap-24'>
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
					<div className='opacity-80'>
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
						<div className='font-bold   '>
							<AutomationDescription description={intro} />
						</div>
					</div>
				</div>
			) : (
				<div className='space-y-4 p-4 opacity-90 text-center lg:text-start'>
					<MainHeading title={descriptionHeading} />
					<div className='font-bold   '>
						<AutomationDescription description={intro} />
					</div>
				</div>
			)}
		</div>
	);
};

export default Introduction;
