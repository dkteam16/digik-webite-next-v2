import Link from "next/link";
import Image from "next/image";

type Stat = {
  value: string;
  label: string;
};

type ButtonItem = {
  text: string;
  link: string;
};

type AllinoneProps = {
  tag: string;
  titlePrefix: string;
  titleHighlight: string;
  titlePrefixtwo?: string;
  description: string;
  buttons: ButtonItem[];
  backgroundImage: string;
  rightImage: string;
  stats: Stat[];
};

export default function Allinone({
  tag,
  titlePrefix,
  titleHighlight,
  titlePrefixtwo = "",
  description,
  buttons,
  backgroundImage,
  rightImage,
  stats,
}: AllinoneProps) {
  return (
    <div className="allinone bg-white">
      <div className="allinone-iner">
        <div className="allinone-iner-left relative">
          <Image
            src={backgroundImage}
            alt="logo"
            width={0}
            height={0}
            sizes="100vw"
            className="allinoneleftback"
            priority
          />
          <p className="text-[#F4A31D]">{tag}</p>
          {/* <h1>
            {titlePrefix} <span className="text-[#F4A31D]">{titleHighlight}</span> {titlePrefixtwo}
          </h1> */}
   <h1>
  <span dangerouslySetInnerHTML={{ __html: titlePrefix }} />{" "}
  <span
    className="text-[#F4A31D]"
    dangerouslySetInnerHTML={{ __html: titleHighlight }}
  />{" "}
  <span dangerouslySetInnerHTML={{ __html: titlePrefixtwo }} />
</h1>
          <p className="text-[#333333] all-one-border">{description}</p>

          <div className="flex flex-wrap gap-4 items-center all-innone-btn">
            {buttons.map((btn, index) => (
              <Link href={btn.link} className="btn-group-link" key={index}>
                <div className="btn-main-container">
                  <div className="btn-inner-border">
                    <span className="btn-arrow-left font-bold">&gt;&gt;</span>
                    <span className="btn-text font-bold uppercase tracking-tight">
                      {btn.text}
                    </span>
                    <span className="btn-arrow-right font-bold">&gt;&gt;</span>
                  </div>
                  <div className="btn-bg-fill"></div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="allinone-iner-right relative">
          <Image
            src={rightImage}
            alt="logo"
            width={0}
            height={0}
            sizes="100vw"
            className="allinoneimage"
            priority
          />
          {stats.map((stat, index) => (
            <div className="allinone-iner-right-in" key={index}>
              <h4>{stat.value}</h4>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}