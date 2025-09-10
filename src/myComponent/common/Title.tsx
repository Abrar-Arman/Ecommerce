type TileProps = {
  first: string;
  last: string;
};
function Title({ first, last }: TileProps) {
  console.log('is render')
  return (
    <h1 className="uppercase font-Outfit text-3xl text-center">
      <span className="font-light text-[#707070]">{first} </span>
      <span className="font-medium text-c-secondary">{last}</span>
    </h1>
  );
}

export default Title;
