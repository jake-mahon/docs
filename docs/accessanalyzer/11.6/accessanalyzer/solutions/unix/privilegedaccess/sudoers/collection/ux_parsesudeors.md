---
title: Unix Parse Sudoers Collection
sidebar_label: Parse Sudoers
description: Unix parse sudoers collection job for analyzing sudo configuration files and extracting privilege information.
---

# UX_ParseSudeors Job

The UX_ParseSudoers job parses all rights granted via sudoers in the audited environments.

## Queries for the UX_ParseSudoers Job

The UX_ParseSudoers job uses the Unix Data Collector for the following query:

**CAUTION:** The query is preconfigured for this job. Never modify the query.

![Queries for the UX_ParseSudoers Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/unix/privilegedaccess/sudoers/collection/parsesudoersquery.webp)

The query for the UX_ParseSudoers job is:

- ParseSudoers – Parses the sudoers file on the target host
