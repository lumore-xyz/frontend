"use client";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import * as React from "react";

interface DateFieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const DateField = ({
  label,
  value,
  onChange,
  placeholder = "Pick a date",
}: DateFieldProps) => {
  console.log("DateField rendered with value:", value);

  const [date, setDate] = React.useState<Date | undefined>(() => {
    console.log("Initializing date state with value:", value);
    return value ? new Date(value) : undefined;
  });

  // Update local state when value prop changes
  React.useEffect(() => {
    console.log("Value prop changed:", value);
    if (value) {
      const newDate = new Date(value);
      console.log("Setting new date:", newDate);
      setDate(newDate);
    }
  }, [value]);

  const handleDateSelect = React.useCallback(
    (selectedDate: Date | undefined) => {
      console.log("handleDateSelect called with:", selectedDate);
      if (selectedDate) {
        const formattedDate = format(selectedDate, "yyyy-MM-dd");
        console.log("Formatted date:", formattedDate);
        onChange(formattedDate);
        setDate(selectedDate);
      }
    },
    [onChange]
  );

  console.log("Current date state:", date);

  const minAgeDate = React.useMemo(() => {
    const date = new Date();
    date.setFullYear(date.getFullYear() - 18);
    return date;
  }, []);

  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium">{label}</label>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className={cn(
              "w-full justify-start text-left font-normal",
              !date && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date instanceof Date && !isNaN(date.getTime()) ? (
              format(date, "PPP")
            ) : (
              <span>{placeholder}</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-full  p-0" align="start">
          <Calendar
            mode="single"
            selected={date}
            onSelect={handleDateSelect}
            initialFocus
            disabled={(date) => {
              const isDisabled = date > minAgeDate;
              console.log("Date disabled check:", {
                date,
                minAgeDate,
                isDisabled,
              });
              return isDisabled;
            }}
            defaultMonth={new Date()}
            fromYear={1970}
            toYear={new Date().getFullYear() - 18}
            captionLayout="dropdown"
            // disableNavigation={true}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default DateField;
