import { z } from "zod";
import {
  contactFormSchema,
  fileSchema,
  emailConfigSchema,
  captchaResponseSchema,
} from "./schemas";

/**
 * Contact Form Data Type
 * Inferred from contactFormSchema
 */
export type ContactFormData = z.infer<typeof contactFormSchema>;

/**
 * File Upload Data Type
 * Inferred from fileSchema
 */
export type FileData = z.infer<typeof fileSchema>;

/**
 * Email Configuration Type
 * Inferred from emailConfigSchema
 */
export type EmailConfig = z.infer<typeof emailConfigSchema>;

/**
 * hCaptcha Response Type
 * Inferred from captchaResponseSchema
 */
export type CaptchaResponse = z.infer<typeof captchaResponseSchema>;

/**
 * Validation Result Type
 * Generic type for validation results
 */
export interface ValidationResult<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  errors?: Array<{ field: string; message: string }>;
}

/**
 * Form Validation Errors Type
 * Structured error information for form fields
 */
export interface FormValidationError {
  field: string;
  message: string;
  code?: string;
}

/**
 * API Error Response Type
 * Standard error response format for the API
 */
export interface ApiErrorResponse {
  error: string;
  details?: FormValidationError[];
  timestamp?: string;
  path?: string;
}

/**
 * API Success Response Type
 * Standard success response format for the API
 */
export interface ApiSuccessResponse {
  message: string;
  data?: any;
  timestamp?: string;
}
