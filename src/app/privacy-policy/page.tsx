import React from "react";

type PolicySection = {
  title: string;
  paragraphs: string[];
};

const sections: PolicySection[] = [
  {
    title: "Information We Collect",
    paragraphs: [
      "Personal Information: We may collect personal information, such as your name, email address, phone number, and other contact details when you voluntarily submit them through our website or contact forms.",
      "Non-Personal Information: We may also collect non-personal information, including your IP address, browser type, and operating system, to analyze user behaviour and improve our website.",
    ],
  },
  {
    title: "How We Use Your Information",
    paragraphs: [
      "Providing Services: We use your personal information to provide the services you request, such as responding to your inquiries, sending you newsletters, or processing job applications.",
      "Improvement and Customization: Non-personal information is used to enhance your experience on our website, including personalizing content and improving our services.",
    ],
  },
  {
    title: "Sharing Your Information",
    paragraphs: [
      "Third-Party Service Providers: We may share your personal information with third-party service providers that assist us in delivering our services, such as hosting, analytics, and email communication.",
      "Legal Requirements: We may disclose your information when required by law or to protect our rights, privacy, safety, or property.",
    ],
  },
  {
    title: "Cookies and Tracking Technologies",
    paragraphs: [
      "We use cookies and similar tracking technologies to collect non-personal information about your use of our website. You can manage your cookie preferences through your browser settings.",
    ],
  },
  {
    title: "Security",
    paragraphs: [
      "We take reasonable measures to protect your data from unauthorized access, disclosure, alteration, or destruction. However, no method of online transmission or storage is completely secure.",
    ],
  },
  {
    title: "Your Choices",
    paragraphs: [
      "You have the right to review, update, or delete your personal information by contacting us. You may also choose not to provide certain information, but this may limit your ability to use some features of our website.",
    ],
  },
  {
    title: "Updates to this Privacy Policy",
    paragraphs: [
      "We may update this Privacy Policy to reflect changes in our practices. We will post any changes on our website with the updated date.",
    ],
  },
  {
    title: "Contact Us",
    paragraphs: [
      "Please contact us if you have any questions or concerns about this Privacy Policy.",
    ],
  },
];

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="privacy-policy-container">

    <div className="privacy-policy-header">
          <h1 >Privacy Policy</h1>
    </div>

    <div className="privacy-text">
      <p className="main-p-csm">
        At Digital Kangaroos, we are committed to protecting your privacy and
        ensuring the security of your personal information. This Privacy Policy
        explains how we collect, use, and protect your data when you visit our
        website or use our services.
      </p>

      <ol>
        {sections.map((section) => (
          <li key={section.title}>
            <h3 className="main-third-csm">{section.title}</h3>
            {section.paragraphs.map((text, index) => (
              <p className="main-p-csm" key={index}>
                {text}
              </p>
            ))}
          </li>
        ))}
      </ol>

      <p className="main-p-csm">
        By using our website and services, you agree to the terms of this
        Privacy Policy.
      </p>
    </div></div>
  );
};

export default PrivacyPolicy;