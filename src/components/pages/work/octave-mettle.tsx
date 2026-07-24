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

const TAGS = ["Franchise Chain", "Local SEO", "Google Business Profile"];

const WHAT_WE_DID = [
  "Conducted a full audit of all 240+ Google Business Profile listings — identifying errors, gaps, duplicates, and inconsistencies",
  "Standardised business names, categories, and descriptions across all locations to match brand guidelines",
  "Updated and verified hours, contact details, and addresses for every listing",
  "Uploaded brand-consistent photos across all 240+ profiles",
  "Identified and resolved duplicate listings that were splitting search visibility",
  "Wrote optimised business descriptions using local SEO best practices — consistent in voice, targeted by location",
  "Set up a monitoring framework for ongoing listing health across the network",
];

const SERVICES_DELIVERED = [
  "GBP audit — 240+ listings",
  "Data standardisation",
  "Duplicate resolution",
  "Photo upload and optimisation",
  "Local SEO copywriting",
  "Monitoring framework setup",
];

const INDUSTRY = ["240+ individual listings", "Pan-India coverage", "Franchise network"];

function Bullet({ children }: { children: ReactNode }) {
  return (
    <li className="flex gap-[10px] items-start">
      <span className="mt-[9px] size-[6px] rounded-full bg-[#f4a31d] shrink-0" />
      <span>{children}</span>
    </li>
  );
}

