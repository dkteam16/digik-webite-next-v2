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
  "Logo Design & Visual Identity",
  "Brand Guidelines Document",
  "Company Profile / Capabilities Brochure",
  "Business Stationery & Collateral",
  "Social Media Brand Kit",
  "Exhibition & Trade Fair Materials",
];

export function B2BBrandingPage() {
  return (
    <div className="bg-white relative w-[1920px] h-[2900px]">
      <PixelHeader activeHref="/services" />

      {/* Hero */}
      <p className="absolute font-rajdhani font-semibold left-[162px] text-[#f4a31d] text-[20px] top-[140px] tracking-[-0.4px] uppercase">
        B2B Branding
      </p>
      <p className="absolute font-days-one text-[#333] text-[42px] leading-[52px] left-[162px] top-[183px] tracking-[-0.84px] uppercase w-[900px]">
        Brand Identity Built for Industrial Companies.
      </p>
      <div className="absolute border-l-2 border-[#f4a31d] left-[162px] top-[310px] pl-6 w-[720px]">
        <p className="font-rajdhani font-semibold text-[#333] text-[20px] uppercase tracking-[-0.4px]">
          We create brand identities for manufacturers, exporters, and B2B industrial companies that communicate capability, credibility, and seriousness — to buyers, partners, and procurement teams who make decisions based on trust.
        </p>
      </div>
      <Link href="/contact" className="absolute bg-[#f4a31d] block h-[88px] left-[162px] rounded-[64px] top-[450px] w-[304px] hover:opacity-90 transition-opacity">
        <div className="absolute border border-solid border-white inset-[7px] rounded-[52px]" />
        <p className="-translate-x-1/2 absolute font-rajdhani font-bold left-1/2 text-[23px] text-center text-white top-[29px] tracking-[-0.46px] uppercase whitespace-nowrap">
          Discuss Your Branding
        </p>
      </Link>
      <Link href="/our-work" className="absolute border border-[#333] border-solid content-stretch flex h-[88px] items-center justify-center left-[482px] px-[20px] py-[10px] rounded-[64px] top-[450px] hover:bg-[#333]/5 transition-colors">
        <p className="font-rajdhani font-bold text-[#333] text-[23px] text-center tracking-[-0.46px] uppercase whitespace-nowrap">
          See Brand Work
        </p>
      </Link>

      <div className="absolute bg-[#333] h-[95px] left-[1180px] top-[140px] w-[578px]">
        <div className="absolute bg-[#f4a31d] h-[95px] left-0 top-0 w-[10px]" />
        <p className="absolute font-days-one text-[#f4a31d] text-[38px] leading-[normal] left-[40px] top-[16px] tracking-[-0.76px]">B2B</p>
        <p className="absolute font-rajdhani font-medium text-[16px] text-white left-[40px] top-[64px] tracking-[-0.32px] uppercase">Industrial Branding Only</p>
      </div>
      <div className="absolute bg-[#333] h-[95px] left-[1180px] top-[247px] w-[578px]">
        <div className="absolute bg-[#f4a31d] h-[95px] left-0 top-0 w-[10px]" />
        <p className="absolute font-days-one text-[#f4a31d] text-[38px] leading-[normal] left-[40px] top-[16px] tracking-[-0.76px]">100%</p>
        <p className="absolute font-rajdhani font-medium text-[16px] text-white left-[40px] top-[64px] tracking-[-0.32px] uppercase">Owned by You</p>
      </div>
      <div className="absolute bg-[#333] h-[95px] left-[1180px] top-[354px] w-[578px]">
        <div className="absolute bg-[#f4a31d] h-[95px] left-0 top-0 w-[10px]" />
        <p className="absolute font-days-one text-[#f4a31d] text-[38px] leading-[normal] left-[40px] top-[16px] tracking-[-0.76px]">∞</p>
        <p className="absolute font-rajdhani font-medium text-[16px] text-white left-[40px] top-[64px] tracking-[-0.32px] uppercase">Formats Delivered</p>
      </div>
      <div className="absolute left-[1660px] size-[170px] top-[110px]">
        <Image alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse20} fill sizes="100vw" />
        <div className="absolute left-[5px] size-[159px] top-[6px]">
          <Image alt="ISO 9001:2015 certified badge" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgSadsaas1} fill sizes="100vw" />
        </div>
      </div>

      {/* Divider + icon strip */}
      <div className="absolute flex h-[6px] items-center justify-center left-0 top-[650px] w-[1920px]">
        <div className="bg-[#f4a31d] h-[6px] w-[1920px]" />
      </div>
      <div className="absolute bg-[#333] h-[106px] left-0 top-[655px] w-[1920px]" />
      <div className="absolute flex items-center gap-[10px] left-[80px] top-[689px]">
        <div className="absolute left-0 top-[-5px] w-[59px] h-[59px]">
          <Image alt="" className="absolute block inset-0 max-w-none object-contain size-full" src={imgGroup266} fill sizes="100vw" />
        </div>
        <p className="absolute font-rajdhani font-semibold text-[20px] text-white left-[75px] top-[8px] tracking-[-0.4px] uppercase whitespace-nowrap">Engineering Firm Web Design</p>
      </div>
      <div className="absolute flex items-center gap-[10px] left-[470px] top-[689px]">
        <div className="absolute left-0 top-[-2px] w-[60px] h-[54px]">
          <Image alt="" className="absolute block inset-0 max-w-none object-contain size-full" src={imgGroup267} fill sizes="100vw" />
        </div>
        <p className="absolute font-rajdhani font-semibold text-[20px] text-white left-[76px] top-[8px] tracking-[-0.4px] uppercase whitespace-nowrap">Web Design for Manufacturers</p>
      </div>
      <div className="absolute flex items-center gap-[10px] left-[900px] top-[689px]">
        <div className="absolute left-0 top-[-7px] w-[61px] h-[61px]">
          <Image alt="" className="absolute block inset-0 max-w-none object-contain size-full" src={imgOutline} fill sizes="100vw" />
        </div>
        <p className="absolute font-rajdhani font-semibold text-[20px] text-white left-[77px] top-[8px] tracking-[-0.4px] uppercase whitespace-nowrap">Industrial SEO Agency India</p>
      </div>
      <div className="absolute flex items-center gap-[10px] left-[1310px] top-[689px]">
        <div className="absolute left-0 top-[-7px] w-[57px] h-[69px]">
          <Image alt="" className="absolute block inset-0 max-w-none object-contain size-full" src={imgGroup268} fill sizes="100vw" />
        </div>
        <p className="absolute font-rajdhani font-semibold text-[20px] text-white left-[73px] top-[8px] tracking-[-0.4px] uppercase whitespace-nowrap">{`B2B Website Design & Development`}</p>
      </div>
      <div className="absolute flex items-center gap-[10px] left-[1780px] top-[689px]">
        <div className="absolute left-0 top-[-6px] w-[57px] h-[57px]">
          <Image alt="" className="absolute block inset-0 max-w-none object-contain size-full" src={imgGroup} fill sizes="100vw" />
        </div>
        <p className="absolute font-rajdhani font-semibold text-[20px] text-white left-[73px] top-[8px] tracking-[-0.4px] uppercase whitespace-nowrap">RFQ Form Design</p>
      </div>

      {/* Why Branding Matters */}
      <p className="absolute font-rajdhani font-semibold left-[162px] text-[#f4a31d] text-[20px] top-[850px] tracking-[-0.4px] uppercase">
        Why Branding Matters
      </p>
      <p className="absolute font-days-one text-[#333] text-[42px] leading-[52px] left-[162px] top-[893px] tracking-[-0.84px] uppercase w-[1000px]">
        Your Identity Is the First Impression You Make. <span className="text-[#f4a31d]">Is It Working?</span>
      </p>
      <div className="absolute left-[1660px] top-[850px] size-[170px]">
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
        const top = 1050 + row * 209;
        return (
          <div key={label} className="absolute bg-[#f5f5f5] w-[798px] h-[179px] px-[28px] py-[24px]" style={{ left, top }}>
            <p className="font-rajdhani font-semibold text-[#f4a31d] text-[20px] uppercase tracking-[-0.4px]">{`Deliverable ${String(i + 1).padStart(2, "0")}`}</p>
            <p className="font-days-one text-[#242832] text-[25px] leading-[30px] uppercase tracking-[-0.5px] w-[650px] mt-[16px]">{label}</p>
            <span className="absolute top-[20px] right-[28px] text-[#f4a31d] text-[40px] font-medium leading-none">+</span>
          </div>
        );
      })}

      {/* CTA */}
      <div className="absolute bg-[#f5f5f5] left-0 top-[1810px] w-[1920px] h-[590px]" />
      <p className="-translate-x-1/2 absolute font-days-one text-[#242832] text-[46px] leading-[56px] left-1/2 text-center top-[1910px] tracking-[-0.92px] w-[1000px]">
        Your Brand Is the First Thing a Buyer Judges You By.
      </p>
      <p className="-translate-x-1/2 absolute font-rajdhani text-[#535353] text-[18px] leading-[26px] left-1/2 text-center top-[2060px] w-[1200px]">
        A credible, professional brand identity isn&apos;t a luxury for industrial companies — it&apos;s a prerequisite for being taken seriously by international buyers. Let&apos;s build yours properly.
      </p>
      <Link href="/contact" className="-translate-x-1/2 absolute bg-[#f4a31d] block h-[88px] left-1/2 rounded-[64px] top-[2160px] w-[360px] hover:opacity-90 transition-opacity">
        <div className="absolute border border-solid border-white inset-[7px] rounded-[52px]" />
        <p className="-translate-x-1/2 absolute font-rajdhani font-bold left-1/2 text-[23px] text-center text-white top-[29px] tracking-[-0.46px] uppercase whitespace-nowrap">
          Discuss Your Branding Project
        </p>
      </Link>
      <p className="-translate-x-1/2 absolute font-rajdhani text-[#535353] text-[16px] left-1/2 text-center top-[2280px] uppercase tracking-[-0.32px] whitespace-nowrap">
        Free Consultation · No Obligation
      </p>
      <div className="absolute left-[1660px] top-[1910px] size-[170px]">
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
