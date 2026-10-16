import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Study | Digital Kangaroos",
  description:
    "See how Digital Kangaroos helped businesses get found, ranked, and trusted with tailor-made digital solutions.",
};

export default function CaseStudyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
