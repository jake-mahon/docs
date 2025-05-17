---
sidebar_position: 5370
title: AD_DSRM Job
---

# AD\_DSRM Job

The **0.Collection > AD\_DSRM** Job collects data related to domain controller registry settings for the DSRMAdminLogonBehavior key. If this key is set to 1 or 2, the DSRM Admin Account can be used to log in to the domain controller even if it has not been started in DSRM which can present a potential security vulnerability. Additional information on this registry key is available in this [Microsoft Document](https://docs.microsoft.com/en-us/previous-versions/windows/it-pro/windows-server-2008-R2-and-2008/cc732714(v=ws.10)?redirectedfrom=MSDN "Opens the Microsoft article in a new window").

## Query for the AD\_DSRM Job

The AD\_TimeSync Job uses the Registry Data Collector for the following query:

**CAUTION:** Do not modify this query. The query is preconfigured for this job.

![Query Selection](../../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/ActiveDirectory/Domains/DSRMQuery.png "Query Selection")

The queries for this job are:

* Check LSA registry keys – Targets all domain controllers check LSA registry keys
  * See the [Registry Data Collector](../../../../Admin/DataCollector/Registry "Navigates to the Registry Data Collector section") topic for additional information.