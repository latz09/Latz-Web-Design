import Image from 'next/image';
import { MainHeading } from '../utils/Typography';
import { FaArrowTrendUp } from 'react-icons/fa6';

const CreativeWebDesign = ({ data }) => {
	return (
		<div className='max-w-6xl mx-auto  grid lg:grid-cols-2 gap-12 place-items-center px-4  2xl:px-2'>
			<div className='grid gap-12 '>
				<MainHeading title={data.heading} />
				<div className='grid gap-6'>
					{data.sections.map((section, index) => (
						<div className='flex items-center gap-4'>
							<div className='text-primary text-2xl'>
								<FaArrowTrendUp />
							</div>
							<div key={index} className='grid'>
								<p className='font-bold text-xl lg:text-2xl'>{section.title}</p>
								<p className='font-semibold ml-4 lg:text-lg'>
									{section.description}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
			<div className='w-3/4 lg:w-full'>
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
