import { sanityClient } from '@/lib/sanity/sanityConnection';
import transporter from '@/lib/nodemailer/transporter';

export default async function handler(req, res) {
	if (req.method !== 'POST') {
		res.setHeader('Allow', ['POST']);
		res.status(405).end(`Method ${req.method} Not Allowed`);
		return;
	}

	try {
		const { name, email, description } = req.body;

		// Store in Sanity
		const result = await sanityClient.create({
			_type: 'contactForm',
			name,
			email,

			description, // Add description to the Sanity document
			sentAt: new Date().toISOString(),
		});

		// Send email using Nodemailer
		const mailOptions = {
			from: `Contact Form Submission <${email}>`,
			to: process.env.CLIENT_EMAIL,
			subject: `${name} Submitted a Contact Form`,
			text: `A new form has been submitted with the following details:
        Name: ${name}
        Email: ${email}       
        Description: ${description} 
        `,
			html: `
        <p>A new form has been submitted with the following details:</p>
        <ul>
            <li><strong>Name:</strong> ${name}</li>
            <li><strong>Email:</strong> ${email}</li>
            <br>                     
            <li><strong>Description:</strong> ${description}</li>           
        </ul>
        `,
		};

		await transporter.sendMail(mailOptions);

		res.status(200).json({
			success: true,
			message: 'Form submitted successfully',
			data: result,
		});
	} catch (error) {
		res.status(500).json({ success: false, message: error.message });
	}
}

{/* <li><strong>Phone Number:</strong> <a href="tel:${phoneNumber}">${phoneNumber}</a></li> */}

// Phone Number: ${phoneNumber}