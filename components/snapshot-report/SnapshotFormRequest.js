'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { TopHeading } from '../utils/Typography';

const SnapshotFormRequest = () => {
	const router = useRouter();
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		website: '',
	});
	const [isLoading, setIsLoading] = useState(false);
	const [buttonText, setButtonText] = useState('Yes, send me my free report!');

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsLoading(true);
		setButtonText('Sending...');

		try {
			const response = await fetch('/api/submitFreeBusinessSnapshot', {
				method: 'POST',
				body: JSON.stringify(formData),
				headers: {
					'Content-Type': 'application/json',
				},
			});

			const result = await response.json();
			if (result.success) {
				// Reset form fields
				const { name, email, website } = formData;
				setFormData({ name: '', email: '', website: '' });

				// Redirect to /request-a-report with query params
				router.push(
					`/request-a-report?name=${encodeURIComponent(
						name
					)}&email=${encodeURIComponent(email)}&website=${encodeURIComponent(
						website
					)}`
				);

				setButtonText('Request submitted successfully!');
				setTimeout(() => setButtonText('Yes, send me my free report!'), 3000);
			} else {
				setButtonText(result.message || 'Submission failed');
				setTimeout(() => setButtonText('Yes, send me my free report!'), 3000);
			}
		} catch (error) {
			setButtonText('Failed to submit request');
			setTimeout(() => setButtonText('Yes, send me my free report!'), 3000);
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<form onSubmit={handleSubmit} className='space-y-4'>
			<div className='grid lg:flex gap-4'>
				<div className='mb-4 lg:w-1/2'>
					<label htmlFor='name' className='block font-medium mb-2 text-primary'>
						<TopHeading title='Name' theme='text-dark' />
					</label>
					<input
						type='text'
						id='name'
						name='name'
						value={formData.name}
						onChange={handleChange}
						className='w-full border border-dark/30 rounded-sm px-4 py-2 focus:outline-none focus:ring-1 focus:ring-dark'
						placeholder='Name'
						required
					/>
				</div>

				<div className='mb-4 lg:w-1/2'>
					<label
						htmlFor='email'
						className='block font-medium mb-2 text-primary'
					>
						<TopHeading title='Email' theme='text-dark' />
					</label>
					<input
						type='email'
						id='email'
						name='email'
						value={formData.email}
						onChange={handleChange}
						className='w-full border border-dark/30 rounded-sm px-4 py-2 focus:outline-none focus:ring-1 focus:ring-dark'
						placeholder='Your email'
						required
					/>
				</div>
			</div>

			<div className='mb-8 w-full mt-4'>
				<label
					htmlFor='website'
					className='block font-medium mb-2 text-primary'
				>
					<TopHeading title='Website URL' theme='text-dark text-center' />
				</label>
				<input
					type='url'
					id='website'
					name='website'
					value={formData.website}
					onChange={handleChange}
					className='w-full border border-dark/30 rounded-sm px-4 py-2 focus:outline-none focus:ring-1 focus:ring-dark'
					placeholder='https://your-awesome-business.com'
					required
				/>
			</div>
			<div className='pt-8 lg:pt-4 w-full mx-auto grid place-items-center'>
				<button
					type='submit'
					className='w-full bg-primary text-xl uppercase text-light font-bold py-3 px-6 rounded-sm hover:bg-blue-700 transition duration-300'
					disabled={isLoading}
				>
					{buttonText}
				</button>
				<div className=' mt-4 grid place-items-center text-center  gap-2'>
					<span className="text-lg">
						No guesswork. No pressure. Just a free report with insights you can
						actually use.
					</span>
					<span className=' italic'>
						This report is 100% free. No spam. No obligation.
					</span>
				</div>
			</div>
		</form>
	);
};

export default SnapshotFormRequest;
