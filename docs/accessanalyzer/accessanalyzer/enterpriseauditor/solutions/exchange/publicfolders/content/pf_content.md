# PF\_Content Job

The PF\_Content job is comprised of analyses and reports that focus on public folder sizing and content aging.

## Analysis Tasks for the PF\_Content Job

View the analysis tasks by navigating to the __Exchange__ > __5. Public Folders__ > __Content__ > __PF\_Content__ > __Configure__ node and select __Analysis__.

__CAUTION:__ Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the PF_Content Job](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/exchange/publicfolders/content/contentanalysis.png)

The following analysis tasks are selected by default:

- 00.PF Environment Aging by Size – Creates the SA\_PF\_Content\_AgingBySize table, accessible under the job’s Results node
- 01.PF Environment Aging by Count – Creates the SA\_PF\_Content\_AgingByCount table, accessible under the job’s Results node
- 02.Subtree Aging by Size – Creates the SA\_PF\_Content\_SubtreeAgingBySize table, accessible under the job’s Results node
- 03.Subtree Aging by Count – Creates the SA\_PF\_Content\_SubtreeAgingByCount table, accessible under the job’s Results node

In addition to the tables and views created by the analysis tasks, the PF\_Content job produces the following pre-configured reports:

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Aging by File Count  (Public Folder Aging by File Count) | This report highlights content aging within the targeted Public Folder environment, with a focus on the number of files. | None | This report is comprised of three elements:   - Bar Chart – Displays public folder environment aging - Table – Provides details on public folder environment aging by file count - Table – Provides details on aging by sub tree |
| Aging by File Size  (Public Folder Aging by File Size) | This report highlights content aging within the targeted Public Folder environment, with a focus on the size of files. | None | This report is comprised of three elements:   - Column Chart – Displays public folder environment aging by file size - Table – Provides details on public folder environment by file size - Table – Provides details on aging by sub tree |
