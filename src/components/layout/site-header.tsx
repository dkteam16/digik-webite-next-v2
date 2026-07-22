import Link from "next/link";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Contact", href: "/contact" },
];

const navLinksRight = [
  { label: "Work", href: "/our-work" },
  { label: "Careers", href: "/careers" },
  { label: "Blog", href: "/blog" },
];

export function SiteHeader() {
  return (
    <header className="relative flex h-[108px] w-full items-center justify-between bg-[#333] px-6 md:px-12">
      <nav className="flex items-center gap-6">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="font-rajdhani font-bold text-[#cecece] text-[16px] uppercase tracking-[-0.32px] hover:text-[#f4a31d] transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </nav>
      <Link
        href="/"
        className="font-days-one text-white text-[18px] uppercase tracking-[-0.36px] whitespace-nowrap"
      >
        Digital Kangaroos
      </Link>
      <nav className="flex items-center gap-6">
        {navLinksRight.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="font-rajdhani font-bold text-[#cecece] text-[16px] uppercase tracking-[-0.32px] hover:text-[#f4a31d] transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
