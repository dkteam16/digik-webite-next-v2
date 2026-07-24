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

const OPPORTUNITY_ITEMS = [
  {
    n: "1.",
    body: `Invisible to international buyers searching "cycle parts manufacturer India"`,
    featured: true,
  },
  { n: "2.", body: "No product catalogue showing your full range of cycle components" },
  { n: "3.", body: "Website not designed to earn trust from US, EU, or African importers" },
  { n: "4.", body: "Dependent on trade fairs like Eurobike for all international enquiries" },
];

// Uses the correct unique copy for this shared content-strategy component
// (verified against the same section's real Figma data fetched for the
// Auto Parts & Engineering page) rather than the mismatched heading/body
// text visible in the screenshot export, which looks like a copy-paste
// error in the source design (heading read "Fasteners & Hardware" and
// descriptions duplicated the opportunity list above verbatim).
const FOUND_ITEMS = [
  {
    n: "1.",
    title: "Buyer Keyword Research",
    body: "We identify exactly how European, American, and African cycle importers search for Indian suppliers.",
    featured: true,
  },
  {
    n: "2.",
    title: "Product Page SEO",
    body: `Every product category gets its own optimised page — not just a generic "products" page.`,
  },
  {
    n: "3.",
    title: "International SEO",
    body: "Hreflang tags, country-targeting, and region-specific content to rank in your target export markets.",
  },
  {
    n: "4.",
    title: "Export-Focused Content",
    body: `Blog content targeting "cycle parts supplier India for export", "OEM cycle manufacturer Ludhiana" etc.`,
  },
];

const ACCORDION_ROWS = [
  "Component Catalogue Website",
  "Export Buyer Pages",
  "Sports Equipment SEO",
  "RFQ & Sample Request Forms",
];

