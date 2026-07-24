export type BlogPost = {
  slug: string;
  /** Thumbnail used on the blog listing page. */
  cardImage: string;
  /** Larger hero crop used on the post's own page (falls back to cardImage when no dedicated crop exists). */
  heroImage: string;
  date: string;
};

/**
 * The source design gives every listing card the same title/body copy and only
 * varies the card image + date — so every slug below renders the one real
 * article (see blog-inside.tsx), just at its own URL with its own thumbnail.
 */
export const BLOG_TITLE = `Is Your Website Due for a Redesign? 10 Signs It's Hurting Your Sales (And What to Do Next)`;

export const BLOG_POSTS: BlogPost[] = [
  { slug: "website-redesign-signs", cardImage: "/images/blog/imgImage215.png", heroImage: "/images/blog-inside/imgImage215.png", date: "April 30, 2026" },
  { slug: "website-redesign-signs-2", cardImage: "/images/blog/imgImage216.png", heroImage: "/images/blog/imgImage216.png", date: "April 30, 2026" },
  { slug: "website-redesign-signs-3", cardImage: "/images/blog/imgImage217.png", heroImage: "/images/blog/imgImage217.png", date: "April 30, 2026" },
  { slug: "website-redesign-signs-4", cardImage: "/images/blog/imgImage218.png", heroImage: "/images/blog/imgImage218.png", date: "Jul 09, 2026" },
  { slug: "website-redesign-signs-5", cardImage: "/images/blog/imgImage219.png", heroImage: "/images/blog/imgImage219.png", date: "Jul 09, 2026" },
  { slug: "website-redesign-signs-6", cardImage: "/images/blog/imgImage220.png", heroImage: "/images/blog/imgImage220.png", date: "Jul 09, 2026" },
  { slug: "website-redesign-signs-7", cardImage: "/images/blog/imgImage221.png", heroImage: "/images/blog/imgImage221.png", date: "Jul 09, 2026" },
  { slug: "website-redesign-signs-8", cardImage: "/images/blog/imgImage222.png", heroImage: "/images/blog/imgImage222.png", date: "Jul 09, 2026" },
  { slug: "website-redesign-signs-9", cardImage: "/images/blog/imgImage223.png", heroImage: "/images/blog/imgImage223.png", date: "Jul 09, 2026" },
  { slug: "website-redesign-signs-10", cardImage: "/images/blog/imgImage224.png", heroImage: "/images/blog/imgImage224.png", date: "Jul 09, 2026" },
  { slug: "website-redesign-signs-11", cardImage: "/images/blog/imgImage225.png", heroImage: "/images/blog/imgImage225.png", date: "Jul 09, 2026" },
  { slug: "website-redesign-signs-12", cardImage: "/images/blog/imgImage226.png", heroImage: "/images/blog/imgImage226.png", date: "Jul 09, 2026" },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((post) => post.slug === slug);
}
