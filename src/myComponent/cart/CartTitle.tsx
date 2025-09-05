type TCartTitleProps={
    first:string;
    last:string;
}
function CartTitle({first,last}:TCartTitleProps) {
  return (
     <h2 className="mt-12 text-3xl - relative w-fit italic uppercase ">
        <span className=" text-[#707070]">{first}</span>{" "}
        <span className="text-[#171717] font-medium">{last}</span>
        <div className="h-1 w-22 absolute top-5 -right-24 bg-c-secondary rounded"></div>
      </h2>
  )
}

export default CartTitle