# FS_FileTags Job

The FS_FileTags job is designed to report on resources classified with metadata file tags from targeted file servers.

## Analysis Tasks for the FS_FileTags Job

View the analysis tasks by navigating to the __FileSystem__ > __4.Content__ > __Tags__ > __FS_FileTags__ > __Configure__ node and select __Analysis__.

__CAUTION:__ Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the FS_FileTags Job](../../../../../../../static/img/product_docs/accessanalyzer/enterpriseauditor/solutions/filesystem/content/tags/filetagsanalysis.webp)

The following analysis task is selected by default:

- List file tag details – Creates the SA_FS_FileTags_Details table accessible under the job’s Results node

In addition to the tables and views created by the analysis task, the FS_FileTags job produces the following pre-configured report:

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| File Tags | This report provides details on tags applied to files. This information is rolled up by folder, and summarized at the enterprise level. | None | This report is comprised of three elements:   - Pie Chart – Displays enterprise tag summary - Table– Provides details on tag details by folder - Table – Provides details on tags by file count |
