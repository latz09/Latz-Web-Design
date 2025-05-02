import Image from 'next/image';
import { fetchData } from '@/lib/sanity/sanityFetch';
import { MOCKUPS_QUERY as query } from '@/data/queries/store-front/OWN_YOUR_STOREFRONT_QUERY';

const Mockups = async ({
	sectionKey,
	width = 600,
	height = 400,
	className = '',
}) => {
	const data = await fetchData(query);
	const mockups = data.mockups || [];

	if (sectionKey) {
		const selected = mockups.find((m) => m.sectionKey === sectionKey);
		if (!selected) return null;

		return (
			<div
				className={` rounded   overflow-hidden flex justify-center items-center ${className}`}
			>
				<div className='grid place-items-center'>
					<Image
						src={selected.imageUrl}
						alt={selected.alt || 'Mockup image'}
						width={width}
						height={height}
						className=''
						quality={100}
					/>
				</div>
			</div>
		);
	}

	// Fallback: show all mockups in a grid
	return (
		<div className='grid gap-8 place-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-4 max-w-screen-xl mx-auto py-16'>
			{mockups.map((mockup, i) => (
				<div
					key={i}
					className='w-full bg-[#141408] rounded shadow overflow-hidden flex justify-center items-center'
				>
					<Image
						src={mockup.imageUrl}
						alt={mockup.alt || 'Mockup image'}
						width={500}
						height={300}
						className='object-contain w-full h-auto'
						quality={100}
					/>
				</div>
			))}
		</div>
	);
};

export default Mockups;

export const revalidate = 10;
