import CartTitle from "@/myComponent/cart/CartTitle";
import DeleteModal from "@/myComponent/common/cart_wishlist/DeleteModal";
import EmptyWishlist from "@/myComponent/common/cart_wishlist/Empty";
import ItemList from "@/myComponent/common/cart_wishlist/ItemList";
import Container from "@/myComponent/common/Container";
import { ShoppingCart, Trash2 } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../store";
import { removeItemFromWishlist } from "../slices/wishlistSlice";
import { addItem, updateQuntity } from "../slices/cartSlice";
function Wishlist() {
  const wishlist = useSelector((state: RootState) => state.wishlist);
  const cart = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log(wishlist, "wishlist");
  const removeFromWishlist = (id: number) => {
    dispatch(removeItemFromWishlist(id));
  };
  const moveToCat = (item) => {
    const found = cart.find((c) => c.id === item.id);
    console.log(found);
    if (found) {
      dispatch(updateQuntity({ id: found.id, num: found.quntity + 1 }));
    } else {
      console.log("not founed");
      dispatch(addItem({ ...item, quntity: 1, myQuan: item.stock - 1 }));
    }
    removeFromWishlist(item.id);
  };
  const renderWishlistItem = (item) => (
    <li
      key={item.id}
      className="py-2.5 px-3 border grid grid-cols-3 items-center  border-[#D1D1D1] border-l-transparent border-r-transparent"
    >
      <div className="flex gap-2 items-center">
        <img src={item.img} alt={item.title} className="w-22 h-22" />
        <div className="text-[#494949] ">
          <h3 className="font-medium text-lg">{item.title}</h3>
          <span>${item.price}</span>
        </div>
      </div>
      <div></div>
      <div className="ml-auto ">
        <div className="ml-auto flex gap-3 items-center">
          <DeleteModal
            title={`Are you sure you want to move  ${item.title} from your wishlist to cart?`}
            onClick={() => moveToCat(item)}
            icon={<ShoppingCart className="hover cursor-pointer" />}
            btnText="Move"
          />
          <DeleteModal
            title={`Are you sure you want to remove  ${item.title} from your wishlist?`}
            onClick={() => removeFromWishlist(item.id)}
            icon={<Trash2 className="cursor-pointer hover:text-red-500 " />}
            btnText="Delete"
          />
        </div>
      </div>
    </li>
  );
  if (wishlist.length == 0)
    return (
      <EmptyWishlist
        text="Your wishlist is empty"
        onClick={() => navigate("/products")}
      />
    );
  return (
    <>
      <title>My Wishlist</title>
      <Container>
        <div className="h-[70vh]">
          <CartTitle first="My" last="Wishlist" />
          <ItemList render={renderWishlistItem} data={wishlist} />
        </div>
      </Container>
    </>
  );
}

export default Wishlist;
