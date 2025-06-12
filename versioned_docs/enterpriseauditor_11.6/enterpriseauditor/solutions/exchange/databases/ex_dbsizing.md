# EX\_DBSizing Job

The EX\_DBSizing Job provides visibility into current database sizes, growth statistics, and historical sizing information.

## Analysis Tasks for the EX\_DBSizing Job

View the analysis tasks by navigating to the __Exchange__ > __3. Databases__ > __EX\_DBSizing__ > __Configure__ node and select __Analysis__.

__CAUTION:__ Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the EX_DBSizing Job](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/exchange/databases/dbsizinganalysis.png)

The following analysis tasks are selected by default:

- 02. Database Size History – Creates the SA\_EX\_DBSizing\_SizeHist table, accessible under the job’s Results node
- SET HISTORY RETENTION – Sets retention period in months

  - The default is 6 months. It can be modified.
  - See the [Exchange History Retention](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/exchange/hubmetrics/collection/ex_metricscollection.md#Exchange-History-Retention) topic for additional information
- 03. Database details table – Creates the SA\_EX\_DBSizing\_StoreDetails table, accessible under the job’s Results node
- 04. 30 day Database growth table – Creates the SA\_EX\_DBSizing\_30DayGrowth table, accessible under the job’s Results node
- 05. 7 day Database growth table – Creates the SA\_EX\_DBSizing\_7DayGrowth table, accessible under the job’s Results node

The following analysis task deletes table data from data collection and analysis jobs. This analysis task should remain cleared unless specifically needed:

__CAUTION:__ Do not select the __00. Deletes all Stored Data__ option. This analysis task is for troubleshooting and cleanup only. Data will be deleted from the database.

- 01. Deletes all Stored Data

  - See the [Troubleshooting Data Collection](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/exchange/hubmetrics/collection/ex_metricscollection.md#Troubleshooting-Data-Collection) topic for additional information

In addition to the tables and views created by the analysis tasks, the EX\_DBSizing Job produces the following pre-configured reports:

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Database Details (Storage Group Details) | This report provides the details of Mailbox Stores grouped by Server, then Storage Group. This report helps administrators locate Storage Groups that may be growing out of control. If a storage group with very few users is extremely large, further investigation may be required. | None | This report is comprised of two elements:   - Bar Chart – Displays database sizes - Table – Provides details on database sizes |
| Database Growth Statistics | This report displays the top 10 Databases that grew over the last 30 days in pure MB. This report is filtered on the Rank Column for Top 10 and may be modified to fit any desired Top outcome. | None | This report is comprised of four elements:   - Stacked Bar Chart – Displays store size growth - Stacked Bar Chart – Displays WhiteSpace growth - Table – Provides details on store size growth - Table – Provides details on WhiteSpace growth |
| Historical Database Information | This report shows the history of the store size, white space, mailbox count, and hard drive space on all targeted servers. | None | This report is comprised of one element:   - Table – Displays details on historical store information |
| Mailbox Counts by Database | This report graphically displays the number of Mailboxes by Database.  It provides an overall picture of the Exchange Mailbox Environment. Having a clear break down of the number of mailboxes per database allows for better planning of architecture in the future. | None | This report is comprised of two elements:   - Bar Chart – Displays mailbox counts by database - Table – Provides details on mailbox counts by database |
