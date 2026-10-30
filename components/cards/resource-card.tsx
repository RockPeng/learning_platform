import { ExternalLink, FileText } from "lucide-react";
import { Card } from "@/components/ui/card";

type ResourceCardProps = {
  title: string;
  description: string;
  fileInfo: string;
  href?: string;
};

export function ResourceCard({
  title,
  description,
  fileInfo,
  href = "#",
}: ResourceCardProps) {
  return (
    <Card className="vertex-learning-card vertex-resource-card">
      <div className="vertex-resource-card__heading">
        <FileText size={20} aria-hidden="true" />
        <div>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
      <div className="vertex-learning-card__footer">
        <span>{fileInfo}</span>
        <a
          className="vertex-card-link vertex-card-link--icon-only"
          href={href}
          aria-label={`Open ${title}`}
        >
          <ExternalLink size={14} aria-hidden="true" />
        </a>
      </div>
    </Card>
  );
}
