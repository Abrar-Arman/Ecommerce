import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { links } from "../../../constant/myConstant";
import { Link } from "react-router-dom";
import NavbarIcon from "./NavbarIcon";
import NavbarLogo from "../Logo";
import NavbarCategory from "./NavbarCategory";

function Navbar() {
  return (
    <NavigationMenu
      viewport={false}
      className="px-9 justify-between my-5 font-Outfit text-text-primary "
    >
      {/* Logo */}
     <NavbarLogo />

      {/* Links */}
      <div>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link to="/" className="nav-link hover:text-c-secondary hover:bg-transparent">
                Home
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
         <NavbarCategory />
          {links.map((link, ind) => (
            <NavigationMenuItem key={ind}>
              <NavigationMenuLink asChild>
                <Link to={`/${link}`} className="nav-link hover:text-c-secondary hover:bg-transparent">
                  {link}
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </div>
        <NavbarIcon />
    </NavigationMenu>
  );
}

export default Navbar;
