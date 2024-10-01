const CRMBlurb = () => {
	return (
		<section className='bg-gray-100 py-12 px-6'>
			<div className='container mx-auto text-center'>
				<h2 className='text-3xl font-bold text-tertiary mb-4'>
					AI-Powered CRM & Automation
				</h2>
				<p className='text-md mb-6'>
					Save time, capture more leads, and grow your business with our
					all-in-one CRM. Manage customer interactions, automate follow-ups, and
					boost your online presence effortlessly.
				</p>

				{/* Link to the CRM Page */}
				<a
					href='/customer-relationship-manager'
					className='inline-block bg-primary text-white py-3 px-5 rounded-full text-sm font-semibold hover:bg-primary-dark'
				>
					Explore Our CRM Services
				</a>
			</div>
		</section>
	);
};

export default CRMBlurb;
