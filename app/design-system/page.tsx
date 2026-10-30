import {
  Accessibility,
  BarChart3,
  Bell,
  Bookmark,
  ChevronRight,
  CirclePlay,
  Clock3,
  FileText,
  Grid2X2,
  Eye,
  Search,
  Target,
  UserRound,
} from "lucide-react";
import { Logo } from "@/components/brand/logo";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { StatusIndicator } from "@/components/ui/status-indicator";
import { ProgressBar } from "@/components/ui/progress-bar";
import { SearchInput } from "@/components/ui/search-input";
import { Select } from "@/components/ui/select";
import { CourseCard } from "@/components/cards/course-card";
import { LessonVideoCard } from "@/components/cards/lesson-video-card";
import { LessonCard } from "@/components/cards/lesson-card";
import { ResourceCard } from "@/components/cards/resource-card";
import { Navbar } from "@/components/nav/navbar";
import { Breadcrumbs } from "@/components/nav/breadcrumbs";
import { Pagination } from "@/components/nav/pagination";

const primaryColors = [
  ["Primary 500", "#F97316", "primary-500"],
  ["Primary 400", "#FB923C", "primary-400"],
  ["Primary 300", "#FDBA74", "primary-300"],
  ["Primary 200", "#FED7AA", "primary-200"],
  ["Primary 100", "#FFEEE5", "primary-100"],
];

const neutralColors = [
  ["Neutral 900", "#0F172A", "neutral-900"],
  ["Neutral 700", "#334155", "neutral-700"],
  ["Neutral 500", "#64748B", "neutral-500"],
  ["Neutral 300", "#CBD5E1", "neutral-300"],
  ["Neutral 200", "#E2E8F0", "neutral-200"],
  ["Neutral 100", "#F1F5F9", "neutral-100"],
  ["Neutral 50", "#FAFAFC", "neutral-50"],
  ["White", "#FFFFFF", "white"],
];

const typeRows = [
  ["Display 1", "Playfair Display", "48 / 56", "Bold", "Page titles", "text-display-1"],
  ["Display 2", "Playfair Display", "36 / 44", "Bold", "Section titles", "text-display-2"],
  ["Heading 1", "Inter", "28 / 36", "Semi Bold", "Card titles", "text-heading-1"],
  ["Heading 2", "Inter", "22 / 30", "Semi Bold", "Sub section", "text-heading-2"],
  ["Heading 3", "Inter", "18 / 26", "Medium", "Small titles", "text-heading-3"],
  ["Body Large", "Inter", "16 / 24", "Regular", "Body copy", "text-body-large"],
  ["Body", "Inter", "14 / 20", "Regular", "Supporting text", "text-body"],
  ["Small", "Inter", "12 / 16", "Regular", "Captions, meta", "text-small"],
];

const spacings = [4, 8, 12, 16, 24, 32, 40, 48, 64];
const radii = [
  ["4px", "xs", "4px"],
  ["8px", "sm", "8px"],
  ["12px", "md", "12px"],
  ["16px", "lg", "16px"],
  ["24px", "xl", "24px"],
  ["Full", "circle", "50%"],
];
const shadows = [
  ["Sm", "0 1px 2px 0", "rgba(15, 23, 42, 0.05)"],
  ["Md", "0 4px 12px -2px", "rgba(15, 23, 42, 0.08)"],
  ["Lg", "0 12px 24px -4px", "rgba(15, 23, 42, 0.10)"],
  ["Xl", "0 20px 40px -8px", "rgba(15, 23, 42, 0.12)"],
];

const iconSet = [
  Bell,
  Search,
  CirclePlay,
  FileText,
  Bookmark,
  BarChart3,
  Clock3,
  UserRound,
  ChevronRight,
];

function SectionHeading({
  number,
  title,
}: {
  number: string;
  title: string;
}) {
  return (
    <h2 className="section-heading">
      <span>{number}</span>
      {title}
    </h2>
  );
}

function ColorSwatch({
  item,
}: {
  item: (typeof primaryColors)[number] | (typeof neutralColors)[number];
}) {
  const [name, hex, token] = item;
  return (
    <div className="color-swatch">
      <span
        className="color-swatch__fill"
        style={{ backgroundColor: `var(--vertex-${token})` }}
        aria-hidden="true"
      />
      <span className="color-swatch__name">{name}</span>
      <span className="color-swatch__hex">{hex}</span>
    </div>
  );
}

