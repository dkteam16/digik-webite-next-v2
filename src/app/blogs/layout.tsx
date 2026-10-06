import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Industrial SEO & B2B Web Design Insights",
  description:
    "Practical articles on SEO, website design and digital marketing for manufacturers, exporters and B2B industrial companies in India.",
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
