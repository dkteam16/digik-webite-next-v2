import Link from "next/link";

const logoSrc = "/images/about/imgTransparent1.png";

/**
 * Fallback header for pages whose Figma frame referenced a header
 * component instance that wasn't inlined in the exported code.
 * Positions match the header used on About/Contact/Career/etc.
 *
 * z-index: bg (z-10) sits below decorative badges that intentionally
 * peek up into the header band (z-15); nav text/logo (z-20) always
 * stays on top so it's never obstructed or unclickable.
 */
export function PixelHeader() {
  return (
    <>
      <div className="absolute bg-[#333] h-[108px] left-0 top-0 w-[1920px] z-10" />
      <Link
        href="/about"
        className="-translate-x-1/2 [word-break:break-word] absolute font-rajdhani font-bold leading-[normal] left-[calc(10%-76px)] not-italic text-[#cecece] text-[20px] text-center top-[42px] tracking-[-0.4px] uppercase whitespace-nowrap hover:text-[#f4a31d] transition-colors z-20"
      >
        About
      </Link>
      <Link
        href="/services"
        className="[word-break:break-word] absolute font-rajdhani font-bold leading-[normal] left-[calc(10%-5px)] not-italic text-[#cecece] text-[20px] top-[42px] tracking-[-0.4px] uppercase whitespace-nowrap hover:text-[#f4a31d] transition-colors z-20"
      >
        Services
      </Link>
      <Link
        href="/industries"
        className="[word-break:break-word] absolute font-rajdhani font-bold leading-[normal] left-[calc(10%+116px)] not-italic text-[#cecece] text-[20px] top-[42px] tracking-[-0.4px] uppercase whitespace-nowrap hover:text-[#f4a31d] transition-colors z-20"
      >
        Industries
      </Link>
      <Link
        href="/contact"
        className="[word-break:break-word] absolute font-rajdhani font-bold leading-[normal] left-[calc(30%-131px)] not-italic text-[#cecece] text-[20px] top-[42px] tracking-[-0.4px] uppercase whitespace-nowrap hover:text-[#f4a31d] transition-colors z-20"
      >
        Contact
      </Link>
      <Link
        href="/blog"
        className="-translate-x-full [word-break:break-word] absolute font-rajdhani font-bold leading-[normal] left-[calc(90%-6px)] not-italic text-[#cecece] text-[20px] text-right top-[42px] tracking-[-0.4px] uppercase whitespace-nowrap hover:text-[#f4a31d] transition-colors z-20"
      >
        blog
      </Link>
      <p className="-translate-x-full [word-break:break-word] absolute font-rajdhani font-bold leading-[normal] left-[calc(100%-90px)] not-italic text-[#cecece] text-[20px] text-right top-[42px] tracking-[-0.4px] uppercase whitespace-nowrap z-20">
        Search
      </p>
      <Link
        href="/careers"
        className="-translate-x-full [word-break:break-word] absolute font-rajdhani font-bold leading-[normal] left-[calc(90%-92px)] not-italic text-[#cecece] text-[20px] text-right top-[42px] tracking-[-0.4px] uppercase whitespace-nowrap hover:text-[#f4a31d] transition-colors z-20"
      >
        Careers
      </Link>
      <Link
        href="/our-work"
        className="-translate-x-full [word-break:break-word] absolute font-rajdhani font-bold leading-[normal] left-[calc(80%-17px)] not-italic text-[#cecece] text-[20px] text-right top-[42px] tracking-[-0.4px] uppercase whitespace-nowrap hover:text-[#f4a31d] transition-colors z-20"
      >
        work
      </Link>
      <Link
        href="/"
        className="-translate-x-1/2 absolute h-[56px] left-1/2 top-[24px] w-[208px] z-20"
      >
        <img
          alt="Digital Kangaroos"
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={logoSrc}
        />
      </Link>
    </>
  );
}
