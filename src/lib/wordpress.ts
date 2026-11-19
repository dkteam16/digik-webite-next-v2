// export const WP_API_BASE = "https://digitalkangaroos.com/wp-json/wp/v2";

// export interface WPPost {
//   id: number;
//   date: string;
//   slug: string;
//   title: {
//     rendered: string;
//   };
//   content: {
//     rendered: string;
//   };
//   excerpt?: {
//     rendered: string;
//   };
//   _embedded?: {
//     "wp:featuredmedia"?: Array<{
//       source_url: string;
//       alt_text?: string;
//     }>;
//     author?: Array<{
//       id: number;
//       name: string;
//     }>;
//     "wp:term"?: Array<
//       Array<{
//         id: number;
//         name: string;
//         slug: string;
//       }>
//     >;
//   };
// }

// /* =========================================================
//    ACF fields of "New work" group
// ========================================================= */
// export interface WorkACF {
//   multi_image?: number | string | { url?: string; source_url?: string };
//   sub_heading?: string;
//   heading?: string;
//   description?: string;
//   sub_descrip?: string;
//   number_value?: string;
//   last_left_side?: string;
//   last_right_side?: string;

//   [key: string]: any;
// }

// export interface Blog {
//   id: number;
//   title: string;
//   slug: string;
//   excerpt?: string;
//   content?: string;
//   featured_image?: string;
//   published_at?: string;
//   author?: {
//     name: string;
//   };
//   category?: {
//     name: string;
//     slug: string;
//   };
//   acf?: WorkACF;
// }

// /**
//  * Decodes common HTML entities returned in WordPress rendered strings.
//  */
// export function decodeHtmlEntities(str: string): string {
//   if (!str) return "";
//   return str
//     .replace(/&#8217;/g, "'")
//     .replace(/&#8216;/g, "'")
//     .replace(/&#8220;/g, '"')
//     .replace(/&#8221;/g, '"')
//     .replace(/&#8211;/g, "–")
//     .replace(/&#8212;/g, "—")
//     .replace(/&#038;/g, "&")
//     .replace(/&amp;/g, "&")
//     .replace(/&quot;/g, '"')
//     .replace(/&#039;/g, "'")
//     .replace(/&lt;/g, "<")
//     .replace(/&gt;/g, ">")
//     .replace(/&nbsp;/g, " ");
// }

// /**
//  * Strips HTML tags and decodes entities from WordPress excerpt.
//  */
// export function cleanExcerpt(excerpt?: string): string {
//   if (!excerpt) return "";
//   return decodeHtmlEntities(
//     excerpt
//       .replace(/<[^>]+>/g, "")
//       .replace(/\[&hellip;\]/g, "...")
//       .replace(/\s+/g, " ")
//       .trim()
//   );
// }

// function stripTags(html?: string): string {
//   return html ? html.replace(/<[^>]+>/g, "").trim() : "";
// }

// /**
//  * Formats a raw WordPress REST API post into our clean Blog structure.
//  * Listing image: ACF "multi_image" first, then WordPress Featured Image.
//  */
// export function formatWPPost(post: any): Blog {
//   const acf: WorkACF | undefined = Array.isArray(post.acf) ? undefined : post.acf;

//   // multi_image (Return Format = Image URL) -> string. Object is also handled.
//   const acfImage =
//     typeof acf?.multi_image === "string"
//       ? acf.multi_image
//       : typeof acf?.multi_image === "object" && acf?.multi_image
//       ? acf.multi_image.url || acf.multi_image.source_url
//       : undefined;

//   const featuredImage =
//     acfImage || post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || undefined;

//   const authorName = post._embedded?.author?.[0]?.name || "Digital Kangaroos";
//   const primaryCategory = post._embedded?.["wp:term"]?.[0]?.[0];

//   const excerptText = acf?.description || post.excerpt?.rendered || "";

