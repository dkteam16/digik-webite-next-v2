import Link from "next/link";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const outlineCtaLinkVariants = cva(
  "absolute border border-[#333] border-solid content-stretch flex h-22 items-center justify-center px-5 py-2.5 rounded-[16px] hover:bg-[#333]/5 transition-colors"
);

export function OutlineCtaLink({
  href,
  ariaLabel,
  className,
  children,
  ...props
}: React.ComponentProps<typeof Link> & { ariaLabel: string }) {
  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      className={cn(outlineCtaLinkVariants(), className)}
      {...props}
    >
      <p className="[word-break:break-word] font-rajdhani font-bold leading-[normal] not-italic relative shrink-0 text-[#333] text-[23px] text-center tracking-[-0.46px] uppercase whitespace-nowrap fvs-normal">
        {children}
      </p>
    </Link>
  );
}
