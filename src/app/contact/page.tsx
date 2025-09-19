"use client";

import React, { useState, useRef } from "react";
import { Footer } from "~/components/Footer/Footer";
import { Header } from "~/components/Header/Header";
import { Heading, Microcopy, Text } from "src/elements/Text/Text";
import { Button } from "src/elements/Buttons/Button";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import styles from "./page.module.css";

interface FormData {
  name: string;
  phone: string;
  email: string;
  attachment: File | null;
}

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    attachment: null,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(
    null
  );
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const captchaRef = useRef<HCaptcha>(null);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (
      !/^[\+]?[1-9][\d]{0,15}$/.test(formData.phone.replace(/\s+/g, ""))
    ) {
      newErrors.phone = "Please enter a valid phone number";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData((prev) => ({
      ...prev,
      attachment: file,
    }));
  };

  const handleCaptchaVerify = (token: string) => {
    setCaptchaToken(token);
  };

  const handleCaptchaError = () => {
    setCaptchaToken(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    if (!captchaToken) {
      alert("Please complete the captcha verification");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("phone", formData.phone);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("captchaToken", captchaToken);

    if (formData.attachment) {
      formDataToSend.append("attachment", formData.attachment);
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: formDataToSend,
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          phone: "",
          email: "",
          attachment: null,
        });
        setCaptchaToken(null);
        captchaRef.current?.resetCaptcha();

        // Reset file input
        const fileInput = document.getElementById(
          "attachment"
        ) as HTMLInputElement;
        if (fileInput) {
          fileInput.value = "";
        }
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="home wp-singular page-template page-template-page-home page-template-page-home-php page page-id-2 wp-theme-wholebodymri">
      <Header />
      <main role="main" className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.card}>
            <div className={styles.header}>
              <Heading testID="contact-us-title" className={styles.title}>
                Contact Us
              </Heading>
              <Text
                testID="contact-us-description"
                className={styles.description}
              >
                Would you like to book an appointment? Got a question? Send us a
                message
              </Text>
            </div>

            {submitStatus === "success" && (
              <div className={styles.successMessage}>
                <Microcopy
                  testID="success-message"
                  className={styles.successText}
                >
                  {`Thank you for your message! We'll get back to you within 24-48
                  hours.`}
                </Microcopy>
              </div>
            )}

            {submitStatus === "error" && (
              <div className={styles.errorMessage}>
                <Microcopy testID="error-message" className={styles.errorText}>
                  There was an error sending your message. Please try again or
                  contact us directly.
                </Microcopy>
              </div>
            )}

            <form onSubmit={handleSubmit} className={styles.form}>
              {/* Name Field */}
              <div>
                <label htmlFor="name" className={styles.label}>
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`${styles.input} ${
                    errors.name ? styles.inputError : ""
                  }`}
                  placeholder="Enter your full name"
                />
                {errors.name && (
                  <Microcopy testID="name-error" className={styles.fieldError}>
                    {errors.name}
                  </Microcopy>
                )}
              </div>

              {/* Phone Field */}
              <div>
                <label htmlFor="phone" className={styles.label}>
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className={`${styles.input} ${
                    errors.phone ? styles.inputError : ""
                  }`}
                  placeholder="Enter your phone number"
                />
                {errors.phone && (
                  <Microcopy testID="phone-error" className={styles.fieldError}>
                    {errors.phone}
                  </Microcopy>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className={styles.label}>
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`${styles.input} ${
                    errors.email ? styles.inputError : ""
                  }`}
                  placeholder="Enter your email address"
                />
                {errors.email && (
                  <Microcopy testID="email-error" className={styles.fieldError}>
                    {errors.email}
                  </Microcopy>
                )}
              </div>

              {/* File Upload Field */}
              <div>
                <label htmlFor="attachment" className={styles.label}>
                  Attach Referral (optional)
                </label>
                <input
                  type="file"
                  id="attachment"
                  name="attachment"
                  onChange={handleFileChange}
                  accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                  className={styles.fileInput}
                />
                <Text
                  testID="accepted-formats"
                  className={styles.acceptedFormats}
                >
                  Accepted formats: PDF, DOC, DOCX, JPG, PNG (Max 10MB)
                </Text>
                {formData.attachment && (
                  <Microcopy
                    testID="selected-attachment"
                    className={styles.selectedFile}
                  >
                    Selected: {formData.attachment.name}
                  </Microcopy>
                )}
              </div>

              <div className={styles.captchaContainer}>
                <HCaptcha
                  ref={captchaRef}
                  sitekey={
                    process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY ||
                    "10000000-ffff-ffff-ffff-000000000001"
                  }
                  onVerify={handleCaptchaVerify}
                  onError={handleCaptchaError}
                  onExpire={() => setCaptchaToken(null)}
                />
              </div>

              <div className={styles.submitContainer}>
                <Button
                  testID="submit"
                  variant="primary"
                  type="submit"
                  disabled={isSubmitting || !captchaToken}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </div>
            </form>

            {/* Contact Information */}
            <div className={styles.contactInfo}>
              <div className={styles.contactCard}>
                <Heading
                  testID="call-email-message-title"
                  className={styles.contactTitle}
                >
                  Call, email or direct message today
                </Heading>
                <Text
                  testID="call-email-message-description"
                  className={styles.contactDescription}
                >
                  One of our friendly staff will be able to assist you.
                </Text>
                <div className={styles.contactDetails}>
                  <div>
                    <Text
                      testID="call-email-message-phone"
                      className={styles.contactPhone}
                    >
                      0413 519 891
                    </Text>
                  </div>
                  <div>
                    <Text
                      testID="call-email-message-email"
                      className={styles.contactEmail}
                    >
                      reception@ipgc.com.au
                    </Text>
                  </div>
                  <div>
                    <Text
                      testID="call-email-message-whatsapp"
                      className={styles.contactWhatsapp}
                    >
                      Message us on WhatsApp
                    </Text>
                  </div>
                </div>
              </div>

              <div className={styles.contactGrid}>
                <div className={styles.contactCard}>
                  <Heading
                    testID="clinic-location-title"
                    className={styles.contactTitle}
                  >
                    Interventional Pain GC
                  </Heading>
                  <div className={styles.contactDetails}>
                    <Text
                      testID="clinic-location-address"
                      className={styles.addressText}
                    >
                      94 Laver Drive, Robina Queensland 4226, Australia
                    </Text>
                    <Text
                      testID="clinic-location-description"
                      className={styles.addressSubtext}
                    >
                      Located inside WiSE Specialist Emergency Clinic
                    </Text>
                    <div>
                      <Text
                        testID="clinic-location-directions"
                        className={styles.directionsLink}
                      >
                        Get directions
                      </Text>
                    </div>
                  </div>
                </div>

                <div className={styles.contactCard}>
                  <Heading
                    testID="office-hours-title"
                    className={styles.contactTitle}
                  >
                    Hours
                  </Heading>
                  <div className={styles.contactDetails}>
                    <div>
                      <Text
                        testID="office-hours-monday-friday"
                        className={styles.hoursLabel}
                      >
                        Monday - Friday:
                      </Text>
                      <Text
                        testID="office-hours-monday-friday-time"
                        className={styles.hoursTime}
                      >
                        9AM–5PM
                      </Text>
                    </div>
                    <div>
                      <Text
                        testID="office-hours-saturday-sunday"
                        className={styles.hoursLabel}
                      >
                        Saturday - Sunday:
                      </Text>
                      <Text
                        testID="office-hours-saturday-sunday-time"
                        className={styles.hoursTime}
                      >
                        CLOSED
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer testID="footer" />
    </div>
  );
}
