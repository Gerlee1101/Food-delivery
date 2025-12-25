import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { User } from "lucide-react";
import Link from "next/link";

export const UserDetail = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" className="rounded-full">
          <User />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-20">
        <div className="flex flex-col">
          <Button asChild variant="link">
            <Link href="#" target="_blank">
              Log in
            </Link>
          </Button>
          {/* <Button variant="link"> </Button> */}

          <Button variant="link">Sign Up</Button>
        </div>
      </PopoverContent>
    </Popover>
  );
};
