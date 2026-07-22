import type { Metadata } from "next";
import { FigmaScaleFrame } from "@/components/figma-scale-frame";
import { ContactPage } from "@/components/pages/contact";

export const metadata: Metadata = {
  "title": "Contact Us",
  "description": "We only work with manufacturers, exporters, and B2B industrial companies. Tell us what you're trying to fix."
};


export default function Contact() {
  return (
    <FigmaScaleFrame width={1920} height={1442}>
      <ContactPage />
    </FigmaScaleFrame>
  );
}
