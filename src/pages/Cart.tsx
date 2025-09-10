import { useCartContext } from "@/context/CardProvider";
import Container from "@/myComponent/common/Container";
import EmptyCart from "@/myComponent/common/cart_wishlist/Empty.tsx";
import CartTitle from "@/myComponent/cart/CartTitle";
import CartSummary from "@/myComponent/cart/CartSummary";
import type { TCartItem } from "../types/types.ts";
import { useState } from "react";
import Alert from "@/myComponent/common/Alert.tsx";
import ItemList from "@/myComponent/common/cart_wishlist/ItemList.tsx";
import { useNavigate } from "react-router-dom";
import DeleteModal from "@/myComponent/common/cart_wishlist/DeleteModal.tsx";
import { Trash2 } from "lucide-react";

function Cart() {
  const { data: cart, setData: setCart } = useCartContext() as {
    data: TCartItem[];
    setData: React.Dispatch<React.SetStateAction<TCartItem[]>>;
  };
  console.log(cart, "cart page/////");
  const [showMsg, setShowMsg] = useState<boolean>(false);
  const navigate = useNavigate();

  const updateQuntity = (s, qa) => {
    if (qa > s.stock) {
      setShowMsg(true);
      return;
    }
    if (qa ==0) {
      setShowMsg(true);
      return;
    }
    
    setCart(
      cart.map((item) =>
        item.id == s.id
          ? { ...item, quntity: qa, stock: item.stock, myQuan: item.stock - qa }
          : item
      )
    );
  };
  const renderCartItem = (item) => (
    <li
      key={item.id}
      className="py-2.5 border grid grid-cols-4 items-center  border-[#D1D1D1] border-l-transparent border-r-transparent"
    >
      <div className="flex flex-col sm:flex-row gap-2 items-center col-span-2">
        <img src={item.img} alt={item.title} className="w-22 h-22" />
        <div className="text-[#494949] ">
          <h3 className="font-medium text-lg hidden lg:block">{item.title}</h3>
          <span>${item.price}</span>
          <span className="block italic ">
            {item.myQuan ?? item.stock - 1} avalible
          </span>
        </div>
      </div>
      <div>
        <input
          type="number"
          className="border border-[#DFDFDF] px-2 py-1"
          lang="en"
          dir="ltr"
          inputMode="numeric"
          disabled={item.stock == 0}
          min={1}
          max={item.stock}
          value={item.quntity ?? 1}
          onChange={(e) => {
            updateQuntity(item, Number(e.target.value));
          }}
        />
      </div>
      <div className="ml-auto ">
        <div className="ml-auto">
          <DeleteModal
            title="Are you sure you want to remove this item from your cart?"
            onClick={() =>
              setCart((pre) => pre.filter((prod) => prod.id != item.id))
            }
            icon={
              <Trash2 className="cursor-pointer hover:text-red-500 hover:scale-[1.1] transition duration-200 " />
            }
            btnText="Delete"
          />
        </div>
      </div>
    </li>
  );
  if (cart.length == 0)
    return (
      <EmptyCart
        text="Your cart is empty"
        onClick={() => navigate("/products")}
      />
    );
  return (
    <>
      <title>My cart</title>
      {showMsg && (
        <Alert
          type="error"
          msg="You cannot add this quantity, exceeds available stock"
          showMsg={setShowMsg}
        />
      )}
      <Container>
        <div className="min-h-[70vh] pb-5 ">
          <CartTitle first="My" last="Cart" />
          <ItemList render={renderCartItem} data={cart} />
          <CartSummary myCart={cart} />
        </div>
      </Container>
    </>
  );
}

export default Cart;
