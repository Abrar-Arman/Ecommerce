import Container from "@/myComponent/common/Container";
import ImageContainer from "@/myComponent/productDetails/ImageContainer";
import ProductContent from "@/myComponent/productDetails/productContent";
import ProductReview from "@/myComponent/productDetails/ProductReview";
import { ArrowRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
function ProductDetails() {
  const location = useLocation();
  console.log(location, "location");
  const product = location.state.product;
  return (
    <Container>
      <div className="text-[#504F4F] flex gap-2 pt-8 font-Prata text-xs items-center sm:text-base">
        <Link to="/">
          <span className="hover font-bold">Home</span>
        </Link>
        <span>
          <ArrowRight />
        </span>
        <Link to="/products">
          <span className="hover font-bold">All Products</span>
        </Link>
        <span>
          <ArrowRight />
        </span>
        <span className="hover">{product.title}</span>
      </div>
      <div
        className="grid md:grid-cols-2 gap-2.5 md:min-h-[calc(100vh-96px)]  
   "
      >
        <ImageContainer main={product.thumbnail} allImage={product.images} />
        <ProductContent
          title={product.title}
          price={product.price}
          tags={product.tags}
          description={product.description}
          img={product.thumbnail}
          id={product.id}
          stock={product.stock}
        />
      </div>
      <ProductReview review={product.reviews} />
    </Container>
  );
}

export default ProductDetails;
