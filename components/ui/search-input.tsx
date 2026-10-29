import { Search } from "lucide-react";
import { cn } from "@/lib/utils";

type SearchInputProps = {
  placeholder?: string;
  label?: string;
  className?: string;
};

export function SearchInput({
  placeholder = "Search anything...",
  label = "Search",
  className,
}: SearchInputProps) {
  return (
    <label className={cn("vertex-search", className)}>
      <span className="sr-only">{label}</span>
      <Search size={16} aria-hidden="true" />
      <input type="search" placeholder={placeholder} />
      <kbd aria-hidden="true">⌘ K</kbd>
    </label>
  );
}
