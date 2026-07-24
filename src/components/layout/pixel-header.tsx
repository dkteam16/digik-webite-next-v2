import Image from "next/image";
import Link from "next/link";

const logoSrc = "/images/about/imgTransparent1.png";

const NAV_LINKS = [
  { href: "/about", label: "About", className: "-translate-x-1/2 left-[calc(10%-76px)] text-center" },
  { href: "/services", label: "Services", className: "left-[calc(10%-5px)]" },
  { href: "/industries", label: "Industries", className: "left-[calc(10%+116px)]" },
  { href: "/contact", label: "Contact", className: "left-[calc(30%-131px)]" },
  { href: "/blog", label: "blog", className: "-translate-x-full left-[calc(90%-6px)] text-right" },
  { href: "/careers", label: "Careers", className: "-translate-x-full left-[calc(90%-92px)] text-right" },
  { href: "/our-work", label: "work", className: "-translate-x-full left-[calc(80%-17px)] text-right" },
] as const;

/**
 * Shared header for all real (Figma-built) pages. Positions are pixel-exact
 * and identical on every page (verified across About/Contact/Career/etc.,
 * which only differed in how their `calc()` arbitrary values expressed the
 * same final pixel offset). `variant="transparent"` matches the homepage,
 * whose header floats over the hero image instead of a solid bar.
 *
 * z-index: bg (z-10) sits below decorative badges that intentionally
 * peek up into the header band (z-15); nav text/logo (z-20) always
 * stays on top so it's never obstructed or unclickable.
 */
export function PixelHeader({
  activeHref,
  variant = "solid",
  showLogo = true,
}: {
  activeHref?: string;
  variant?: "solid" | "transparent";
  /** Homepage has its own large centered hero logo instead of the small corner one. */
  showLogo?: boolean;
}) {
  const textColor = variant === "transparent" ? "text-white" : "text-[#cecece]";

  return (
    <>
      {variant === "solid" && (
        <div className="absolute bg-[#333] h-27 left-0 top-0 w-480 z-10" />
      )}
      {NAV_LINKS.map((link) => {
        const isActive = activeHref === link.href;
        return (
          <Link
            key={link.href}
            href={link.href}
            className={`[word-break:break-word] absolute font-rajdhani font-bold leading-[normal] not-italic text-[20px] top-10.5 tracking-[-0.4px] uppercase whitespace-nowrap transition-colors z-20 ${link.className} ${
              isActive ? "text-[#f4a31d]" : `${textColor} hover:text-[#f4a31d]`
            }`}
          >
            {link.label}
          </Link>
        );
      })}
      <p className={`-translate-x-full [word-break:break-word] absolute font-rajdhani font-bold leading-[normal] left-[calc(100%-90px)] not-italic ${textColor} text-[20px] text-right top-10.5 tracking-[-0.4px] uppercase whitespace-nowrap z-20`}>
        Search
      </p>
      {showLogo && (
        <Link
          href="/"
          className="-translate-x-1/2 absolute h-14 left-1/2 top-6 w-52 z-20"
        >
          <Image
            alt="Digital Kangaroos"
            className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
            src={logoSrc}
            fill
            sizes="208px"
          />
        </Link>
      )}
    </>
  );
}
