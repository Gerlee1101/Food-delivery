import { DishCategory } from "../_Components/DishCategory";
import { FoodCategory } from "../_Components/FoodCategory";

const FoodMenu = () => {
  return (
    <div className="w-screen pt-6 pl-6 pb-8 pr-16 bg-gray-100 relative">
      <img
        src="/"
        className="w-7.5 h-7.5 rounded-full bg-amber-100 absolute right-20 "
      ></img>

      <DishCategory />
      <FoodCategory />
    </div>
  );
};

export default FoodMenu;
