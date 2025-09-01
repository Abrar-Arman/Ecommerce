import clsx from "clsx";
import { Check, Star } from "lucide-react";

type TReviewCardProps = {
  rev: {
    name: string;
    review: string;
  };
  ind:number;
};
function ReviewCard({ rev ,ind}: TReviewCardProps) {
  return <li className={clsx("border lg:col-span-1 w-[80%] sm:w-auto  border-[#f9f9f9f2] pt-6 py-8 px-2 rounded-md shadow",ind==2 ? 'sm:col-span-2':'col-span-1')}>
    <div className="centerFlexLayout gap-0.5">
    {Array.from({length:5},(_,i)=><Star key={i} className="text-yellow-300 " />)}
    </div>
    <h3 className="font-bold text-xl centerFlexLayout mt-3">{rev.name} <Check className=" text-green-600 test-lg" /></h3>
    <p className="text-justify mt-1 text-[#565656]">{rev.review}</p>
  </li>;
}

export default ReviewCard;
