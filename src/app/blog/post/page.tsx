import { FigmaScaleFrame } from "@/components/figma-scale-frame";
import { BlogInsidePage } from "@/components/pages/blog-inside";

export default function BlogPost() {
  return (
    <FigmaScaleFrame width={1920} height={3268}>
      <BlogInsidePage />
    </FigmaScaleFrame>
  );
}
