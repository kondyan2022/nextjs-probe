import Hero from "@/sections/Hero/Hero";
import Gallery from "@/sections/Gallery/Gallery";
import Contact from "@/sections/Contact/contact";
import Offer from "@/sections/Offer/Offer";
import About from "@/sections/About/about";
import ChooseUs from "@/sections/ChooseUs/ChooseUs";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Offer />
      <ChooseUs />
      <Gallery />
      <Contact />
    </main>
  );
}
