import { data } from "autoprefixer";
import dataContact from "../public/data/contact.json";

const Contact = () => {
  return (
    <section>
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
              <div
                className="grid grid-cols-[1fr_81px] text-white
                         md:grid-cols-[241px_1fr_1fr_220px] 
                         xl:grid-cols-[317px_200px] md:mb-[64px] xl:mb-0"
              >
                <ul
                  className="text-right pr-[20px] text-[14px] xl:text-[18px] mb-[24px] xl:mb-[52px]
              md:text-[16px]"
                >
                  {dataContact.phone.map((elem, index) => (
                    <li key={index}>
                      <a
                        href={`tel:${elem.replace(/[( )]/, "")}`}
                        className="leading-[1.71] md:leading-[1.5] xl:leading-[1.33] hover-effect"
                      >
                        {elem}
                      </a>
                    </li>
                  ))}
                </ul>
                <p className="text-[12px] leading-[1.66] mt-[3px] font-extralight">
                  Phone number
                </p>
                <div className="mr-[20px] text-right md:order-5  xl:order-3">
                  <a
                    className="text-right  mb-[26px] md:leading-[1.5] xl:leading-[1.33] text-[14px] md:text-[16px] 
                  xl:text-[18px]  hover-effect"
                    href={`mailto:${dataContact.email}`}
                  >
                    {dataContact.email}
                  </a>
                </div>
                <p className="text-[12px] leading-[1.66] font-extralight mt-[3px] md:order-6  xl:order-4 xl:mb-[124px]">
                  E-mail
                </p>

                <ul
                  className="text-right md:text-left xl:text-right pr-[20px] text-[14px] md:text-[16px] xl:text-[18px]
                 md:order-4 xl:order-5 md:row-span-2 xl:row-span-1"
                >
                  {dataContact.links.map((elem, index) => (
                    <li
                      key={index}
                      className="leading-[1.71] md:leading-[1.5] xl:leading-[1.33]"
                    >
                      <a
                        href={`${elem.link}`}
                        className="leading-[1.71] md:leading-[1.5] xl:leading-[1.33] hover-effect"
                        target="_blank"
                        referrerPolicy="noreferrer noopener"
                      >
                        {elem.name}
                      </a>
                    </li>
                  ))}
                </ul>
                <p
                  className="text-[12px] leading-[1.66] font-extralight mt-[3px] md:order-3  xl:order-6  
                             md:text-right xl:text-left md:mr-[20px] md:row-span-2 xl:row-span-1"
                >
                  Follow us
                </p>
              </div>
              {/* =========================== */}
              <form className="grid grid-col-1 md:grid-cols-[1fr_463px] xl:grid-cols-[1fr_294px] text-white  ">
                <div className="flex flex-col h-[76px] xl:h-[96px] md:mr-[20px]">
                  <label htmlFor="fullName" className="input-label">
                    Full name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    placeholder="John Smith"
                    className="input-style input-placeholder"
                  />
                  <p></p>
                </div>
                <div className="flex flex-col md:order-3 xl:order-2 md:row-span-2 h-[76px] xl:h-[96px] md:mr-[20px] xl:mr-0">
                  <label htmlFor="email" className="input-label">
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="johnsmith@email.com"
                    className="input-style input-placeholder"
                  />
                  <p></p>
                </div>
                <div className="flex flex-col md:order-2 xl:order-3 md:row-span-6 xl:col-span-2 ">
                  <label htmlFor="message" className="input-label ">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={8}
                    className="input-style input-placeholder h-[193px] xl:h-[174px] resize-none "
                  />
                </div>
                <div className="md:order-4 md:col-span-2 text-right">
                  <button
                    type="submit"
                    className="text-[30px] xl:text-[32px] font-medium text-right mt-[16px] xl:mt-[24px] leading-[1.2]"
                  >
                    SEND
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
