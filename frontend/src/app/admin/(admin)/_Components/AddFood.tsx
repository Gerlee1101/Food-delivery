import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus } from "lucide-react";
import { DishesInfo } from "./DishesInfo";

export const AddFood = () => {
  return (
    <>
      <Card className="w-full max-w-sm rounded-4xl">
        <CardContent>
          <div className="flex flex-col items-center p-18 gap-5 justify-center">
            <Dialog>
              <form>
                <DialogTrigger asChild>
                  <Button
                    variant="default"
                    size={"icon-lg"}
                    className="w-12 h-12 rounded-full bg-red-500"
                  >
                    <Plus className="text-white" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="w-full">
                  <DialogHeader>
                    <DialogTitle>Add new Food</DialogTitle>
                  </DialogHeader>
                  <DishesInfo />
                </DialogContent>
              </form>
            </Dialog>
            <p className="font-medium text-[20px]">
              Add new Dish to Appetizers
            </p>
          </div>
        </CardContent>
      </Card>
    </>
  );
};
