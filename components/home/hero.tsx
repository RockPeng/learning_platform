import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SearchInput } from "@/components/ui/search-input";

export function Hero() {
  return (
    <section className="vertex-home-hero" aria-labelledby="home-heading">
      <span className="vertex-home-hero__eyebrow">Intelligent Learning</span>
      <h1 id="home-heading">
        Search your learning
        <br />
        in plain English.
      </h1>
      <p className="vertex-home-hero__description">
        Vertex understands what you want to learn and
        <br className="vertex-home-hero__desktop-break" />
        finds the exact lessons across all your courses.
      </p>
      <Button href="/courses" size="xl" className="vertex-home-hero__button">
        Explore Courses <ArrowRight size={20} aria-hidden="true" />
      </Button>
      <SearchInput
        className="vertex-home-hero__search"
        size="lg"
        label="Search your learning"
        placeholder="Ask anything about your learning..."
      />
    </section>
  );
}
