---
sidebar_position: 5515
title: Oracle_ServerPermissions Job
---

# Oracle\_ServerPermissions Job

The Oracle\_ServerPermissions Job analyzes permissions granted at the database level and reports on effective database level permissions across all audited Oracle database servers.

## Analysis Tasks for the Oracle\_ServerPermissions Job

Navigate to the **Oracle** > **3.Permissions** > **Oracle\_ServerPermissions** > **Configure** node and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Selection](../../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/Databases/Oracle/JobGroup37.png "Analysis Selection")

The default analysis tasks are:

* Determine Server Permissions – Highlights Oracle permissions on the Server. Creates the SA\_Oracle\_ServerPermission\_Details table accessible under the job’s Results node.
* Server Permissions Instance Summary – Summarizes server permissions by Instance. Creates the SA\_Oracle\_ServerPermission\_InstanceSummary table accessible under the job’s Results node.

In addition to the tables and views created by the analysis task, the Oracle\_ServerPermissions Job produces the following pre-configured report.

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Server Permissions | This report highlights server permissions and summarizes them by instance | None | This report is comprised of three elements:   * Bar Chart – Displays top instances by server permissions * Table – Provides details on instances by server permission count * Table – Provides details on server permissions |