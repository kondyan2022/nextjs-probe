import Hero from "@/sections/hero";
import Gallery from "@/sections/gallery";
import Contact from "@/sections/contact";
import Offer from "@/sections/offer";
import About from "@/sections/about";
import ChooseUs from "@/sections/choosus";

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
