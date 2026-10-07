"use client"; 
import Image from 'next/image';
import React, { useState } from 'react';

const testimonials = [
  {
    id: 1,
    title: "Avon Steel Industries",
    subtitle: " ",
    text: '"Digital Kangaroos transformed our outdated site into a global-ready platform that reflects our leadership and drives qualified B2B leads."',
    image: '/test1.png', 
  },
  {
    id: 2,
    title: "QQS Solutions",
    subtitle: " ",
    text: '"We needed a clean, intuitive site—and Digital Kangaroos delivered with technical precision and a modern interface that builds client trust."',
    image: '/test2.png',  
  },
  {
    id: 3,
    title: "Right Horizons",
    subtitle: "",
    text: '"Digital Kangaroos built a compliant, trust-building website that communicates our financial services clearly and drives quality organic leads."',
    image: '/test3.png', // Teesre slide ki unique image yahan lagayein
  },
  {
    id: 4,
    title: "Octave Mettle",
    subtitle: " ",
    text: '“Digital Kangaroos has been doing a great job managing our Google Business Profiles and local SEO across multiple locations. They’ve been consistent, responsive, and very hands-on with everything from keeping listings updated to improving our local visibility. It’s been reassuring to have a team that takes complete ownership and understands what it takes to manage local SEO at scale.”',
    image: '/test4.png', // Teesre slide ki unique image yahan lagayein
  } 
];

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const currentSlide = testimonials[currentIndex];

  return (
 <section className='bg-[#333333] testimonial relative'>
            <Image 
                   src="/google.png"
                   alt="logo logo"
                   width={0}
                   height={0}
                   sizes="100vw"
                   className="google-testi absolute"  
                   priority
                   />
   <div className='testimonisal-top text-center'>
       <Image
                   src="/kangro-logo.png"
                   alt="logo logo"
                   width={0}
                   height={0}
                   sizes="100vw"
                   className="imagee-stlak"  
                   priority
                   />
        <h2>TESTIMONIALS</h2>
   </div>

    <div className="ts-container ">
      
      {/* LEFT SIDE: TEXT CONTENT & BUTTONS */}
      <div className="ts-left-side">
        <div className='testimonial-top'>
          <p className="ts-subtitle">{currentSlide.subtitle}</p>
          <h3 className="ts-title">{currentSlide.title}</h3>
           <p className="ts-description">{currentSlide.text}</p>
        </div>
        <div className='desktop-view'> 
            <div className="ts-button-group">
              <button onClick={handlePrev} className="ts-arrow-button"><div>  <span>&lt;</span></div></button>
              <button onClick={handleNext} className="ts-arrow-button"><div><span>&gt;</span></div></button>
            </div>
        </div>
      </div>

      {/* RIGHT SIDE: 3D SLIDER STACK */}
      <div className="ts-right-side">
        {testimonials.map((slide, index) => {
          // Card state positions calculate karne ka formula
          let cardClass = "";
          
          if (index === currentIndex) {
            cardClass = "active-card"; // Beech wala main card
          } else if (
            index === currentIndex - 1 || 
            (currentIndex === 0 && index === testimonials.length - 1)
          ) {
            cardClass = "left-card"; // Left side daba hua card
          } else {
            cardClass = "right-card"; // Right side daba hua card
          }

          return (
            <div 
              key={index} 
              className={`ts-slide-card ${cardClass}`}
              onClick={() => setCurrentIndex(index)} // Side wale card par click karne par bhi wo aage aa jayega
            >
              <img src={slide.image} alt={slide.title} />
            </div>
          );
        })}
      </div>
     

    </div>
    <div className='mobile-view'>
      <div className="ts-button-group "> 
          <button onClick={handlePrev} className="ts-arrow-button"><div><span>&lt;</span></div></button>
          <button onClick={handleNext} className="ts-arrow-button"><div><span>&gt;</span></div></button>
        </div>
      </div>
</section>
  );
}
