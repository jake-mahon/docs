---
sidebar_position: 5090
title: SG_LocalUsers Job
---

# SG\_LocalUsers Job

The SG\_LocalUsers job audits local user accounts from all targeted hosts.

## Queries for the SG\_LocalUsers Job

The SG\_LocalMembership job uses the UsersGroups Data Collector for the following query:

**CAUTION:** The query is preconfigured for this job. Never modify the query.

![Queries for the SG_LocalUsers Job](../../../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/Windows/PrivilegedAccounts/LogonRights/LocalUsersQuery.png "Queries for the SG_LocalUsers Job")

The query for the SG\_LocalUsers job is:

* LocalUsers – Collects local user information

## Analysis Tasks for the SG\_LocalUsers Job

Navigate to the **Windows** > **Privileged Accounts** > **Logon Rights** > **Collection** > **SG\_LocalUsers** > **Configure** node and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis task. The analysis task is preconfigured for this job.

![Analysis Tasks for the SG_LocalUsers Job](../../../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/Windows/PrivilegedAccounts/LogonRights/LocalUsersAnalysis.png "Analysis Tasks for the SG_LocalUsers Job")

The default analysis tasks is:

* Update LocalUsers – Creates an interim processing table in the database for use by downstream analysis and report generation