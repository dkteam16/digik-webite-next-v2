import Link from 'next/link';

const slides = [
  {
    id: 1,
    title: 'AVON STEEL',
    tags: ['WEBSITE', 'PHOTOGRAPHY', 'VIDEOGRAPHY'],
    image: '/homeavon.png',
    link: '/our-work/avon-steel',
  },
  {
    id: 2,
    title: 'Q&Q SOLUTIONS',
    tags: ['WEBSITE', 'SEO'],
    image: '/homeqqs.png',
    link: '/our-work/qqs-solutions',
  },
  {
    id: 3,
    title: 'RIGHT HORIZONS',
    tags: ['BRANDING', 'WEBSITE'],
    image: '/homeoctave.png',
    link: '/our-work/right-horizons',
  },
];

const Ourlatest = () => {
  return (
    <>
      <section className="ourlatestst bg-white">
        <div className="ourlatest-top text-center">
          <h2>OUR LATEST WORK</h2>
          <p>
            Check out what we have been crafting.
            <br />
            Brands to boxes, websites to window displays.
            <br />
            We’ve done it all.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {slides.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center w-full md:w-[30%] ourlatestmainnas"
            >
              <Link
  href={item.link}
  className="group relative block w-full cursor-pointer overflow-hidden"
  aria-label={`View ${item.title} project`}
>
  <img
    src={item.image}
    alt={item.title}
    className="block w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
  />

  <div className="ourlater-span absolute inset-0 flex justify-end bg-black/10 gap-2 pt-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
    {item.tags.map((tag, tagIndex) => (
      <span
        key={tagIndex}
        className="bg-[#f39c12] text-white font-bold h-fit"
      >
        {tag}
      </span>
    ))}
  </div>
</Link>
         <Link
  href={item.link}
  
  aria-label={`View ${item.title} project`}
>
<h3 className="mt-4 font-black text-xl tracking-tighter uppercase text-gray-800 text-center">
  {item.title}
</h3></Link>
            </div>
          ))}
        </div>

        <div className="text-center button-ourlatest">
          <Link href="/work" className="btn-group-link">
            <div className="btn-main-container">
              <div className="btn-inner-border">
                <span className="btn-arrow-left font-bold">
                  &gt;&gt;
                </span>

                <span className="btn-text font-bold uppercase tracking-tight">
                  Our Work
                </span>

                <span className="btn-arrow-right font-bold">
                  &gt;&gt;
                </span>
              </div>

              <div className="btn-bg-fill"></div>
            </div>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Ourlatest;