// components/free-estimate/ContactForm.js

'use client';

import { useState } from 'react';

const ContactForm = ({ toggleModal }) => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		description: '',
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		// Form submission logic
		// You'll handle Sanity form submission here

		// Reset the form
		setFormData({
			name: '',
			email: '',
			description: '',
		});

		// Close the modal
		toggleModal(false);
	};

	return (
		<form
			onSubmit={handleSubmit}
			className='space-y-6 p-8 bg-primary/10 rounded-md shadow-lg border border-tertiary/10 shadow-primary/10'
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
					className='form-input'
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

			<div className='flex flex-col'>
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
