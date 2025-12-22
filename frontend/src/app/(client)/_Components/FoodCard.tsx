import { FoodImage } from "./FoodImage";

type FoodCardProps = {
  id: number;
  //   backdrop_path: string;
  title: string;
  price: number;
  name: string;
  className?: string;
  product_description: string;
};

export const FoodCard = ({
  id,
  //   backdrop_path,
  name,
  title,
  price,
  product_description,
}: FoodCardProps) => {
  return (
    <>
      <div className="bg-white rounded-lg  pt-5 pl-5 pr-5 pb-5">
        <div
          key={id}
          className="rounded-lg overflow-hidden flex flex-col items-center"
        >
          <FoodImage title={title} className="h-52.5 rounded-lg" />
          <div className="w-full p-3  h-27 ">
            <div className="flex gap-1 items-center justify-between">
              <p className="text-[24px] font-semibold text-red-500 pb-1">
                {name}
              </p>
              ${price}
            </div>
            <p className="text-lg">{product_description}</p>
          </div>
        </div>
      </div>
    </>
  );
};
