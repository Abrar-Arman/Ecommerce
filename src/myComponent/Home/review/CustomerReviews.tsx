import React from "react";
import Container from "../../common/Container";
import Title from "../../common/Title";
import { customerReviews } from "../../../constant/myConstant";
import { Link } from "react-router-dom";
import ReviewCard from "./ReviewCard";
import { MoveUpRight } from "lucide-react";
function CustomerReviews() {
  return (
    <Container>
        <Title first="Our Customer" last="Reviews" />
        <div className="text-center mt-4 ">
          <Link to={"/"} className=" text-md font-medium text-[#707070] hover:text-c-secondary duration-150 hover:underline centerFlexLayout">
            Show More <MoveUpRight className="ml-1 text-c-secondary" />
          </Link>
        </div>

      <ul className="mt-12 grid grid-cols-1 justify-items-center  w-full sm:justify-start sm:w-auto sm:grid-cols-2  lg:grid-cols-3 gap-4">
        {customerReviews.map((rev,ind)=><ReviewCard key={ind} rev={rev} ind={ind}/>)}
      </ul>
    </Container>
  );
}

export default CustomerReviews;
