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

const CHECK_ITEMS = [
  "Product Photography",
  "Factory & Capacity",
  "Certifications",
  "MOQ & Customisation",
  "Export Experience",
  "Easy RFQ Process",
];

const ACCORDION_ROWS = [
  "Visual Product Catalogue",
  "Certifications Showcase",
  "Sample Request Forms",
  "Export SEO Strategy",
];

export function HosieryTextileExportersPage() {
  return (
    <div className="bg-white relative w-[1920px] h-[3420px]">
      <PixelHeader activeHref="/industries" />

      {/* Hero */}
      <p className="absolute font-rajdhani font-semibold left-[162px] text-[#f4a31d] text-[20px] top-[207px] tracking-[-0.4px] uppercase">
        Hosiery, Knitwear &amp; Textile Exporters
      </p>
      <p className="absolute font-days-one text-[#333] text-[50px] leading-[56.6px] left-[162px] top-[251px] tracking-[-1px] uppercase w-[796px]">
        Your Knitwear Quality Is World-Class. Your Website Should Prove It to Overseas Buyers.
      </p>
      <div className="absolute border-l-2 border-[#f4a31d] left-[162px] top-[565px] pl-6 w-[720px]">
        <p className="font-rajdhani font-semibold text-[#333] text-[20px] uppercase tracking-[-0.4px]">
          Hosiery and textile exporters in Ludhiana, Tirupur, and across India are losing export orders to competitors who look more professional online — not because they produce better quality, but because their website says so.
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
          See What We Build
        </p>
      </Link>

      <div className="absolute bg-[#333] h-[142px] left-[1180px] top-[212px] w-[578px]">
        <div className="absolute bg-[#f4a31d] h-[142px] left-0 top-0 w-[10px]" />
        <p className="absolute font-days-one text-[#f4a31d] text-[42px] leading-[normal] left-[40px] top-[30px] tracking-[-0.84px]">₹28,000 Cr</p>
        <p className="absolute font-rajdhani font-medium text-[16px] text-white left-[40px] top-[95px] tracking-[-0.32px] uppercase">Ludhiana Hosiery Annual Output</p>
      </div>
      <div className="absolute bg-[#333] h-[142px] left-[1180px] top-[364px] w-[578px]">
        <div className="absolute bg-[#f4a31d] h-[142px] left-0 top-0 w-[10px]" />
        <p className="absolute font-days-one text-[#f4a31d] text-[45px] leading-[normal] left-[40px] top-[30px] tracking-[-0.9px]">60+</p>
        <p className="absolute font-rajdhani font-medium text-[16px] text-white left-[40px] top-[95px] tracking-[-0.32px] uppercase">Export Markets for Indian Knitwear</p>
      </div>
      <div className="absolute bg-[#333] h-[142px] left-[1180px] top-[516px] w-[578px]">
        <div className="absolute bg-[#f4a31d] h-[142px] left-0 top-0 w-[10px]" />
        <p className="absolute font-days-one text-[#f4a31d] text-[45px] leading-[normal] left-[40px] top-[30px] tracking-[-0.9px]">92%</p>
        <p className="absolute font-rajdhani font-medium text-[16px] text-white left-[40px] top-[95px] tracking-[-0.32px] uppercase">Exporters With No Serious Website</p>
      </div>
      <div className="absolute left-[1660px] size-[170px] top-[540px]">
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

      {/* What Textile Buyers Look For */}
      <p className="absolute font-rajdhani font-semibold left-[162px] text-[#f4a31d] text-[20px] top-[1046px] tracking-[-0.4px] uppercase">
        What Textile Buyers Look for Online
      </p>
      <p className="absolute font-days-one text-[#333] text-[42px] leading-[52px] left-[162px] top-[1089px] tracking-[-0.84px] uppercase w-[1300px]">
        A Garment Buyer in Paris or New York Checks These 7 Things Before Emailing You
      </p>
      {CHECK_ITEMS.map((label, i) => {
        const col = i % 3;
        const row = Math.floor(i / 3);
        const left = 162 + col * (533 + 30);
        const top = 1264 + row * 94;
        const featured = i === 0;
        return (
          <div
            key={label}
            className={`absolute bg-[#f5f5f5] w-[533px] h-[78px] flex items-center justify-between px-[24px] ${featured ? "border-t-4 border-[#f4a31d]" : "border-t border-[#f4a31d]/40"}`}
            style={{ left, top }}
          >
            <div>
              <p className="font-rajdhani font-semibold text-[#f4a31d] text-[14px]">{i + 1}.</p>
              <p className="font-rajdhani font-bold text-[#333] text-[22px] uppercase tracking-[-0.44px]">{label}</p>
            </div>
            <span className="text-[#f4a31d] text-[26px] font-light leading-none">+</span>
          </div>
        );
      })}

      {/* Our Solution */}
      <div className="absolute bg-[#f5f5f5] left-0 top-[1560px] w-[1920px] h-[768px]" />
      <p className="absolute font-rajdhani font-semibold left-[162px] text-[#f4a31d] text-[20px] top-[1620px] tracking-[-0.4px] uppercase">
        Our Solution
      </p>
      <p className="absolute font-days-one text-[#333] text-[42px] leading-[52px] left-[162px] top-[1663px] tracking-[-0.84px] uppercase w-[1000px]">
        We Build Textile Export Websites That Tick Every Box
      </p>
      <p className="absolute font-rajdhani text-[#535353] text-[18px] leading-[26px] left-[162px] top-[1800px] w-[1300px]">
        From the product catalogue to the enquiry form, every element of your website is designed to make an overseas buyer feel confident placing an order with you.
      </p>
      {ACCORDION_ROWS.map((label, i) => {
        const col = i % 2;
        const row = Math.floor(i / 2);
        const left = 162 + col * (798 + 30);
        const top = 1900 + row * 209;
        return (
          <div key={label} className="absolute bg-white w-[798px] h-[179px] px-[28px] py-[24px]" style={{ left, top }}>
            <p className="font-rajdhani font-semibold text-[#f4a31d] text-[20px] uppercase tracking-[-0.4px]">{`Deliverable ${String(i + 1).padStart(2, "0")}`}</p>
            <p className="font-days-one text-[#242832] text-[25px] leading-[30px] uppercase tracking-[-0.5px] w-[650px] mt-[16px]">{label}</p>
            <span className="absolute top-[20px] right-[28px] text-[#f4a31d] text-[40px] font-medium leading-none">+</span>
          </div>
        );
      })}

      {/* CTA */}
      <div className="absolute bg-[#f5f5f5] left-0 top-[2400px] w-[1920px] h-[520px]" />
      <p className="-translate-x-1/2 absolute font-days-one text-[#242832] text-[50px] leading-[60px] left-1/2 text-center top-[2480px] tracking-[-1px] w-[900px]">
        Let Your Website Do the Export Sales Work
      </p>
      <p className="-translate-x-1/2 absolute font-rajdhani font-semibold text-[#535353] text-[20px] left-1/2 text-center top-[2640px] tracking-[-0.4px] uppercase w-[900px]">
        {`Free audit for hosiery and textile exporters. We'll show you what your competitors' websites are doing that yours isn't.`}
      </p>
      <div className="-translate-x-1/2 absolute flex items-center justify-center gap-[24px] left-1/2 top-[2750px]">
        <Link href="/contact" className="relative bg-[#f4a31d] block h-[88px] rounded-[64px] w-[304px] hover:opacity-90 transition-opacity">
          <div className="absolute border border-solid border-white inset-[7px] rounded-[52px]" />
          <p className="-translate-x-1/2 absolute font-rajdhani font-bold left-1/2 text-[23px] text-center text-white top-[29px] tracking-[-0.46px] uppercase whitespace-nowrap">
            Get Free Website Audit
          </p>
        </Link>
        <Link href="https://wa.me/919814820845" target="_blank" rel="noopener noreferrer" className="relative border border-[#333] border-solid flex h-[88px] items-center justify-center px-[36px] rounded-[64px] hover:bg-[#333]/5 transition-colors">
          <p className="font-rajdhani font-bold text-[#333] text-[23px] text-center tracking-[-0.46px] uppercase whitespace-nowrap">
            WhatsApp Us
          </p>
        </Link>
      </div>
      <div className="absolute left-[1660px] top-[2450px] size-[170px]">
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
