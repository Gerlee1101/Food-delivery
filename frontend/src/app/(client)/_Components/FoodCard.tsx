"use client";
import { Button } from "@/components/ui/button";
import { FoodImage } from "./FoodImage";

import { useEffect, useState } from "react";

import { Dialog } from "@/components/ui/dialog";
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Check, Plus } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FoodDetail } from "./FoodDetail";

export type FoodCardProps = {
  id: number;
  //   backdrop_path: string;
  title: string;
  price: number;
  name: string;
  className?: string;
  product_description: string;
  image: string;
};

export const FoodCard = ({
  id,
  //   backdrop_path,
  name,
  title,
  image,
  price,
  product_description,
}: FoodCardProps) => {
  const [checked, setChecked] = useState(false);
  const [open, setOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);
  useEffect(() => {
    if (open) {
      const timer = setTimeout(() => {
        setOpen(false);
      }, 1000);

      return () => clearTimeout(timer);
    }
    setQuantity(1);
  }, [open]);

  const handleClick = () => {
    setChecked((prev) => !prev);
    setOpen(true);
  };
  const increase = () => {
    setQuantity((prev) => prev + 1);
  };

  const decrease = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };
  const totalPrice = price * quantity;
  return (
    <Card className="relative">
      <CardContent>
        <div className="relative">
          <img
            src={image}
            className="w-full h-96 rounded-2xl object-cover  bg-amber-600"
          />
          <Dialog>
            <form>
              <DialogTrigger asChild>
                <Button
                  variant="default"
                  size={"icon-lg"}
                  className="w-12 h-12 rounded-full bg-white border absolute bottom-8 right-5"
                >
                  <Plus color="#EF4444" strokeWidth={4} />
                </Button>
              </DialogTrigger>
              <DialogContent className="w-full">
                <DialogHeader>
                  <DialogTitle>Add new Food</DialogTitle>
                </DialogHeader>
              </DialogContent>
            </form>
          </Dialog>
        </div>
        <div className="flex justify-between items-center pt-5">
          <div className="text-red-500 font-semibold text-2xl">{name}</div>
          <div>{price}</div>
        </div>
        <div>
          <p>{product_description}</p>
        </div>
      </CardContent>
    </Card>
  );
};
