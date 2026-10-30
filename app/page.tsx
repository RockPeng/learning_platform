import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";
import { CourseCard } from "@/components/cards/course-card";
import { CourseMark, type CourseMarkName } from "@/components/brand/course-marks";
import { ChartDecoration } from "@/components/home/chart-decoration";
import { Hero } from "@/components/home/hero";
import { PageFrame } from "@/components/layout/page-frame";
import { SiteHeader } from "@/components/layout/site-header";

const courses: {
  title: string;
  description: string;
  level: string;
  duration: string;
  modules: number;
  mark: CourseMarkName;
}[] = [
  {
    title: "Next.js for Production",
    description: "Build scalable, high-performance web applications with Next.js.",
    level: "Intermediate",
    duration: "18h 24m",
    modules: 12,
    mark: "next",
  },
  {
    title: "Docker Essentials",
    description: "Containerize applications and streamline your development workflow.",
    level: "Beginner",
    duration: "10h 12m",
    modules: 8,
    mark: "docker",
  },
  {
    title: "TypeScript Deep Dive",
    description: "Go beyond the basics and write safer, more expressive code.",
    level: "Intermediate",
    duration: "14h 36m",
    modules: 10,
    mark: "typescript",
  },
];

export default function Home() {
  return (
    <PageFrame>
      <SiteHeader />
      <main>
        <Hero />
        <section className="vertex-home-courses" id="courses" aria-labelledby="courses-heading">
          <div className="vertex-home-courses__inner">
            <div className="vertex-home-courses__heading">
              <h2 id="courses-heading">All Courses</h2>
              <Link href="/courses" className="vertex-home-courses__view-all">
                View all courses <ArrowRight size={18} aria-hidden="true" />
              </Link>
            </div>
            <div className="vertex-home-courses__grid">
              {courses.map((course) => (
                <Link
                  className="vertex-home-courses__card-link"
                  href="/courses"
                  key={course.title}
                >
                  <CourseCard
                    title={course.title}
                    description={course.description}
                    level={course.level}
                    duration={course.duration}
                    modules={course.modules}
                    logo={<CourseMark name={course.mark} />}
                    layout="stacked"
                  />
                </Link>
              ))}
            </div>
            <div className="vertex-home-note">
              <span className="vertex-home-note__rule" aria-hidden="true" />
              <Star size={20} aria-hidden="true" />
              <p>New courses and lessons added every week.</p>
              <span className="vertex-home-note__rule" aria-hidden="true" />
            </div>
          </div>
          <ChartDecoration />
        </section>
      </main>
    </PageFrame>
  );
}
