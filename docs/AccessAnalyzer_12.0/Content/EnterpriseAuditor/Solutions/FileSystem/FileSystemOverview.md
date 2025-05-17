---
sidebar_position: 4994
title: FileSystemOverview Job
---

# FileSystemOverview Job

The FileSystemOverview job provides insight into all targeted file servers. It is dependent on data collected by the [File System Access Auditing](Collection/Overview#File "File System Access Auditing") components and the components of the [0.Collection Job Group](Collection/Overview "0.Collection Job Group"). It also depends on the running of the sub-job groups within the solution. If only select sub-job groups have been run, there will be blank sections in the overview report.

![FileSystemOverview Job in the Jobs Tree](../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/FileSystem/FileSystemOverviewJobsTree.png "FileSystemOverview Job in the Jobs Tree")

The FileSystemOverview job is designed to provide an overview of all relevant information from targeted file servers.

### Analysis Tasks for the FileSystemOverview Job

View the analysis tasks by navigating to the **FileSystem** > **FileSystemOverview** > **Configure** node and select **Analysis**.

**CAUTION:** Do not modify or deselect the selected analysis task. The analysis task is preconfigured for this job.

![Analysis Tasks for the FileSystemOverview Job](../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/FileSystem/FileSystemOverviewAnalysis.png "Analysis Tasks for the FileSystemOverview Job")

The following analysis task is selected by default:

* Create Report Views – Creates an interim processing table in the database for use by downstream analysis and report generation

In addition to the tables and views created by the analysis task, the FileSystemOverview job produces the following pre-configured report:

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| File System Overview | This report provides an overview of all targeted file servers. | None | This report is comprised of one element:   * Table – Provides summary of the targeted file system |