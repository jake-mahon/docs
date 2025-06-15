# Oracle_UnusualActivity Job

The Oracle_UnusualActivity job has analysis tasks and reports that use data collected by the 0.Collection Job Group to analyze user activity based on audited actions and identify any outliers based on a modified z-score. Modified z-scores of 3.5 or over are considered possible outliers.

## Analysis Tasks for the Oracle_UnusualActivity Job

Navigate to the __Oracle__ > __2.Activity__ > __Oracle_UnusualActivity__ > __Configure__ node and select __Analysis__ to view the analysis tasks.

__CAUTION:__ Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Selection](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/databases/oracle/activity/jobgroup32.png)

The default analysis tasks are:

- Unusual Hourly Activity Details – Finds user activity outliers based on median hourly activity of all users in that instance. Creates the SA_Oracle_UnusualHourlyActivity_Details table accessible under the job’s Results node.
- Hourly Unusual Activity Summary – Groups unusual activity outliers by instance. Creates the SA_Oracle_UnusualHourlyActivity_Summary table accessible under the job’s Results node.

In addition to the tables and views created by the analysis task, the Oracle_UnusualActivity Job produces the following pre-configured report.

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Unusual Hourly Activity | This report highlights the number of unusual events found per instance, hourly as well as provides details on those events | None | This report is comprised of three elements:   - Bar Chart – Displays unusual user activity - Table – Provides details on number of outliers per instance - Table – Provides details on unusual user activity details |
