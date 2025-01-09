const SnapshotDetails = () => {
	return (
		<div>
			<div className=''>
				<Description description={scrollNote} theme='italic text-center px-4' />
			</div>
			<div className='h-72  bg-dark/50'></div>

			<div className='mt-12 p-8 space-y-12'>
				<MainHeading title={detailsHeadline} theme='text-center text-primary' />
				<ul className='space-y-8'>
					{snapshotDetails.map((detail, index) => (
						<li
							key={index}
							className='border-b border-primary/20 pb-4 grid gap-4'
						>
							<MainHeading title={detail.title} />
							<p className='dark/80 text-xl'>
								<span className='text-primary'>Why It Matters: </span>
								{detail.whyItMatters}
							</p>
						</li>
					))}
				</ul>
			</div>
			<div className='h-72  bg-dark mb-16'></div>
		</div>
	);
};

export default SnapshotDetails;
