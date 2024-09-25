import {
	Description,
	MainHeading,
	TopHeading,
} from '@/components/utils/Typography';
import Image from 'next/image';

const KeyBenefits = ({ data }) => {
	return (
		<section className='px-4 py-8  lg:py-12 '>
			{/* <MainHeading title='Key Benefits' /> */}
			<ul className='grid gap-16 lg:gap-32 mt-8'>
				{data.map((benefit, index) => (
					<li
						key={index}
						className={`grid lg:grid-cols-2  p-4 lg:p-8 gap-8  ${
							index % 2 === 0 ? 'bg-white' : 'bg-gray-100'
						} rounded-lg`}
					>
						{/* Conditionally render image and text based on index */}
						{index % 2 === 0 ? (
							<>
								{/* Image Section */}
								<div className='flex justify-center items-center'>
									<Image
										src={benefit.benefitScreenshotUrl}
										alt={benefit.benefitTitle}
										width={350}
										height={350}
                                        quality={100}
										className='rounded-lg transform hover:scale-105 transition-transform duration-300 '
									/>
								</div>
								{/* Text Section */}
								<div className='flex flex-col justify-center text-center lg:text-left gap-3'>
									<MainHeading title={benefit.benefitTitle} theme='text-primary' />
									<TopHeading title={benefit.benefitDescription} />
								</div>
							</>
						) : (
							<>
								{/* Text Section */}
								<div className='flex flex-col justify-center text-center lg:text-left gap-3'>
                                <MainHeading title={benefit.benefitTitle} theme='text-primary' />
									<TopHeading title={benefit.benefitDescription} />
								</div>
								{/* Image Section */}
								<div className='flex justify-center items-center'>
									<Image
										src={benefit.benefitScreenshotUrl}
										alt={benefit.benefitTitle}
										width={350}
										height={350}
                                        quality={100}
										className='rounded-lg transform hover:scale-105 transition-transform duration-300 '
									/>
								</div>
							</>
						)}
					</li>
				))}
			</ul>
		</section>
	);
};

export default KeyBenefits;
