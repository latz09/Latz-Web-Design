import { MainHeading, Subheading } from "../utils/Typography";

const HowItWorks = ({ steps }) => (
	<section className="space-y-12 px-2">

        <MainHeading title="How It Works" theme="text-dark/80 text-center " className="text-center" />

		<div className="max-w-4xl mx-auto grid gap-8 md:grid-cols-2">
			{steps?.map((step, i) => (
				<div
					key={i}
					className="bg-dark text-light rounded-xl px-6 py-5  shadow-sm"
				>
					<div className="text-4xl font-black text-tertiary mb-2">
						{String(i + 1).padStart(2, '0')}
					</div>
					
                    <Subheading title={step.stepTitle} theme="mb-2" className="pb-4" />
					<p className="text-light/80 text-lg leading-relaxed">{step.stepDescription}</p>
				</div>
			))}
		</div>
	</section>
);

export default HowItWorks;
