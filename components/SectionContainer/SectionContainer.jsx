export default function SectionContainer({ children }) {
  return (
    <div className="container mx-auto min-w-[320px] max-w-[480px] md:max-w-[768px] xl:max-w-[1440px] relative">
      {children}
    </div>
  );
}
