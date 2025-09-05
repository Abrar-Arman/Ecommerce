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






export type {TCartItem,TContext}