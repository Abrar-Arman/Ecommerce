import CartTitle from './CartTitle'
import type {TCartItem} from '../../types/types.ts'
import { Button } from '@/components/ui/button.tsx';
type TCartSummaryProps = {
  myCart: TCartItem[];
};
function CartSummary({myCart}:TCartSummaryProps) {
  const total:number=myCart.reduce((acc,item)=>acc+(item.price * (item.quntity ?? 1)),0).toFixed(3)
  console.log(total,myCart)
  return (
    <>
    <div className='flex flex-col items-end gap-y-8  my-10 pr-10  '>
             <CartTitle first='cart' last='totals' />
          <table  >
            <tbody>
              <tr className='text[#454545] flex  items-center gap-x-10 font-medium '>
                <td className=' text-2xl font-Prata '>Totals :</td>
                <td className='text-base font-bold'>${total}</td>
              </tr>
            </tbody>
          </table>
    </div>
    <div >
      <Button size={null} className='uppercase rounded-none text-base ml-auto block font-medium cursor-pointer py-3 px-4 '>Proceed to checkout</Button>
    </div>
  </>
  )
}

export default CartSummary