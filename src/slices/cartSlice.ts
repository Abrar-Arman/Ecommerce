import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getItem, setItem, removeItemFromLocalStorage } from "../utils/localstorage/localStorage";
import { ICartItem } from "../types/types";
interface ICartItemUpdate {
  id: number;
  num: number;
}

const initialState: ICartItem[] = getItem("cart") ?? [];
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<ICartItem>) => {
      state.push(action.payload);
      setItem("cart", state);
    },
    removeItem: (state, action: PayloadAction<number>) => {
      const itemIndex = state.findIndex((item) => item.id === action.payload);
      if (itemIndex != -1) {
        state.splice(itemIndex, 1);
        if (state.length > 0) {
          setItem("cart", state);
        } else {
          removeItemFromLocalStorage("cart");
        }
      }
    },
    updateQuntity: (state, action: PayloadAction<ICartItemUpdate>) => {
      const { id, num } = action.payload;
      console.log(num,'inside slice')
      const existingItem = state.find(i => i.id === id)!;
       existingItem.quntity = num;
       existingItem.myQuan =  existingItem.stock - num;
      setItem("cart", state);
    },
  },
});

export const { addItem, removeItem, updateQuntity } = cartSlice.actions;
export default cartSlice.reducer;
