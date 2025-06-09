# 4.Content > Dropbox\_Content Job

The Dropbox\_Content job provides insight into the type, size, and age of the content within the targeted Dropbox environment. It is dependent on data collected by the 0.Collection job group. This job processes analysis tasks and generates reports.

![4.Content > Dropbox_Content Job in the Jobs Tree](/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/sharepoint/content/contentjobstree.png)

The Dropbox\_Content job is located in the 4.Content job group.

## Parameter Configuration

The Configuration section on a Job's overview page allows you to easily modify any customizable parameters used by analysis tasks in the job. See the [Parameter Configuration](/docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/jobs/job/overview.md#Parameter-Configuration) topic for instructions on how to edit parameters on a job overview page.

The Dropbox\_Content job has the following customizable parameter:

- Days since File Modification before a file is considered stale

See the [Customizable Analysis Tasks for the Dropbox\_Content Job](#Customizable-Analysis-Tasks-for-the-Dropbox_Content-Job) topic for additional information.

## Analysis Tasks for the Dropbox\_Content Job

View the analysis tasks by navigating to the __Jobs__ > __Dropbox__ > __4.Content__ > __Dropbox\_Content__ > __Configure__ node and select __Analysis__.

__CAUTION:__ Most of the analysis tasks should not be modified or deselected. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the Dropbox_Content Job](/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/exchange/publicfolders/content/contentanalysis.png)

- Summarizes content by mimetype, classification – Creates an interim processing table in the database for use by downstream analysis and report generation
- Determines stale data by owner:

  - By default, a stale file has not been modified in the past 365 days. You can modify this analysis task to edit this number of days. See the [Customizable Analysis Tasks for the Dropbox\_Content Job](#Customizable-Analysis-Tasks-for-the-Dropbox_Content-Job) topic for additional information.
  - Creates an interim processing table in the database for use by downstream analysis and report generation
  - Creates the SA\_Dropbox\_StaleData\_OwnerSummary table accessible under the job’s Results node

In addition to the tables created by the analysis tasks which display content details, the Dropbox\_Content job produces the following pre-configured reports.

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Content By Type | This report breaks down Dropbox content by mimetype and classification. | None | This report is comprised of two elements:   - Pie Chart – Displays content types by size - Table – Provides details on all content |
| Stale Content | This report identifies stale content within Dropbox by owner. | Stale Data | This report is comprised of three elements:   - Stacked Bar Chart – Displays data ownership - Table – Provides summary of content - Table – Provides details on owners |

### Customizable Analysis Tasks for the Dropbox\_Content Job

The time frame used to define stale content is set by default to 365 days. This can be modified within the __Determines stale data by owner__ analysis task. The customizable parameter feature enables you to easily set this value.

| Customizable Parameter Name | Default Value | Value Indicates |
| --- | --- | --- |
| @days\_since\_modified | 365 | How many days since the last modified day in order for a file to be considered stale content. |

The parameter can be customized and is listed in a section at the bottom of the SQL Script Editor. See the [Configure the Customizable Parameters in an Analysis Task](/docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/jobs/job/configure/analysiscustomizableparameters.md) topic for additional information.
