import { HeartPlus, ShoppingCart, User } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
function NavbarIcon() {
  return (
    <div className="text-[#323232] flex items-center gap-4 cursor-pointer ">
      <Tooltip >
        <TooltipTrigger><HeartPlus className="hover" /></TooltipTrigger>
        <TooltipContent>
          <p>My Cart</p>
        </TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger>
          <User className="hover" />
        </TooltipTrigger>
        <TooltipContent>
          <p>Login</p>
        </TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger>
          <ShoppingCart className="hover" />
        </TooltipTrigger>
        <TooltipContent>
          <p>My Cart</p>
        </TooltipContent>
      </Tooltip>
    </div>
  );
}

export default NavbarIcon;
