---
sidebar_position: 5204
title: UX_MakeDirectory Job
---

# UX\_MakeDirectory Job

The UX\_MakeDirectory job creates a temporary Access Analyzer directory on the target host to be used by the UX\_ParseSudoers job.

## Queries for the UX\_MakeDirectory Job

The UX\_MakeDirectory job uses the Unix Data Collector for the following query:

**CAUTION:** The query is preconfigured for this job. Never modify the query.

![Queries for the UX_MakeDirectory Job](../../../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/Unix/PrivilegedAccess/MakeDirectoryQuery.png "Queries for the UX_MakeDirectory Job")

* MakeDirectory – Makes a directory for the sudoers.pl file on the target host