# Box\_FileMetrics Job

The Box\_FileMetrics Job offers insight into content sizing, staleness, and ownership of files in the Box environment.

__NOTE:__ The staleness threshold can be customized within the __File Metrics Details__ analysis.

## Analysis Tasks for the Box\_FileMetrics Job

Navigate to __Box__ > __2.Content__ > __Box\_FileMetrics__ > __Configure__ node and select __Analysis__ to view analysis tasks.

__CAUTION:__ Most of these analysis tasks should never be modified and never be deselected.

![Analysis Tasks for the Box_FileMetrics Job](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/box/content/filemetricsanalysis.png)

The following analysis tasks are selected by default:

- File Metrics Details – Creates the Box\_FileMetrics\_Details table accessible under the job’s Results node
  - Set to consider content stale after 30 days which is the @STALETHRESHOLD parameter value
  - See the [Customize Analysis Tasks for the Box\_FileMetrics Job](#Customize-Analysis-Tasks-for-the-Box_FileMetrics-Job) topic for additional information.
- File Count by User – Creates the Box\_FileMetrics\_UserFileCount table accessible under the job’s Results node
- Total File Size by User – Creates the Box\_FileMetrics\_UserFileSize table accessible under the job’s Results node
- File Counts by File Extension – Creates the Box\_FileMetrics\_ExtFileCount table accessible under the job’s Results node
- File Size by File Extension – Creates the Box\_FileMetrics\_ExtFileSize table accessible under the job’s Results node

In addition to the tables created by the analysis tasks, the Box\_FileMetrics Job produces the following pre-configured reports:

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Files by Extension | This report summarizes the Box content by file extension. | None | This report is comprised of four elements:   - Pie Chart – Displays top 20 file counts by file extension - Bar Chart – Displays top 5 file size by file extension - Table – Provides details on file counts by file extension - Table – Provides details on file size by file extension |
| Files by User | This report summarizes the Box content by user. | None | This report is comprised of four elements:   - Bar Chart – Displays top 5 file count by user - Bar Chart – Displays top 5 file size by user - Table – Provides details on file count by user - Table – Provides details on file size by user |

### Customize Analysis Tasks for the Box\_FileMetrics Job

The default values for parameters that can be customized are:

| Analysis Task | Customizable Parameter Name | Default Value | Value Indicates |
| --- | --- | --- | --- |
| File Metrics Details | @STALE\_THRESHOLD | 30 | Consider content stale after 30 days |

See the [Configure the Customizable Parameters in an Analysis Task](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/jobs/job/configure/analysiscustomizableparameters.md) topic for instructions on how to modify parameters.
