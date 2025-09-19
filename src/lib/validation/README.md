# Validation Library

A comprehensive TypeScript validation library built with Zod for the IPGC application. This library provides type-safe validation schemas, helper functions, and constants for form validation, file uploads, and API data validation.

## 📁 Structure

```
src/lib/validation/
├── index.ts           # Main exports
├── schemas.ts         # Zod validation schemas
├── types.ts          # TypeScript type definitions
├── validators.ts     # Validation helper functions
├── constants.ts      # Validation constants and patterns
└── README.md         # This documentation
```

## 🚀 Quick Start

### Basic Usage

```typescript
import { validateContactForm, ContactFormData } from '../../../lib/validation';

// Validate contact form data
const result = validateContactForm({
  name: "John Doe",
  email: "john@example.com", 
  phone: "+1234567890",
  captchaToken: "token123"
});

if (result.success) {
  const data: ContactFormData = result.data!;
  // Process validated data
} else {
  console.error(result.error);
  console.error(result.errors); // Detailed field errors
}
```

### File Upload Validation

```typescript
import { validateFile } from '../../../lib/validation';

const fileResult = validateFile({
  originalFilename: "document.pdf",
  mimetype: "application/pdf",
  size: 1024000,
  filepath: "/tmp/upload.pdf"
});
```

## 📋 Available Schemas

### 1. Contact Form Schema

Validates contact form submissions with the following fields:

- **name**: 2-100 characters, no HTML
- **phone**: International phone format
- **email**: Valid email format
- **captchaToken**: Required for spam protection

### 2. File Upload Schema

Validates file uploads with security restrictions:

- **originalFilename**: Safe filename, no path traversal
- **mimetype**: Allowed file types (PDF, DOC, DOCX, TXT, images)
- **size**: Maximum 10MB
- **filepath**: Required file path

### 3. Email Configuration Schema

Validates email service configuration:

- **service**: Email service provider
- **user**: Valid email address
- **password**: Required password
- **from**: Optional from address

### 4. Captcha Response Schema

Validates hCaptcha API responses:

- **success**: Boolean success status
- **challenge_ts**: Optional timestamp
- **hostname**: Optional hostname
- **error-codes**: Optional error array

## 🛠️ Validation Functions

### Core Validators

- `validateContactForm(fields)` - Validates contact form data
- `validateFile(file)` - Validates file upload data
- `validateEmailConfig(config)` - Validates email configuration
- `validateCaptchaResponse(response)` - Validates captcha response
- `validateFormSubmission(data)` - Validates complete form submission

### Utility Functions

- `sanitizeInput(input, maxLength)` - Sanitizes string input
- `sanitizeFilename(filename)` - Sanitizes filename for security

## 📊 Constants

### File Limits

```typescript
import { FILE_LIMITS } from '../../../lib/validation';

console.log(FILE_LIMITS.MAX_SIZE); // 10485760 (10MB)
```

### Field Limits

```typescript
import { FIELD_LIMITS } from '../../../lib/validation';

console.log(FIELD_LIMITS.NAME.MIN); // 2
console.log(FIELD_LIMITS.NAME.MAX); // 100
```

### Validation Patterns

```typescript
import { VALIDATION_PATTERNS } from '../../../lib/validation';

const isValidPhone = VALIDATION_PATTERNS.PHONE.test(phoneNumber);
```

### Error Messages

```typescript
import { ERROR_MESSAGES } from '../../../lib/validation';

console.log(ERROR_MESSAGES.INVALID_EMAIL); // "Invalid email format"
```

## 🔒 Security Features

### XSS Protection
- HTML tag filtering
- Script tag removal
- Dangerous character detection

### File Upload Security
- Path traversal prevention
- Dangerous file extension blocking
- MIME type validation
- File size limits

### Input Sanitization
- Automatic string trimming
- Length validation
- Character filtering

## 🎯 TypeScript Integration

### Type Inference

```typescript
import { ContactFormData, FileData } from '../../../lib/validation';

// Types are automatically inferred from schemas
function handleContactForm(data: ContactFormData) {
  // data.name is string
  // data.email is string (validated email)
  // data.phone is string (validated phone)
  // data.captchaToken is string
}
```

### Validation Results

```typescript
import { ValidationResult } from '../../../lib/validation';

function processValidation<T>(result: ValidationResult<T>) {
  if (result.success) {
    // result.data is T
    return result.data;
  } else {
    // result.error is string
    // result.errors is FormValidationError[]
    throw new Error(result.error);
  }
}
```

## 🧪 Frontend Usage

The validation schemas can be used on the frontend for consistent validation:

```typescript
// In your React component
import { contactFormSchema } from '../../../lib/validation';

const validateClientSide = (formData: FormData) => {
  const result = contactFormSchema.safeParse(Object.fromEntries(formData));
  return result;
};
```

## 📈 Error Handling

### Structured Errors

```typescript
{
  "success": false,
  "error": "Name must be at least 2 characters",
  "errors": [
    {
      "field": "name",
      "message": "Name must be at least 2 characters"
    }
  ]
}
```

### API Error Responses

```typescript
import { ApiErrorResponse, HTTP_STATUS } from '../../../lib/validation';

const errorResponse: ApiErrorResponse = {
  error: "Validation failed",
  details: validationResult.errors,
  timestamp: new Date().toISOString()
};

return NextResponse.json(errorResponse, { 
  status: HTTP_STATUS.BAD_REQUEST 
});
```

## 🔧 Extending the Library

### Adding New Schemas

1. Add schema to `schemas.ts`
2. Add types to `types.ts`
3. Add validator function to `validators.ts`
4. Export from `index.ts`

### Custom Validation Rules

```typescript
const customSchema = z.string().refine((val) => {
  // Your custom validation logic
  return val.startsWith('PREFIX_');
}, "Value must start with PREFIX_");
```

## 📚 Dependencies

- **zod**: Runtime type validation and parsing
- **path**: Node.js path utilities for file validation

## 🤝 Contributing

When adding new validation rules:

1. Add appropriate tests
2. Update type definitions
3. Document new constants
4. Update this README

## 🔗 Related Files

- `/src/app/api/contact/route.ts` - Contact form API implementation
- `/src/app/contact/page.tsx` - Contact form frontend
- `/tsconfig.json` - TypeScript configuration
