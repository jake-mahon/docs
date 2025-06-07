# EX\_DBTrending

The EX\_DBTrending Job creates trend projections for mailbox and public folder databases for the entire organization.

## Analysis Tasks for the EX\_DBTrending Job

View the analysis tasks by navigating to the __Exchange__ > __3. Databases__ > __EX\_DBTrending__ > __Configure__ node and selecting __Analysis__.

__CAUTION:__ Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the EX_DBTrending Job](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/exchange/databases/dbtrendinganalysis.png)

The following analysis tasks are selected by default:

- 00. Drop tables – Drops tables from previous runs
- 01. Store size history – Creates the SA\_EX\_DBTrending\_History table, accessible under the job’s Results node
- 02. Trend Mailbox Database – Creates the SA\_EX\_DBTrending\_MBTREND table, accessible under the job’s Results node
- 03. Trend Public Store – Creates the SA\_EX\_DBTrending\_PFTREND table, accessible under the job’s Results node
- 04. Modify Runtime to be Date – Modifies the runtime for the SA\_EX\_DBTrending\_MBTREND table and the SA\_EX\_DBTrending\_PFTREND table, to be set to a month/day/year (mdy) date format

In addition to the tables and views created by the analysis tasks, the EX\_DBTrending Job produces the following pre-configured report:

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Capacity Planning - Databases | This report displays the growth rate trend of your private stores and the growth rate trend of your public stores.  The trend is projected for two months. These reports help identify bad trends in growth on Exchange servers for hard drive space usage is key in avoiding running out of space. | None | This report is comprised of two elements:   - Line Chart – Displays private store trend - Line Chart – Displays public store trend |
