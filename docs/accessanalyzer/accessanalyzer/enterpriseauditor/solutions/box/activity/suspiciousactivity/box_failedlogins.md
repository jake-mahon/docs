# Box\_FailedLogins Job

The Box\_FailedLogins Job identifies failed logon events that have occurred over the last 30 days. A failed logon can be an indication of security issues such as an attempt to access unauthorized content, or operational issues such as a misconfigured service account.

## Analysis Tasks for the Box\_FailedLogins Job

Navigate to __Box__ > __1.Activity__ > __Suspicious Activity__ > __Box\_FailedLogins__ > __Configure__ node and select __Analysis__.

__CAUTION:__ Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the Box_FailedLogins Job](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/box/activity/suspiciousactivity/failedloginsanalysis.png)

The following analysis tasks are selected by default:

- Failed Logins – Creates the Box\_FailedLogin\_Details table accessible under the job’s Results node
- Failed Login User Summary – Creates an interim processing table in the database for use by downstream analysis and report generation
- Failed Login Summary – Creates an interim processing table in the database for use by downstream analysis and report generation

In addition to the tables created by the analysis tasks, the Box\_FailedLogins Job produces the following pre-configured report:

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Failed Logins | This report highlights the failed login activity occurring in the target Box environment over the last 30 days. | None | This report is comprised of two elements:   - Line Chart – Displays last 30 days summary of failed logins - Table – Provides details on last 30 days of failed login details |
