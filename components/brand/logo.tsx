import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  markOnly?: boolean;
  size?: "sm" | "md";
};

export function Logo({ className, markOnly = false, size = "md" }: LogoProps) {
  return (
    <span
      className={cn("vertex-logo", `vertex-logo--${size}`, className)}
      aria-label={markOnly ? "Vertex" : undefined}
    >
      <svg
        className="vertex-logo__mark"
        viewBox="0 0 32 32"
        fill="none"
        aria-hidden="true"
      >
        <path d="M2.5 4h27L16 28 2.5 4Z" fill="currentColor" />
        <path d="M11 10h10l-5 9-5-9Z" fill="white" />
      </svg>
      {!markOnly && <span className="vertex-logo__word">Vertex</span>}
    </span>
  );
}
