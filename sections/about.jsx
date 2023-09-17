export default function About() {
  return (
    <section id="about">
      <div
        className="container mx-auto min-w-[320px] max-w-[480px] md:max-w-[768px] xl:max-w-[1440px] 
                    px-[20px] md:px-[32px] py-[56px] md:py-[64px] xl:p-[104px] 
                    bg-about-bg-mobile bg-[length:480px_873px] bg-center 
                    md:bg-about-bg-tablet md:bg-[length:768px_697px]
                    xl:bg-about-bg-desktop xl:bg-[length:1440px_826px]
                    relative grid md:grid-cols-[1fr_220px] xl:grid-cols-[629px_292px_1fr]"
      >
        <div
          className="w-full h-[247px] xl:h-[257px] bg-gradient-to-b from-[rgba(0,24,38,1)] to-[rgba(0,37,49,0)] 
                    opacity-75 absolute top-0 left-0 "
        ></div>

        <h2
          className="mb-[8px] text-[40px] md:text-[67px] xl:text-[98px] tracking-[-1.6px] md:tracking-[-2.68px] xl:tracking-[-3.92px] 
                    leading-[1.4] xl:leading-[1.2] font-thin text-white relative z-10
                    "
        >
          WHO <span className="font-medium ">WE ARE</span>
        </h2>
        <p
          className="w-[180px] md:w-[220px] xl:w-[292px] mb-[20px] md:mb-[16px] md:mt-[9px] xl:mt-[16px] 
                    text-[14px] md:text-[16px]  xl:text-[18px]  font-extralight 
                    leading-[1.43] md:leading-[1.25] xl:leading-[1.33] 
                    md:col-span-1        text-white relative z-10 "
        >
          <span className="font-normal">a team of enthusiasts</span> who are
          fully committed to the mission of creating unforgettable and
          extraordinary trips to the most beautiful parts of the Carpathians.
          Our goal is not just to show you the natural wonders of the mountains,
          but to provide you with a deep immersion in their magical atmosphere.
        </p>
        <p
          className="w-[180px] md:w-[220px] xl:w-[292px] 
                    text-[14px] md:text-[16px] xl:text-[18px] font-extralight 
                    leading-[1.43]  md:leading-[1.25] xl:leading-[1.33]
                         md:col-start-2 md:col-end-3  text-white z-10 "
        >
          <span className="font-normal">We believe</span> that nature has the
          power to inspire, strengthen character and provide new perspectives.
          Therefore, each of our tours is aimed at unlocking your potential,
          enriching your spiritual world and creating unforgettable memories.
        </p>

        <h3
          className="w-[180px] md:w-[220px] xl:w-[297px] my-[40px] md:mt-auto md:mb-0 ml-auto md:ml-0 xl:ml-auto xl:mt-[72px]
                    flex flex-col text-[14px] md:text-[16px] xl:text-[18px] font-extralight 
                    leading-[1.43] md:leading-[1.25] xl:leading-[1.33] 
                    md:row-start-2 md:row-end-3
                    xl:row-start-3 xl:row-end-4
                    xl:col-start-2 xl:col-end-4 xl: text-white z-10 "
        >
          <span className="font-normal uppercase ">From vacationers </span>
          <span className="font-normal uppercase self-end ">
            to active travelers
          </span>
          <span className="tracking-[-0.14px] md:tracking-[0.32px] xl:tracking-[2.16px]">
            we have a tour for everyone.
          </span>
        </h3>

        <p
          className="md:w-[463px] xl:w-[605px] md:ml-auto xl:ml-0 md md:mt-[64px] xl:mt-[72px] 
                    text-[14px] md:text-[16px] xl:text-[18px] font-extralight 
                    leading-[1.43] md:leading-[1.25] xl:leading-[1.33]
                    md:col-span-2
                    xl:col-start-1 xl:col-end-2 text-white z-10 "
        >
          <span className="font-normal">We use methods</span> that are
          time-tested and proven. Our expert guides with in-depth knowledge of
          the Carpathian landscapes lead you safely through the mysteries of
          these mountains.
        </p>
      </div>
    </section>
  );
}
