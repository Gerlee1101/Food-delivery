"use client"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { FoodImage } from "./FoodImage"
import { useState } from "react";
export type FoodCardProps = {
  id: number;
  //   backdrop_path: string;
  title: string;
  price: number;
  name: string;
  className?: string;
  product_description: string;
};
export const FoodDetail = ({
  id,
  //   backdrop_path,
  name,
  title,
  price,
  product_description,
}: FoodCardProps) => {
  
  const [open, setOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);
const increase = () => {
    setQuantity((prev) => prev + 1);
  };

  const decrease = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };
  const totalPrice = price * quantity;

return( <div className="w-full ">
      <Dialog>
        <form>
          <DialogTrigger asChild>
            <Button variant="outline" className="h-full p-0 hover:bg-white">
              <div className="bg-white rounded-lg pt-5 pl-5 pr-5 pb-5 cursor-pointer">
                <div
                  key={id}
                  className="rounded-lg overflow-hidden "
                >
                  <FoodImage
                    title={title}
                    className="w-full h-100 rounded-lg"
                  />

                  <div className="w-full p-3 h-27">
                    <div className="flex gap-1 items-center justify-between">
                      <p className="text-[24px] font-semibold text-red-500 pb-1">
                        {name}
                      </p>
                      ${price}
                    </div>
                    <p className="text-lg line-clamp-2">
                      {product_description}
                    </p>
                  </div>
                </div>
              </div>
            </Button>
          </DialogTrigger>
          <DialogContent className="min-w-2xl grid grid-cols-2">
            <FoodImage title={title} className="rounded-lg aspect-square" />
            <div className="pt-5 flex flex-col justify-between">
              <DialogHeader>
                <DialogTitle className="text-red-500 text-[30px] font-semibold">
                  {name}
                </DialogTitle>
                <DialogDescription className="text-black">
                  Fluffy pancakes stacked with fruits, cream, syrup, and
                  powdered sugar.
                </DialogDescription>
              </DialogHeader>
              <div className="flex justify-between pt-18 ">
                <div>
                  <p>Total price</p>
                  <p>${totalPrice}</p>
                </div>

                <div className="flex justify-between items-center gap-3">
                  <Button
                    variant="outline"
                    className="rounded-full h-10"
                    onClick={decrease}
                  >
                    -
                  </Button>
                  <p> {quantity} </p>
                  <Button
                    variant="outline"
                    className="rounded-full h-10"
                    onClick={increase}
                  >
                    +
                  </Button>
                </div>
              </div>
              <DialogFooter className="">
                <Button type="submit" className="w-full rounded-full">
                  Add to cart
                </Button>
              </DialogFooter>
            </div>
          </DialogContent>
        </form>
      </Dialog>
      </div>)
 } 
