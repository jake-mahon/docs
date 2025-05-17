---
sidebar_position: 5060
title: Service Accounts > SG_ServiceAccounts Job
---

# Service Accounts > SG\_ServiceAccounts Job

The SG\_ServiceAccounts job determines which domain accounts are being used to run services on member servers, identifying password age and settings.

![Service Accounts > SG_ServiceAccounts Job in the Jobs Tree](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/Windows/PrivilegedAccounts/ServiceAccountsJobsTree.png "Service Accounts > SG_ServiceAccounts Job in the Jobs Tree")

The SG\_ServiceAccounts job is located in the Service Account job group.

## Queries for the SG\_ServiceAccounts Job

The SG\_ServiceAccounts job uses the Services Data Collector for the following query:

**CAUTION:** The query is preconfigured for this job. Never modify the query.

![Queries for the SG_ServiceAccounts Job](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/Windows/PrivilegedAccounts/ServiceAccountsQuery.png "Queries for the SG_ServiceAccounts Job")

The query for the SG\_ServiceAccounts job is:

* Service Accounts – Collects information on service accounts

See the [Services Data Collector](../../../Admin/DataCollector/Services "Services Data Collector") topic for additional information.

## Analysis Tasks for the SG\_ServiceAccounts Job

Navigate to the **Jobs** > **Windows** > **Privileged Accounts** > **Service Accounts** > **SG\_ServiceAccounts** > **Configure** node and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the SG_ServiceAccounts Job](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/Windows/PrivilegedAccounts/ServiceAccountsAnalysis.png "Analysis Tasks for the SG_ServiceAccounts Job")

The default analysis tasks are:

* Domain Service Accounts – Creates the SA\_SG\_ServiceAccounts\_Details table accessible under the job’s Results node
* Domain Summary – Creates the SA\_SG\_ServiceAccounts\_DomainSummary table accessible under the job’s Results node

In addition to the tables created by the analysis tasks, the SG\_ServiceAccounts job produces the following pre-configured report.

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Service Accounts | This report identifies domain accounts being used for services. | None | This report is comprised of three elements:   * Bar Chart – Displays domains by service accounts found * Table – Provides domains by service accounts found * Table – Provides service details |