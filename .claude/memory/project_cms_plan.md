---
name: project-cms-plan
description: CMS strategy — Sanity first, then Payload CMS
metadata:
  type: project
---

Data layer plan: JSON files now → Sanity → Payload CMS.

**Why:** Sanity gets the project moving fast with a good editor UI and free tier. Payload is the long-term destination for full control and TypeScript-native schemas.

**How to apply:** When CMS work comes up, don't suggest Contentful or other options — the path is decided. Design JSON structure to be relational (two files, foreign key via hoodslug) so the Sanity migration is a clean swap.