//   return {
//     id: post.id,
//     title: decodeHtmlEntities(stripTags(post.title?.rendered || "")),
//     slug: post.slug,
//     excerpt: cleanExcerpt(excerptText),
//     content: post.content?.rendered || "",
//     featured_image: featuredImage,
//     published_at: post.date,
//     author: {
//       name: authorName,
//     },
//     category: primaryCategory
//       ? {
//           name: decodeHtmlEntities(primaryCategory.name),
//           slug: primaryCategory.slug,
//         }
//       : undefined,
//     acf,
//   };
// }

// /**
//  * Fetches paginated posts from WordPress REST API.
//  */
// export async function getWPPosts(page = 1, perPage = 12): Promise<{
//   blogs: Blog[];
//   totalPages: number;
//   totalPosts: number;
// }> {
//   const res = await fetch(
//     `${WP_API_BASE}/posts?_embed&page=${page}&per_page=${perPage}&status=publish`,
//     {
//       next: { revalidate: 60 },
//     }
//   );

//   if (!res.ok) {
//     throw new Error(`WordPress API returned status ${res.status}`);
//   }

//   const totalPages = Number(res.headers.get("x-wp-totalpages")) || 1;
//   const totalPosts = Number(res.headers.get("x-wp-total")) || 0;
//   const rawPosts: WPPost[] = await res.json();

//   return {
//     blogs: rawPosts.map(formatWPPost),
//     totalPages,
//     totalPosts,
//   };
// }

// /**
//  * Fetches a single post by slug.
//  */
// export async function getWPPostBySlug(slug: string): Promise<Blog | null> {
//   try {
//     const res = await fetch(
//       `${WP_API_BASE}/posts?slug=${encodeURIComponent(slug)}&_embed`,
//       {
//         next: { revalidate: 60 },
//       }
//     );

//     if (!res.ok) return null;

//     const posts: WPPost[] = await res.json();
//     if (!Array.isArray(posts) || posts.length === 0) return null;

//     return formatWPPost(posts[0]);
//   } catch (error) {
//     console.error(`Failed to fetch WordPress post with slug "${slug}":`, error);
//     return null;
//   }
// }

// /**
//  * Fetches work-type posts (case studies) from WordPress REST API (/wp-json/wp/v2/work).
//  */
// export async function getWPWorkPosts(page = 1, perPage = 20): Promise<{
//   raw: any[];
//   blogs: Blog[];
//   totalPages: number;
//   totalPosts: number;
// }> {
//   const res = await fetch(
//     `${WP_API_BASE}/new-work?_embed&page=${page}&per_page=${perPage}&status=publish`,
//     {
//       next: { revalidate: 60 },
//     }
//   );

//   if (!res.ok) {
//     throw new Error(`WordPress API returned status ${res.status}`);
//   }

//   const totalPages = Number(res.headers.get("x-wp-totalpages")) || 1;
//   const totalPosts = Number(res.headers.get("x-wp-total")) || 0;
//   const rawPosts = await res.json();

//   return {
//     raw: rawPosts,
//     blogs: rawPosts.map(formatWPPost),
//     totalPages,
//     totalPosts,
//   };
// }

// /**
//  * Fetches the latest posts for sidebar recommendations.
//  */
// export async function getLatestWPPosts(
//   currentSlug: string,
//   count = 5
// ): Promise<Blog[]> {
//   try {
//     const res = await fetch(
//       `${WP_API_BASE}/posts?_embed&per_page=${count + 2}&status=publish`,
//       {
//         next: { revalidate: 60 },
//       }
//     );

//     if (!res.ok) return [];

//     const posts: WPPost[] = await res.json();
//     if (!Array.isArray(posts)) return [];

//     return posts
//       .map(formatWPPost)
//       .filter((post) => post.slug !== currentSlug)
//       .slice(0, count);
//   } catch (error) {
//     console.error("Failed to fetch latest WordPress posts:", error);
//     return [];
//   }
// }

// /**
//  * Fetches a single work post by slug from WordPress REST API.
//  */
// export async function getWPWorkPostBySlug(slug: string): Promise<any | null> {
//   try {
//     const res = await fetch(
//       `${WP_API_BASE}/new-work?slug=${encodeURIComponent(slug)}&_embed`,
//       {
//         next: { revalidate: 60 },
//       }
//     );

