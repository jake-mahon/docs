---
sidebar_position: 5091
title: SG_LocalMembership Job
---

# SG\_LocalMembership Job

The SG\_LocalMembership job collects local group membership from all targeted servers.

## Queries for the SG\_LocalMembership Job

The SG\_LocalMembership job uses the UsersGroups Data Collector for the following query:

**CAUTION:** The query is preconfigured for this job. Never modify the query.

![Queries for the SG_LocalMembership Job](../../../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/Windows/PrivilegedAccounts/LogonRights/LocalMembershipQuery.png "Queries for the SG_LocalMembership Job")

The query for the SG\_LocalMembership job is:

* LocalMembers – Collects local membership information

## Analysis Tasks for the SG\_LocalMembership Job

Navigate to the **Windows** > **Privileged Accounts** > **Logon Rights** > **Collection** > **SG\_LocalMembership** > **Configure** node and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis task. The analysis task is preconfigured for this job.

![Analysis Tasks for the SG_LocalMembership Job](../../../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/Windows/PrivilegedAccounts/LogonRights/LocalMembershipAnalysis.png "Analysis Tasks for the SG_LocalMembership Job")

The default analysis task is:

* Update LocalMembers – Creates an interim processing table in the database for use by downstream analysis and report generation