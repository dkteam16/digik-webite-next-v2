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
const imgEllipse22 = "/images/ind-auto-parts-engineering/imgEllipse22.svg";
const imgGroup1 = "/images/ind-auto-parts-engineering/imgGroup1.svg";
const imgGroup2 = "/images/ind-auto-parts-engineering/imgGroup2.svg";
const imgGroup300 = "/images/ind-auto-parts-engineering/imgGroup300.svg";

const ACCORDION_ROWS = [
  "Service Pages by Vertical",
  "Industry-Specific Pages",
  "Network & Coverage Map",
  "RFQ & Quote Forms",
  "Local & Pan-India SEO",
  "Compliance & Certifications",
];

const WHY_CARDS = [
  {
    title: "Industrial SEO Expertise",
    body: "We know what procurement managers search for — not just what has high search volume.",
    featured: true,
    icon: (
      <path d="M10.5 2.5 9 5.2a7.4 7.4 0 0 0-1.9.8L4.5 5 2.5 8.5l2.1 1.7a7.4 7.4 0 0 0 0 2L2.5 13.9l2 3.5 2.6-1a7.4 7.4 0 0 0 1.9.8l1.5 2.7h4l1.5-2.7a7.4 7.4 0 0 0 1.9-.8l2.6 1 2-3.5-2.1-1.7a7.4 7.4 0 0 0 0-2l2.1-1.7-2-3.5-2.6 1a7.4 7.4 0 0 0-1.9-.8L14.5 2.5h-4Z" />
    ),
  },
  {
    title: "Long Sales Cycle Design",
    body: "B2B buyers research for weeks. We design websites that nurture and convert across that journey.",
    icon: (
      <>
        <circle cx="6" cy="6" r="2.2" />
        <circle cx="18" cy="18" r="2.2" />
        <path d="M7.7 7.3 16.3 16.7" />
      </>
    ),
  },
  {
    title: "Sector Knowledge",
    body: "We speak the language of manufacturing — tolerances, MOQs, certifications, lead times — fluently.",
    icon: (
      <>
        <path d="M4 21V10l5-3v14M9 21V4l6 3v14M15 21v-9l5 3v6" />
      </>
    ),
  },
  {
    title: "Measurable Results",
    body: "Every project tracked: RFQs generated, keyword rankings, organic traffic, and conversion rate.",
    icon: (
      <>
        <path d="M4 20V10M11 20V4M18 20v-6" />
        <path d="M4 20h16" />
      </>
    ),
  },
];

