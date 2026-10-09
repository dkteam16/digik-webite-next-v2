"use client";

import { useId, useState } from "react";

type FaqItem = {
  q: string;
  a: string[];
};
const FAQS: FaqItem[] = [
  {
    q: "How long does it take to build a website?",
    a: [
      "Most corporate websites take around 4-6 weeks, depending on the size and complexity of the project. The timeline also depends on how quickly we receive content, feedback, approvals and other inputs from your side.",
      "We focus on getting the strategy, structure and user journey right rather than simply launching a website as quickly as possible.",
    ],
  },
  {
    q: "Do I need to be based locally to work with Digital Kangaroos?",
    a: [
      "Not at all. We work with businesses across India and internationally. Our entire process from strategy and content to design, development and approval can be managed remotely.",
    ],
  },
  {
    q: "What makes Digital Kangaroos different from a regular web design agency?",
    a: [
      "We don't look at a website as just a digital brochure.",
      "We build conversion-driven corporate websites designed to communicate your value clearly, build trust and guide visitors towards taking action. Our process combines UX, conversion rate optimisation, design, development, photography, videography and on-page SEO to create a website that works as a business and lead-generation asset.",
      "We also structure websites to be AI-ready, making your business information easier for search engines and AI-powered discovery platforms to understand.",
    ],
  },
  {
    q: "What does “conversion-driven website” mean?",
    a: [
      "A conversion-driven website is designed around what you want visitors to do whether that's submitting an enquiry, booking a consultation, requesting a quote, calling your team or taking another meaningful action.",
      "We consider factors such as user journeys, page structure, messaging, calls-to-action, trust signals, content hierarchy and friction points while planning the website.",
    ],
  },
  {
    q: "Do you provide photography and videography?",
    a: [
      "Yes. We offer professional photography and videography as part of our website solutions.",
      "This can include corporate photography, team photographs, office and facility shoots, product photography, corporate videos and other visual content required for the website.",
      "The goal is to create original visual content that makes the website feel authentic rather than relying entirely on generic stock imagery.",
    ],
  },
  {
    q: "Do you provide SEO with website development?",
    a: [
      "Yes. On-page SEO is an important part of how we build websites.",
      "We work on elements such as website structure, page hierarchy, headings, metadata, internal linking, content structure, image optimisation and other technical and on-page factors.",
      "Our objective is to build the website with SEO in mind from the beginning rather than trying to optimise it after the website is already built.",
    ],
  },
  {
    q: "What does “AI-ready website” mean?",
    a: [
      "Search is evolving beyond traditional Google results. People are increasingly discovering businesses through AI-powered search and answer engines.",
      "We structure website content and information so that it is clear, well-organised, authoritative and machine-readable, helping search engines and AI systems better understand your business, services, expertise and offerings.",
      "AI-readiness is built into the website strategy rather than treated as an afterthought.",
    ],
  },
  {
    q: "Do you do graphic design and branding?",
    a: [
      "Yes. We can support the visual identity required for your website and digital presence, including logo design, brand assets, presentation graphics, banners and other digital creatives.",
      "For branding projects, we first understand your business, audience, positioning and competitors before developing the visual direction.",
    ],
  },
  {
    q: "What kind of businesses do you work with?",
    a: [
      "Our primary focus is corporate and B2B businesses, including companies that need a strong digital presence for credibility, lead generation and business growth.",
      "We've worked across industries including technology, manufacturing, finance, healthcare, education, real estate, professional services, travel, food, lifestyle and more.",
      "We can work with businesses ranging from growing companies to established enterprises.",
    ],
  },
  {
    q: "Do you only build WordPress websites?",
    a: [
      "No.",
      "We recommend the technology based on the requirements of the business. WordPress is often suitable for small businesses and content-led websites, while more complex requirements may call for a custom technology stack.",
      "For e-commerce businesses, our dedicated Shopify division, Cart Potato, specialises in Shopify and Shopify Plus websites.",
    ],
  },
  {
    q: "Do you build Shopify websites?",
    a: [
      "Yes, through Cart Potato, our specialised Shopify division.",
      "Cart Potato focuses specifically on Shopify and Shopify Plus development, store revamps, conversion rate optimization and e-commerce growth.",
      "If you're building or scaling an online store, we'll guide you towards the Shopify solution that best fits your business.",
    ],
  },
  {
    q: "Will my website be mobile-friendly?",
    a: [
      "Absolutely. Every website we build is designed to work across mobile, tablet and desktop devices.",
      "Responsive design is a standard part of our development process, not an additional feature.",
    ],
  },
  {
    q: "Will I be able to update the website myself?",
    a: [
      "Yes. We build websites with practical content management in mind.",
      "Depending on the platform and scope of the project, we'll provide access to the relevant CMS and guide your team on making routine content updates. We can also continue to manage the website for you if you prefer.",
    ],
  },
  {
    q: "Will you maintain my website after launch?",
    a: [
      "Yes. We offer ongoing website maintenance and support for businesses that want us to continue managing their website after launch.",
      "Support can include content updates, technical maintenance, improvements, security updates and other website requirements depending on the package.",
    ],
  },
  {
    q: "What if I need help with the website after it goes live?",
    a: [
      "We don't disappear after launch.",
      "You can reach out to us for ongoing support, improvements or additional requirements. We offer different maintenance and support arrangements depending on how much involvement you need from our team.",
    ],
  },
  {
    q: "Will you help me with website content?",
    a: [
      "Yes.",
      "Website content is an important part of the strategy, especially when the website needs to generate enquiries and perform well organically.",
      "We can help with website copy, page structure, messaging, content hierarchy and SEO-focused content, ensuring that the content communicates your value proposition while guiding visitors towards conversion.",
    ],
  },
  {
    q: "Can you build a website using content and photography that you create?",
    a: [
      "Yes. This is one of our preferred approaches.",
      "Where required, we can bring together strategy, copywriting, photography, videography, design, development, CRO and SEO so that all aspects of the website work together rather than being handled as disconnected services.",
    ],
  },
  {
    q: "Can you redesign a website built by another agency?",
    a: [
      "Yes, in most cases.",
      "We'll first assess the existing website, technology, CMS, backend, codebase and overall structure. Based on that assessment, we'll recommend whether a redesign, rebuild or migration makes the most sense.",
    ],
  },
  {
    q: "I don't know much about websites. Will you guide me?",
    a: [
      "Absolutely.",
      "You don't need to know the technical side of website development. We explain the important decisions in straightforward terms and guide you through the process from the initial strategy and sitemap to content, design, development, testing and launch.",
    ],
  },
  {
    q: "How do you build my website?",
    a: [
      "We start with strategy rather than design.",
      "We first understand your business, audience, competitors, goals and conversion objectives. We then plan the sitemap, user journeys and content structure before moving into design and development.",
      "The website is built with conversion, SEO, user experience and AI-readiness in mind from the outset.",
    ],
  },
  {
    q: "Who hosts my website?",
    a: [
      "This depends on the platform and your preference.",
      "We can help set up and manage hosting, or your website can be hosted on your preferred hosting provider. We'll recommend the most appropriate setup based on your technology, performance and business requirements.",
    ],
  },
  {
    q: "Is SEO included in website development?",
    a: [
      "Our website development package includes the SEO-friendly foundation required to build a well-structured website.",
      "If you require on-page SEO, technical SEO or optimisation of Google PageSpeed Insights/Core Web Vitals during the website development process, these services can be added as a separate one-time service at an additional fee.",
      "For businesses that require ongoing SEO, including content optimisation, technical improvements, keyword targeting, authority building and performance monitoring, we offer separate monthly SEO packages based on your goals and competition.",
      "SEO requirements can therefore be added to your website project either as a one-time optimisation service or as an ongoing monthly engagement, depending on your needs.",
    ],
  },
  {
    q: "How long will it take to get my website to the first page of Google?",
    a: [
      "There is no guaranteed timeline for organic rankings.",
      "It depends on your industry, competition, domain authority, existing website, content, search demand and the keywords you're targeting.",
      "What we can do is ensure that your website is technically sound, well-structured and properly optimised from launch, giving your SEO efforts a strong foundation.",
    ],
  },
  {
    q: "Do you guarantee Google rankings?",
    a: [
      "No reputable SEO agency can guarantee a particular ranking or timeline.",
      "We focus on building the right foundation and continuously improving the factors that influence organic visibility rather than making unrealistic ranking promises.",
    ],
  },
  {
    q: "Do you provide social media management?",
    a: [
      "Our primary focus is websites, conversion optimisation, content, SEO and digital presence.",
      "We can discuss social media requirements separately where they complement your broader digital strategy.",
    ],
  },
  {
    q: "What do you need from me to get started?",
    a: [
      "We generally need information about your business, target audience, services, competitors, existing digital presence and objectives.",
      "The more information you can provide at the beginning, the more effectively we can shape the strategy. We'll guide you through everything else.",
    ],
  },
  {
    q: "What happens after the website goes live?",
    a: [
      "Launch is not necessarily the end of the process.",
      "Once the website is live, we can monitor performance, identify areas of friction, make improvements and continue working on SEO and conversion optimisation.",
      "For businesses that want continuous growth, we can also provide ongoing CRO, SEO and website optimisation support.",
    ],
  },
];
  
