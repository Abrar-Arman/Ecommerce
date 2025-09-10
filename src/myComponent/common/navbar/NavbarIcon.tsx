import { Heart, ShoppingCart, User } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Link } from "react-router-dom";
import { useCartContext } from "@/context/CardProvider";
import { useWishlistContext } from "@/context/WishlistProvider";
function NavbarIcon() {
  const { data: cart } = useCartContext();
  const { data: wishlist } = useWishlistContext();
  console.log(cart,'cart icons')
  return (
    <div className="text-[#323232] flex items-center gap-4 cursor-pointer ">
      <Link to="/wishlist">
        <Tooltip>
          <TooltipTrigger>
            <div className="relative">
              <div className="nav-icon">{wishlist.length}</div>
              <Heart className="hover" size={26} />
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <p>wishlist</p>
          </TooltipContent>
        </Tooltip>
      </Link>
       <Link to="/cart">
        <Tooltip>
          <TooltipTrigger>
            <div className="relative">
              <div className="nav-icon"> {cart.length}</div>
              <ShoppingCart size={26} className="hover" />
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <p>My Cart</p>
          </TooltipContent>
        </Tooltip>
      </Link>
      <Link to="/">
        <Tooltip>
          <TooltipTrigger>
            <div>
              <User size={26} className="hover" />
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <p>Login</p>
          </TooltipContent>
        </Tooltip>
      </Link>
     
    </div>
  );
}

export default NavbarIcon;
