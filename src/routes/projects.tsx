import { createFileRoute } from "@tanstack/react-router";
import { Portfolio } from "@/components/portfolio/portfolio";
export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Aariz Khan" },
      {
        name: "description",
        content:
          "Explore introductory college project concepts: an everyday calculator, student record system, and campus landing page.",
      },
      { property: "og:title", content: "Projects — Aariz Khan" },
      {
        property: "og:description",
        content:
          "Explore introductory college project concepts: an everyday calculator, student record system, and campus landing page.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});
function Page() {
  return <Portfolio view="projects" />;
}
