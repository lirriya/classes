classes - AI Development Guide & Directives

    Purpose This document is the absolute source of truth for any AI coding agent working on the classes codebase.

1. Strict AI Agent Directives
Security & Execution

    Never execute a rm -rf command without explicit user consent.
    Never use sudo without explicit user consent (password input is required).
    Do not look into the .env file. Reading .env.example is tolerated.

Version Control (Git)

    When staging files, systematically use git add . to avoid missing any modified files.
    Never execute git commit or git push without explicit user consent.
    Work feature-branch to pull request: one plan item = one branch = one commit = one PR, reviewed and merged on GitHub.

Code Standards

    ABSOLUTELY NO COMMENTS IN THE GENERATED SOURCE CODE. (Unless explicitly requested for documentation purposes).

Technical Stack

    React 19 + TypeScript (strict mode) + Vite.
    Styling: CSS Modules + CSS custom properties. Never inline style objects.
    Routing: React Router (BrowserRouter + 404.html trick for GitHub Pages).
    Motion: GSAP for major animations and page transitions, CSS transitions for small states (hovers, buttons).
    Icons and UI elements: inline SVG only. Never use PNG/JPEG/WebP raster assets for icons or UI.
    Content is data-driven: subjects live as typed data files in src/content/. Adding a subject must not require new components.
    Color palette (CSS variables): #fff4eb (paper/base), #f6e0b6 (accent/tape), #a6bcc9 (muted/borders), #3e4b8e (primary/actions), #3d1534 (text). White only for sheets on top of the paper.

Technical Documentation & Representation

    Per-feature .md documentation is NOT mandatory by default. Produce documentation only for major architectural decisions, and only when explicitly requested.
    When a .md file is produced, use Mermaid diagrams to illustrate architectures, flows, and component interactions.
