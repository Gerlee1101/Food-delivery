import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

import { ChevronRight, MapPin, ShoppingCart, User } from "lucide-react";

export const ClientHeader = () => {
  return (
    <div className="bg-black w-screen h-full pb-3 pl-22 pr-22 pt-3">
      <div className="flex  items-center justify-between">
        <div className="flex">
          <img src="/Screenshot 2024-12-17 at 18.02.18 1 (Traced).png" />

          <div className="pl-3">
            <span className="text-white font-semibold text-[20px]">
              Nom<span className="text-red-500 ">Nom </span>
            </span>
            <p className="text-white font-normal text-[12px]">
              Swift delivery{" "}
            </p>
          </div>
        </div>
        <div className="flex gap-3 z-20">
          <div>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="rounded-full bg-white">
                  <MapPin className=" text-red-500" />
                  <span className="text-red-500">Delivery address:</span>
                  <span className="text/text-muted-foreground">
                    Add Location
                  </span>
                  <ChevronRight />
                </Button>
              </PopoverTrigger>

              <PopoverContent className="w-80 ">
                <div className="grid gap-4">
                  <div className="space-y-2">
                    <h4 className="leading-none font-medium"> Please write your delivery address.</h4>
                    <p className="text-muted-foreground text-sm">
                      Please write your delivery address.
                    </p>
                  </div>
                  <div className="grid gap-2">
                  
                  </div>
                </div>
              </PopoverContent>
            </Popover>
            1
          </div>
          <div className="bg-white p-1.5 rounded-full">
            <ShoppingCart />
          </div>
          <div className="bg-red-500 p-1.5 rounded-full">
            <User />
          </div>
        </div>
      </div>≈
    </div>
  );
};
