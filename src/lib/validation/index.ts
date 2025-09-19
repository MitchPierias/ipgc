/**
 * Validation Library
 * Centralized validation schemas, types, and utilities for the IPGC application
 */

// Export all schemas
export {
  contactFormSchema,
  fileSchema,
  emailConfigSchema,
  captchaResponseSchema,
} from "./schemas";

// Export all types
export type {
  ContactFormData,
  FileData,
  EmailConfig,
  CaptchaResponse,
  ValidationResult,
  FormValidationError,
  ApiErrorResponse,
  ApiSuccessResponse,
} from "./types";

// Export all validation functions
export {
  validateContactForm,
  validateFile,
  validateEmailConfig,
  validateCaptchaResponse,
  validateFormSubmission,
  sanitizeInput,
  sanitizeFilename,
} from "./validators";

// Export all constants
export {
  FILE_LIMITS,
  ALLOWED_FILE_TYPES,
  DANGEROUS_FILE_EXTENSIONS,
  FIELD_LIMITS,
  VALIDATION_PATTERNS,
  ERROR_MESSAGES,
  HTTP_STATUS,
  EMAIL_DEFAULTS,
} from "./constants";

// Convenience re-exports from zod for consumers who need additional zod functionality
export { z } from "zod";
