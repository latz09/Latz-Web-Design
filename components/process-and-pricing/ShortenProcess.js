import { FaPhoneAlt, FaFileAlt, FaRocket } from 'react-icons/fa';
import { HiOutlineDesktopComputer } from 'react-icons/hi';
import { MainHeading } from '../utils/Typography';
import AnimateUp from '../utils/animations/AnimateUp';
import Link from 'next/link';


const steps = [
	{
		title: 'Consultation',
		icon: <FaPhoneAlt className=' ' />,
		description: 'We talk through your goals — no sales pitch, just a conversation.',
	},
	{
		title: 'Proposal',
		icon: <FaFileAlt className=' ' />,
		description: 'A clear quote. No surprises, no hidden fees.',
	},
	{
		title: 'Live Development',
		icon: <HiOutlineDesktopComputer className=' ' />,
		description: 'Watch your site get built in real time and give feedback as we go.',
	},
	{
		title: 'Launch',
		icon: <FaRocket className=' ' />,
		description: 'Your site goes live — fast, and built to convert from day one.',
	},
];

const ShortenProcess = () => {
	return (
		<div className='bg-dark py-24 lg:py-32 text-light'>
			<section className='px-4 max-w-[90rem] mx-auto text-center'>
				
				<MainHeading
					title='How It Works'
					theme='text-light mb-32'
				/>

				<div className='relative'>
					{/* Vertical connecting line */}
					<div className='hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-light/30 -translate-x-1/2 z-0' />

					<div className='flex flex-col gap-32 relative z-10'>
						{steps.map((step, index) => (
							<AnimateUp key={index}>
								<div className='relative flex flex-col items-center text-center px-4'>
									{/* Icon */}
									<div className='text-5xl lg:text-8xl text-light mb-4'>
										{step.icon}
									</div>

									{/* Line from icon to content */}
									<div className='h-8 w-1 bg-tertiary mb-6' />

									{/* Title & Description */}
									<div className='max-w-xl'>
										<p className='text-3xl lg:text-4xl text-primary font-bold uppercase mb-2'>
											{step.title}
										</p>
										<p className='text-xl lg:text-2xl'>{step.description}</p>
									</div>
								</div>
							</AnimateUp>
						))}
					</div>
				</div>

				<div className='grid place-items-center mt-32'>
					<Link href='/pricing-and-budget' className='p-4 border text-tertiary rounded-sm'>
						<h2 className='text-2xl lg:text-3xl'>View Detailed Process</h2>
					</Link>
				</div>
			</section>
		</div>
	);
};

export default ShortenProcess;

