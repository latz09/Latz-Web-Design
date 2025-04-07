import { FaPhoneAlt, FaFileAlt, FaRocket } from 'react-icons/fa';
import { HiOutlineDesktopComputer } from 'react-icons/hi';
import { MainHeading } from '../utils/Typography';
import AnimateUp from '../utils/animations/AnimateUp';
import Link from 'next/link';


const steps = [
	{
		title: 'Consultation',
		icon: <FaPhoneAlt className=' ' />,
		description: 'We chat about your goals and vision.',
	},
	{
		title: 'Proposal',
		icon: <FaFileAlt className=' ' />,
		description: 'You get a clear plan with pricing and deliverables.',
	},
	{
		title: 'Live Development',
		icon: <HiOutlineDesktopComputer className=' ' />,
		description: 'See your site come to life and give feedback as we go.',
	},
	{
		title: 'Launch',
		icon: <FaRocket className=' ' />,
		description: 'We go live! Your custom website is ready to work for you.',
	},
];

const ShortenProcess = () => {
	return (
		
		
		
		<div className='bg-dark py-24 lg:py-32 text-light  '>
			<section className='px-4 max-w-[90rem] mx-auto text-center'>
				<h2 className='text-3xl lg:text-4xl font-bold mb-32 text-tertiary/70'>How It Works</h2>
				<div className='grid gap-24 md:gap-32 md:grid-cols-2'>
					{steps.map((step, index) => (
						
						<AnimateUp key={index}>
							<div className='relative flex flex-col items-center text-center px-2'>
								{/* Background Icon */}
								<div
									aria-hidden
									className='absolute text-[4.5rem] lg:text-[7rem] text-tertiary/30 -top-8 lg:-top-12 left-1/2 -translate-x-1/2 z-0 pointer-events-none -sm'
								>
									{step.icon}
								</div>

								{/* Foreground Content */}
								<div className='relative z-10 flex flex-col items-center'>
									<p className='text-3xl lg:text-4xl font-bold uppercase'>
										{step.title}
									</p>
									<p className='text-xl lg:text-2xl'>{step.description}</p>
								</div>
							</div>
						</AnimateUp>
					))}
				</div>
				<div className='grid place-items-center mt-32'>
					<Link
						href={'/pricing-and-budget'}
						className='p-4 border text-tertiary rounded-sm'
					>
						<h2 className='text-2xl lg:text-3xl  '>View Detailed Process</h2>
					</Link>
				</div>
			</section>
		</div>
	);
};

export default ShortenProcess;
