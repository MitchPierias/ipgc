"use client";

import React, { useState, useRef } from "react";
import { Footer } from "~/components/Footer/Footer";
import { Header } from "~/components/Header/Header";
import { Heading, Microcopy, Text } from "src/elements/Text/Text";
import { Button } from "src/elements/Buttons/Button";
import HCaptcha from "@hcaptcha/react-hcaptcha";

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
      <main role="main" className="min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="text-center mb-8">
              <Heading
                testID="contact-us-title"
                className="text-3xl font-bold text-gray-900 mb-4"
              >
                Contact Us
              </Heading>
              <Text
                testID="contact-us-description"
                className="text-lg text-gray-600"
              >
                Would you like to book an appointment? Got a question? Send us a
                message
              </Text>
            </div>

            {submitStatus === "success" && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <Microcopy testID="success-message" className="text-green-800">
                  Thank you for your message! We'll get back to you within 24-48
                  hours.
                </Microcopy>
              </div>
            )}

            {submitStatus === "error" && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                <Microcopy testID="error-message" className="text-red-800">
                  There was an error sending your message. Please try again or
                  contact us directly.
                </Microcopy>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                    errors.name ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Enter your full name"
                />
                {errors.name && (
                  <Microcopy
                    testID="name-error"
                    className="text-red-600 text-sm mt-1"
                  >
                    {errors.name}
                  </Microcopy>
                )}
              </div>

              {/* Phone Field */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                    errors.phone ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Enter your phone number"
                />
                {errors.phone && (
                  <Microcopy
                    testID="phone-error"
                    className="text-red-600 text-sm mt-1"
                  >
                    {errors.phone}
                  </Microcopy>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Enter your email address"
                />
                {errors.email && (
                  <Microcopy
                    testID="email-error"
                    className="text-red-600 text-sm mt-1"
                  >
                    {errors.email}
                  </Microcopy>
                )}
              </div>

              {/* File Upload Field */}
              <div>
                <label
                  htmlFor="attachment"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Attach Referral (optional)
                </label>
                <input
                  type="file"
                  id="attachment"
                  name="attachment"
                  onChange={handleFileChange}
                  accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                />
                <Text
                  testID="accepted-formats"
                  className="text-gray-500 text-sm mt-1"
                >
                  Accepted formats: PDF, DOC, DOCX, JPG, PNG (Max 10MB)
                </Text>
                {formData.attachment && (
                  <Microcopy
                    testID="selected-attachment"
                    className="text-green-600 text-sm mt-1"
                  >
                    Selected: {formData.attachment.name}
                  </Microcopy>
                )}
              </div>

              {/* Captcha */}
              <div className="flex justify-center">
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

              {/* Submit Button */}
              <div className="flex justify-center">
                <Button
                  testID="submit"
                  variant="primary"
                  type="submit"
                  disabled={isSubmitting || !captchaToken}
                  className={`px-8 py-3 rounded-lg font-medium transition-colors duration-200 ${
                    isSubmitting || !captchaToken
                      ? "bg-gray-400 cursor-not-allowed text-white"
                      : "bg-blue-600 hover:bg-blue-700 text-white"
                  }`}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </div>
            </form>

            {/* Contact Information */}
            <div className="mt-12 space-y-8">
              <div className="bg-gray-50 rounded-lg p-6">
                <Heading
                  testID="call-email-message-title"
                  className="text-xl font-semibold text-gray-900 mb-4"
                >
                  Call, email or direct message today
                </Heading>
                <Text
                  testID="call-email-message-description"
                  className="text-gray-600 mb-4"
                >
                  One of our friendly staff will be able to assist you.
                </Text>
                <div className="space-y-3">
                  <div>
                    <Text
                      testID="call-email-message-phone"
                      className="font-bold text-blue-600 text-lg"
                    >
                      0413 519 891
                    </Text>
                  </div>
                  <div>
                    <Text
                      testID="call-email-message-email"
                      className="text-blue-600"
                    >
                      reception@ipgc.com.au
                    </Text>
                  </div>
                  <div>
                    <Text
                      testID="call-email-message-whatsapp"
                      className="text-blue-600"
                    >
                      Message us on WhatsApp
                    </Text>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gray-50 rounded-lg p-6">
                  <Heading
                    testID="clinic-location-title"
                    className="text-xl font-semibold text-gray-900 mb-4"
                  >
                    Interventional Pain GC
                  </Heading>
                  <div className="space-y-2">
                    <Text
                      testID="clinic-location-address"
                      className="text-gray-600"
                    >
                      94 Laver Drive, Robina Queensland 4226, Australia
                    </Text>
                    <Text
                      testID="clinic-location-description"
                      className="text-sm text-gray-500"
                    >
                      Located inside WiSE Specialist Emergency Clinic
                    </Text>
                    <div className="mt-4">
                      <Text
                        testID="clinic-location-directions"
                        className="text-blue-600 cursor-pointer hover:underline"
                      >
                        Get directions
                      </Text>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <Heading
                    testID="office-hours-title"
                    className="text-xl font-semibold text-gray-900 mb-4"
                  >
                    Hours
                  </Heading>
                  <div className="space-y-2">
                    <div>
                      <Text
                        testID="office-hours-monday-friday"
                        className="font-medium text-gray-900"
                      >
                        Monday - Friday:
                      </Text>
                      <Text
                        testID="office-hours-monday-friday-time"
                        className="text-gray-600"
                      >
                        9AM–5PM
                      </Text>
                    </div>
                    <div>
                      <Text
                        testID="office-hours-saturday-sunday"
                        className="font-medium text-gray-900"
                      >
                        Saturday - Sunday:
                      </Text>
                      <Text
                        testID="office-hours-saturday-sunday-time"
                        className="text-gray-600"
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
