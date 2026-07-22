import type { Metadata } from "next";
import { ComingSoonPage } from "@/components/coming-soon-page";

export const metadata: Metadata = {
  "title": "Avon Steel — Case Study",
  "description": "How we transformed a legacy steel manufacturer's outdated digital presence into a bold, future-ready website with a full brand identity system."
};


// TODO: Replace this placeholder with the real Figma design.
// Figma file: Oa2R8GAiByOdXZGBfmicsQ, node-id: 989:2
// Blocked by the Figma MCP Starter-plan rate limit — re-fetch with
// get_design_context({ fileKey: "Oa2R8GAiByOdXZGBfmicsQ", nodeId: "989:2" })
// once the limit resets, then run it through the same pipeline used
// for the other service/industry/case-study pages.
export default function AvonSteelCaseStudy() {
  return (
    <ComingSoonPage
      eyebrow={"Case Study"}
      title={"Avon Steel"}
      description={"How we transformed a legacy steel manufacturer's outdated digital presence into a bold, future-ready website with a full brand identity system."}
    />
  );
}
