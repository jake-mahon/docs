# Box\_Users\_MostActive Job

The Box\_Users\_MostActive Job analyzes user activity to highlight the most active and potentially stale users within the environment based on the last 30 days of activity events.

## Analysis Tasks for the Box\_Users\_MostActive Job

Navigate to __Box__ > __1.Activity__ > __Usage Statistics__ > __Box\_Users\_MostActive__ > __Configure__ node and select __Analysis__ to view analysis tasks.

__CAUTION:__ Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the Box_Users_MostActive Job](/img/product_docs/accessanalyzer/enterpriseauditor/solutions/box/activity/usagestatistics/usersmostactiveanalysis.png)

The default analysis task is:

- Most Active Users – Creates the Box\_Users\_MostActive table accessible under the job’s Results node

In addition to the tables created by the analysis tasks, the Box\_Users\_MostActive Job produces the following pre-configured report:

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Most Active Users | This report highlights the most active users in the target Box environment over the last 30 days. It also lists stale users that have had no activity in the last 30 days. | None | This report is comprised of three elements:   - Bar Chart – Displays last 30 days of the most active users - Table – Provides summary of last 30 days of the most active users |
