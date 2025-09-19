import { z } from "zod";
import {
  contactFormSchema,
  fileSchema,
  emailConfigSchema,
  captchaResponseSchema,
} from "./schemas";
import {
  ContactFormData,
  FileData,
  EmailConfig,
  CaptchaResponse,
  ValidationResult,
} from "./types";

/**
 * Validates contact form data
 * @param fields - Raw form field data
 * @returns ValidationResult with parsed data or errors
 */
export function validateContactForm(
  fields: Record<string, string>
): ValidationResult<ContactFormData> {
  try {
    const data = contactFormSchema.parse(fields);
    return { success: true, data };
  } catch (error) {
    if (error instanceof z.ZodError) {
      const errors = error.issues.map((err: z.ZodIssue) => ({
        field: err.path.join("."),
        message: err.message,
      }));

      // Return the first error message for simple error handling
      const firstError = error.issues[0];
      return {
        success: false,
        error: firstError.message,
        errors,
      };
    }
    return { success: false, error: "Validation failed" };
  }
}

/**
 * Validates file upload data
 * @param file - File object to validate
 * @returns ValidationResult with parsed data or errors
 */
export function validateFile(file: any): ValidationResult<FileData> {
  if (!file) {
    return { success: true };
  }

  try {
    const data = fileSchema.parse(file);
    return { success: true, data };
  } catch (error) {
    if (error instanceof z.ZodError) {
      const errors = error.issues.map((err: z.ZodIssue) => ({
        field: err.path.join("."),
        message: err.message,
      }));

      // Return the first error message for simple error handling
      const firstError = error.issues[0];
      return {
        success: false,
        error: firstError.message,
        errors,
      };
    }
    return { success: false, error: "File validation failed" };
  }
}

/**
 * Validates email configuration
 * @param config - Email configuration object
 * @returns ValidationResult with parsed data or errors
 */
export function validateEmailConfig(
  config: Record<string, any>
): ValidationResult<EmailConfig> {
  try {
    const data = emailConfigSchema.parse(config);
    return { success: true, data };
  } catch (error) {
    if (error instanceof z.ZodError) {
      const errors = error.issues.map((err: z.ZodIssue) => ({
        field: err.path.join("."),
        message: err.message,
      }));

      const firstError = error.issues[0];
      return {
        success: false,
        error: firstError.message,
        errors,
      };
    }
    return { success: false, error: "Email configuration validation failed" };
  }
}

/**
 * Validates hCaptcha response
 * @param response - hCaptcha API response
 * @returns ValidationResult with parsed data or errors
 */
export function validateCaptchaResponse(
  response: any
): ValidationResult<CaptchaResponse> {
  try {
    const data = captchaResponseSchema.parse(response);
    return { success: true, data };
  } catch (error) {
    if (error instanceof z.ZodError) {
      const errors = error.issues.map((err: z.ZodIssue) => ({
        field: err.path.join("."),
        message: err.message,
      }));

      const firstError = error.issues[0];
      return {
        success: false,
        error: firstError.message,
        errors,
      };
    }
    return { success: false, error: "Captcha response validation failed" };
  }
}

/**
 * Validates multiple form fields at once
 * @param data - Object containing multiple validation targets
 * @returns Combined validation result
 */
export function validateFormSubmission(data: {
  fields: Record<string, string>;
  file?: any;
  captchaToken: string;
}): ValidationResult {
  // Validate form fields
  const fieldValidation = validateContactForm(data.fields);
  if (!fieldValidation.success) {
    return fieldValidation;
  }

  // Validate file if present
  if (data.file) {
    const fileValidation = validateFile(data.file);
    if (!fileValidation.success) {
      return fileValidation;
    }
  }

  return {
    success: true,
    data: {
      fields: fieldValidation.data,
      file: data.file,
    },
  };
}

/**
 * Sanitizes and validates string input
 * @param input - Raw string input
 * @param maxLength - Maximum allowed length
 * @returns Sanitized string or null if invalid
 */
export function sanitizeInput(
  input: string,
  maxLength: number = 1000
): string | null {
  if (!input || typeof input !== "string") {
    return null;
  }

  // Remove HTML tags and script content
  const sanitized = input
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "")
    .replace(/<[^>]*>/g, "")
    .trim();

  if (sanitized.length > maxLength) {
    return null;
  }

  return sanitized;
}

/**
 * Validates and sanitizes filename for security
 * @param filename - Original filename
 * @returns Sanitized filename or null if invalid
 */
export function sanitizeFilename(filename: string): string | null {
  if (!filename || typeof filename !== "string") {
    return null;
  }

  // Remove path traversal attempts and invalid characters
  const sanitized = filename
    .replace(/[\/\\:*?"<>|]/g, "")
    .replace(/\.\./g, "")
    .trim();

  if (!sanitized || sanitized.length === 0) {
    return null;
  }

  return sanitized;
}
