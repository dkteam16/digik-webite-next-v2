import Link from 'next/link'; 
const slides = [
  { id: 1, title: 'AVON STEEL', tags: ['WEBSITE', 'PHOTOGRAPHY', 'VIDEOGRAPHY'], image: '/avon.png' },
  { id: 2, title: 'Q&Q SOLUTIONS', tags: ['WEBSITE', 'SEO'], image: '/qq.png' },
  { id: 3, title: 'RIGHT HORIZONS', tags: ['BRANDING', 'WEBSITE'], image: 'right.png' },
];



const Ourlatest = () => {
  return (
    <> 
    <section className="ourlatestst bg-white">
      <div className="ourlatest-top text-center">
         <h2>OUR LATEST WORK</h2>
         <p>
             Check out what we have been crafting.<br></br>Brands to boxes, websites to window displays.<br></br>We’ve done it all.
         </p>
      </div>
       <div className="flex flex-wrap justify-center gap-6 ">
      
            {/* स्लाइडर की तरह ही यहाँ mapping हो रही है */}
            {slides.map((item, index) => (
              <div key={index} className="flex flex-col items-center w-full md:w-[30%]   ourlatestmainnas">
                
            
                <div className="group relative w-full aspect-video  cursor-pointer">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                  />
                  
                  
                  <div className=" ourlater-span   absolute inset-0 flex justify-end bg-transparent gap-2 pt-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/10">
                    {item.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex} 
                        className="bg-[#f39c12] text-white   font-bold     h-fit"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* नीचे वाला टाइटल */}
                <h3 className="mt-4 font-black text-xl tracking-tighter uppercase text-gray-800">
                  {item.title}
                </h3>
                
              </div>
            ))}
       </div>
<div className='text-center button-ourlatest'>
      <Link href="/work" className="btn-group-link">
        {/* मुख्य बटन का कंटेनर */}
        <div className="btn-main-container">
          
          {/* अंदर का बॉर्डर वाला डिब्बा */}
          <div className="btn-inner-border">
            
            {/* बायाँ एरो (शुरुआत में छुपा हुआ, होवर पर अंदर आएगा) */}
            <span className="btn-arrow-left font-bold">
              &gt;&gt;
            </span>

            {/* मुख्य टेक्स्ट */}
            <span className="btn-text font-bold uppercase tracking-tight">
              Our Work
            </span>

            {/* दायाँ एरो (शुरुआत में दिखेगा, होवर पर बाहर जाएगा) */}
            <span className="btn-arrow-right font-bold">
              &gt;&gt;
            </span>
          </div>

          {/* होवर करने पर पीछे से आने वाला काला गोला (Background Fill Effect) */}
          <div className="btn-bg-fill"></div>
        </div>
      </Link>
    </div>
    </section>
    </>
  );
};

export default Ourlatest;