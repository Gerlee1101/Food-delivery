"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Check } from "lucide-react";
import { useForm } from "react-hook-form";
import { LoginHeader } from "./LoginHeader";
const formSchema = z.object({
  password: z.string().min(8).max(20),
  confirmPassword:z.string().min(8).max(20),
  })
export default function Password() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      password: "",
      confirmPassword:"",
    },
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  const handleLetsGo = () => {};
  return (
    <div className="w-[40%] pl-25">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
               <LoginHeader title={`Create a strong password`} text={`Create a strong password with letters, numbers.`}/>
                <FormControl className="mt-6 pt-6 pb-6 ">
                  <Input placeholder="Enter Password" {...field} />
                  <Input placeholder="Enter Confirm Password"{...field}/>
                  <Button variant="default" >Show</Button>
                </FormControl>
<Check/>
                <FormMessage />
              </FormItem>
            )}
          />
           <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
               
                <FormControl className="mt-6 pt-6 pb-6 ">
                  <Input placeholder="Enter your email address" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="w-full pt-6 pb-6 text-xl bg-gray-300"
          >
            Let's Go
          </Button>
        </form>
      </Form>
    </div>
  );
}
