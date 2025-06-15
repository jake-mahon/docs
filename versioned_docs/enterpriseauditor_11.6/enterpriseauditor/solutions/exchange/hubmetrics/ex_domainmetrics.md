# EX_DomainMetrics Job

The EX_DomainMetrics Job provides information about where the domain’s mail flow is going to and coming from.

## Analysis Tasks for the EX_DomainMetrics Job

View the analysis tasks by navigating to the __Exchange__ > __1. HUB Metrics__ > __EX_DomainMetrics__ > __Configure__ node and select __Analysis__.

__CAUTION:__ Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the EX_DomainMetrics Job](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/exchange/hubmetrics/domainmetricsanalysis.png)

The following analysis tasks are selected by default:

- 01. External Domain Traffic - Count – Creates the SA_EX_DomainMetrics_Count table, accessible under the job’s Results node
- 02. External Domain Traffic - Volume – Creates the SA_EX_DomainMetrics_Volume table, accessible under the job’s Results node

In addition to the tables and views by the analysis tasks, the EX_DomainMetrics Job produces the following pre-configured reports:

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Top External Domains by Message Count (Top External Domains) | This report identifies which external domains have the largest traffic flow between organizations. | None | This report is comprised of three elements:   - Stacked Bar Chart – Displays access by team - Table – Provides a database access summary - Table – Provides database access details |
| Top External Domains by Message Volume (Top External Domains) | This report identifies which external domains have the largest traffic flow between orgs. | None | This report is comprised of two elements:   - Stacked Bar Chart – Displays top domain by message count (30 days) - Table – Provides details on top domain by message count (30 days) |
