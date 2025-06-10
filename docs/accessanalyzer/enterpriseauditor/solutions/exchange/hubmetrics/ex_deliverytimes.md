# EX\_DeliveryTimes Job

The EX\_DeliveryTimes Job provides information around organizational and server-level delivery times.

## Analysis Tasks for the EX\_DeliveryTimes Job

View the analysis tasks by navigating to the __Exchange__ > __1. HUB Metrics__ > __EX\_DeliveryTimes__ > __Configure__ node and select __Analysis__.

__CAUTION:__ Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the EX_DeliveryTimes Job](/img/product_docs/accessanalyzer/enterpriseauditor/solutions/exchange/hubmetrics/deliverytimesanalysis.webp)

The following analysis tasks are selected by default:

- 01. Server SLA – Creates the SA\_EX\_DeliveryTimes\_ServerSLA table, accessible under the job’s Results node
- 02. Org SLA – Creates the SA\_EX\_DeliveryTimes\_OrgSLA table, accessible under the job’s Results node
- 03. Org pivot – Creates the SA\_EX\_DeliveryTimes\_OrgDeliveryByCount table, accessible under the job’s Results node
- 04. Org By Volume – Creates the SA\_EX\_DeliveryTimes\_OrgDeliveryByVolume table, accessible under the job’s Results node
- 05. Org Delivery By Count Last 30 Days – Creates the SA\_EX\_DeliveryTimes\_OrgDeliveryByCountLast30 table, accessible under the job’s Results node

In addition to the tables and views created by the analysis tasks, the EX\_DeliveryTimes Job produces the following pre-configured report:

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Delivery Times | This report highlights delivery times overall and by server to identify potential issues with SLAs. | None | This report is comprised of three elements:   - Line Chart – Displays percent of mail delivered by time frame (last 30 days) - Table – Provides details on mail delivered by time frame - Table – Provides details on percentage of mail delivered in under 1 minute |
