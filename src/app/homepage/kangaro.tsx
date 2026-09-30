import Link from 'next/link'; 
import Image from 'next/image';
export default function Kangaroo() {
  return (
  <> 
   <div className='bg-white'>
     <div className='kangaroo bg-white'>
        <div className='kangaroo-iner'>
           <div className='kangarooleft'>
               <div className='kangarooleft-in'>
                 <h2 className='uppercase'><span className='text-[#f5a623]'>Ready To Be Found</span> By The Buyers Who Matter?</h2>
                 <p className='uppercase'>Let's build a website and SEO strategy that works as hard as your factory does.  </p>
                  <div className='text-left kangaroobutton-ourlatest'>
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
             get a free website audit
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
                    <p>Free  ·  No Obligation  ·  Delivered in 48 Hours</p>
                </div>
           </div>
           <div className='kangarooleft-right'>
              <Image
                 className=""
                 src="/kangaroo.png"
                 alt="logo logo"
                 width={426}
                 height={117}
                 priority
                />
           </div>
        </div>
     </div>
</div>
  </>
  );
}
