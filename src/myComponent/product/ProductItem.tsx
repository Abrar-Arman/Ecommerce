import { MoveUpRight } from "lucide-react";
import { Link } from "react-router-dom";

type TProductItemProps = {
  title: string;
  thumbnail: string;
  price: number;
  onSelectProduct:()=>void;
   product:Record<string , unknown>
};

function ProductItem({ title, thumbnail,  price,onSelectProduct , product}: TProductItemProps) {
  return (
    <li className="shadow pb-4 hover:scale-[1.05] transition duration-200" onClick={onSelectProduct} >
      <div>
        <img src={thumbnail} alt={title} className="w-full cursor-pointer" />
      </div>
      <div className="text-center">
        <h2 className="text-[#494949] text-sm font-medium">{title}</h2>
        <span className="text-[#494949] text-base">${price}</span>
        <span className="bg-amber-500 w-fit">
        <Link to='/product-details'  state={{product:product}}>
        <MoveUpRight className="hover cursor-pointer text-[#707070]" />
        </Link>
        </span>
      </div>
    </li>
  );
}

export default ProductItem;
