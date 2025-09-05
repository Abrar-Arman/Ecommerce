import useLocalStorage from "@/hooks/useLocalStorage";
import { createContext, useContext } from "react";
import type {TContext} from '../types/types.ts'
const WishlistContext = createContext<null|TContext>(null);
export default function WishlistProvider({ children }) {
  const [data, setData] = useLocalStorage('wishlist');

  return (
    <WishlistContext value={{ data, setData }}>
      {children}
    </WishlistContext>
  );
}
export function useWishlistContext() {
    const wishlist = useContext(WishlistContext);
    if (!wishlist) {
        throw new Error("useCartContext must be used within a CardProvider");
    }
    return wishlist;
}
