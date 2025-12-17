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
import { Check, CheckCheck } from "lucide-react";
import { useForm } from "react-hook-form";
import { LoginHeader } from "./LoginHeader";
import { useContext } from "react";
import { StepContext } from "@/app/signUp/page";
const formSchema = z
  .object({
    password: z.string().min(8).max(20),
    confirmPassword: z.string().min(8).max(20),
  })
  .refine((data) => data.password === data.confirmPassword, {
    error: "Passwords do not match",
  });
export default function Password() {
  const { data, handleNext, handleBack, setData } = useContext(StepContext);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      password: data.password,
      confirmPassword: data.confirmPassword,
    },
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    setData((prev) => ({
      ...prev,
      password: values.password,
      confirmPassword: values.confirmPassword,
    }));
    console.log(values);
    handleNext;
    handleBack;
  }
  return (
    <div className="w-[40%] pl-25">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <LoginHeader
                  title={`Create a strong password`}
                  text={`Create a strong password with letters, numbers.`}
                />
                <FormControl className="mt-6 ">
                  <Input
                    placeholder="Enter Password"
                    {...field}
                    className="pt-6 pb-6"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormControl className=" pb-6 ">
                  <Input
                    placeholder="Enter confirm password"
                    {...field}
                    className="pt-6 pb-6"
                  />
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
