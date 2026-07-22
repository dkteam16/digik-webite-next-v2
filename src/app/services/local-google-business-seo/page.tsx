import type { Metadata } from "next";
import { FigmaScaleFrame } from "@/components/figma-scale-frame";
import { LocalSeoPage } from "@/components/pages/services/local-seo";

export const metadata: Metadata = {
  "title": "Local & Google Business SEO",
  "description": "SEO strategies for manufacturers and B2B industrial companies that rank on Google for the terms your buyers actually search."
};


export default function LocalGoogleBusinessSeo() {
  return (
    <FigmaScaleFrame width={1920} height={3803}>
      <LocalSeoPage />
    </FigmaScaleFrame>
  );
}
