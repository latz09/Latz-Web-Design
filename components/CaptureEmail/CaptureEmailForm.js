'use client';

import { useState } from 'react';

const CaptureEmailForm = ({ ctaText = 'Notify Me' }) => {
	const [email, setEmail] = useState('');
	const [buttonText, setButtonText] = useState(ctaText);
	const [isLoading, setIsLoading] = useState(false);

	// Banner state
	const [banner, setBanner] = useState({
		show: false,
		message: '',
		type: '', // 'success' or 'error'
	});

	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsLoading(true);
		setButtonText('Submitting...');

		try {
			// Call the API route
			const response = await fetch('/api/submitAiAssistantRequest', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ email }),
			});

			const result = await response.json();
			if (result.success) {
				// Reset the input
				setEmail('');

				// Show success banner
				setBanner({
					show: true,
					message: 'Request submitted successfully!',
					type: 'success',
				});
			} else {
				// Show error banner with message from the server
				setBanner({
					show: true,
					message: result.message || 'Submission failed',
					type: 'error',
				});
			}
		} catch (error) {
			// Show error banner for network or unexpected errors
			setBanner({
				show: true,
				message: 'Failed to submit request',
				type: 'error',
			});
		} finally {
			setIsLoading(false);
			setButtonText(ctaText);
		}
	};

	const closeBanner = () => {
		setBanner((prev) => ({ ...prev, show: false }));
	};

	return (
		<>
			<form
				onSubmit={handleSubmit}
				className='md:w-2/3 mx-auto grid md:flex gap-2 md:gap-4'
			>
				<input
					type='email'
					id='email'
					name='email'
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					placeholder='Enter your email'
					className='md:w-2/3 px-4 py-3 border border-dark/70 bg-light rounded-md'
					required
				/>
				<button
					type='submit'
					disabled={isLoading}
					className={`md:w-1/3 px-4 py-3 rounded-md text-light font-bold ${
						isLoading
							? 'bg-primary/30 cursor-not-allowed'
							: 'bg-primary hover:bg-dark'
					} transition duration-300`}
				>
					{buttonText}
				</button>
			</form>

			{/* Banner */}
			{banner.show && (
				<div
					className={`fixed justify-around bottom-4 left-1/2 transform -translate-x-1/2 
                      max-w-sm w-full mx-auto p-4 rounded-sm shadow-lg 
                      flex items-center  shadow-tertiary/30 
                      ${
												banner.type === 'success'
													? 'bg-dark text-light z-[99999] border-tertiary/50 border'
													: 'bg-tertiary border border-dark/60 text-dark'
											}`}
					onClick={closeBanner}
				>
					<button
						className=' text-lg font-bold focus:outline-none'
						aria-label='Close'
					>
						&times;
					</button>
					<span>{banner.message}</span>
				</div>
			)}
		</>
	);
};

export default CaptureEmailForm;
