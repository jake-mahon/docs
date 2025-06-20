# Access Analyzer 12.0 – Documentation Restructure Plan

This document outlines the proposed information architecture (IA) changes for the **Access Analyzer 12.0** documentation set.

## Goals

1. Reduce the depth of the navigation and make high–value content discoverable within **two to three clicks**.
2. Group content by **user tasks** rather than the current, technology-centric, folder hierarchy.
3. Align naming with Docusaurus best-practices:
   - Hyphen-case file & directory names.
   - Title-case labels in the sidebar.
4. Preserve every existing page – no more than **10** files are consolidated into a single page.
5. Provide a predictable, human-readable URL structure that mirrors the sidebar.

## High-level Information Architecture

```text
accessanalyzer/12.0
├── overview               – Product overview & release notes
├── getting-started        – First-time installation, requirements & quick tour
├── installation           – Detailed install & upgrade procedures
├── configuration          – Data-source configuration guides
├── administration         – UI, job management, reporting & maintenance
├── sensitive-data         – Sensitive Data Discovery feature
├── solutions              – Packaged analytics “solutions”
├── cds-a                  – Core Data Services for Access Analyzer (CDSA)
├── integrations           – StealthAUDIT, APIs, etc.
└── reference              – Glossary, CLI & other reference material
```

## Key Changes

| #   | Change                                                                                                              |
| --- | ------------------------------------------------------------------------------------------------------------------- |
| 1   | **Flattened** the deep _admin/action/activedirectory/…_ structure under `administration/actions/active-directory/`. |
| 2   | Moved all system-specific configuration guides under a single `configuration/` top-level folder.                    |
| 3   | Added a dedicated **Overview** section containing the landing page (`index.md`) and _What’s New_ notes.             |
| 4   | Placed **CDSA** content under its own folder (`cds-a/`) to mirror product terminology.                              |
| 5   | Created an **Integrations** section for StealthAUDIT and future API content.                                        |
| 6   | Normalised file names to hyphen-case – e.g. `gettingstarted.md` → `getting-started/index.md`.                       |

## Migration Guidelines

- A one-to-one file move is used wherever a page covers a single discrete topic.
- Very small, tightly-coupled pages (≤ 1 KiB) are merged – e.g. the 3-file _CDSA_ set becomes `cds-a/index.md`.
- Directory names that align with UI labels are preserved (e.g. `actions`, `jobs`, `maintenance`).
- All redirects will be handled automatically via the generated `file-mappings.csv`.

## Risks & Mitigations

| Risk                               | Mitigation                                                                                        |
| ---------------------------------- | ------------------------------------------------------------------------------------------------- |
| Broken external links              | A redirect map generated from `file-mappings.csv` will be added to Docusaurus.                    |
| Loss of context during page merges | Only very small pages are merged; headings are retained so existing anchors keep working.         |
| Future IA drift                    | A **Contributing Guide** will document the IA & naming rules to keep future additions consistent. |
