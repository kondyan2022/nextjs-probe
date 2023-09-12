const Hero = () => (
  <section>
    <div className="container mx-auto lg:max-w-[768px] xl:max-w-[1440px]">
      <div
        className="h-[642px] md:h-[530px] xl:h-[763px] min-w-[320px] md:mi-w-none 
                       max-w-[640px] md:max-w-none  md:w-full  relative overflow-hidden mx-auto"
      >
        <div
          className="absolute top-[-81px] md:top-[-79px] xl:top-[-149px] right-[-271px] md:right-[-185px] xl:right-[-69px]  h-[746px] 
                      md:h-[751px] xl:h-[1103px] w-[1232px] xl:w-[2006px] bg-hero-picture-one md:bg-hero-picture-tablet 
                      xl:bg-hero-picture-desktop bg-no-repeat animate-[panorama_20s_linear_infinite]"
        ></div>
        <div className="w-full h-full bg-[#020f0880] relative">
          <div className="w-full h-[287px] bg-gradient-to-b from-[rgba(0,24,38,1)] to-[rgba(0,37,49,0)] opacity-75 "></div>
          <div
            className="absolute top-0 bottom-0 left-0 right-0 flex flex-col flex-wrap gap-y-[24px] md:gap-y-[66px] xl:md:gap-y-[148px]
                          px-[20px] md:px-[32px] xl:px-[105px] pt-[105px] md:pt-[124px] xl:pt-[130px]"
          >
            {/* md:w-[768px] xl:w-min-[1280px] xl:w-max-[1440px] */}
            <h1
              className="md:inline-flex w-[118px] md:w-[240px] xl:w-[305px] font-thin  text-[37px] md:text-[67px] xl:text-[98px]
             text-white uppercase flex flex-wrap justify-center self-end leading-[1.25] md:absolute"
            >
              <span className="font-medium">7</span>
              <span className="uppercase tracking-[1.665px] md:tracking-[8.71px] xl:tracking-normal">
                Days
              </span>
              <span
                className="w-[113px] md:w-[221px] xl:w-[295px] text-[12px] md:text-[14px] xl:text-[16px] tracking-[9.48px]
                               md:tracking-[25.9px] xl:tracking-[36.48px] mt-[-8px] md:mt-[-10px] xl:mt-[-15px]"
              >
                Journey
              </span>
            </h1>
            <h2
              className="md:inline-block w-[280px] md:w-[426px] xl:-[646px] text-white uppercase text-[40px] md:text-[67px] 
                          xl:text-[98px] font-thin leading-[1.2] tracking-[-1.6px] md:tracking-[-2.68px] xl:tracking-[-3.92px]"
            >
              <span className="font-medium">Uncover </span>
              Carpathian’s Secrets
            </h2>
            <p
              className="md:inline-block w-[167px] md:w-[262px] xl:w-auto text-white font-thin text-[10px] md:text-[14px] 
            leading-[1.6] md:leading-[1.14] md:tracking-[1.26px]"
            >
              Hoverla / Yaremche / Zakarpattia / Vorokhta / Synevyr Lake /
              Bukovel
            </p>
            <p
              className="md:inline-block md:w-[230px] xl:w-[294px] text-white text-justify text-[14px] md:text-[16px] xl:text-[18px] font-thin
               leading-[1.43] md:leading-[1.25] xl:leading-[1.33] 
             md:absolute md:right-[32px] xl:right-[104px] md:top-[266px] xl:top-[446px]"
            >
              We offer you unforgettable trips to the most beautiful parts of
              the Carpathians. Enjoy stunning views, exciting expeditions, and
              the best service!
            </p>
            <div
              className="relative md:absolute md:bottom-[67px] xl:bottom-[110px] 
                           md:right-[32px] xl:right-[104px] md:inline-block md:w-[230px] xl:w-auto "
            >
              <button
                type="button"
                className="block h-[53px] md:h-[50px] xl:h-[71px] w-full md:w-[230px] xl:w-[293px] text-[18px] 
                            leading-[2.67] text-white  font-bold bg-[#ffffff19] hover:bg-[#ffffff33]"
              >
                JOIN NOW
              </button>
              <div className="absolute top-0 left-0 h-[8px] w-[42px] border-s border-t border-white "></div>
              <div className="absolute top-0 right-0 h-[8px] w-[42px] border-e border-t border-white "></div>
              <div className="absolute bottom-0 left-0 h-[8px] w-[42px] border-s border-b border-white "></div>
              <div className="absolute bottom-0 right-0 h-[8px] w-[42px] border-e  border-b border-white "></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
