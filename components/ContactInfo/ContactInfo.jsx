import dataContact from "../../public/data/contact.json";

export default function ContactInfo() {
  return (
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
              href={`tel:${elem.replace(/[() ]/g, "")}`}
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
              rel="noreferrer noopener"
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
  );
}
