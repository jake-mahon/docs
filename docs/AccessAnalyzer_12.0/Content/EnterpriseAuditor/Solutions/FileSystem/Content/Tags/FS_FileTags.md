---
sidebar_position: 5260
title: FS_FileTags Job
---

# FS\_FileTags Job

The FS\_FileTags job is designed to report on resources classified with metadata file tags from targeted file servers.

## Analysis Tasks for the FS\_FileTags Job

View the analysis tasks by navigating to the **FileSystem** > **4.Content** > **Tags** > **FS\_FileTags** > **Configure** node and select **Analysis**.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the FS_FileTags Job](../../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/FileSystem/Content/FileTagsAnalysis.png "Analysis Tasks for the FS_FileTags Job")

The following analysis task is selected by default:

* List file tag details – Creates the SA\_FS\_FileTags\_Details table accessible under the job’s Results node

In addition to the tables and views created by the analysis task, the FS\_FileTags job produces the following pre-configured report:

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| File Tags | This report provides details on tags applied to files. This information is rolled up by folder, and summarized at the enterprise level. | None | This report is comprised of three elements:   * Pie Chart – Displays enterprise tag summary * Table– Provides details on tag details by folder * Table – Provides details on tags by file count |