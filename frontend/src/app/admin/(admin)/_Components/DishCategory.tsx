"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useState } from "react";

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
const [selectedCategory, setSelectedCategory] = useState<string>("All dishes");
export const DishCategory = () => {
  return (
    <div className="w-full pt-16 ">
      <div className="w-full rounded-md  bg-white p-6">
        <h6 className="font-semibold pb-6">Dishes category</h6>
        <div className="w-full flex flex-wrap gap-5 ">
          {foodData.map((el) => {
            const isSelected = selectedCategory === el.category;

            return (
              <Button
                key={el.category}
                variant="outline"
                onClick={() => setSelectedCategory(el.category)}
                className={`
                  rounded-2xl
                  ${isSelected ? "border-red-500 text-red-500" : ""}
                `}
              >
                {el.category}
                <Badge className="ml-2">{el.number}</Badge>
              </Button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
