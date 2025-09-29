"use client";

import React, { useState, useRef } from "react";
import { Footer } from "~/components/Footer/Footer";
import { Header } from "~/components/Header/Header";
import { Heading, Microcopy, Text } from "src/elements/Text/Text";
import { Button } from "src/elements/Buttons/Button";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import styles from "./page.module.css";
import { BlockLayout } from "src/elements/BlockLayout/BlockLayout";
import { InlineLayout } from "src/elements/InlineLayout/InlineLayout";
import { Notice } from "src/elements/Notice/Notice";
import { Field } from "src/elements/Field/Field";
import { Card } from "src/elements/Card/Card";
import { GridLayout } from "src/elements/GridLayout/GridLayout";

interface FormData {
  name: string;
  phone: string;
  email: string;
  message: string;
  attachment: File | null;
}

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
  message?: string;
}

export default function ContactPage() {
  const testID = "contact-us" as const;
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    message: "",
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
    formDataToSend.append("message", formData.message);
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
          message: "",
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
    <div
      data-testid={testID}
      className="home wp-singular page-template page-template-page-home page-template-page-home-php page page-id-2 wp-theme-wholebodymri"
    >
      <Header />
      <main role="main" className={styles.container}>
        <div className={styles.wrapper}>
          <Card testID={`${testID}.card`} elevation="md">
            <BlockLayout testID={`${testID}.header`} align={"center"}>
              <Heading testID={`${testID}.title`}>Contact Us</Heading>
              <Text
                testID={`${testID}.description`}
                className={styles.description}
              >
                Would you like to book an appointment? Got a question? Send us a
                message
              </Text>
            </BlockLayout>

            {submitStatus === "success" && (
              <Notice testID={`${testID}.success`} type="success">
                {`Thank you for your message! We'll get back to you within 24-48
                  hours.`}
              </Notice>
            )}

            {submitStatus === "error" && (
              <Notice testID={`${testID}.error`} type="error">
                {`There was an error sending your message. Please try again or
                contact us directly.`}
              </Notice>
            )}

            <form onSubmit={handleSubmit} className={styles.form}>
              <Field
                testID={`${testID}.name`}
                name="name"
                label={`Full Name *`}
                error={(errors.name && { message: errors.name }) || undefined}
              >
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your full name"
                />
              </Field>

              <Field
                testID={`${testID}.phone`}
                name="phone"
                label={`Phone Number *`}
                error={(errors.phone && { message: errors.phone }) || undefined}
              >
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Enter your phone number"
                />
              </Field>

              <Field
                testID={`${testID}.email`}
                name="email"
                label={`Email Address *`}
                error={(errors.email && { message: errors.email }) || undefined}
              >
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email address"
                />
              </Field>

              <Field
                testID={`${testID}.message`}
                name="message"
                label={`Message (optional)`}
              >
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Enter your message or question"
                  rows={4}
                />
              </Field>

              <Field
                testID={`${testID}.attachment`}
                name="attachment"
                label={`Attach Referral (optional)`}
              >
                <input
                  type="file"
                  id="attachment"
                  name="attachment"
                  onChange={handleFileChange}
                  accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
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
              </Field>

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

              <Button
                testID="submit"
                variant="primary"
                type="submit"
                disabled={isSubmitting || !captchaToken}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>

            <GridLayout testID={`${testID}.grid`} spacing="md">
              <Card testID={`${testID}.contact`}>
                <BlockLayout testID={`${testID}.layout`} spacing={"tight"}>
                  <Heading testID={`${testID}.title`}>
                    Call, email or direct message today
                  </Heading>
                  <Text testID={`${testID}.description`}>
                    One of our friendly staff will be able to assist you.
                  </Text>
                  <Text testID={`${testID}.phone`}>0413 519 891</Text>
                  <Text testID={`${testID}.email`}>reception@ipgc.com.au</Text>
                  <Text testID={`${testID}.whatsapp`}>
                    Message us on WhatsApp
                  </Text>
                </BlockLayout>
              </Card>

              <Card testID={`${testID}.location`}>
                <BlockLayout testID={`${testID}.layout`}>
                  <Heading testID={`${testID}.title`}>
                    Interventional Pain GC
                  </Heading>
                  <Text
                    testID={`${testID}.address`}
                    className={styles.addressText}
                  >
                    94 Laver Drive, Robina Queensland 4226, Australia
                  </Text>
                  <Text
                    testID={`${testID}.description`}
                    className={styles.addressSubtext}
                  >
                    Located inside WiSE Specialist Emergency Clinic
                  </Text>
                  <Button
                    testID={`${testID}.directions`}
                    variant="tertiary"
                    href="https://www.google.com/maps/search/?api=1&query=94+Laver+Drive%2C+Robina+Queensland+4226%2C+Australia"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Get directions
                  </Button>
                </BlockLayout>
              </Card>

              <Card testID="office-hours">
                <BlockLayout testID="office-hours">
                  <Heading testID="office-hours-title">Hours</Heading>
                  <InlineLayout
                    testID={`${testID}.weekdays`}
                    spacing={"tight"}
                    padding={"none"}
                  >
                    <Text testID="office-hours-monday-friday" bold>
                      Monday - Friday:
                    </Text>
                    <Text testID="office-hours-monday-friday-time">
                      9AM–5PM
                    </Text>
                  </InlineLayout>
                  <InlineLayout
                    testID={`${testID}.weekends`}
                    spacing={"tight"}
                    padding={"none"}
                  >
                    <Text testID="office-hours-saturday-sunday" bold>
                      Saturday - Sunday:
                    </Text>
                    <Text testID="office-hours-saturday-sunday-time">
                      CLOSED
                    </Text>
                  </InlineLayout>
                </BlockLayout>
              </Card>
            </GridLayout>
          </Card>
        </div>
      </main>
      <Footer testID="footer" />
    </div>
  );
}
