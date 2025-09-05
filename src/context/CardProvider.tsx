import useLocalStorage from "@/hooks/useLocalStorage";
import { createContext, useContext } from "react";
import type {TContext} from '../types/types.ts'
const CardContext = createContext<null | TContext>(null);

export default function CartProvider({ children }) {
    const [  data, setData] = useLocalStorage("cart");
    return (
        <CardContext value={{ data, setData }}>
            {children}
        </CardContext>
    );
}

export function useCartContext() {
    const card = useContext(CardContext);
    if (!card) {
        throw new Error("useCartContext must be used within a CardProvider");
    }
    return card;
}

