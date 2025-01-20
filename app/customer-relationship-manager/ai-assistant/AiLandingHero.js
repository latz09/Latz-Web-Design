import CaptureEmailForm from '@/components/CaptureEmail/CaptureEmailForm';
import PageContainer from '@/components/utils/animations/PageContainer';
import {
	AutomationDescription,
	Description,
	MainHeading,
	TopHeading,
} from '@/components/utils/Typography';

const AiLandingHero = ({ headline, subheadline }) => {
	return (
		<div className='space-y-4 md:space-y-6 text-center px-6 md:px-12 max-w-4xl mx-auto'>
			<MainHeading title={headline} theme='scale-y-110' />

			<h3
				className=''
				dangerouslySetInnerHTML={{
					__html: subheadline.replace(
						'24/7 AI-powered',
						'<span class="font-bold">24/7 AI-powered</span>'
					),
				}}
			></h3>
			<div className='px-4 '>
				<CaptureEmailForm ctaText={'Learn More Now'}/>
			</div>
			<div>
				<div className='p-2 text-center max-w-xs mx-auto'>
					<p className='text-xl md:text-2xl font-bod text-primary mb-1'>
						<span className='line-through  decoration-[1.25px]'>$200 Setup Fee</span>
					</p>
					<p className='text-xs italic text-dark/70 tracking-wide'>
						*Limited Time Offer
					</p>
				</div>
			</div>
		</div>
	);
};

export default AiLandingHero;
