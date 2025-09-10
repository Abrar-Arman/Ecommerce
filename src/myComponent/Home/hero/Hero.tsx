import hero from "../../../assets/Home/hero.png";
import HeroLine from "./HeroLine";

function Hero() {
  return (
    <section className="flex border border-[#ADADAD]  sm:border-none flex-col items-center  lg:flex-row  lg:justify-between gap-6 md:px-6 pt-5 mx-4 lg:mx-0 lg:px-12 mt-6 min-h-h-[calc(100vh-100px)] mb-22  ">
      <div className="w-full lg:w-1/2 flex flex-col lg:justify-center pt-4    text-center lg:text-left">
        <HeroLine text="OUR BESTSELLERS" left={true} />
        <h1 className="text-3xl lg:text-center sm:text-5xl lg:text-6xl font-Prata my-4">
          Latest Arrivals
        </h1>
        <HeroLine text="SHOP NOW" />
      </div>
    <div className="w-full lg:w-1/2   flex justify-center h-[calc(100vh-140px)]">
        <img
          src={hero}
          alt="hero"
          className="h-full w-full  "
        />
      </div>
    </section>
  );
}

export default Hero;

