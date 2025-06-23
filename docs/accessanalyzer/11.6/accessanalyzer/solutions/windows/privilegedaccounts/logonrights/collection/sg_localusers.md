---
title: windows privilegedaccounts logonrights collection sg_localusers
sidebar_label: sg_localusers
description: Solution guide for windows privilegedaccounts logonrights collection sg_localusers including implementation steps, configuration, and best practices.
---

# SG_LocalUsers Job

The SG_LocalUsers job audits local user accounts from all targeted hosts.

## Queries for the SG_LocalUsers Job

The SG_LocalMembership job uses the UsersGroups Data Collector for the following query:

**CAUTION:** The query is preconfigured for this job. Never modify the query.

![Queries for the SG_LocalUsers Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/windows/privilegedaccounts/logonrights/collection/localusersquery.webp)

The query for the SG_LocalUsers job is:

- LocalUsers – Collects local user information

## Analysis Tasks for the SG_LocalUsers Job

Navigate to the **Windows** > **Privileged Accounts** > **Logon Rights** > **Collection** >
**SG_LocalUsers** > **Configure** node and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis task. The analysis task is
preconfigured for this job.

![Analysis Tasks for the SG_LocalUsers Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/unix/usersgroups/localusersanalysis.webp)

The default analysis tasks is:

- Update LocalUsers – Creates an interim processing table in the database for use by downstream
  analysis and report generation
