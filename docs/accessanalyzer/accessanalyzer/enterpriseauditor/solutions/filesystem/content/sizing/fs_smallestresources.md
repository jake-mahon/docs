# FS\_SmallestResources Job

The FS\_SmallestResources job is designed to report on the smallest resources from targeted file servers.

## Analysis Tasks for the FS\_SmallestResources Job

View the analysis tasks by navigating to the __FileSystem__ > __4.Content__ > __Sizing__ > __FS\_SmallestResources__ > __Configure__ node and select __Analysis__.

__CAUTION:__ Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the FS_SmallestResources Job](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/filesystem/content/sizing/smallestresourcesanalysis.png)

The following analysis tasks are selected by default:

- 1. Smallest Folders Ranked – Creates the SA\_FS\_SmallestResources\_Ranked table accessible under the job’s Results node
- 2. Smallest Shares – Creates the SA\_FS\_SmallestResources\_SharesRanked table accessible under the job’s Results node

In addition to the tables and views created by the analysis tasks, the FS\_SmallestResources job produces the following pre-configured report:

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Smallest Shares | Identifies the smallest shares within the environment. | None | This report is comprised of one element:   - Table – Provides details on the smallest shares |
