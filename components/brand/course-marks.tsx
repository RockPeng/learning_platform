export type CourseMarkName = "next" | "docker" | "typescript";

type CourseMarkProps = {
  name: CourseMarkName;
};

export function CourseMark({ name }: CourseMarkProps) {
  if (name === "next") {
    return (
      <svg viewBox="0 0 56 56" className="vertex-course-mark" aria-hidden="true">
        <rect width="56" height="56" rx="8" fill="#080808" />
        <path d="M15 12h4v22.4L34.3 12h5v32h-4V18.6L18.9 44H15V12Z" fill="#fff" />
        <path d="m31 29 13 15h-5.2L28.4 32.2 31 29Z" fill="#999" />
      </svg>
    );
  }

  if (name === "docker") {
    return (
      <svg viewBox="0 0 64 56" className="vertex-course-mark" aria-hidden="true">
        <g fill="#1597dc" stroke="#111827" strokeLinejoin="round" strokeWidth="1.6">
          <path d="M9 29h42c-1.6 10-7.9 16-18.2 16H24c-7.3 0-12.5-5.3-15-16Z" />
          <path d="M17 21h7v7h-7zM26 21h7v7h-7zM35 21h7v7h-7zM26 12h7v7h-7zM35 12h7v7h-7z" />
          <path d="M51 27c3.1-4.1 6.7-4.1 9.2-2.2-1.1 3.3-4.3 5.3-8.5 5.2" />
        </g>
        <path d="M13 33h2m5 0h2m5 0h2m5 0h2m5 0h2" stroke="#fff" strokeWidth="1.4" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 56 56" className="vertex-course-mark" aria-hidden="true">
      <rect width="56" height="56" rx="8" fill="#3178c6" />
      <text
        x="28"
        y="36"
        fill="white"
        fontFamily="Arial, Helvetica, sans-serif"
        fontSize="24"
        fontWeight="700"
        textAnchor="middle"
      >
        TS
      </text>
    </svg>
  );
}
