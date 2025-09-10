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

function ProductList({ searchParams, setSearchParams }) {
  const limit = 10;
  const newParams = new URLSearchParams(searchParams);
  const page = Number(searchParams.get("page") ?? 1);
  const [, setSelectedProduct] = useState<Record<
    string,
    unknown
  > | null>(null);
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

  console.log(products,'products')
  //search param
  const category = searchParams.get("category");
  const minPrice = searchParams.get("minPrice");
  const maxPrice = searchParams.get("maxPrice");
  // Convert prices to numbers for comparison
  const min = minPrice ? Number(minPrice) : undefined;
  const max = maxPrice ? Number(maxPrice) : undefined;

  // Filter products based on existing params
  const filteredProducts = products
    ? products.products.filter((prod) => {
        let match = true;
        if (category) {
          match = match && prod.category === category.toLowerCase();
        }
        if (min !== undefined && max !== undefined) {
          match = match && prod.price >= min && prod.price <= max;
        }
        return match;
      })
    : [];
  
  const totalPages = products && Math.ceil(products.total / limit);
  const handlePageClick = (num: number) => {
    if (num >= 1 && num <= totalPages) {
      console.log("handlePageClick");
      newParams.set("page", String(num));
      setSearchParams(newParams);
        window.scrollTo(0,0)
    }
  };
  const handlePrev = () => {
    if (page > 1) {
      const current = Number(searchParams.get("page") ?? 1);
      newParams.set("page", String(current - 1));
      setSearchParams(newParams);
      window.scrollTo(0,0);
    }
  };
  const handleNext = () => {
    if (page < totalPages) {
      const current = Number(searchParams.get("page") ?? 1);
      newParams.set("page", String(current + 1));
      setSearchParams(newParams);
        window.scrollTo(0,0)
    }
  };
  const getVisiblePages = () => {
    const visibleCount = 4;
    const start = page;
    const end = Math.min(page + visibleCount - 1, totalPages);
    const pages = [];
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    return pages;
  };
  const onSelectedProduct = (prd: Record<string, unknown>) => {
    setSelectedProduct((curr) => (curr === prd ? null : prd));
  };
  const visiblePages = getVisiblePages();
 if (isPending) {
    return (
      <ul className="product__card col-span-2">
        {Array.from({ length: limit }, (_, ind) => (
          <Skeleton key={ind} className="h-36 w-full" />
        ))}
      </ul>
    );
  }
  if(!isPending && filteredProducts.length==0){
    return <p>no item</p>
  }
  return (
    <div className="col-span-3 md:col-span-2 ">
      <Title first="All" last="Collections" />
      <ul className="product__card mb-4 ">
        {filteredProducts && filteredProducts.map((prod, ind) => (
          <ProductItem
            key={ind}
            thumbnail={prod.thumbnail}
            title={prod.title}
            price={prod.price}
            onSelectProduct={(): void => onSelectedProduct(prod)}
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
