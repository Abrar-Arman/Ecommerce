import { useCartContext } from "@/context/CardProvider";
import Container from "@/myComponent/common/Container";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../components/ui/alert-dialog";
import { Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AlertDialogCancel } from "@radix-ui/react-alert-dialog";
import EmptyCart from "@/myComponent/cart/CartEmpty";
import CartTitle from "@/myComponent/cart/CartTitle";
import CartSummary from "@/myComponent/cart/CartSummary";
import type { TCartItem } from "../types/types.ts";
import { useState } from "react";
import Alert from "@/myComponent/common/Alert.tsx";
import ItemList from "@/myComponent/common/cart_wishlist/ItemList.tsx";

function Cart() {
  const { data: cart, setData: setCart } = useCartContext() as {
    data: TCartItem[];
    setData: React.Dispatch<React.SetStateAction<TCartItem[]>>;
  };
  console.log(cart,'cart /////')
  const [showMsg, setShowMsg] = useState<boolean>(false);
  const updateQuntity = (s, qa) => {
    if (qa > s.stock) {
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
      className="py-2.5 border grid grid-cols-3 items-center  border-[#D1D1D1] border-l-transparent border-r-transparent"
    >
      <div className="flex gap-2 items-center">
        <img src={item.img} alt={item.title} className="w-22 h-22" />
        <div className="text-[#494949] ">
          <h3 className="font-medium text-lg">{item.title}</h3>
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
          <AlertDialog>
            <AlertDialogTrigger>
              <Trash2 className="cursor-pointer hover:text-red-500 " />
            </AlertDialogTrigger>
            <AlertDialogContent className="">
              <AlertDialogHeader>
                <AlertDialogTitle className="text-2xl font-Outfit">
                  Are you absolutely sure?
                </AlertDialogTitle>
                <AlertDialogDescription className="text-base">
                  This action cannot be undone. This will permanently delete
                  your item.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter className="mt-4">
                <AlertDialogCancel asChild>
                  <Button
                    variant="outline"
                    className="cursor-pointer font-medium"
                  >
                    Cancel
                  </Button>
                </AlertDialogCancel>
                <Button
                  type="submit"
                  className="cursor-pointer font-medium"
                  onClick={() =>
                    setCart((pre) => pre.filter((prod) => prod.id != item.id))
                  }
                >
                  Delete
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>
    </li>
  );
  if (cart.length == 0) return <EmptyCart />;
  return (
    <>
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
           <ItemList render={renderCartItem} data={cart}/>
          <CartSummary myCart={cart} />
        </div>
      </Container>
    </>
  );
}

export default Cart;
