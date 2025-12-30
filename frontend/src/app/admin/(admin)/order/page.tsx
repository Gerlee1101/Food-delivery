"use client";

import { useState } from "react";

import { ChevronsUpDown } from "lucide-react";

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
  return (
    <div className="w-full pt-6 pl-6 pb-8 pr-16 bg-amber-800">
      <img src="/" className="w-7.5 h-7.5 rounded-full bg-amber-100  "></img>

      <div className="pt-6">
        <div className="overflow-hidden rounded-md border">
          <div className="flex justify-between items-center pl-4 pr-4">
            <div>
              <div className="text-xl">Orders</div>
              <div>{data.length} items</div>
            </div>
            <div className="flex gap-5">
              <DatePicker />

              <Button
                variant="outline"
                className="rounded-full bg-black text-white border-none"
              >
                Change delivery state
              </Button>
            </div>
          </div>
          <Separator />
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>
                  <Checkbox />
                </TableHead>
                <TableHead>№</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Food</TableHead>
                <TableHead className="flex items-center ">
                  Date <ChevronsUpDown />
                </TableHead>
                <TableHead>Total</TableHead>
                <TableHead>Delivery Address</TableHead>
                <TableHead className="flex items-center">
                  Delivery State <ChevronsUpDown />
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.slice(0, 3).map((el, index) => (
                <TableRow key={el.id + index}>
                  <TableCell>
                    <Checkbox />
                  </TableCell>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{el.customer}</TableCell>
                  <TableCell>{el.foods.length} foods</TableCell>
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
