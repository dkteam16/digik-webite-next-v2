import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { PixelHeader } from "@/components/layout/pixel-header";
import { PixelSiteFooter } from "@/components/layout/pixel-site-footer";

const imgGroup266 = "/images/ind-auto-parts-engineering/imgGroup266.svg";
const imgGroup267 = "/images/ind-auto-parts-engineering/imgGroup267.svg";
const imgOutline = "/images/ind-auto-parts-engineering/imgOutline.svg";
const imgGroup268 = "/images/ind-auto-parts-engineering/imgGroup268.svg";
const imgGroup = "/images/ind-auto-parts-engineering/imgGroup.svg";
const imgSadsaas1 = "/images/ind-auto-parts-engineering/imgSadsaas1.png";
const imgEllipse20 = "/images/ind-auto-parts-engineering/imgEllipse20.svg";
const imgEllipse21 = "/images/ind-auto-parts-engineering/imgEllipse21.svg";
const imgGroup1 = "/images/ind-auto-parts-engineering/imgGroup1.svg";
const imgGroup300 = "/images/ind-auto-parts-engineering/imgGroup300.svg";

// This case study's source design carried over "Franchise Chain / Local SEO /
// Google Business Profile" tags from the Octave Mettle page. Q&Q's own client
// info (CNC machining, foundry, positioning strategy) doesn't match those, so
// the tags below reflect what the page is actually about.
const TAGS = ["Precision Manufacturing", "Brand Strategy", "SEO & Content"];

const RECOMMENDATION_POINTS = [
  "CNC precision remains the lead identity — trusted, established, and what international buyers already associate with Q&Q",
  "Foundry capability is positioned as a vertical integration advantage — giving buyers access to casting and machining under one roof, one quality system, one supply chain",
  "All messaging is written in the language of international procurement: tolerances, certifications, lead times, and build-to-print credentials",
];

const WHAT_WE_BUILT = [
  "Full positioning strategy and competitive analysis — defining where Q&Q sits against global precision manufacturers",
  "10-page website sitemap and architecture — covering CNC services, foundry services, industries served, quality standards, and international buyer resources",
  "Homepage redesign — leading with capability, credibility, and a clear call to action for RFQ submissions",
  "30-keyword foundry SEO plan — targeting international procurement search terms across casting and machining",
  "4 long-form SEO blogs targeting international procurement buyers — covering iron casting specifications, material comparisons, and precision machining tolerances",
  "Service pages for both CNC and foundry verticals, written to convert procurement engineers who are evaluating vendors",
];

const SERVICES_DELIVERED = [
  "Brand positioning strategy",
  "Competitive analysis",
  "Website architecture and sitemap",
  "Homepage design and build",
  "CNC and foundry service pages",
  "30-keyword SEO strategy",
  "4 long-form SEO blogs",
  "International buyer-ready copywriting",
];

const CAPABILITY = ["CNC precision machining", "Build-to-print components", "Iron casting 50-2000kg", "OEM assemblies"];

function Bullet({ children }: { children: ReactNode }) {
  return (
    <li className="flex gap-[10px] items-start">
      <span className="mt-[9px] size-[6px] rounded-full bg-[#f4a31d] shrink-0" />
      <span>{children}</span>
    </li>
  );
}

