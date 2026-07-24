import type { Metadata } from "next";
import { FigmaScaleFrame } from "@/components/figma-scale-frame";
import { MobileAppsDevelopmentPage } from "@/components/pages/services/mobile-apps-development";

export const metadata: Metadata = {
  "title": "Mobile Apps Development",
  "description": "Custom mobile applications for manufacturers and B2B industrial companies looking to extend their digital reach."
};


export default function MobileAppsDevelopment() {
  return (
    <FigmaScaleFrame width={1920} height={2920}>
      <MobileAppsDevelopmentPage />
    </FigmaScaleFrame>
  );
}
