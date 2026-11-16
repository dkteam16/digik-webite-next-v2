// "use client";

// import { useEffect, useState } from "react";
// import Link from "next/link";
// import { getWPWorkPosts, type Blog } from "@/lib/wordpress";

// export default function WorkPage() {
//   const [blogs, setBlogs] = useState<Blog[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     getWPWorkPosts()
//       .then((response) => {
//         setBlogs(response.blogs);
//         console.log("Work posts from WordPress API:", response.blogs);
//       })
//       .catch((error) => {
//         console.error("Failed to fetch work posts:", error);
//         setError("Unable to load work posts.");
//       })
//       .finally(() => {
//         setLoading(false);
//       });
//   }, []);

//   if (loading) {
//     return <p>Loading work posts...</p>;
//   }

//   if (error) {
//     return <p>{error}</p>;
//   }

//   return (
//     <div className="workContainermian"> 
//       <div className="workContainer">
//         <div className="workGrid">
//           {blogs.map((work) => (
//             <Link
//               key={work.id}
//               href={`/work/${work.slug}`}
//               className="workCard"
//             >
//               <div className="workImageThumb">
//                 {work.featured_image ? (
//                   <img
//                     src={work.featured_image}
//                     alt={work.title}
//                     className="workImage"
//                   />
//                 ) : (
//                   <div className="placeholder">No Image</div>
//                 )}
//               </div>

//               <div className="workBody">
//                 <div>
//                   <p className="workCategory">
//                     {work.category?.name || "Work"}
//                   </p>

//                   <h2 className="workTitle">
//                     {work.title}
//                   </h2>

//                   <p className="workDesc">
//                     {work.excerpt || "No description available"}
//                   </p>
//                 </div>

//                 <div className="workBadges">
//                   {work.category?.name ? (
//                     <span>
//                       {work.category.name}
//                     </span>
//                   ) : (
//                     <span>Work</span>
//                   )}
//                 </div>
//               </div>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }


"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { getWPWorkPosts, type Blog } from "@/lib/wordpress";

export default function WorkPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    getWPWorkPosts()
      .then((response) => {
        setBlogs(response.blogs);

        console.log("Work posts:", response.blogs);
        console.log("First work ACF:", response.blogs[0]?.acf);
      })
      .catch((error) => {
        console.error("Failed to fetch work posts:", error);
        setError("Unable to load work posts.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading work posts...</p>;

  if (error) return <p>{error}</p>;

  return (
    <div className="workContainermian">
      <div className="workContainer">
        <div className="workGrid">
          {blogs.map((work) => {
            const acf = work.acf;

            // Prefer ACF multi_image, then featured image.
            const workImage =
              typeof acf?.multi_image === "string"
                ? acf.multi_image
                : typeof acf?.multi_image === "object"
                ? acf.multi_image?.url ||
                  acf.multi_image?.source_url
                : work.featured_image;

            return (
              <Link
                key={work.id}
                href={`/work/${work.slug}`}
                className="workCard"
              >
                <div className="workImageThumb">
                  {workImage ? (
                    <img
                      src={workImage}
                      alt={work.title}
                      className="workImage"
                    />
                  ) : (
                    <div className="placeholder">No Image</div>
                  )}
                </div>

                <div className="workBody">
                  <div>
                    <p className="workCategory">
                      {work.category?.name || "Work"}
                    </p>

                    {/* ACF Sub Heading */}
                    {acf?.sub_heading && (
                      <p className="workSubHeading">
                        {acf.sub_heading.replace(/<[^>]*>/g, "")}
                      </p>
                    )}

                    {/* ACF Heading */}
                    <h2 className="workTitle">
                      {acf?.heading || work.title}
                    </h2>

                    {/* ACF Description */}
                    <div className="workDesc">
                      {acf?.description ? (
                        <div
                          dangerouslySetInnerHTML={{
                            __html: acf.description,
                          }}
                        />
                      ) : (
                        work.excerpt || "No description available"
                      )}
                    </div>

                    {/* ACF Sub Description */}
                    {acf?.sub_descrip && (
                      <div
                        className="workSubDescription"
                        dangerouslySetInnerHTML={{
                          __html: acf.sub_descrip,
                        }}
                      />
                    )}

                    {/* ACF Number Value */}
                    {acf?.number_value && (
                      <div className="workNumber">
                        {acf.number_value}
                      </div>
                    )}

                    {/* ACF Left and Right Side */}
                    <div className="workSides">
                      {acf?.last_left_side && (
                        <div className="workLeftSide">
                          <div
                            dangerouslySetInnerHTML={{
                              __html: acf.last_left_side,
                            }}
                          />
                        </div>
                      )}

                      {acf?.last_right_side && (
                        <div className="workRightSide">
                          <div
                            dangerouslySetInnerHTML={{
                              __html: acf.last_right_side,
                            }}
                          />
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="workBadges">
                    <span>
                      {work.category?.name || "Work"}
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}



 