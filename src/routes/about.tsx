import { createFileRoute } from '@tanstack/react-router';
import { Portfolio } from '@/components/portfolio/portfolio';
export const Route = createFileRoute('/about')({
 head: () => ({ meta: [ { title: 'About Aariz — Aariz Khan' }, { name: 'description', content: 'Meet Aariz Khan: his background, career goals, and interests in programming and building useful software.' }, { property: 'og:title', content: 'About Aariz — Aariz Khan' }, { property: 'og:description', content: 'Meet Aariz Khan: his background, career goals, and interests in programming and building useful software.' }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' } ] }),
 component: Page,
});
function Page(){ return <Portfolio view="about"/> }
