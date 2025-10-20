/**
 * Application-wide constants and configuration
 */

export const APP_CONSTANTS = {
  // File paths and downloads
  REFERRAL_FORM: {
    FILENAME: "referral-form.pdf",
    PATH: "/pdf/referral-form.pdf",
    DOWNLOAD_NAME: "IPGC-Referral-Form.pdf",
  },
} as const;

// Export individual constants for convenience
export const REFERRAL_FORM_PATH = APP_CONSTANTS.REFERRAL_FORM.PATH;
export const REFERRAL_FORM_FILENAME = APP_CONSTANTS.REFERRAL_FORM.FILENAME;
export const REFERRAL_FORM_DOWNLOAD_NAME =
  APP_CONSTANTS.REFERRAL_FORM.DOWNLOAD_NAME;
