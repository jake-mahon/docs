---
sidebar_position: 5069
title: SG_ScheduledTasks Job
---

# SG\_ScheduledTasks Job

The SG\_ScheduledTasks job lists scheduled task details on all targeted hosts.

## Queries for the SG\_ScheduledTasks Job

The SG\_ScheduledTasks job uses the SystemInfo Data Collector for the following query:

**CAUTION:** The query is preconfigured for this job. Never modify the query.

![Queries for the SG_ScheduledTasks Job](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/Windows/Applications/ScheduledTasksQuery.png "Queries for the SG_ScheduledTasks Job")

The query for the SG\_ScheduledTasks job is:

* Scheduled tasks – Targets all Windows servers known to Access Analyzer to determine scheduled tasks

## Analysis Tasks for the SG\_ScheduledTasks Job

Navigate to the **Windows** > **Applications** > **SG\_ScheduledTasks** > **Configure** node and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the SG_ScheduledTasks Job](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/Windows/Applications/ScheduledTasksAnalysis.png "Analysis Tasks for the SG_ScheduledTasks Job")

The default analysis tasks are:

* Track Changes – Creates the SA\_SG\_ScheduledTasks\_ChangeTracking table accessible under the job’s Results node
* List scheduled task details – Creates the SA\_SG\_ScheduledTasks\_Details table accessible under the job’s Results node
* Domain user summary – Creates the SA\_SG\_ScheduledTasks\_DomainUsers table accessible under the job’s Results node
* Host summary – Creates the SA\_SG\_ScheduledTasks\_HostSummary table accessible under the job’s Results node

In addition to the tables and views created by the analysis tasks, the SG\_ScheduledTasks job produces the following pre-configured reports.

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Scheduled Tasks | This report highlights scheduled tasks across the audited environment. | None | This report is comprised of three elements:   * Bar Chart – Displays Hosts with Most Scheduled Tasks * Table – Provides details on Hosts with Most Scheduled Tasks bar chart * Table – Provides details on Scheduled Tasks |