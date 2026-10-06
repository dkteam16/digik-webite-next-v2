import Link from 'next/link';
import Image from "next/image";
export default function Allinone() {
  return (
    <div className="allinone bg-white">
        
       <div className="allinone-iner "> 
         <div className="allinone-iner-left relative ">
              <Image
                               src="/about/startback.webp"
                               alt="logo"
                               width={0}
                               height={0}
                               sizes="100vw"
                               className="allinoneleftback"  
                               priority
                               />
               <p className='text-[#F4A31D]'>What We Do</p>
               <h1>Every Service Built For <span className='text-[#F4A31D]'>Industry</span>.</h1>
               <p className='text-[#333333] all-one-border'>We don't offer a menu of generic digital services. Every service we provide is designed from the ground up for manufacturers, exporters, and B2B industrial companies — because that specificity is what makes the difference between a website that looks good and one that generates RFQs.</p>
               <div className="flex flex-wrap gap-4   items-center all-innone-btn">
                  <Link href="/contact-us" className="btn-group-link">
                    <div className="btn-main-container">    
                      <div className="btn-inner-border">
                        <span className="btn-arrow-left font-bold">
                          &gt;&gt;
                        </span>
                        <span className="btn-text font-bold uppercase tracking-tight">
                          get a free audit
                        </span>
                        <span className="btn-arrow-right font-bold">
                          &gt;&gt;
                        </span>
                      </div>
                      <div className="btn-bg-fill"></div>
                    </div>
                  </Link>
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
                          see our work
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
         <div className="allinone-iner-right relative ">
              <Image
                src="/about/iso.png"
                alt="logo"
                width={0}
                height={0}
                sizes="100vw"
                className="allinoneimage"  
                priority
                />
              <div className="allinone-iner-right-in ">
                  <h4>8+</h4>
                  <p>Services for B2B Industry</p>
              </div>
              <div className="allinone-iner-right-in ">
                  <h4>150+</h4>
                  <p>Industrial Clients Served</p>
              </div>
              <div className="allinone-iner-right-in ">
                  <h4>100%</h4>
                  <p>Industrial & B2B Focus</p>
              </div>
         </div>
      </div> 
    </div>
  );
}