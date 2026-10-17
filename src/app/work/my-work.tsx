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
        console.log("Work posts from WordPress API:", response.blogs);
      })
      .catch((error) => {
        console.error("Failed to fetch work posts:", error);
        setError("Unable to load work posts.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading work posts...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="workContainermian">
      <div className="workContainer">
        <div className="workGrid">
          {blogs.map((work) => (
            <Link
              key={work.id}
              href={`/work/${work.slug}`}
              className="workCard"
            >
              <div className="workImageThumb">
                {work.featured_image ? (
                  <img
                    src={work.featured_image}
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

                  <h2 className="workTitle">
                    {work.title}
                  </h2>

                  <p className="workDesc">
                    {work.excerpt || "No description available"}
                  </p>
                </div>

                <div className="workBadges">
                  {work.category?.name ? (
                    <span>
                      {work.category.name}
                    </span>
                  ) : (
                    <span>Work</span>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}