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
import { useContext } from "react";
import { StepContext } from "@/app/signUp/page";
import Password from "./Password";
import { ChevronLeft } from "lucide-react";
const formSchema = z.object({
  email: z.email({
    error: (issue) =>
      issue.input === undefined
        ? "Email field is required"
        : "Invalid email. Use a format like example@email.com",
  }),
  password: z
    .string()
    .min(
      8,
      "It must contain uppercase and lowercase letters, numbers, and be at least 8 characters long."
    )
    .max(50)
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
      "It must contain uppercase and lowercase letters, numbers, and be at least 8 characters long."
    ),
});

export default function Login() {
  const { handleBack } = useContext(StepContext);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div className="w-[40%] pl-25">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <Button
                  variant="default"
                  type="button"
                  className="w-10 bg-background border border-gray-200 text-black hover:bg-accent mb-8"
                >
                  <ChevronLeft />
                </Button>
                <LoginHeader
                  title={`Log in  `}
                  text={`Log in to enjoy your favorite dishes.`}
                />
                <FormControl className="mt-6 pt-6 pb-6 ">
                  <Input placeholder="Enter your email address" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl className=" pt-6 pb-6 ">
                  <Input placeholder="Password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button variant="link">Forget password</Button>
          <Button
            type="submit"
            className="w-full pt-6 pb-6 text-xl bg-gray-300"
          >
            Let's Go
          </Button>
          <div className="flex gap-3 justify-center">
            <p>Don’t have an account?</p>{" "}
            <a href="#" className="underline-offset-0 text-blue-500">
              Sign up
            </a>
          </div>
        </form>
      </Form>
    </div>
  );
}
