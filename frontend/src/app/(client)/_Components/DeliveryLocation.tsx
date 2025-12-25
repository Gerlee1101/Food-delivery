import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { ChevronRight, MapPin } from "lucide-react";
// type DeliveryLocationProps = {
//   title: string;
//   className: string;
// };
export const DeliveryLocation = () => {
  return (
    <>
      <DialogHeader>
        <DialogTitle className="font-semibold text-[24px]">
          Delivery location
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
    </>
  );
};
