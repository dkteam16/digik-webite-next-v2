import type { Metadata } from "next";
import { FigmaScaleFrame } from "@/components/figma-scale-frame";
import { SteelMetalFabricationPage } from "@/components/pages/industries/steel-metal-fabrication";

export const metadata: Metadata = {
  "title": "Steel & Metal Fabrication",
  "description": "Web design and SEO built for steel and metal fabrication companies."
};


export default function SteelMetalFabrication() {
  return (
    <FigmaScaleFrame width={1920} height={2780}>
      <SteelMetalFabricationPage />
    </FigmaScaleFrame>
  );
}
