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
  "SKU-Level Product Pages",
  "Standard & Grade Pages",
  "Coating & Material Pages",
  "Instant RFQ Form",
];

const PROBLEM_ITEMS = [
  {
    n: "1.",
    body: "No indexed product pages for specific fastener types, grades, or standards — so Google can't rank you for specific search terms",
    featured: true,
  },
  {
    n: "2.",
    body: "International buyers can't find technical specs, certifications, or coating options without calling",
  },
  {
    n: "3.",
    body: `Not appearing on Google when buyers search "M8 hex bolt manufacturer India" or "stainless steel fastener exporter"`,
  },
  {
    n: "4.",
    body: "No RFQ system — buyers who can't reach you by phone move to the next supplier immediately",
  },
];

const KEYWORDS_ROW1 = [
  "Fastener Manufacturer India",
  "Nut Bolt Exporter India",
  "Hex Bolt Manufacturer Punjab",
  "Stainless Steel Fastener Supplier",
  "DIN 931 Bolt Manufacturer India",
];
const KEYWORDS_ROW2 = [
  "Industrial Fastener Exporter",
  "Anchor Bolt Supplier India",
  "Wholesale Nut Bolt Manufacturer",
  "Hardware Supplier Website India",
  "B2B Fastener Website Design",
];

export function FastenersHardwarePage() {
  return (
    <div className="bg-white relative w-[1920px] h-[3372px]">
      <PixelHeader activeHref="/industries" />

      {/* Hero */}
      <p className="absolute font-rajdhani font-semibold left-[162px] text-[#f4a31d] text-[20px] top-[207px] tracking-[-0.4px] uppercase">
        Fasteners, Nut-Bolt &amp; Industrial Hardware Manufacturers
      </p>
      <p className="absolute font-days-one text-[#333] text-[50px] leading-[56.6px] left-[162px] top-[251px] tracking-[-1px] uppercase w-[796px]">
        A World-Class Fastener Website Wins Orders Faster
      </p>
      <div className="absolute border-l-2 border-[#f4a31d] left-[162px] top-[460px] pl-6 w-[720px]">
        <p className="font-rajdhani font-semibold text-[#333] text-[20px] uppercase tracking-[-0.4px]">
          {`India's fastener industry exports to 80+ countries. But most manufacturers win these orders through personal relationships and trade fairs — a model that breaks down the moment a new international buyer searches for you on Google and finds nothing.`}
        </p>
      </div>
      <Link href="/contact" className="absolute bg-[#f4a31d] block h-[88px] left-[162px] rounded-[16px] top-[610px] w-[304px] hover:opacity-90 transition-opacity">
        <div className="absolute border border-solid border-white inset-[7px] rounded-[13px]" />
        <p className="-translate-x-1/2 absolute font-rajdhani font-bold left-1/2 text-[23px] text-center text-white top-[29px] tracking-[-0.46px] uppercase whitespace-nowrap">
          Get Free Website Audit
        </p>
      </Link>
      <Link href="/our-work" className="absolute border border-[#333] border-solid content-stretch flex h-[88px] items-center justify-center left-[482px] px-[20px] py-[10px] rounded-[16px] top-[610px] hover:bg-[#333]/5 transition-colors">
        <p className="font-rajdhani font-bold text-[#333] text-[23px] text-center tracking-[-0.46px] uppercase whitespace-nowrap">
          See Industry Examples
        </p>
      </Link>

      <div className="absolute bg-[#333] h-[100px] left-[1180px] top-[212px] w-[578px]">
        <div className="absolute bg-[#f4a31d] h-[100px] left-0 top-0 w-[10px]" />
        <p className="absolute font-days-one text-[#f4a31d] text-[38px] leading-[normal] left-[40px] top-[18px] tracking-[-0.76px]">$3.2B</p>
        <p className="absolute font-rajdhani font-medium text-[16px] text-white left-[40px] top-[68px] tracking-[-0.32px] uppercase">India Fastener Exports Annually</p>
      </div>
      <div className="absolute bg-[#333] h-[100px] left-[1180px] top-[324px] w-[578px]">
        <div className="absolute bg-[#f4a31d] h-[100px] left-0 top-0 w-[10px]" />
        <p className="absolute font-days-one text-[#f4a31d] text-[38px] leading-[normal] left-[40px] top-[18px] tracking-[-0.76px]">80+</p>
        <p className="absolute font-rajdhani font-medium text-[16px] text-white left-[40px] top-[68px] tracking-[-0.32px] uppercase">Countries India Exports Fasteners To</p>
      </div>
      <div className="absolute bg-[#333] h-[100px] left-[1180px] top-[436px] w-[578px]">
        <div className="absolute bg-[#f4a31d] h-[100px] left-0 top-0 w-[10px]" />
        <p className="absolute font-days-one text-[#f4a31d] text-[38px] leading-[normal] left-[40px] top-[18px] tracking-[-0.76px]">5%</p>
        <p className="absolute font-rajdhani font-medium text-[16px] text-white left-[40px] top-[68px] tracking-[-0.32px] uppercase">Manufacturers With Good Websites</p>
      </div>
      <div className="absolute left-[1660px] size-[170px] top-[440px]">
        <Image alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse20} fill sizes="100vw" />
        <div className="absolute left-[5px] size-[159px] top-[6px]">
          <Image alt="ISO 9001:2015 certified badge" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgSadsaas1} fill sizes="100vw" />
        </div>
      </div>

      {/* Divider + icon strip */}
      <div className="absolute flex h-[6px] items-center justify-center left-0 top-[700px] w-[1920px]">
        <div className="bg-[#f4a31d] h-[6px] w-[1920px]" />
      </div>
      <div className="absolute bg-[#333] h-[106px] left-0 top-[705px] w-[1920px]" />
      <div className="absolute flex items-center gap-[10px] left-[80px] top-[739px]">
        <div className="absolute left-0 top-[-5px] w-[59px] h-[59px]">
          <Image alt="" className="absolute block inset-0 max-w-none object-contain size-full" src={imgGroup266} fill sizes="100vw" />
        </div>
        <p className="absolute font-rajdhani font-semibold text-[20px] text-white left-[75px] top-[8px] tracking-[-0.4px] uppercase whitespace-nowrap">Engineering Firm Web Design</p>
      </div>
      <div className="absolute flex items-center gap-[10px] left-[470px] top-[739px]">
        <div className="absolute left-0 top-[-2px] w-[60px] h-[54px]">
          <Image alt="" className="absolute block inset-0 max-w-none object-contain size-full" src={imgGroup267} fill sizes="100vw" />
        </div>
        <p className="absolute font-rajdhani font-semibold text-[20px] text-white left-[76px] top-[8px] tracking-[-0.4px] uppercase whitespace-nowrap">Web Design for Manufacturers</p>
      </div>
      <div className="absolute flex items-center gap-[10px] left-[900px] top-[739px]">
        <div className="absolute left-0 top-[-7px] w-[61px] h-[61px]">
          <Image alt="" className="absolute block inset-0 max-w-none object-contain size-full" src={imgOutline} fill sizes="100vw" />
        </div>
        <p className="absolute font-rajdhani font-semibold text-[20px] text-white left-[77px] top-[8px] tracking-[-0.4px] uppercase whitespace-nowrap">Industrial SEO Agency India</p>
      </div>
      <div className="absolute flex items-center gap-[10px] left-[1310px] top-[739px]">
        <div className="absolute left-0 top-[-7px] w-[57px] h-[69px]">
          <Image alt="" className="absolute block inset-0 max-w-none object-contain size-full" src={imgGroup268} fill sizes="100vw" />
        </div>
        <p className="absolute font-rajdhani font-semibold text-[20px] text-white left-[73px] top-[8px] tracking-[-0.4px] uppercase whitespace-nowrap">{`B2B Website Design & Development`}</p>
      </div>
      <div className="absolute flex items-center gap-[10px] left-[1780px] top-[739px]">
        <div className="absolute left-0 top-[-6px] w-[57px] h-[57px]">
          <Image alt="" className="absolute block inset-0 max-w-none object-contain size-full" src={imgGroup} fill sizes="100vw" />
        </div>
        <p className="absolute font-rajdhani font-semibold text-[20px] text-white left-[73px] top-[8px] tracking-[-0.4px] uppercase whitespace-nowrap">RFQ Form Design</p>
      </div>

      {/* The Core Problem */}
      <p className="absolute font-rajdhani font-semibold left-[162px] text-[#f4a31d] text-[20px] top-[850px] tracking-[-0.4px] uppercase">
        The Core Problem
      </p>
      <p className="-translate-x-1/2 absolute font-days-one text-[#333] text-[42px] leading-[52px] left-1/2 text-center top-[893px] tracking-[-0.84px] uppercase w-[1200px]">
        Your Product Range Is Huge. Your Website Shows Almost None of It.
      </p>
      {ACCORDION_ROWS.map((label, i) => {
        const col = i % 2;
        const row = Math.floor(i / 2);
        const left = 162 + col * (798 + 30);
        const top = 1040 + row * 209;
        return (
          <div key={label} className="absolute bg-[#f5f5f5] w-[798px] h-[179px] px-[28px] py-[24px]" style={{ left, top }}>
            <p className="font-rajdhani font-semibold text-[#f4a31d] text-[20px] uppercase tracking-[-0.4px]">{`Deliverable ${String(i + 1).padStart(2, "0")}`}</p>
            <p className="font-days-one text-[#242832] text-[25px] leading-[30px] uppercase tracking-[-0.5px] w-[650px] mt-[16px]">{label}</p>
            <span className="absolute top-[20px] right-[28px] text-[#f4a31d] text-[40px] font-medium leading-none">+</span>
          </div>
        );
      })}
      {PROBLEM_ITEMS.map((item, i) => (
        <div
          key={item.n}
          className={`absolute bg-[#f5f5f5] rounded-[16px] w-[420px] h-[230px] ${item.featured ? "border-t-4 border-[#f4a31d]" : ""}`}
          style={{ left: 162 + i * 450, top: 1496 }}
        >
          <div className="absolute border border-[#f4a31d] border-solid left-[32px] top-[32px] size-[61px] flex items-center justify-center">
            <p className="font-days-one text-[#f4a31d] text-[28px]">{item.n}</p>
          </div>
          <p className="absolute font-rajdhani font-medium text-[#333] text-[18px] leading-[26px] left-[32px] top-[118px] tracking-[-0.36px] uppercase w-[356px]">
            {item.body}
          </p>
        </div>
      ))}

      {/* SEO Keywords */}
      <div className="absolute bg-[#f5f5f5] left-0 top-[1796px] w-[1920px] h-[446px]" />
      <p className="absolute font-rajdhani font-semibold left-[162px] text-[#f4a31d] text-[20px] top-[1856px] tracking-[-0.4px] uppercase">
        SEO Keywords We Target
      </p>
      <p className="absolute font-days-one text-[#333] text-[42px] leading-[52px] left-[162px] top-[1899px] tracking-[-0.84px] uppercase w-[1100px]">
        How Fastener Buyers Search – and How We Get You Found
      </p>
      <div className="absolute left-[1660px] top-[1856px] size-[170px]">
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
      <div className="absolute left-[162px] top-[2086px] flex flex-wrap gap-[16px] w-[1596px]">
        {KEYWORDS_ROW1.map((kw, i) => (
          <div key={kw} className={`bg-white rounded-[10px] px-[20px] py-[14px] ${i === 1 ? "border border-[#f4a31d]" : ""}`}>
            <p className={`font-rajdhani font-semibold text-[18px] whitespace-nowrap ${i === 1 ? "text-[#f4a31d]" : "text-[#535353]"}`}>{kw}</p>
          </div>
        ))}
      </div>
      <div className="absolute left-[162px] top-[2156px] flex flex-wrap gap-[16px] w-[1596px]">
        {KEYWORDS_ROW2.map((kw) => (
          <div key={kw} className="bg-white rounded-[10px] px-[20px] py-[14px]">
            <p className="font-rajdhani font-semibold text-[18px] text-[#535353] whitespace-nowrap">{kw}</p>
          </div>
        ))}
      </div>

      {/* CTA */}
      <p className="-translate-x-1/2 absolute font-days-one text-[#242832] text-[46px] leading-[56px] left-1/2 text-center top-[2380px] tracking-[-0.92px] w-[1000px]">
        Ready to Replace IndiaMart With <span className="text-[#f4a31d]">Your Own Lead Machine?</span>
      </p>
      <p className="-translate-x-1/2 absolute font-rajdhani font-semibold text-[#535353] text-[20px] left-1/2 text-center top-[2540px] tracking-[-0.4px] uppercase w-[725px]">
        Free website and SEO audit for fastener and hardware manufacturers.
      </p>
      <Link href="/contact" className="absolute bg-[#f4a31d] block h-[88px] left-[calc(50%-160px)] rounded-[16px] top-[2630px] w-[304px] hover:opacity-90 transition-opacity">
        <div className="absolute border border-solid border-white inset-[7px] rounded-[13px]" />
        <p className="-translate-x-1/2 absolute font-rajdhani font-bold left-1/2 text-[23px] text-center text-white top-[29px] tracking-[-0.46px] uppercase whitespace-nowrap">
          Get Free Website Audit
        </p>
      </Link>
      <Link href="https://wa.me/919814820845" target="_blank" rel="noopener noreferrer" className="absolute border border-[#333] border-solid content-stretch flex h-[88px] items-center justify-center left-[calc(50%+164px)] px-[20px] py-[10px] rounded-[16px] top-[2630px] hover:bg-[#333]/5 transition-colors">
        <p className="font-rajdhani font-bold text-[#333] text-[23px] text-center tracking-[-0.46px] uppercase whitespace-nowrap">
          WhatsApp Us
        </p>
      </Link>
      <div className="absolute left-[1660px] top-[2380px] size-[170px]">
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
