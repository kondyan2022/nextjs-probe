export default function ErrorText({ choosus, children }) {
  return (
    children && (
      <p
        className={`relative text-[12px] font-extralight tracking-[2.4px] ${
          choosus ? "leading-[1.33]" : "leading-[2]"
        }
           before:content-[''] before:absolute before:top-[50%] before:left-[-22px] 
           before:w-[18px] before:h-[18px] before:translate-y-[-50%] before:bg-red-close  
           before:bg-center self-end`}
      >
        {children}
      </p>
    )
  );
}
