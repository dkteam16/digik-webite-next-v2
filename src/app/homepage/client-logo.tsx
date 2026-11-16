import React from 'react';

const clientLogos = [
  "/clientlogo/clientlogo1.png", "/clientlogo/clientlogo2.png", "/clientlogo/clientlogo3.png", 
  "/clientlogo/clientlogo4.png", "/clientlogo/clientlogo5.png", "/clientlogo/clientlogo6.png",
  "/clientlogo/clientlogo7.png", "/clientlogo/clientlogo8.png", "/clientlogo/clientlogo9.png",
  "/clientlogo/clientlogo10.png", "/clientlogo/clientlogo11.png", "/clientlogo/clientlogo12.png",
  "/clientlogo/clientlogo13.png", "/clientlogo/clientlogo14.png", "/clientlogo/clientlogo15.png",
  "/clientlogo/clientlogo16.png",  
];

export default function ClientsSection() {
  return (
    <section className=" client-main   bg-[#333333] ">
      <div className=" client-logo-iner">
        
        {/* --- Heading --- */}
        <div className="text-center mb-14">
          <h2 >
            SOME OF  <br /> OUR
            <span className="text-[#f5a623]"> CLIENTS</span>
          </h2>
        </div>

        {/* --- Logo Grid --- */}
     {/* --- Logo Grid --- */}
<div className="mainsfdsfdsf ">  
  {clientLogos.map((logo, index) => (
    <div
      key={index}
      className="dsafsvfbtre "
    >
      <img
        src={logo}
        alt={`Client ${index + 1}`}
        className=" "
      />
    </div>
  ))}
</div>

      </div>
    </section>
  );
}
