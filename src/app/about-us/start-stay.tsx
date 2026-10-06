import Link from 'next/link';
import Image from "next/image";
export default function Startstay() {
  return (
    <div className="startstay bg-white">
          <div  className="startstay-left bg-white relative">
             <Image
                 src="/about/startback.webp"
                 alt="logo logo"
                 width={0}
                 height={0}
                 sizes="100vw"
                 className="imagee-stlakdsd"  
                 priority
                 />
             <h1>We Started Small. We Stayed <span>Focused</span>.</h1>
             <p>Our journey began as a humble web development agency with a vision to create captivating online experiences. Fuelled by innovation and an unwavering commitment to excellence, we evolved into something more deliberate — a specialist web and SEO agency that serves one audience, and serves them exceptionally well: manufacturers, exporters, and B2B industrial companies.</p>
               <div className="flex flex-wrap gap-4 pt-4 items-center buil-manubtn">
                  <Link href="/work" className="btn-group-link">
                    <div className="btn-main-container">    
                      <div className="btn-inner-border">
                        <span className="btn-arrow-left font-bold">
                          &gt;&gt;
                        </span>
                        <span className="btn-text font-bold uppercase tracking-tight">
                          SEE OUR WORK
                        </span>
                        <span className="btn-arrow-right font-bold">
                          &gt;&gt;
                        </span>
                      </div>
                      <div className="btn-bg-fill"></div>
                    </div>
                  </Link>
                  <Link href="/contact-us" className="btn-group-link">
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
                        GET A FREE AUDIT
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
         </div>
         <div className="startstay-right">
            <div className=' startstay-right-in'> 
                <div className='startstay-right-1 bg-[#2D2D2D] ss-full-box '>
                     <h3>100%</h3> 
                     <p className='text-white'>of our clients are manufacturers, exporters, or B2B industrial companies. Not because we had to be — because we chose to be. Specialisation is the point.</p>
                </div>
                <div className='startstay-right-2 bg-[#3F3F3F] ss-half-box'>
                   <h3>150+</h3>
                   <p className='text-white'>Industrial Websites Delivered</p>
                </div>
                <div className='startstay-right-3 bg-[#333333] ss-half-box'>
                   <h3>12+</h3>
                   <p className='text-white'>Manufacturing Sectors Served</p>
                </div>
                <div className='startstay-right-4 bg-[#333333] ss-half-box'>
                      <h3>3×</h3>
                      <p className='text-white'>Avg. RFQ Uplift in 6 Months</p>
                </div>
                 <div className='startstay-right-5 bg-[#3F3F3F] ss-half-box'>
                      <h3>8+</h3>
                      <p className='text-white'>Years Building for Industry</p>
                </div>
            </div>
         </div>
    </div>
  );
}
