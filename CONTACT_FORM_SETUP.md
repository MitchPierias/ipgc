# Contact Form Setup

This document explains how to configure the contact form for the IPGC website.

## Required Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```bash
# Email Configuration for Contact Form
EMAIL_SERVICE=gmail
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
EMAIL_FROM=noreply@ipgc.com

# hCaptcha Configuration
NEXT_PUBLIC_HCAPTCHA_SITE_KEY=your-hcaptcha-site-key
HCAPTCHA_SECRET_KEY=your-hcaptcha-secret-key
```

## Email Setup

### Gmail Configuration
1. Enable 2-factor authentication on your Gmail account
2. Generate an App Password:
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate a password for "Mail"
3. Use your Gmail address as `EMAIL_USER`
4. Use the generated app password as `EMAIL_PASSWORD`

### Alternative Email Services
You can use other email services by changing `EMAIL_SERVICE`:
- `outlook` for Outlook/Hotmail
- `yahoo` for Yahoo Mail
- Or configure custom SMTP settings

## hCaptcha Setup

1. Sign up at [hCaptcha.com](https://www.hcaptcha.com/)
2. Create a new site in your dashboard
3. Get your Site Key and Secret Key
4. Add them to your environment variables

### For Development
You can use the test keys for development:
- Site Key: `10000000-ffff-ffff-ffff-000000000001`
- Secret Key: `0x0000000000000000000000000000000000000000`

## Features

The contact form includes:

✅ **Form Fields:**
- Name (required)
- Phone (required, with validation)
- Email (required, with validation)
- Message (required)
- File attachment (optional, max 10MB)

✅ **Security:**
- hCaptcha spam protection
- Server-side validation
- File type restrictions (.pdf, .doc, .docx, .jpg, .png)

✅ **User Experience:**
- Real-time validation
- Loading states
- Success/error feedback
- Responsive design
- Accessibility features

✅ **Email Features:**
- HTML formatted emails
- File attachments
- Reply-to functionality
- Proper email headers

## File Upload

Supported file types:
- PDF documents (.pdf)
- Word documents (.doc, .docx)
- Images (.jpg, .jpeg, .png)

Maximum file size: 10MB

## Deployment on Vercel

1. Add all environment variables in your Vercel project settings
2. The contact form will be available at `/contact`
3. Emails will be sent to `mitch@pierias.com` as configured

## Security Notes

- Never commit `.env.local` to version control
- Use strong passwords and app passwords for email
- Regularly rotate your hCaptcha keys
- Monitor email delivery and usage

## Troubleshooting

### Email not sending
- Check email credentials
- Verify Gmail app password is correct
- Check Vercel function logs

### Captcha not working
- Verify hCaptcha site key is public (starts with `NEXT_PUBLIC_`)
- Check secret key is correctly set in Vercel
- Ensure domain is registered with hCaptcha

### File uploads failing
- Check file size (max 10MB)
- Verify file type is supported
- Check Vercel function timeout settings
