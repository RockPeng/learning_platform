import Link from "next/link";
import { Logo } from "@/components/brand/logo";
import { cn } from "@/lib/utils";

type NavbarProps = {
  active?: "courses" | "learning" | "none";
  className?: string;
};

export function Navbar({ active = "courses", className }: NavbarProps) {
  return (
    <nav className={cn("vertex-navbar", className)} aria-label="Main navigation">
      <Link href="/" className="vertex-navbar__brand">
        <Logo size="sm" />
      </Link>
      <div className="vertex-navbar__links">
        <Link
          href="/courses"
          className={cn(active === "courses" && "is-active")}
          aria-current={active === "courses" ? "page" : undefined}
        >
          Courses
        </Link>
        <Link
          href="/my-learning"
          className={cn(active === "learning" && "is-active")}
          aria-current={active === "learning" ? "page" : undefined}
        >
          My Learning
        </Link>
      </div>
    </nav>
  );
}
