import React from "react";

type TermsSection = {
  title: string;
  paragraphs: string[];
};

const sections: TermsSection[] = [
  {
    title: "Acceptance of Terms",
    paragraphs: [
      "By using Digital Kangaroos' services and website, you agree to be bound by these terms and conditions. If you do not agree with any part of these terms, please do not use our services.",
    ],
  },
  {
    title: "Changes to Terms",
    paragraphs: [
      "Digital Kangaroos may revise these terms from time to time. The revised terms will be effective upon posting on our website. Please check this page regularly for updates.",
    ],
  },
  {
    title: "Services",
    paragraphs: [
      "Digital Kangaroos provides web development and software services. The specific services we offer are outlined on our website and may be subject to additional agreements or terms.",
    ],
  },
  {
    title: "User Responsibilities",
    paragraphs: [
      "You agree to:",
      "- Use our services in compliance with all applicable laws and regulations.",
      "- Provide accurate and complete information when using our services.",
      "- Not engage in any activity that could harm or disrupt our services.",
    ],
  },
  {
    title: "Copyrights, Content, & Trademarks",
    paragraphs: [
      "All content, visuals, and materials on the Digital Kangaroos website are the property of the company and are protected by intellectual property rights and applicable laws. You may not use, reproduce, or distribute this content without permission.",
    ],
  },
  {
    title: "Site Prohibitions",
    paragraphs: [
      "When accessing our site, you agree to the following conditions:",
      "- Do not attempt to reverse-engineer or manipulate our content or services.",
      "- Do not engage in any illegal usage, distribution, or exploitation of the site's content.",
      "- Do not interfere with the site's functionality or attempt to damage or disrupt it in any way.",
    ],
  },
  {
    title: "Privacy Policy",
    paragraphs: [
      "By using our site, you are subjected to our Privacy Policy, which outlines how we collect and use your data. Please review our Privacy Policy for more details.",
    ],
  },
  {
    title: "Site Links",
    paragraphs: [
      "Our site may contain links to third-party websites for your convenience. Digital Kangaroos does not endorse or control these third-party sites and is not responsible for their content or services.",
    ],
  },
  {
    title: "Changes & Modifications",
    paragraphs: [
      "Digital Kangaroos reserves the right to replace, update, or modify our term policy without prior notice. By using our site, you agree to the current updated terms.",
    ],
  },
  {
    title: "Disclaimers & Limitations of Liability",
    paragraphs: [
      "Digital Kangaroos is not liable for any losses or damages incurred by using our site or its content. We do not guarantee the accuracy, reliability, or availability of the content.",
    ],
  },
  {
    title: "Indemnification",
    paragraphs: [
      "You agree to indemnify and compensate Digital Kangaroos for any losses or damages incurred due to your use of the site.",
    ],
  },
];

const TermsOfUse: React.FC = () => {
  return (
    <div className="privacy-policy-container">
      <div className="privacy-policy-header">
        <h1>Terms of Use</h1>
      </div>

      <div className="privacy-text">
        <p className="main-p-csm">
          Welcome to Digital Kangaroos, a web development and software company.
          These terms of use govern your use of our services and website. By
          accessing our services, you agree to comply with these terms and
          conditions. Please read them carefully.
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
          For any questions or concerns about these terms, please contact us.
        </p>
      </div>
    </div>
  );
};

export default TermsOfUse;