//     if (!res.ok) return null;

//     const posts = await res.json();
//     if (!Array.isArray(posts) || posts.length === 0) return null;

//     return posts[0];
//   } catch (error) {
//     console.error(
//       `Failed to fetch WordPress work post with slug "${slug}":`,
//       error
//     );
//     return null;
//   }
// }

// export interface CaseStudyFocusCard {
//   image?: string;
//   title: string;
//   text: string;
// }

// export interface NewWorkData {
//   multi_image: string;
//   sub_heading: string;
//   heading: string;
//   description: string;
//   sub_descrip: string;
//   number_items: string[];
//   last_left_side: string;
//   last_right_side: string;
// }

// export interface CaseStudyData {
//   title: string;
//   client: string;
//   short_description: string;
//   project_tags: string[];
//   statistics: Array<{ value: string; description: string }>;
//   project_information: Array<{ label: string; value: string }>;
//   focus_cards: CaseStudyFocusCard[];
//   problem: Array<{ title: string; content: string }>;
//   outcome: Array<{ title: string; content: string }>;
//   services_delivered: string[];
//   industries: string[];
//   cta_heading?: string;
//   cta_button?: string;
//   cta_url?: string;
//   hero_image_url?: string;
//   listing_image_url?: string;
//   case_study_images?: string[];
//   new_work?: NewWorkData;
//   acf?: WorkACF;
// }

// const mediaCache = new Map<number, string>();

// /**
//  * Resolves an ACF image value (number ID, string URL, or object) to a source URL string.
//  */
// export async function resolveMediaUrl(
//   img?: number | string | { url?: string; source_url?: string } | null
// ): Promise<string> {
//   if (!img) return "";
//   if (typeof img === "string") return img;
//   if (typeof img === "object") return img.url || img.source_url || "";
//   if (typeof img === "number") {
//     if (mediaCache.has(img)) return mediaCache.get(img)!;
//     try {
//       const res = await fetch(`${WP_API_BASE}/media/${img}`, {
//         next: { revalidate: 86400 },
//       });
//       if (res.ok) {
//         const d = await res.json();
//         const url = d.source_url || "";
//         mediaCache.set(img, url);
//         return url;
//       }
//     } catch {
//       return "";
//     }
//   }
//   return "";
// }

// /**
//  * Fetches case study data for /work/[slug] from the "New work" ACF fields.
//  */
// export async function getLiveWorkCaseStudy(
//   slug: string
// ): Promise<CaseStudyData | null> {
//   if (!slug) return null;

//   try {
//     const wpPost = await getWPWorkPostBySlug(slug);
//     if (!wpPost) return null;

//     const acf: WorkACF = Array.isArray(wpPost.acf) ? {} : wpPost.acf || {};

//     const title = decodeHtmlEntities(stripTags(wpPost.title?.rendered || slug));
//     const imageUrl = await resolveMediaUrl(acf.multi_image);

//     const new_work: NewWorkData = {
//       multi_image: imageUrl,
//       sub_heading: decodeHtmlEntities(stripTags(acf.sub_heading)),
//       heading: decodeHtmlEntities(stripTags(acf.heading)),
//       description: decodeHtmlEntities(stripTags(acf.description)),
//       sub_descrip: acf.sub_descrip || "",
//       number_items: (acf.number_value || "")
//         .split(/\r?\n/)
//         .map((l: string) => l.trim())
//         .filter(Boolean),
//       last_left_side: acf.last_left_side || "",
//       last_right_side: acf.last_right_side || "",
//     };

//     return {
//       title,
//       client: title,
//       short_description: new_work.description,
//       project_tags: [],
//       statistics: [],
//       project_information: [],
//       focus_cards: [],
//       problem: [],
//       outcome: [],
//       services_delivered: [],
//       industries: [],
//       cta_heading: "In a similar industry and want results like these?",
//       cta_button: "Get Free Audit",
//       cta_url: "/contact-us",
//       hero_image_url: imageUrl,
//       listing_image_url: imageUrl,
//       case_study_images: imageUrl ? [imageUrl] : [],
//       new_work,
//       acf,
//     };
//   } catch (error) {
//     console.error(`Error in getLiveWorkCaseStudy for "${slug}":`, error);
//     return null;
//   }
// }


