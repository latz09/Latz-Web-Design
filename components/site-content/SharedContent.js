import OverviewContainer from '../cms/overview/OverviewContainer';
import ProcessAndPricingContainer from '../process-and-pricing/ProcessAndPricingContainer';
import RecentClientsContainer from '../RecentClients/RecentClientsContainer';
import ReviewContainer from '../reviews/ReviewContainer';
import ServicesOverviewContainer from '../service-overview/ServiceOverViewContainer';
import AnimateUp from '../utils/animations/AnimateUp';

const SharedContent = () => {
	return (
		<div>
			<ServicesOverviewContainer />
			<AnimateUp>
				<RecentClientsContainer />
			</AnimateUp>
			<ReviewContainer />
			<ProcessAndPricingContainer />
			<OverviewContainer includeLink={true} />
		</div>
	);
};

export default SharedContent;
