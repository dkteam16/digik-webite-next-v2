import { FigmaScaleFrame } from "@/components/figma-scale-frame";
import { AboutPage } from "@/components/pages/about";

export default function About() {
  return (
    <FigmaScaleFrame width={1920} height={6875}>
      <AboutPage />
    </FigmaScaleFrame>
  );
}
