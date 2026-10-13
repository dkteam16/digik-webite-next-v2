"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import { Blog, formatWPPost, WPPost, WP_API_BASE } from "@/lib/wordpress";

export default function BlogPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);

  /* =========================================
     FETCH BLOGS FROM WORDPRESS REST API
  ========================================= */
  useEffect(() => {
    const controller = new AbortController();

    const fetchBlogs = async () => {
      try {
        setLoading(true);
        setError("");

        const url = `${WP_API_BASE}/posts?_embed&per_page=12&page=${page}&status=publish`;

        const response = await fetch(url, {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error(`WordPress API Error: ${response.status}`);
        }

        const totalPages =
          Number(response.headers.get("x-wp-totalpages")) || 1;
        const json: WPPost[] = await response.json();

        setBlogs(json.map(formatWPPost));
        setLastPage(totalPages);
      } catch (err: any) {
        if (err.name !== "AbortError") {
          console.error("BLOG ERROR:", err);
          setError(err.message || "Failed to load blogs");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();

    return () => {
      controller.abort();
    };
  }, [page]);


  /* =========================================
     DATE FORMAT
  ========================================= */

  const formatDate = (
    date?: string
  ) => {

    if (!date) {
      return "";
    }

    const newDate =
      new Date(date);


    if (
      isNaN(
        newDate.getTime()
      )
    ) {

      return date;

    }


    return newDate.toLocaleDateString(
      "en-US",
      {
        month: "short",
        day: "2-digit",
        year: "numeric",
      }
    );

  };


  /* =========================================
     LOADING
  ========================================= */

  if (loading) {

    return (
      <section className="blog-page">

        <div className="blog-container">

          <h1 className="blog-heading">
            BLOGS
          </h1>

          <div className="blog-loading text-black">
            Loading blogs...
          </div>

        </div>

      </section>
    );

  }


  /* =========================================
     ERROR
  ========================================= */

  if (error) {

    return (
      <section className="blog-page">

        <div className="blog-container">

          <h1 className="blog-heading">
            BLOGS
          </h1>

          <div className="blog-error">
            {error}
          </div>

        </div>

      </section>
    );

  }


  return (
    <section className="blog-page">

      <div className="blog-container">


        {/* =================================
            TITLE
        ================================= */}

        <h1 className="blog-heading">
          BLOGS
        </h1>


        {/* =================================
            BLOG GRID
        ================================= */}

        <div className="blog-grid">

          {blogs.map(
            (blog) => (

              <Link
                key={blog.id}
                href={`/blogs/${blog.slug}`}
                className="blog-card"
              >


                {/* =========================
                    IMAGE
                ========================= */}

                <div className="blog-image-wrap">

                  {blog.featured_image ? (

                    <img
                      src={
                        blog.featured_image
                      }
                      alt={
                        blog.title
                      }
                      className="blog-image"
                    />

                  ) : (

                    <div className="blog-no-image">
                      No Image
                    </div>

                  )}

                </div>


                {/* =========================
                    CONTENT
                ========================= */}

                <div className="blog-content">


                  {/* DATE */}

                  <div className="blog-date">

                    {formatDate(
                      blog.published_at
                    )}

                  </div>


                  {/* TITLE */}

                  <h2 className="blog-title">

                    {blog.title}

                  </h2>


                  {/* SHORT DESCRIPTION */}

                  {blog.excerpt && (

                    <p className="blog-excerpt">

                      {blog.excerpt}

                    </p>

                  )}


                </div>

              </Link>

            )
          )}

        </div>


        {/* =================================
            NO BLOG
        ================================= */}

        {blogs.length === 0 && (

          <div className="blog-empty">

            No blogs found.

          </div>

        )}


        {/* =================================
            PAGINATION
        ================================= */}

        {lastPage > 1 && (

          <div className="blog-pagination">


            {/* PREVIOUS */}

            <button
              type="button"
              disabled={
                page === 1
              }
              onClick={() =>
                setPage(
                  (prev) =>
                    Math.max(
                      prev - 1,
                      1
                    )
                )
              }
            >
              ←
            </button>


            {/* PAGE NUMBERS */}

            {Array.from(
              {
                length:
                  lastPage,
              },
              (_, index) =>
                index + 1
            ).map(
              (number) => (

                <button
                  type="button"
                  key={number}
                  className={
                    page === number
                      ? "active"
                      : ""
                  }
                  onClick={() =>
                    setPage(
                      number
                    )
                  }
                >
                  {number}
                </button>

              )
            )}


            {/* NEXT */}

            <button
              type="button"
              disabled={
                page === lastPage
              }
              onClick={() =>
                setPage(
                  (prev) =>
                    Math.min(
                      prev + 1,
                      lastPage
                    )
                )
              }
            >
              →
            </button>

          </div>

        )}

      </div>

    </section>
  );
}