export function OctaveMettlePage() {
  return (
    <div className="bg-white relative w-[1920px] h-[3125px]">
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
        Octave Mettle – 240 Locations. One Consistent Presence.
      </p>
      <p className="absolute font-rajdhani text-[#535353] text-[18px] leading-[26px] left-[162px] top-[330px] w-[900px]">
        A pan-India franchise chain with 240+ locations and Google Business Profiles that were inconsistent, inaccurate, and costing them local visibility. We fixed all 240+ in a single, systematic engagement.
      </p>
      <div className="absolute bg-[#f5f5f5] rounded-[64px] left-[162px] top-[440px] w-[620px] h-[170px] p-[28px]">
        <div className="grid grid-cols-[130px_1fr] gap-y-[12px] font-rajdhani text-[17px]">
          <span className="font-bold text-[#f4a31d] uppercase">Client:</span>
          <span className="text-[#333]">Octave Mettle, Pan-India</span>
          <span className="font-bold text-[#f4a31d] uppercase">Locations:</span>
          <span className="text-[#333]">240+ Franchise Outlets</span>
          <span className="font-bold text-[#f4a31d] uppercase">Service:</span>
          <span className="text-[#333]">Google Business Profile Audit, Optimisation, and Management</span>
        </div>
      </div>

      <div className="absolute bg-[#333] h-[95px] left-[1180px] top-[140px] w-[578px]">
        <div className="absolute bg-[#f4a31d] h-[95px] left-0 top-0 w-[10px]" />
        <p className="absolute font-days-one text-[#f4a31d] text-[36px] leading-[normal] left-[40px] top-[18px] tracking-[-0.72px]">240+</p>
        <p className="absolute font-rajdhani font-medium text-[15px] text-white left-[40px] top-[64px] tracking-[-0.3px] uppercase">Google Business Profiles Audited and Optimised</p>
      </div>
      <div className="absolute bg-[#333] h-[95px] left-[1180px] top-[247px] w-[578px]">
        <div className="absolute bg-[#f4a31d] h-[95px] left-0 top-0 w-[10px]" />
        <p className="absolute font-days-one text-[#f4a31d] text-[36px] leading-[normal] left-[40px] top-[18px] tracking-[-0.72px]">100%</p>
        <p className="absolute font-rajdhani font-medium text-[15px] text-white left-[40px] top-[64px] tracking-[-0.3px] uppercase">Profile Accuracy Achieved Across All Listings</p>
      </div>
      <div className="absolute bg-[#333] h-[95px] left-[1180px] top-[354px] w-[578px]">
        <div className="absolute bg-[#f4a31d] h-[95px] left-0 top-0 w-[10px]" />
        <p className="absolute font-days-one text-[#f4a31d] text-[36px] leading-[normal] left-[40px] top-[18px] tracking-[-0.72px]">1</p>
        <p className="absolute font-rajdhani font-medium text-[15px] text-white left-[40px] top-[64px] tracking-[-0.3px] uppercase">Unified Brand Voice Across All Locations</p>
      </div>
      <div className="absolute bg-[#333] h-[95px] left-[1180px] top-[461px] w-[578px]">
        <div className="absolute bg-[#f4a31d] h-[95px] left-0 top-0 w-[10px]" />
        <p className="absolute font-days-one text-[#f4a31d] text-[36px] leading-[normal] left-[40px] top-[18px] tracking-[-0.72px]">Pan-IN</p>
        <p className="absolute font-rajdhani font-medium text-[15px] text-white left-[40px] top-[64px] tracking-[-0.3px] uppercase">Coverage Across All Active Franchise Locations</p>
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
        <p className="font-days-one text-[#242832] text-[30px] uppercase tracking-[-0.6px]">The Problem</p>
        <p className="font-rajdhani text-[#535353] text-[18px] leading-[26px] mt-[24px]">
          {`Octave Mettle operates a franchise network of 240+ locations across India. Each location had its own Google Business Profile — but there was no consistency. Business names varied. Categories were wrong. Hours were outdated or missing. Photos were absent or off-brand. Some listings had incorrect addresses. Others were duplicates. For a franchise brand where customers actively search "near me", this inconsistency was directly costing them footfall and local visibility. Google's algorithm rewards completeness and accuracy — incomplete and inconsistent listings rank lower and drive fewer calls, directions requests, and website visits.`}
        </p>
        <div className="border-t border-[#e0e0e0] mt-[36px]" />
        <p className="font-days-one text-[#242832] text-[30px] uppercase tracking-[-0.6px] mt-[36px]">What We Did</p>
        <ul className="font-rajdhani text-[#535353] text-[18px] leading-[26px] mt-[24px] flex flex-col gap-[14px]">
          {WHAT_WE_DID.map((item) => (
            <Bullet key={item}>{item}</Bullet>
          ))}
        </ul>
        <div className="border-t border-[#e0e0e0] mt-[36px]" />
        <p className="font-days-one text-[#242832] text-[30px] uppercase tracking-[-0.6px] mt-[36px]">The Outcome</p>
        <p className="font-rajdhani text-[#535353] text-[18px] leading-[26px] mt-[24px]">
          After the engagement, Octave Mettle had a clean, consistent, fully-optimised Google Business presence across all 240+ locations — presenting a unified brand to local searchers across India. Profile views, direction requests, and call clicks improved across the network as Google&apos;s algorithm responded to the improved completeness and accuracy signals. The engagement also established a repeatable process for onboarding new franchise locations with a complete, optimised GBP from day one — removing the inconsistency problem permanently.
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
      <div className="absolute left-[1420px] top-[1230px] w-[338px] bg-[#f5f5f5] rounded-[64px] p-[28px]">
        <p className="font-rajdhani font-bold text-[#f4a31d] text-[16px] uppercase tracking-[-0.32px]">Industry</p>
        <ul className="font-rajdhani text-[#333] text-[16px] leading-[22px] mt-[16px] flex flex-col gap-[10px]">
          {INDUSTRY.map((item) => (
            <Bullet key={item}>{item}</Bullet>
          ))}
        </ul>
      </div>
      <div className="absolute left-[1420px] top-[1470px] w-[338px] bg-white border border-[#e0e0e0] rounded-[64px] p-[28px] text-center">
        <p className="font-rajdhani font-bold text-[#242832] text-[16px] uppercase tracking-[-0.32px] leading-[22px]">
          Multiple Locations and Inconsistent Online Presence?
        </p>
        <Link href="/contact" className="mt-[18px] inline-block bg-[#f4a31d] rounded-[10px] px-[24px] py-[12px] hover:opacity-90 transition-opacity">
          <p className="font-rajdhani font-bold text-white text-[15px] uppercase tracking-[-0.3px]">Get Free Audit</p>
        </Link>
      </div>

      {/* CTA */}
      <div className="absolute bg-[#f5f5f5] left-0 top-[2350px] w-[1920px] h-[775px]" />
      <p className="-translate-x-1/2 absolute font-days-one text-[#242832] text-[46px] left-1/2 text-center top-[2440px] tracking-[-0.92px] whitespace-nowrap">
        Ready to Be Next?
      </p>
      <p className="-translate-x-1/2 absolute font-rajdhani text-[#535353] text-[18px] left-1/2 text-center top-[2530px] uppercase tracking-[-0.36px] whitespace-nowrap">
        If you&apos;re a manufacturer, exporter, or B2B industrial company — we should talk.
      </p>
      <Link href="/contact" className="absolute bg-[#f4a31d] block h-[88px] left-[calc(50%-160px)] rounded-[64px] top-[2620px] w-[304px] hover:opacity-90 transition-opacity">
        <div className="absolute border border-solid border-white inset-[7px] rounded-[52px]" />
        <p className="-translate-x-1/2 absolute font-rajdhani font-bold left-1/2 text-[23px] text-center text-white top-[29px] tracking-[-0.46px] uppercase whitespace-nowrap">
          Get Free Audit
        </p>
      </Link>
      <Link href="https://wa.me/919814820845" target="_blank" rel="noopener noreferrer" className="absolute border border-[#333] border-solid content-stretch flex h-[88px] items-center justify-center left-[calc(50%+164px)] px-[20px] py-[10px] rounded-[64px] top-[2620px] hover:bg-[#333]/5 transition-colors">
        <p className="font-rajdhani font-bold text-[#333] text-[23px] text-center tracking-[-0.46px] uppercase whitespace-nowrap">
          WhatsApp Us
        </p>
      </Link>
      <div className="absolute left-[1660px] top-[2420px] size-[130px]">
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
