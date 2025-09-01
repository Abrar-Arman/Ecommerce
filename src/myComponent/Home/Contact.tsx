import Container from '../common/Container'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
function Contact() {
  return (
    <Container>
        <h2 className='text-center font-medium text-3xl mb-1.5'>Subscribe now & get 20% off</h2>
        <p className='text-[#9A9A9A] font-normal text-lg mb-3 text-center'>Dicovere Our Collection</p>
        <div className='border-[#C7C7C7] flex justify-center '>
            <div className='relative'>
            <Input type="email" placeholder="Enter your email" className='px-4 py-6 text-base  w-[760px] ' />
            <Button className='absolute top-0 right-0 h-full cursor-pointer rounded-sm'>SUBSCRIBE</Button>
</div>
        </div>
    </Container>
  )
}

export default Contact