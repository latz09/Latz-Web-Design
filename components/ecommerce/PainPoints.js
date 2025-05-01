import { MdClose, MdHelpOutline } from 'react-icons/md';
import { Subheading } from '../utils/Typography';

const PainPoints = ({ heading, questions, answers }) => (
	<div className="space-y-16 max-w-5xl mx-auto">
		<div className="text-center space-y-2">
			
            <Subheading title={'Sell Online —'} theme="text-dark" className="mt-2" />
            <Subheading title={'Without the Monthly BS'} theme="text-dark/80" className="mt-2" />
		</div>

		<div className="grid md:grid-cols-2 gap-8">
			{/* Pain Point Questions */}
			<div className="space-y-4 p-6">
				<h3 className="text-xl font-semibold text-dark/90">Sound familiar?</h3>
				<ul className="space-y-4">
					{questions?.map((q, i) => (
						<li key={i} className="flex items-start space-x-3">
							<MdHelpOutline className="text-xl text-primary mt-1" />
							<p className="text-lg text-dark/80">{q.questions}</p>
						</li>
					))}
				</ul>
			</div>

			{/* Pain Point Answers */}
			<div className="space-y-4 bg-primary/5 text-dark p-6 rounded-sm shadow shadow-primary/20">
				<h3 className="text-xl font-semibold ">{`You're not alone`}</h3>
				<div className="space-y-4  text-lg leading-relaxed">
				
                    <p>I build custom eCommerece sites that are <span className="italic">fast, easy to manage,</span> and totally yours.</p>
                    <p className="font-bold">No Subscriptions. No Templates. No Fluff.</p>
                    <p>Just a one-time build that works — and grows with your business.</p>
				</div>
			</div>
		</div>
	</div>
);

export default PainPoints;
