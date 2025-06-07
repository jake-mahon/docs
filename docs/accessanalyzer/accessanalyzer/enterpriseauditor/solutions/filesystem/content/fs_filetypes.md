# File Types > FS\_FileTypes Job

The FS\_FileTypes job is designed to report on file type information from targeted file servers.

![File Types > FS_FileTypes Job in the Jobs Tree](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/filesystem/content/filetypesjobstree.png)

The FS\_FileTypes job is located in the File Types job group.

## Analysis Tasks for the FS\_FileTypes Job

View the analysis tasks by navigating to the __FileSystem__ > __4.Content__ > __File Types__ > __FS\_FileTypes__ > __Configure__ node and select __Analysis__.

__CAUTION:__ Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the FS_FileTypes Job](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/filesystem/content/filetypesanalysis.png)

The following analysis tasks are selected by default:

- 1. Create File Types View – Creates the SA\_ENG\_FSAA\_FileTypeView view accessible under the job’s Results node
- 2. Ranked File Extensions – Creates the SA\_FS\_FileTypes\_ExtensionsRanked table accessible under the job’s Results node
- 3. File Types by Share – Creates the SA\_FS\_FileTypes\_TypesByShare table accessible under the job’s Results node

In addition to the tables and views created by the analysis tasks, the FS\_FileTypes job produces the following pre-configured report:

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| File Types | This report identifies what types of files are located within your distributed file system and how much space they are taking up in gigabytes. | None | This report is comprised of two elements:   - Pie Chart – Displays file types extensions ranked - Table – Provides details on file types by share |
