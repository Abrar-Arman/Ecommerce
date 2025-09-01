import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { links } from "../../../constant/myConstant";
import { Link } from "react-router-dom";
import NavbarIcon from "./NavbarIcon";
import NavbarLogo from "../Logo";
import NavbarCategory from "./NavbarCategory";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

function Navbar() {
  return (
    <>
      <NavigationMenu
        viewport={false}
        className="px-9 sticky top-0 z-40 justify-between my-5  hidden md:flex font-Outfit text-text-primary "
      >
        {/* Logo */}
        <NavbarLogo />
        {/* Links */}
        <div>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  to="/"
                  className="nav-link hover:text-c-secondary hover:bg-transparent"
                >
                  Home
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavbarCategory />
            {links.map((link, ind) => (
              <NavigationMenuItem key={ind}>
                <NavigationMenuLink asChild>
                  <Link
                    to={`/${link}`}
                    className="nav-link hover:text-c-secondary hover:bg-transparent"
                  >
                    {link}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </div>
        <NavbarIcon />
      </NavigationMenu>
      <header className="flex justify-between my-5 px-9 md:hidden">
        <NavbarLogo />
        <Sheet className="block md:hidden  ">
          <SheetTrigger asChild>
            <Menu className="text-5xl" />
          </SheetTrigger>
          <SheetContent side="left">
            <nav className="flex flex-col text-center space-y-6 mt-16 ">
              <Link
                to="/"
                className="nav-link hover:text-c-secondary hover:bg-transparent"
              >
                Home
              </Link>
              {links.map((link, ind) => (
                <Link
                  to={`/${link}`}
                  key={ind}
                  className="nav-link hover:text-c-secondary hover:bg-transparent"
                >
                  {link}
                </Link>
              ))}
              <Link
                to="/"
                className="nav-link hover:text-c-secondary hover:bg-transparent"
              >
                Category
              </Link>
            </nav>
            <div className="absolute left-0 bottom-0  w-full text-center centerFlexLayout p-5"> <NavbarLogo /></div>
          </SheetContent>
        </Sheet>
      </header>
    </>
  );
}

export default Navbar;
