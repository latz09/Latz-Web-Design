// app/automations/service-layout/layout.js
import PageContainer from '@/components/utils/animations/PageContainer';
import ServiceTabBar from '@/components/automations/ServiceTabBar';
import GetStartedNow from '@/components/automations/design-utils/GetStartedNow';

const ServiceLayout = ({ children }) => {
	return (
		<div className='bg-light mt-[15vh]'>
			<div className=' py-8 s'>
				<ServiceTabBar />
			</div>{' '}
	
				<div className='border-y-2 border-dark/70 border-dotted py-12   '>
					{children}
					<GetStartedNow variant='dark' />
				</div>

			<div className='py-16 '>
				<ServiceTabBar />
			</div>
		</div>
	);
};

export default ServiceLayout;
