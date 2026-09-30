import Indusgrow from "../common-components/all-indus-ul-li"
 
export default function Indus() {
  return (  
            <Indusgrow
            tag="What Chemical & Pharma Buyers Verify Online"
            title="Six Things International Buyers Check on Your Website Before Emailing You"
            description=""
            items={[
                {
                icon: "/Auto.png",
                title: "GMP / cGMP Certification",
                description: "WHO-GMP, US FDA, EU GMP — certifications need to be current, visible, and linked to downloadable documents.",
                },
                {
                icon: "/Cycle.png",
                title: "Product Specifications",
                description: "CAS numbers, molecular formula, purity grade, pharmacopoeial standards — all easily accessible per product.",
                },{
                icon: "/Hosiery.png",
                title: "CoA & TDS Availability",
                description: "Certificates of Analysis and Technical Data Sheets available as downloadable PDFs per product.",
                },{
                icon: "/Fasteners.png",
                title: "Manufacturing Infrastructure",
                description: "Facility photos, reactor capacity, clean room details — buyers want to see your scale before they commit.",
                },{
                icon: "/Steel.png",
                title: "Packaging & Logistics",
                description: "UN-certified packaging, MSDS documentation, and export shipping capability clearly stated.",
                },{
                icon: "/Chemicals.png",
                title: "Regulatory Affairs Contact",
                description: "A dedicated regulatory contact page — international buyers need to know who to call about compliance.",
                }, 
            ]}
            />
  );
}
 