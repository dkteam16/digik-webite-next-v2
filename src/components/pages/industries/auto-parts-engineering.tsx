import Image from "next/image";
import Link from "next/link";
import { PixelHeader } from "@/components/layout/pixel-header";
import { PixelSiteFooter } from "@/components/layout/pixel-site-footer";

const imgGroup266 = "/images/ind-auto-parts-engineering/imgGroup266.svg";
const imgGroup267 = "/images/ind-auto-parts-engineering/imgGroup267.svg";
const imgOutline = "/images/ind-auto-parts-engineering/imgOutline.svg";
const imgGroup268 = "/images/ind-auto-parts-engineering/imgGroup268.svg";
const imgGroup = "/images/ind-auto-parts-engineering/imgGroup.svg";
const imgEllipse20 = "/images/ind-auto-parts-engineering/imgEllipse20.svg";
const imgEllipse21 = "/images/ind-auto-parts-engineering/imgEllipse21.svg";
const imgEllipse22 = "/images/ind-auto-parts-engineering/imgEllipse22.svg";
const imgGroup1 = "/images/ind-auto-parts-engineering/imgGroup1.svg";
const imgGroup2 = "/images/ind-auto-parts-engineering/imgGroup2.svg";
const imgGroup300 = "/images/ind-auto-parts-engineering/imgGroup300.svg";
const imgGroup398 = "/images/ind-auto-parts-engineering/imgGroup398.svg";
const imgSadsaas1 = "/images/ind-auto-parts-engineering/imgSadsaas1.png";

const PROBLEM_CARDS = [
  { n: "1.", text: "No structured product catalogue with part numbers and specifications" },
  { n: "2.", text: `Not ranking on Google for "auto parts manufacturer India" or your target keywords` },
  { n: "3.", text: "Website gives no confidence to international OEM buyers" },
  { n: "4.", text: "Over-dependent on IndiaMart, trade fairs, and word-of-mouth" },
];

const SEO_KEYWORDS = [
  ["Auto parts manufacturer India", "auto component supplier Punjab", "precision auto parts exporter India", "OEM auto component manufacturer", "forged auto parts supplier"],
  ["casting manufacturer India export", "website for auto parts manufacturer", "B2B web design for auto manufacturers", "industrial website design company"],
];

