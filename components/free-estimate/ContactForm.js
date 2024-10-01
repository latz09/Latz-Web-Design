'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const ContactForm = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		serviceTypes: [], // Updated to be an array to hold multiple selections
		description: '',
	});

	const [isLoading, setIsLoading] = useState(false);
	const [buttonText, setButtonText] = useState('Send Your Request');

	const router = useRouter();

	const handleChange = (e) => {
		const { name, value, type, checked } = e.target;

		if (type === 'checkbox') {
			// Add or remove the service type based on whether it is checked
			const updatedServices = checked
				? [...formData.serviceTypes, value]
				: formData.serviceTypes.filter((service) => service !== value);

			setFormData({ ...formData, serviceTypes: updatedServices });
		} else {
			setFormData({ ...formData, [name]: value });
		}
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsLoading(true);
		setButtonText('Sending...');

		try {
			const response = await fetch('/api/submitContactForm', {
				method: 'POST',
				body: JSON.stringify(formData),
				headers: {
					'Content-Type': 'application/json',
				},
			});

			const result = await response.json();
			if (result.success) {
				setFormData({
					name: '',
					email: '',
					serviceTypes: [],
					description: '',
				});
				router.push(`/thank-you?name=${encodeURIComponent(formData.name)}`);
				setButtonText('Form submitted successfully!');
				setTimeout(() => setButtonText('Send Your Request'), 3000);
			} else {
				setButtonText(result.message || 'Submission failed');
				setTimeout(() => setButtonText('Send Your Request'), 3000);
			}
		} catch (error) {
			setButtonText('Failed to submit form');
			setTimeout(() => setButtonText('Send Your Request'), 3000);
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<form
			onSubmit={handleSubmit}
			className='space-y-6 px-4 pb-10 lg:pb-12 pt-14 lg:pt-16 lg:px-8 bg-light rounded-b-xl  shadow shadow-dark/30'
		>
			<div className='flex flex-col'>
				<label htmlFor='name' className='form-label'>
					Your Name
				</label>
				<input
					type='text'
					id='name'
					name='name'
					placeholder='e.g., John Doe'
					value={formData.name}
					onChange={handleChange}
					className='form-input tracking-wider'
					required
				/>
			</div>

			<div className='flex flex-col'>
				<label htmlFor='email' className='form-label'>
					Your Email
				</label>
				<input
					type='email'
					id='email'
					name='email'
					placeholder='e.g., john@example.com'
					value={formData.email}
					onChange={handleChange}
					className='form-input'
					required
				/>
			</div>

			{/* Updated Service Type Checkboxes */}
			<div className='flex flex-col'>
				<label className='form-label'>I'm Interested In</label>
				<div className='flex flex-col space-y-2'>
					<label className='inline-flex items-center'>
						<input
							type='checkbox'
							name='serviceTypes'
							value='web-design'
							checked={formData.serviceTypes.includes('web-design')}
							onChange={handleChange}
							className='form-checkbox'
						/>
						<span className='ml-2'>Custom Web Design</span>
					</label>
					<label className='inline-flex items-center'>
						<input
							type='checkbox'
							name='serviceTypes'
							value='crm'
							checked={formData.serviceTypes.includes('crm')}
							onChange={handleChange}
							className='form-checkbox'
						/>
						<span className='ml-2'>CRM & Automation Services</span>
					</label>
				</div>
			</div>

			<div className='flex flex-col pt-4'>
				<label htmlFor='description' className='form-label'>
					Describe Your Project/Needs
				</label>
				<textarea
					id='description'
					name='description'
					placeholder='Tell us about your project or how we can help with CRM...'
					value={formData.description}
					onChange={handleChange}
					className='form-textarea'
				/>
			</div>
			<div className='pt-2'>
				<button type='submit' className='form-button' disabled={isLoading}>
					{buttonText}
				</button>
			</div>
		</form>
	);
};

export default ContactForm;
