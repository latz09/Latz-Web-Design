import { fetchData } from "@/lib/sanity/sanityFetch";

import { FETCH_PRICING_PAGE_DATA_QUERY as query } from "@/data/queries/pricing-and-budget/FETCH_PRICING_PAGE_DATA_QUERY";
import Process from "./Process";

const ProcessAndPricingContainer = async () => {
    const [data] = await fetchData(query);
    
    return ( <div>
        <Process data={data} />
    </div> );
}
 
export default ProcessAndPricingContainer;

export const revalidate = 10;