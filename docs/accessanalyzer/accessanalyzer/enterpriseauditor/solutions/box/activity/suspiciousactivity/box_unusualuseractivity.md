# Box\_UnusualUserActivity Job

The Box\_UnusualUserActivity Job highlights unusual download activity for a user on a specific day by analyzing the download activity for a given user and looking for outliers. Unusual download activity could indicate a compromised account or a malicious insider.

## Analysis Tasks for the Box\_UnusualUserActivity Job

Navigate to __Box__ > __1.Activity__ > __Suspicious Activity__ > __Box\_UnusualUserActivity__ > __Configure__ node and select __Analysis__ to view analysis tasks.

__CAUTION:__ Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the Box_UnusualUserActivity Job](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/box/activity/suspiciousactivity/unusualuseractivityanalysis.png)

The following analysis task is selected by default:

- Unusual User Activity – Creates the Box\_UnusualUserActivity table accessible under the job’s Results node

In addition to the tables created by the analysis tasks, the Box\_Content Job produces the following pre-configured report:

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Unusual User Activity | This report provides insight into user activity that deviates from the normal range of expected activity.  This is determined by using historical data for each user. | None | This report is comprised of two elements:   - Bar Chart – Displays top 5 most recent unusual user activity - Table – Provides details on unusual user activity |
