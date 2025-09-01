import Title from "../../common/Title";
import Container from "../../common/Container";
import { collections } from "@/constant/myConstant";
import CollectionItem from "./CollectionItem";
import { Button } from "@/components/ui/button";
function Collection() {
  return (
    <Container>
      <Title first="Latest" last="Collections" />
      <div className="grid grid-cols-2 justify-center   gap-x-4 gap-y-8 mt-12 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 ">
       {collections.map((item,ind)=><CollectionItem key={ind} collection={item}/>)}
      </div>
      <div className="mt-14 text-center">
      <Button className="cursor-pointer px-8 py-4 font-medium bg-c-secondary hover:bg-c-secondary text-lg">Show More</Button>
      </div>
    </Container>
  );
}

export default Collection;
