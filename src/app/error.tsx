"use client";

import { useEffect } from "react";
import Link from "next/link";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <SiteHeader />
      <main className="flex flex-1 flex-col items-center justify-center px-6 py-24 text-center">
        <p className="font-rajdhani font-semibold text-[#f4a31d] text-[18px] uppercase tracking-[-0.36px]">
          Something Went Wrong
        </p>
        <h1 className="mt-4 max-w-2xl font-days-one text-[#333] text-[36px] uppercase tracking-[-0.72px] md:text-[50px]">
          An Unexpected Error Occurred
        </h1>
        <p className="mt-6 max-w-xl font-rajdhani text-[#535353] text-[18px]">
          We&apos;ve been notified and are looking into it. You can try again or head back home.
        </p>
        <div className="mt-10 flex gap-4">
          <button
            onClick={reset}
            className="inline-flex items-center justify-center rounded-2xl bg-[#f4a31d] px-8 py-4 font-rajdhani font-bold text-[18px] text-white uppercase tracking-[-0.36px] hover:opacity-90 transition-opacity"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-2xl border-2 border-[#333] px-8 py-4 font-rajdhani font-bold text-[18px] text-[#333] uppercase tracking-[-0.36px] hover:bg-[#333] hover:text-white transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
