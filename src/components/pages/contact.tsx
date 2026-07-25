import Link from "next/link";
import { PixelHeader } from "@/components/layout/pixel-header";
import { PixelSiteFooter } from "@/components/layout/pixel-site-footer";
import Image from "next/image";
import { ContactForm } from "./contact-form";

const imgGroup = "/images/contact/imgGroup.svg";
const imgGroup1 = "/images/contact/imgGroup1.svg";
const imgGroup2 = "/images/contact/imgGroup2.svg";
const imgEllipse20 = "/images/contact/imgEllipse20.svg";
const imgEllipse21 = "/images/contact/imgEllipse21.svg";
const imgGroup3 = "/images/contact/imgGroup3.svg";
const imgGroup300 = "/images/contact/imgGroup300.svg";

export function ContactPage() {
  return (
    <div className="bg-white relative w-[1920px] h-[1550px]">
      <PixelHeader activeHref="/contact" />

      {/* Hero Section */}
      <Link
        href="/contact"
        className="-translate-x-1/2 absolute font-rajdhani font-semibold leading-[normal] left-1/2 not-italic text-[#f4a31d] text-[20px] text-center top-[170px] tracking-[-0.4px] uppercase whitespace-nowrap"
      >
        CONTACT
      </Link>
      <p className="-translate-x-1/2 absolute font-days-one leading-[56.6px] left-1/2 not-italic text-[#333] text-[50px] text-center top-[214px] tracking-[-1px] uppercase w-[879px]">
        {`LET'S BUILD SOMETHING THAT ACTUALLY WORKS.`}
      </p>
      <p className="-translate-x-1/2 absolute font-rajdhani font-semibold leading-[normal] left-1/2 not-italic text-[#333] text-[20px] text-center top-[346px] tracking-[-0.4px] uppercase w-[905px]">
        {`We only work with manufacturers, exporters, and B2B industrial companies. If that's you — tell us what you're trying to fix. We'll be direct about whether we can help.`}
      </p>

      {/* Google Rating Badge */}
      <div className="absolute right-[93px] top-[260px] w-[170px] h-[170px] z-20">
        <div className="absolute inset-0 size-[170px]">
          <Image
            alt=""
            className="block size-full"
            src={imgEllipse20}
            fill
            sizes="170px"
          />
        </div>
        <div className="absolute left-[5px] top-[5px] size-[159px]">
          <Image
            alt=""
            className="block size-full"
            src={imgEllipse21}
            fill
            sizes="159px"
          />
        </div>
        <div className="absolute left-[57px] top-[34px] w-[56px] h-[58px]">
          <Image
            alt=""
            className="block size-full"
            src={imgGroup3}
            fill
            sizes="56px"
          />
        </div>
        <div className="absolute left-[30px] top-[95px] w-[110px] text-center">
          <p className="font-rajdhani font-bold text-[17px] leading-tight text-white uppercase tracking-[-0.34px] whitespace-nowrap">
            GOOGLE RATING
          </p>
          <div className="flex items-center justify-center gap-1.5 mt-1">
            <span className="font-rajdhani font-bold text-[13px] text-white">
              4.7
            </span>
            <div className="w-[66px] h-[13px] relative">
              <Image
                alt="Stars"
                className="block size-full"
                src={imgGroup300}
                fill
                sizes="66px"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Left Column - Contact Info Cards */}

      {/* Card 1: Free Website Audit */}
      <div className="absolute bg-[#f5f5f5] h-[128px] left-[321px] rounded-[52px] top-[438px] w-[629px]" />
      <div className="absolute border border-[#f4a31d] border-solid left-[341px] rounded-[52px] size-[89px] top-[458px] bg-white flex items-center justify-center">
        <div className="relative size-[40px]">
          <Image
            alt="Audit Icon"
            className="block size-full"
            src={imgGroup}
            fill
            sizes="40px"
          />
        </div>
      </div>
      <p className="absolute font-days-one leading-[normal] left-[452px] text-[#333] text-[20px] top-[463px] tracking-[-0.4px] uppercase whitespace-nowrap">
        Free website Audit
      </p>
      <p className="absolute font-rajdhani font-semibold leading-[normal] left-[452px] text-[#333] text-[18px] top-[491px] tracking-[-0.4px] w-[470px]">
        {`We'll review your existing website and tell you exactly what's costing you buyer enquiries — no obligation, no agency speak.`}
      </p>

      {/* Card 2: New Project */}
      <div className="absolute bg-[#f5f5f5] h-[128px] left-[321px] rounded-[52px] top-[586px] w-[629px]" />
      <div className="absolute border border-[#f4a31d] border-solid left-[341px] rounded-[52px] size-[89px] top-[606px] bg-white flex items-center justify-center">
        <div className="relative size-[40px]">
          <Image
            alt="Project Icon"
            className="block size-full"
            src={imgGroup1}
            fill
            sizes="40px"
          />
        </div>
      </div>
      <p className="absolute font-days-one leading-[normal] left-[452px] text-[#333] text-[20px] top-[611px] tracking-[-0.4px] uppercase whitespace-nowrap">
        New project
      </p>
      <p className="absolute font-rajdhani font-semibold leading-[normal] left-[452px] text-[#333] text-[18px] top-[639px] tracking-[-0.4px] w-[470px]">
        {`Website build, SEO strategy, positioning, or content — tell us what you need and we'll scope it properly.`}
      </p>

      {/* Card 3: Talk To Us */}
      <div className="absolute bg-[#f5f5f5] h-[128px] left-[321px] rounded-[52px] top-[734px] w-[629px]" />
      <div className="absolute border border-[#f4a31d] border-solid left-[341px] rounded-[52px] size-[89px] top-[754px] bg-white flex items-center justify-center">
        <div className="relative size-[40px]">
          <Image
            alt="Contact Icon"
            className="block size-full"
            src={imgGroup2}
            fill
            sizes="40px"
          />
        </div>
      </div>
      <p className="absolute font-days-one leading-[normal] left-[452px] text-[#333] text-[20px] top-[759px] tracking-[-0.4px] uppercase whitespace-nowrap">
        Talk to us
      </p>
      <div className="absolute font-rajdhani font-semibold text-[#333] text-[18px] left-[452px] top-[787px]">
        <p className="leading-[normal]">09814820845</p>
        <p className="leading-[normal]">hello@digitalkangaroos.com</p>
      </div>

      {/* Right Column - Send Us A Message Card Container */}
      <div className="absolute bg-[#f5f5f5] h-[540px] left-[970px] rounded-[52px] top-[438px] w-[629px]" />
      <p className="absolute font-days-one leading-[normal] left-[970px] text-[#333] text-[22px] text-center top-[468px] tracking-[-0.44px] uppercase w-[629px]">
        Send us a message
      </p>

      {/* Form Fields */}
      <ContactForm />

      <PixelSiteFooter />
    </div>
  );
}
