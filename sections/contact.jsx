import { data } from "autoprefixer";
import dataContact from "../public/data/contact.json";

const Contact = () => {
  return (
    <section>
      <div
        className="container mx-auto w-min-[320px] lg:max-w-[768px] xl:max-w-[1440px] 
            bg-[-121px_-56px] md:bg-[-304px_0px] xl:bg-[-51px_-51px]
            bg-contact-bg-m md:bg-contact-bg-tablet xl:bg-contact-bg-desktop 
            relative "
      >
        <div className="h-full w-full px-[20px] md:px-[32px] py-[56px] md:py-[64px] xl:px-[80px] xl:pb-[103px] xl:pt-[80px]  bg-[#020F08BF]  ">
          <div className="w-full h-[287px] bg-gradient-to-b from-[rgba(0,24,38,1)] to-[rgba(0,37,49,0)] opacity-75 absolute top-0 left-0 "></div>
          <div className="w-full h-[287px] bg-gradient-to-t from-[rgba(0,24,38,1)] to-[rgba(0,37,49,0)] opacity-75 absolute bottom-0 left-0 "></div>
          <div className="w-full  h-full relative z-10">
            <h2
              className="text-[40px] md:text-[67px] xl:text-[98px] tracking-[-1.6px] md:tracking-[-2.68px] xl:tracking-[-3.92px] leading-[1.4] 
                        font-thin text-white mb-[24px] md:mb-[66px] tex-left "
            >
              CONTACT <span className="font-medium ">US</span>
            </h2>

            <div
              className="grid grid-cols-[1fr_81px] text-white
                         md:grid-cols-[221px_1fr_1fr_220px] 
                         xl:grid-cols-[317px_200px]  "
            >
              <ul
                className="text-right pr-[20px] text-[14px] xl:text-[18px] mb-[24px] xl:mb-[64px]
              md:text-[16px]"
              >
                {dataContact.phone.map((elem, index) => (
                  <li key={index}>
                    <a
                      href={`tel:${elem.replace(/[( )]/, "")}`}
                      className="leading-[1.71] md:leading-[1.5] xl:leading-[1.33]"
                    >
                      {elem}
                    </a>
                  </li>
                ))}
              </ul>
              <p className="text-[12px] leading-[1.66] mt-[3px] font-extralight">
                Phone number
              </p>

              <a
                className="text-right pr-[20px] mb-[26px] md:leading-[1.5] xl:leading-[1.33] text-[14px] md:text-[16px] xl:text-[18px] md:order-5  xl:order-3"
                href={`mailto:${dataContact.email}`}
              >
                {dataContact.email}
              </a>
              <p className="text-[12px] leading-[1.66] font-extralight mt-[3px] md:order-6  xl:order-4 xl:mb-[124px]">
                E-mail
              </p>

              <ul
                className="text-right md:text-left xl:text-right pr-[20px] text-[14px] md:text-[16px] xl:text-[18px]
                 md:order-4 xl:order-5 md:row-span-2 xl:row-span-1"
              >
                {dataContact.links.map((elem, index) => (
                  <li key={index}>
                    <a
                      href={`${elem.link}`}
                      className="leading-[1.71] md:leading-[1.5] xl:leading-[1.33]"
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
            <form className="grid grid-col-1 md:grid-cols-[1fr_463px] text-white">
              <div className="grid grid-col-1 md:row-span-2 ">
                <label htmlFor="fullName">Full name</label>
                <input
                  type="text"
                  id="fullName"
                  placeholder="John Smith"
                  className="block"
                />
                <p></p>
              </div>
              <div className="grid grid-col-1 md:order-3  md:row-span-2">
                <label htmlFor="email">E-mail</label>
                <input
                  type="email"
                  id="email"
                  placeholder="support@carptravel.com"
                  className="block"
                />
                <p></p>
              </div>
              <div className="grid grid-col-1 md:order-2 md:row-span-6">
                <label htmlFor="message">Message</label>
                <textarea id="message" rows={10} />
              </div>
              <button type="submit" className="md:order-4 md:col-span-2">
                SEND
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
