import type { Metadata } from "next";
import { FigmaScaleFrame } from "@/components/figma-scale-frame";
import { AutoPartsEngineeringPage } from "@/components/pages/industries/auto-parts-engineering";

export const metadata: Metadata = {
  "title": "Auto Parts & Engineering Components",
  "description": "Web design and SEO built for auto parts manufacturers and engineering component suppliers targeting global OEM buyers."
};


export default function AutoPartsEngineering() {
  return (
    <FigmaScaleFrame width={1920} height={4648}>
      <AutoPartsEngineeringPage />
    </FigmaScaleFrame>
  );
}
