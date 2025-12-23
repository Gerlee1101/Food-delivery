"use client";
import { Button } from "@/components/ui/button";
import { FoodImage } from "./FoodImage";
import { Check, Plus } from "lucide-react";
import { useEffect, useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
type Status = "idle" | "added" | "readded";
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
  const [checked, setChecked] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (open) {
      const timer = setTimeout(() => {
        setOpen(false);
      }, 2500);

      return () => clearTimeout(timer);
    }
  }, [open]);

  const handleClick = () => {
    setChecked((prev) => !prev);
    setOpen(true);
  };
  return (
    <>
      <div className="bg-white rounded-lg  pt-5 pl-5 pr-5 pb-5 relative">
        <div
          key={id}
          className="relative rounded-lg overflow-hidden flex flex-col items-center"
        >
          <FoodImage title={title} className=" w-full h-100  rounded-lg " />
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                aria-label="Go Back"
                className="absolute top-80 right-10 rounded-full"
                onClick={handleClick}
              >
                {checked ? <Check /> : <Plus />}
              </Button>
            </PopoverTrigger>
            {checked ? (
              <PopoverContent className="w-80">
                <div className="grid gap-4">
                  <div className="space-y-2">
                    <h4 className="leading-none font-medium">
                      Food is being added to the cart!
                    </h4>
                  </div>
                </div>
              </PopoverContent>
            ) : (
              <PopoverContent className="w-80">
                <div className="grid gap-4">
                  <div className="space-y-2">
                    <h4 className="leading-none font-medium">
                      Food is being deleted to the cart!
                    </h4>
                  </div>
                </div>
              </PopoverContent>
            )}
          </Popover>

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
