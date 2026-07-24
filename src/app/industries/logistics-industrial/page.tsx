import type { Metadata } from "next";
import { FigmaScaleFrame } from "@/components/figma-scale-frame";
import { LogisticsIndustrialPage } from "@/components/pages/industries/logistics-industrial";

export const metadata: Metadata = {
  "title": "Logistics & Industrial",
  "description": "Web design and SEO built for logistics and industrial companies."
};


export default function LogisticsIndustrial() {
  return (
    <FigmaScaleFrame width={1920} height={3760}>
      <LogisticsIndustrialPage />
    </FigmaScaleFrame>
  );
}
