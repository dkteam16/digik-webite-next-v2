import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Manufacturing & B2B Marketing Blog | Digital Kangaroos",
  },
  description:
    "Explore insights on industrial website design, B2B branding, SEO and digital marketing for manufacturers and exporters. Get practical ideas to improve visibility and generate qualified leads.",
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
