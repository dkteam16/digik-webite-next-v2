"use client";

import { useId, useState } from "react";

type FaqItem = {
  q: string;
  a: string;
};

const FAQS: FaqItem[] = [
  {
    q: "How long will it take to get a new website?",
    a: "On average, we target a two to three-week turnaround, but the pace of any project is set by each client. The speed of completion depends upon - how much input you can provide during the initial stages, your availability with feedback, and how soon the content is ready. Moreover, more complex sites will take more time to develop.",
  },
  {
    q: "Do I have to be local to work with you?",
    a: "Not at all! We work with clients all over the world. The world has no boundaries in today's date and time.",
  },
  {
    q: "Do you do graphic design? Can you make me a logo?",
    a: "Absolutely! We do logo design, business card design, banners, and much more as we help you build your brand. We do the competitor's market research and make sure that the logo resonates with the voice of the brand. We give you multiple options to choose from and finalise it only when you are satisfied with the design.",
  },
  {
    q: "What are the USPs of your company? Or Why should I choose you?",
    a: "We offer a complete range of services for your business. From logo designing, website designing, content writing, website development, digital marketing solutions, SEO, SEM, etc, We do it all. We have a team of passionate employees that are pioneers in their field and will leave no stone unturned to achieve your satisfaction. We are a one-stop solution for all your digital needs and that’s what sets us apart from all the competitors.",
  },
  {
    q: "What kind of companies and businesses are you working for?",
    a: "We work for a wide variety of companies ranging from small start-ups to big corporates. The industries and business areas we have worked with include technology, finance, food, health, travel, arts, beauty, apparel, and more. We support businesses to improve their customer services and market their products. As the first step of the process, a team of our best designers will do research on the industry we are going to work with and support it with the best website design possible.",
  },
  {
    q: "Will my website be mobile-friendly?",
    a: "Absolutely! Your website will be fully responsive and will look great on all devices. We don’t charge extra for this. It comes as a standard.",
  },
  {
    q: "Will I be able to update the site myself when it’s finished?",
    a: "Of course! We like to offer the ability for our clients to update the website themselves. We'll give you basic training and tools to be able to make website amendments. You would be able to edit and delete content without any issues. If there are any issues, we’re always here.",
  },
  {
    q: "Will you maintain my site for me?",
    a: "We can. We provide ongoing support for many of our clients.",
  },
  {
    q: "What if I need help on my site down the road?",
    a: "We are only a call away. We’re here to help you as much or as little as you need, and we won’t disappear once the site is launched. We provide several maintenance packages and will help you in choosing the best one as per your needs.",
  },
  {
    q: "Will you help me write content for my website?",
    a: "Of course, we will help you. As a web design and development company, copywriting and editing are included in our services. We have a team of dedicated content writers who will help you to write top-notch content for your website. In the planning stage of your website, we can also design your sitemap and help you lay out your website content as per your requirements.",
  },
  {
    q: "Will you help me update my website which is built by another web development company?",
    a: "It depends. We first need to check the website, backend, programming language, and the whole flow. There are issues of liability when multiple programmers work on the same code time and again, so we can’t comment on it before checking it first.",
  },
  {
    q: "I know nothing about websites. How would I use it?",
    a: "No worries. We are here to help you as a web design and development company. We’ll teach you the basics and also guide you in managing your website.",
  },
  {
    q: "How would you build my website?",
    a: "We design your website from scratch using a number of tools and then move it onto the development stage using platforms like WordPress and Shopify. Don’t worry, we’ll teach you how to manage it and help you along the way.",
  },
  {
    q: "Do you only create WordPress websites?",
    a: "No. We recommend WordPress for informative and static websites. Other than that, we also make e-commerce websites and custom portals. If you are into the e-commerce domain, we would suggest you go with the Shopify website as it will serve all your needs.",
  },
  {
    q: "Who hosts the website?",
    a: "If we build your website, we will usually host it for you and you don’t need to do anything. We pay the hosting fee to start with and we’ll send you an invoice thereafter. Alternatively, you can host the website elsewhere and manage it yourself. It’s completely up to you.",
  },
  {
    q: "Are SEO services included in the website development?",
    a: "It depends on which package you choose. SEO is usually an ongoing commitment and will require continuous work. However, we do offer a package that will start you off on the right foot.",
  },
  {
    q: "How long will it take to get to the first page of Google?",
    a: "It depends. There’s no clear answer to this question as search engines change their requirements all the time. However, we have had clients get to the first page for their main keywords within 2 days of launching and we’ve had websites take 2–3 months for Google to show them on the first page.",
  },
  {
    q: "Do you set up my Facebook, LinkedIn page, etc?",
    a: "Social media is not a part of the web design process. However, we are always looking for ways to make your life easier. We also provide Social Media Management services and can arrange a package that suits you best.",
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
.faq-panel-inner p { margin: 0; padding: 0 4px 20px;   color: #444; font-size: 16px; font-weight: 600}
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
                  <p>{item.a}</p>
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
