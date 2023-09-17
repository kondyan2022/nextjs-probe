import Hero from "@/sections/hero";
import Gallery from "@/sections/gallery";
import Contact from "@/sections/contact";
import Offer from "@/sections/offer";
import About from "@/sections/about";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Offer />
      <Gallery />
      <Contact />
    </main>
  );
}
