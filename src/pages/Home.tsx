import Collection from "@/myComponent/Home/collection/Collection";
import Contact from "@/myComponent/Home/Contact";
import Hero from "@/myComponent/Home/hero/Hero";
import CustomerReviews from "@/myComponent/Home/review/CustomerReviews";
import Services from "@/myComponent/Home/Services";

function Home() {
  return (
    <main>
      <Hero />
      <Collection />
      <CustomerReviews />
      <Services />
      <Contact />
    </main>
  );
}

export default Home;
