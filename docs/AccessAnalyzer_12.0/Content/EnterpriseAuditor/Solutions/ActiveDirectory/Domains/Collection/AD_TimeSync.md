---
sidebar_position: 5372
title: AD_TimeSync Job
---

# AD\_TimeSync Job

The 0.**Collection > AD\_TimeSync** Job collects TimeSync information from the registry for each domain controller within the domain.

## Query for the AD\_TimeSync Job

The AD\_TimeSync Job uses the Registry Data Collector for the following query:

**CAUTION:** Do not modify this query. The query is preconfigured for this job.

![Query Selection](../../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/ActiveDirectory/Domains/TimeSyncQuery.png "Query Selection")

The queries for this job are:

* Timesync Info – Targets one domain controller per domain known to Access Analyzer to determine TimeSync information from the registry
  * See the [Registry Data Collector](../../../../Admin/DataCollector/Registry "Navigates to the Registry Data Collector section") topic for additional information.