import Link from 'next/link'; 
export default function Something() {
  return ( 
     <>
        <div className="something bg-white">
            <div className='something-inner text-center'>
                <h2>Let's Build Something That Actually Works.</h2>
                <p>If you are a manufacturer, exporter, or B2B industrial company that is serious about growing through digital — not just having a website, but building a genuine lead generation asset — we should talk. Start with a free audit of your current website. No cost, no obligation, delivered in 48 hours.</p>
              <div className='text-center button-ourlatest'>
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
                        get your free website audit
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
    <p className='somefree-last'>Free  ·  No Obligation  ·  Delivered in 48 Hours</p>
        </div>
        </div>
     </>
  );
}