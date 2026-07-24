import type { Metadata } from "next";
import { FigmaScaleFrame } from "@/components/figma-scale-frame";
import { B2BBrandingPage } from "@/components/pages/services/b2b-branding";

export const metadata: Metadata = {
  "title": "B2B Branding",
  "description": "Brand identity built for industrial companies — logos, visual systems, company profiles, and brand guidelines that build buyer trust."
};


export default function B2BBranding() {
  return (
    <FigmaScaleFrame width={1920} height={2900}>
      <B2BBrandingPage />
    </FigmaScaleFrame>
  );
}
