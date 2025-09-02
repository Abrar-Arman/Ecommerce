import useFetchData from "@/hooks/useFetchData";
import { useState } from "react";
import ProductItem from "./ProductItem";
import Title from "../common/Title";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

function ProductList() {
  const limit = 10;
  const [page, setPage] = useState(1);
  const [selectedProduct, setSelectedProduct] = useState<Record<string, unknown> | null>(null);
   console.log(selectedProduct,'selectedProduct')
  const {
    data: products,
    isError,
    isPending,
  } = useFetchData(
    `${import.meta.env.VITE_API_URL}/products?limit=${limit}&skip=${
      (page - 1) * limit
    }`,
    `products/${page}`
  );

  if (isPending) {
    return (
      <ul className="product__card col-span-2">
        {Array.from({ length: limit }, (_, ind) => (
          <Skeleton key={ind} className="h-36 w-full" />
        ))}
      </ul>
    );
  }

  const totalPages = Math.ceil(products.total / limit);

  const handlePageClick = (num: number) => {
    if (num >= 1 && num <= totalPages) setPage(num);
  };

  const handlePrev = () => {
    if (page > 1) setPage((prev) => prev - 1);
  };

  const handleNext = () => {
    if (page < totalPages) setPage((prev) => prev + 1);
  };
  const getVisiblePages = () => {
    const visibleCount = 4;
    const start = page;
    let end = Math.min(page + visibleCount - 1, totalPages);
    const pages = [];
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    return pages;
  };
  const onSelectedProduct = (prd:Record<string,unknown>) => {
    setSelectedProduct((curr) => (curr === prd ? null : prd));
  };
  const visiblePages = getVisiblePages();

  return (
    <div className="col-span-2">
      <Title first="All" last="Collections" />
      <ul className="product__card mb-4">
        {products.products.map((prod, ind) => (
          <ProductItem
            key={ind}
            rating={prod.rating}
            thumbnail={prod.thumbnail}
            title={prod.title}
            price={prod.price}
            onSelectProduct={():void=>onSelectedProduct(prod)}
            product={prod}
          />
        ))}
      </ul>

      <Pagination>
        <PaginationContent>
          {page > 1 && (
            <PaginationItem className="curor-pointer">
              <PaginationPrevious onClick={handlePrev} />
            </PaginationItem>
          )}

          {visiblePages.map((p) => (
            <PaginationItem key={p}>
              <PaginationLink
                onClick={() => handlePageClick(p)}
                className={`${
                  page === p ? "font-bold text-c-secondary" : "text-[#707070] "
                } cursor-pointer `}
              >
                {p}
              </PaginationLink>
            </PaginationItem>
          ))}

          {page != products.totalPages && (
            <PaginationItem>
              <PaginationNext onClick={handleNext} />
            </PaginationItem>
          )}
        </PaginationContent>
      </Pagination>
    </div>
  );
}

export default ProductList;
