import hero from "../../../assets/Home/hero.png";
import HeroLine from "./HeroLine";

function Hero() {
  return (
    <section className="flex flex-col items-center  lg:flex-row  lg:justify-between gap-6 px-6 pt-5 lg:py-0 lg:px-12 mt-2 h-[calc(100vh-100px)] mb-22  ">
      <div className="w-full lg:w-1/2 flex flex-col justify-center   text-center lg:text-left">
        <HeroLine text="OUR BESTSELLERS" left={true} />
        <h1 className="text-4xl text-center sm:text-5xl lg:text-6xl font-Prata my-4">
          Latest Arrivals
        </h1>
        <HeroLine text="SHOP NOW" />
      </div>
    <div className="w-full lg:w-1/2 h-[calc(100vh-140px)]">
        <img
          src={hero}
          alt="hero"
          className="h-full w-full object-cover"
        />
      </div>
    </section>
  );
}

export default Hero;

