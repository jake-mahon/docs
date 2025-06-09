# EX\_MessageSize Job

The EX\_MessageSize Job provides information around the size of sent and received messages.

## Analysis Tasks for the EX\_MessageSize Job

View the analysis task by navigating to the __Exchange__ > __1. HUB Metrics__ > __EX\_MessageSize__ > __Configure__ node and select __Analysis__.

__CAUTION:__ Do not modify or deselect the selected analysis task. The analysis task is preconfigured for this job.

![Analysis Tasks for the EX_MessageSize Job](/img/product_docs/accessanalyzer/enterpriseauditor/solutions/exchange/hubmetrics/messagesizeanalysis.png)

The following analysis task is selected by default:

- 01. Message Size by Server – Creates the SA\_EX\_MessageSize\_HostSummary table accessible under the job’s Results node

In addition to the tables and views created by the analysis task, the EX\_MessageSize Job produces the following pre-configured report:

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Message Size | This report identifies servers which handle the largest mail. | None | This report is comprised of two elements:   - Bar Chart – Displays top servers by average message size (KB) - Table – Provides details on average message size by server (KB) |
