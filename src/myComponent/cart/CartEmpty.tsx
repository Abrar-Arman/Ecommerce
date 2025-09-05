import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

function EmptyCart() {
    const navigate=useNavigate();
  return (
    <div className="flex flex-col  h-[80vh] items-center justify-center  mb-12 ">
      <img
        src="shopping.png" 
        alt="Empty Cart"
        className="w-64 mb-4"
      />
      <h2 className="text-2xl font-semibold text-gray-700">
        Your cart is empty
      </h2>
      <p className="text-gray-500 mt-2">
        Looks like you haven't added any products yet.
      </p>
      <Button className="mt-5 font-Outfit text-base  px-6 py-3 cursor-pointer" onClick={()=>navigate('/products')}>Go To Product Page</Button>
    </div>
  );
}
export default EmptyCart;