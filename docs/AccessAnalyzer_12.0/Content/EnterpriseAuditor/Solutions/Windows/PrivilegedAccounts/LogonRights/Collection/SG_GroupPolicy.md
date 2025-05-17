---
sidebar_position: 5089
title: SG_GroupPolicy Job
---

# SG\_GroupPolicy Job

The SG\_GroupPolicy job collects policy assignments from all targeted servers. The following policy assignments are audited:

* Allow log on locally
* Log on as a batch job
* Allow log on through Remote Desktop Services
* Log on as a service

## Queries for the SG\_GroupPolicy Job

The SG\_GroupPolicy job uses the GroupPolicy Data Collector for the following query:

**CAUTION:** The query is preconfigured for this job. Never modify the query.

![Queries for the SG_GroupPolicy Job](../../../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/Windows/PrivilegedAccounts/LogonRights/GroupPolicyQuery.png "Queries for the SG_GroupPolicy Job")

The query for the SG\_GroupPolicy job is:

* GroupPolicy – Collects group policy information