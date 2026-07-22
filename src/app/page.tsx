import { FigmaScaleFrame } from "@/components/figma-scale-frame";
import { HomePage } from "@/components/pages/homepage";

export default function Home() {
  return (
    <FigmaScaleFrame width={1920} height={12224}>
      <HomePage />
    </FigmaScaleFrame>
  );
}
