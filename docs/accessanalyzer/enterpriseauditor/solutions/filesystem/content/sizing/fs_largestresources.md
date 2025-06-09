# FS\_LargestResources Job

The FS\_LargestResources job is designed to report on the largest resources from targeted file servers.

## Analysis Tasks for the FS\_LargestResources Job

View the analysis tasks by navigating to the __FileSystem__ > __4.Content__ > __Sizing__ > __FS\_LargestResources__ > __Configure__ node and select __Analysis__.

__CAUTION:__ Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the FS_LargestResources Job](/img/product_docs/accessanalyzer/enterpriseauditor/solutions/filesystem/content/sizing/largestresourcesanalysis.png)

The following analysis tasks are selected by default:

- 1. Largest Folders Ranked – Creates the SA\_FS\_LargestResources\_Ranked table accessible under the job’s Results node
- 2. Largest Shares – Creates the SA\_FS\_LargestResources\_SharesRanked table accessible under the job’s Results node

In addition to the tables and views created by the analysis tasks, the FS\_LargestResources job produces the following pre-configured reports:

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Largest Folders | This report identifies the largest folders found. | None | This report is comprised of two elements:   - Bar Chart – Displays the top 5 largest folders - Table – Provides details on largest folders |
| Largest Shares | This report identifies the largest shares within the environment. | None | This report is comprised of two elements:   - Bar Chart – Displays the top 5 largest shares - Table – Provides details on the largest resources |
