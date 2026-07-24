import type { Metadata } from "next";
import { FigmaScaleFrame } from "@/components/figma-scale-frame";
import { CorporatePhotographyVideographyPage } from "@/components/pages/services/corporate-photography-videography";

export const metadata: Metadata = {
  "title": "Corporate Photography & Videography",
  "description": "Professional photography and videography that showcases your factory, products, and process to build buyer trust."
};


export default function CorporatePhotographyVideography() {
  return (
    <FigmaScaleFrame width={1920} height={2970}>
      <CorporatePhotographyVideographyPage />
    </FigmaScaleFrame>
  );
}
