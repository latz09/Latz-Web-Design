import { PortableText } from '@portabletext/react';
import Link from 'next/link';
import { FaLongArrowAltLeft } from 'react-icons/fa';

const myPortableTextComponents = {
	block: {
		h1: ({ children }) => (
			<h1 className='mt-12 mb-2 text-2xl lg:text-4xl font-black text-primary'>
				{children}
			</h1>
		),
		h3: ({ children }) => (
			<h3 className='mt-8 mb-2 text-xl lg:text-3xl font-black text-dark/80'>
				{children}
			</h3>
		),
		h5: ({ children }) => (
			<h5 className='mt-8 mb-2 text-xl lg:text-2xl  text-primary font-bold '>
				{children}
			</h5>
		),
		normal: ({ children }) => (
			<p className='text-lg lg:text-xl leading-8 lg:leading-9 mb-4'>
				{children}
			</p>
		),
		blockquote: ({ children }) => (
			<blockquote className='border-l-4 border-primary pl-4 italic text-lg lg:text-xl text-primary/80 font-semibold my-4'>
				{children}
			</blockquote>
		),
	},
	list: {
		bullet: ({ children }) => (
			<ul className='  lg:pl-8 mb-4 space-y-2 '>{children}</ul>
		),
		number: ({ children }) => (
			<ol className='list-decimal pl-3 lg:pl-8 mb-4 space-y-2'>{children}</ol>
		),
	},
	listItem: ({ children }) => (
		<li className='text-lg lg:text-xl leading-7 lg:leading-8 font-normal text-dark text-start mt-2  '>
			{children}
		</li>
	),
	marks: {
		link: ({ children, value }) => (
			<a href={value.href} className='text-primary underline'>
				{children}
			</a>
		),
	},
};

const ArticleContent = ({ content }) => {
	return (
		<div className='mx-4 lg:mx-8 my-4'>
			<PortableText value={content} components={myPortableTextComponents} />
			<Link href='/'>
				<div className='my-16 text-center text-xl lg:text-2xl font-bold text-primary'>
					Learn More at LatzWebDesign.com
				</div>
			</Link>
			<Link href='/articles'>
				<div className='grid place-items-center gap-4 text-dark/80 font-bold lg:text-xl uppercase group cursor-pointer'>
					<span>Back To Latest Articles</span>
					<span className='bg-primary p-2 rounded-full transform group-hover:-translate-x-2 transition-transform  duration-500 group-hover:bg-primary text-light group-hover:text-dark'>
						<FaLongArrowAltLeft className=' text-lg lg:text-2xl' />
					</span>
				</div>
			</Link>
		</div>
	);
};

export default ArticleContent;
