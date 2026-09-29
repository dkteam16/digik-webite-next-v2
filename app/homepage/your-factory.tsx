import MobileFactory from "./you-factory-mobile"


const problems = [
  {
    number: "01",
    title: "OVERSEAS BUYERS CAN'T FIND YOU",
    description:
      `If your manufacturing company doesn't rank on Google for the terms your ideal buyers are searching — "casting supplier India," "precision machined parts manufacturer"  those buyers go to your competitors. They never know you exist.`,
  },
  {
    number: "02",
    title: "YOUR WEBSITE DOESN'T BUILD TRUST",
    description:
      `A buyer from Germany or the UK visits your site and sees a 2012-era layout with stock photos and no certifications displayed. They move on. Your factory may be outstanding — your website is losing you business.`,
  },
  {
    number: "03",
    title: "INDIAMART OWNS YOUR LEADS",
    description:
      `You're paying lakhs every year for leads that are low-quality, price-driven, and controlled by a platform that can change its algorithm or pricing at any time. You've built nothing you own.`,
  },
  {
    number: "04",
    title: "NO RFQ SYSTEM, NO ENQUIRY FLOW",
    description:
      `Your website has no structured RFQ form, no product catalogue with technical specifications, no clear pathway for a serious buyer to submit an enquiry. You're making it hard to be hired.`,
  },
];



const slides = [
  {
    number: "150+",
    title: " Industrial Websites Delivered",
  },
  {
    number: "3X",
    title: " Average RFQ Increase in 6 Months",
  },
  {
    number: "12+",
    title: " Manufacturing Sectors Served",
  },
  {
    number: "100%",
    title: " B2B & Industrial Focus",
  }, 
];




const Yourfactory = () => {
  return (
    <>
            <section className="problem-section bg-white">

            <div className="problem-container">

                {/* LEFT CONTENT */}
                <div className="problem-left">

                <p className="problem-subtitle">
                    THE PROBLEM WE SOLVE
                </p>

                <h2 className="problem-title">

                    YOUR FACTORY IS
                    <br />

                    WORLD-CLASS.
                    <br />

                    <span>YOUR WEBSITE</span>
                    <br />

                    IS NOT.

                </h2>

                <p className="problem-text">

                    Most manufacturing companies in India have outdated,
                    slow, or generic websites that fail to communicate
                    their true capability to international buyers.
                    We fix that.

                </p>

                </div>

                {/* RIGHT SIDE */}
                {/* <div className=""> */}
                    <div className="problem-grid desktop-view">

                    {problems.map((item, index) => (

                        <div className="problem-card" key={index}>

                        <span className="problem-number">
                            {item.number}
                        </span>

                        <h3>
                            {item.title}
                        </h3>

                        <p>
                            {item.description}
                        </p>

                        </div>

                    ))}

                    </div>
                {/* </div> */}
                <div className="mobile-view">   <MobileFactory /></div>
 
            </div>

            </section>
    
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