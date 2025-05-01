import {
	CurveDividerBottom,
	CurveDividerTop,
} from '../utils/dividers/Dividers';
import { MainHeading, Subheading } from '../utils/Typography';
import IconRenderer from './IconRenderer';

const CoreBenefits = ({ benefits }) => (
	<section>
		<CurveDividerTop />
		<div className='bg-dark via-dark/95 to-dark py-16 lg:py-32 text-light'>
			<div className='max-w-5xl mx-auto lg:px-4'>
				<MainHeading
					title={'What You Get'}
					theme='text-light text-center mb-12 lg:mb-16 uppercase'
				/>
				<div className='grid gap-16 bg-dark md:py-24  md:rounded-lg shado-2xl shadow-primary/5'>
					{benefits?.map((item, i) => (
						<div
							key={i}
							className='flex items-start gap-4 py-4 lg:py-8 px-4 rounde-sm  '
						>
							{/* <IconRenderer
								icon={item.icon}
								className='text-3xl shrink-0 text-accent'
							/> */}
							<div className="grid place-items-center text-center  h-full gap-4 lg:gap-8">
								
                                <Subheading g title={item.title} theme="text-light" className="" />
								<p className='text-xl lg:text-2xl font-semibol tracking-wider text-light/95'>
									{item.description}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	</section>
);

export default CoreBenefits;