const CSS = `
.faq-accordion-mian{background: #fff;}
.faq-block { max-width: 1000px; margin:50px auto 70px; }
.faq-item { border-bottom: 1px solid #e3e3e3; }
.faq-heading { margin: 0; font-size: inherit; }
.faq-item .faq-heading button span{font-size: 20px;font-weight: 400;}
.faq-accordion-heading{background: #333333;text-align: center;padding: 70px 0 }
.faq-accordion-heading h1{font-size: 30px;color: #fff;}
.faq-accordion {
  display: flex; align-items: center; justify-content: space-between; gap: 16px;
  width: 100%; padding: 18px 4px; background: none; border: 0; text-align: left;
    color: #333333; cursor: pointer;
}
.faq-accordion:hover { color: rgb(244, 163, 29);
; }
.faq-accordion:focus-visible { outline: 2px solid #0b57d0; outline-offset: 2px; }

.faq-icon { position: relative; flex: 0 0 14px; height: 14px; }
.faq-icon::before, .faq-icon::after {
  content: ""; position: absolute; background: currentColor; transition: transform 0.25s ease;
}
.faq-icon::before { left: 0; right: 0; top: 6px; height: 2px; }
.faq-icon::after { top: 0; bottom: 0; left: 6px; width: 2px; }
.faq-item.is-open .faq-icon::after { transform: scaleY(0); }

.faq-panel { display: grid; grid-template-rows: 0fr; transition: grid-template-rows 0.3s ease; }
.faq-item.is-open .faq-panel { grid-template-rows: 1fr; }
.faq-panel-inner { overflow: hidden; }
.faq-panel-inner p { margin: 0; padding: 0 4px 5px;   color: #444; font-size: 16px; font-weight: 600}
@media only screen and (max-width: 1200px){
.faq-accordion-heading h1{font-size: 25px;    }
.faq-accordion-heading{padding: 18px 20px 28px;} 
.faq-block{max-width: 90%;margin: 30px auto 50px;}
.faq-item .faq-heading button span {font-size: 18px;}
.faq-accordion{padding: 15px 0px;}
}


@media (prefers-reduced-motion: reduce) {
  .faq-panel, .faq-icon::before, .faq-icon::after { transition: none; }
}
`;

