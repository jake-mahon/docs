# Stale > FS\_StaleContent Job

The FS\_StaleContent job is designed to report on stale content information from targeted file servers.

![Stale > FS_StaleContent Job in the Jobs Tree](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/filesystem/content/stalejobstree.png)

The FS\_StaleContent job is located in the Stale job group.

## Analysis Tasks for the FS\_StaleContent Job

View the analysis tasks by navigating to the __FileSystem__ > __4.Content__ > __Stale__ > __FS\_StaleContent__ > __Configure__ node and select __Analysis__.

__CAUTION:__ Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the FS_StaleContent Job](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/filesystem/content/stalecontentanalysis.png)

The following analysis tasks are selected by default:

- 1. Create Aging View – Creates the SA\_ENG\_FSAA\_FolderAging table accessible under the job’s Results node
- 2. Enterprise Summary – Creates the SA\_FS\_StaleContent\_EnterpriseSummary table accessible under the job’s Results node
- 3. Share Summary – Creates the SA\_FS\_StaleContent\_ShareSummary table accessible under the job’s Results node
- 4. Host Summary – Creates the SA\_FS\_StaleContent\_HostSummary table accessible under the job’s Results node

In addition to the tables created by the analysis tasks, the FS\_StaleContent job produces the following pre-configured reports:

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Hosts with Stale Content  (Servers with Stale Content) | Identifies servers with stale content. Staleness is determined by files' last modified date. For these reports, by default, a file is considered stale after a year. Counts are based on Shares and Folders which contain any stale content. | None | This report is comprised of three elements:   - Pie Chart – Displays enterprise aging summary - Stacked Bar Chart– Displays aging summary by host - Table – Provides details on servers with stale content |
| Shares with Stale Content | Identifies shares with stale content. Staleness is determined by files' last modified date. For these reports, by default, a file is considered stale after a year. Counts are based on Shares and Folders which contain any stale content. | None | This report is comprised of two elements:   - Bar Chart – Displays share summary - Table – Provides details on shares |
