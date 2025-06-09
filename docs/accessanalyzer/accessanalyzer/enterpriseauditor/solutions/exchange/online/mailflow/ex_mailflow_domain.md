# EX\_Mailflow\_Domain Job

The EX\_Mailflow\_Domain job provides information about which domain’s mail-flow is going to and coming from. This job is set to analyze the last 30 days.

## Parameter Configuration

The Configuration section on a Job's overview page allows you to easily modify any customizable parameters used by analysis tasks in the job. See the [Parameter Configuration](/docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/jobs/job/overview.md#Parameter-Configuration) topic for instructions on how to edit parameters on a job overview page.

The EX\_Mailflow\_Domain job has the following configurable parameter:

- Number of days to show in tables and reports

See the [Analysis Tasks for the EX\_Mailflow\_Domain Job](#Analysis-Tasks-for-the-EX_Mailflow_Domain-Job) topic for additional information.

## Analysis Tasks for the EX\_Mailflow\_Domain Job

View the analysis task by navigating to the __Exchange__ > __8. Exchange Online__ > __EX\_Mailflow\_Domain__ > __Configure__ node and select __Analysis__.

__CAUTION:__ Do not modify or deselect the selected analysis task. The analysis task is preconfigured for this job.

![Analysis Tasks for the EX_Mailflow_Domain Job](/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/exchange/online/mailflow/mailflowdomainanalysis.png)

The following analysis task is selected by default:

- Mailflow Domain – Creates the EX\_MailFlow\_Domain table, accessible under the job’s Results node. It provides counts for messages sent and received from external domains.

  - By default, the number of days to show in tables and reports is set to 30. This can be modified. See the [Parameter Configuration](#Parameter-Configuration) topic for additional information.
  - Alternatively, the ```@Days``` parameter can be modified in the SQL Script Editor. See the [Configure the Customizable Parameters in an Analysis Task](/docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/jobs/job/configure/analysiscustomizableparameters.md) topic for additional information

In addition to the tables and views created by the analysis task, the EX\_Mailflow\_Domain job produces the following pre-configured report:

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Top Domains By Count | Displays top domains by recipient count. | None | This report is comprised of two elements:   - Bar Chart – Displays top domains - Table – Provides details on top domains |
