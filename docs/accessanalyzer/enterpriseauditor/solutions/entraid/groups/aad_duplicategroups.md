# AAD\_DuplicateGroups Job

The AAD\_DuplicateGroups Job identifies duplicate groups within Microsoft Entra ID. Duplicate groups contain the same group membership as one another and are suitable candidates for cleanup.

## Analysis Tasks for the AAD\_DuplicateGroups Job

Navigate to the __Jobs__ > __Entra ID__ > __1.Groups__ > __AAD\_DuplicateGroups__ > __Configure__ node and select __Analysis__ to view the analysis tasks.

__CAUTION:__ Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Anaylsis tasks for AAD_DuplicateGroups Job](/img/product_docs/accessanalyzer/enterpriseauditor/solutions/activedirectory/groups/duplicategroupsanalysis.webp)

The default analysis tasks are:

- Identify duplicate groups – Creates the AAD\_DuplicateGroups\_Details table accessible under the job’s Results node

In addition to the tables created by the analysis tasks, the AAD\_DuplicateGroups Job produces the following pre-configured report.

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Duplicate Groups | This report identifies duplicate groups within the audited domains. | None | This report is comprised of one elements:   - Bar Chart – Displays domains by number of groups with duplicates - Table – Provides duplicate groups details - Table – Provides details on domains by number of groups with duplicates |
