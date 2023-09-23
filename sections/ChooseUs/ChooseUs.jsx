import ChooseUsForm from "@/components/ChooseUsForm/ChooseUsForm";
import ErrorText from "@/components/ErrorText/ErrorText";
import whyusData from "@/public/data/whyus.json";
export default function ChooseUs() {
  return (
    <section id="career">
      <div
        className="container mx-auto min-w-[320px] max-w-[480px] md:max-w-[768px] xl:max-w-[1440px] 
                    px-[20px] md:px-[32px] py-[56px] md:py-[64px] xl:p-[104px] 
                    bg-chooseus-bg-mobile bg-[length:767px_826px] bg-[center_top_-26px] 
                    md:bg-chooseus-bg-tablet md:bg-[length:768px_720px] md:bg-top
                    xl:bg-chooseus-bg-desktop xl:bg-[length:1440px_820px]
                    relative 
                    md:grid md:grid-cols-[221px_1fr_221px] xl:grid-cols-[1fr_1fr_314px_293px] 
                    md:grid-rows-[93px_92px_92px_315px] xl:grid-rows-[143px_84px_383px]
                    "
      >
        <h2
          className="mb-[36px] xl:mb-0 text-[40px] md:text-[67px] xl:text-[98px] tracking-[-1.6px] md:tracking-[-2.68px] xl:tracking-[-3.92px] 
                    leading-[1.4] xl:leading-[1.2] font-thin text-white relative z-10
                    md:col-span-2 xl:col-start-1 xl:col-end-4"
        >
          CHOOSE <span className="font-medium ">US</span>
        </h2>

        <p
          className="w-[179px] md:w-[221px] xl:w-[293px] mb-[24px] xl:mb-0 ml-auto text-[14px] md:text-[13px] xl:text-[18px]
                      leading-[1.43] md:leading-[1.54] xl:leading-[1.33] font-extralight
                      xl:row-span-1 xl:col-start-4 xl:col-end-5 "
        >
          Your chance to join our passionate team in Carpathian tourism. Seeking
          talented professionals to share our common mission.
        </p>
        <h3
          className="w-[141px] xl:w-[170px] mb-[24px] md:mb-[56px] xl:mb-0 text-[30px] xl:text-[36px] ml-auto mr-[39px] xl:mr-0
                     font-extralight leading-normal xl:leading-[1.083] uppercase
                      "
        >
          Why us ?
        </h3>
        <ul
          className="w-[181px] md:w-full mb-[112px] xl:mb-0 flex flex-col xl:items-end gap-[16px] md:gap-[24px]
                      md:row-start-3 md:row-end-5 xl:row-start-3 xl:row-end-4
                      xl:col-start-1 xl:col-end-3"
        >
          {whyusData.map(({ index, header, text }) => (
            <li
              key={index}
              className="text-right flex flex-col xl:flex-row  gap-[8px] xl:gap-[24px] xl:mr-[20px]"
            >
              <h4 className="xl:min-w-[220px] text-[14px] md:text-[16px] xl:text-[16px]   leading-[1.43]  md:leading-[1.25] xl:leading-[1.33]">
                {header}
              </h4>
              <p className="xl:w-[290px] text-[12px]  font-extralight leading-[1.66] xl:leading-[2]  xl:text-left">
                {text}
              </p>
            </li>
          ))}
        </ul>
        <p
          className="w-[179px] xl:w-[234px] ml-auto mb-[24px] md:ml-[20px] xl:ml-0 md:mb-0 text-[14px] md:text-[13px] xl:text-[18px]
                      leading-[1.43] md:leading-[1.54]  xl:leading-[1.33] font-extralight
                      md:row-start-3 xl:row-start-2 xl:col-start-3"
        >
          Don&apos;t miss your opportunity! Fill out the form right now and join
          our team!
        </p>
        <ChooseUsForm />
      </div>
    </section>
  );
}
