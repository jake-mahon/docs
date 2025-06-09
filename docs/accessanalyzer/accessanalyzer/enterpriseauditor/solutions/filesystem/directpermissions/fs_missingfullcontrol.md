# FS\_MissingFullControl Job

The FS\_MissingFullControl job is designed to report on resources from targeted file servers that have no Full Control rights granted to it.

## Analysis Tasks for the FS\_MissingFullControl Job

View the analysis tasks by navigating to the __FileSystem__ > __2.Direct Permissions__ > __FS\_MissingFullControl__ > __Configure__ node and select __Analysis__.

__CAUTION:__ Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the FS_MissingFullControl Job](/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/filesystem/directpermissions/missingfullcontrolanalysis.png)

The following analysis tasks are selected by default:

- 1. Determine folders which are missing full control – Creates an interim processing table in the database for use by downstream analysis and report generation
- 2. Summarize folders which are missing full control – Creates an interim processing table in the database for use by downstream analysis and report generation

In addition to the tables and views created by the analysis task, the FS\_MissingFullControl job produces the following pre-configured report:

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Missing Full Control Rights | This report identifies folders within the environment which currently do not have any trustee with Full Control rights, adding to administrative burden. | None | This report is comprised of three elements:   - Bar Chart – Displays shares with missing full control rights - Table – Provides details on folder - Table – Provides details on shares with missing full control rights |
