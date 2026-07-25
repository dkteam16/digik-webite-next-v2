import Image from "next/image";
import Link from "next/link";
import { NewsletterForm } from "@/components/newsletter-form";

const imgTransparent1 = "/images/contact/imgTransparent1.png";
const imgVector = "/images/contact/imgVector.svg";
const imgVector1 = "/images/contact/imgVector1.svg";
const imgGroup294 = "/images/contact/imgGroup294.svg";
const imgGroup295 = "/images/contact/imgGroup295.svg";
const img02YouTube = "/images/contact/img02YouTube.svg";

export function PixelSiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#333] text-white relative mt-auto border-t-4 border-[#f4a31d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-10">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 mb-8">
          
          {/* Column 1: Brand & Addresses */}
          <div className="space-y-3">
            <Link href="/" className="inline-block relative h-[44px] w-[170px]">
              <Image
                alt="Digital Kangaroos"
                className="object-contain"
                src={imgTransparent1}
                fill
                sizes="170px"
              />
            </Link>
            <p className="font-rajdhani font-semibold text-[13px] uppercase tracking-wide text-white/90">
              Web Development &amp; Software Company
            </p>
            <div className="space-y-1 font-rajdhani font-medium text-[14px] uppercase leading-snug">
              <p>
                <span className="text-[#f4a31d] font-bold">India:</span> SCO-4, 1st Floor, Omaxe Royal Residency, Ludhiana, 142022.
              </p>
              <p>
                <span className="text-[#f4a31d] font-bold">USA:</span> 48870 Eagle View Terrace, Fremont CA 94539.
              </p>
            </div>
            <div className="space-y-0.5 font-rajdhani font-medium text-[14px] uppercase">
              <p><span className="text-[#f4a31d] font-bold">Phone:</span> +91 9814820845</p>
              <p><span className="text-[#f4a31d] font-bold">Email:</span> info@digitalkangaroos.com</p>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-rajdhani font-bold text-[18px] uppercase text-[#f4a31d] mb-3">
              Quick Links
            </h4>
            <ul className="grid grid-cols-2 gap-y-1.5 font-rajdhani font-semibold text-[14px] uppercase">
              <li><Link href="/" className="hover:text-[#f4a31d] transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-[#f4a31d] transition-colors">About</Link></li>
              <li><Link href="/services" className="hover:text-[#f4a31d] transition-colors">Services</Link></li>
              <li><Link href="/industries" className="hover:text-[#f4a31d] transition-colors">Industries</Link></li>
              <li><Link href="/our-work" className="hover:text-[#f4a31d] transition-colors">Work</Link></li>
              <li><Link href="/careers" className="hover:text-[#f4a31d] transition-colors">Careers</Link></li>
              <li><Link href="/blog" className="hover:text-[#f4a31d] transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-[#f4a31d] transition-colors">Contact</Link></li>
              <li><span className="text-white/70">Faqs</span></li>
              <li><span className="text-white/70">Privacy Policy</span></li>
              <li><span className="text-white/70">Terms &amp; Conditions</span></li>
            </ul>
          </div>

          {/* Column 3: Social Links */}
          <div className="space-y-3">
            <h4 className="font-rajdhani font-bold text-[18px] uppercase text-white">
              Stalk Us. Feed Your Creativity
            </h4>
            
            {/* Social Icons Row */}
            <div className="flex items-center gap-3">
              <Link
                href="https://www.facebook.com/digitalkangaroos"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="hover:scale-110 transition-transform"
              >
                <div className="relative size-6">
                  <Image alt="Facebook" src={imgVector} fill className="object-contain" />
                </div>
              </Link>
              <Link
                href="https://www.linkedin.com/company/digital-kangaroos/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="hover:scale-110 transition-transform"
              >
                <div className="relative size-6">
                  <Image alt="LinkedIn" src={imgVector1} fill className="object-contain" />
                </div>
              </Link>
              <Link
                href="https://www.instagram.com/digitalkangaroos/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="hover:scale-110 transition-transform"
              >
                <div className="relative size-6">
                  <Image alt="Instagram" src={imgGroup294} fill className="object-contain" />
                </div>
              </Link>
              <Link
                href="https://wa.me/919814820845"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="hover:scale-110 transition-transform"
              >
                <div className="relative size-6">
                  <Image alt="WhatsApp" src={imgGroup295} fill className="object-contain" />
                </div>
              </Link>
              <Link
                href="https://www.youtube.com/@digitalkangaroos"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="hover:scale-110 transition-transform"
              >
                <div className="relative size-6">
                  <Image alt="YouTube" src={img02YouTube} fill className="object-contain" />
                </div>
              </Link>
            </div>
          </div>

          {/* Column 4: Newsletter */}
          <div className="space-y-3">
            <h4 className="font-rajdhani font-bold text-[18px] uppercase text-white">
              Sign Up For Our Newsletter
            </h4>
            <NewsletterForm
              inputClassName="w-full bg-white text-[#333] h-[40px] px-3 text-[14px] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-[#f4a31d]"
              buttonClassName="mt-2 w-full bg-[#f4a31d] text-white font-rajdhani font-bold h-[40px] text-[14px] rounded-[8px] uppercase hover:bg-[#d98d12] transition-colors"
            />
          </div>
        </div>

        {/* Footer Bottom Divider & Copyright */}
        <div className="pt-4 border-t border-[#444] flex flex-col sm:flex-row items-center justify-between gap-3 font-rajdhani font-semibold text-[13px] uppercase text-white/80">
          <p>© Digital Kangaroos | All Rights Reserved {currentYear}</p>
          <p className="text-[#f4a31d]">DK Company Projects</p>
          <div className="flex gap-4">
            <span>Cart Potato</span>
            <span>DK SCHOOL</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
