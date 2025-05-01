import { MainHeading, TopHeading } from '../utils/Typography';

const CallToAction = ({ heading, text, description }) => (
	<section className='text-center bg-gray-100 rounded-xl  px-2 grid gap-8 lg:gap-16 pt-24 pb-40'>
		<div>
			<MainHeading
				title={`It's Your Store.`}
				theme='text-dark/80 text-center '
			/>
			<MainHeading
				title={'I Just Help Bring It to Life.'}
				theme='text-dark/80 text-center '
			/>
		</div>
		<div className='grid place-items-center gap-2'>
			<p className='text-xl text-light mb-2 py-4 px-8 font-black uppercase tracking-wider bg-dark rounded-full'>
				{text}
			</p>
			<div>
				<TopHeading
					title={`Let's build a storefront that works for your business`}
					theme='text-dark'
				/>
				<TopHeading title={`— not against it.`} theme='text-dark' />
			</div>
		</div>
	</section>
);

export default CallToAction;
