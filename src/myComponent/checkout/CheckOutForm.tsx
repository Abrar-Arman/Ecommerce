import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

function CheckOutForm() {
  return (
    <form className="mt-8 px-8 md:pl-10 flex flex-col items-start gap-6">
      <div className="checkout__form__grid ">
        <div className="checkout__form">
          <label className="checkout__form__label">First Name</label>
          <Input className="checkout__form__input" />
        </div>
        <div className="checkout__form">
          <label className="checkout__form__label">Last Name</label>
          <Input className="checkout__form__input" />
        </div>
      </div>
      <div className="checkout__form__grid">
        <div className="checkout__form">
          <label className="checkout__form__label">Email Address</label>
          <Input type="email" className="checkout__form__input" />
        </div>
        <div className="checkout__form">
          <label className="checkout__form__label">City</label>
          <Input className="checkout__form__input" />
        </div>
      </div>
      <div className="w-full">
        <div className="checkout__form ">
          <label className="checkout__form__label">Phone</label>
          <Input type="tel" className="checkout__form__input w-full md:w-1/2" />
        </div>
      </div>
      <div>
      <Button variant='myButton' className="px-8 py-2 md:px-12 md:py-6 hover:scale-[1.05] transtion duration-300" >Place Your Order</Button>
      </div>
    </form>
  );
}

export default CheckOutForm;
