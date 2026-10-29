import { Check, CirclePlay, LockKeyhole } from "lucide-react";
import { cn } from "@/lib/utils";

export type Status = "in-progress" | "completed" | "now-playing" | "locked";

type StatusIndicatorProps = {
  status: Status;
  className?: string;
};

const labels: Record<Status, string> = {
  "in-progress": "In Progress",
  completed: "Completed",
  "now-playing": "Now Playing",
  locked: "Locked",
};

export function StatusIndicator({ status, className }: StatusIndicatorProps) {
  const icon =
    status === "completed" ? (
      <Check size={12} aria-hidden="true" />
    ) : status === "now-playing" ? (
      <CirclePlay size={14} aria-hidden="true" />
    ) : status === "locked" ? (
      <LockKeyhole size={13} aria-hidden="true" />
    ) : (
      <span className="vertex-status__spinner" aria-hidden="true" />
    );

  return (
    <span
      className={cn("vertex-status", `vertex-status--${status}`, className)}
    >
      {icon}
      <span>{labels[status]}</span>
    </span>
  );
}
