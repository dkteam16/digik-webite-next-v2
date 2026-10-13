export const WP_API_BASE = "https://digitalkangaroos.com/wp-json/wp/v2";

export interface WPPost {
  id: number;
  date: string;
  slug: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  excerpt?: {
    rendered: string;
  };
  _embedded?: {
    "wp:featuredmedia"?: Array<{
      source_url: string;
      alt_text?: string;
    }>;
    author?: Array<{
      id: number;
      name: string;
    }>;
    "wp:term"?: Array<
      Array<{
        id: number;
        name: string;
        slug: string;
      }>
    >;
  };
}

export interface Blog {
  id: number;
  title: string;
  slug: string;
  excerpt?: string;
  content?: string;
  featured_image?: string;
  published_at?: string;
  author?: {
    name: string;
  };
  category?: {
    name: string;
    slug: string;
  };
}

/**
 * Decodes common HTML entities returned in WordPress rendered strings.
 */
export function decodeHtmlEntities(str: string): string {
  if (!str) return "";
  return str
    .replace(/&#8217;/g, "'")
    .replace(/&#8216;/g, "'")
    .replace(/&#8220;/g, '"')
    .replace(/&#8221;/g, '"')
    .replace(/&#8211;/g, "–")
    .replace(/&#8212;/g, "—")
    .replace(/&#038;/g, "&")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&nbsp;/g, " ");
}

/**
 * Strips HTML tags and decodes entities from WordPress excerpt.
 */
export function cleanExcerpt(excerpt?: string): string {
  if (!excerpt) return "";
  return decodeHtmlEntities(
    excerpt
      .replace(/<[^>]+>/g, "")
      .replace(/\[&hellip;\]/g, "...")
      .replace(/\s+/g, " ")
      .trim()
  );
}

/**
 * Formats a raw WordPress REST API post into our clean Blog structure.
 */
export function formatWPPost(post: WPPost): Blog {
  const featuredImage =
    post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || undefined;
  const authorName = post._embedded?.author?.[0]?.name || "Digital Kangaroos";
  const primaryCategory = post._embedded?.["wp:term"]?.[0]?.[0];

  return {
    id: post.id,
    title: decodeHtmlEntities(post.title?.rendered || ""),
    slug: post.slug,
    excerpt: cleanExcerpt(post.excerpt?.rendered),
    content: post.content?.rendered || "",
    featured_image: featuredImage,
    published_at: post.date,
    author: {
      name: authorName,
    },
    category: primaryCategory
      ? {
          name: decodeHtmlEntities(primaryCategory.name),
          slug: primaryCategory.slug,
        }
      : undefined,
  };
}

/**
 * Fetches paginated posts from WordPress REST API.
 */
export async function getWPPosts(page = 1, perPage = 12): Promise<{
  blogs: Blog[];
  totalPages: number;
  totalPosts: number;
}> {
  const res = await fetch(
    `${WP_API_BASE}/posts?_embed&page=${page}&per_page=${perPage}&status=publish`,
    {
      next: { revalidate: 60 },
    }
  );

  if (!res.ok) {
    throw new Error(`WordPress API returned status ${res.status}`);
  }

  const totalPages = Number(res.headers.get("x-wp-totalpages")) || 1;
  const totalPosts = Number(res.headers.get("x-wp-total")) || 0;
  const rawPosts: WPPost[] = await res.json();

  return {
    blogs: rawPosts.map(formatWPPost),
    totalPages,
    totalPosts,
  };
}

/**
 * Fetches a single post by slug.
 */
export async function getWPPostBySlug(slug: string): Promise<Blog | null> {
  try {
    const res = await fetch(`${WP_API_BASE}/posts?slug=${encodeURIComponent(slug)}&_embed`, {
      next: { revalidate: 60 },
    });

    if (!res.ok) return null;

    const posts: WPPost[] = await res.json();
    if (!Array.isArray(posts) || posts.length === 0) return null;

    return formatWPPost(posts[0]);
  } catch (error) {
    console.error(`Failed to fetch WordPress post with slug "${slug}":`, error);
    return null;
  }
}

/**
 * Fetches the latest posts for sidebar recommendations.
 */
export async function getLatestWPPosts(currentSlug: string, count = 5): Promise<Blog[]> {
  try {
    const res = await fetch(
      `${WP_API_BASE}/posts?_embed&per_page=${count + 2}&status=publish`,
      {
        next: { revalidate: 60 },
      }
    );

    if (!res.ok) return [];

    const posts: WPPost[] = await res.json();
    if (!Array.isArray(posts)) return [];

    return posts
      .map(formatWPPost)
      .filter((post) => post.slug !== currentSlug)
      .slice(0, count);
  } catch (error) {
    console.error("Failed to fetch latest WordPress posts:", error);
    return [];
  }
}

