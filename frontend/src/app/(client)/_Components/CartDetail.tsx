import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ShoppingCart } from "lucide-react";
import { FoodDetail } from "./FoodDetail";
import { foods } from "./FoodSection";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DeliveryLocation } from "./DeliveryLocation";
import { Textarea } from "@/components/ui/textarea";

export const CartDetail = () => {
  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            className="g-white rounded-full  flex items-center"
          >
            <ShoppingCart />
          </Button>
        </SheetTrigger>
        <SheetContent className="bg-black border-none ">
          <SheetHeader>
            <SheetTitle className="font-semibold flex gap-2 text-white">
              <ShoppingCart /> Order detail
            </SheetTitle>
          </SheetHeader>
          <div className="flex w-full max-w-sm flex-col gap-6">
            <Tabs defaultValue="cart" className="pl-4 pr-4">
              <TabsList className="w-full rounded-full">
                <TabsTrigger
                  value="cart"
                  className="rounded-full data-[state=active]:bg-red-500"
                >
                  Cart
                </TabsTrigger>
                <TabsTrigger
                  value="order"
                  className="rounded-full  data-[state=active]:bg-red-500"
                >
                  Order
                </TabsTrigger>
              </TabsList>
              <TabsContent value="cart" className="flex flex-col gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-gray-400 font-semibold text-[20px]">
                      My cart
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="grid gap-6">
                    {/* <CardFooter>
                    <Button>Save changes</Button>
                  </CardFooter> */}
                    <div className="flex flex-col gap-2">
                      <h4 className="font-semibold text-gray-400 text-[20px]">
                        Delivery location
                      </h4>

                      <Textarea
                        id="name-1"
                        name="name"
                        className="text-black h-20  align-top"
                        placeholder="Please share your complete address"
                      />
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-gray-400 font-semibold text-[20px]">
                      Payment info
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="grid gap-6"></CardContent>
                  <CardFooter>
                    <Button className="w-full bg-red-500 rounded-full">
                      Checkout
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>
              <TabsContent value="order">
                <Card>
                  <CardHeader>
                    <CardTitle>Order history</CardTitle>
                    {/* <CardDescription>
                      Change your password here. After saving, you&apos;ll be
                      logged out.
                    </CardDescription> */}
                  </CardHeader>
                  <CardContent className="grid gap-6">
                    {/* <div className="grid gap-3">
                      <Label htmlFor="tabs-demo-current">
                        Current password
                      </Label>
                      <Input id="tabs-demo-current" type="password" />
                    </div>
                    <div className="grid gap-3">
                      <Label htmlFor="tabs-demo-new">New password</Label>
                      <Input id="tabs-demo-new" type="password" />
                    </div> */}
                  </CardContent>
                  <CardFooter>
                    {/* <Button>Save password</Button> */}
                  </CardFooter>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </SheetContent>
      </Sheet>

      {/* <div className=" bg-white p-1.5 rounded-full">
    <Dialog>
  <DialogTrigger className="flex items-center"><ShoppingCart/></DialogTrigger>
  <DialogContent className="bg-foreground border-none">
    <DialogHeader>
      <DialogTitle className="flex items-center gap-2 text-white pb-5"><ShoppingCart/>Order detail</DialogTitle>
      <div className="flex flex-col gap-5">
      <div className="grid grid-cols-2 bg-white gap-4 rounded-full p-0.5">
        <Button variant="default" className=" rounded-full bg-red-500 border-none ">Cart</Button>
      <Button variant="outline" className=" rounded-full border-none">Order</Button></div>
      <Card>
        <CardHeader><CardTitle>My Cart</CardTitle></CardHeader> 
 
      </Card>
      <Card className="pr-3 pl-3"><CardHeader className="pl-1"><CardTitle >Payment info</CardTitle></CardHeader>
      <Button className=" w-full rounded-full bg-red-500 border-none">Checkout</Button></Card></div>
      
    </DialogHeader>
  </DialogContent>
</Dialog>
</div> */}
    </>
  );
};
