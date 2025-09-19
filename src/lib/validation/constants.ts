/**
 * Validation Constants
 * Centralized constants for validation rules and configuration
 */

// File upload limits
export const FILE_LIMITS = {
  MAX_SIZE: 10 * 1024 * 1024, // 10MB
  MIN_SIZE: 1, // 1 byte
} as const;

// Allowed file types
export const ALLOWED_FILE_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "text/plain",
  "image/jpeg",
  "image/png",
  "image/gif",
] as const;

// Dangerous file extensions that should be blocked
export const DANGEROUS_FILE_EXTENSIONS = [
  ".exe",
  ".bat",
  ".cmd",
  ".scr",
  ".pif",
  ".js",
  ".vbs",
  ".jar",
  ".com",
  ".msi",
  ".app",
  ".dmg",
  ".pkg",
  ".deb",
  ".rpm",
] as const;

// Form field limits
export const FIELD_LIMITS = {
  NAME: {
    MIN: 2,
    MAX: 100,
  },
  EMAIL: {
    MAX: 320, // RFC 5321 limit
  },
  PHONE: {
    MIN: 10,
    MAX: 15,
  },
  MESSAGE: {
    MAX: 5000,
  },
} as const;

// Regex patterns
export const VALIDATION_PATTERNS = {
  PHONE: /^[\+]?[\s\-\(\)]*([0-9][\s\-\(\)]*){10,}$/,
  HTML_TAGS: /<[^>]*>/g,
  DANGEROUS_CHARS: /[<>]/g,
  SCRIPT_TAGS: /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
  PATH_TRAVERSAL: /\.\./g,
  INVALID_FILENAME_CHARS: /[\/\\:*?"<>|]/g,
} as const;

// Error messages
export const ERROR_MESSAGES = {
  REQUIRED: "This field is required",
  INVALID_EMAIL: "Invalid email format",
  INVALID_PHONE: "Invalid phone number format",
  NAME_TOO_SHORT: "Name must be at least 2 characters",
  NAME_TOO_LONG: "Name must be less than 100 characters",
  FILE_TOO_LARGE: "File size must be less than 10MB",
  INVALID_FILE_TYPE:
    "Invalid file type. Allowed types: PDF, DOC, DOCX, TXT, JPG, PNG, GIF",
  DANGEROUS_FILE: "File type not allowed for security reasons",
  HTML_NOT_ALLOWED: "HTML characters are not allowed",
  INVALID_FILENAME: "Invalid filename - path traversal detected",
  CAPTCHA_REQUIRED: "Captcha verification is required",
  CAPTCHA_FAILED: "Captcha verification failed",
} as const;

// HTTP status codes for validation errors
export const HTTP_STATUS = {
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  UNPROCESSABLE_ENTITY: 422,
  INTERNAL_SERVER_ERROR: 500,
} as const;

// Email service configuration defaults
export const EMAIL_DEFAULTS = {
  SERVICE: "gmail",
  PORT: 587,
  SECURE: false,
} as const;
