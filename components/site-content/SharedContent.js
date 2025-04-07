import ChatWidgetContainer from '../automations/ChatWidgetContainer';
import OverviewContainer from '../cms/overview/OverviewContainer';
import ProcessAndPricingContainer from '../process-and-pricing/ProcessAndPricingContainer';
import ShortenProcess from '../process-and-pricing/ShortenProcess';
import FetchClientLogos from '../RecentClients/FetchClientLogos';
import RecentClientsContainer from '../RecentClients/RecentClientsContainer';
import ReviewContainer from '../reviews/ReviewContainer';
import ServicesOverviewContainer from '../service-overview/ServiceOverViewContainer';
import SnapshotModal from '../snapshot-report/SnapshotModal';
import AnimateUp from '../utils/animations/AnimateUp';
import AboutIntro from '../whoWeAre/AboutIntro';

const SharedContent = () => {
	return (
		<div>
			{/* <SnapshotModal /> */}
			<FetchClientLogos />
			<ServicesOverviewContainer />

			<ShortenProcess />
			<ReviewContainer />
			<ChatWidgetContainer />
			
			<AboutIntro />
			<div className="bg-">
			<AnimateUp>
				<RecentClientsContainer includeViewMore={true} />
			</AnimateUp></div>
			
			{/* <ProcessAndPricingContainer /> */}
			
			{/* <OverviewContainer includeLink={true} /> */}
			
		</div>
	);
};

export default SharedContent;
