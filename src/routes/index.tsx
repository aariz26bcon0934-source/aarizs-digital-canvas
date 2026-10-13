import { createFileRoute } from "@tanstack/react-router";
import { Portfolio } from "@/components/portfolio/portfolio";
export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aariz Khan — Computer Science Student & Aspiring Developer" },
      {
        name: "description",
        content:
          "Meet Aariz Khan, a first-year B.Tech Computer Science student at JECRC University, Jaipur. Explore his skills, learning journey, and project ideas.",
      },
      { property: "og:title", content: "Aariz Khan — Student Developer Portfolio" },
      {
        property: "og:description",
        content:
          "A curious mind. An aspiring developer. Follow Aariz’s journey in computer science and web development.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});
function Index() {
  return <Portfolio />;
}
