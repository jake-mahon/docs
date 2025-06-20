# Directory Manager 11.0 – Documentation Restructure Plan

This document describes how the **Directory Manager 11.0** documentation will be reorganised for clarity, lower click-depth, and consistency with Docusaurus information-architecture (IA) guidelines.

## Objectives

1. Flatten today’s deeply-nested `directorymanager/admincenter/...` tree.
2. Organise content around **tasks** and **features** rather than internal component names.
3. Enforce file-system naming conventions (lower-case, hyphen-delimited) and Title-Case labels in navigation.
4. Keep one topic per page; merge only small, closely related stubs (≤10 to 1 rule).

## Target Top-Level IA

```text
directorymanager/11.0
├── overview              – Introduction & What’s New
├── getting-started       – First-login, quick tour
├── installation          – Server & component installs
├── administration        – Admin Center UI & jobs
│   ├── general           – Dashboards, logs, licensing …
│   ├── identity-store    – Source setup & replication
│   ├── data-sources      – DataSource CRUD
│   ├── entitlement       – Permission templates
│   ├── portal-builder    – Portal design & deployment
│   ├── help-desk         – Help-desk workflows
│   ├── schedule          – Lifecycle automation
│   ├── security-roles    – Role-based access control
│   ├── services          – Windows services management
│   └── replication       – Multi-server replication
├── authentication        – SAML IdP/SP configuration
├── configuration         – External integrations (Entra ID, etc.)
├── portal                – End-user portal usage
├── api                   – REST/GraphQL reference
├── management-shell      – PowerShell module
└── release-notes         – Archived release notes
```

## Key Changes

| #   | Change                                                                                                         |
| --- | -------------------------------------------------------------------------------------------------------------- |
| 1   | Renamed `admincenter` ➜ `administration`, `authenticate` ➜ `authentication`, etc.                              |
| 2   | Added dedicated **Configuration** folder for _Configure Entra ID_.                                             |
| 3   | Merged tiny overview pages (`directorymanager/gettingstarted.md`, `introduction.md`) into section index files. |
| 4   | Adopted hyphen-case for all directory/file names.                                                              |
| 5   | Created **Release Notes** folder (`whats-new.md` as index).                                                    |

## Migration Guidelines

- One-to-one file moves are preferred—no monolithic pages.
- Very small (<1 KiB) overview stubs are merged into the parent `index.md`; all headings preserved.
- Redirects will be generated from **file-mappings.csv** and implemented via Docusaurus plugin-client redirects.

## Risks & Mitigations

| Risk                   | Mitigation                                                                                        |
| ---------------------- | ------------------------------------------------------------------------------------------------- |
| External links break   | Redirect map automatically generated.                                                             |
| Future content drift   | Contribution guide to document IA.                                                                |
| Merge exceeds 10 files | Checked programmatically during mapping; max merge is 7 files (SAML service-provider variations). |
