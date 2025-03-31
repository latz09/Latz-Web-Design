import { FaPhoneAlt, FaFileAlt, FaRocket } from 'react-icons/fa';
import { HiOutlineDesktopComputer } from 'react-icons/hi';
import { MainHeading } from '../utils/Typography';
import AnimateUp from '../utils/animations/AnimateUp';
import Link from 'next/link';

const steps = [
	{
		title: 'Consultation',
		icon: <FaPhoneAlt className='size-10 lg:size-12 text-primary' />,
		description: 'We chat about your goals and vision.',
	},
	{
		title: 'Proposal',
		icon: <FaFileAlt className='size-10 lg:size-12 text-primary' />,
		description: 'You get a clear plan with pricing and deliverables.',
	},
	{
		title: 'Live Development',
		icon: (
			<HiOutlineDesktopComputer className='size-10 lg:size-12 text-primary' />
		),
		description: 'See your site come to life and give feedback as we go.',
	},
	{
		title: 'Launch',
		icon: <FaRocket className='size-10 lg:size-12 text-primary' />,
		description: 'We go live! Your custom website is ready to work for you.',
	},
];

const ShortenProcess = () => {
	return (
		<div className='bg-dark py-24 lg:py-32 text-light  '>
			<section className='px-4 max-w-[90rem] mx-auto text-center'>
				<h2 className='text-3xl lg:text-4xl font-bold mb-16'>How It Works</h2>
				<div className='grid gap-16 lg:gap-10 md:grid-cols-2 lg:grid-cols-4'>
					{steps.map((step, index) => (
						<AnimateUp key={index}>
							<div className='flex flex-col items-center text-center'>
								<div className='mb-4'>{step.icon}</div>
								<p className='text-2xl lg:text-3xl font-bold'>{step.title}</p>
								<p className='text-lg'>{step.description}</p>
							</div>
						</AnimateUp>
					))}
				</div>
				<div className="grid place-items-center mt-24">
					<Link
						href={'/pricing-and-budget'}
						className='p-4 border text-tertiary rounded-sm'
					>
						<h2 className='text-2xl lg:text-3xl  '>
							View Detailed Process
						</h2>
					</Link>
				</div>
			</section>
		</div>
	);
};

export default ShortenProcess;