export const WP_API_BASE =
  "https://dkteam.in/roos/wp-json/wp/v2";

/* =========================================================
   WORDPRESS TYPES
========================================================= */

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

  acf?: WorkACF;

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

/* =========================================================
   ACF FIELDS
========================================================= */

export interface WorkACF {
  multi_image?:
    | number
    | string
    | {
        ID?: number;
        id?: number;
        url?: string;
        source_url?: string;
      };

  sub_heading?: string;
  heading?: string;
  description?: string;
  sub_descrip?: string;
  number_value?: string;
  last_left_side?: string;
  last_right_side?: string;

  [key: string]: any;
}

/* =========================================================
   BLOG TYPE
========================================================= */

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

/* =========================================================
   HTML HELPERS
========================================================= */

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

function stripTags(html?: string): string {
  return html
    ? html.replace(/<[^>]+>/g, "").trim()
    : "";
}

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

/* =========================================================
   MEDIA CACHE
========================================================= */

const mediaCache = new Map<number, string>();

/* =========================================================
   RESOLVE ACF IMAGE
========================================================= */

export async function resolveMediaUrl(
  img?:
    | number
    | string
    | {
        ID?: number;
        id?: number;
        url?: string;
        source_url?: string;
      }
    | null
): Promise<string> {
  if (!img) return "";

  // String URL or numeric string
  if (typeof img === "string") {
    if (/^\d+$/.test(img)) {
      return resolveMediaUrl(Number(img));
    }

    return img;
  }

  // Image object
  if (typeof img === "object") {
    const url = img.url || img.source_url;

    if (url) return url;

    const id = img.ID || img.id;

    if (id) return resolveMediaUrl(id);

    return "";
  }

  // WordPress attachment ID
  if (typeof img === "number") {
    if (mediaCache.has(img)) {
      return mediaCache.get(img)!;
    }

    try {
      const res = await fetch(
        `${WP_API_BASE}/media/${img}`,
        {
          next: {
            revalidate: 86400,
          },
        }
      );

      if (!res.ok) {
        console.error(
          "WordPress Media API Error:",
          res.status
        );

        return "";
      }

      const data = await res.json();

      const url = data.source_url || "";

      if (url) {
        mediaCache.set(img, url);
      }

      return url;

    } catch (error) {
      console.error("Image resolution error:", error);
      return "";
    }
  }

  return "";
}

/* =========================================================
   FORMAT WORDPRESS BLOG POST
========================================================= */



