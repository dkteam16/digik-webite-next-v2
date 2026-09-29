import Image from "next/image";

type IndustryItem = {
  icon: string;
  title: string;
  description: string;
};

type IndusgrowProps = {
  tag: string;
  title: string;
  description: string;
  items: IndustryItem[];
};

export default function Indusgrow({
  tag,
  title,
  description,
  items,
}: IndusgrowProps) {
  return (
    <div className="indusgrow">
      <div className="mv-section-iner">
        <div className="indusgrow-top">
          <div className="indusgrow-top-in">
            <p className="text-[#F4A31D]">{tag}</p>
            <h2>{title}</h2>
            <p
                className="text-[#333333]"
                dangerouslySetInnerHTML={{ __html: description }}
              />
          </div>
           <Image
                 src="/cartshop.png"
                 alt="logo"
                 width={0}
                 height={0}
                 sizes="100vw"
                 className="w-full h-auto iso"
                 priority
               />
        </div>

        <div className="indusgrow-list">
          <ul className="   ">
            {items.map((item, index) => (
              <li key={index}>
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-full h-auto iso"
                  priority
                />
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}