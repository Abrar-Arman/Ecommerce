function ItemList({data, render}) {
  return (
    <ul className="mt-12 flex flex-col gap-4 md:w-[80%] ">
      {data.map((item) => render(item))}
    </ul>
  );
}
export default ItemList;

