type THeroLineProps = {
  text: string;
  left?: boolean;
};
function HeroLine({ text, left=false }: THeroLineProps) {
  return (
    <div className="w-full flex justify-center">
      <div className="flex items-center gap-2 w-full max-w-md">
        {left && <div className="hero__line"></div>}
        <span className=" text-xs sm:text-sm font-medium">{text}</span>
        {!left && <div className="hero__line"></div>}
      </div>
    </div>
  );
}

export default HeroLine;