export default function DesignSystemPage() {
  return (
    <main className="design-system">
      <div className="design-system__grid">
        <section className="ds-panel ds-intro">
          <div className="ds-intro__identity">
            <Logo />
            <h1 className="text-display-2">Design System</h1>
            <p>
              A unified design language for Vertex learning platform. Clean,
              modern and focused on clarity, consistency and intuitive learning
              experiences.
            </p>
            <span className="ds-intro__version">VERSION 1.0&nbsp; · &nbsp;MAY 2025</span>
          </div>
          <div className="ds-colors">
            <SectionHeading number="01" title="Colors" />
            <h3 className="ds-subheading">Primary</h3>
            <div className="color-grid color-grid--primary">
              {primaryColors.map((item) => (
                <ColorSwatch item={item} key={item[0]} />
              ))}
            </div>
            <h3 className="ds-subheading ds-subheading--neutral">Neutral</h3>
            <div className="color-grid color-grid--neutral">
              {neutralColors.map((item) => (
                <ColorSwatch item={item} key={item[0]} />
              ))}
            </div>
          </div>
        </section>

        <section className="ds-panel ds-typography">
          <div className="ds-type-pair">
            <SectionHeading number="02" title="Typography" />
            <div className="font-specimen">
              <span className="font-specimen__letters">Ag</span>
              <div>
                <h3>Playfair Display</h3>
                <p>Elegant <i /> Readable <i /> Timeless</p>
              </div>
            </div>
            <div className="font-specimen">
              <span className="font-specimen__letters font-specimen__letters--sans">
                Ag
              </span>
              <div>
                <h3>Inter</h3>
                <p>Clean <i /> Modern <i /> Highly legible</p>
              </div>
            </div>
          </div>
          <div className="ds-type-scale">
            <SectionHeading number="03" title="Type Scale" />
            <div className="type-table" role="table" aria-label="Typography scale">
              <div className="type-table__row type-table__row--head" role="row">
                {["Style", "Font", "Size / Line Height", "Weight", "Use"].map(
                  (label) => (
                    <span role="columnheader" key={label}>
                      {label}
                    </span>
                  ),
                )}
              </div>
              {typeRows.map(([name, font, size, weight, use, className]) => (
                <div className="type-table__row" role="row" key={name}>
                  <span className={className} role="cell">
                    {name}
                  </span>
                  <span role="cell">{font}</span>
                  <span role="cell">{size}</span>
                  <span role="cell">{weight}</span>
                  <span role="cell">{use}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="ds-panel ds-spacing">
          <SectionHeading number="04" title="Spacing System" />
          <p className="section-description">Base unit: 4px</p>
          <div className="spacing-scale">
            {spacings.map((spacing) => (
              <div className="spacing-sample" key={spacing}>
                <span
                  className="spacing-sample__block"
                  style={{ width: spacing, height: spacing }}
                  aria-hidden="true"
                />
                <strong>{spacing}</strong>
                <span>({spacing / 16}rem)</span>
              </div>
            ))}
          </div>
        </section>

        <section className="ds-panel ds-radius">
          <SectionHeading number="05" title="Radius & Shadows" />
          <h3 className="ds-subheading">Radius</h3>
          <div className="radius-scale">
            {radii.map(([label, token, radius]) => (
              <div className="radius-sample" key={token}>
                <span style={{ borderRadius: radius }} aria-hidden="true" />
                <strong>{label}</strong>
                <span>({token})</span>
              </div>
            ))}
          </div>
          <h3 className="ds-subheading ds-shadow-heading">Shadows</h3>
          <div className="shadow-scale">
            {shadows.map(([name, offset, color], index) => (
              <div className={`shadow-sample shadow-sample--${index}`} key={name}>
                <strong>{name}</strong>
                <span>
                  {offset}
                  <br />
                  {color}
                </span>
              </div>
            ))}
          </div>
        </section>

        <section className="ds-panel ds-icons">
          <SectionHeading number="06" title="Icons" />
          <h3 className="ds-subheading">Outline Style</h3>
          <div className="icon-row">
            {iconSet.map((Icon, index) => (
              <Icon size={24} strokeWidth={2} key={`outline-${index}`} aria-hidden="true" />
            ))}
          </div>
          <h3 className="ds-subheading ds-subheading--icons">Filled Style</h3>
          <div className="icon-row icon-row--filled">
            {iconSet.map((Icon, index) => (
              <Icon size={24} strokeWidth={2} fill="currentColor" key={`filled-${index}`} aria-hidden="true" />
            ))}
          </div>
          <ul className="spec-list">
            <li>24×24px grid</li>
            <li>2px stroke width (outline)</li>
            <li>Rounded line caps</li>
            <li>Consistent optical balance</li>
          </ul>
        </section>

        <section className="ds-panel ds-buttons">
          <SectionHeading number="07" title="Buttons" />
          <div className="button-examples">
            <div className="button-examples__head">
              <span />
              <span>Default</span>
              <span>Hover</span>
              <span>Disabled</span>
            </div>
            {(
              [
                ["Primary", "primary", "Get Started"],
                ["Secondary", "secondary", "Explore Courses"],
                ["Tertiary", "tertiary", "View Lesson"],
                ["Text", "text", "Watch Video"],
              ] as const
            ).map(([name, variant, label]) => (
              <div className="button-examples__row" key={variant}>
                <span>{name}</span>
                <Button variant={variant} size="md">{label}</Button>
                <Button variant={variant} size="md" className="is-hover-preview">{label}</Button>
                <Button variant={variant} size="md" disabled>{label}</Button>
              </div>
            ))}
          </div>
          <div className="button-specs">
            <strong>Button Specs</strong>
            <ul className="spec-list">
              <li>Height: 44px (default)</li>
              <li>Padding: 0 16px (lg), 0 12px (md)</li>
              <li>Radius: 12px</li>
              <li>Font: Inter Medium (14–16px)</li>
            </ul>
          </div>
        </section>

        <section className="ds-panel ds-inputs">
          <SectionHeading number="08" title="Inputs" />
          <h3 className="ds-subheading">Search / Text Input</h3>
          <SearchInput />
          <h3 className="ds-subheading ds-input-select-heading">Select</h3>
          <Select
            options={[
              { label: "Most Relevant", value: "relevant" },
              { label: "Newest", value: "newest" },
            ]}
          />
          <h3 className="ds-subheading ds-input-spec-heading">Field Specs</h3>
          <ul className="spec-list">
            <li>Height: 44px</li>
            <li>Radius: 12px</li>
            <li>Border: 1px solid #E2E8F0</li>
            <li>Padding: 0 16px</li>
            <li>Focus: Border color #FB923C</li>
          </ul>
        </section>

        <section className="ds-panel ds-badges">
          <SectionHeading number="09" title="Badges / Tags" />
          <div className="badge-examples">
            <div><span>Video</span><Badge variant="video" /></div>
            <div><span>Lesson</span><Badge variant="lesson" /></div>
            <div><span>Popular</span><Badge variant="popular" /></div>
          </div>
        </section>

        <section className="ds-panel ds-statuses">
          <SectionHeading number="10" title="Status / Indicators" />
          <div className="status-examples">
            <StatusIndicator status="in-progress" />
            <StatusIndicator status="completed" />
            <StatusIndicator status="now-playing" />
            <StatusIndicator status="locked" />
          </div>
        </section>

        <section className="ds-panel ds-progress">
          <SectionHeading number="11" title="Progress Bar" />
          <ProgressBar value={35} />
        </section>

        <section className="ds-panel ds-cards">
          <SectionHeading number="12" title="Cards" />
          <div className="learning-cards-grid">
            <div>
              <span className="card-example-label">Course Card</span>
              <CourseCard
                title="Next.js for Production"
                description="Build scalable, high-performance web applications with Next.js."
                level="Intermediate"
                duration="18h 24m"
                modules={12}
              />
            </div>
            <div>
              <span className="card-example-label">Lesson Card (Video)</span>
              <LessonVideoCard
                title="Data Fetching in Server Components"
                description="Learn how to fetch data on the server using async/await and Next.js best practices."
                lesson="Lesson 5.1"
                timestamp="12:45"
              />
            </div>
            <div>
              <span className="card-example-label">Lesson Card (Lesson)</span>
              <LessonCard
                title="Data Fetching & Caching"
                description="Explore different data fetching methods in Next.js and how to cache and revalidate data for optimal performance."
                module="Module 5"
              />
            </div>
            <div>
              <span className="card-example-label">Resource Card</span>
              <ResourceCard
                title="Caching and Revalidation Guide"
                description="Deep dive into Next.js caching strategies."
                fileInfo="PDF　·　1.2 MB"
              />
            </div>
          </div>
        </section>

        <section className="ds-panel ds-navigation">
          <SectionHeading number="13" title="Navigation" />
          <div className="navigation-examples">
            <Navbar />
            <div>
              <span className="nav-example-label">Breadcrumbs</span>
              <Breadcrumbs
                items={[
                  { label: "All Courses", href: "#" },
                  { label: "Next.js for Production", href: "#" },
                  { label: "Data Fetching & Caching" },
                ]}
              />
            </div>
            <div>
              <span className="nav-example-label">Pagination</span>
              <Pagination current={1} total={8} />
            </div>
          </div>
        </section>

        <section className="ds-panel ds-principles">
          <SectionHeading number="14" title="Principles" />
          <div className="principle-grid">
            <div><Eye aria-hidden="true" /><strong>Clarity First</strong><span>Every element should communicate clearly.</span></div>
            <div><Grid2X2 aria-hidden="true" /><strong>Consistency</strong><span>Use components and patterns consistently across the platform.</span></div>
            <div><Target aria-hidden="true" /><strong>Focus & Calm</strong><span>Remove noise and help learners focus on what matters.</span></div>
            <div><Accessibility aria-hidden="true" /><strong>Accessible</strong><span>Design with accessibility and inclusivity in mind.</span></div>
          </div>
        </section>
      </div>
    </main>
  );
}
