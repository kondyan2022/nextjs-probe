export default function SectionContainer({ children }) {
  return (
    <div className="container mx-auto min-w-[320px] lg:max-w-[768px] xl:max-w-[1440px] relative">
      {children}
    </div>
  );
}
