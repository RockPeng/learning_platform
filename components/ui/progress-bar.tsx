import { cn } from "@/lib/utils";

type ProgressBarProps = {
  value: number;
  label?: string;
  className?: string;
};

export function ProgressBar({ value, label, className }: ProgressBarProps) {
  const progress = Math.min(100, Math.max(0, value));

  return (
    <div className={cn("vertex-progress", className)}>
      <div
        className="vertex-progress__track"
        role="progressbar"
        aria-label={label ?? "Course progress"}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={progress}
      >
        <span
          className="vertex-progress__fill"
          style={{ width: `${progress}%` }}
        />
      </div>
      <span className="vertex-progress__label">
        <strong>{progress}%</strong> complete
      </span>
    </div>
  );
}
