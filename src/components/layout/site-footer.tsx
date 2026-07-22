import Link from "next/link";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Work", href: "/our-work" },
  { label: "Careers", href: "/careers" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export function SiteFooter() {
  return (
    <footer className="relative w-full bg-[#333] px-6 py-12 md:px-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 md:flex-row md:justify-between">
        <div>
          <Link
            href="/"
            className="font-days-one text-white text-[20px] uppercase tracking-[-0.4px]"
          >
            Digital Kangaroos
          </Link>
          <p className="mt-2 font-rajdhani font-semibold text-[#cecece] text-[14px] uppercase tracking-[-0.28px]">
            Web Development &amp; Software Company
          </p>
          <p className="mt-4 font-rajdhani text-[15px] text-white">
            <span className="text-[#f4a31d] font-semibold">India: </span>
            SCO-4, 1st Floor, Omaxe Royal Residency, Ludhiana, 142022.
          </p>
          <p className="mt-2 font-rajdhani text-[15px] text-white">
            <span className="text-[#f4a31d] font-semibold">USA: </span>
            48870 Eagle View Terrace, Fremont CA 94539.
          </p>
        </div>
        <nav className="flex flex-col gap-2">
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-rajdhani font-semibold text-[15px] text-white uppercase tracking-[-0.3px] hover:text-[#f4a31d] transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div>
          <p className="font-rajdhani font-semibold text-[15px] text-white">
            <span className="text-[#f4a31d]">Phone: </span>+91 9814820845
          </p>
          <p className="mt-2 font-rajdhani font-semibold text-[15px] text-white">
            <span className="text-[#f4a31d]">Email: </span>
            info@digitalkangaroos.com
          </p>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-6xl border-t border-white/20 pt-6">
        <p className="font-rajdhani font-semibold text-[13px] text-white uppercase tracking-[-0.26px]">
          © Digital Kangaroos | All Rights Reserved 2026
        </p>
      </div>
    </footer>
  );
}
