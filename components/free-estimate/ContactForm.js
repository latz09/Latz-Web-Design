// components/free-estimate/ContactForm.js

'use client';

import { useState } from 'react';

const ContactForm = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		description: '',
	});

	const [isLoading, setIsLoading] = useState(false);
	const [isErrorMessage, setIsErrorMessage] = useState('');
	const [successMessage, setSuccessMessage] = useState('');

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsLoading(true);
		setIsErrorMessage('');
		setSuccessMessage('');
		// Form submission logic

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
					
					description: '', // Reset description field
				});
				setSuccessMessage('Form submitted successfully!');
				// router.push(`/thank-you?name=${encodeURIComponent(formData.name)}`);
			} else {
				setIsErrorMessage(result.message || 'Submission failed');
			}
		} catch (error) {
			setIsErrorMessage('Failed to submit form');
		} finally {
			setIsLoading(false);
		}

		
	};

	return (
		<form
			onSubmit={handleSubmit}
			className='space-y-6 px-4 pb-10 lg:pb-12 pt-14 lg:pt-16 lg:px-8 bg-light rounded-b-xl shadow-lg border border-tertiary/10 shadow-tertiary/30'
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
					className='form-input  tracking-wider'
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

			<div className='flex flex-col pt-4'>
				<label htmlFor='description' className='form-label'>
					Describe Your Vision
				</label>
				<textarea
					id='description'
					name='description'
					placeholder='Tell us about your project...'
					value={formData.description}
					onChange={handleChange}
					className='form-textarea'
					required
				/>
			</div>
			<div className='pt-2'>
				<button type='submit' className='form-button '>
					Send Your Ideas
				</button>
			</div>
		</form>
	);
};

export default ContactForm;
