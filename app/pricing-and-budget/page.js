import { fetchData } from "@/lib/sanity/sanityFetch";

import { FETCH_PRICING_PAGE_DATA_QUERY as query } from "@/data/queries/pricing-and-budget/FETCH_PRICING_PAGE_DATA_QUERY";

export const metadata = {
	title: 'Pricing and Budget',
	description: 'Pricing and Budget',
};

const PricingAndBudgetPage = async () => {
	const [data] = await fetchData(query);
	
	return (
		<div>
			<div>Pricing and Budget</div>
		</div>
	);
};

export default PricingAndBudgetPage;
