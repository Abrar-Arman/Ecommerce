import { Button } from "@/components/ui/button";
import Container from "@/myComponent/common/Container";
import ImageContainer from "@/myComponent/productDetails/ImageContainer";
import ProductContent from "@/myComponent/productDetails/productContent";
import ProductReview from "@/myComponent/productDetails/ProductReview";
import { useLocation } from "react-router-dom";
function ProductDetails() {
  const location = useLocation();
  console.log(location, "location");
  const product = location.state.product;
  return (
    <Container>
      <div className="grid grid-cols-2 gap-2.5 h-[calc(100vh-96px)]   ">
        <ImageContainer main={product.thumbnail} allImage={product.images} />
        <ProductContent
          title={product.title}
          price={product.price}
          tags={product.tags}
          description={product.description}
        />
      </div>
     <ProductReview review={product.reviews} />
    </Container>
  );
}

export default ProductDetails;
