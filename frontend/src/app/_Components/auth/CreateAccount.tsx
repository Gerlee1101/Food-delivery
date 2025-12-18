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
import { LoginHeader } from "./LoginHeader";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { StepContext } from "@/app/signUp/page";
import { ChevronLeft } from "lucide-react";
const formSchema = z.object({
  email: z.email({
    error: (issue) =>
      issue.input === undefined
        ? "Email field is required"
        : "Invalid email. Use a format like example@email.com",
  }),
});

export default function CreateAccount() {
  const { data, handleNext, setData, handleBack } = useContext(StepContext);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: data.email,
    },
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    setData((prev) => ({
      ...prev,
      email: values.email,
    }));
    handleNext();
    handleBack();
  }

  return (
    <div className="w-[40%] pl-25">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <Button
                  variant="default"
                  type="submit"
                  className="w-10 bg-background border border-gray-200 text-black hover:bg-accent mb-8"
                  onClick={handleBack}
                >
                  <ChevronLeft />
                </Button>
                <LoginHeader
                  title={`Create your account `}
                  text={`Sign up to explore your favorite dishes.`}
                />
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
            onClick={handleNext}
          >
            Let's Go
          </Button>
        </form>
      </Form>
    </div>
  );
}
