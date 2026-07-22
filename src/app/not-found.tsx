import Link from "next/link";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <SiteHeader />
      <main className="flex flex-1 flex-col items-center justify-center px-6 py-24 text-center">
        <p className="font-rajdhani font-semibold text-[#f4a31d] text-[18px] uppercase tracking-[-0.36px]">
          404
        </p>
        <h1 className="mt-4 max-w-2xl font-days-one text-[#333] text-[36px] uppercase tracking-[-0.72px] md:text-[50px]">
          Page Not Found
        </h1>
        <p className="mt-6 max-w-xl font-rajdhani text-[#535353] text-[18px]">
          The page you&apos;re looking for doesn&apos;t exist or has moved.
        </p>
        <Link
          href="/"
          className="mt-10 inline-flex items-center justify-center rounded-2xl bg-[#f4a31d] px-8 py-4 font-rajdhani font-bold text-[18px] text-white uppercase tracking-[-0.36px] hover:opacity-90 transition-opacity"
        >
          Back to Home
        </Link>
      </main>
      <SiteFooter />
    </div>
  );
}
