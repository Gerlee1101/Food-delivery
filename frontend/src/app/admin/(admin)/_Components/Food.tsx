import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Pen } from "lucide-react";
import { DishesInfo } from "./DishesInfo";
import Image from "next/image";

export const Food = () => {
  return (
    <Card className="w-full max-w-sm rounded-4xl p-5">
      <CardContent className="px-0">
        <img className="bg-amber-100 w-full h-40 rounded-2xl " src="#" />
        <div className="flex flex-col items-center relative gap-5 justify-center">
          <Dialog>
            <form>
              <DialogTrigger asChild>
                <Button
                  variant="outline"
                  size={"icon-lg"}
                  className="w-14 h-14 rounded-full absolute bottom-10 right-8"
                >
                  <Pen color="#fb1313" strokeWidth={4} size={30} />
                </Button>
              </DialogTrigger>
              <DialogContent className="w-full">
                <DialogHeader>
                  <DialogTitle>Add new Food</DialogTitle>
                  <DishesInfo />
                </DialogHeader>
              </DialogContent>
            </form>
          </Dialog>
        </div>
      </CardContent>
      <div className="flex justify-between">
        <h1 className="font-medium text-[20px] text-red-500">
          Grilled Chicken cobb salad
        </h1>
        <p>$12.99</p>
      </div>
      <p>
        Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.
      </p>
    </Card>
  );
};
