import { FaArrowTrendUp } from 'react-icons/fa6';
import { Description, MainHeading, TopHeading } from "@/components/utils/Typography";
import { LearnMoreNowButtonLink } from '../overview/OverviewContainer';

const KeyBenefits = ({ data }) => {
	return (
		<data className='grid lg:grid-cols-2 gap-x-16 gap-y-4'>
			{data.map((benefit, index) => (
				<div key={index} className=' p-4 rounded-md '>
					<TopHeading title={benefit.heading} theme='text-primary mb-2 lg:mb-4' />
					<div className='space-y-2'>
						{benefit.bullets.map((bullet, bulletIndex) => (
							<div key={bulletIndex} className='flex items-center gap-6'>
								<FaArrowTrendUp className='text-primary text-3xl' />
								<div className='grid gap-2'>
									<span className='text-dark text-lg'>
										<span className="font-black text-dark">{bullet.title}: </span>
										{bullet.description}
									</span>
								</div>
							</div>
						))}
					</div>
				</div>
			))}
            <div className="mt-12 lg:mt-16 px-8 py-16 lg:px-2 lg:py-8  grid place-items-center gap-8 ">
                <MainHeading
                    title='Take Control of Your Content Today'
                    theme='text-dark mb-4 text-center'
                />
                <LearnMoreNowButtonLink title='Get Started Now' href='/contact-latz-web-design' />
            </div>
		</data>
	);
};

export default KeyBenefits;
