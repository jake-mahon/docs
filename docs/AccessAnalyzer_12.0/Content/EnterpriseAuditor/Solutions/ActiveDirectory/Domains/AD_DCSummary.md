---
sidebar_position: 5292
title: AD_DCSummary Job
---

# AD\_DCSummary Job

The AD\_DCSummary Job provides operational reporting related to the details collected for each domain controller. For each domain controller, the report identifies the FSMO role, whether it is a bridgehead server, whether it is a global catalog, and the time server it syncs to.

## Analysis Task for the AD\_DCSummary Job

Navigate to the **Active Directory > 5.Domains > AD\_DCSummary > Configure** node and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis task(s). The analysis task(s) are preconfigured for this job.

![Analysis Selection](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/ActiveDirectory/Domains/DCSummaryAnalysis.png "Analysis Selection")

The default analysis tasks are:

* 1. List DCs
  * Creates the AD\_DCSummary\_List table accessible under the job’s Results node
  * Creates an interim processing table in the database for use by downstream analysis and report generation

In addition to the tables and views created by the analysis task, the AD\_DCSummary Job produces the following pre-configured report:

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Domain Controllers Overview | This report identifies domain controllers' roles and attributes within each domain. | None | This report is comprised of two elements:   * Bar Chart – Displays domain controllers by domain  * Table – Provides details on domain controllers by domain |