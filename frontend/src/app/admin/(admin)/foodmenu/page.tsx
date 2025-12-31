import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DishCategory } from "../_Components/DishCategory";

const FoodMenu = () => {
  return (
    <div className="w-screen pt-6 pl-6 pb-8 pr-16 bg-gray-100 relative">
      <img
        src="/"
        className="w-7.5 h-7.5 rounded-full bg-amber-100 absolute right-20 "
      ></img>

      <DishCategory />
    </div>
  );
};

export default FoodMenu;
