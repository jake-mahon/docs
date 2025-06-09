# EX\_SDDResults Job

The EX\_SDDResults job contains analyses and reports to provide insight into the types of sensitive data that is located within Exchange mailboxes and public folders within the environment.

## Analysis Tasks for the EX\_SDDResults Job

View the analysis tasks by navigating to the __Exchange__ > __7. Sensitive Data__ > __EX\_SDDResults__ > __Configure__ node and select __Analysis__.

__CAUTION:__ Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the EX_SDDResults Job](/img/product_docs/accessanalyzer/enterpriseauditor/solutions/exchange/sensitivedata/sddresultsanalysis.png)

The following analysis tasks are selected by default:

- Mailbox Details – Creates the EX\_SDDResults\_MailboxDetails table, accessible under the job’s Results node. Provides details regarding the number of matches that are found per item in each mailbox.
- Mailbox Summary – Creates the EX\_SDDResults\_MailboxSummary table, accessible under the job’s Results node. Summarizes the items found with matches.
- Public Folder Details – Creates the EX\_SDDResults\_PublicFolderDetails table, accessible under the job’s Result node. Provides details regarding the number of matches that are found per item in each public folder.
- Public Folder Mailstore Summary – Creates the EX\_SDDResults\_PublicFolderSummary table, accessible under the job’s Results node. Summarizes the items found with matches.
- Enterprise Summary – Creates the EX\_SDDResults\_EnterpriseSummary table, accessible under the job’s Results node. Summarizes the type and amount of sensitive content found in the environment.

The following analysis task deletes table data from data collection and analysis jobs. This analysis task should remain cleared unless specifically needed:

__CAUTION:__ Do not select the __Deletes all Stored Data__ option. This analysis task is for troubleshooting and cleanup only. Data will be deleted from the database.

- Deletes all Stored Data - LEAVE UNCHECKED – Clears all historical SDD data

  - See the [Troubleshooting Data Collection](/docs/accessanalyzer/enterpriseauditor/solutions/exchange/hubmetrics/collection/ex_metricscollection.md#troubleshooting-data-collection) topic for additional information

In addition to the tables and views created by the analysis tasks, the EX\_SDDResults Job produces the following pre-configured reports.

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Enterprise Summary  (Sensitive Content) | This report identifies the type and amount of sensitive content found in scanned mailboxes. | None | This report is comprised of two elements:   - Bar Chart – Displays exceptions by item count - Table – Provides a criteria summary |
| Mailbox Details  (Mailboxes with Sensitive Content) | This report identifies the mailboxes containing sensitive data. | None | This report is comprised of three elements:   - Bar Chart – Displays top mailboxes by sensitive item count - Table – Provides mailbox details - Table – Provides details on top mailboxes by sensitive item count |
| Public Folder Details  (Public Folders with Sensitive Content) | This report identifies the public folders containing sensitive data. | None | This report is comprised of three elements:   - Bar Chart – Displays top folders by sensitive data item count - Table – Provides public folder details - Table – Provides details on top folders by sensitive item count |
