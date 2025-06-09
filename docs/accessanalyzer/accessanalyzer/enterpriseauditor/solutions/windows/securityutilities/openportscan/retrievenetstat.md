# RetrieveNetstat Job

The RetrieveNetstat job reveals all open ports along with associated executables on targeted systems.

## Queries for the RetrieveNetstat Job

The RetrieveNetstat job is uses the TextSearch Data Collector for the following query:

__CAUTION:__ The query is preconfigured for this job. Never modify the query.

![Queries for the RetrieveNetstat Job](/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/windows/securityutilities/openportscan/remoteopenportquery.png)

The query for the RetrieveNetstat job is:

- Get NETSTAT Command Output Uses the TextSearch Data Collector to read the results of the NETSTAT text file

## Analysis Tasks for the RetrieveNetstat Job

Navigate to the __Windows__ > __Security Utilities__ > __OpenPortScan__ > __RetrieveNetstat__ > __Configure__ node and select __Analysis__ to view the analysis tasks.

__CAUTION:__ Do not modify or deselect the selected analysis task. The analysis task is preconfigured for this job.

![Analysis Tasks for the RetrieveNetstat Job](/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/windows/securityutilities/openportscan/retrievenetstatanalysis.png)

The default analysis tasks are:

- 1. NETSTAT Result – Creates the SA\_RetrieveNetstat\_NETSTAT table accessible under the job’s Results node

In addition to the tables and views created by the analysis tasks, the EX\_DeliveryTimes job produces the following pre-configured report.

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Network Ports  (Open Ports Report) | This job is designed to report on all available ports on the targeted host. It will bring back the results of a ```Netstat -b -a```. | None | This report is comprised of one element:   - Table – Provides details on open ports |
