import { services } from "../../constant/myConstant";
import Container from "../common/Container";
import { Card } from "@/components/ui/card";

function Services() {
  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service, ind) => (
          <Card
            key={ind}
            className="flex flex-col items-center justify-center cursor-pointer p-6 shadow-md border rounded-2xl"
          >
            <img
              src={service.img}
              alt={service.title}
              className="w-12 h-12 object-contain mb-2"
            />
            <h3 className="text-[#373737] text-base font-semibold text-center">
              {service.title}
            </h3>

            <p className="text-[#898989] text-sm text-center mt-2">
              {service.description}
            </p>
          </Card>
        ))}
      </div>
    </Container>
  );
}

export default Services;



