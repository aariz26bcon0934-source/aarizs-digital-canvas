<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Portfolio architecture
- Keep the portfolio's shared presentation in `src/components/portfolio/portfolio.tsx`, with dedicated content routes and unique metadata; the home page summarizes all sections while each section also has its own address.
- Define all visual tokens and portfolio styles in `src/styles.css` so the design remains consistent across pages.
- Keep unverified project concepts and contact placeholders visibly labeled; do not imply completed work, earned credentials, or real profile ownership without supplied details.
