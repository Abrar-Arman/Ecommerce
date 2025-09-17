import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getItem, setItem } from "../utils/localstorage/localStorage";
import { TCartItemWithoutQuantity } from "../types/types";

const initialState: TCartItemWithoutQuantity[] = getItem("wishlist") ?? [];
const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addItemToWishlist: (state, action: PayloadAction<TCartItemWithoutQuantity>) => {
      state.push(action.payload);
      setItem('wishlist',state)
    },
      removeItemFromWishlist: (state, action: PayloadAction<number>) => {
        const itemIndex = state.findIndex((item) => item.id === action.payload);
      if (itemIndex != -1) {
        state.splice(itemIndex, 1);
        if (state.length > 0) {
          setItem("wishlist", state);
        } else {
          localStorage.removeItem("wishlist");
        }
      }
    },
  },
});


export const { addItemToWishlist,removeItemFromWishlist}=wishlistSlice.actions;
export default wishlistSlice.reducer;