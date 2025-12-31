"use client";

import { useState } from "react";

import { ChevronDown, ChevronsUpDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { DatePicker } from "../_Components/DatePicker";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";

import { PagePagination } from "../_Components/PagePagination";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
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

const data: Payment[] = [
  {
    id: "m5gr84i9",
    total: 316,
    deliveryState: "pending",
    customer: "ken99@example.com",
    number: 1,
    date: "2024/12/12",
    foods: ["Pizza", "Burger", "Cola"],
    deliveryAddress:
      "adkjfa;jg;gj;d gja;d f8590347 238049 7t3984ty8395tj sd;fksldfks",
  },
  {
    id: "3u1reuv4",
    total: 242,
    deliveryState: "pending",
    customer: "Abe45@example.com",
    number: 2,
    date: "2024/12/12",
    foods: ["Pizza", "Cola"],
    deliveryAddress: "jf;ksruwpourwopeur",
  },
  {
    id: "derv1ws0",
    total: 837,
    deliveryState: "delivered",
    customer: "Monserrat44@example.com",
    number: 3,
    date: "2024/12/12",
    foods: ["Cola"],
    deliveryAddress: "gtriw-polnfmbn@@@poiuhdf",
  },
  {
    id: "5kma53ae",
    total: 874,
    deliveryState: "delivered",
    customer: "Silas22@example.com",
    number: 4,
    date: "2024/12/12",
    foods: ["Pizza", "Burger"],
    deliveryAddress: "kfja-wmv12324iw",
  },
  {
    id: "bhqecj4p",
    total: 721,
    deliveryState: "canceled",
    customer: "carmella@example.com",
    number: 5,
    date: "2024/12/12",
    foods: ["huushuur"],
    deliveryAddress: "lgkjel132u8294823",
  },
  {
    id: "bhqecj4p",
    total: 721,
    deliveryState: "canceled",
    customer: "carmella@example.com",
    number: 5,
    date: "2024/12/12",
    foods: ["huushuur"],
    deliveryAddress: "lgkjel132u8294823",
  },
  {
    id: "bhqecj4p",
    total: 721,
    deliveryState: "canceled",
    customer: "carmella@example.com",
    number: 5,
    date: "2024/12/12",
    foods: ["huushuur"],
    deliveryAddress: "lgkjel132u8294823",
  },
  {
    id: "bhqecj4p",
    total: 721,
    deliveryState: "canceled",
    customer: "carmella@example.com",
    number: 5,
    date: "2024/12/12",
    foods: ["huushuur"],
    deliveryAddress: "lgkjel132u8294823",
  },
  {
    id: "bhqecj4p",
    total: 721,
    deliveryState: "canceled",
    customer: "carmella@example.com",
    number: 5,
    date: "2024/12/12",
    foods: ["huushuur"],
    deliveryAddress: "lgkjel132u8294823",
  },
];

export type Payment = {
  id: string;
  total: number;
  deliveryState: "delivered" | "pending" | "canceled";
  customer: string;
  number: number;
  foods: string[];
  date: string;
  deliveryAddress: string;
};

export default function Order(props: Payment) {
  const ITEMS_PER_PAGE = 3;

  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;

  const currentData = data.slice(startIndex, endIndex);
  const [orders, setOrders] = useState<Payment[]>(data);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [selectedState, setSelectedState] = useState<
    "pending" | "delivered" | "canceled" | null
  >(null);

  return (
    <div className="w-full pt-6 pl-6 pb-8 pr-16 bg-gray-100 relative">
      <img
        src="/"
        className="w-7.5 h-7.5 rounded-full bg-amber-100 absolute right-20 "
      ></img>

      <div className="pt-16 ">
        <div className="overflow-hidden rounded-md border bg-white">
          <div className="flex justify-between items-center pl-4 pr-4">
            <div>
              <div className="text-xl">Orders</div>
              <div>{data.length} items</div>
            </div>
            <div className="flex gap-5">
              <DatePicker />
              <Dialog>
                <form>
                  <DialogTrigger asChild>
                    <Button
                      variant="outline"
                      className="rounded-full bg-black text-white border-none"
                    >
                      Change delivery state
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-106.25">
                    <DialogHeader>
                      <DialogTitle>Change delivery state</DialogTitle>
                    </DialogHeader>
                    <div className="flex justify-between">
                      <Button variant="outline" className="rounded-2xl">
                        Delivered
                      </Button>
                      <Button variant="outline" className="rounded-2xl">
                        Pending
                      </Button>
                      <Button variant="outline" className="rounded-2xl">
                        Cancelled
                      </Button>
                    </div>
                    {/* <div className="flex justify-between">
                      <Button onClick={() => setSelectedState("delivered")}>
                        Delivered
                      </Button>
                      <Button onClick={() => setSelectedState("pending")}>
                        Pending
                      </Button>
                      <Button onClick={() => setSelectedState("canceled")}>
                        Cancelled
                      </Button>
                    </div> */}

                    <DialogFooter>
                      <Button type="submit" className="w-full rounded-2xl">
                        Save
                      </Button>
                      {/* <Button
                        type="button"
                        className="w-full rounded-2xl"
                        onClick={() => {
                          if (!selectedState) return;

                          setOrders((prev) =>
                            prev.map((order) =>
                              selectedIds.includes(order.id)
                                ? { ...order, deliveryState: selectedState }
                                : order
                            )
                          );

                          setSelectedIds([]);
                          setSelectedState(null);
                        }}
                      >
                        Save
                      </Button> */}
                    </DialogFooter>
                  </DialogContent>
                </form>
              </Dialog>
            </div>
          </div>
          <Separator />
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>
                  <Checkbox />
                  {/* <Checkbox
                    checked={selectedIds.length === orders.length}
                    onCheckedChange={(checked) => {
                      if (checked) {
                        setSelectedIds(orders.map((o) => o.id));
                      } else {
                        setSelectedIds([]);
                      }
                    }}
                  /> */}
                </TableHead>
                <TableHead>№</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Food</TableHead>
                <TableHead className="flex items-center ">
                  Date <ChevronsUpDown size={16} />
                </TableHead>
                <TableHead>Total</TableHead>
                <TableHead>Delivery Address</TableHead>
                <TableHead className="flex items-center">
                  Delivery State <ChevronsUpDown size={16} />
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.map((el, index) => (
                <TableRow key={el.id + index}>
                  <TableCell>
                    <Checkbox />
                    {/* <Checkbox
                      checked={selectedIds.includes(el.id)}
                      onCheckedChange={(checked) => {
                        if (checked) {
                          setSelectedIds([...selectedIds, el.id]);
                        } else {
                          setSelectedIds(
                            selectedIds.filter((id) => id !== el.id)
                          );
                        }
                      }}
                    /> */}
                  </TableCell>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{el.customer}</TableCell>
                  <TableCell>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="ghost"
                          className="bg-none hover:bg-none dark:hover:bg-none"
                        >
                          {el.foods.length} foods <ChevronDown />
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-80">
                        <div></div>
                      </PopoverContent>
                    </Popover>
                  </TableCell>
                  <TableCell>{el.date}</TableCell>
                  <TableCell>${el.total.toFixed(2)}</TableCell>
                  <TableCell className="max-w-62.5 truncate">
                    {el.deliveryAddress}
                  </TableCell>
                  <TableCell>
                    <Select>
                      <SelectTrigger className="w-35 rounded-full">
                        <SelectValue placeholder="Pending" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="pending">Pending</SelectItem>
                        <SelectItem value="delivered">Delivered</SelectItem>
                        <SelectItem value="canceled">Canceled</SelectItem>
                      </SelectContent>
                    </Select>
                  </TableCell>
                  {/* <TableCell>
                    <Select value={el.deliveryState}>
                      <SelectTrigger className="w-35 rounded-full">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="pending">Pending</SelectItem>
                        <SelectItem value="delivered">Delivered</SelectItem>
                        <SelectItem value="canceled">Canceled</SelectItem>
                      </SelectContent>
                    </Select>
                  </TableCell> */}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <div className="flex items-center justify-end space-x-2 py-4">
          <div className="text-muted-foreground flex-1 text-sm"></div>
          <div className="space-x-2">
            <PagePagination
              totalPages={totalPages}
              currentPage={currentPage}
              onPageChange={setCurrentPage}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
