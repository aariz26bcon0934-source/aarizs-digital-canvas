import { createFileRoute } from "@tanstack/react-router";
import { Portfolio } from "@/components/portfolio/portfolio";
export const Route = createFileRoute("/achievements")({
  head: () => ({
    meta: [
      { title: "Achievements & Certifications — Aariz Khan" },
      {
        name: "description",
        content:
          "Follow Aariz Khan’s learning milestones and upcoming certifications as he begins his computer science journey.",
      },
      { property: "og:title", content: "Achievements & Certifications — Aariz Khan" },
      {
        property: "og:description",
        content:
          "Follow Aariz Khan’s learning milestones and upcoming certifications as he begins his computer science journey.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});
function Page() {
  return <Portfolio view="achievements" />;
}
