import ContactForm from "@/components/ContactForm/ContactForm";
import ContactInfo from "@/components/ContactInfo/ContactInfo";

const Contact = () => {
  return (
    <section id="SectionContact">
      <div
        className="container mx-auto min-w-[320px] lg:max-w-[768px] xl:max-w-[1440px] 
            bg-[-121px_-0px] md:bg-[-304px_0px] xl:bg-[-51px_-51px]
            bg-contact-bg-m md:bg-contact-bg-tablet xl:bg-contact-bg-desktop 
            relative "
      >
        <div className="h-full w-full px-[20px] md:px-[32px] py-[56px] md:py-[64px] xl:p-[80px] bg-[#020F08BF]  ">
          <div className="w-full h-[287px] bg-gradient-to-b from-[rgba(0,24,38,1)] to-[rgba(0,37,49,0)] opacity-75 absolute top-0 left-0 "></div>
          <div className="w-full h-[287px] bg-gradient-to-t from-[rgba(0,24,38,1)] to-[rgba(0,37,49,0)] opacity-75 absolute bottom-0 left-0 "></div>
          <div className="w-full  h-full relative z-10 xl:p-[24px]">
            <h2
              className="text-[40px] md:text-[67px] xl:text-[98px] tracking-[-1.6px] md:tracking-[-2.68px] xl:tracking-[-3.92px] 
              leading-[1.4] xl:leading-[1.2] font-thin text-white mb-[36px] xl:mb-[71px] tex-left "
            >
              CONTACT <span className="font-medium ">US</span>
            </h2>
            <div className="xl:grid xl:grid-cols-[1fr_607px]">
              <ContactInfo />
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
