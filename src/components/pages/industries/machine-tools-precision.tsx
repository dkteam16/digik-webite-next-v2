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

const CHECKLIST = [
  {
    title: "Technical Product Pages",
    body: "Specifications, tolerances, travel, spindle speed, power — full technical data per machine model.",
    featured: true,
    icon: (
      <path d="M10.5 2.5 9 5.2a7.4 7.4 0 0 0-1.9.8L4.5 5 2.5 8.5l2.1 1.7a7.4 7.4 0 0 0 0 2L2.5 13.9l2 3.5 2.6-1a7.4 7.4 0 0 0 1.9.8l1.5 2.7h4l1.5-2.7a7.4 7.4 0 0 0 1.9-.8l2.6 1 2-3.5-2.1-1.7a7.4 7.4 0 0 0 0-2l2.1-1.7-2-3.5-2.6 1a7.4 7.4 0 0 0-1.9-.8L14.5 2.5h-4Z" />
    ),
  },
  {
    title: "CAD/Drawing Downloads",
    body: "Downloadable machine drawings, installation guides, and technical specifications per product.",
    icon: (
      <>
        <circle cx="6" cy="6" r="2.2" />
        <circle cx="18" cy="6" r="2.2" />
        <circle cx="12" cy="18" r="2.2" />
        <path d="M7.7 7.3 10.5 16M16.3 7.3 13.5 16M8.2 6h7.6" />
      </>
    ),
  },
  {
    title: "Video Demo Integration",
    body: "Machine demo videos, precision testing footage, and factory tour videos embedded professionally.",
    icon: (
      <>
        <path d="M6 2.5h9l3 3v16H6z" />
        <path d="M15 2.5v3h3M9 12h6M9 15.5h6M9 8.5h3" />
      </>
    ),
  },
  {
    title: "After-Sales & Service Pages",
    body: "Spare parts availability, service network, and warranty terms — critical for large machine buyers.",
    icon: (
      <>
        <path d="M3 20V9l5 3V9l5 3V6l6 4v10z" />
        <path d="M3 20h18" />
      </>
    ),
  },
  {
    title: "Comparison Pages",
    body: "How your machines compare on specs vs alternatives — the content serious buyers research before buying.",
    icon: (
      <>
        <path d="M12 2.5 21 7v10l-9 4.5-9-4.5V7z" />
        <path d="M3 7l9 4.5L21 7M12 11.5V21" />
      </>
    ),
  },
  {
    title: "Export Market SEO",
    body: "Rank in Germany, USA, Thailand, Mexico for CNC machine manufacturer India and precision tooling terms.",
    icon: (
      <>
        <path d="M9 2.5H8a2 2 0 0 0-2 2v3.2c0 4.6 2.8 8.6 6 10.8 3.2-2.2 6-6.2 6-10.8V4.5a2 2 0 0 0-2-2h-1" />
        <path d="M9 2.5v5l3 2 3-2v-5" />
      </>
    ),
  },
];

