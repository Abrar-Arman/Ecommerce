import Container from "@/myComponent/common/Container"
import FilterSidebar from "@/myComponent/product/FilterSidebar"
import ProductList from "@/myComponent/product/ProductList"
import { ArrowRight } from "lucide-react"
import { Link, useSearchParams } from "react-router-dom"

function Product() {
    const [searchParams, setSearchParams] = useSearchParams();

  return (
    <>
    <title>Product</title>
    <Container>
        <div className="text-[#504F4F] flex gap-2 pt-8 font-Prata ">
            <Link to='/'><span className="hover">Home</span></Link>
            <span><ArrowRight /></span>
            <span>All Products</span>
        </div>
        <div className="grid md:grid-cols-3 gap-12 mt-20 ">
           <FilterSidebar setSearchParams={setSearchParams} searchParams={searchParams}/>
           <ProductList searchParams={searchParams} setSearchParams={setSearchParams} />
        </div>
    </Container>
    </>
  )
}

export default Product