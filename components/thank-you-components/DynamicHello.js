'use client';

import { useSearchParams } from 'next/navigation';
import { Description, TopHeading } from '../utils/Typography';
import logo from '@/public/web-design-in-saint-paul-2.png';
import Image from 'next/image';

const DynamicHello = () => {
	const searchParams = useSearchParams();
	const name = searchParams.get('name') || 'there';

	return (
		<div className='text-center text-dark px-4 grid place-items-center'>
			<h1 className='text-4xl font-bold mb-4 text-primary'>
				Thank You, {name}!
			</h1>
			
			<div className='grid gap-2'>
				<TopHeading title='We appreciate you reaching out. We will get back to you shortly' />
				
			</div>
			<Image
				src={logo}
				alt='Web Design in Saint Paul Minnesota'
				width={250}
				height={250}
				className="opacity-60 my-8"
			/>
			<Description description='In the meantime, feel free to look around our site.' theme='italic' />
		</div>
	);
};

export default DynamicHello;
