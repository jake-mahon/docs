---
sidebar_position: 5250
title: FS_QuarantineData_Status Job
---

# FS\_QuarantineData\_Status Job

The FS\_QuarantineData\_Status job is designed to report on the FS\_QuarantineData job. See the [FS\_QuarantineData Job](FS_QuarantineData "FS_QuarantineData Job") topic for additional information.

## Analysis Tasks for the FS\_QuarantineData\_Status Job

Navigate to the **FileSystem** > **Cleanup** > **3. Quarantine** > **FS\_QuarantineData\_Status** > **Configure** node and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis task. The analysis task is preconfigured for this job.

![Analysis Tasks for the FS_QuarantineData_Status Job](../../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/FileSystem/Cleanup/Quarantine/QuarantineDataStatusAnalysis.png "Analysis Tasks for the FS_QuarantineData_Status Job")

The following analysis task is selected by default:

* Summarize quarantine actions – Creates the SA\_FS\_Quarantine\_Status\_Summary table accessible under the job’s Results node

In addition to the tables and views created by the analysis tasks, the FS\_QuarantineData\_Status job produces the following pre-configured report.

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| File Quarantining | This report summarizes file quarantining which has occurred during the Cleanup process | None | This report is comprised of two elements:   * Line Chart – Displays the historical summary of file quarantining * Table – provides details on file quarantining |