import { Clock3 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type LessonVideoCardProps = {
  title: string;
  description: string;
  lesson: string;
  timestamp: string;
  href?: string;
};

export function LessonVideoCard({
  title,
  description,
  lesson,
  timestamp,
  href = "#",
}: LessonVideoCardProps) {
  return (
    <Card className="vertex-learning-card vertex-lesson-video-card">
      <Badge variant="video" />
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="vertex-learning-card__footer">
        <span>
          {lesson}
          <span className="vertex-meta-dot">·</span>
          <Clock3 size={13} aria-hidden="true" />
          {timestamp}
        </span>
        <Button variant="text" size="md" href={href}>
          Watch from {timestamp}
        </Button>
      </div>
    </Card>
  );
}
