# ADR 0001: Single Page Resume Experience

## Status

Accepted

## Context

The resume should be a one-page personal profile that shows a portrait, work history, technology stack, selected work, and a downloadable resume file.

## Decision

Use the existing Next.js App Router home route as the resume page. Keep profile content in plain arrays inside `src/app/page.tsx` so it is easy to edit without adding a CMS or data layer. Serve the downloadable resume through `src/app/resume.pdf/route.ts`, which returns a generated PDF response at `/resume.pdf`.

## Consequences

The page works without external services, databases, or file uploads. The portrait is currently an editable placeholder asset in `public/profile.svg`, and the PDF content mirrors the on-page resume summary.
