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

export const Food = () => {
  return (
    <Card className="w-full max-w-sm rounded-4xl">
      <CardContent>
        <div className="flex flex-col items-center p-20 gap-5 justify-center">
          <Dialog>
            <form>
              <DialogTrigger asChild>
                <Button
                  variant="outline"
                  size={"icon-lg"}
                  className="w-12 h-12 rounded-full"
                >
                  <Pen color="#fb1313" strokeWidth={4} size={24} />
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-106.25">
                <DialogHeader>
                  <DialogTitle></DialogTitle>
                  <DishesInfo />
                </DialogHeader>
              </DialogContent>
            </form>
          </Dialog>
          <p className="font-medium text-[20px]">salad</p>
        </div>
      </CardContent>
    </Card>
  );
};
