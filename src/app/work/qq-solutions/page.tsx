import type { Metadata } from "next";
import { ComingSoonPage } from "@/components/coming-soon-page";

export const metadata: Metadata = {
  "title": "Q&Q Solutions — Case Study",
  "description": "How we audited, cleaned, and optimised 240+ Google Business Profile listings for a pan-India franchise chain."
};


// TODO: Replace this placeholder with the real Figma design.
// Figma file: Oa2R8GAiByOdXZGBfmicsQ, node-id: 1002:927
// Blocked by the Figma MCP Starter-plan rate limit — re-fetch with
// get_design_context({ fileKey: "Oa2R8GAiByOdXZGBfmicsQ", nodeId: "1002:927" })
// once the limit resets, then run it through the same pipeline used
// for the other service/industry/case-study pages.
export default function QQSolutionsCaseStudy() {
  return (
    <ComingSoonPage
      eyebrow={"Case Study"}
      title={"Q&Q Solutions"}
      description={"How we audited, cleaned, and optimised 240+ Google Business Profile listings for a pan-India franchise chain."}
    />
  );
}