type Props = {
  items?: FaqItem[];
  allowMultiple?: boolean;
};

export default function FaqAccordion({ items = FAQS, allowMultiple = false }: Props) {
  const uid = useId();
  const [open, setOpen] = useState<Set<number>>(new Set());

  const toggle = (i: number) => {
    setOpen((prev) => {
      const next = new Set<number>(allowMultiple ? prev : []);
      if (prev.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });
  };

  return (
    <>
      <style>{CSS}</style>
      <div className="faq-accordion-mian">
        <div className="faq-accordion-heading">
              <h1>FAQs Digital Kangaroos</h1>
        </div>
      <div className="faq-block">
        {items.map((item, i) => {
          const isOpen = open.has(i);
          const btnId = `${uid}-btn-${i}`;
          const panelId = `${uid}-panel-${i}`;
          return (
            <div key={i} className={`faq-item${isOpen ? " is-open" : ""}`}>
              <h3 className="faq-heading">
                <button
                  type="button"
                  id={btnId}
                  className="faq-accordion"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => toggle(i)}
                >
                  <span>{item.q}</span>
                  <span className="faq-icon" aria-hidden="true" />
                </button>
              </h3>
              <div id={panelId} role="region" aria-labelledby={btnId} className="faq-panel">
                <div className="faq-panel-inner">
                  {item.a.map((text, idx) => (
                    <p key={idx}>{text}</p>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      </div>
    </>
  );
}
