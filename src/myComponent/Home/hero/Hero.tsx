import hero from "../../../assets/Home/hero.png";
import HeroLine from "./HeroLine";
function Hero() {
  return (
    <div className="px-9 flex justify-between items-center mt-2 h-[calc(100vh-94px)]  ">
      <div className="w-full flex justify-center ">
        <p>
         <HeroLine text='OUR BESTSELLERS' left={true}/>
          <span className="text-6xl	font-Prata block my-2">Latest Arrivals</span>
          <HeroLine text='SHOP NOW' />
        </p>
      </div>
      <div>
        <img src={hero} alt="hero" width={`{840}px`} />
      </div>
    </div>
  );
}

export default Hero;