export function formatWPPost(post: any): Blog {
  const acf: WorkACF | undefined = Array.isArray(post.acf)
    ? undefined
    : post.acf || {};

  const acfImage =
    typeof acf?.multi_image === "string"
      ? acf.multi_image
      : typeof acf?.multi_image === "object" && acf?.multi_image
      ? acf.multi_image.url || acf.multi_image.source_url
      : undefined;

  const featuredImage =
    acfImage ||
    post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
    undefined;

  const authorName =
    post._embedded?.author?.[0]?.name || "Digital Kangaroos";

  const primaryCategory =
    post._embedded?.["wp:term"]?.[0]?.[0];

  const excerptText =
    acf?.description || post.excerpt?.rendered || "";

  return {
    id: post.id,
    title: decodeHtmlEntities(
      stripTags(post.title?.rendered || "")
    ),
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


export async function formatWPWorkPost(post: any): Promise<Blog> {
  const blog = formatWPPost(post);

  const acf = post.acf || {};

  const imageUrl = await resolveMediaUrl(acf.multi_image);

  return {
    ...blog,
    featured_image:
      imageUrl ||
      post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
      "",
    acf: {
      ...acf,
      multi_image: imageUrl,
    },
  };
}



/* =========================================================
   GET BLOG POSTS
========================================================= */

export async function getWPPosts(
  page = 1,
  perPage = 12
): Promise<{
  blogs: Blog[];
  totalPages: number;
  totalPosts: number;
}> {
  const res = await fetch(
    `${WP_API_BASE}/posts?_embed&page=${page}&per_page=${perPage}&status=publish`,
    {
      next: {
        revalidate: 60,
      },
    }
  );

  if (!res.ok) {
    throw new Error(
      `WordPress API returned status ${res.status}`
    );
  }

  const totalPages =
    Number(res.headers.get("x-wp-totalpages")) || 1;

  const totalPosts =
    Number(res.headers.get("x-wp-total")) || 0;

  const rawPosts: WPPost[] = await res.json();

  return {
    blogs: rawPosts.map(formatWPPost),
    totalPages,
    totalPosts,
  };
}

/* =========================================================
   GET SINGLE BLOG BY SLUG
========================================================= */

export async function getWPPostBySlug(
  slug: string
): Promise<Blog | null> {
  try {
    const res = await fetch(
      `${WP_API_BASE}/posts?slug=${encodeURIComponent(slug)}&_embed`,
      {
        next: {
          revalidate: 60,
        },
      }
    );

    if (!res.ok) return null;

    const posts: WPPost[] = await res.json();

    if (!Array.isArray(posts) || posts.length === 0) {
      return null;
    }

    return formatWPPost(posts[0]);

  } catch (error) {
    console.error(
      `Failed to fetch WordPress post with slug "${slug}":`,
      error
    );

    return null;
  }
}

/* =========================================================
   GET NEW WORK POSTS
========================================================= */



export async function getWPWorkPosts(
  page = 1,
  perPage = 20
): Promise<{
  raw: any[];
  blogs: Blog[];
  totalPages: number;
  totalPosts: number;
}> {
  const res = await fetch(
    `${WP_API_BASE}/new-work?_embed&page=${page}&per_page=${perPage}&status=publish`,
    {
      next: { revalidate: 60 },
    }
  );

  if (!res.ok) {
    throw new Error(
      `WordPress Work API Error: ${res.status}`
    );
  }

  const rawPosts = await res.json();

  const blogs = await Promise.all(
    rawPosts.map((post: any) => formatWPWorkPost(post))
  );

  return {
    raw: rawPosts,
    blogs,
    totalPages:
      Number(res.headers.get("x-wp-totalpages")) || 1,
    totalPosts:
      Number(res.headers.get("x-wp-total")) || 0,
  };
}



/* =========================================================
   GET LATEST BLOG POSTS
========================================================= */

export async function getLatestWPPosts(
  currentSlug: string,
  count = 5
): Promise<Blog[]> {
  try {
    const res = await fetch(
      `${WP_API_BASE}/posts?_embed&per_page=${count + 2}&status=publish`,
      {
        next: {
          revalidate: 60,
        },
      }
    );

    if (!res.ok) return [];

    const posts: WPPost[] = await res.json();

    if (!Array.isArray(posts)) return [];

    return posts
      .map(formatWPPost)
      .filter(
        (post) => post.slug !== currentSlug
      )
      .slice(0, count);

  } catch (error) {
    console.error(
      "Failed to fetch latest WordPress posts:",
      error
    );

    return [];
  }
}

/* =========================================================
   GET SINGLE NEW WORK BY SLUG
========================================================= */

export async function getWPWorkPostBySlug(
  slug: string
): Promise<any | null> {
  try {
    const res = await fetch(
      `${WP_API_BASE}/new-work?slug=${encodeURIComponent(slug)}&_embed`,
      {
        next: {
          revalidate: 60,
        },
      }
    );

    if (!res.ok) return null;

    const posts = await res.json();

    if (!Array.isArray(posts) || posts.length === 0) {
      return null;
    }

    return posts[0];

  } catch (error) {
    console.error(
      `Failed to fetch WordPress work post with slug "${slug}":`,
      error
    );

    return null;
  }
}

/* =========================================================
   CASE STUDY TYPES
========================================================= */

export interface CaseStudyFocusCard {
  image?: string;
  title: string;
  text: string;
}

export interface NewWorkData {
  multi_image: string;
  sub_heading: string;
  heading: string;
  description: string;
  sub_descrip: string;
  number_items: string[];
  last_left_side: string;
  last_right_side: string;
}

export interface CaseStudyData {
  title: string;
  client: string;
  short_description: string;

  project_tags: string[];

  statistics: Array<{
    value: string;
    description: string;
  }>;

  project_information: Array<{
    label: string;
    value: string;
  }>;

  focus_cards: CaseStudyFocusCard[];

  problem: Array<{
    title: string;
    content: string;
  }>;

  outcome: Array<{
    title: string;
    content: string;
  }>;

  services_delivered: string[];
  industries: string[];

  cta_heading?: string;
  cta_button?: string;
  cta_url?: string;

  hero_image_url?: string;
  listing_image_url?: string;
  case_study_images?: string[];

  new_work?: NewWorkData;
  acf?: WorkACF;
}

/* =========================================================
   GET LIVE CASE STUDY
========================================================= */

export async function getLiveWorkCaseStudy(
  slug: string
): Promise<CaseStudyData | null> {
  if (!slug) return null;

  try {
    const wpPost = await getWPWorkPostBySlug(slug);

    if (!wpPost) return null;

    const acf: WorkACF = Array.isArray(wpPost.acf)
      ? {}
      : wpPost.acf || {};

    // Decode title
    const title = decodeHtmlEntities(
      stripTags(
        wpPost.title?.rendered || slug
      )
    );

    // Resolve ACF image ID / URL / object
    const imageUrl = await resolveMediaUrl(
      acf.multi_image
    );

    // Preserve all ACF fields
    const new_work: NewWorkData = {
      multi_image: imageUrl,

      // Preserve HTML for frontend rendering
      sub_heading: acf.sub_heading || "",

      heading: decodeHtmlEntities(
        acf.heading || ""
      ),

      description: decodeHtmlEntities(
        acf.description || ""
      ),

      sub_descrip: acf.sub_descrip || "",

      number_items: (
        acf.number_value || ""
      )
        .split(/\r?\n/)
        .map((item: string) => item.trim())
        .filter(Boolean),

      last_left_side:
        acf.last_left_side || "",

      last_right_side:
        acf.last_right_side || "",
    };

    // Create compatible project information
    const projectInformation = new_work.sub_descrip
      .split(/\r?\n/)
      .map((line) => line.trim())
      .filter(Boolean)
      .map((line) => {
        const separator = line.indexOf(":");

        if (separator === -1) {
          return {
            label: "",
            value: line,
          };
        }

        return {
          label: line.slice(0, separator).trim(),
          value: line.slice(separator + 1).trim(),
        };
      });

    return {
      title,

      client: title,

      short_description: new_work.description,

      // ACF HTML list remains available separately
      project_tags: [],

      // Statistics
      statistics: new_work.number_items.map((item) => ({
        value: item,
        description: "",
      })),

      // Client information
      project_information: projectInformation,

      focus_cards: [],

      // Challenge
      problem: new_work.last_left_side
        ? [
            {
              title: "The Challenge",
              content: new_work.last_left_side,
            },
          ]
        : [],

      // Solution
      outcome: new_work.last_right_side
        ? [
            {
              title: "The Solution",
              content: new_work.last_right_side,
            },
          ]
        : [],

      services_delivered: [],

      industries: [],

      cta_heading:
        "In a similar industry and want results like these?",

      cta_button: "Get Free Audit",

      cta_url: "/contact-us",

      hero_image_url: imageUrl,

      listing_image_url: imageUrl,

      case_study_images: imageUrl
        ? [imageUrl]
        : [],

      new_work,

      acf: {
        ...acf,
        multi_image: imageUrl,
      },
    };

  } catch (error) {
    console.error(
      `Error in getLiveWorkCaseStudy for "${slug}":`,
      error
    );

    return null;
  }
}
