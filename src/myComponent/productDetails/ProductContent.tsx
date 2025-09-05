import { Button } from "@/components/ui/button";
import { useCartContext } from "@/context/CardProvider";
import { Heart } from "lucide-react";
import { useState } from "react";
import Alert from "../common/Alert";
import Spinner from "../common/Spinner";
import { useNavigate } from "react-router-dom";
import { useWishlistContext } from "@/context/WishlistProvider";

type TProductContentProps = {
  price: number;
  tags: string[];
  title: string;
  description: string;
  img: string;
  id: number;
  stock: number;
};
function ProductContent({
  tags,
  price,
  title,
  description,
  img,
  id,
  stock,
}: TProductContentProps) {
  const { data: cart, setData: setCart } = useCartContext();
  const { data: wishlist, setData: setWishlist } = useWishlistContext();
  console.log("wishlist //", wishlist);
  const [msg, setShowMsg] = useState(false);
  const navigate = useNavigate();
  const exits = (arr) => {
    if (arr.length > 0) {
      return arr.find((item) => item.id === id);
    }
  };
  const foundItemOnCart = exits(cart);
  const foundItemOnWishlist = exits(wishlist);
  console.log(foundItemOnWishlist, "foundItemOnWishlist");
  const addToLocalStorage = (key: string) => {
    if (key == "cart") {
      setCart([...cart, { price, title, description, img, id, stock }]);
    } else {
      setWishlist([...wishlist, { price, title, description, img, id, stock }]);
    }
    setShowMsg(true);
  };
  return (
    <>
      {msg && <Alert msg="Item added Successfully" showMsg={setShowMsg} />}
      <div className="mt-12 flex flex-col  h-[60vh]  justify-center ">
        <h2 className="font-medium text-4xl text-[#3D3D3D] mb-6">{title}</h2>
        <span className="font-bold text-lg text-[#2A2A2A] italic">
          ${price}
        </span>
        <p className="text-[#555] text-base text-justify w-[90%] mt-3">
          {description}
        </p>
        <ul className="flex items-center gap-3 mt-4  h-12">
          {tags.map((t, ind) => (
            <li
              className="uppercase  px-3 py-1 rounded-lg bg-c-secondary text-white font-medium cursor-pointer hover:bg-white hover:text-c-secondary transition-colors duration-500 hover:border-1"
              key={ind}
            >
              {t}
            </li>
          ))}
        </ul>
        {stock > 0 && (
          <div className="mt-6  ">
            <Button
              onClick={
                foundItemOnCart
                  ? () => navigate("/cart")
                  : () => addToLocalStorage("cart")
              }
              className="py-6 w-80 text-base cursor-pointer mr-3 bg-[#707070]"
            >
              {foundItemOnCart ? "Go To Cart" : "Add To Cart"}
            </Button>
            <Button
              onClick={
                foundItemOnWishlist
                  ? () => navigate("/wishlist")
                  : () => addToLocalStorage("wishlist")
              }
              variant="outline"
              className="cursor-pointer py-6 "
            >
              <Heart className={foundItemOnWishlist && "text-red-500"} />{" "}
            </Button>
          </div>
        )}
      </div>
    </>
  );
}

export default ProductContent;
