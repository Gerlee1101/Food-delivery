"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";

import { useContext } from "react";
import { StepContext } from "@/app/signUp/page";

import { AsteriskIcon, ChevronLeft, ImageIcon } from "lucide-react";
import { LoginHeader } from "@/app/_Components/auth/LoginHeader";
import Image from "next/image";
import { Textarea } from "@/components/ui/textarea";
const formSchema = z.object({
  foodname: z.string().min(2).max(50),
  foodprice: z.number(),
  image: z.file("Invalid file.").min(8).max(8),
  ingredients: z.string().min(2).max(200),
});

export function DishesInfo() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      foodname: "",
      foodprice: undefined,
      image: undefined,
    },
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div className="w-full">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 ">
          <div className="flex justify-between mt-5">
            <FormField
              control={form.control}
              name="foodname"
              render={({ field }) => (
                <FormItem>
                  {/* <LoginHeader
                  title={`Log in  `}
                  text={`Log in to enjoy your favorite dishes.`}
                /> */}
                  <div>
                    <h1 className="font-semibold"> Food name </h1>
                    <FormControl className="mt-2 pt-6 pb-6 pr-12  ">
                      <Input placeholder="Type food name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="foodprice"
              render={({ field }) => (
                <FormItem>
                  <div>
                    <h1 className="font-semibold">Food price</h1>
                    <FormControl className="mt-2 pt-6 pb-6 pr-12">
                      <Input placeholder="Enter price..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="ingredients"
            render={({ field }) => (
              <FormItem>
                <div>
                  <h1 className="font-semibold">Ingredients</h1>
                  <FormControl className="mt-2 pb-6 wrap-anywhere ">
                    <Textarea placeholder="List ingredients..." {...field} />
                  </FormControl>
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="image"
            render={({ field }) => (
              <FormItem>
                <div className="flex pb-2 pt-2">
                  <FormLabel>Food image</FormLabel>
                  <AsteriskIcon size={10} className="text-red-500" />
                </div>
                <FormControl>
                  <div className="relative">
                    <Input
                      placeholder="placeholder"
                      type="file"
                      className="w-full h-full pr-6 pl-6 top-0 left-0 absolute opacity-1 z-10 cursor-pointer "
                      onChange={(e) => {
                        const files = e.target.files;
                        if (!files) return;
                        const [file] = files;
                        field.onChange(file);
                      }}
                    />

                    {field.value && (
                      <div className="absolute w-full h-full top-0 left-0 rounded-xl overflow-hidden">
                        <Image
                          src={URL.createObjectURL(field.value)}
                          alt="Food image"
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
                    <div className="w-full h-40 rounded-xl flex flex-col justify-center items-center bg-gray-100">
                      <div className="gap-2 flex justify-center items-center rounded-full h-10 w-10 border border-amber-50  bg-gray-50">
                        <ImageIcon className="text-gray-500" />
                      </div>
                      <div>Choose a file or drag & drop it here</div>
                    </div>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex justify-end">
            <Button
              variant="default"
              type="submit"
              className=" mt-6 pt-6 pb-6 text-[16px]"
            >
              Add Dish
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
