import CheckOutForm from "@/myComponent/checkout/CheckOutForm";

function Checkout() {
  return (
    <section className=" mb-40">
      <header className="h-[50vh] bg-gradient-to-r from-pink-100 via-white to-blue-100 centerFlexLayout">
        <h2 className="uppercase text-4xl lg:text-5xl font-mono font-bold text-gray-800">
          CheckOut
        </h2>
      </header>
      <h2 className="text-[#343434] text-lg sm:text-2xl uppercase mt-12 pl-10">Payment Details</h2>
      <CheckOutForm />
    </section>
  );
}

export default Checkout;
