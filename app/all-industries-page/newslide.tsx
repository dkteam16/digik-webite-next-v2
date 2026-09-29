 

const slides = [
  {
    number: "3X",
    title: " More RFQs after website relaunch",
  },
  {
    number: "87%",
    title: "  Clients rank page 1 within 6 months",
  },
  {
    number: "60+",
    title: " Manufacturer websites live in India",
  },
  {
    number: "₹0 ",
    title: " Extra IndiaMart spend needed post-SEO",
  }, 
];




const Yourfactory = () => {
  return (
    <>
          
             
            <div className="overflow-hidden factory  contine_slide py-6">
            
                <div className="marquee flex items-center">
            
                    {/* Duplicate for infinite effect */}
                    {[...slides, ...slides].map((item, index) => (
            
                    <div
                        key={index}
                        className="flex items-center gap-4 mx-5 whitespace-nowrap"
                    >
            
                        
            
                        <p className="text-white text-lg md:text-2xl font-semibold uppercase">
                        <span>{item.number}</span> 
                        {item.title}
                        </p>
            
                    </div>
            
                    ))}
            
                </div>
            
                </div>


    </>
  );
};

export default Yourfactory;
 