/**
 * Communication Services Configuration
 * 
 * This file contains configuration for SMTP (email) and SMS Gateway services
 * used by the No1 shadi.com application
 */

// ==========================================
// SMTP Configuration (Simple Mail Transfer Protocol)
// ==========================================
export const SMTP_CONFIG = {
  // Email Service Provider Settings
  host: "smtp.gmail.com", // SMTP server hostname (e.g., smtp.gmail.com, smtp.sendgrid.net)
  port: 587, // SMTP port (587 for TLS, 465 for SSL, 25 for non-secure)
  secure: false, // true for 465 (SSL), false for other ports (TLS/STARTTLS)
  
  // Authentication Credentials
  auth: {
    user: "no1shadi.com@gmail.com", // SMTP username (usually your email)
    pass: "YOUR_EMAIL_PASSWORD_OR_APP_PASSWORD", // SMTP password or app-specific password
  },
  
  // Email Sender Information
  from: {
    name: "No1 Shadi.com - Safe & Secure",
    email: "no1shadi.com@gmail.com",
  },
  
  // Email Templates Configuration
  templates: {
    otpEmail: {
      subject: "Your OTP for No1 Shadi.com",
      // Template will be: "Your OTP is: {OTP}. Valid for 10 minutes."
    },
    welcomeEmail: {
      subject: "Welcome to No1 Shadi.com!",
      // Welcome email template
    },
    interestNotification: {
      subject: "Someone sent you an interest!",
      // Interest notification template
    },
    matchNotification: {
      subject: "New Matches for You!",
      // New matches notification template
    },
    passwordReset: {
      subject: "Reset Your Password - No1 Shadi.com",
      // Password reset template
    },
  },
  
  // Email Service Notes:
  // - For Gmail: Enable "Less secure app access" or use App Passwords
  // - For production, consider using:
  //   * SendGrid (https://sendgrid.com/)
  //   * Amazon SES (https://aws.amazon.com/ses/)
  //   * Mailgun (https://www.mailgun.com/)
  //   * Postmark (https://postmarkapp.com/)
};

// ==========================================
// SMS Gateway Configuration
// ==========================================
export const SMS_CONFIG = {
  // SMS Service Provider
  provider: "twilio", // Options: "twilio", "msg91", "fast2sms", "textlocal", "kaleyra"
  
  // Twilio Configuration (Popular international SMS service)
  twilio: {
    accountSid: "YOUR_TWILIO_ACCOUNT_SID",
    authToken: "YOUR_TWILIO_AUTH_TOKEN",
    phoneNumber: "+1234567890", // Your Twilio phone number
    messagingServiceSid: "YOUR_MESSAGING_SERVICE_SID", // Optional
  },
  
  // MSG91 Configuration (Popular in India)
  msg91: {
    authKey: "YOUR_MSG91_AUTH_KEY",
    senderId: "NOSADI", // 6 characters sender ID
    route: "4", // 1=Promotional, 4=Transactional
    country: "91", // India country code
  },
  
  // Fast2SMS Configuration (Indian SMS Gateway)
  fast2sms: {
    apiKey: "YOUR_FAST2SMS_API_KEY",
    senderId: "NOSADI",
    route: "dlt", // DLT route for India
  },
  
  // TextLocal Configuration (UK & India)
  textlocal: {
    apiKey: "YOUR_TEXTLOCAL_API_KEY",
    sender: "NOSADI",
  },
  
  // Kaleyra Configuration (Indian SMS Gateway)
  kaleyra: {
    apiKey: "YOUR_KALEYRA_API_KEY",
    sid: "YOUR_KALEYRA_SID",
    senderId: "NOSADI",
  },
  
  // SMS Templates
  templates: {
    otpSMS: "Your OTP for No1 Shadi.com is {OTP}. Valid for 10 minutes. Do not share with anyone.",
    welcomeSMS: "Welcome to No1 Shadi.com! Your profile has been created successfully. Start your journey to find your perfect match.",
    interestReceived: "You have received an interest from {NAME} on No1 Shadi.com. Login to view profile.",
    verificationSuccess: "Congratulations! Your No1 Shadi.com profile has been verified successfully.",
  },
  
  // SMS Gateway Recommendations for India:
  // 1. MSG91 - Reliable, good for OTPs, transactional SMS
  // 2. Fast2SMS - Easy to use, affordable
  // 3. Kaleyra - Enterprise-grade, highly reliable
  // 4. TextLocal - Good delivery rates
  // 5. Twilio - International, premium pricing
  
  // DLT (Distributed Ledger Technology) Registration:
  // - Required for sending SMS in India (TRAI regulation)
  // - Register your company and templates with DLT platform
  // - Each SMS template needs approval before sending
};

