import Container from "../common/Container"
import {feature} from '../../constant/myConstant.ts'
function Features() {
  return (
    <Container>
        <h2 className="text-[#343434] text-3xl pl-3">Why Choose Us</h2>
        <ul className="lg:border lg:border-[#ABABAB] gap-y-6 justify-items-center lg:justify-items-start mt-8 grid lg:grid-cols-3">
           {feature.map((f,ind)=>(
            <li key={ind} className="p-8 lg:border-r w-[80%] lg:w-full shadow lg:shadow-transparent  lg:border-[#ABABAB] text-lg cursor-pointer">
              <h3 className="text-[#2A2A2A] mb-5 font-semibold hover">{f.name} :</h3>
              <p className="text-#6D6D6D]">{f.description}</p>
            </li>
           ))}
        </ul>
    </Container>
  )
}

export default Features