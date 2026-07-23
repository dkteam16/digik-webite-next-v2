import Image from "next/image";
import Link from "next/link";
import { NewsletterForm } from "@/components/newsletter-form";

const imgVector20 = "/images/contact/imgVector20.svg";
const imgTransparent1 = "/images/contact/imgTransparent1.png";
const imgVector = "/images/contact/imgVector.svg";
const imgVector1 = "/images/contact/imgVector1.svg";
const imgGroup294 = "/images/contact/imgGroup294.svg";
const imgGroup295 = "/images/contact/imgGroup295.svg";
const img02YouTube = "/images/contact/img02YouTube.svg";

/**
 * Shared footer for all real (Figma-built) pages. Every page's footer is a
 * pixel-identical 500px block (6px orange divider + 494px dark band) flush
 * to the bottom of its 1920px-wide canvas -- only the page's total height
 * differed, so this uses local (footer-relative) offsets via `bottom-0`
 * instead of copy-pasting page-height-dependent `top-[Npx]` values.
 */
export function PixelSiteFooter() {
  return (
    <div className="absolute bottom-0 left-0 h-[500px] w-[1920px]" data-name="Footer">
      <div className="absolute flex h-[6px] items-center justify-center left-1/2 top-[0px] w-[1920px] -translate-x-1/2">
        <div className="-scale-y-100 flex-none">
          <div className="bg-[#f4a31d] h-[6px] relative w-[1920px]" />
        </div>
      </div>
      <div className="absolute bg-[#333] h-[494px] left-1/2 top-[6px] w-[1920px] -translate-x-1/2" />
      <p className="[word-break:break-word] absolute font-rajdhani font-semibold leading-[normal] left-[calc(50%-75px)] not-italic text-[#f4a31d] text-[16px] top-[472px] tracking-[-0.32px] uppercase whitespace-nowrap">
        DK Company projects
      </p>
      <div className="absolute h-0 left-1/2 top-[465px] w-[1920px] -translate-x-1/2">
        <div className="absolute inset-[-0.5px_0]">
          <Image alt="" className="block max-w-none size-full" src={imgVector20} fill sizes="100vw" />
        </div>
      </div>
      <p className="[word-break:break-word] absolute font-rajdhani font-semibold leading-[normal] left-[calc(25%-159px)] not-italic text-[16px] text-white top-[146px] tracking-[-0.32px] uppercase whitespace-nowrap">{`Web Development & Software Company`}</p>
      <div className="absolute h-[64px] left-[322px] top-[77px] w-[234px]" data-name="Transparent 1">
        <Image alt="Digital Kangaroos" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgTransparent1} fill sizes="100vw" />
      </div>
      <div className="[word-break:break-word] absolute font-poppins font-normal leading-[0] left-[calc(25%+240px)] not-italic text-[0px] text-white top-[73px] tracking-[-0.38px] uppercase w-[279px] whitespace-pre-wrap">
        <p className="font-rajdhani font-semibold mb-0 text-[19px]">
          <span className="leading-[23.6px] text-[#f4a31d]">India:</span>
          <span className="leading-[23.6px]">{` SCO-4, 1st Floor, Omaxe Royal Residency, Ludhiana, 142022.`}</span>
        </p>
        <p className="leading-[23.6px] mb-0 text-[19px]">​</p>
        <p className="font-rajdhani font-semibold text-[19px]">
          <span className="leading-[23.6px] text-[#f4a31d]">{`USA: `}</span>
          <span className="leading-[23.6px]">48870 Eagle View Terrace, Fremont CA 94539.</span>
        </p>
      </div>
      <div className="[word-break:break-word] absolute font-rajdhani font-semibold leading-[0] left-[calc(75%-374px)] not-italic text-[19px] text-white top-[73px] tracking-[-0.38px] uppercase whitespace-nowrap">
        <Link href="/" className="block leading-[28px] mb-0 hover:text-[#f4a31d] transition-colors">Home</Link>
        <p className="leading-[28px] mb-0">
          <Link href="/about" className="hover:text-[#f4a31d] transition-colors">about</Link>
          <br aria-hidden />
          <Link href="/services" className="hover:text-[#f4a31d] transition-colors">services</Link>
        </p>
        <Link href="/industries" className="block leading-[28px] mb-0 hover:text-[#f4a31d] transition-colors">industries</Link>
        <Link href="/our-work" className="block leading-[28px] mb-0 hover:text-[#f4a31d] transition-colors">work</Link>
        <Link href="/careers" className="block leading-[28px] mb-0 hover:text-[#f4a31d] transition-colors">careers</Link>
        <Link href="/blog" className="block leading-[28px] mb-0 hover:text-[#f4a31d] transition-colors">blog</Link>
        <Link href="/contact" className="block leading-[28px] mb-0 hover:text-[#f4a31d] transition-colors">contact</Link>
        <p className="leading-[28px] mb-0">Faqs</p>
        <p className="leading-[28px] mb-0">Press Release</p>
        <p className="leading-[28px] mb-0">Privacy Policy</p>
        <p className="leading-[28px]">{`Terms & Conditions`}</p>
      </div>
      <div className="[word-break:break-word] absolute font-rajdhani font-semibold leading-[0] left-[calc(75%-144px)] not-italic text-[19px] text-white top-[76px] tracking-[-0.38px] uppercase whitespace-nowrap">
        <p className="leading-[25px] mb-0">Stalk us. feed your</p>
        <p className="leading-[25px]">creativity</p>
      </div>
      <div className="[word-break:break-word] absolute font-rajdhani font-semibold leading-[0] left-[calc(75%-144px)] not-italic text-[19px] text-white top-[233px] tracking-[-0.38px] uppercase whitespace-nowrap">
        <p className="leading-[25px] mb-0">Sign up for the digital kangaroos</p>
        <p className="leading-[25px]">newsletter</p>
      </div>
      <div className="[word-break:break-word] absolute font-poppins font-normal leading-[0] left-[calc(25%+240px)] not-italic text-[0px] text-white top-[221px] tracking-[-0.38px] uppercase whitespace-nowrap">
        <p className="font-rajdhani font-semibold leading-[23.6px] mb-0 text-[#f4a31d] text-[19px]">Phone:</p>
        <p className="font-rajdhani font-semibold leading-[23.6px] text-[19px]">+91 9814820845</p>
      </div>
      <div className="[word-break:break-word] absolute font-poppins font-normal leading-[0] left-[calc(25%+240px)] not-italic text-[0px] text-white top-[297px] tracking-[-0.38px] uppercase whitespace-nowrap">
        <p className="font-rajdhani font-semibold leading-[23.6px] mb-0 text-[#f4a31d] text-[19px]">Email:</p>
        <p className="font-rajdhani font-semibold leading-[23.6px] text-[19px]">info@digitalkangaroos.com</p>
      </div>
      <Link href="https://www.facebook.com/digitalkangaroos" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="absolute inset-[147px_30.1%_307px_67.5%]">
        <Image alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector} fill sizes="100vw" />
      </Link>
      <Link href="https://www.linkedin.com/company/digital-kangaroos/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="-translate-y-1/2 absolute aspect-[29/29] left-[70.83%] right-[26.77%] top-[170px]">
        <Image alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector1} fill sizes="100vw" />
      </Link>
      <Link href="https://www.instagram.com/digitalkangaroos/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="absolute inset-[147px_23.4%_307px_74.21%]">
        <Image alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup294} fill sizes="100vw" />
      </Link>
      <Link href="https://wa.me/919814820845" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="absolute inset-[147px_20.04%_307px_77.56%]">
        <Image alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup295} fill sizes="100vw" />
      </Link>
      <Link href="https://www.youtube.com/@digitalkangaroos" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="absolute inset-[147px_16.69%_307px_80.92%]">
        <Image alt="" className="absolute block inset-0 max-w-none size-full" src={img02YouTube} fill sizes="100vw" />
      </Link>
      <NewsletterForm inputClassName="absolute bg-white h-[46px] left-[calc(50%+336px)] rounded-[12px] top-[302px] w-[274px]" buttonClassName="absolute bg-[#f4a31d] h-[46px] left-[calc(50%+336px)] rounded-[12px] top-[361px] w-[114px]" />
      <p className="[word-break:break-word] absolute font-rajdhani font-semibold leading-[normal] left-[calc(25%-159px)] not-italic text-[16px] text-white top-[472px] tracking-[-0.32px] uppercase whitespace-nowrap">
        © Digital Kangaroos | All Rights Reserved {new Date().getFullYear()}
      </p>
      <div className="-translate-x-1/2 [word-break:break-word] absolute font-rajdhani font-semibold leading-[normal] left-[calc(75%+68px)] not-italic text-[16px] text-white top-[472px] tracking-[-0.32px] uppercase whitespace-nowrap">
        <p className="absolute left-[calc(75%-24px)] top-[472px]">
          Cart Potato
        </p>
        <p className="absolute left-[calc(75%+89px)] top-[472px]">
          DK SCHOOL
        </p>
      </div>
    </div>
  );
}
