# FS\_ModifiedBinaries Job

The FS\_ModifiedBinaries job is designed to report on activity event information where binaries were modified from targeted file servers.

## Analysis Tasks for the FS\_ModifiedBinaries Job

View the analysis tasks by navigating to the __FileSystem__ > __5.Activity__ > __Suspicious Activity__ > __FS\_ModifiedBinaries__ > __Configure__ node and select __Analysis__.

__CAUTION:__ Do not modify or deselect the selected analysis task. The analysis task is preconfigured for this job.

![Analysis Tasks for the FS_ModifiedBinaries Job](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/filesystem/activity/suspiciousactivity/modifiedbinariesanalysis.png)

The following analysis task is selected by default:

- Summarize modifications to binaries

  - Creates an interim processing table in the database for use by downstream analysis and report generation
  - Creates the SA\_FS\_ModifiedBinaries\_Summary table accessible under the job’s Results node

In addition to the tables and views created by the analysis task, the FS\_ModifiedBinaries job produces the following pre-configured report:

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| First Time Binary Modifications | This report highlights recent instances where users have modified binaries for the first time. | None | This report is comprised of two elements:   - Bar Chart – Displays first time binary modifications by host - Table – Provides details on modified binaries |
