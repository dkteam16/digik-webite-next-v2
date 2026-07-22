import { FigmaScaleFrame } from "@/components/figma-scale-frame";
import { AllIndustriesPage } from "@/components/pages/all-industries";

export default function Industries() {
  return (
    <FigmaScaleFrame width={1920} height={5678}>
      <AllIndustriesPage />
    </FigmaScaleFrame>
  );
}
