import type { Metadata } from "next";
import { FigmaScaleFrame } from "@/components/figma-scale-frame";
import { CycleSportsEquipmentPage } from "@/components/pages/industries/cycle-sports-equipment";

export const metadata: Metadata = {
  "title": "Cycle & Sports Equipment",
  "description": "Web design and SEO built for cycle and sports equipment manufacturers and exporters."
};


export default function CycleSportsEquipment() {
  return (
    <FigmaScaleFrame width={1920} height={4144}>
      <CycleSportsEquipmentPage />
    </FigmaScaleFrame>
  );
}
