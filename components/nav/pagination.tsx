import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

type PaginationProps = {
  current: number;
  total: number;
  className?: string;
};

export function Pagination({ current, total, className }: PaginationProps) {
  const visiblePages =
    total <= 5
      ? Array.from({ length: total }, (_, index) => index + 1)
      : (current <= 2
          ? [1, 2, 3, total]
          : current >= total - 2
            ? [1, total - 2, total - 1, total]
            : [1, current - 1, current, current + 1, total]
        ).filter(
          (page, index, pages) => page <= total && pages.indexOf(page) === index,
        );

  return (
    <nav
      className={cn("vertex-pagination", className)}
      aria-label="Pagination"
    >
      <a
        href={`?page=${Math.max(1, current - 1)}`}
        aria-label="Previous page"
        aria-disabled={current <= 1}
        className={current <= 1 ? "is-disabled" : undefined}
      >
        <ChevronLeft size={16} aria-hidden="true" />
      </a>
      {visiblePages.map((page, index) => (
        <span className="vertex-pagination__item" key={page}>
          {total > 5 && index > 0 && page - visiblePages[index - 1] > 1 && (
            <span className="vertex-pagination__ellipsis" aria-hidden="true">
              …
            </span>
          )}
          <a
            href={`?page=${page}`}
            aria-current={page === current ? "page" : undefined}
            className={page === current ? "is-current" : undefined}
          >
            {page}
          </a>
        </span>
      ))}
      <a
        href={`?page=${Math.min(total, current + 1)}`}
        aria-label="Next page"
        aria-disabled={current >= total}
        className={current >= total ? "is-disabled" : undefined}
      >
        <ChevronRight size={16} aria-hidden="true" />
      </a>
    </nav>
  );
}
