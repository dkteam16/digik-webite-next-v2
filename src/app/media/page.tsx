import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Media | Digital Kangaroos",
  description:
    "Media features, seminars, awards, and events featuring Digital Kangaroos.",
};

const BASE = "https://digitalkangaroos.com/wp-content/uploads/";

/* title aur description optional hain. Khali "" rakhoge to image ke neeche kuch nahi dikhega */
const mediaItems = [
  { src:"media(2).webp", alt: "Sania Gupta Digital Kangaroos", title: "", description: "" },
  { src:"media(3).webp", alt: "Seminar on ChatGPT by Sania Gupta", title: "", description: "" },
  { src:"media(4).webp", alt: "ChatGPT workshop by Sania Gupta", title: "", description: "" },
  { src:"media(5).webp", alt: "Sania Gupta Digital Kangaroos Media Coverage", title: "", description: "" },
  { src:"media(6).webp", alt: "Sania Gupta Digital Kangaroos", title: "", description: "" },
  { src:"media(7).webp", alt: "Sania Gupta Digital Kangaroos", title: "", description: "" },
  { src:"media(8).webp", alt: "Sania Gupta (Digital Kangaroos) at BWE", title: "", description: "" },
  { src:"media(9).webp", alt: "Sania Gupta Digital Woman Award", title: "", description: "" },
  { src:"media(10).webp", alt: "Sania Gupta Digital Woman Award", title: "", description: "" },
  { src:"media(11).webp", alt: "Sania Gupta Alumni Award", title: "", description: "" },
  { src:"media(12).webp", alt: "Sania Gupta at WEF CICU", title: "", description: "" },
  { src:"media(13).webp", alt: "Sania Gupta at PCTE Badowal Ludhiana", title: "", description: "" },
  { src:"media(14).webp", alt: "Sania Gupta at PCTE Badowal Ludhiana", title: "", description: "" },
  { src:"media(15).webp", alt: "Sania Gupta at PCTE Badowal Ludhiana", title: "", description: "" },
  { src:"media(16).webp", alt: "Sania Gupta at PCTE Badowal Ludhiana", title: "", description: "" },
];

export default function MediaPage() {
  return (
    <div className=""> 
        <div className="privacy-policy-header"><h1>Media</h1></div>
        <section id="media" className="bg-white pt-[40px]     md:pt-[50px] md:pb-[60px]">
        <div className="mx-auto max-w-[90%]">
            {/* Mobile: 1 column, Desktop: 3 columns */}
            <div className="grid grid-cols-1 gap-[18px] md:grid-cols-3 md:gap-6">
            {mediaItems.map((item, index) => (
                <div className="min-w-0" key={index}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src={item.src}
                    alt={item.alt}
                    loading="lazy"
                    className="block h-auto w-full"
                />

                {item.title && (
                    <h3 className="mt-3 mb-1.5 text-[20px] font-bold leading-[26px] text-[#333333]">
                    {item.title}
                    </h3>
                )}

                {item.description && (
                    <p className="text-[16px] leading-[24px] text-[#333333]">
                    {item.description}
                    </p>
                )}
                </div>
            ))}
            </div>
        </div>
        </section>
    </div>
  );
}