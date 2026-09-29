import Image from "next/image";

const contactData = [
  {
    icon: "/conact1.png",
    title: "FREE WEBSITE AUDIT",
    description:
      "We'll review your existing website and tell you exactly what's costing you buyer enquiries – no obligation, no agency speak.",
  },
  {
    icon: "/conact2.png",
    title: "NEW PROJECT",
    description:
      "Website build, SEO strategy, positioning, or content – tell us what you need and we'll scope it properly.",
  },
  {
    icon: "/conact3.png",
    title: "TALK TO US",
    phone: "09814820845",
    email: "hello@digitalkangaroos.com",
  },
];

export default function Local() {
  return (
    <div className="contact-left">
      <div className="contact-left-iner">
        {contactData.map((item, index) => (
          <div className="contact-item" key={index}>

            {/* Icon */}
            <div className="contact-icon">
              <Image
                src={item.icon}
                alt={item.title}
                width={60}
                height={60}
              />
            </div>

            {/* Content */}
            <div className="contact-content">
              <h3 className="text-[#333333]">
                {item.title}
              </h3>

              {item.description && (
                <p className="text-[#333333]">
                  {item.description}
                </p>
              )}

              {item.phone && (
                <div> <a
                  href={`tel:${item.phone}`}
                  className="contact-phone text-[#333333]"
                >
                  {item.phone}
                </a> </div> 
              )}
             
              {item.email && (
                <a
                  href={`mailto:${item.email}`}
                  className="contact-email text-[#333333]"
                >
                  {item.email}
                </a>
              )}
            </div>

          </div>
        ))}
      </div>
    </div>  
  );
}