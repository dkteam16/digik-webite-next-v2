import type { Metadata } from "next";
import { FigmaScaleFrame } from "@/components/figma-scale-frame";
import { MachineToolsPrecisionPage } from "@/components/pages/industries/machine-tools-precision";

export const metadata: Metadata = {
  "title": "Machine Tools & Precision",
  "description": "Web design and SEO built for machine tools and precision machining companies."
};


export default function MachineToolsPrecision() {
  return (
    <FigmaScaleFrame width={1920} height={2970}>
      <MachineToolsPrecisionPage />
    </FigmaScaleFrame>
  );
}
