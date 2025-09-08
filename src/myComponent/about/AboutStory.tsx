import Container from '../common/Container'
import Title from '../common/Title'
import img from "../../assets/about_img.png";

function AboutStory() {
  return (
     <Container>
      <div className="mt-12">
        <Title first="About" last="Us" />
        <div className="grid grid-cols-3  gap-4 mt-8">
          <div className="col-span-3 lg:col-span-1  flex items-center">
            <img src={img} className="w-full" />
          </div>
          <div className="col-span-3 lg:col-span-2  text-justify text-[#6D6D6D] font-medium px-3 py-2 text-base flex flex-col gap-y-8 justify-center">
            <p>
              Forever was born out of a passion for innovation and a desire to
              revolutionize the way people shop online. Our journey began with a
              simple idea: to provide a platform where customers can easily
              discover, explore, and purchase a wide range of products from the
              comfort of their homes
            </p>
            <p>
              Since our inception, we've worked tirelessly to curate a diverse
              selection of high-quality products that cater to every taste and
              preference. From fashion and beauty to electronics and home
              essentials, we offer an extensive collection sourced from trusted
              brands and suppliers.
            </p>
            <p>
              Our mission at Forever is to empower customers with choice,
              convenience, and confidence. We're dedicated to providing a
              seamless shopping experience that exceeds expectations, from
              browsing and ordering to delivery and beyond.
            </p>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default AboutStory