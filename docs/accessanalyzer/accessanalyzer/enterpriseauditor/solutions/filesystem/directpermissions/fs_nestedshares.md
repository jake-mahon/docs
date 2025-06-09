# FS\_NestedShares Job

The FS\_NestedShares job is is designed to report on nested shares that have been granted direct permissions from targeted file servers.

## Analysis Tasks for the FS\_NestedShares Job

View the analysis tasks by navigating to the __FileSystem__ > __2.Direct Permissions__ > __FS\_NestedShares__ > __Configure__ node and select __Analysis__.

__CAUTION:__ Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the FS_NestedShares Job](/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/filesystem/directpermissions/nestedsharesanalysis.png)

The following analysis tasks are selected by default:

- 1. Identify Nested Shares

  - Creates an interim processing table in the database for use by downstream analysis and report generation
  - Creates the SA\_FS\_NestedShares\_ShareDetails table accessible under the job’s Results node
- 2. Create function to compare permissions
- 3. Analyze Permission Details

  - Creates the SA\_FS\_NestedShares\_SharePermissions table accessible under the job’s Results node
  - Updates the SA\_FS\_NestedShares\_ShareDetails table accessible under the job’s Results node
- 4. Host Summary – Creates the SA\_FS\_NestedShares\_HostSummary table accessible under the job’s Results node

In addition to the tables and views created by the analysis tasks, the FS\_NestedShares job produces the following pre-configured report:

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Nested Shares | This report identifies where folders are exposed through multiple shares. This may cause issues with unwanted access. | None | This report is comprised of two elements:   - Bar Chart – Displays hosts by folder count - Table – Provides details on shares |
