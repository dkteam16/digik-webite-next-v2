import type { Metadata } from "next";

const API_BASE = "https://www.dkteam.in/dk-admin/api/case-studies";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const fallback: Metadata = {
    title: "Case Study | Our Work",
    description:
      "See how Digital Kangaroos helped an industrial company get found, ranked and trusted by the right buyers.",
  };

  try {
    const res = await fetch(`${API_BASE}/${slug}`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return fallback;

    const json = await res.json();
    const d = json?.data;
    if (!json?.status || !d) return fallback;

    const title = d.meta_title || d.title;
    const description = d.meta_description || d.short_description;

    return {
      title: title || fallback.title,
      description: description || fallback.description,
      openGraph: {
        title: title || undefined,
        description: description || undefined,
      },
    };
  } catch {
    return fallback;
  }
}

export default function CaseStudyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
