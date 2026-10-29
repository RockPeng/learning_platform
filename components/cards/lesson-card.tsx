import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

type LessonCardProps = {
  title: string;
  description: string;
  module: string;
  href?: string;
};

export function LessonCard({
  title,
  description,
  module,
  href = "#",
}: LessonCardProps) {
  return (
    <Card className="vertex-learning-card vertex-lesson-card">
      <Badge variant="lesson" />
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="vertex-learning-card__footer">
        <span>{module}</span>
        <a className="vertex-card-link" href={href}>
          View lesson <ExternalLink size={13} aria-hidden="true" />
        </a>
      </div>
    </Card>
  );
}
