---
sidebar_position: 5160
title: SP_OneDrives Job
---

# SP\_OneDrives Job

The SP\_OneDrives Job collects the activity, sensitive data, summary level information across OneDrives.

## Analysis Tasks for the OneDrives Job

Navigate to the **Jobs** > **SharePoint** > **8.M365** > **SP\_OneDrives** > **Configure** node and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the OneDrives Job](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/SharePoint/M365/OneDrivesAnalysis.png "Analysis Tasks for the OneDrives Job")

The default analysis tasks are:

* OneDrive Details – Creates the SA\_SP\_OneDriveDetails table accessible under the job's Results node
* OneDrive Summary – Creates the SA\_SP\_OneDriveSummary table accessible under the job's Results node
* Top OneDrive by GB Summary – Creates the SA\_SP\_TopOneDrivesGB table accessible under the job's Results node
* OneDrive Sensitive Data File Details – Creates the SA\_SP\_OneDriveFileDetails table accessible under the job's Results node
* OneDrive Sensitive Data Summary – Creates the SA\_SP\_OneDriveSensitiveDataSummary table accessible under the job's Results node
* OneDrive Activity Details – Creates the SA\_SP\_OneDriveActivityDetails table accessible under the job's Results node
* OneDrive Activity Summary – Creates the SA\_SP\_OneDriveActivitySummary table accessible under the job's Results node

In addition to the tables created by the analysis tasks, the SP\_OneDrives Job produces the following preconfigured reports:

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| One Drive Activity | This report displays activity information from OneDrives. | None | This report is comprised of three elements:   * Bar Chart – Provides information on top OneDrives by Operation Count * Table – Provides details on OneDriveSummary * Table – Provides details on OneDrive Activity Details |
| One Drive Sensitive Data | This report displays sensitive information from OneDrives. | None | This report is comprised of three elements:   * Bar Chart – Provides information on top OneDrives by sensitive files * Table – Provides details on sensitive data summary * Table – Provides details on OneDrive file details |
| One Drive Sensitive Data | This report displays summary level information across all OneDrives. | None | This report is comprised of three elements:   * Bar Chart – Provides information on OneDrive summary * Table – Provides details on top OneDrives by GB * Table – Provides details on top OneDrives by GB summary * Table – Provides information on OneDrive details |