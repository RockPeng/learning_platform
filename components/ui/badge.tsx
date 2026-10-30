import { cn } from "@/lib/utils";

export type BadgeVariant = "video" | "lesson" | "popular";

type BadgeProps = {
  variant: BadgeVariant;
  children?: string;
  className?: string;
};

const labels: Record<BadgeVariant, string> = {
  video: "Video",
  lesson: "Lesson",
  popular: "Popular",
};

export function Badge({ variant, children, className }: BadgeProps) {
  return (
    <span className={cn("vertex-badge", `vertex-badge--${variant}`, className)}>
      {children ?? labels[variant]}
    </span>
  );
}
