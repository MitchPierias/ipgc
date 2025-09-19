import { z } from "zod";
import path from "path";

/**
 * Contact Form Validation Schema
 * Validates user input for contact form submissions
 */
export const contactFormSchema = z.object({
  name: z
    .string()
    .min(1, "Name is required")
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be less than 100 characters")
    .refine((val) => !/[<>]/g.test(val), "HTML characters are not allowed")
    .transform((val) => val.trim()),

  phone: z
    .string()
    .min(1, "Phone number is required")
    .refine(
      (val) => /^[\+]?[\s\-\(\)]*([0-9][\s\-\(\)]*){10,}$/.test(val),
      "Invalid phone number format"
    )
    .refine((val) => !/[<>]/g.test(val), "HTML characters are not allowed"),

  email: z
    .string()
    .min(1, "Email is required")
    .email("Invalid email format")
    .refine((val) => !/[<>]/g.test(val), "HTML characters are not allowed"),

  captchaToken: z.string().min(1, "Captcha verification is required"),
});

/**
 * File Upload Validation Schema
 * Validates file uploads with security and type restrictions
 */
export const fileSchema = z
  .object({
    originalFilename: z
      .string()
      .min(1, "Filename is required")
      .refine(
        (filename) =>
          !filename.includes("..") &&
          !filename.includes("/") &&
          !filename.includes("\\"),
        "Invalid filename - path traversal detected"
      )
      .refine((filename) => {
        const dangerousExtensions = [
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
        ];
        const extension = path.extname(filename).toLowerCase();
        return !dangerousExtensions.includes(extension);
      }, "File type not allowed for security reasons"),

    mimetype: z.string().refine((type) => {
      const allowedTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        "text/plain",
        "image/jpeg",
        "image/png",
        "image/gif",
      ];
      return allowedTypes.includes(type);
    }, "Invalid file type. Allowed types: PDF, DOC, DOCX, TXT, JPG, PNG, GIF"),

    size: z.number().max(10 * 1024 * 1024, "File size must be less than 10MB"),

    filepath: z.string().min(1, "File path is required"),
  })
  .optional();

/**
 * Email Configuration Schema
 * Validates email service configuration
 */
export const emailConfigSchema = z.object({
  service: z.string().min(1, "Email service is required"),
  user: z.string().email("Invalid email user"),
  password: z.string().min(1, "Email password is required"),
  from: z.string().email("Invalid from email").optional(),
});

/**
 * hCaptcha Token Schema
 * Validates hCaptcha response token
 */
export const captchaResponseSchema = z.object({
  success: z.boolean(),
  challenge_ts: z.string().optional(),
  hostname: z.string().optional(),
  credit: z.boolean().optional(),
  "error-codes": z.array(z.string()).optional(),
});
