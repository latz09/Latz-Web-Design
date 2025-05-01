import { Subheading } from '../utils/Typography';
import IconRenderer from './IconRenderer';

const ShopifyDrawbacks = ({ items }) => (
	<section className="space-y-8">
	
        <Subheading title={'Why Not Shipify?'} theme="text-dark/80  text-center" className="text-center" />

		<ul className="max-w-3xl mx-auto space-y-4">
			{items?.map((item, i) => (
				<li
					key={i}
					className="flex items-start gap-4 bg-dark text-light rounded-sm px-5 py-4"
				>
					<div className="mt-1">
						<IconRenderer icon={item.icon} className="text-xl text-tertiary" />
					</div>
					<p className="text-2xl font-bold">{item.problem}</p>
				</li>
			))}
		</ul>

		<p className="text-center text-xl  italic max-w-2xl mx-auto pt-4">
			{`You wouldn't rent your kitchen or tools. Why rent your store?`}
		</p>
	</section>
);

export default ShopifyDrawbacks;
