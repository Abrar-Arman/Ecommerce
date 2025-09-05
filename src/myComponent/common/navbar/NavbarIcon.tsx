import { Heart, ShoppingCart, User } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Link } from "react-router-dom";
function NavbarIcon() {
  return (
    <div className="text-[#323232] flex items-center gap-4 cursor-pointer ">
      <Link to='/wishlist'>
       <Tooltip >
        <TooltipTrigger><Heart className="hover" /></TooltipTrigger>
        <TooltipContent>
          <p>wishlist</p>
        </TooltipContent>
      </Tooltip>
      </Link>
      <Link to='/'>
      <Tooltip>
        <TooltipTrigger>
          <User className="hover" />
        </TooltipTrigger>
        <TooltipContent>
          <p>Login</p>
        </TooltipContent>
      </Tooltip>
      </Link>
      <Link to='/cart' >
      <Tooltip>
        <TooltipTrigger>
          <ShoppingCart className="hover" />
        </TooltipTrigger>
        <TooltipContent>
          <p>My Cart</p>
        </TooltipContent>
      </Tooltip>
      </Link>
    </div>
  );
}

export default NavbarIcon;
