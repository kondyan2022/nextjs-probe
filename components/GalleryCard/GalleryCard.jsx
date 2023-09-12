import Image from "next/image";

export default function GalleryCard({ src, alt, imageSize }) {
  return (
    <div className="card relative">
      <div className="card-filter hidden md:inline-block opacity-1 bg-[rgba(2,15,8,0.75)]  w-[280px] h-[187px] md:w-[415px] xl:w-[606px] md:h-[294px] xl:h-[429px] absolute"></div>
      <Image
        className="object-center object-none w-[280px] h-[187px] md:w-[415px] xl:w-[606px] md:h-[294px] xl:h-[429px] 
                    max-w-none inline-block shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] "
        src={src}
        height={imageSize.height}
        width={imageSize.width}
        alt={alt}
      />
    </div>
  );
}
