import { AddFood } from "./AddFood";
import { Food } from "./Food";

export const FoodCategory = () => {
  return (
    <div className="w-full ">
      <div className="w-full pt-16 ">
        <div className="w-full rounded-md  bg-white p-6 flex  gap-5">
          <AddFood />
          <Food />
        </div>
      </div>
    </div>
  );
};
