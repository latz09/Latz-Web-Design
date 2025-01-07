import { fetchData } from '@/lib/sanity/sanityFetch';
import { FETCH_WHO_WE_ARE_INTRO as query } from '@/data/queries/who-we-are/FETCH_WHO_WE_ARE_INTRO';
import Image from 'next/image';
import Link from 'next/link';
import { MainHeading, Description } from '@/components/utils/Typography';

const AboutIntro = async () => {
	const data = await fetchData(query);

	return (
		<section className="about-intro py-16 lg:py-24 bg-light">
			<div className="max-w-7xl mx-auto flex flex-col items-center gap-12 lg:gap-16 lg:flex-row">
				{/* Text Section */}
				<div className="text-content text-center lg:text-left space-y-6 lg:w-1/2">
					{/* Main Heading */}
					<MainHeading title={data.heading} theme="text-primary" />

					{/* Image for small screens */}
					<div className="image-content  mx-auto lg:hidden pb-8">
						<Image
							src={data.imageUrl}
							alt="Who We Are"
							className="shadow-lg"
							layout="responsive"
							width={700}
							height={500}
							priority
						/>
					</div>

					{/* Description Paragraphs */}
					{data.paragraphs.map((paragraph, index) => (
						<Description
							key={index}
							description={paragraph}
							theme="text-dark/80 mx-4"
						/>
					))}

					{/* CTA Link */}
					<Link href="/who-we-are">
						<span className="inline-block mt-8 px-6 py-3 text-light bg-primary hover:bg-dark transition duration-300 text-lg lg:text-2xl rounded-full font-bold">
							{data.ctaText}
						</span>
					</Link>
				</div>

				{/* Image Section for large screens */}
				<div className="image-content     mx-auto hidden lg:block lg:w-1/2">
					<Image
						src={data.imageUrl}
						alt="Who We Are"
						className="rounded shadow-lg"
						layout="responsive"
						width={700}
						height={500}
						priority
					/>
				</div>
			</div>
		</section>
	);
};

export default AboutIntro;
