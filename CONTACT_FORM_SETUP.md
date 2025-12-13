# Contact Form Setup

This document explains how to configure the contact form for the IPGC website.

## Required Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```bash
# Email Configuration for Contact Form (Outlook/Microsoft 365)
EMAIL_USER=your-email@ipgc.com.au
EMAIL_PASSWORD=your-app-password
EMAIL_FROM=noreply@ipgc.com.au
CONTACT_FORM_RECIPIENT_EMAIL=reception@ipgc.com.au

# hCaptcha Configuration
NEXT_PUBLIC_HCAPTCHA_SITE_KEY=your-hcaptcha-site-key
HCAPTCHA_SECRET_KEY=your-hcaptcha-secret-key
```

## Email Setup

### Outlook/Microsoft 365 Configuration

The form is configured to use Outlook/Microsoft 365 SMTP servers (`smtp-mail.outlook.com`).

1. **Enable App Passwords** (if using Microsoft 365):
   - Go to [Microsoft Account Security](https://account.microsoft.com/security)
   - Sign in with your Microsoft account
   - Navigate to **Security** → **Advanced security options**
   - Under **App passwords**, create a new app password
   - Use this app password as `EMAIL_PASSWORD`

2. **For Outlook.com accounts**:
   - Go to [Microsoft Account Security](https://account.microsoft.com/security)
   - Enable 2-step verification
   - Generate an app password for "Mail"
   - Use this app password as `EMAIL_PASSWORD`

3. **Configuration**:
   - Set `EMAIL_USER` to your full email address (e.g., `noreply@ipgc.com.au`)
   - Set `EMAIL_PASSWORD` to your app password (not your regular password)
   - Set `EMAIL_FROM` to the email address that should appear as the sender
   - Set `CONTACT_FORM_RECIPIENT_EMAIL` to where form submissions should be sent

**Note:** The email system uses Outlook's SMTP servers and does not require Cloudflare or Google services.

## hCaptcha Setup

hCaptcha provides spam protection without requiring Cloudflare or Google services.

1. Sign up at [hCaptcha.com](https://www.hcaptcha.com/)
2. Create a new site in your dashboard
3. Add your domain(s) (e.g., `ipgc.com.au`)
4. Get your Site Key and Secret Key
5. Add them to your environment variables

### For Development
You can use the test keys for development:
- Site Key: `10000000-ffff-ffff-ffff-000000000001` (always passes)
- Secret Key: `0x0000000000000000000000000000000000000000` (always passes)

**Note:** The test keys will always pass validation, so use them only in development.

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

1. Add all environment variables in your Vercel project settings:
   - Go to your project → Settings → Environment Variables
   - Add all the variables listed above
   - Make sure to add them for Production, Preview, and Development environments as needed
2. The contact form will be available at `/contact`
3. Emails will be sent to the address specified in `CONTACT_FORM_RECIPIENT_EMAIL` (defaults to `mitch@pierias.com` if not set)

## Security Notes

- Never commit `.env.local` to version control
- Use strong passwords and app passwords for email (never use your regular password)
- Regularly rotate your hCaptcha keys
- Monitor email delivery and usage
- Keep your hCaptcha secret key secure and never expose it in client-side code
- App passwords are more secure than regular passwords for SMTP authentication

## Troubleshooting

### Email not sending
- Check email credentials
- Verify Gmail app password is correct
- Check Vercel function logs

### Captcha not working
- Verify hCaptcha site key is public (starts with `NEXT_PUBLIC_`)
- Check secret key is correctly set in Vercel
- Ensure domain is registered with hCaptcha
- Verify you're using the correct keys (not test keys in production)

### Email not sending with Outlook
- Verify you're using an App Password, not your regular password
- Check that 2-factor authentication is enabled on your Microsoft account
- Ensure your email address matches the one in `EMAIL_USER`
- Check Vercel function logs for SMTP connection errors
- Verify your Microsoft account allows SMTP access (some organizations restrict this)

### File uploads failing
- Check file size (max 10MB)
- Verify file type is supported
- Check Vercel function timeout settings
