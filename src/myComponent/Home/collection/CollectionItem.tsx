type TCollectionItemProps = {
  collection: {
    img: string;
    title: string;
    price: number;
  };
};
function CollectionItem({ collection }: TCollectionItemProps) {
  return <div className="flex flex-col gap-3 ">
     <img src={collection.img} alt={collection.title} className="cursor-pointer" />
     <h3 className="font-medium text-sm">{collection.title}</h3>
     <span className="text-base">{collection.price}$</span>
  </div>;
}

export default CollectionItem;