export function QQSolutionsPage() {
  return (
    <div className="bg-white relative w-[1920px] h-[3674px]">
      <PixelHeader activeHref="/our-work" />

      {/* Hero */}
      <div className="absolute left-[162px] top-[140px] flex gap-[12px]">
        {TAGS.map((tag) => (
          <div key={tag} className="bg-[#fdf1e0] rounded-[8px] px-[16px] py-[8px]">
            <p className="font-rajdhani font-semibold text-[#f4a31d] text-[15px] whitespace-nowrap">{tag}</p>
          </div>
        ))}
      </div>
      <p className="absolute font-days-one text-[#242832] text-[42px] leading-[52px] left-[162px] top-[200px] tracking-[-0.84px] uppercase w-[900px]">
        Q&amp;Q Solutions – Two Verticals. One Powerful Position.
      </p>
      <p className="absolute font-rajdhani text-[#535353] text-[18px] leading-[26px] left-[162px] top-[330px] w-[900px]">
        A Coimbatore-based precision CNC machine shop that acquired a foundry in 2026 needed a strategy, a website, and an SEO plan that could tell both stories — and win international OEM buyers.
      </p>
      <div className="absolute bg-[#f5f5f5] rounded-[64px] left-[162px] top-[440px] w-[620px] h-[210px] p-[28px]">
        <div className="grid grid-cols-[110px_1fr] gap-y-[12px] font-rajdhani text-[17px]">
          <span className="font-bold text-[#f4a31d] uppercase">Client:</span>
          <span className="text-[#333]">Q&amp;Q Solutions, Coimbatore</span>
          <span className="font-bold text-[#f4a31d] uppercase">Industry:</span>
          <span className="text-[#333]">CNC Machining, Precision Components, Iron Casting</span>
          <span className="font-bold text-[#f4a31d] uppercase">Buyers:</span>
          <span className="text-[#333]">OEMs and Large Enterprises — US and Europe</span>
          <span className="font-bold text-[#f4a31d] uppercase">Services:</span>
          <span className="text-[#333]">Positioning Strategy, Web, SEO, Content</span>
        </div>
      </div>

      <div className="absolute bg-[#333] h-[95px] left-[1180px] top-[140px] w-[578px]">
        <div className="absolute bg-[#f4a31d] h-[95px] left-0 top-0 w-[10px]" />
        <p className="absolute font-days-one text-[#f4a31d] text-[36px] leading-[normal] left-[40px] top-[18px] tracking-[-0.72px]">10+</p>
        <p className="absolute font-rajdhani font-medium text-[15px] text-white left-[40px] top-[64px] tracking-[-0.3px] uppercase">Website Pages Designed and Built</p>
      </div>
      <div className="absolute bg-[#333] h-[95px] left-[1180px] top-[247px] w-[578px]">
        <div className="absolute bg-[#f4a31d] h-[95px] left-0 top-0 w-[10px]" />
        <p className="absolute font-days-one text-[#f4a31d] text-[36px] leading-[normal] left-[40px] top-[18px] tracking-[-0.72px]">30</p>
        <p className="absolute font-rajdhani font-medium text-[15px] text-white left-[40px] top-[64px] tracking-[-0.3px] uppercase">Targeted SEO Keywords — Foundry and CNC</p>
      </div>
      <div className="absolute bg-[#333] h-[95px] left-[1180px] top-[354px] w-[578px]">
        <div className="absolute bg-[#f4a31d] h-[95px] left-0 top-0 w-[10px]" />
        <p className="absolute font-days-one text-[#f4a31d] text-[36px] leading-[normal] left-[40px] top-[18px] tracking-[-0.72px]">2</p>
        <p className="absolute font-rajdhani font-medium text-[15px] text-white left-[40px] top-[64px] tracking-[-0.3px] uppercase">Manufacturing Verticals Unified Under One Strategy</p>
      </div>
      <div className="absolute bg-[#333] h-[95px] left-[1180px] top-[461px] w-[578px]">
        <div className="absolute bg-[#f4a31d] h-[95px] left-0 top-0 w-[10px]" />
        <p className="absolute font-days-one text-[#f4a31d] text-[36px] leading-[normal] left-[40px] top-[18px] tracking-[-0.72px]">US+EU</p>
        <p className="absolute font-rajdhani font-medium text-[15px] text-white left-[40px] top-[64px] tracking-[-0.3px] uppercase">Target Buyer Geographies</p>
      </div>
      <div className="absolute left-[1660px] size-[130px] top-[300px]">
        <Image alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse20} fill sizes="100vw" />
        <div className="absolute left-[4px] size-[122px] top-[4px]">
          <Image alt="ISO 9001:2015 certified badge" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgSadsaas1} fill sizes="100vw" />
        </div>
      </div>

      {/* Divider + icon strip */}
      <div className="absolute flex h-[6px] items-center justify-center left-0 top-[660px] w-[1920px]">
        <div className="bg-[#f4a31d] h-[6px] w-[1920px]" />
      </div>
      <div className="absolute bg-[#333] h-[106px] left-0 top-[665px] w-[1920px]" />
      <div className="absolute flex items-center gap-[10px] left-[80px] top-[699px]">
        <div className="absolute left-0 top-[-5px] w-[59px] h-[59px]">
          <Image alt="" className="absolute block inset-0 max-w-none object-contain size-full" src={imgGroup266} fill sizes="100vw" />
        </div>
        <p className="absolute font-rajdhani font-semibold text-[20px] text-white left-[75px] top-[8px] tracking-[-0.4px] uppercase whitespace-nowrap">Engineering Firm Web Design</p>
      </div>
      <div className="absolute flex items-center gap-[10px] left-[470px] top-[699px]">
        <div className="absolute left-0 top-[-2px] w-[60px] h-[54px]">
          <Image alt="" className="absolute block inset-0 max-w-none object-contain size-full" src={imgGroup267} fill sizes="100vw" />
        </div>
        <p className="absolute font-rajdhani font-semibold text-[20px] text-white left-[76px] top-[8px] tracking-[-0.4px] uppercase whitespace-nowrap">Web Design for Manufacturers</p>
      </div>
      <div className="absolute flex items-center gap-[10px] left-[900px] top-[699px]">
        <div className="absolute left-0 top-[-7px] w-[61px] h-[61px]">
          <Image alt="" className="absolute block inset-0 max-w-none object-contain size-full" src={imgOutline} fill sizes="100vw" />
        </div>
        <p className="absolute font-rajdhani font-semibold text-[20px] text-white left-[77px] top-[8px] tracking-[-0.4px] uppercase whitespace-nowrap">Industrial SEO Agency India</p>
      </div>
      <div className="absolute flex items-center gap-[10px] left-[1310px] top-[699px]">
        <div className="absolute left-0 top-[-7px] w-[57px] h-[69px]">
          <Image alt="" className="absolute block inset-0 max-w-none object-contain size-full" src={imgGroup268} fill sizes="100vw" />
        </div>
        <p className="absolute font-rajdhani font-semibold text-[20px] text-white left-[73px] top-[8px] tracking-[-0.4px] uppercase whitespace-nowrap">{`B2B Website Design & Development`}</p>
      </div>
      <div className="absolute flex items-center gap-[10px] left-[1780px] top-[699px]">
        <div className="absolute left-0 top-[-6px] w-[57px] h-[57px]">
          <Image alt="" className="absolute block inset-0 max-w-none object-contain size-full" src={imgGroup} fill sizes="100vw" />
        </div>
        <p className="absolute font-rajdhani font-semibold text-[20px] text-white left-[73px] top-[8px] tracking-[-0.4px] uppercase whitespace-nowrap">RFQ Form Design</p>
      </div>

      {/* Two-column body */}
      <div className="absolute left-[162px] top-[860px] w-[1180px]">
        <p className="font-days-one text-[#242832] text-[30px] uppercase tracking-[-0.6px]">The Challenge</p>
        <p className="font-rajdhani text-[#535353] text-[18px] leading-[26px] mt-[24px]">
          Q&amp;Q Solutions had built a strong reputation in precision CNC machining and build-to-print metal components for OEMs. In 2026, they acquired a foundry in Coimbatore — significantly expanding their capability to include iron casting from 50kg to 2000kg.
        </p>
        <p className="font-rajdhani text-[#535353] text-[18px] leading-[26px] mt-[20px]">
          The strategic challenge was clear: how do you present two distinct manufacturing capabilities — precision CNC and iron casting — under one brand, in a way that makes sense to international procurement buyers? The wrong decision (two separate websites, or a diluted single site) would cost them authority in both verticals.
        </p>
        <p className="font-rajdhani text-[#535353] text-[18px] leading-[26px] mt-[20px]">
          The existing digital presence had no SEO strategy and was not built for the language that international OEM buyers use when searching for precision manufacturing partners.
        </p>
        <div className="border-t border-[#e0e0e0] mt-[36px]" />
        <p className="font-days-one text-[#242832] text-[30px] uppercase tracking-[-0.6px] mt-[36px]">Our Strategic Recommendation</p>
        <p className="font-rajdhani text-[#535353] text-[18px] leading-[26px] mt-[24px]">
          After analysis, we recommended positioning Q&amp;Q Solutions as an advanced CNC machine shop with a newly acquired, in-house foundry capability — not as a foundry that also does CNC. This distinction matters enormously to international buyers who think in terms of primary capability and secondary services.
        </p>
        <ul className="font-rajdhani text-[#535353] text-[18px] leading-[26px] mt-[20px] flex flex-col gap-[14px]">
          {RECOMMENDATION_POINTS.map((item) => (
            <Bullet key={item}>{item}</Bullet>
          ))}
        </ul>
        <div className="border-t border-[#e0e0e0] mt-[36px]" />
        <p className="font-days-one text-[#242832] text-[30px] uppercase tracking-[-0.6px] mt-[36px]">What We Built</p>
        <ul className="font-rajdhani text-[#535353] text-[18px] leading-[26px] mt-[24px] flex flex-col gap-[14px]">
          {WHAT_WE_BUILT.map((item) => (
            <Bullet key={item}>{item}</Bullet>
          ))}
        </ul>
        <div className="border-t border-[#e0e0e0] mt-[36px]" />
        <p className="font-days-one text-[#242832] text-[30px] uppercase tracking-[-0.6px] mt-[36px]">The Outcome</p>
        <p className="font-rajdhani text-[#535353] text-[18px] leading-[26px] mt-[24px]">
          Q&amp;Q Solutions now has a digital presence that reflects the full scope of what they can offer — and communicates it in the language that US and European OEM buyers actually use when searching for manufacturing partners. The SEO strategy targets the search terms their buyers use before they ever reach a directory or trade show — building organic inbound before paid acquisition is needed.
        </p>
      </div>

      {/* Sidebar */}
      <div className="absolute left-[1420px] top-[860px] w-[338px] bg-[#f5f5f5] rounded-[64px] p-[28px]">
        <p className="font-rajdhani font-bold text-[#f4a31d] text-[16px] uppercase tracking-[-0.32px]">Services Delivered</p>
        <ul className="font-rajdhani text-[#333] text-[16px] leading-[22px] mt-[16px] flex flex-col gap-[10px]">
          {SERVICES_DELIVERED.map((item) => (
            <Bullet key={item}>{item}</Bullet>
          ))}
        </ul>
      </div>
      <div className="absolute left-[1420px] top-[1490px] w-[338px] bg-[#f5f5f5] rounded-[64px] p-[28px]">
        <p className="font-rajdhani font-bold text-[#f4a31d] text-[16px] uppercase tracking-[-0.32px]">Capability Covered</p>
        <ul className="font-rajdhani text-[#333] text-[16px] leading-[22px] mt-[16px] flex flex-col gap-[10px]">
          {CAPABILITY.map((item) => (
            <Bullet key={item}>{item}</Bullet>
          ))}
        </ul>
      </div>
      <div className="absolute left-[1420px] top-[1780px] w-[338px] bg-white border border-[#e0e0e0] rounded-[64px] p-[28px] text-center">
        <p className="font-rajdhani font-bold text-[#242832] text-[16px] uppercase tracking-[-0.32px] leading-[22px]">
          Manufacturer or Exporter Looking to Win International Buyers?
        </p>
        <Link href="/contact" className="mt-[18px] inline-block bg-[#f4a31d] rounded-[10px] px-[24px] py-[12px] hover:opacity-90 transition-opacity">
          <p className="font-rajdhani font-bold text-white text-[15px] uppercase tracking-[-0.3px]">Get Free Audit</p>
        </Link>
      </div>

      {/* CTA */}
      <div className="absolute bg-[#f5f5f5] left-0 top-[2900px] w-[1920px] h-[774px]" />
      <p className="-translate-x-1/2 absolute font-days-one text-[#242832] text-[46px] left-1/2 text-center top-[2990px] tracking-[-0.92px] whitespace-nowrap">
        Ready to Be Next?
      </p>
      <p className="-translate-x-1/2 absolute font-rajdhani text-[#535353] text-[18px] left-1/2 text-center top-[3080px] uppercase tracking-[-0.36px] whitespace-nowrap">
        If you&apos;re a manufacturer, exporter, or B2B industrial company — we should talk.
      </p>
      <Link href="/contact" className="absolute bg-[#f4a31d] block h-[88px] left-[calc(50%-160px)] rounded-[64px] top-[3170px] w-[304px] hover:opacity-90 transition-opacity">
        <div className="absolute border border-solid border-white inset-[7px] rounded-[52px]" />
        <p className="-translate-x-1/2 absolute font-rajdhani font-bold left-1/2 text-[23px] text-center text-white top-[29px] tracking-[-0.46px] uppercase whitespace-nowrap">
          Get Free Audit
        </p>
      </Link>
      <Link href="https://wa.me/919814820845" target="_blank" rel="noopener noreferrer" className="absolute border border-[#333] border-solid content-stretch flex h-[88px] items-center justify-center left-[calc(50%+164px)] px-[20px] py-[10px] rounded-[64px] top-[3170px] hover:bg-[#333]/5 transition-colors">
        <p className="font-rajdhani font-bold text-[#333] text-[23px] text-center tracking-[-0.46px] uppercase whitespace-nowrap">
          WhatsApp Us
        </p>
      </Link>
      <div className="absolute left-[1660px] top-[2970px] size-[130px]">
        <Image alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse20} fill sizes="100vw" />
        <div className="absolute left-[4.1px] top-[4.1px] size-[122px]">
          <Image alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse21} fill sizes="100vw" />
        </div>
        <div className="absolute left-[44px] top-[26px] w-[43px] h-[44px]">
          <Image alt="" className="absolute block inset-0 max-w-none object-contain size-full" src={imgGroup1} fill sizes="100vw" />
        </div>
        <p className="-translate-x-1/2 absolute font-rajdhani font-bold left-1/2 text-[13px] text-center text-white top-[73px] tracking-[-0.26px] uppercase whitespace-nowrap">
          Google Rating
        </p>
        <p className="absolute font-rajdhani font-bold text-[10px] text-white left-[32px] top-[89px] tracking-[-0.2px] uppercase whitespace-nowrap">4.7</p>
        <div className="absolute h-[10px] left-[47px] top-[89px] w-[50px]">
          <Image alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup300} fill sizes="100vw" />
        </div>
      </div>

      <PixelSiteFooter />
    </div>
  );
}
