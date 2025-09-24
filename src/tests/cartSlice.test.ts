import cartReducer, {
  addItem,
  removeItem,
  updateQuntity,
} from "../slices/cartSlice";
import {
  setItem,
  removeItemFromLocalStorage,
} from "../utils/localstorage/localStorage";
import { ICartItem } from "../types/types";

vi.mock("../utils/localstorage/localStorage", () => ({
  getItem: vi.fn(() => null),
  setItem: vi.fn(),
  removeItemFromLocalStorage: vi.fn()
}));

const mockItem: ICartItem = {
  id: 1,
  title: "Test Item",
  description: "desc",
  img: "img.png",
  price: 100,
  quntity: 1,
  myQuan: 9,
  stock: 18,
};
beforeEach(() => {
  vi.clearAllMocks();
});
describe("cartSlice", () => {
  it("should add an item", () => {
    const initialState: ICartItem[] = [];

    const nextState = cartReducer(initialState, addItem(mockItem));

    expect(nextState).toHaveLength(1);
    expect(nextState[0]).toEqual(mockItem);
    expect(setItem).toHaveBeenCalledTimes(1);
  });

  it("should remove an item by id", () => {
    const initialState = [mockItem];

    const nextState = cartReducer(initialState, removeItem(1));

    expect(nextState).toHaveLength(0);
    expect(setItem).not.toHaveBeenCalled();
    expect(removeItemFromLocalStorage).toHaveBeenCalledTimes(1);
  });

  it("should update item quantity and myQuan", () => {
    const initialState = [mockItem];

    const nextState = cartReducer(
      initialState,
      updateQuntity({ id: 1, num: 3 })
    );

    expect(nextState[0].quntity).toBe(3);
    expect(nextState[0].myQuan).toBe(15);
    expect(setItem).toHaveBeenCalledTimes(1);
  });
});
