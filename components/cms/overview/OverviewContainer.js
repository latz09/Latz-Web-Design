import { fetchData } from '@/lib/sanity/sanityFetch';
import { FETCH_CMS_OVERVIEW_DATA_QUERY as query } from '@/data/queries/CMS/FETCH_CMS_OVERVIEW_DATA_QUERY';
import SlideIn from '@/components/utils/animations/SlideIn';
import { Description, MainHeading } from '@/components/utils/Typography';
import AnimateUp from '@/components/utils/animations/AnimateUp';
import Image from 'next/image';
import { FaArrowTrendUp } from 'react-icons/fa6';
import Link from 'next/link';
import { FaLongArrowAltRight } from 'react-icons/fa';

const OverviewContainer = async ({includeLink}) => {
	const data = await fetchData(query);

	return (
		<div className='max-w-6xl mx-auto  grid '>
			<div className='grid gap-16 '>
				<SlideIn>
					<div className='space-y-2 mx-4 lg:mx-0 lg:w-3/5 '>
						<MainHeading title={data.heading} />
						<Description
							theme='text-dark/80 font-semibold'
							description={data.introDescription}
						/>
					</div>
				</SlideIn>
				<div className="grid lg:grid-cols-2 gap-16 lg:gap-12 place-items-center px-4  2xl:px-2">
					<div className='grid gap-6'>
						{data.features.map((feature, index) => (
							<AnimateUp key={index}>
								<div className='flex items-center gap-4'>
									<div className='text-primary text-2xl'>
										<FaArrowTrendUp />
									</div>
									<div key={index} className='grid'>
										<p className='font-bold text-xl lg:text-2xl'>
											{feature.feature}
										</p>
										<p className='font-semibold ml-4 lg:text-lg'>
											{feature.description}
										</p>
									</div>
								</div>
							</AnimateUp>
						))}
					</div>
					<div className='grid place-items-center gap-4 mx-4 md:mx-2 lg:mx-0'>
						<Image
							src={data.cmsImageUrl}
							alt='Web design in saint paul'
							width={800}
							height={800}
							className=''
						/>
						<div className='italic lg:text-lg font-bold  grid  place-items-center text-primary/70'>
							<span className='text-primary'>Integrated Contact Form</span>
							<span className='text-sm lg:text-base font-semibold text-dark/60'>{`Sweet Juanjo's`}</span>
						</div>
					</div>
				</div>
                <div className={` ${!includeLink ? 'hidden' : 'grid place-items-center mt-8'}`}>
                    <LearnMoreNowButtonLink title='Learn More Now' href='/custom-cms' />
                </div>
			</div>
		</div>
	);
};

export default OverviewContainer;

export const revalidate = 10;


export const LearnMoreNowButtonLink = ({ title, href }) => {
    return (
        <Link href={href}>
          <div
				className='flex items-center gap-4 text-light font-bold lg:text-xl uppercase group cursor-pointer  bg-dark px-8 py-2 rounded-full shadow-lg shadow-primary/40'
				
			>
				<span>{title}</span>

				<span className='bg-tertiary p-1 rounded-full transform group-hover:translate-x-2 transition-transform  duration-500 group-hover:bg-dark text-dark group-hover:text-tertiary'>
					<FaLongArrowAltRight className=' text-lg lg:text-2xl' />
				</span>
			</div>
        </Link>
    );
}
