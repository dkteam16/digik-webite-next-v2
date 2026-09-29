"use client";

import { useState } from "react";
// import "./contact-form.css";

type FormData = {
  name: string;
  company: string;
  phone: string;
  email: string;
  projectDetails: string;
};

type Errors = Partial<Record<keyof FormData, string>>;

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    company: "",
    phone: "",
    email: "",
    projectDetails: "",
  });

  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));

    setSubmitted(false);
  };

  const validateForm = () => {
    const newErrors: Errors = {};

    // Name
    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name.";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters.";
    } else if (!/^[A-Za-z\s.'-]+$/.test(formData.name.trim())) {
      newErrors.name = "Please enter a valid name.";
    }

    // Company
    if (!formData.company.trim()) {
      newErrors.company = "Please enter your company name.";
    } else if (formData.company.trim().length < 2) {
      newErrors.company = "Company name is too short.";
    }

    // Phone
    const phone = formData.phone.replace(/\D/g, "");

    if (!phone) {
      newErrors.phone = "Please enter your phone number.";
    } else if (!/^[6-9]\d{9}$/.test(phone)) {
      newErrors.phone =
        "Please enter a valid 10-digit Indian mobile number.";
    }

    // Email
    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email.";
    } else if (
      !/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(
        formData.email.trim()
      )
    ) {
      newErrors.email = "Please enter a valid email address.";
    }

    // Project Details
    if (!formData.projectDetails.trim()) {
      newErrors.projectDetails = "Please enter your project details.";
    } else if (formData.projectDetails.trim().length < 10) {
      newErrors.projectDetails =
        "Project details must be at least 10 characters.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const data = {
      ...formData,
      phone: `+91${formData.phone}`,
    };

    console.log("FORM DATA:", data);

    setSubmitted(true);

    setFormData({
      name: "",
      company: "",
      phone: "",
      email: "",
      projectDetails: "",
    });
  };

  return (
    <div className="contact-form-wrapper">
      <form className="contact-form" onSubmit={handleSubmit} noValidate>
        <h2>Let’s Move Forward Faster</h2>

        {/* Name */}
        <div className="form-group">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
          />

          {errors.name && (
            <span className="error-message">{errors.name}</span>
          )}
        </div>

        {/* Company */}
        <div className="form-group">
          <input
            type="text"
            name="company"
            placeholder="Company"
            value={formData.company}
            onChange={handleChange}
          />

          {errors.company && (
            <span className="error-message">{errors.company}</span>
          )}
        </div>

        {/* Phone */}
        <div className="form-group">
          <div className="phone-wrapper">
            <span className="country-code">+91 </span>

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              maxLength={10}
              onChange={(e) => {
                const value = e.target.value.replace(/\D/g, "");

                setFormData((prev) => ({
                  ...prev,
                  phone: value,
                }));

                setErrors((prev) => ({
                  ...prev,
                  phone: "",
                }));
              }}
            />
          </div>

          {errors.phone && (
            <span className="error-message">{errors.phone}</span>
          )}
        </div>

        {/* Email */}
        <div className="form-group">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />

          {errors.email && (
            <span className="error-message">{errors.email}</span>
          )}
        </div>

        {/* Project Details */}
        <div className="form-group">
          <textarea
            name="projectDetails"
            placeholder="Project Details"
            value={formData.projectDetails}
            onChange={handleChange}
          />

          {errors.projectDetails && (
            <span className="error-message">
              {errors.projectDetails}
            </span>
          )}
        </div>

        {/* Submit */}
        <button type="submit" className="connect-btn">
          LET’S CONNECT
        </button>

        {/* Success */}
        {submitted && (
          <div className="success-message">
            Thank you! Your message has been submitted successfully.
          </div>
        )}
      </form>
    </div>
  );
}