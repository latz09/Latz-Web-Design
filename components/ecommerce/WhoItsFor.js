import AnimatedCheck from "../utils/animations/AnimatedCheck";
import { MainHeading } from "../utils/Typography";

const WhoItsFor = ({ list }) => (
	<section>
		<MainHeading title="Who It's For" theme="text-dark text-center mb-12" />
		<div className="max-w-[90rem] mx-auto grid gap-6 w-full px-2">
			{list?.map((item, i) => (
				<div key={i} className="w-full">
					<div className="bg-dark/5 rounded-sm w-full py-2 px-4">
						<p className="text-lg lg:text-2xl font-black text-dark  text-center tracking-wider uppercase">
							{item}
						</p>
					</div>
				</div>
			))}
		</div>
	</section>
);

export default WhoItsFor;
