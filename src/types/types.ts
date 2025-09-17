type TCartItem = {
  id: number;
  title: string;
  img: string;
  price: number;
  quntity?:number;
  stock:number;
  myQuan?:number;
};

type TContext = {
  data: Record<string, unknown>[];
  setData:  React.Dispatch<React.SetStateAction<Record<string, unknown>[] | []>>;
};


interface ICartItem {
  id: number;
  description: string;
  img: string;
  myQuan: number;
  price: number;
  quntity: number;
  stock: number;
  title: string;
}
type TCartItemWithoutQuantity = Omit<ICartItem, "quntity" | "myQuan">;



export type {TCartItem,TContext,ICartItem,TCartItemWithoutQuantity}