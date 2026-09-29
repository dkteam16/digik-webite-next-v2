import Image from "next/image";

type Stat = {
  value: string;
  label: string;
};

type IntroItem = {
  value: string;
  label: string;
};

type LabelItem = {
  label: string;
};

type BottomStat = {
  value: string;
  label: string;
};
type TopStat = {
   
  label: string;
};

type AllinoneProps = {
  tag: string;
  titlePrefix: string;
  titleHighlight: string;
  titlePrefixtwo: string;
  description: string;
  intro?: IntroItem[];
  label?: LabelItem[];
  backgroundImage: string;
  rightImage: string;
  stats: Stat[];
  bottomStats: BottomStat[];
  topStats: TopStat[];
};

export default function Allinone({
  tag,
  titlePrefix,
  titleHighlight,
  titlePrefixtwo,
  description,
  label,
  rightImage,
  stats,
  bottomStats,
  topStats,
}: AllinoneProps) {
  return (
    <div className="allinone bg-white">
      <div className="allinone-iner">

        <div className="allinone-iner-left relative">

          <ul className="left-all-top">
            {topStats.map((stat, index) => (
              <li key={index}>
                
                <p>{stat.label}</p>
              </li>
            ))}
          </ul>

          <h1>
            <span
              dangerouslySetInnerHTML={{
                __html: titlePrefix,
              }}
            />{" "}

            <span
              className="text-[#F4A31D]"
              dangerouslySetInnerHTML={{
                __html: titleHighlight,
              }}
            />{" "}

            <span
              dangerouslySetInnerHTML={{
                __html: titlePrefixtwo,
              }}
            />
          </h1>

          <p className="text-[#333333] all-one-border">
            {description}
          </p>

          {/* New content below description */}
          <ul className="left-all-bottom">
            {bottomStats.map((stat, index) => (
              <li key={index}>
                <h4>{stat.value}</h4>
                <p>{stat.label}</p>
              </li>
            ))}
          </ul>

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
            <div
              className="allinone-iner-right-in"
              key={index}
            >
              <h4>{stat.value}</h4>
              <p>{stat.label}</p>
            </div>
          ))}

        </div>

      </div>
    </div>
  );
}