export function MachineToolsPrecisionPage() {
  return (
    <div className="bg-white relative w-[1920px] h-[2970px]">
      <PixelHeader activeHref="/industries" />

      {/* Hero */}
      <p className="absolute font-rajdhani font-semibold left-[162px] text-[#f4a31d] text-[20px] top-[207px] tracking-[-0.4px] uppercase">
        Machine Tools &amp; Precision Engineering
      </p>
      <p className="absolute font-days-one text-[#333] text-[50px] leading-[56.6px] left-[162px] top-[251px] tracking-[-1px] uppercase w-[796px]">
        Your Engineering Precision Deserves a Website as <span className="text-[#f4a31d]">Technically Sharp</span> as Your Products
      </p>
      <div className="absolute border-l-2 border-[#f4a31d] left-[162px] top-[565px] pl-6 w-[720px]">
        <p className="font-rajdhani font-semibold text-[#333] text-[20px] uppercase tracking-[-0.4px]">
          CNC machine manufacturers, precision component makers, and tooling exporters sell to buyers who make high-stakes, long-term purchasing decisions. Your website needs to communicate technical excellence, not just look presentable.
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
          See Industry Examples
        </p>
      </Link>

      <div className="absolute bg-[#333] h-[100px] left-[1180px] top-[212px] w-[578px]">
        <div className="absolute bg-[#f4a31d] h-[100px] left-0 top-0 w-[10px]" />
        <p className="absolute font-days-one text-[#f4a31d] text-[38px] leading-[normal] left-[40px] top-[18px] tracking-[-0.76px]">₹70,000 Cr</p>
        <p className="absolute font-rajdhani font-medium text-[16px] text-white left-[40px] top-[68px] tracking-[-0.32px] uppercase">Indian Machine Tools Industry Size</p>
      </div>
      <div className="absolute bg-[#333] h-[100px] left-[1180px] top-[324px] w-[578px]">
        <div className="absolute bg-[#f4a31d] h-[100px] left-0 top-0 w-[10px]" />
        <p className="absolute font-days-one text-[#f4a31d] text-[38px] leading-[normal] left-[40px] top-[18px] tracking-[-0.76px]">7%</p>
        <p className="absolute font-rajdhani font-medium text-[16px] text-white left-[40px] top-[68px] tracking-[-0.32px] uppercase">Annual Sector Growth Rate</p>
      </div>
      <div className="absolute bg-[#333] h-[100px] left-[1180px] top-[436px] w-[578px]">
        <div className="absolute bg-[#f4a31d] h-[100px] left-0 top-0 w-[10px]" />
        <p className="absolute font-days-one text-[#f4a31d] text-[38px] leading-[normal] left-[40px] top-[18px] tracking-[-0.76px]">5X</p>
        <p className="absolute font-rajdhani font-medium text-[16px] text-white left-[40px] top-[68px] tracking-[-0.32px] uppercase">ROI From Good Industrial SEO</p>
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
      <p className="-translate-x-1/2 absolute font-rajdhani font-semibold left-1/2 text-[#f4a31d] text-[20px] top-[1046px] tracking-[-0.4px] uppercase whitespace-nowrap">
        What We Build
      </p>
      <p className="-translate-x-1/2 absolute font-days-one text-[#333] text-[42px] leading-[52px] left-1/2 text-center top-[1089px] tracking-[-0.84px] uppercase w-[1100px]">
        Technical Websites That Make Precision Engineering Buyers Trust You
      </p>
      <div className="absolute left-[162px] top-[1264px] flex flex-col gap-[24px]">
        {[0, 1].map((row) => (
          <div key={row} className="flex items-center gap-[30px]">
            {CHECKLIST.slice(row * 3, row * 3 + 3).map((item) => (
              <div
                key={item.title}
                className={`bg-[#f5f5f5] rounded-[64px] w-[533px] px-[32px] py-[32px] ${item.featured ? "border-t-4 border-[#f4a31d]" : ""}`}
              >
                <div className="size-[52px] rounded-[10px] bg-white flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#f4a31d" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="size-[26px]">
                    {item.icon}
                  </svg>
                </div>
                <p className="font-days-one text-[#333] text-[22px] leading-[28px] tracking-[-0.44px] uppercase mt-[20px]">
                  {item.title}
                </p>
                <p className="font-rajdhani text-[#535353] text-[18px] leading-[24px] mt-[14px]">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="absolute bg-[#f5f5f5] left-0 top-[1890px] w-[1920px] h-[580px]" />
      <p className="-translate-x-1/2 absolute font-days-one text-[#242832] text-[50px] leading-[60px] left-1/2 text-center top-[1990px] tracking-[-1px] w-[1000px]">
        Let Your Website Work as Hard as Your <span className="text-[#f4a31d]">Machines Do</span>
      </p>
      <p className="-translate-x-1/2 absolute font-rajdhani font-semibold text-[#535353] text-[20px] left-1/2 text-center top-[2150px] tracking-[-0.4px] uppercase w-[900px]">
        Free audit for machine tool manufacturers and precision engineering companies across India.
      </p>
      <div className="-translate-x-1/2 absolute flex items-center justify-center gap-[24px] left-1/2 top-[2240px]">
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
      <div className="absolute left-[1660px] top-[1990px] size-[170px]">
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
