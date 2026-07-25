"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Search } from "lucide-react";

const logoSrc = "/images/about/imgTransparent1.png";

const LEFT_NAV_LINKS = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/industries", label: "Industries" },
  { href: "/contact", label: "Contact" },
] as const;

const RIGHT_NAV_LINKS = [
  { href: "/our-work", label: "Work" },
  { href: "/careers", label: "Careers" },
  { href: "/blog", label: "Blog" },
] as const;

export function PixelHeader({
  activeHref,
  variant = "solid",
  isHome = false,
  showLogo = true,
}: {
  activeHref?: string;
  variant?: "solid" | "transparent";
  isHome?: boolean;
  showLogo?: boolean;
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isTransparent = variant === "transparent" || isHome;

  const bgClasses = isTransparent
    ? "bg-gradient-to-b from-black/90 via-black/60 to-transparent border-b border-white/10"
    : "bg-[#2b2b2b] border-b border-[#3d3d3d]";

  const textColor = "text-white";

  return (
    <header className={`sticky top-0 z-50 w-full transition-colors duration-300 ${bgClasses}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[64px] flex items-center justify-between">
        
        {/* Desktop Left Navigation (ABOUT, SERVICES, INDUSTRIES, CONTACT) */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 w-1/3 justify-start">
          {LEFT_NAV_LINKS.map((link) => {
            const isActive = activeHref === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`font-rajdhani font-bold text-[17px] xl:text-[19px] uppercase tracking-wider transition-colors ${
                  isActive ? "text-[#f4a31d]" : `${textColor} hover:text-[#f4a31d]`
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Center Brand Logo (Visible on inner pages, hidden on homepage hero header bar) */}
        <div className="flex items-center justify-center w-auto lg:w-1/3 shrink-0">
          {!isHome && showLogo ? (
            <Link href="/" className="relative h-[38px] w-[180px] sm:w-[210px] block">
              <Image
                alt="Digital Kangaroos"
                className="object-contain"
                src={logoSrc}
                fill
                sizes="210px"
                priority
              />
            </Link>
          ) : (
            <>
              {/* Desktop space holder on homepage */}
              <div className="hidden lg:block w-[180px]" />
              {/* Mobile logo on homepage */}
              <Link href="/" className="lg:hidden relative h-[36px] w-[160px] block">
                <Image
                  alt="Digital Kangaroos"
                  className="object-contain"
                  src={logoSrc}
                  fill
                  sizes="160px"
                  priority
                />
              </Link>
            </>
          )}
        </div>

        {/* Desktop Right Navigation (WORK, CAREERS, BLOG, SEARCH) */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 w-1/3 justify-end">
          {RIGHT_NAV_LINKS.map((link) => {
            const isActive = activeHref === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`font-rajdhani font-bold text-[17px] xl:text-[19px] uppercase tracking-wider transition-colors ${
                  isActive ? "text-[#f4a31d]" : `${textColor} hover:text-[#f4a31d]`
                }`}
              >
                {link.label}
              </Link>
            );
          })}

          {/* Search Link / Action */}
          <Link
            href="/contact"
            className={`font-rajdhani font-bold text-[17px] xl:text-[19px] uppercase tracking-wider flex items-center gap-1.5 transition-colors ${textColor} hover:text-[#f4a31d]`}
          >
            <span>Search</span>
          </Link>
        </nav>

        {/* Mobile Navigation Toggle */}
        <div className="flex items-center gap-3 lg:hidden">
          <Link
            href="/contact"
            className="p-1.5 text-white hover:text-[#f4a31d] font-rajdhani font-bold text-xs uppercase"
          >
            Search
          </Link>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-white hover:text-[#f4a31d] hover:bg-[#383838] transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#242832] border-t border-[#383d4a] px-4 pt-4 pb-6 space-y-2 shadow-2xl animate-in slide-in-from-top-2 duration-200">
          {[...LEFT_NAV_LINKS, ...RIGHT_NAV_LINKS].map((link) => {
            const isActive = activeHref === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block font-rajdhani font-bold text-[18px] uppercase py-2 px-3 rounded-md transition-colors ${
                  isActive
                    ? "bg-[#f4a31d] text-white"
                    : "text-[#cecece] hover:bg-[#333] hover:text-[#f4a31d]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}

