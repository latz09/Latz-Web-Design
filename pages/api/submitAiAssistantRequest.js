// pages/api/submitAiAssistantRequest.js
import { sanityClient } from '@/lib/sanity/sanityConnection';
import transporter from '@/lib/nodemailer/transporter';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ success: false, message: `Method ${req.method} Not Allowed` });
  }

  try {
    const { email } = req.body;

    // Store in Sanity
    const doc = await sanityClient.create({
      _type: 'aiAssistantForm',
      email,
      sentAt: new Date().toISOString(),
    });

    // Prepare Nodemailer email
    const mailOptions = {
      from: `AI Assistant Request <${email}>`,
      to: process.env.CLIENT_EMAIL, // or your preferred address
      subject: 'New AI Assistant Info Request',
      text: `A new AI assistant info request was submitted by ${email}.`,
      html: `
        <p>A new AI assistant info request was submitted:</p>
        <ul>
          <li><strong>Email:</strong> ${email}</li>
        </ul>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    // Return a success response
    return res.status(200).json({
      success: true,
      message: 'AI assistant info request submitted successfully',
      data: doc,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}
