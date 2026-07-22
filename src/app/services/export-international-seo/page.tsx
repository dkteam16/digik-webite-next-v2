import type { Metadata } from "next";
import { FigmaScaleFrame } from "@/components/figma-scale-frame";
import { ExportSeoPage } from "@/components/pages/services/export-seo";

export const metadata: Metadata = {
  "title": "Export & International SEO",
  "description": "Rank Indian manufacturers and exporters on Google in international markets — get found by buyers in the UK, USA, and Europe."
};


export default function ExportInternationalSeo() {
  return (
    <FigmaScaleFrame width={1920} height={2551}>
      <ExportSeoPage />
    </FigmaScaleFrame>
  );
}
