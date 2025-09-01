import { Link } from 'react-router-dom'
import Container from './Container'
import Logo from './Logo'
import { Copyright, PhoneOutgoing } from 'lucide-react'
function Footer() {
  const currentYear = new Date().getFullYear();
  console.log(new Date(),'new Date()')
  return (
    <footer >
      <Container margin={false}>
        <div className='grid grid-cols-3 gap-x-4 gap-y-8 '>
          <div className='col-span-3 md:col-span-1 px-3 md:px-0'>
            <Logo />
            <p className='mt-2  text-justify'>Lorem Ipsumis simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          </div>
          <div className='text-center'>
            <h2 className='font-semibold text-[#5A5A5A] mb-2 text-xl'>COMPANY</h2>
            <nav>
              <ul className='flex flex-col gap-y-1 text-lg text-[#595959]'>
                <li>
                <Link to='/' className='hover'>Home</Link>
                </li>
                <li>
                <Link to='/' className='hover'>About us</Link>
                </li>
                <li className='hover cursor-pointer'>Delivery</li>
                <li className='hover cursor-pointer'>Privacy policy</li>
              </ul>
            </nav>
          </div>
          <div className='text-center col-span-2 md:col-span-1'>
             <h2 className='font-semibold text-[#5A5A5A] mb-2 text-xl'>GET IN TOUCH</h2>
           <span className='text-[#595959] justify-center flex items-center gap-2 text-lg'> <span ><PhoneOutgoing /></span>  +1-212-456-7890</span>
          </div>
        </div>
        <p></p>
      </Container>
      <div className='border-b-[1px] border-[#BDBDBD] my-3 '></div>
           <p className='centerFlexLayout p-1 gap-1 text-lg text-[#565656]'><Copyright /> {currentYear} My Website. All rights reserved.</p>
    </footer>
  )
}

export default Footer