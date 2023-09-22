import Image from "next/image";

export default function OfferSlide({ image, alt, children }) {
  return (
    <div
      className="h-[851px] md:h-[621px] xl:h-[779px] min-w-[320px] md:mi-w-none 
                       max-w-[640px] md:max-w-none  md:w-full  relative overflow-hidden mx-auto
                       "
    >
      <Image
        src={`/img/${image.uri}`}
        alt={alt}
        width={image.width}
        height={image.height}
        priority={true}
        className="absolute w-auto h-[886px] top-0 left-0 object-cover object-left-top "
      ></Image>
      <div className="w-full h-full bg-[#020f0880] relative">
        <div className="w-full h-[291px] md:h-[274px] xl:h-[241px] bg-gradient-to-b from-[rgba(0,24,38,1)] to-[rgba(0,37,49,0)] opacity-75 absolute top-0 left-0 "></div>
        <div className="w-full h-[291px] md:h-[274px] xl:h-[241px] bg-gradient-to-t from-[rgba(0,24,38,1)] to-[rgba(0,37,49,0)] opacity-75 absolute bottom-0 left-0 "></div>
        <div className="w-full h-full px-[20px] py-[56px] md:px-[32px] md:py-[64px] xl:p-[104px]">
          {children}
        </div>
      </div>
    </div>
  );
}
