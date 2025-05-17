---
sidebar_position: 5261
title: FS_AIPLabels Job
---

# FS\_AIPLabels Job

The FS\_AIPLabels job is designed to report on resources classified by AIP labels from targeted file servers.

## Analysis Tasks for the FS\_AIPLabels Job

View the analysis tasks by navigating to the **FileSystem** > **4.Content** > **Tags** > **FS\_AIPLabels** > **Configure** node and select **Analysis**.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the FS_AIPLabels Job](../../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/FileSystem/Content/AIPLabelsAnalysis.png "Analysis Tasks for the FS_AIPLabels Job")

The following analysis task is selected by default:

* AIP Label Details – Creates the SA\_FS\_FileLabel\_Details table accessible under the job’s Results node

In addition to the tables and views created by the analysis task, the FS\_AIPLabels job produces the following pre-configured report:

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| AIP Labels | This report provides details on labels applied to files. This information is rolled up by folder, and summarized at the enterprise level. | None | This report is comprised of three elements:   * Pie Chart – Displays enterprise AIP summary * Table– Provides details on label details by folder * Table – Provides details on labels by file count |