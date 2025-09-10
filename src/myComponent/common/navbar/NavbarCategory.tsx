import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import useFetchData from "@/hooks/useFetchData";
import { Link } from "react-router-dom";
function NavbarCategory() {
    const {data:category,  isError,isPending}=useFetchData(`${import.meta.env.VITE_API_URL}/products/categories`,'category');
    if(isPending)
        return  null;
  return (
     <NavigationMenuItem className="hover:text-c-secondary hover:bg-transparent">
            <NavigationMenuTrigger className="nav-link uppercase hover:text-c-secondary hover:bg-transparent">
              Category
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-4 w-[200px]">
                {category.slice(0,10).map((cat,ind)=>(<li key={ind}>
                  <NavigationMenuLink asChild >
                    <Link to={`/category/${cat.name}`} className="hover:text-c-secondary">{cat.name}</Link>
                  </NavigationMenuLink>
                </li>))}
                 <NavigationMenuLink asChild >
                    <Link to={`/category`} className="underline  text-center">Show All</Link>
                  </NavigationMenuLink>
              </ul>
               
            </NavigationMenuContent>
          </NavigationMenuItem>
  )
}

export default NavbarCategory