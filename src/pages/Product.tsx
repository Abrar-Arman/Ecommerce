import Container from "@/myComponent/common/Container"
import FilterSidebar from "@/myComponent/product/FilterSidebar"
import ProductList from "@/myComponent/product/ProductList"
import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"

function Product() {
  return (
    <Container>
        <div className="text-[#504F4F] flex gap-2 pt-8 font-Prata ">
            <Link to='/'><span className="hover">Home</span></Link>
            <span><ArrowRight /></span>
            <span>All Products</span>
        </div>
        <div className="grid grid-cols-3 gap-12 mt-24">
           <FilterSidebar />
           <ProductList />
        </div>
    </Container>
  )
}

export default Product