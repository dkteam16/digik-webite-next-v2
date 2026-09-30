"use client";

// import "./CaseStudySections.css";

/**
 * CaseStudySections
 * ------------------
 * Content ek array (`sections`) se aata hai, aur component usko `.map()` se
 * loop karke render karta hai.
 *
 * Naya section add karna ho:
 *   -> `sections` array me niche ek naya object add kar do.
 *      Wo automatically last section ke NICHE render ho jayega.
 *
 * CSS global file hai (CaseStudySections.css), isliye className seedha
 * string se diya hai — styles["..."] ki zaroorat nahi.
 */

type Section = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
};

// 👇 Yahi array edit karte raho — jo bhi add karoge, niche-niche add hota jayega
const sections: Section[] = [
  {
    heading: "The Challenge",
    paragraphs: [
      "Q&Q Solutions had built a strong reputation in precision CNC machining and build-to-print metal components for OEMs. In 2026, they acquired a foundry in Coimbatore — significantly expanding their capability to include iron casting from 50kg to 2000kg.",
      "The strategic challenge was clear: how do you present two distinct manufacturing capabilities — precision CNC and iron casting — under one brand, in a way that makes sense to international procurement buyers? The wrong decision (two separate websites, or a diluted single site) would cost them authority in both verticals.",
      "The existing digital presence had no SEO strategy and was not built for the language that international OEM buyers use when searching for precision manufacturing partners.",
    ],
  },
  {
    heading: "Our Strategic Recommendation",
    paragraphs: [
      "After analysis, we recommended positioning Q&Q Solutions as an advanced CNC machine shop with a newly acquired, in-house foundry capability — not as a foundry that also does CNC. This distinction matters enormously to international buyers who think in terms of primary capability and secondary services.",
    ],
    bullets: [
      "CNC precision remains the lead identity — trusted, established, and what international buyers already associate with Q&Q",
      "Foundry capability is positioned as a vertical integration advantage — giving buyers access to casting and machining under one roof, one quality system, one supply chain",
      "All messaging is written in the language of international procurement: tolerances, certifications, lead times, and build-to-print credentials",
    ],
  },
  {
    heading: "What We Built",
    bullets: [
      "Full positioning strategy and competitive analysis — defining where Q&Q sits against global precision manufacturers",
      "10-page website sitemap and architecture — covering CNC services, foundry services, industries served, and quality standards, and international buyer resources",
      "Homepage redesign — leading with capability, credibility, and a clear call to action for RFQ submissions",
      "30-keyword foundry SEO plan — targeting international procurement search terms across casting and machining",
      "4 long-form SEO blogs targeting international procurement buyers — covering iron casting specifications, material comparisons, and precision machining tolerances",
      "Service pages for both CNC and foundry verticals, written to convert procurement engineers who are evaluating vendors",
    ],
  },

  // 👇 Example: naya section aise add karo
  // {
  //   heading: "The Result",
  //   paragraphs: ["Your paragraph text here..."],
  //   bullets: ["Point one", "Point two"],
  // },
];

export default function CaseStudySections() {
  return (
 <div className="our-test">
    <div className="case-study-sections">
      {sections.map((section, index) => (
        <div key={index} className="case-study-section">
          <h2 className="case-study-heading">{section.heading}</h2>

          {section.paragraphs?.map((para, pIndex) => (
            <p key={pIndex} className="case-study-paragraph">
              {para}
            </p>
          ))}

          {section.bullets && (
            <ul className="case-study-bullets">
              {section.bullets.map((bullet, bIndex) => (
                <li key={bIndex} className="case-study-bullet-item">
                  <span className="case-study-bullet-dot" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          )}

          {index < sections.length - 1 && (
            <hr className="case-study-divider" />
          )}
        </div>
      ))}
    </div>
 </div>
  );
}
