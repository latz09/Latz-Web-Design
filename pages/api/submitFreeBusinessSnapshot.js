import { sanityClient } from '@/lib/sanity/sanityConnection';
import transporter from '@/lib/nodemailer/transporter';

export default async function handler(req, res) {
	if (req.method !== 'POST') {
		res.setHeader('Allow', ['POST']);
		res.status(405).end(`Method ${req.method} Not Allowed`);
		return;
	}

	try {
		const { name, email, website } = req.body;

		// Store in Sanity
		const result = await sanityClient.create({
			_type: 'snapshotForm',
			name,
			email,
			website,
			sentAt: new Date().toISOString(),
		});

		// Send email using Nodemailer
		const mailOptions = {
			from: `Free Snapshot Request <${email}>`,
			to: process.env.CLIENT_EMAIL, // Or wherever you want to send the email
			subject: `${name} Requested a Free Snapshot`,
			text: `A new free snapshot request was submitted:
			Name: ${name}
			Email: ${email}
			Website: ${website}
			`,
			html: `
				<p>A new free snapshot request was submitted with the following details:</p>
				<ul>
					<li><strong>Name:</strong> ${name}</li>
					<li><strong>Email:</strong> ${email}</li>
					<li><strong>Website:</strong> ${website}</li>
				</ul>
			`,
		};

		await transporter.sendMail(mailOptions);

		res.status(200).json({
			success: true,
			message: 'Snapshot request submitted successfully',
			data: result,
		});
	} catch (error) {
		res.status(500).json({ success: false, message: error.message });
	}
}
