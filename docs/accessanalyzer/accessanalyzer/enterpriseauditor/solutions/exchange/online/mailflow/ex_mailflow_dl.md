# EX\_Mailflow\_DL Job

The EX\_Mailflow\_DL job provides information around distribution list usage.

## Analysis Tasks for the EX\_Mailflow\_DL Job

View the analysis tasks by navigating to the __Exchange__ > __8. Exchange Online__ > __EX\_Mailflow\_DL__ > __Configure__ node and select __Analysis__.

__CAUTION:__ Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the EX_Mailflow_DL Job](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/exchange/online/mailflow/mailflowdlanalysis.png)

The following analysis tasks are selected by default:

- Azure Groups Direct Member Count – Creates the EX\_ MailFlow\_DL\_AzureMemberCount table, accessible under the job’s Results node. Provides a direct member count for distribution lists from Azure groups.
- DLs by Count – Creates the EX\_ Mailflow\_DLsByCount table, accessible under the job’s Results node. Lists of all distribution lists and how much mail-flow they have received.

In addition to the tables and views created by the analysis tasks, the EX\_Mailflow\_DL Jjb produces the following pre-configured report:

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Top DLs by Received Count | The top distribution lists by total messages received. | None | This report is comprised of two elements:   - Bar Chart – Displays top five distribution lists by received count - Table – Provides details on the top five distribution lists by received count |
