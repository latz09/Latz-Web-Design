import Image from "next/image";
import AnimatedCheck from "../utils/animations/AnimatedCheck";
import { MainHeading } from "../utils/Typography";

const WhoItsFor = ({ list, image }) => {
	

	return (
		<section className="max-w-[90rem] mx-auto px-4 py-16">
			<MainHeading title="Who It's For" theme="text-dark text-center mb-12" />

			<div className="grid md:grid-cols-2 gap-12 items-center">
				{/* Text List */}
				<div className="space-y-4">
					{list?.map((item, i) => (
						<div key={i} className="bg-dark/5 rounded-sm py-3 px-4">
							<p className="text-lg lg:text-2xl font-black text-dark text-center tracking-wider uppercase">
								{item}
							</p>
						</div>
					))}
				</div>

				{/* Image */}
				{image && (
					<div className="w-full h-[300px] md:h-[400px] relative rounded-sm overflow-hidden shadow-md">
						<Image
							src={image}
							alt="Small business owner working"
							fill
							className="object-cover"
						/>
					</div>
				)}
			</div>
		</section>
	);
};

export default WhoItsFor;
