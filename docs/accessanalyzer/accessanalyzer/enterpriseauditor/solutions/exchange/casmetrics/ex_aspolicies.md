# EX\_ASPolicies Job

The EX\_ASPolicies Job provides insight into what policies are enabled for which users.

## Queries for the EX\_ASPolicies Job

The EX\_ASPolicies Job uses the ExchangePS Data Collector.

![Queries for the EX_ASPolicies Job](/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/exchange/casmetrics/aspoliciesquery.png)

The following query is included in the EX\_ASPolicies Job.

- Exchange Settings – Collects user policy information

  - By default set to search all mailboxes. However, it can be scoped.
  - See the [Scope the ExchangePS Data Collector](#Scope-the-ExchangePS-Data-Collector) topic for additional information

### Scope the ExchangePS Data Collector

The ExchangePS Data Collector can be scoped if desired.

Follow the steps to scope the ExchangePS Data Collector:

__Step 1 –__ Navigate to job’s __Configure__ node and select __Queries__.

__Step 2 –__ In the Query Selection view, select the Exchange Settings query and click __Query Properties__. The Query Properties window opens.

__Step 3 –__ Select the __Data Source__ tab, and click __Configure__. The ExchangePS Data Collector Wizard opens.

__CAUTION:__ Do not modify other wizard pages. The wizard pages are pre-configured for this job.

![ExchangePS Data Collector Wizard Scope page](/img/product_docs/activitymonitor/config/activedirectory/scope.png)

__Step 4 –__ Navigate to the Scope page, and select the desired scoping method from those available. See the [ExchangePS: Scope](/docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/datacollector/exchangeps/scope.md) topic for additional information.

- Scope by Database – Select the __Scope by Database Target Host: Local Host__ option. Then, click __Next__ and identify the desired databases on the Scope by Databases page. See the [ExchangePS: Scope by DB](/docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/datacollector/exchangeps/scopedatabases.md) topic for additional information.
- Scope by Mailbox – Select the __Scope by Mailbox Target Host: Local Host__ option. Then, click __Next__ and identify the desired mailboxes on the Scope by Mailboxes page. See the [ExchangePS: Scope by Mailboxes](/docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/datacollector/exchangeps/scopemailboxes.md) topic for additional information.
- Scope by Server – Select the __Scope by Server Target Host: Exchange MB Server__ option. The job returns results for specific servers selected in job’s __Configure__ > __Hosts__ node.
- Scope by Public Folder – Select the __Scope by Public Folder__ option. Then, click __Next__ and identify the desired mailboxes on the Scope by Public Folders page. See the [ExchangePS: Scope by Public Folders](/docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/datacollector/exchangeps/scopepublicfolders.md) topic for additional information.
- _Remember,_ the scoping options available vary based on the pre-defined query configurations.

__Step 5 –__ Navigate to the Summary page. Click __Finish__.

The job applies the modification to future job executions.

## Analysis Tasks for the EX\_ASPolicies Job

View the analysis tasks by navigating to the __Exchange__ > __2. CAS Metrics__ > __EX\_ASPolicies__ > __Configure__ node and select __Analysis__.

__CAUTION:__ Do not modify or deselect the selected analysis task. The analysis task is preconfigured for this job.

![Analysis Tasks for the EX_ASPolicies Job](/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/exchange/casmetrics/aspoliciesanalysis.png)

The following analysis task is selected by default:

- 01. Update Nulls – Updates the NULLs in the table to show information

In addition to the tables and views created by the analysis task, the EX\_ASPolicies Job produces the following pre-configured report:

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| User ActiveSync Policies (ActiveSync Settings) | Exchange introduced many ActiveSync policies and settings which can be applied to users. This report identifies which users have these settings enabled. | None | This report is comprised of two elements:   - Pie Chart – Displays ActiveSync Policies - Table – Provides details ActiveSync Policies |
