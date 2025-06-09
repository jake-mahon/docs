# FS\_QuarantineData\_Status Job

The FS\_QuarantineData\_Status job is designed to report on the FS\_QuarantineData job. See the [FS\_QuarantineData Job](/docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/filesystem/cleanup/quarantine/fs_quarantinedata.md) topic for additional information.

## Analysis Tasks for the FS\_QuarantineData\_Status Job

Navigate to the __FileSystem__ > __Cleanup__ > __3. Quarantine__ > __FS\_QuarantineData\_Status__ > __Configure__ node and select __Analysis__ to view the analysis tasks.

__CAUTION:__ Do not modify or deselect the selected analysis task. The analysis task is preconfigured for this job.

![Analysis Tasks for the FS_QuarantineData_Status Job](/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/filesystem/cleanup/quarantine/quarantinedatastatusanalysis.png)

The following analysis task is selected by default:

- Summarize quarantine actions – Creates the SA\_FS\_Quarantine\_Status\_Summary table accessible under the job’s Results node

In addition to the tables and views created by the analysis tasks, the FS\_QuarantineData\_Status job produces the following pre-configured report.

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| File Quarantining | This report summarizes file quarantining which has occurred during the Cleanup process | None | This report is comprised of two elements:   - Line Chart – Displays the historical summary of file quarantining - Table – provides details on file quarantining |
