import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Contact from "@/app/blogs/[slug]/blog-contact";
import { getWPPostBySlug, getLatestWPPosts } from "@/lib/wordpress";

function formatDate(date?: string) {
  if (!date) return "";
  const d = new Date(date);
  if (isNaN(d.getTime())) return date;
  return d.toLocaleDateString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const blog = await getWPPostBySlug(slug);

  if (!blog) return { title: "Blog not found" };

  return {
    title: blog.title,
    description: blog.excerpt,
    openGraph: {
      title: blog.title,
      description: blog.excerpt,
      images: blog.featured_image ? [blog.featured_image] : [],
    },
  };
}

export default async function SingleBlogPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const [blog, latestBlogs] = await Promise.all([
    getWPPostBySlug(slug),
    getLatestWPPosts(slug, 3),
  ]);

  if (!blog) notFound();

  return (
    <section className="single-blog">
      <div className="single-blog-layout">
        {/* ============ LEFT: ARTICLE ============ */}
        <article className="single-blog-main">
          {blog.featured_image && (
            <div className="single-blog-image">
              <img
                src={blog.featured_image}
                alt={blog.title}
                className="single-blog-img"
              />
            </div>
          )}

          <div className="single-blog-meta">
            <span>{formatDate(blog.published_at)}</span>
            {/* {blog.reading_time && (
              <>
                <span>•</span>
                <span>{blog.reading_time}</span>
              </>
            )}
            {blog.author && (
              <>
                <span>•</span>
                <span>{blog.author.name}</span>
              </>
            )} */}
          </div>

          {/* {blog.category && (
            <div className="single-blog-category">{blog.category.name}</div>
          )} */}

          <h1 className="single-blog-title">{blog.title}</h1>

          {blog.excerpt && (
            <p className="single-blog-excerpt">{blog.excerpt}</p>
          )}

          {blog.content && (
            <div
              className="single-blog-content"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />
          )}

          <div className="single-blog-back">
            <Link href="/blogs">← Back to Blogs</Link>
          </div>
        </article>

        {/* ============ RIGHT: LATEST BLOGS ============ */}
        <aside className="single-blog-sidebar">
          {latestBlogs.map((item) => (
            <Link
              key={item.id}
              href={`/blogs/${item.slug}`}
              className="side-card"
            >
              <div className="side-card-image">
                {item.featured_image ? (
                  <img src={item.featured_image} alt={item.title} />
                ) : (
                  <div className="side-card-noimg">No Image</div>
                )}
              </div>

              <div className="side-card-body">
                <div className="side-card-date">
                  {formatDate(item.published_at)}
                </div>
                <h3 className="side-card-title">{item.title}</h3>
              </div>
            </Link>
          ))}

           <Contact />

        </aside>
      </div>
    </section>
  );
}