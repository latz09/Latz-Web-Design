import { sanityClient } from '@/lib/sanity/sanityConnection';
import transporter from '@/lib/nodemailer/transporter';

// Minimum time (in ms) a human would take to fill out the form
const MIN_FORM_TIME_MS = 3000; // 3 seconds

export default async function handler(req, res) {
	if (req.method !== 'POST') {
		res.setHeader('Allow', ['POST']);
		res.status(405).end(`Method ${req.method} Not Allowed`);
		return;
	}

	try {
		const {
			name,
			email,
			serviceTypes,
			description,
			// Anti-spam fields
			website,
			formLoadedAt,
			submittedAt,
		} = req.body;

		// ============================================
		// ANTI-SPAM CHECKS
		// ============================================

		// Check 1: Honeypot field - if filled, it's a bot
		if (website && website.trim() !== '') {
			console.log('Spam blocked: Honeypot field filled');
			return res.status(200).json({ success: true });
		}

		// Check 2: Time-based validation - form submitted too fast
		if (formLoadedAt && submittedAt) {
			const timeSpent = submittedAt - formLoadedAt;
			if (timeSpent < MIN_FORM_TIME_MS) {
				console.log(`Spam blocked: Form submitted too fast (${timeSpent}ms)`);
				return res.status(200).json({ success: true });
			}
		}

		// Check 3: Basic pattern detection for gibberish
		const hasGibberishPattern = (str) => {
			if (!str) return false;
			const consonantRatio =
				(str.match(/[bcdfghjklmnpqrstvwxyz]/gi) || []).length / str.length;
			const hasNoSpaces = str.length > 15 && !str.includes(' ');

			return (
				(consonantRatio > 0.7 && str.length > 10) ||
				(hasNoSpaces && str.length > 20)
			);
		};

		if (hasGibberishPattern(name) || hasGibberishPattern(description)) {
			console.log('Spam blocked: Gibberish pattern detected');
			return res.status(200).json({ success: true });
		}

		// ============================================
		// LEGITIMATE SUBMISSION - Process normally
		// ============================================

		// Store in Sanity
		const result = await sanityClient.create({
			_type: 'contactForm',
			name,
			email,
			serviceTypes,
			description,
			sentAt: new Date().toISOString(),
		});

		// Prepare a formatted list of selected services for the email
		const formattedServices =
			serviceTypes.length > 0
				? serviceTypes.map((service) => `<li>${service}</li>`).join('')
				: '<li>No service selected</li>';

		// Send email using Nodemailer
		const mailOptions = {
			from: `Contact Form Submission <${email}>`,
			to: process.env.CLIENT_EMAIL,
			subject: `${name} Submitted a Contact Form`,
			text: `A new form has been submitted with the following details:
        Name: ${name}
        Email: ${email}
        Services Interested In: ${serviceTypes.join(', ')}
        Description: ${description} 
        `,
			html: `
        <p>A new form has been submitted with the following details:</p>
        <ul>
            <li><strong>Name:</strong> ${name}</li>
            <li><strong>Email:</strong> ${email}</li>
            <br>
            <li><strong>Services Interested In:</strong></li>
            <ul>${formattedServices}</ul>
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
