const RESEND_API_KEY = process.env.RESEND_API_KEY;

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, phone, company, scope, preferred } = req.body;

  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required' });
  }

  try {
    const emailRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Azmi Construction <onboarding@resend.dev>',
        to: 'syedkamranazmi@yahoo.com',
        subject: `New consultation request from ${name}`,
        html: `<h2>New Consultation Request</h2><p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Phone:</strong> ${phone || 'Not provided'}</p><p><strong>Company:</strong> ${company || 'Not provided'}</p><p><strong>Preferred Contact:</strong> ${preferred || 'Not specified'}</p><p><strong>Project Scope:</strong></p><p>${scope || 'No details provided'}</p>`,
      }),
    });

    if (!emailRes.ok) throw new Error('Failed to send email');

    return res.status(200).json({
      success: true,
      message: "Thanks for reaching out. We'll be in touch shortly.",
    });
  } catch (error) {
    console.error('Contact form error:', error);
    return res.status(500).json({ error: 'Failed to send request' });
  }
}
