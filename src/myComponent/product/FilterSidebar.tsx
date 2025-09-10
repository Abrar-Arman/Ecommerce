import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Skeleton } from "@/components/ui/skeleton";
import { Slider } from "@/components/ui/slider";
import useFetchData from "@/hooks/useFetchData";
import { RefreshCw } from "lucide-react";
import { useState } from "react";

function FilterSidebar({ setSearchParams, searchParams }) {
  const {
    data: category,
    isPending,
  } = useFetchData(
    `${import.meta.env.VITE_API_URL}/products/categories`,
    "category"
  );
  const [value, setValue] = useState([10, 100]);
  const newParams = new URLSearchParams(searchParams);
  const resetOneFilter = (key) => {
    newParams.delete(key);
    setSearchParams(newParams);
  };
  if (isPending) {
    return (
      <aside>
        <h2 className="text-[#343434] text-2xl uppercase mb-8">Filter</h2>
        <ul className="mt-6">
          {Array.from({ length: 10 }, (_, ind) => (
            <Skeleton key={ind} className="h-8 w-full" />
          ))}
        </ul>
      </aside>
    );
  }
  return (
    <aside className="col-span-3 md:col-span-1 ">
      <div className="text-[#343434]  uppercase mb-8 w-full ">
        <h2 className=" text-2xl uppercase mb-2">Filter</h2>
        <div className="filter__reset">
          <span
            onClick={() =>
              setSearchParams("page", searchParams.get("page") ?? 1)
            }
            className="text-md hover:underline hover:text-c-secondary transition duration-200 cursor-pointer"
          >
            Reset All
          </span>
          <RefreshCw size={20} className="cursor-pointer hover" />
        </div>
      </div>
      <ul className="border px-2 py-6 min-h-64">
        <li>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-base text-[#212121] cursor-pointer hover">
                CATEGORY
              </AccordionTrigger>
              <AccordionContent>
                <div className="filter__reset">
                  <span
                    className="italic text-sm  font-bold hover cursor-pointer"
                    onClick={() => resetOneFilter("category")}
                  >
                    Reset
                  </span>
                  <RefreshCw size={18} className="cursor-pointer"/>
                </div>
                <ul className="flex flex-col space-y-1.5 h-40 overflow-auto mt-3 ">
                  {category.map((cat, ind) => (
                    <li key={ind} className="text-[#272727] text-base ">
                      <Checkbox
                        checked={searchParams.get("category") === cat.name}
                        onClick={() => {
                          newParams.set("category", cat.name);
                          setSearchParams(newParams);
                        }}
                        className="mr-2"
                      />
                      {cat.name}
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </li>
        <li>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-base text-[#212121] cursor-pointer hover">
                PRICE
              </AccordionTrigger>
              <AccordionContent>
                <div className="mb-4 filter__reset">
                  <span
                    className="italic text-sm  font-bold hover cursor-pointer"
                    onClick={() => {
                      resetOneFilter("minPrice");
                      resetOneFilter("maxPrice");
                    }}
                  >
                    Reset
                  </span>
                  <RefreshCw size={18} className="cursor-pointer" />
                </div>
                <Slider
                  min={20}
                  max={100}
                  step={1}
                  onValueChange={(val) => {
                    setValue(val);
                    newParams.set("minPrice", String(val[0]));
                    newParams.set("maxPrice", String(val[1]));
                    setSearchParams(newParams);
                  }}
                  value={value}
                  className="w-[80%]"
                />
                <div className="flex justify-between mt-2 w-[80%] font-Prata font-medium text-sm">
                  <span>${value[0]}</span>
                  <span>${value[1]}</span>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </li>
      </ul>
    </aside>
  );
}

export default FilterSidebar;
