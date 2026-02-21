import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { existsSync } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load .env file - pehle backend folder mein check karein, phir parent folder mein
// Server par backend folder directly public_html mein hai
const backendEnvPath = join(__dirname, '.env');
const rootEnvPath = join(__dirname, '..', '.env');

if (existsSync(backendEnvPath)) {
  dotenv.config({ path: backendEnvPath });
  console.log('✅ Loaded .env from backend folder');
} else if (existsSync(rootEnvPath)) {
  dotenv.config({ path: rootEnvPath });
  console.log('✅ Loaded .env from root folder');
} else {
  dotenv.config(); // Default .env file ya environment variables
  console.log('⚠️  Using environment variables or default config');
}

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors({
  origin: process.env.ALLOWED_ORIGINS ? process.env.ALLOWED_ORIGINS.split(',') : '*',
  credentials: true
}));
app.use(express.json());

// Create transporter for Gmail
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER || 'poojadhameja36@gmail.com',
    pass: (process.env.GMAIL_APP_PASSWORD || '').replace(/\s+/g, ''), // Remove spaces
  },
});

// Verify transporter on startup
transporter.verify(function (error, success) {
  if (error) {
    console.error('❌ Email configuration error:', error.message);
    console.log('⚠️  Please check GMAIL_APP_PASSWORD in .env file');
  } else {
    console.log('✅ Email server ready to send emails');
  }
});

// Email sending endpoint
app.post('/api/send-email', async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      whatsappNumber,
      telegramId,
      country,
      budget,
      projectDescription,
      source,
    } = req.body;

    // Validate required fields
    if (!firstName || !email || !whatsappNumber) {
      return res.status(400).json({
        success: false,
        message: 'Missing required fields: firstName, email, and whatsappNumber are required',
      });
    }

    // Prepare email content
    const fullName = lastName ? `${firstName} ${lastName}` : firstName;
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #4A9EFF;">New Contact Form Submission</h2>
        <p><strong>Source:</strong> ${source || 'Contact Form'}</p>
        
        <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #333; margin-top: 0;">Contact Information</h3>
          <p><strong>Name:</strong> ${fullName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>WhatsApp Number:</strong> ${whatsappNumber}</p>
          <p><strong>Telegram ID:</strong> ${telegramId || 'Not provided'}</p>
          <p><strong>Country:</strong> ${country || 'Not provided'}</p>
          <p><strong>Budget:</strong> ${budget || 'Not provided'}</p>
        </div>

        <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #333; margin-top: 0;">Project Description</h3>
          <p style="white-space: pre-wrap;">${projectDescription || 'No description provided'}</p>
        </div>

        <hr style="border: none; border-top: 1px solid #ddd; margin: 30px 0;">
        <p style="color: #666; font-size: 12px;">
          This email was sent from your Blockchain App Advisor website contact form.
        </p>
      </div>
    `;

    const emailText = `
New Contact Form Submission
Source: ${source || 'Contact Form'}

Contact Information:
- Name: ${fullName}
- Email: ${email}
- WhatsApp Number: ${whatsappNumber}
- Telegram ID: ${telegramId || 'Not provided'}
- Country: ${country || 'Not provided'}
- Budget: ${budget || 'Not provided'}

Project Description:
${projectDescription || 'No description provided'}

---
This email was sent from your Blockchain App Advisor website contact form.
    `;

    // Send email
    const mailOptions = {
      from: process.env.GMAIL_USER || 'poojadhameja36@gmail.com',
      to: 'poojadhameja36@gmail.com',
      subject: `New Contact Form Submission - ${source || 'Contact Form'}`,
      text: emailText,
      html: emailHtml,
      replyTo: email, // So you can reply directly to the user
    };

    await transporter.sendMail(mailOptions);

    console.log(`✅ Email sent successfully from ${email}`);
    res.json({
      success: true,
      message: 'Email sent successfully!',
    });
  } catch (error) {
    console.error('❌ Error sending email:', error.message);
    res.status(500).json({
      success: false,
      message: 'Failed to send email. Please try again later.',
      error: error.message,
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'ok', 
    message: 'Email server is running',
    timestamp: new Date().toISOString()
  });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Email server running on http://0.0.0.0:${PORT}`);
  console.log(`📧 Health check: http://localhost:${PORT}/api/health`);
  console.log(`🌐 Server accessible from: http://localhost:${PORT}`);
});

// Handle uncaught errors
process.on('uncaughtException', (error) => {
  console.error('❌ Uncaught Exception:', error);
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('❌ Unhandled Rejection at:', promise, 'reason:', reason);
});
