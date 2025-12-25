import { Button } from "@/components/ui/button";
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
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Textarea } from "@/components/ui/textarea";

import {
  ChevronRight,
  MapIcon,
  MapPin,
  ShoppingCart,
  User,
} from "lucide-react";
import { CartDetail } from "./CartDetail";

export const ClientHeader = () => {
  return (
    <div className="w-screen relative ">
      <div className="w-screen h-fit bg-black pb-3 pl-22 pr-22 pt-3">
        <div className="flex  items-center justify-between ">
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
          <div className="flex gap-3 z-20 justify-center items-center">
            <div>
              <Dialog>
                <form>
                  <DialogTrigger asChild>
                    <Button variant="outline" className="rounded-full">
                      <MapPin className="text-red-500" />
                      <span className="text-red-500">Delivery address:</span>
                      <span className="text/text-muted-foreground">
                        Add Location
                      </span>
                      <ChevronRight />
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="w-full flex flex-col gap-6 pt-6 pr-6 pl-6 pb-8 ">
                    <DialogHeader>
                      <DialogTitle className="font-semibold text-[24px]">
                        Please write your delivery address!
                      </DialogTitle>
                    </DialogHeader>
                    <div className="grid gap-4">
                      <div className="grid gap-3">
                        <Textarea
                          id="name-1"
                          name="name"
                          className="text-black h-20  align-top"
                          placeholder="Please share your complete address"
                        />
                      </div>
                    </div>
                    <DialogFooter className="mt-10">
                      <DialogClose asChild>
                        <Button variant="outline">Cancel</Button>
                      </DialogClose>
                      <Button type="submit">Deliver Here</Button>
                    </DialogFooter>
                  </DialogContent>
                </form>
              </Dialog>
            </div>
            
              <CartDetail/>
             
          
            <div className="bg-red-500 p-1.5 rounded-full">
              <User />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
