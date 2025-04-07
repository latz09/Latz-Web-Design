import { MainHeading, TopHeading, Description } from '../utils/Typography';

const RecentClientsPageIntro = () => {
	return (
		<div className='bg-gradient-to-b from-dark via-dark/80 to-dark py-16'>
			<div className='grid place-items-center gap-4'>
				<div className='space-y-2 text-center px-2 lg:px-0'>
					<TopHeading title='Our Work' theme='text-light' />
					<div className='md:hidden'>
						<MainHeading title='Smart Design ' theme='text-tertiary' />
						<MainHeading title='Real Results' theme='text-tertiary' />
					</div>
					<div className='hidden md:block'>
						<MainHeading
							title='Smart Design. Real Results '
							theme='text-tertiary'
						/>
					</div>
				</div>
				<div className='w-full px-2 lg:w-1/2 mx-auto text-center '>
					<Description
						description='Custom websites built to connect, convert, and stand out. Each project reflects a clear purpose, clean design, and a strategy that puts your business first.'
						theme='text-light'
					/>
				</div>
			</div>
		</div>
	);
};

export default RecentClientsPageIntro;
