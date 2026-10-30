import type { ReactNode } from "react";
import { BarChart3, Clock3, Layers3 } from "lucide-react";
import { Card } from "@/components/ui/card";

type CourseCardProps = {
  title: string;
  description: string;
  level: string;
  duration: string;
  modules: number;
  logo?: ReactNode;
  layout?: "row" | "stacked";
};

export function CourseCard({
  title,
  description,
  level,
  duration,
  modules,
  logo,
  layout = "row",
}: CourseCardProps) {
  return (
    <Card
      className={`vertex-learning-card vertex-course-card vertex-course-card--${layout}`}
    >
      <div className="vertex-course-card__identity">
        <div className="vertex-course-card__tile" aria-hidden="true">
          {logo ?? "N"}
        </div>
        <div className="vertex-course-card__copy">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
      <div className="vertex-card-meta">
        <span>
          <BarChart3 size={14} aria-hidden="true" />
          {level}
        </span>
        <span>
          <Clock3 size={14} aria-hidden="true" />
          {duration}
        </span>
        <span>
          <Layers3 size={14} aria-hidden="true" />
          {modules} modules
        </span>
      </div>
    </Card>
  );
}
