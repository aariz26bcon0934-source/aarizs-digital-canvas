import { createFileRoute } from '@tanstack/react-router';
import { Portfolio } from '@/components/portfolio/portfolio';
export const Route = createFileRoute('/contact')({
 head: () => ({ meta: [ { title: 'Contact — Aariz Khan' }, { name: 'description', content: 'Connect with Aariz Khan for learning opportunities, collaborations, and project ideas. Sample contact details are provided.' }, { property: 'og:title', content: 'Contact — Aariz Khan' }, { property: 'og:description', content: 'Connect with Aariz Khan for learning opportunities, collaborations, and project ideas. Sample contact details are provided.' }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' } ] }),
 component: Page,
});
function Page(){ return <Portfolio view="contact"/> }
