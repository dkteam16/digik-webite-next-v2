  
import Image from "next/image";
 
const slides = [
  {
    title: "Engineering Firm Web Design",
    image: "/slide1.svg",
  },
  {
    title: "Web Design for Manufacturers",
    image: "/slide2.svg",
  },
  {
    title: "Industrial SEO Agency India",
    image: "/slide3.svg",
  },
  {
    title: "B2B Website Design & Development",
    image: "/slide4.svg",
  },
  {
    title: "RFQ FORM DESIGN",
    image: "/slide5.svg",
  },
];


const Allinonemarque = () => {
  return (
    <>
  
  <div className="overflow-hidden image-sliderdsdsf contine_slide py-6">

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

      </>  );
};

export default Allinonemarque;