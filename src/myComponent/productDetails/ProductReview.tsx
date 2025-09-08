import { Star } from "lucide-react";

type TProductReviewProps = {
  review: Record<string, unknown>[];
};
function ProductReview({ review }: TProductReviewProps) {
  return (
    <div className="mt-12 ">
      <h2 className="uppercase text-[#343434] text-2xl md:text-3xl">Review</h2>
      <ul className="px-3 py-10 border border-[#D0D0D0] rounded mt-6 flex flex-col gap-4 ">
        {review.map((rev, idx) => (
          <li key={idx} className="w-[80%] shadow  pl-3 py-6">
            <div className="flex items-center gap-2">
              <h3 className="text-lg md:text-2xl font-Prata font-bold">{rev["reviewerName"] as string}</h3>
              <div className="flex gap-1">
                {" "}
                {Array.from({ length: rev["rating"] as number }, (_, ind) => (
                  <Star key={ind} className="text-yellow-300" />
                ))}
              </div>
            </div>
            <p className="mt-2 text-base md:text-lg">{rev["comment"] as string}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductReview;
