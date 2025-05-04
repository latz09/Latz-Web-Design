import PageContainer from '@/components/utils/animations/PageContainer';
import Link from 'next/link';

const bookingOptions = [
	{
		label: '📞 Website Strategy Call with Jordan',
		href: '/book/call',
		description:
			'A relaxed phone call to talk through your website needs. Whether you’re exploring options or ready to get started, we’ll discuss your goals, answer questions, and outline what working together might look like.',
		duration: '30m · 45m · 60m',
	},
	{
		label: '🎥 Website Consultation – Google Meet with Jordan',
		href: '/book/video',
		description:
			'Prefer a face-to-face conversation? Let’s connect over Google Meet to talk about your website goals, review ideas together, and explore how I can help. Whether you’re just starting or already mid-project, this video call gives us space to collaborate clearly and visually.',
		duration: '30m · 45m · 60m',
	},
	{
		label: '🤝 In-Person Website Planning Meeting with Jordan',
		href: '/book/in-person',
		description:
			'Prefer to meet in person? This meeting is ideal for planning your website project face-to-face. We’ll go over layout ideas, content needs, functionality, and business goals — all in a relaxed, focused setting. Great for getting aligned and mapping out next steps together.',
		duration: '60m',
	},
];

export default function BookingIndex() {
	return (
		<PageContainer>
			<div className='px-4 pt-8 pb-48 max-w-4xl mx-auto'>
				<h1 className='text-3xl font-bold mb-10 text-center'>Book a Meeting</h1>
				<div className='grid gap-12'>
					{bookingOptions.map(({ label, href, description, duration }) => (
						<Link key={href} href={href}>
							<div className='border border-light/10 rounded-sm p-6 bg-light/5 shadow-lg shadow-primary/10'>
								<h2 className='text-xl  mb-2 text-light font-bold uppercase tracking-wide'>
									{label}
								</h2>
								<p className='text-light mb-4'>{description}</p>
								<p className=' text-primary font-bold mb-6'>
									Duration: {duration}
								</p>
								<div className='inline-block bg-dark text-light px-4 py-2 rounded hover:opacity-90 transition'>
									Book Now
								</div>
							</div>
						</Link>
					))}
				</div>
			</div>
		</PageContainer>
	);
}
