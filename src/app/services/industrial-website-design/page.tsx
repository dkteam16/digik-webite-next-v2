import type { Metadata } from "next";
import { FigmaScaleFrame } from "@/components/figma-scale-frame";
import { IndustrialWebsiteDesignPage } from "@/components/pages/services/industrial-website-design";

export const metadata: Metadata = {
  "title": "Industrial Website Design",
  "description": "Custom-built, fully optimised websites designed around your manufacturing capability and your ideal buyer."
};


export default function IndustrialWebsiteDesign() {
  return (
    <FigmaScaleFrame width={1920} height={4572}>
      <IndustrialWebsiteDesignPage />
    </FigmaScaleFrame>
  );
}
