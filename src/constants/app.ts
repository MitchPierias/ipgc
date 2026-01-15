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

export const FAQS = [
  {
    question: "What do I need to bring to my appointment?",
    answer:
      "Please bring along your medicare card, original referral (if this was provided to you) and any old imaging that you think may be relevant.",
  },
  {
    question: "How long will my procedure take?",
    answer:
      "The procedure itself will take anywhere between 10-15 minutes, however please allow a further 15-30 minutes for the check-in process. Occasionally, the Doctor requires you to be observed for a period of time following a procedure.",
  },
  {
    question: "Can I drive home after my appointment?",
    answer:
      "If you are having a procedure, it is likely that you won't be able to drive home and will need to arrange alternate transportation. This would have been discussed with you at the time of your booking. If you are only having a consultation, you will be able to drive yourself home.",
  },
  {
    question: "What are the out-of-pocket expenses for my procedure?",
    answer:
      "Out-of-pocket expenses (if any) will have been discussed with you at the time of booking. If you are unsure, please contact one of our friendly staff on 0413 519 891 and they will be able to advise you accordingly.",
  },
  {
    question: "Will my procedure hurt? Will I be put to sleep?",
    answer:
      "The vast majority of our procedures are performed using local anaesthetic and are usually tolerated well. If you think that you may require sedation or are concerned about the procedure, please notify one of our friendly staff at the time of booking. This will allow us to come up with an appropriate plan for the procedure day.",
  },
  {
    question:
      "Will I meet the Specialist prior to the procedure? What if I have questions about my condition and my procedure?",
    answer:
      "Yes, you will certainly be able to meet the Specialist prior to having the procedure. At IPGC we pride ourselves on providing the highest level of patient-centred care that you will find anywhere. If you would like to have a detailed discussion, please advise your referrer (either your GP or specialist) to request a 'consultation'.",
  },
  {
    question: "When will I be able to return to work or exercise?",
    answer:
      "The Specialist will give you specific return to work or exercise instructions. In general, it is OK to return to work the same day (occupation dependant). As for exercise, the Specialist usually advises to refrain from heavy exercise for a period of 24 hours, you will then be able to 'ease' back into normal activities depending on your level of pain.",
  },
  {
    question:
      "How long will my procedure take to work? What if it doesn't work? If it does work, how long will it last?",
    answer:
      "As a general rule, if the procedure is effective, you will start to notice relief within the first 12-24 hours post-procedure. On average, we notice that patients may get 2-3 months of relief. However, if you only get a few days or weeks of relief, the Specialists at IPGC will be able to discuss next step options available to you. Alternatively, if you get no relief at any point in time following the procedure, this still provides us with important information, indicating that the source of pain may not be where we initially targeted. Further injections can be performed at adjacent sites which will help to map out the possible origin of your pain. As to how long it will last?",
  },
] as const;
