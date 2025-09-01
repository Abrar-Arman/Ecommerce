import { MoveUpRight } from "lucide-react";

type TCollectionItemProps = {
  collection: {
    img: string;
    title: string;
    price: number;
  };
};

function CollectionItem({ collection }: TCollectionItemProps) {
  return (
    <div className="flex flex-col gap-3">
      <div className="relative group cursor-pointer">
        <img
          src={collection.img}
          alt={collection.title}
          className="w-full"
        />
        <div className="absolute inset-0 bg-white/70 flex flex-col items-center justify-center text-center font-medium font-Prata opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-lg italic">
          <span>Quick View</span>
          <MoveUpRight className="text-c-secondary mt-1" />
        </div>
      </div>
      <h3 className="font-medium text-sm">{collection.title}</h3>
      <span className="text-base">{collection.price}$</span>
    </div>
  );
}

export default CollectionItem;

