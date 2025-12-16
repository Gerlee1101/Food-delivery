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
import { ChevronLeft } from "lucide-react";
import { useForm } from "react-hook-form";
const formSchema = z.object({
  email: z.email({
    error: (issue) =>
      issue.input === undefined
        ? "Email field is required"
        : "Invalid email. Use a format like example@email.com",
  }),
});
export default function Login() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
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
            name="email"
            render={({ field }) => (
              <FormItem>
                <Button
                  variant="default"
                  className="w-10 bg-background border border-gray-200 text-black hover:bg-accent mb-5"
                >
                  <ChevronLeft />
                </Button>
                <FormLabel className="font-semibold text-4xl">
                  Create a strong password
                </FormLabel>
                <FormDescription className="text-2xl">
                  Create a strong password with letters, numbers.
                </FormDescription>
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
