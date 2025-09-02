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
import { useState } from "react";

function FilterSidebar() {
  const {
    data: category,
    isError,
    isPending,
  } = useFetchData(
    `${import.meta.env.VITE_API_URL}/products/categories`,
    "category"
  );
  const [value, setValue] = useState([20, 100]);
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
    <aside className="">
      <h2 className="text-[#343434] text-2xl uppercase mb-8">Filter</h2>
      <ul className="border px-2 py-6 min-h-64">
        <li>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-base text-[#212121] cursor-pointer hover">
                CATEGORY
              </AccordionTrigger>
              <AccordionContent>
                <ul className="flex flex-col space-y-1.5 h-40 overflow-auto">
                  {category.map((cat, ind) => (
                    <li key={ind} className="text-[#272727] text-base ">
                      <Checkbox className="mr-2" />
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
                <Slider
                  min={20}
                  max={100}
                  step={1}
                  onValueChange={setValue}
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
