import { createFileRoute } from "@tanstack/react-router";
import { Portfolio } from "@/components/portfolio/portfolio";
export const Route = createFileRoute("/education")({
  head: () => ({
    meta: [
      { title: "Education — Aariz Khan" },
      {
        name: "description",
        content:
          "Aariz Khan studies B.Tech Computer Science and Engineering at JECRC University, Jaipur, first year, first semester.",
      },
      { property: "og:title", content: "Education — Aariz Khan" },
      {
        property: "og:description",
        content:
          "Aariz Khan studies B.Tech Computer Science and Engineering at JECRC University, Jaipur, first year, first semester.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});
function Page() {
  return <Portfolio view="education" />;
}
