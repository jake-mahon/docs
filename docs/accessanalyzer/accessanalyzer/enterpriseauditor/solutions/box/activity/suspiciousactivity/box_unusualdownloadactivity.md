# Box\_UnusualDownloadActivity Job

The Box\_UnusualDownloadActivity Job highlights unusual download activity for a user on a specific day by analyzing the download activity for a given user and looking for outliers. Unusual download activity could indicate a compromised account or a malicious insider.

## Analysis Task for the Box\_UnusualDownloadActivity Job

Navigate to __Box__ > __1.Activity__ > __Suspicious Activity__ > __Box\_UnusualDownloadActivity__ > __Configure__ node and select __Analysis__ to view analysis tasks.

__CAUTION:__ Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Task for the Box_UnusualDownloadActivity Job](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/box/activity/suspiciousactivity/unusualdownloadactivityanalysis.png)

The following analysis task is selected by default:

- Unusual Download Activity – Creates the Box\_UnusualDownload\_Details table accessible under the job’s Results node

In addition to the tables created by the analysis tasks, the Box\_UnusualDownloadActivity Job produces the following pre-configured report:

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Unusual Download Activity | This report provides insight into download activity that deviates from the normal range of expected downloads.  This is determined by using historical data for each file. | None | This report is comprised of two elements:   - Bar Chart – Displays top 5 most recent unusual download activity - Table – Provides details on unusual download activity |