export function CycleSportsEquipmentPage() {
  return (
    <div className="bg-white relative w-[1920px] h-[4120px]">
      <PixelHeader activeHref="/industries" />

      {/* Hero */}
      <p className="absolute font-rajdhani font-semibold left-[162px] text-[#f4a31d] text-[20px] top-[207px] tracking-[-0.4px] uppercase">
        Cycle Parts &amp; Sports Equipment Manufacturers
      </p>
      <p className="absolute font-days-one text-[#333] text-[50px] leading-[56.6px] left-[162px] top-[251px] tracking-[-1px] uppercase w-[796px]">
        The Ludhiana Cycle Cluster Deserves a World-Class Digital Presence
      </p>
      <div className="absolute border-l-2 border-[#f4a31d] left-[162px] top-[565px] pl-6 w-[720px]">
        <p className="font-rajdhani font-semibold text-[#333] text-[20px] uppercase tracking-[-0.4px]">
          Ludhiana manufactures 70% of India&apos;s cycles and cycle parts — yet most manufacturers in the cluster are invisible online to the global buyers who want to source from them. We fix that.
        </p>
      </div>
      <Link href="/contact" className="absolute bg-[#f4a31d] block h-[88px] left-[162px] rounded-[64px] top-[700px] w-[304px] hover:opacity-90 transition-opacity">
        <div className="absolute border border-solid border-white inset-[7px] rounded-[52px]" />
        <p className="-translate-x-1/2 absolute font-rajdhani font-bold left-1/2 text-[23px] text-center text-white top-[29px] tracking-[-0.46px] uppercase whitespace-nowrap">
          Get Free Audit
        </p>
      </Link>
      <Link href="/our-work" className="absolute border border-[#333] border-solid content-stretch flex h-[88px] items-center justify-center left-[482px] px-[20px] py-[10px] rounded-[64px] top-[700px] hover:bg-[#333]/5 transition-colors">
        <p className="font-rajdhani font-bold text-[#333] text-[23px] text-center tracking-[-0.46px] uppercase whitespace-nowrap">
          View Our Work
        </p>
      </Link>

      <div className="absolute bg-[#333] h-[142px] left-[1180px] top-[212px] w-[578px]">
        <div className="absolute bg-[#f4a31d] h-[142px] left-0 top-0 w-[10px]" />
        <p className="absolute font-days-one text-[#f4a31d] text-[45px] leading-[normal] left-[40px] top-[30px] tracking-[-0.9px]">70%</p>
        <p className="absolute font-rajdhani font-medium text-[16px] text-white left-[40px] top-[95px] tracking-[-0.32px] uppercase">{`India's Cycles Made in Ludhiana`}</p>
      </div>
      <div className="absolute bg-[#333] h-[142px] left-[1180px] top-[364px] w-[578px]">
        <div className="absolute bg-[#f4a31d] h-[142px] left-0 top-0 w-[10px]" />
        <p className="absolute font-days-one text-[#f4a31d] text-[45px] leading-[normal] left-[40px] top-[30px] tracking-[-0.9px]">0%</p>
        <p className="absolute font-rajdhani font-medium text-[16px] text-white left-[40px] top-[95px] tracking-[-0.32px] uppercase">Cluster Online Visibility (Typical)</p>
      </div>
      <div className="absolute bg-[#333] h-[142px] left-[1180px] top-[516px] w-[578px]">
        <div className="absolute bg-[#f4a31d] h-[142px] left-0 top-0 w-[10px]" />
        <p className="absolute font-days-one text-[#f4a31d] text-[45px] leading-[normal] left-[40px] top-[30px] tracking-[-0.9px]">5X</p>
        <p className="absolute font-rajdhani font-medium text-[16px] text-white left-[40px] top-[95px] tracking-[-0.32px] uppercase">Export Inquiry Growth We Target</p>
      </div>
      <div className="absolute left-[1660px] size-[170px] top-[130px]">
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

      {/* The Opportunity */}
      <p className="absolute font-rajdhani font-semibold left-[162px] text-[#f4a31d] text-[20px] top-[1050px] tracking-[-0.4px] uppercase">
        The Opportunity
      </p>
      <p className="absolute font-days-one text-[#333] text-[42px] leading-[52px] left-[162px] top-[1093px] tracking-[-0.84px] uppercase w-[1000px]">
        Global Buyers Are Searching for You. They Just Can&apos;t Find You.
      </p>
      <p className="absolute font-rajdhani text-[#535353] text-[18px] leading-[26px] left-[162px] top-[1224px] w-[1300px]">
        Cycle importers in Europe, the US, Africa, and the Middle East actively search Google for Indian cycle parts suppliers and sports equipment manufacturers. They want to reduce dependence on Chinese manufacturers and source from India — but they find your competitors, not you, because your competitors have better websites and SEO.
      </p>
      <p className="absolute font-rajdhani text-[#535353] text-[18px] leading-[26px] left-[162px] top-[1290px] w-[1300px]">
        The good news: the Ludhiana cycle cluster is relatively uncrowded online. If we build your website and SEO right now, you can rank on page 1 for high-value international buyer search terms before the window closes.
      </p>
      <div className="absolute left-[1660px] top-[1086px] size-[170px]">
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

      {OPPORTUNITY_ITEMS.map((item, i) => (
        <div
          key={item.n}
          className={`absolute bg-[#f5f5f5] rounded-[64px] w-[420px] h-[230px] ${item.featured ? "border-t-4 border-[#f4a31d]" : ""}`}
          style={{ left: 162 + i * 450, top: 1436 }}
        >
          <div className="absolute border border-[#f4a31d] border-solid left-[32px] top-[32px] size-[61px] flex items-center justify-center">
            <p className="font-days-one text-[#f4a31d] text-[28px]">{item.n}</p>
          </div>
          <p className="absolute font-rajdhani font-medium text-[#333] text-[18px] leading-[26px] left-[32px] top-[118px] tracking-[-0.36px] uppercase w-[356px]">
            {item.body}
          </p>
        </div>
      ))}

      {/* Quote */}
      <div className="absolute bg-[#333] rounded-[64px] left-[162px] top-[1724px] w-[1600px] h-[186px]">
        <div className="absolute bg-[#f4a31d] left-0 top-[24px] w-[6px] h-[138px]" />
        <p className="absolute font-rajdhani font-semibold text-[#f4a31d] text-[20px] leading-[28px] left-[48px] top-[36px] w-[1500px]">
          {`"Before Digital Kangaroos, we got zero direct enquiries from international buyers online. Within four months of the new website going live, we had three serious European importers contact us directly through our website."`}
        </p>
        <p className="absolute font-rajdhani text-white text-[16px] left-[48px] top-[136px] tracking-[-0.32px] uppercase">
          — Cycle Parts Manufacturer, Ludhiana Industrial Area
        </p>
      </div>

      {/* Accordion */}
      {ACCORDION_ROWS.map((label, i) => {
        const col = i % 2;
        const row = Math.floor(i / 2);
        const left = 162 + col * (798 + 30);
        const top = 1970 + row * 209;
        return (
          <div key={label} className="absolute bg-[#f5f5f5] w-[798px] h-[179px] px-[28px] py-[24px]" style={{ left, top }}>
            <p className="font-rajdhani font-semibold text-[#f4a31d] text-[20px] uppercase tracking-[-0.4px]">{`Deliverable ${String(i + 1).padStart(2, "0")}`}</p>
            <p className="font-days-one text-[#242832] text-[25px] leading-[30px] uppercase tracking-[-0.5px] w-[650px] mt-[16px]">{label}</p>
            <span className="absolute top-[20px] right-[28px] text-[#f4a31d] text-[40px] font-medium leading-none">+</span>
          </div>
        );
      })}

      {/* Content & SEO Strategy */}
      <div className="absolute bg-[#f5f5f5] left-0 top-[2492px] w-[1920px] h-[532px]" />
      <p className="absolute font-rajdhani font-semibold left-[162px] text-[#f4a31d] text-[20px] top-[2580px] tracking-[-0.4px] uppercase">
        Content &amp; SEO Strategy
      </p>
      <p className="absolute font-days-one text-[#333] text-[42px] leading-[52px] left-[162px] top-[2626px] tracking-[-0.84px] uppercase w-[1000px]">
        How We Get You Found by Global Cycle Buyers
      </p>
      <div className="absolute left-[162px] top-[2766px] flex items-center gap-[30px]">
        {FOUND_ITEMS.map((item) => (
          <div
            key={item.n}
            className={`bg-white rounded-[64px] w-[420px] px-[28px] py-[28px] ${item.featured ? "border-t-4 border-[#f4a31d]" : ""}`}
          >
            <div className="border border-[#f4a31d] border-solid size-[52px] flex items-center justify-center">
              <p className="font-days-one text-[#f4a31d] text-[24px]">{item.n}</p>
            </div>
            <p className="font-days-one text-[#333] text-[20px] leading-[26px] tracking-[-0.4px] uppercase mt-[18px]">
              {item.title}
            </p>
            <p className="font-rajdhani text-[#535353] text-[16px] leading-[22px] mt-[10px]">
              {item.body}
            </p>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="absolute bg-[#f5f5f5] left-0 top-[3100px] w-[1920px] h-[520px]" />
      <p className="-translate-x-1/2 absolute font-days-one text-[#242832] text-[50px] leading-[60px] left-1/2 text-center top-[3174px] tracking-[-1px] w-[1100px]">
        {`Let's Put Ludhiana's Cycle Cluster on the Global Map`}
      </p>
      <p className="-translate-x-1/2 absolute font-rajdhani font-semibold text-[#535353] text-[20px] left-1/2 text-center top-[3334px] tracking-[-0.4px] uppercase w-[725px]">
        Free website audit for cycle and sports equipment manufacturers. No commitment, just clarity.
      </p>
      <div className="-translate-x-1/2 absolute flex items-center justify-center gap-[24px] left-1/2 top-[3434px]">
        <Link href="/contact" className="relative bg-[#f4a31d] block h-[88px] rounded-[64px] w-[304px] hover:opacity-90 transition-opacity">
          <div className="absolute border border-solid border-white inset-[7px] rounded-[52px]" />
          <p className="-translate-x-1/2 absolute font-rajdhani font-bold left-1/2 text-[23px] text-center text-white top-[29px] tracking-[-0.46px] uppercase whitespace-nowrap">
            Get Free Audit
          </p>
        </Link>
        <Link href="tel:+919814820845" className="relative border border-[#333] border-solid flex h-[88px] items-center justify-center px-[36px] rounded-[64px] hover:bg-[#333]/5 transition-colors">
          <p className="font-rajdhani font-bold text-[#333] text-[23px] text-center tracking-[-0.46px] uppercase whitespace-nowrap">
            Call Us Now
          </p>
        </Link>
      </div>
      <div className="absolute left-[1660px] top-[3150px] size-[170px]">
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