// ==========================================
// Communication Service Functions
// ==========================================

/**
 * Send OTP via Email using SMTP
 * @param email - Recipient email address
 * @param otp - One-time password to send
 * @param name - Recipient name
 */
export async function sendOTPEmail(email: string, otp: string, name: string) {
  // In a real application, this would use nodemailer or similar library
  // Example implementation:
  /*
  const nodemailer = require('nodemailer');
  
  const transporter = nodemailer.createTransport({
    host: SMTP_CONFIG.host,
    port: SMTP_CONFIG.port,
    secure: SMTP_CONFIG.secure,
    auth: SMTP_CONFIG.auth,
  });
  
  const mailOptions = {
    from: `${SMTP_CONFIG.from.name} <${SMTP_CONFIG.from.email}>`,
    to: email,
    subject: SMTP_CONFIG.templates.otpEmail.subject,
    html: `
      <h2>Hello ${name},</h2>
      <p>Your OTP for No1 Shadi.com verification is:</p>
      <h1 style="color: #7B1E3A; font-size: 32px; letter-spacing: 5px;">${otp}</h1>
      <p>This OTP is valid for 10 minutes.</p>
      <p>If you didn't request this, please ignore this email.</p>
      <br/>
      <p>Best regards,<br/>No1 Shadi.com Team</p>
    `,
  };
  
  await transporter.sendMail(mailOptions);
  */
  
  console.log(`[SMTP] Would send OTP ${otp} to email: ${email}`);
  return Promise.resolve({ success: true });
}

/**
 * Send OTP via SMS Gateway
 * @param phoneNumber - Recipient phone number with country code
 * @param otp - One-time password to send
 */
export async function sendOTPSMS(phoneNumber: string, otp: string) {
  // In a real application, this would call the SMS gateway API
  // Example implementation for MSG91:
  /*
  const axios = require('axios');
  
  const message = SMS_CONFIG.templates.otpSMS.replace('{OTP}', otp);
  
  const response = await axios.post('https://api.msg91.com/api/v5/flow/', {
    authkey: SMS_CONFIG.msg91.authKey,
    mobiles: phoneNumber,
    message: message,
    sender: SMS_CONFIG.msg91.senderId,
    route: SMS_CONFIG.msg91.route,
    country: SMS_CONFIG.msg91.country,
  });
  
  return response.data;
  */
  
  console.log(`[SMS Gateway] Would send OTP ${otp} to phone: ${phoneNumber}`);
  return Promise.resolve({ success: true, messageId: "MOCK_" + Date.now() });
}

/**
 * Send Interest Notification via Email
 * @param email - Recipient email address
 * @param senderName - Name of person who sent interest
 * @param profileUrl - URL to view sender's profile
 */
export async function sendInterestEmailNotification(
  email: string,
  senderName: string,
  profileUrl: string
) {
  console.log(`[SMTP] Would send interest notification from ${senderName} to ${email}`);
  return Promise.resolve({ success: true });
}

/**
 * Send Interest Notification via SMS
 * @param phoneNumber - Recipient phone number
 * @param senderName - Name of person who sent interest
 */
export async function sendInterestSMSNotification(
  phoneNumber: string,
  senderName: string
) {
  const message = SMS_CONFIG.templates.interestReceived.replace('{NAME}', senderName);
  console.log(`[SMS Gateway] Would send: "${message}" to ${phoneNumber}`);
  return Promise.resolve({ success: true });
}

// ==========================================
// Export all configurations
// ==========================================
export default {
  smtp: SMTP_CONFIG,
  sms: SMS_CONFIG,
  sendOTPEmail,
  sendOTPSMS,
  sendInterestEmailNotification,
  sendInterestSMSNotification,
};

