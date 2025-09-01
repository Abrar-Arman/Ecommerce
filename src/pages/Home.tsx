import Collection from "@/myComponent/Home/collection/Collection";
import Contact from "@/myComponent/Home/Contact";
import Hero from "@/myComponent/Home/hero/Hero";
import Services from "@/myComponent/Home/Services";

function Home() {
  return (
    <main>
      <Hero />
      <Collection />
      <Services />
      <Contact />
    </main>
  );
}

export default Home;
