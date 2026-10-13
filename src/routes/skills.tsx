import { createFileRoute } from "@tanstack/react-router";
import { Portfolio } from "@/components/portfolio/portfolio";
export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Skills — Aariz Khan" },
      {
        name: "description",
        content:
          "Explore Aariz Khan’s growing skills in C programming, Python basics, HTML and CSS, and problem solving.",
      },
      { property: "og:title", content: "Skills — Aariz Khan" },
      {
        property: "og:description",
        content:
          "Explore Aariz Khan’s growing skills in C programming, Python basics, HTML and CSS, and problem solving.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});
function Page() {
  return <Portfolio view="skills" />;
}
