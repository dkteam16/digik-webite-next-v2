import Indusgrow from "../common-components/all-indus-ul-li"
 
export default function Indus() {
  return (  
            <Indusgrow
            tag="Why join us"
            title="A small team. A sharp focus."
            description=""
            items={[
                {
                icon: "/Auto.png",
                title: "Niche, not generic",
                description: "We only work with manufacturers and industrial companies. You'll go deep in one vertical and become genuinely expert in B2B digital — not a generalist chasing every brief.",
                },
                {
                icon: "/Cycle.png",
                title: "Work that ships",
                description: "No endless decks. No committee approvals. We build, we launch, we measure. Every project you work on goes live and has real commercial impact for a real business.",
                },{
                icon: "/Hosiery.png",
                title: "Founder-led team",
                description: "You'll work closely with the founder on strategy and delivery. There are no layers of management between you and the decisions that matter.",
                } 
            ]}
            />
  );
}
 