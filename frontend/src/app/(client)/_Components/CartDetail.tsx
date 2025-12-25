import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { ShoppingCart } from "lucide-react"
import { FoodDetail } from "./FoodDetail"
import { foods } from "./FoodSection"

export const CartDetail=()=>{
return(
    <>
    <div className=" bg-white p-1.5 rounded-full">
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
</div>
    </>
)
}