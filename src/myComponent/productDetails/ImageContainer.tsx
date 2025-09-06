type TImageContainer = {
  main: string;
  allImage: string[];
};

function ImageContainer({ main, allImage }: TImageContainer) {
  console.log(main, allImage, "main, allImage");
  return (
    <div className="grid grid-cols-3 gap-4  mt-12 ">
      <ul className="grid gap-2 items-center h-[calc(100vh-145px)] custom-scrollbar overflow-y-auto ">
        {allImage.map((img, idx) => (
          <li key={idx} className="pb-3 border-b-2 ">
            <img
              src={img}
              className="w-full  rounded cursor-pointer hover:opacity-80"
            />
          </li>
        ))}
      </ul>
      <div className="col-span-2 ">
        <img src={main} alt="Main" className="w-[90%] " />
      </div>
    </div>
  );
}

export default ImageContainer;
