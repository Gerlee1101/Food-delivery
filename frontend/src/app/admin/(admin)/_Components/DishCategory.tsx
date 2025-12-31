import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const foodData: Foods[] = [
  {
    category: "All dishes",
    number: 112,
  },
  {
    category: "Appetizers",
    number: 6,
  },
  {
    category: "Salads",
    number: 3,
  },
  {
    category: "Pizzas",
    number: 5,
  },
  {
    category: "Lunch favorites",
    number: 5,
  },
  {
    category: "Main dishes",
    number: 5,
  },
  {
    category: "Fish & Sea foods",
    number: 6,
  },
  {
    category: "Brunch",
    number: 5,
  },
  {
    category: "Side dish ",
    number: 6,
  },
  {
    category: "Desserts",
    number: 5,
  },
  {
    category: "Beverages",
    number: 5,
  },
];
export type Foods = {
  // id: string;
  category: string;
  number: number;
};
export const DishCategory = () => {
  return (
    <div className="w-full pt-16 ">
      <div className="w-full rounded-md  bg-white p-6">
        <h6 className="font-semibold pb-6">Dishes category</h6>
        <div className="w-full flex flex-wrap gap-5 ">
          {foodData.map((el, i) => (
            <Button
              key={el.category + i}
              variant="outline"
              className="rounded-2xl"
            >
              {el.category} <Badge>{el.number}</Badge>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};
