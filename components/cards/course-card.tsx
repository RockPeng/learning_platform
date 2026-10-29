import { BarChart3, Clock3, Layers3 } from "lucide-react";
import { Card } from "@/components/ui/card";

type CourseCardProps = {
  title: string;
  description: string;
  level: string;
  duration: string;
  modules: number;
};

export function CourseCard({
  title,
  description,
  level,
  duration,
  modules,
}: CourseCardProps) {
  return (
    <Card className="vertex-learning-card vertex-course-card">
      <div className="vertex-course-card__identity">
        <div className="vertex-course-card__tile" aria-hidden="true">
          N
        </div>
        <div>
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
