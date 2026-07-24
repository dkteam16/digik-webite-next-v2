import Link from "next/link";
import { PixelHeader } from "@/components/layout/pixel-header";
import { PixelSiteFooter } from "@/components/layout/pixel-site-footer";
import Image from "next/image";
import { BLOG_POSTS, BLOG_TITLE } from "@/data/blog-posts";

const imgArrow22 = "/images/blog/imgArrow22.svg";
const imgImage214 = "/images/blog/imgImage214.svg";

type ColumnConfig = {
  bgLeft: string;
  titleLeft: string;
  titleWidth: string;
  dateLeft: string;
  imageLeft: string;
};

const COLUMNS: ColumnConfig[] = [
  { bgLeft: "left-[47px]", titleLeft: "left-[calc(12.5%-168px)]", titleWidth: "w-[392px]", dateLeft: "left-[calc(12.5%-167.66px)]", imageLeft: "left-[47px]" },
  { bgLeft: "left-[calc(25%+28px)]", titleLeft: "left-[calc(37.5%-187px)]", titleWidth: "w-[394px]", dateLeft: "left-[calc(37.5%-186.66px)]", imageLeft: "left-[calc(25%+28px)]" },
  { bgLeft: "left-[calc(50%+10px)]", titleLeft: "left-[calc(62.5%-205px)]", titleWidth: "w-[394px]", dateLeft: "left-[calc(62.5%-204.66px)]", imageLeft: "left-[calc(50%+10px)]" },
  { bgLeft: "left-[calc(75%-8px)]", titleLeft: "left-[calc(87.5%-223px)]", titleWidth: "w-[394px]", dateLeft: "left-[calc(87.5%-222.66px)]", imageLeft: "left-[calc(75%-8px)]" },
];

type RowConfig = {
  bgTop: string;
  titleTop: string;
  dateTop: string;
  imageTop: string;
  imageInnerTop: string;
};

const ROWS: RowConfig[] = [
  { bgTop: "top-[297px]", titleTop: "top-[596px]", dateTop: "top-[566px]", imageTop: "top-[297px]", imageInnerTop: "top-[calc(50%-639.5px)]" },
  { bgTop: "top-[709px]", titleTop: "top-[1008px]", dateTop: "top-[978px]", imageTop: "top-[709px]", imageInnerTop: "top-[calc(50%-227.5px)]" },
  { bgTop: "top-[1121px]", titleTop: "top-[1420px]", dateTop: "top-[1390px]", imageTop: "top-[1121px]", imageInnerTop: "top-[calc(50%+184.5px)]" },
];

export function BlogPage() {
  return (
    <div className="bg-white relative w-[1920px] h-[2123px]">
      <PixelHeader activeHref="/blog" />
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-days-one leading-[56.6px] left-1/2 not-italic text-[#333] text-[50px] text-center top-[174px] tracking-[-1px] uppercase whitespace-nowrap" data-node-id="1035:180">
        Blogs
      </p>
      {COLUMNS.map((col, colIdx) =>
        ROWS.map((row, rowIdx) => {
          const post = BLOG_POSTS[colIdx * 3 + rowIdx];
          return (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="absolute contents cursor-pointer group">
              <div className={`absolute bg-[#f5f5f5] border border-[rgba(0,0,0,0.09)] border-solid h-[392px] ${col.bgLeft} rounded-[16px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] ${row.bgTop} w-[441px] transition-colors group-hover:bg-[#efefef]`} />
              <p className={`[word-break:break-word] absolute font-montserrat font-semibold leading-[normal] ${col.titleLeft} text-[20px] text-black ${row.titleTop} tracking-[-0.4px] ${col.titleWidth} transition-colors group-hover:text-[#f4a31d]`}>
                {BLOG_TITLE}
              </p>
              <p className={`[word-break:break-word] absolute font-montserrat font-normal leading-[normal] ${col.dateLeft} text-[16px] text-black ${row.dateTop} tracking-[-0.32px] whitespace-nowrap`}>
                {post.date}
              </p>
              <div className={`absolute contents ${col.imageLeft} ${row.imageTop}`} data-name="Mask group">
                <div className={`-translate-y-1/2 absolute h-[251.715px] ${col.imageLeft} mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0.861px] mask-size-[441px_249.785px] ${row.imageInnerTop} w-[440.638px]`} style={{ maskImage: `url("${imgImage214}")` }} data-name="image 214">
                  <Image alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={post.cardImage} fill sizes="100vw" />
                </div>
              </div>
            </Link>
          );
        })
      )}
      <div className="-translate-x-1/2 absolute contents left-[calc(50%+0.5px)] top-[1556px]" data-node-id="1035:197">
        <div className="absolute h-0 left-[calc(50%+90px)] top-[1568px] w-[16px]" data-node-id="1035:198">
          <div className="absolute inset-[-7.36px_-6.25%_-7.36px_0]">
            <Image alt="" className="block max-w-none size-full" src={imgArrow22} fill sizes="100vw" />
          </div>
        </div>
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-montserrat font-normal leading-[normal] left-[calc(37.5%+212px)] text-[20px] text-black text-center top-[1556px] tracking-[-0.4px] whitespace-pre" data-node-id="1035:199">{`1      2      3    ....    8`}</p>
      </div>
      <PixelSiteFooter />
    </div>
  );
}
