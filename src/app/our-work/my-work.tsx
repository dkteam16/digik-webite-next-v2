// import Link from 'next/link';

// const worksData = [
//   {
//     id: 1,
//     category: "STEEL MANUFACTURING • PUNJAB",
//     title: "WEBSITE REVAMP + BRAND IDENTITY",
//     description:
//       "Transformed a legacy steel manufacturer's outdated digital presence into a bold, future-ready website with a full brand identity system.",
//     slug: "avon-steel",
//     image: "/work-image/avan-steel.png",
//     tags: ["3x Avg. RFQ Uplift", "100% Brand Rebuilt", "8 wks Delivery"],
//   },         
//   { 
//     id: 2,
//     category: "CNC MACHINING • FOUNDRY • COIMBATORE",
//     title: "B2B REPOSITIONING + WEBSITE + SEO",
//     description:
//       "Repositioned a CNC machine shop that acquired a foundry – new strategy, homepage, 10-page sitemap, SEO keywords, and service pages targeting global OEM buyers.",
//     slug: "b2b-repositioning-website-seo-cnc-machining-foundry",
//     image: "/work-image/Franchise.png",
//     tags: ["240+ Listings Fixed", "100% Profile Accuracy"],
//   },
//   {
//     id: 3,
//     category: "FRANCHISE • 240+ LOCATIONS",
//     title: "240+ GOOGLE BUSINESS LISTINGS OPTIMISED",
//     description:
//       "Audited, cleaned, and optimised 240+ Google Business Profile listings for a pan-India franchise chain – driving local discoverability at scale.",
//     slug: "240-google-business-listings-optimised-pan-india-franchise",
//     image: "/work-image/qqs.png",
//     tags: ["10+ Pages Built", "30 SEO keywords", "2 Verticals Merged"],
//   },
//   {
//     id:4,
//     category: "FRANCHISE • 240+ LOCATIONS",
//     title: "240+ GOOGLE BUSINESS LISTINGS OPTIMISED",
//     description:
//       "Audited, cleaned, and optimised 240+ Google Business Profile listings for a pan-India franchise chain – driving local discoverability at scale.",
//     slug: "240-google-business-listings-optimised-pan-india-franchise",
//     image: "/work-image/Franchise.png",
//     tags: ["10+ Pages Built", "30 SEO keywords", "2 Verticals Merged"],
//   },
// ];

// export default function WorkPage() {
//   return (
//   <div  className="workContainermian">
//     <div className="workContainer">
//       <div className="workGrid">
//         {worksData.map((work) => (
//          <Link
//               key={work.id}
//               href={`/our-work/${work.slug}`}
//               className="workCard"
//             >
//             <div className="workImageThumb">
//               <img
//                 src={work.image}  
//                 alt={work.title}
//                 className="workImage"
//               />
//             </div>

//             <div className="workBody">
//               <div>
//                 <p className="workCategory">{work.category}</p>

//                 <h2 className="workTitle">
//                   {work.title}
//                 </h2>

//                 <p className="workDesc">
//                   {work.description}
//                 </p>
//               </div>

//               <div className="workBadges">
//                 {work.tags.map((tag, idx) => (
//                   <span
//                     key={idx}
//                     className="workBadgeItem"
//                   >
//                     {tag}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </div>
//   </div>
//   );
// }



"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";

interface CaseStudy {
  id: number;
  category: string;
  title: string;
  short_description: string;
  slug: string;
  image: string;
  tags: string[];
}

export default function WorkPage() {
  const [caseStudies, setCaseStudies] = useState<CaseStudy[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("https://www.dkteam.in/dk-admin/api/case-studies")
      .then((response) => {
        setCaseStudies(response.data.data);
        console.log(response.data.data);
      })
      .catch((error) => {
        console.error(error);
        setError("Unable to load case studies.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading case studies...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="workContainermian">
      <div className="workContainer">
        <div className="workGrid">
          {caseStudies.map((work) => (
            <Link
              key={work.id}
              href={`/our-work/${work.slug}`}
              className="workCard"
            >
              <div className="workImageThumb">
                <img
                  src={`https://dkteam.in/dk-admin/storage/app/public/${work.listing_image}`}
                  alt={work.title}
                  className="workImage"
                />
              </div>

              <div className="workBody">
                <div>
                  <p className="workCategory">
                    {work.category}
                  </p>

                  <h2 className="workTitle">
                    {work.title}
                  </h2>

                  <p className="workDesc">
                    {work.short_description}
                  </p>
                </div>

                {/* <div className="workBadges">
                  {work.tags?.map((tag, idx) => (
                    <span
                      key={idx}
                      className="workBadgeItem"
                    >
                      {tag}
                    </span>
                  ))}
                </div> */}
                <div className="workBadges">
                  {work.highlights?.map((highlight, idx) => (
                    <span key={idx} className="workBadgeItem">
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
