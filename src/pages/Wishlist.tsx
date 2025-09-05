import { useWishlistContext } from "@/context/WishlistProvider";
import CartTitle from "@/myComponent/cart/CartTitle";
import ItemList from "@/myComponent/common/cart_wishlist/ItemList";
import Container from "@/myComponent/common/Container";

function Wishlist() {
  const { data: wishlist, setData: setWishlist } = useWishlistContext();
  console.log(wishlist, "wishlist");
  //   const renderWishlistItem = (item) => (
  //     <li
  //       key={item.id}
  //       className="py-2.5 border grid grid-cols-3 items-center  border-[#D1D1D1] border-l-transparent border-r-transparent"
  //     >
  //       <div className="flex gap-2 items-center">
  //         <img src={item.img} alt={item.title} className="w-22 h-22" />
  //         <div className="text-[#494949] ">
  //           <h3 className="font-medium text-lg">{item.title}</h3>
  //           <span>${item.price}</span>
  //           <span className="block italic ">
  //             {item.myQuan ?? item.stock - 1} avalible
  //           </span>
  //         </div>
  //       </div>
  //       <div>
  //         <input
  //           type="number"
  //           className="border border-[#DFDFDF] px-2 py-1"
  //           disabled={item.stock == 0}
  //           min={1}
  //           max={item.stock}
  //           value={item.quntity ?? 1}
  //           onChange={(e) => {
  //             updateQuntity(item, Number(e.target.value));
  //           }}
  //         />
  //       </div>
  //       <div className="ml-auto ">
  //         <div className="ml-auto">
  //           <AlertDialog>
  //             <AlertDialogTrigger>
  //               <Trash2 className="cursor-pointer hover:text-red-500 " />
  //             </AlertDialogTrigger>
  //             <AlertDialogContent className="">
  //               <AlertDialogHeader>
  //                 <AlertDialogTitle className="text-2xl font-Outfit">
  //                   Are you absolutely sure?
  //                 </AlertDialogTitle>
  //                 <AlertDialogDescription className="text-base">
  //                   This action cannot be undone. This will permanently delete
  //                   your item.
  //                 </AlertDialogDescription>
  //               </AlertDialogHeader>
  //               <AlertDialogFooter className="mt-4">
  //                 <AlertDialogCancel asChild>
  //                   <Button
  //                     variant="outline"
  //                     className="cursor-pointer font-medium"
  //                   >
  //                     Cancel
  //                   </Button>
  //                 </AlertDialogCancel>
  //                 <Button
  //                   type="submit"
  //                   className="cursor-pointer font-medium"
  //                   onClick={() =>
  //                     setCart((pre) => pre.filter((prod) => prod.id != item.id))
  //                   }
  //                 >
  //                   Delete
  //                 </Button>
  //               </AlertDialogFooter>
  //             </AlertDialogContent>
  //           </AlertDialog>
  //         </div>
  //       </div>
  //     </li>
  //   );
  return (
    <Container>
      <div className="h-[70vh]">
        <CartTitle first="My" last="Wishlist" />
        {/* <ItemList render={renderWishlistItem} data={wishlist} /> */}
      </div>
    </Container>
  );
}

export default Wishlist;
