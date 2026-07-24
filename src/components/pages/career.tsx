import Link from "next/link";
import { PixelHeader } from "@/components/layout/pixel-header";
import { PixelSiteFooter } from "@/components/layout/pixel-site-footer";
import Image from "next/image";
import { CareerForm } from "./career-form";

const imgSadsaas1 = "/images/career/imgSadsaas1.png";
const imgGroup5 = "/images/career/imgGroup5.svg";
const imgGroup = "/images/career/imgGroup.svg";
const imgGroup1 = "/images/career/imgGroup1.svg";
const imgEllipse20 = "/images/career/imgEllipse20.svg";
const imgEllipse21 = "/images/career/imgEllipse21.svg";
const imgGroup2 = "/images/career/imgGroup2.svg";
const imgGroup300 = "/images/career/imgGroup300.svg";

export function CareerPage() {
  return (
    <div className="bg-white relative w-[1920px] h-[2213px]">
      <PixelHeader activeHref="/careers" />

      {/* Hero Section */}
      <Link
        href="/careers"
        className="-translate-x-1/2 absolute font-rajdhani font-semibold leading-[normal] left-1/2 not-italic text-[#f4a31d] text-[20px] text-center top-[170px] tracking-[-0.4px] uppercase whitespace-nowrap"
      >
        CAREERS
      </Link>
      <p className="-translate-x-1/2 absolute font-days-one leading-[56.6px] left-1/2 not-italic text-[#333] text-[50px] text-center top-[214px] tracking-[-1px] uppercase whitespace-nowrap">
        WE BUILD FOR MANUFACTURERS.
        <br />
        WE HIRE FOR THE SAME STANDARD.
      </p>
      <p className="-translate-x-1/2 absolute font-rajdhani font-semibold leading-[normal] left-1/2 not-italic text-[#333] text-[20px] text-center top-[346px] tracking-[-0.4px] uppercase w-[905px]">
        {`DIGITAL KANGAROOS IS A SPECIALIST WEB AND SEO AGENCY FOR B2B INDUSTRIAL COMPANIES. WE'RE A TIGHT TEAM — AND WE HIRE PEOPLE WHO CARE ABOUT THE WORK, NOT JUST THE BRIEF.`}
      </p>

      {/* Google Rating Badge (Right) */}
      <div className="absolute right-[93px] top-[260px] w-[170px] h-[170px] z-20">
        <div className="absolute inset-0 size-[170px]">
          <Image alt="" className="block size-full" src={imgEllipse20} fill sizes="170px" />
        </div>
        <div className="absolute left-[5px] top-[5px] size-[159px]">
          <Image alt="" className="block size-full" src={imgEllipse21} fill sizes="159px" />
        </div>
        <div className="absolute left-[57px] top-[34px] w-[56px] h-[58px]">
          <Image alt="" className="block size-full" src={imgGroup2} fill sizes="56px" />
        </div>
        <p className="-translate-x-1/2 absolute font-rajdhani font-bold left-1/2 top-[96px] text-[17px] text-white tracking-[-0.34px] uppercase whitespace-nowrap">
          GOOGLE RATING
        </p>
        <div className="absolute left-[44px] top-[116px] flex items-center gap-1.5">
          <span className="font-rajdhani font-bold text-[13.4px] text-white">4.7</span>
          <div className="relative w-[66px] h-[13px]">
            <Image alt="" className="block size-full" src={imgGroup300} fill sizes="66px" />
          </div>
        </div>
      </div>

      {/* Why Join Us Section */}
      <div className="-translate-x-1/2 absolute bg-[#f5f5f5] h-[601px] left-1/2 top-[460px] w-[1920px]" />
      <p className="-translate-x-1/2 absolute font-rajdhani font-semibold left-1/2 text-[#f4a31d] text-[20px] text-center top-[520px] tracking-[-0.4px] uppercase whitespace-nowrap">
        WHY JOIN US
      </p>
      <p className="-translate-x-1/2 absolute font-days-one leading-[56.6px] left-1/2 text-[#333] text-[50px] text-center top-[552px] tracking-[-1px] uppercase whitespace-nowrap">
        A SMALL TEAM. A SHARP FOCUS.
      </p>

      {/* 3 Feature Cards */}
      {/* Card 1 */}
      <div className="absolute bg-white h-[329px] left-[364px] rounded-[64px] top-[655px] w-[384px] shadow-sm border border-[rgba(0,0,0,0.05)] p-10 flex flex-col justify-between">
        <div className="w-[61px] h-[61px] border border-[#f4a31d] rounded-[16px] flex items-center justify-center p-3">
          <div className="relative size-full">
            <Image alt="" className="block size-full" src={imgGroup5} fill sizes="37px" />
          </div>
        </div>
        <div>
          <p className="font-days-one text-[#333] text-[25px] leading-[34px] tracking-[-0.5px] uppercase mb-3">
            NICHE, NOT GENERIC
          </p>
          <p className="font-rajdhani font-medium text-[#333] text-[20px] leading-6 tracking-[-0.4px]">
            {`We only work with manufacturers and industrial companies. You'll go deep in one vertical and become genuinely expert in B2B digital — not a generalist chasing every brief.`}
          </p>
        </div>
      </div>

      {/* Card 2 (Center - Highlighted) */}
      <div className="absolute bg-[#f4a31d] h-[335px] left-[768px] rounded-[64px] top-[649px] w-[384px]" />
      <div className="absolute bg-white h-[329px] left-[768px] rounded-[64px] top-[655px] w-[384px] shadow-sm p-10 flex flex-col justify-between">
        <div className="w-[61px] h-[61px] border border-[#f4a31d] rounded-[16px] flex items-center justify-center p-3">
          <div className="relative size-full">
            <Image alt="" className="block size-full" src={imgGroup} fill sizes="37px" />
          </div>
        </div>
        <div>
          <p className="font-days-one text-[#333] text-[25px] leading-[34px] tracking-[-0.5px] uppercase mb-3">
            WORK THAT SHIPS
          </p>
          <p className="font-rajdhani font-medium text-[#333] text-[20px] leading-6 tracking-[-0.4px]">
            No endless decks. No committee approvals. We build, we launch, we measure. Every project you work on goes live and has real commercial impact for a real business.
          </p>
        </div>
      </div>

      {/* Card 3 */}
      <div className="absolute bg-white h-[329px] left-[1172px] rounded-[64px] top-[655px] w-[384px] shadow-sm border border-[rgba(0,0,0,0.05)] p-10 flex flex-col justify-between">
        <div className="w-[61px] h-[61px] border border-[#f4a31d] rounded-[16px] flex items-center justify-center p-3">
          <div className="relative size-full">
            <Image alt="" className="block size-full" src={imgGroup1} fill sizes="37px" />
          </div>
        </div>
        <div>
          <p className="font-days-one text-[#333] text-[25px] leading-[34px] tracking-[-0.5px] uppercase mb-3">
            FOUNDER-LED TEAM
          </p>
          <p className="font-rajdhani font-medium text-[#333] text-[20px] leading-6 tracking-[-0.4px]">
            {`You'll work closely with the founder on strategy and delivery. There are no layers of management between you and the decisions that matter.`}
          </p>
        </div>
      </div>

      {/* ISO Certified Badge (Left) */}
      <div className="absolute left-[93px] top-[880px] size-[170px]">
        <div className="absolute inset-0 size-[170px]">
          <Image alt="" className="block size-full" src={imgEllipse20} fill sizes="170px" />
        </div>
        <div className="absolute left-[5.5px] top-[5.5px] size-[159px]">
          <Image alt="ISO 9001:2015 Certified Company" className="block object-cover size-full rounded-full" src={imgSadsaas1} fill sizes="159px" />
        </div>
      </div>

      {/* Apply Now Section */}
      <p className="-translate-x-1/2 absolute font-rajdhani font-semibold left-1/2 text-[#f4a31d] text-[20px] text-center top-[1120px] tracking-[-0.4px] uppercase whitespace-nowrap">
        APPLY NOW
      </p>
      <p className="-translate-x-1/2 absolute font-days-one leading-[normal] left-1/2 text-[#333] text-[50px] text-center top-[1152px] tracking-[-1px] uppercase whitespace-nowrap">
        {`DON'T WAIT FOR A JOB LISTING.`}
      </p>

      {/* Form Controls */}
      <CareerForm />

      {/* Footer */}
      <PixelSiteFooter />
    </div>
  );
}

