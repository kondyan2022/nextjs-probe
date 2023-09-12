import Slider from "@/components/Slider";

const Gallery = () => {
  return (
    <section id="SectionGallery">
      <div className="container mx-auto min-w-[320px] lg:max-w-[768px] xl:max-w-[1440px] bg-[-304px_0px]  bg-gallery-background relative ">
        <div className="h-full w-full px-[20px] md:px-[32px] py-[56px] md:py-[64px] xl:px-[80px] xl:pb-[103px] xl:pt-[80px]  bg-[#020F08BF]  ">
          <div className="w-full h-[287px] bg-gradient-to-b from-[rgba(0,24,38,1)] to-[rgba(0,37,49,0)] opacity-75 absolute top-0 left-0 "></div>
          <div className="w-full  h-full relative z-10">
            <h2
              className="text-[40px] md:text-[67px] xl:text-[98px] 
                            tracking-[-1.6px] md:tracking-[-2.68px] xl:tracking-[-3.92px]
                            leading-[1.4] font-thin text-white
                            mb-[24px] md:mb-[66px] xl:mb-[15px] tex-left md:text-center xl:text-left"
            >
              OUR <span className="font-medium ">GALLERY</span>
            </h2>
            <Slider />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
