import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Contact from "@/app/blog/[slug]/blog-contact";

const API_BASE = "https://www.dkteam.in/dk-admin/api/posts";

interface Blog {
  id: number;
  title: string;
  slug: string;
  excerpt?: string;
  content?: string;
  featured_image?: string;
  published_at?: string;
  reading_time?: string;
  views_count?: number;
  category?: { name: string; slug: string };
  author?: { name: string };
}

async function getBlog(slug: string): Promise<Blog | null> {
  try {
    const res = await fetch(`${API_BASE}/${slug}`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) return null;

    const json = await res.json();
    if (!json.success) return null;

    return Array.isArray(json.data) ? json.data[0] ?? null : json.data;
  } catch (err) {
    console.error("Blog fetch error:", err);
    return null;
  }
}

/* Latest uploaded blogs (sidebar) */
async function getLatestBlogs(currentSlug: string): Promise<Blog[]> {
  try {
    const res = await fetch(
      `${API_BASE}?per_page=6&sort_by=published_at&order=desc`,
      { next: { revalidate: 60 } }
    );
    if (!res.ok) return [];

    const json = await res.json();
    const list: Blog[] = Array.isArray(json.data) ? json.data : [];

    return list.filter((b) => b.slug !== currentSlug).slice(0, 5);
  } catch (err) {
    console.error("Latest blogs error:", err);
    return [];
  }
}

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
  const blog = await getBlog(slug);

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
    getBlog(slug),
    getLatestBlogs(slug),
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
            <Link href="/blog">← Back to Blogs</Link>
          </div>
        </article>

        {/* ============ RIGHT: LATEST BLOGS ============ */}
        <aside className="single-blog-sidebar">
          {latestBlogs.map((item) => (
            <Link
              key={item.id}
              href={`/blog/${item.slug}`}
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