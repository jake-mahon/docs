---
sidebar_position: 5514
title: Oracle_ObjectPermissions Job
---

# Oracle\_ObjectPermissions Job

The Oracle\_ObjectPermissions Job provides insight into user and role permissions to database objects in targeted Oracle database servers.

## Analysis Tasks for the Oracle\_ObjectPermissions Job

Navigate to the **Oracle** > **3.Permissions** > **Oracle\_ObjectPermissions** > **Configure** node and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Selection](../../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/Databases/Oracle/JobGroup35.png "Analysis Selection")

The default analysis tasks are:

* Oracle Object Permissions – Highlights permissions on Oracle Objects. Creates the SA\_Oracle\_ObjectPermission\_Details table accessible under the job’s Results node.
* Object Permissions Instance Summary – Summarizes Object Permissions by Instance. Creates the SA\_Oracle\_ObjectPermission\_InstanceSummary table accessible under the job’s Results node.

In addition to the tables and views created by the analysis task, the Oracle\_ObjectPermissions Job produces the following pre-configured report.

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Oracle Object Permissions | This report highlights Object permissions and summarizes them by instance and domain user | None | This report is comprised of three elements:   * Bar Chart – Displays top instances by object permissions * Table –  Provides details on instances by object permission count * Table – Provides details on object permissions |