export function AutoPartsEngineeringPage() {
  return (
    <div className="bg-white relative w-[1920px] h-[3360px]">
      <PixelHeader activeHref="/industries" />

      {/* Hero */}
      <p className="absolute font-rajdhani font-semibold left-[162px] text-[#f4a31d] text-[20px] top-[207px] tracking-[-0.4px] uppercase">
        Auto Parts &amp; Precision Engineering
      </p>
      <p className="absolute font-days-one text-[#333] text-[50px] leading-[56.6px] left-[162px] top-[251px] tracking-[-1px] uppercase w-[850px]">
        Auto Component Manufacturers That Rank High Win Global OEM Contracts
      </p>
      <div className="absolute border-l-2 border-[#f4a31d] left-[162px] top-[460px] pl-6 w-[720px]">
        <p className="font-rajdhani font-semibold text-[#333] text-[20px] uppercase tracking-[-0.4px]">
          Procurement managers at automotive OEMs and Tier-1 suppliers search online long before contacting vendors. If your website is missing, outdated, or lacks detailed specifications, you lose business to competitors who look ready.
        </p>
      </div>
      <div className="absolute flex items-center gap-[24px] left-[162px] top-[610px]">
        <Link href="/contact" className="relative bg-[#f4a31d] block h-[88px] rounded-[64px] w-[304px] hover:opacity-90 transition-opacity">
          <div className="absolute border border-solid border-white inset-[7px] rounded-[52px]" />
          <p className="-translate-x-1/2 absolute font-rajdhani font-bold left-1/2 text-[23px] text-center text-white top-[29px] tracking-[-0.46px] uppercase whitespace-nowrap">
            Get Free Website Audit
          </p>
        </Link>
        <Link href="/our-work" className="relative border border-[#333] border-solid flex h-[88px] items-center justify-center px-[36px] rounded-[64px] hover:bg-[#333]/5 transition-colors">
          <p className="font-rajdhani font-bold text-[#333] text-[23px] text-center tracking-[-0.46px] uppercase whitespace-nowrap">
            See Industry Examples
          </p>
        </Link>
      </div>

      <div className="absolute bg-[#333] h-[100px] left-[1180px] top-[212px] w-[578px]">
        <div className="absolute bg-[#f4a31d] h-[100px] left-0 top-0 w-[10px]" />
        <p className="absolute font-days-one text-[#f4a31d] text-[38px] leading-[normal] left-[40px] top-[18px] tracking-[-0.76px]">$20B+</p>
        <p className="absolute font-rajdhani font-medium text-[16px] text-white left-[40px] top-[68px] tracking-[-0.32px] uppercase">India Auto Component Exports</p>
      </div>
      <div className="absolute bg-[#333] h-[100px] left-[1180px] top-[324px] w-[578px]">
        <div className="absolute bg-[#f4a31d] h-[100px] left-0 top-0 w-[10px]" />
        <p className="absolute font-days-one text-[#f4a31d] text-[38px] leading-[normal] left-[40px] top-[18px] tracking-[-0.76px]">Page 1</p>
        <p className="absolute font-rajdhani font-medium text-[16px] text-white left-[40px] top-[68px] tracking-[-0.32px] uppercase">Where Global Tier-1 Buyers Search</p>
      </div>
      <div className="absolute bg-[#333] h-[100px] left-[1180px] top-[436px] w-[578px]">
        <div className="absolute bg-[#f4a31d] h-[100px] left-0 top-0 w-[10px]" />
        <p className="absolute font-days-one text-[#f4a31d] text-[38px] leading-[normal] left-[40px] top-[18px] tracking-[-0.76px]">40+</p>
        <p className="absolute font-rajdhani font-medium text-[16px] text-white left-[40px] top-[68px] tracking-[-0.32px] uppercase">Export Markets Targeted</p>
      </div>
      <div className="absolute left-[1660px] size-[170px] top-[440px]">
        <Image alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse20} fill sizes="100vw" />
        <div className="absolute left-[5px] size-[159px] top-[6px]">
          <Image alt="ISO certified badge" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgSadsaas1} fill sizes="100vw" />
        </div>
      </div>

      {/* Divider + icon strip */}
      <div className="absolute flex h-[6px] items-center justify-center left-0 top-[740px] w-[1920px]">
        <div className="bg-[#f4a31d] h-[6px] w-[1920px]" />
      </div>
      <div className="absolute bg-[#333] h-[106px] left-0 top-[745px] w-[1920px]" />
      <div className="absolute flex items-center gap-[10px] left-[80px] top-[779px]">
        <div className="absolute left-0 top-[-5px] w-[59px] h-[59px]">
          <Image alt="" className="absolute block inset-0 max-w-none object-contain size-full" src={imgGroup266} fill sizes="100vw" />
        </div>
        <p className="absolute font-rajdhani font-semibold text-[20px] text-white left-[75px] top-[8px] tracking-[-0.4px] uppercase whitespace-nowrap">Engineering Firm Web Design</p>
      </div>
      <div className="absolute flex items-center gap-[10px] left-[470px] top-[779px]">
        <div className="absolute left-0 top-[-2px] w-[60px] h-[54px]">
          <Image alt="" className="absolute block inset-0 max-w-none object-contain size-full" src={imgGroup267} fill sizes="100vw" />
        </div>
        <p className="absolute font-rajdhani font-semibold text-[20px] text-white left-[76px] top-[8px] tracking-[-0.4px] uppercase whitespace-nowrap">Web Design for Manufacturers</p>
      </div>
      <div className="absolute flex items-center gap-[10px] left-[900px] top-[779px]">
        <div className="absolute left-0 top-[-7px] w-[61px] h-[61px]">
          <Image alt="" className="absolute block inset-0 max-w-none object-contain size-full" src={imgOutline} fill sizes="100vw" />
        </div>
        <p className="absolute font-rajdhani font-semibold text-[20px] text-white left-[77px] top-[8px] tracking-[-0.4px] uppercase whitespace-nowrap">Industrial SEO Agency India</p>
      </div>
      <div className="absolute flex items-center gap-[10px] left-[1310px] top-[779px]">
        <div className="absolute left-0 top-[-7px] w-[57px] h-[69px]">
          <Image alt="" className="absolute block inset-0 max-w-none object-contain size-full" src={imgGroup268} fill sizes="100vw" />
        </div>
        <p className="absolute font-rajdhani font-semibold text-[20px] text-white left-[73px] top-[8px] tracking-[-0.4px] uppercase whitespace-nowrap">{`B2B Website Design & Development`}</p>
      </div>
      <div className="absolute flex items-center gap-[10px] left-[1780px] top-[779px]">
        <div className="absolute left-0 top-[-6px] w-[57px] h-[57px]">
          <Image alt="" className="absolute block inset-0 max-w-none object-contain size-full" src={imgGroup} fill sizes="100vw" />
        </div>
        <p className="absolute font-rajdhani font-semibold text-[20px] text-white left-[73px] top-[8px] tracking-[-0.4px] uppercase whitespace-nowrap">RFQ Form Design</p>
      </div>

      {/* The Problem */}
      <p className="absolute font-rajdhani font-semibold left-[162px] text-[#f4a31d] text-[20px] top-[890px] tracking-[-0.4px] uppercase">
        The Problem
      </p>
      <p className="-translate-x-1/2 absolute font-days-one text-[#333] text-[42px] leading-[52px] left-1/2 text-center top-[933px] tracking-[-0.84px] uppercase w-[1200px]">
        Auto Component Buyers Judge You by Your Website First
      </p>
      <p className="-translate-x-1/2 absolute font-rajdhani text-[#535353] text-[18px] leading-[26px] left-1/2 text-center top-[1005px] uppercase w-[1200px]">
        Procurement managers at OEMs and Tier-1 automotive companies conduct supplier discovery online before a single call is made. They search for &quot;auto parts manufacturer India&quot; or specific component categories — and they shortlist based entirely on digital credibility.
      </p>

      {/* 4 Problem Cards */}
      <div className="absolute left-[162px] top-[1100px] flex gap-[30px]">
        {PROBLEM_CARDS.map((card) => (
          <div key={card.n} className="bg-[#f5f5f5] rounded-[64px] w-[384px] h-[230px] px-[32px] py-[32px]">
            <div className="border border-[#f4a31d] border-solid size-[61px] flex items-center justify-center">
              <p className="font-days-one text-[#f4a31d] text-[28px]">{card.n}</p>
            </div>
            <p className="font-rajdhani font-medium text-[#333] text-[18px] leading-[26px] tracking-[-0.36px] uppercase mt-[24px]">
              {card.text}
            </p>
          </div>
        ))}
      </div>

      {/* SEO Strategy Section */}
      <div className="absolute bg-[#f5f5f5] left-0 top-[1400px] w-[1920px] h-[480px]" />
      <p className="-translate-x-1/2 absolute font-rajdhani font-semibold left-1/2 text-[#f4a31d] text-[20px] top-[1450px] tracking-[-0.4px] uppercase">
        SEO Strategy
      </p>
      <p className="-translate-x-1/2 absolute font-days-one text-[#333] text-[42px] leading-[52px] left-1/2 text-center top-[1493px] tracking-[-0.84px] uppercase w-[1100px]">
        Keywords We Rank Your Auto Parts Business For
      </p>
      <p className="-translate-x-1/2 absolute font-rajdhani font-semibold text-[#535353] text-[18px] left-1/2 text-center top-[1565px] tracking-[-0.36px] uppercase w-[1000px]">
        Our B2B SEO strategy targets the exact terms automotive procurement managers type when searching for new suppliers.
      </p>
      <div className="absolute left-[162px] top-[1630px] flex flex-wrap gap-[16px] w-[1596px]">
        {SEO_KEYWORDS[0].map((kw) => (
          <div key={kw} className="bg-white rounded-[10px] px-[20px] py-[14px]">
            <p className="font-rajdhani font-semibold text-[18px] text-[#535353] whitespace-nowrap">{kw}</p>
          </div>
        ))}
      </div>
      <div className="absolute left-[162px] top-[1700px] flex flex-wrap gap-[16px] w-[1596px]">
        {SEO_KEYWORDS[1].map((kw) => (
          <div key={kw} className="bg-white rounded-[10px] px-[20px] py-[14px]">
            <p className="font-rajdhani font-semibold text-[18px] text-[#535353] whitespace-nowrap">{kw}</p>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="absolute bg-[#f5f5f5] left-0 top-[1980px] w-[1920px] h-[520px]" />
      <p className="-translate-x-1/2 absolute font-days-one text-[#242832] text-[46px] leading-[56px] left-1/2 text-center top-[2060px] tracking-[-0.92px] w-[1200px]">
        Is Your Website Winning Auto Buyers <span className="text-[#f4a31d]">or Losing Them?</span>
      </p>
      <p className="-translate-x-1/2 absolute font-rajdhani font-semibold text-[#535353] text-[20px] left-1/2 text-center top-[2220px] tracking-[-0.4px] uppercase w-[725px]">
        Get a free audit of your current website and SEO. We&apos;ll show you exactly what&apos;s costing you RFQs.
      </p>
      <div className="-translate-x-1/2 absolute flex items-center justify-center gap-[24px] left-1/2 top-[2310px]">
        <Link href="/contact" className="relative bg-[#f4a31d] block h-[88px] rounded-[64px] w-[304px] hover:opacity-90 transition-opacity">
          <div className="absolute border border-solid border-white inset-[7px] rounded-[52px]" />
          <p className="-translate-x-1/2 absolute font-rajdhani font-bold left-1/2 text-[23px] text-center text-white top-[29px] tracking-[-0.46px] uppercase whitespace-nowrap">
            Get Free Audit Now
          </p>
        </Link>
        <Link href="https://wa.me/919814820845" target="_blank" rel="noopener noreferrer" className="relative border border-[#333] border-solid flex h-[88px] items-center justify-center px-[36px] rounded-[64px] hover:bg-[#333]/5 transition-colors">
          <p className="font-rajdhani font-bold text-[#333] text-[23px] text-center tracking-[-0.46px] uppercase whitespace-nowrap">
            WhatsApp Us
          </p>
        </Link>
      </div>
      <div className="absolute left-[1660px] top-[2060px] size-[170px]">
        <Image alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse20} fill sizes="100vw" />
        <div className="absolute left-[5.4px] top-[5.4px] size-[159px]">
          <Image alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse21} fill sizes="100vw" />
        </div>
        <div className="absolute left-[57px] top-[34px] w-[56px] h-[58px]">
          <Image alt="" className="absolute block inset-0 max-w-none object-contain size-full" src={imgGroup1} fill sizes="100vw" />
        </div>
        <p className="-translate-x-1/2 absolute font-rajdhani font-bold left-1/2 text-[17px] text-center text-white top-[96px] tracking-[-0.34px] uppercase whitespace-nowrap">
          Google Rating
        </p>
        <p className="absolute font-rajdhani font-bold text-[13px] text-white left-[42px] top-[116px] tracking-[-0.26px] uppercase whitespace-nowrap">4.7</p>
        <div className="absolute h-[13px] left-[61px] top-[116px] w-[66px]">
          <Image alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup300} fill sizes="100vw" />
        </div>
      </div>

      <PixelSiteFooter />
    </div>
  );
}
