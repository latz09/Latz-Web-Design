import Image from 'next/image';
import { MainHeading } from '../utils/Typography';
import { FaArrowTrendUp } from 'react-icons/fa6';
import AnimateUp from '../utils/animations/AnimateUp';
import SlideIn from '../utils/animations/SlideIn';

const CreativeWebDesign = ({ data }) => {
	return (
		<div className='max-w-6xl mx-auto  grid lg:grid-cols-2 gap-12 place-items-center px-4  2xl:px-2'>
			<div className='grid gap-12 '>
				<SlideIn>
					<MainHeading title={data.heading} />
				</SlideIn>
				<div className='grid gap-6'>
					{data.sections.map((section, index) => (
						<AnimateUp key={index}>
							<div className='flex items-center gap-4'>
								<div className='text-primary text-2xl'>
									<FaArrowTrendUp />
								</div>
								<div key={index} className='grid'>
									<p className='font-bold text-xl lg:text-2xl'>
										{section.title}
									</p>
									<p className='font-semibold ml-4 lg:text-lg'>
										{section.description}
									</p>
								</div>
							</div>
						</AnimateUp>
					))}
				</div>
			</div>
			<div className='w-[89.6%] lg:w-full'>
				<Image
					src={data.creativeWebDesignImageUrl}
					alt='Web design in saint paul'
					width={500}
					height={500}
				/>
			</div>
		</div>
	);
};

export default CreativeWebDesign;
