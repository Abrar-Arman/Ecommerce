import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

type TProductContentProps = {
  price: number;
  tags: string[];
  title: string;
  description: string;
};
function ProductContent({
  tags,
  price,
  title,
  description,
}: TProductContentProps) {
  return (
    <div className="mt-12  ">
      <h2 className="font-medium text-4xl text-[#3D3D3D] mb-6">{title}</h2>
      <span className="font-bold text-lg text-[#2A2A2A] italic">${price}</span>
      <p className="text-[#555] text-base text-justify w-[90%] mt-3">
        {description}
      </p>
      <ul className="flex items-center gap-2 mt-3">
        {tags.map((t, ind) => (
          <li
            className="uppercase px-3 py-1 rounded-lg bg-c-secondary text-white font-medium cursor-pointer hover:bg-white hover:text-c-secondary transition duration-300 hover:border-1"
            key={ind}
          >
            {t}
          </li>
        ))}
      </ul>
      <div className="mt-4  ">
        <Button className="py-6 w-72 text-base cursor-pointer mr-3 bg-[#707070]">Add To Cart </Button>
        <Button variant='outline' className="cursor-pointer  py-6 " ><Heart  /> </Button>
      </div>
    </div>
  );
}

export default ProductContent;
