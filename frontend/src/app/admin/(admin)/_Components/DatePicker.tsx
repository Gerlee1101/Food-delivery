"use client";

import * as React from "react";
import { CalendarIcon } from "lucide-react";
import { DateRange } from "react-day-picker";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

function formatRange(range: DateRange | undefined) {
  if (!range?.from) return "";
  if (!range.to) {
    return range.from.toLocaleDateString("en-US", {
      month: "long",
      day: "2-digit",
      year: "numeric",
    });
  }

  return `${range.from.toLocaleDateString("en-US", {
    month: "long",
    day: "2-digit",
    year: "numeric",
  })} – ${range.to.toLocaleDateString("en-US", {
    month: "long",
    day: "2-digit",
    year: "numeric",
  })}`;
}

export function DatePicker() {
  const [open, setOpen] = React.useState(false);
  const [range, setRange] = React.useState<DateRange | undefined>({
    from: new Date("2025-06-01"),
    to: new Date("2025-06-10"),
  });

  return (
    <div className="relative w-full max-w-sm">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className="w-full justify-between rounded-full"
          >
            <CalendarIcon className="h-4 w-4 opacity-50" />
            {range?.from ? formatRange(range) : "Select date range"}
          </Button>
        </PopoverTrigger>

        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            mode="range"
            selected={range}
            onSelect={setRange}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
