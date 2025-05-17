---
sidebar_position: 5248
title: FS_RestoreInheritance_Status Job
---

# FS\_RestoreInheritance\_Status Job

The FS\_RestoreInheritance\_Status job is designed to report on inheritance that was restored to previously quarantined files.

## Analysis Tasks for the FS\_RestoreInheritance\_Status Job

Navigate to the **FileSystem** > **Cleanup** > **3. Quarantine** > **FS\_RestoredInheritance\_Status** > **Configure** node and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis task. The analysis task is preconfigured for this job.

![Analysis Tasks for the FS_RestoreInheritance_Status Job](../../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/FileSystem/Cleanup/Quarantine/RestoreInheritanceStatusAnalysis.png "Analysis Tasks for the FS_RestoreInheritance_Status Job")

The following analysis tasks are selected by default:

* Summarize restore inheritance actions – Creates an interim processing table in the database for use by downstream analysis and report generation

In addition to the tables and views created by the analysis tasks, the FS\_RestoreInheritance\_Status job produces the following pre-configured report.

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Restored Inheritance | This report summarizes restored inheritance which has occurred during the Cleanup process | None | This report is comprised of two elements:   * Line Chart – Displays the historical summary of restored inheritance * Table – provides details on restored inheritance |