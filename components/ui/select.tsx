import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

type SelectOption = {
  label: string;
  value: string;
};

type SelectProps = {
  label?: string;
  options: SelectOption[];
  defaultValue?: string;
  className?: string;
};

export function Select({
  label = "Sort by",
  options,
  defaultValue,
  className,
}: SelectProps) {
  return (
    <label className={cn("vertex-select", className)}>
      <span className="sr-only">{label}</span>
      <select defaultValue={defaultValue ?? options[0]?.value}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <ChevronDown size={16} aria-hidden="true" />
    </label>
  );
}
