import Link from 'next/link';
import ChatWidgetContainer from '../automations/ChatWidgetContainer';
import OverviewContainer from '../cms/overview/OverviewContainer';
import NotMonthlyFees from '../home-page/NoMonthlyFees';
import IntroBlurb from '../intro/IntroBlurb';
import ProcessAndPricingContainer from '../process-and-pricing/ProcessAndPricingContainer';
import ShortenProcess from '../process-and-pricing/ShortenProcess';
import FetchClientLogos from '../RecentClients/FetchClientLogos';
import RecentClientsContainer from '../RecentClients/RecentClientsContainer';
import ReviewContainer from '../reviews/ReviewContainer';
import ServicesOverviewContainer from '../service-overview/ServiceOverViewContainer';
import SnapshotModal from '../snapshot-report/SnapshotModal';
import AnimateUp from '../utils/animations/AnimateUp';
import {
	CurveDividerBottom,
	CurveDividerTop,
} from '../utils/dividers/Dividers';
import { Description } from '../utils/Typography';
import AboutIntro from '../whoWeAre/AboutIntro';
const SERVICES_CONTAINER_CLASSES =
	'  px-4 lg:px-8 grid gap-8 mt-2 mx-4 lg:w-3/4 mx-auto text-center bg text-light   ';
export function preventWidow(text) {
	const words = text.trim().split(' ');
	if (words.length < 2) return text;
	const lastTwo = words.splice(-2, 2).join('\u00A0'); // non-breaking space
	return [...words, lastTwo].join(' ');
}
const SharedContent = () => {
	return (
		<div>
			{/* <SnapshotModal /> */}
			<IntroBlurb />
			<FetchClientLogos />
<AnimateUp>
				<RecentClientsContainer includeViewMore={true} />
			</AnimateUp>
			<ShortenProcess />

			<CurveDividerBottom />
			<ReviewContainer />
	
			{/* <CurveDividerTop /> */}
			{/* <ChatWidgetContainer /> */}
			{/* <CurveDividerBottom /> */}

			
			<AboutIntro />
			<ServicesOverviewContainer />
			<NotMonthlyFees />

			<div className='bg-dark py-20 lg:py-24 '>
				<div className={SERVICES_CONTAINER_CLASSES}>
					<h2 className='text-4xl tracking-wide lg:text-6xl font-black '>
						{preventWidow('Don’t Settle for a Website That Holds You Back')}
					</h2>

					<Description
						description={`Stop losing leads to a site that doesn't convert — and stop paying monthly for it. It's time for a change.`}
					/>

					<div className='w-5/6 lg:w-1/2 mx-auto'>
						<Link
							href='/contact-latz-web-design'
							className='w-full rounded-sm mx-auto bg-tertiary text-dark py-3 lg:py-3 grid place-items-center uppercase lg:text-2xl font-bold shadow-lg shadow-tertiary/30 hover:scale-95 transition duration-500 tracking-wider '
						>
							<span>Get Started Now</span>
						</Link>
					</div>
				</div>
			</div>

			{/* <ProcessAndPricingContainer /> */}

			{/* <OverviewContainer includeLink={true} /> */}
		</div>
	);
};

export default SharedContent;
