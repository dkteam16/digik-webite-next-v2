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

export interface WorkACF {
  case_study_content_for_all?: string;
  case_study_title?: string;
  banner_content?: string;
  logo1?: number | string | { url?: string; source_url?: string };
  "s-head1"?: string;
  client_overview?: string;
  logo2?: number | string | { url?: string; source_url?: string };
  "s-head2"?: string;
  challenge?: string;
  logo3?: number | string | { url?: string; source_url?: string };
  "s-head3"?: string;
  solutions?: string;
  feature_title?: string;
  features_info?: string;
  impact_title?: string;
  impact_info?: string;
  case_study_image?: number | string | { url?: string; source_url?: string };
  case_study_image_second?: number | string | { url?: string; source_url?: string };
  case_study_image_third?: number | string | { url?: string; source_url?: string };
  conclusion_title?: string;
  conclusion_info?: string;
  [key: string]: any;
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
  acf?: WorkACF;
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
export function formatWPPost(post: any): Blog {
  const featuredImage =
    post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || undefined;
  const authorName = post._embedded?.author?.[0]?.name || "Digital Kangaroos";
  const primaryCategory = post._embedded?.["wp:term"]?.[0]?.[0];

  const acf: WorkACF | undefined = post.acf;
  const excerptText =
    acf?.case_study_content_for_all ||
    acf?.banner_content ||
    post.excerpt?.rendered ||
    "";

  const rawTitle =
    acf?.case_study_title
      ? acf.case_study_title.replace(/<[^>]+>/g, "").trim()
      : post.title?.rendered || "";

  return {
    id: post.id,
    title: decodeHtmlEntities(rawTitle),
    slug: post.slug,
    excerpt: cleanExcerpt(excerptText),
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
    acf,
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
 * Fetches work-type posts (case studies) from WordPress REST API (/wp-json/wp/v2/work).
 */
export async function getWPWorkPosts(page = 1, perPage = 20): Promise<{
  raw: any[];
  blogs: Blog[];
  totalPages: number;
  totalPosts: number;
}> {
  const res = await fetch(
    `${WP_API_BASE}/work?_embed&page=${page}&per_page=${perPage}&status=publish`,
    {
      next: { revalidate: 60 },
    }
  );

  if (!res.ok) {
    throw new Error(`WordPress API returned status ${res.status}`);
  }

  const totalPages = Number(res.headers.get("x-wp-totalpages")) || 1;
  const totalPosts = Number(res.headers.get("x-wp-total")) || 0;
  const rawPosts = await res.json();

  return {
    raw: rawPosts,
    blogs: rawPosts.map(formatWPPost),
    totalPages,
    totalPosts,
  };
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

/**
 * Fetches a single work post by slug from WordPress REST API.
 */
export async function getWPWorkPostBySlug(slug: string): Promise<any | null> {
  try {
    const res = await fetch(
      `${WP_API_BASE}/work?slug=${encodeURIComponent(slug)}&_embed`,
      {
        next: { revalidate: 60 },
      }
    );

    if (!res.ok) return null;

    const posts = await res.json();
    if (!Array.isArray(posts) || posts.length === 0) return null;

    return posts[0];
  } catch (error) {
    console.error(`Failed to fetch WordPress work post with slug "${slug}":`, error);
    return null;
  }
}

export interface CaseStudyFocusCard {
  image?: string;
  title: string;
  text: string;
}

export interface CaseStudyData {
  title: string;
  client: string;
  short_description: string;
  project_tags: string[];
  statistics: Array<{ value: string; description: string }>;
  project_information: Array<{ label: string; value: string }>;
  focus_cards: CaseStudyFocusCard[];
  problem: Array<{ title: string; content: string }>;
  outcome: Array<{ title: string; content: string }>;
  services_delivered: string[];
  industries: string[];
  cta_heading?: string;
  cta_button?: string;
  cta_url?: string;
  hero_image_url?: string;
  listing_image_url?: string;
  case_study_images?: string[];
  acf?: WorkACF;
}

function stripTags(html?: string): string {
  return html ? html.replace(/<[^>]+>/g, "").trim() : "";
}

const mediaCache = new Map<number, string>();

/**
 * Resolves an ACF image value (number ID, string URL, or object) to a source URL string.
 */
export async function resolveMediaUrl(
  img?: number | string | { url?: string; source_url?: string } | null
): Promise<string> {
  if (!img) return "";
  if (typeof img === "string") return img;
  if (typeof img === "object") return img.url || img.source_url || "";
  if (typeof img === "number") {
    if (mediaCache.has(img)) return mediaCache.get(img)!;
    try {
      const res = await fetch(`${WP_API_BASE}/media/${img}`, {
        next: { revalidate: 86400 },
      });
      if (res.ok) {
        const d = await res.json();
        const url = d.source_url || "";
        mediaCache.set(img, url);
        return url;
      }
    } catch {
      return "";
    }
  }
  return "";
}

/**
 * Fetches case study data for /work/[slug] directly from WordPress ACF fields.
 */
export async function getLiveWorkCaseStudy(slug: string): Promise<CaseStudyData | null> {
  if (!slug) return null;

  try {
    const wpPost = await getWPWorkPostBySlug(slug);
    if (!wpPost) return null;

    const acf: WorkACF = wpPost.acf || {};

    // Resolve ACF media images in parallel
    const [logo1Url, logo2Url, logo3Url, img1Url, img2Url, img3Url] = await Promise.all([
      resolveMediaUrl(acf.logo1),
      resolveMediaUrl(acf.logo2),
      resolveMediaUrl(acf.logo3),
      resolveMediaUrl(acf.case_study_image),
      resolveMediaUrl(acf.case_study_image_second),
      resolveMediaUrl(acf.case_study_image_third),
    ]);

    const rawTitle = acf.case_study_title || wpPost.title?.rendered || slug;
    const fullTitle = decodeHtmlEntities(stripTags(rawTitle));

    // Extract client name from <span> in title, or from title split, or fallback
    const spanMatch = (acf.case_study_title || "").match(/<span[^>]*>([\s\S]*?)<\/span>/i);
    const client = spanMatch
      ? decodeHtmlEntities(stripTags(spanMatch[1]))
      : fullTitle.includes(":")
      ? fullTitle.split(":")[0].trim()
      : fullTitle;

    const shortDesc = decodeHtmlEntities(
      stripTags(acf.banner_content || acf.case_study_content_for_all || wpPost.excerpt?.rendered || "")
    );

    // Build Focus Area Cards from ACF (logo1-3, s-head1-3, client_overview, challenge, solutions)
    const focus_cards: CaseStudyFocusCard[] = [];
    if (acf["s-head1"] || acf.client_overview) {
      focus_cards.push({
        image: logo1Url,
        title: acf["s-head1"] || "Overview",
        text: acf.client_overview || "",
      });
    }
    if (acf["s-head2"] || acf.challenge) {
      focus_cards.push({
        image: logo2Url,
        title: acf["s-head2"] || "Challenge",
        text: acf.challenge || "",
      });
    }
    if (acf["s-head3"] || acf.solutions) {
      focus_cards.push({
        image: logo3Url,
        title: acf["s-head3"] || "Solutions",
        text: acf.solutions || "",
      });
    }

    // Solution sections from ACF
    const problem: Array<{ title: string; content: string }> = [];
    if (acf.features_info) {
      problem.push({
        title: acf.feature_title || "Solution",
        content: acf.features_info,
      });
    }

    // Outcome / Impact / Conclusion sections from ACF
    const outcome: Array<{ title: string; content: string }> = [];
    if (acf.impact_info) {
      outcome.push({
        title: acf.impact_title || "Results & Impact",
        content: acf.impact_info,
      });
    }
    if (acf.conclusion_info) {
      outcome.push({
        title: acf.conclusion_title || "Conclusion",
        content: acf.conclusion_info,
      });
    }

    // Parse statistics from impact_info
    const statistics: Array<{ value: string; description: string }> = [];
    if (acf.impact_info) {
      const lines = acf.impact_info.split(/[\r\n]+|<br\s*\/?>/i);
      for (const line of lines) {
        const cleaned = decodeHtmlEntities(stripTags(line)).trim();
        if (!cleaned) continue;
        const valMatch = cleaned.match(/^([0-9]+%|[0-9]+\+|[0-9]+x|[0-9]+–[0-9]+|[0-9]+)/i);
        if (valMatch) {
          const val = valMatch[1];
          const desc = cleaned.slice(val.length).replace(/^[\s–—:-]+/, "").trim();
          statistics.push({ value: val, description: desc || cleaned });
        }
      }
    }

    const showcaseImages = [img1Url, img2Url, img3Url].filter(Boolean);
    const featuredImage = wpPost._embedded?.["wp:featuredmedia"]?.[0]?.source_url;

    return {
      title: fullTitle,
      client: client || fullTitle,
      short_description: shortDesc,
      project_tags: ["Case Study", "Web Development", "UI/UX Design"],
      statistics,
      project_information: [
        { label: "Client:", value: client || fullTitle },
        { label: "Industry:", value: "Digital Solutions & Services" },
        { label: "Platform:", value: "Digital Kangaroos" },
      ],
      focus_cards,
      problem,
      outcome,
      services_delivered: [acf["s-head1"], acf["s-head2"], acf["s-head3"]].filter(Boolean) as string[],
      industries: ["Digital Solutions", "Branding & Strategy"],
      cta_heading: "In a similar industry and want results like these?",
      cta_button: "Get Free Audit",
      cta_url: "/contact-us",
      hero_image_url: featuredImage || showcaseImages[0],
      listing_image_url: featuredImage,
      case_study_images: showcaseImages,
      acf,
    };
  } catch (error) {
    console.error(`Error in getLiveWorkCaseStudy for "${slug}":`, error);
    return null;
  }
}



