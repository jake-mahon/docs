# FS_RestoreInheritance_Status Job

The FS_RestoreInheritance_Status job is designed to report on inheritance that was restored to previously quarantined files.

## Analysis Tasks for the FS_RestoreInheritance_Status Job

Navigate to the __FileSystem__ > __Cleanup__ > __3. Quarantine__ > __FS_RestoredInheritance_Status__ > __Configure__ node and select __Analysis__ to view the analysis tasks.

__CAUTION:__ Do not modify or deselect the selected analysis task. The analysis task is preconfigured for this job.

![Analysis Tasks for the FS_RestoreInheritance_Status Job](../../../../../../../static/img/product_docs/accessanalyzer/enterpriseauditor/solutions/filesystem/cleanup/quarantine/restoreinheritancestatusanalysis.webp)

The following analysis tasks are selected by default:

- Summarize restore inheritance actions – Creates an interim processing table in the database for use by downstream analysis and report generation

In addition to the tables and views created by the analysis tasks, the FS_RestoreInheritance_Status job produces the following pre-configured report.

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Restored Inheritance | This report summarizes restored inheritance which has occurred during the Cleanup process | None | This report is comprised of two elements:   - Line Chart – Displays the historical summary of restored inheritance - Table – provides details on restored inheritance |
