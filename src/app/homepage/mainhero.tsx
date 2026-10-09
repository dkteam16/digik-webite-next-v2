"use client";

import Image from "next/image";

const slides = [
  { title: "Engineering Firm Web Design", image: "/slide1.svg" },
  { title: "Web Design for Manufacturers", image: "/slide2.svg" },
  { title: "Industrial SEO Agency India", image: "/slide3.svg" },
  { title: "B2B Website Design & Development", image: "/slide4.svg" },
  { title: "RFQ FORM DESIGN", image: "/slide5.svg" },
];

const Hero = () => {
  const handleScrollMore = () => {
    const next = document.getElementById("after-hero");
    if (next) {
      next.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      // fallback: ek screen height neeche scroll
      window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
    }
  };

  return (
    <>
      <section className="relative h-screen overflow-hidden hero-video">
        <div className="image-miannew">
          <a href="http://cartpotato.com/" target="_blank" rel="noopener noreferrer" className="contents"><Image
            src="/cartshop.png"
            alt="logo logo"
            width={0}
            height={0}
            sizes="100vw"
            className="sdsaimagee-stlakdsdtt"
            priority
          /></a>
        </div>

        {/* Video */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Content */}
        <div className="relative z-10 flex items-center justify-center h-full text-center pointer-events-none">
          <h1 className="text-white text-6xl font-bold">
            <Image
              src="/homelogo.png"
              alt="logo logo"
              width={0}
              height={0}
              sizes="100vw"
              className="imagee-stlakdsdtt"
              priority
            />
            <p>B2B Web Design agency</p>
            <p className="isos-mai">(ISO 9001:2015 Company)</p>
          </h1>
        </div>

        {/* Click More */}
        <button
          type="button"
          onClick={handleScrollMore}
          aria-label="Scroll to next section"
          className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10 cursor-pointer bg-transparent border-0 p-0"
        >
          <Image
            src="/clickmore.png"
            alt="Scroll More"
            width={140}
            height={81}
            priority
            className="w-[90px] md:w-[140px] h-auto animate-bounce"
          />
        </button>
      </section>

      <div
        id="after-hero"
        className="overflow-hidden image-sliderdsdsf contine_slide py-6"
      >
        <div className="marquee flex items-center">
          {/* Duplicate for infinite effect */}
          {[...slides, ...slides].map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-4 mx-5 whitespace-nowrap"
            >
              <Image
                src={item.image}
                alt={item.title}
                width={59}
                height={54}
                priority
                className="w-[50px] md:w-[59px] h-auto"
              />

              <p className="text-white text-lg md:text-2xl font-semibold uppercase">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Hero;    