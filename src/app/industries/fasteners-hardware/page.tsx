import type { Metadata } from "next";
import { FigmaScaleFrame } from "@/components/figma-scale-frame";
import { FastenersHardwarePage } from "@/components/pages/industries/fasteners-hardware";

export const metadata: Metadata = {
  "title": "Fasteners & Hardware Manufacturers",
  "description": "Web design and SEO built for fasteners and hardware manufacturers targeting industrial buyers."
};


export default function FastenersHardware() {
  return (
    <FigmaScaleFrame width={1920} height={3372}>
      <FastenersHardwarePage />
    </FigmaScaleFrame>
  );
}
