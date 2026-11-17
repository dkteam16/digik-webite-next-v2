 

 

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

            // ACF Multi Image
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
                    <div className="placeholder">
                      No Image
                    </div>
                  )}
                </div>

                <div className="workBody">
                  <div>

                  

                    {/* ACF Sub Heading - HTML Supported */}
                    {acf?.sub_heading && (
                      <div
                        className="workSubHeading"
                        dangerouslySetInnerHTML={{
                          __html: acf.sub_heading,
                        }}
                      />  
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

                      {/* ACF Sub Heading - HTML Supported */}
                    {acf?.single_sub_description && (
                      <div
                        className="workSubHeading"
                        dangerouslySetInnerHTML={{
                          __html: acf.single_sub_description,
                        }}
                      />  
                    )}




 
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

 
 