export function LogisticsIndustrialPage() {
  return (
    <div className="bg-white relative w-[1920px] h-[3690px]">
      <PixelHeader activeHref="/industries" />

      {/* Hero */}
      <p className="absolute font-rajdhani font-semibold left-[162px] text-[#f4a31d] text-[20px] top-[207px] tracking-[-0.4px] uppercase">
        Logistics &amp; Industrial Suppliers
      </p>
      <p className="absolute font-days-one text-[#333] text-[50px] leading-[56.6px] left-[162px] top-[251px] tracking-[-1px] uppercase w-[900px]">
        Industrial Logistics Companies That Rank on Google Win Contracts Before Competitors Quote
      </p>
      <div className="absolute border-l-2 border-[#f4a31d] left-[162px] top-[565px] pl-6 w-[720px]">
        <p className="font-rajdhani font-semibold text-[#333] text-[20px] uppercase tracking-[-0.4px]">
          Whether you provide 3PL warehousing, industrial freight, CFS services, or supply chain solutions — your corporate clients search for logistics partners online. If you&apos;re not on page 1, you&apos;re not in the conversation.
        </p>
      </div>
      <Link href="/contact" className="absolute bg-[#f4a31d] block h-[88px] left-[162px] rounded-[64px] top-[700px] w-[304px] hover:opacity-90 transition-opacity">
        <div className="absolute border border-solid border-white inset-[7px] rounded-[52px]" />
        <p className="-translate-x-1/2 absolute font-rajdhani font-bold left-1/2 text-[23px] text-center text-white top-[29px] tracking-[-0.46px] uppercase whitespace-nowrap">
          Get Free Website Audit
        </p>
      </Link>
      <Link href="/our-work" className="absolute border border-[#333] border-solid content-stretch flex h-[88px] items-center justify-center left-[482px] px-[20px] py-[10px] rounded-[64px] top-[700px] hover:bg-[#333]/5 transition-colors">
        <p className="font-rajdhani font-bold text-[#333] text-[23px] text-center tracking-[-0.46px] uppercase whitespace-nowrap">
          See Examples
        </p>
      </Link>

      <div className="absolute bg-[#333] h-[100px] left-[1180px] top-[212px] w-[578px]">
        <div className="absolute bg-[#f4a31d] h-[100px] left-0 top-0 w-[10px]" />
        <p className="absolute font-days-one text-[#f4a31d] text-[38px] leading-[normal] left-[40px] top-[18px] tracking-[-0.76px]">$215B</p>
        <p className="absolute font-rajdhani font-medium text-[16px] text-white left-[40px] top-[68px] tracking-[-0.32px] uppercase">India Logistics Market Size</p>
      </div>
      <div className="absolute bg-[#333] h-[100px] left-[1180px] top-[324px] w-[578px]">
        <div className="absolute bg-[#f4a31d] h-[100px] left-0 top-0 w-[10px]" />
        <p className="absolute font-days-one text-[#f4a31d] text-[38px] leading-[normal] left-[40px] top-[18px] tracking-[-0.76px]">10.5%</p>
        <p className="absolute font-rajdhani font-medium text-[16px] text-white left-[40px] top-[68px] tracking-[-0.32px] uppercase">Annual Sector Growth</p>
      </div>
      <div className="absolute bg-[#333] h-[100px] left-[1180px] top-[436px] w-[578px]">
        <div className="absolute bg-[#f4a31d] h-[100px] left-0 top-0 w-[10px]" />
        <p className="absolute font-days-one text-[#f4a31d] text-[38px] leading-[normal] left-[40px] top-[18px] tracking-[-0.76px]">Page 1</p>
        <p className="absolute font-rajdhani font-medium text-[16px] text-white left-[40px] top-[68px] tracking-[-0.32px] uppercase">Where Your Clients Search for You</p>
      </div>
      <div className="absolute left-[1660px] size-[170px] top-[440px]">
        <Image alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse20} fill sizes="100vw" />
        <div className="absolute left-[5px] size-[159px] top-[6px]">
          <Image alt="ISO 9001:2015 certified badge" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgSadsaas1} fill sizes="100vw" />
        </div>
      </div>

      {/* Divider + icon strip */}
      <div className="absolute flex h-[6px] items-center justify-center left-0 top-[889px] w-[1920px]">
        <div className="bg-[#f4a31d] h-[6px] w-[1920px]" />
      </div>
      <div className="absolute bg-[#333] h-[106px] left-0 top-[894px] w-[1920px]" />
      <div className="absolute flex items-center gap-[10px] left-[80px] top-[928px]">
        <div className="absolute left-0 top-[-5px] w-[59px] h-[59px]">
          <Image alt="" className="absolute block inset-0 max-w-none object-contain size-full" src={imgGroup266} fill sizes="100vw" />
        </div>
        <p className="absolute font-rajdhani font-semibold text-[20px] text-white left-[75px] top-[8px] tracking-[-0.4px] uppercase whitespace-nowrap">Engineering Firm Web Design</p>
      </div>
      <div className="absolute flex items-center gap-[10px] left-[470px] top-[928px]">
        <div className="absolute left-0 top-[-2px] w-[60px] h-[54px]">
          <Image alt="" className="absolute block inset-0 max-w-none object-contain size-full" src={imgGroup267} fill sizes="100vw" />
        </div>
        <p className="absolute font-rajdhani font-semibold text-[20px] text-white left-[76px] top-[8px] tracking-[-0.4px] uppercase whitespace-nowrap">Web Design for Manufacturers</p>
      </div>
      <div className="absolute flex items-center gap-[10px] left-[900px] top-[928px]">
        <div className="absolute left-0 top-[-7px] w-[61px] h-[61px]">
          <Image alt="" className="absolute block inset-0 max-w-none object-contain size-full" src={imgOutline} fill sizes="100vw" />
        </div>
        <p className="absolute font-rajdhani font-semibold text-[20px] text-white left-[77px] top-[8px] tracking-[-0.4px] uppercase whitespace-nowrap">Industrial SEO Agency India</p>
      </div>
      <div className="absolute flex items-center gap-[10px] left-[1310px] top-[928px]">
        <div className="absolute left-0 top-[-7px] w-[57px] h-[69px]">
          <Image alt="" className="absolute block inset-0 max-w-none object-contain size-full" src={imgGroup268} fill sizes="100vw" />
        </div>
        <p className="absolute font-rajdhani font-semibold text-[20px] text-white left-[73px] top-[8px] tracking-[-0.4px] uppercase whitespace-nowrap">{`B2B Website Design & Development`}</p>
      </div>
      <div className="absolute flex items-center gap-[10px] left-[1780px] top-[928px]">
        <div className="absolute left-0 top-[-6px] w-[57px] h-[57px]">
          <Image alt="" className="absolute block inset-0 max-w-none object-contain size-full" src={imgGroup} fill sizes="100vw" />
        </div>
        <p className="absolute font-rajdhani font-semibold text-[20px] text-white left-[73px] top-[8px] tracking-[-0.4px] uppercase whitespace-nowrap">RFQ Form Design</p>
      </div>

      {/* What We Build */}
      <p className="absolute font-rajdhani font-semibold left-[162px] text-[#f4a31d] text-[20px] top-[1046px] tracking-[-0.4px] uppercase">
        What We Build
      </p>
      <p className="absolute font-days-one text-[#333] text-[42px] leading-[52px] left-[162px] top-[1089px] tracking-[-0.84px] uppercase w-[1200px]">
        B2B Digital Presence for Industrial Logistics &amp; Supply Chain Companies
      </p>
      <div className="absolute left-[1660px] top-[1046px] size-[170px]">
        <Image alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse20} fill sizes="100vw" />
        <div className="absolute left-[5px] top-[6px] size-[160px]">
          <Image alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse22} fill sizes="100vw" />
        </div>
        <div className="absolute left-[17px] top-[54px] w-[135px] h-[17px]">
          <Image alt="" className="absolute block inset-0 max-w-none object-contain size-full" src={imgGroup2} fill sizes="100vw" />
        </div>
        <p className="-translate-x-1/2 absolute font-rajdhani font-semibold left-1/2 text-[16px] text-center text-white top-[80px] tracking-[-0.32px] uppercase w-[130px]">
          (Shopify division of digital kangaroos)
        </p>
      </div>
      {ACCORDION_ROWS.map((label, i) => {
        const col = i % 2;
        const row = Math.floor(i / 2);
        const left = 162 + col * (798 + 30);
        const top = 1280 + row * 209;
        return (
          <div key={label} className="absolute bg-[#f5f5f5] w-[798px] h-[179px] px-[28px] py-[24px]" style={{ left, top }}>
            <p className="font-rajdhani font-semibold text-[#f4a31d] text-[20px] uppercase tracking-[-0.4px]">{`Deliverable ${String(i + 1).padStart(2, "0")}`}</p>
            <p className="font-days-one text-[#242832] text-[25px] leading-[30px] uppercase tracking-[-0.5px] w-[650px] mt-[16px]">{label}</p>
            <span className="absolute top-[20px] right-[28px] text-[#f4a31d] text-[40px] font-medium leading-none">+</span>
          </div>
        );
      })}

      {/* Why Digital Kangaroos */}
      <div className="absolute bg-[#f5f5f5] left-0 top-[2030px] w-[1920px] h-[620px]" />
      <p className="-translate-x-1/2 absolute font-rajdhani font-semibold left-1/2 text-[#f4a31d] text-[20px] top-[2090px] tracking-[-0.4px] uppercase whitespace-nowrap">
        Why Digital Kangaroos
      </p>
      <p className="-translate-x-1/2 absolute font-days-one text-[#333] text-[42px] leading-[52px] left-1/2 text-center top-[2133px] tracking-[-0.84px] uppercase w-[1100px]">
        We Understand B2B. We Understand Industrial. We Understand India.
      </p>
      <p className="-translate-x-1/2 absolute font-rajdhani text-[#535353] text-[18px] leading-[26px] left-1/2 text-center top-[2255px] w-[1300px]">
        {`We're not a generalist agency that accidentally does B2B work. We are exclusively focused on Indian manufacturers, exporters, and industrial service companies — which means we understand your buyers, your sales cycle, and what it takes to generate a qualified B2B lead from a website.`}
      </p>
      <div className="absolute left-[162px] top-[2370px] flex items-center gap-[30px]">
        {WHY_CARDS.map((card) => (
          <div
            key={card.title}
            className={`bg-white rounded-[64px] w-[420px] shadow-[0px_2px_12px_0px_rgba(0,0,0,0.06)] px-[28px] py-[32px] ${card.featured ? "border-t-4 border-[#f4a31d]" : ""}`}
          >
            <div className="size-[48px] rounded-[10px] bg-[#fdf1e0] flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="none" stroke="#f4a31d" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="size-[24px]">
                {card.icon}
              </svg>
            </div>
            <p className="font-days-one text-[#333] text-[20px] leading-[26px] tracking-[-0.4px] uppercase mt-[20px]">
              {card.title}
            </p>
            <p className="font-rajdhani text-[#535353] text-[16px] leading-[22px] mt-[12px]">
              {card.body}
            </p>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="absolute bg-[#f5f5f5] left-0 top-[2670px] w-[1920px] h-[520px]" />
      <p className="-translate-x-1/2 absolute font-days-one text-[#242832] text-[46px] leading-[56px] left-1/2 text-center top-[2750px] tracking-[-0.92px] w-[1100px]">
        Ready to Win More Logistics Contracts Through Your Website?
      </p>
      <p className="-translate-x-1/2 absolute font-rajdhani font-semibold text-[#535353] text-[20px] left-1/2 text-center top-[2940px] tracking-[-0.4px] uppercase w-[725px]">
        Free audit for industrial logistics and supply chain companies across India.
      </p>
      <div className="-translate-x-1/2 absolute flex items-center justify-center gap-[24px] left-1/2 top-[3030px]">
        <Link href="/contact" className="relative bg-[#f4a31d] block h-[88px] rounded-[64px] w-[304px] hover:opacity-90 transition-opacity">
          <div className="absolute border border-solid border-white inset-[7px] rounded-[52px]" />
          <p className="-translate-x-1/2 absolute font-rajdhani font-bold left-1/2 text-[23px] text-center text-white top-[29px] tracking-[-0.46px] uppercase whitespace-nowrap">
            Get Free Audit
          </p>
        </Link>
        <Link href="https://wa.me/919814820845" target="_blank" rel="noopener noreferrer" className="relative border border-[#333] border-solid flex h-[88px] items-center justify-center px-[36px] rounded-[64px] hover:bg-[#333]/5 transition-colors">
          <p className="font-rajdhani font-bold text-[#333] text-[23px] text-center tracking-[-0.46px] uppercase whitespace-nowrap">
            WhatsApp Us
          </p>
        </Link>
      </div>
      <div className="absolute left-[1660px] top-[2740px] size-[170px]">
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
