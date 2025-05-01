import Image from 'next/image';
import { MainHeading, TopHeading } from '../utils/Typography';

const HeroSection = ({ headline, subheadline, image }) => (
    
	<div className="relative w-full h-[40vh] md:h-[65vh] flex items-center justify-center overflow-hidden">
		{image && (
			<Image
				src={image}
				alt="Hero Image"
				fill
				className="object-cover object-center"
				priority
			/>
		)}

		<div className="relative z-10 text-center text-light px-4">
			{/* Mobile View */}
			<div className="md:hidden space-y-2">
				<TopHeading title={subheadline} theme="text-light/90" />
				<MainHeading title="Your Products." theme="text-light" />
				<MainHeading title="Your Store." theme="text-light" />
				<MainHeading title="No Monthly Fees" theme="text-light pt-2" />
			</div>

			{/* Desktop View */}
			<div className="hidden md:block space-y-4 uppercase">
				<TopHeading title={subheadline} theme="text-light/90" />
				<MainHeading title="Your Products. Your Store." theme="text-light" />
				<MainHeading title="No Monthly Fees" theme="text-light pt-2" />
			</div>
		</div>

		{/* Optional: Overlay for contrast */}
		<div className="absolute inset-0 bg-dark/70 from-dark via-dark/80 to-dark/70 z-0" />
	</div>
);

export default HeroSection;
