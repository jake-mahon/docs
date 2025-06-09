# EX\_UserOverview Job

The EX\_UserOverview job provides correlation from multiple data collection points to show information for each user about their mailbox size, mailbox access rights, mail flow metrics and remote connectivity to the Exchange environment. These reports provide user impact analysis on the environment.

![EX_UserOverview Job in the Jobs Tree](/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/exchange/mailflowuseroverviewjobstree.png)

Dependencies

The following job groups need to be successfully run prior to this job:

- __.Active Directory Inventory__ Job Group
- __.Entra ID Inventory__ Job Group
- __Exchange__ > __1. HUB Metrics__ Job Group
- __Exchange__ > __2. CAS Metrics__ Job Group
- __Exchange__ > __4. Mailboxes__ > __Permissions__ Job Group
- __Exchange__ > __4.Mailboxes__ > __Sizing__ Job Group
- __Exchange__ > __5. Public Folders__ Job Group

Schedule Frequency

It is recommended to run this job daily after running its dependencies, but it can be scheduled to run as desired.

## Analysis Tasks for the EX\_Mailflow\_UserOverview Job

View the analysis task by navigating to the __Exchange__ > __EX\_UserOverview__ > __Configure__ node and select __Analysis__.

__CAUTION:__ Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the EX_Mailflow_UserOverview Job](/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/exchange/mailflowuseroverviewanalysis.png)

The following analysis tasks are selected by default:

- 01. User Overview – Creates the SA\_EX\_UserOverview\_Permissions table, accessible under the job’s Results node
- 02. Add delegate Information to Overview – Adds Delegates to the SA\_EX\_UserOverview\_Permissions table
- 03. Mailbox Access – Adds Mailbox Rights to the SA\_EX\_UserOverview\_Permissions table
- 04. Send As – Adds Send As Rights to the SA\_EX\_UserOverview\_Permissions table
- 05. Public Folders – Adds Public Folder Permissions to the SA\_EX\_UserOverview\_Permissions table
- 06. DL Membership – Adds DL Membership to the SA\_EX\_UserOverview\_Permissions table
- 07. Mailbox Size – Adds Mailbox Size to the SA\_EX\_UserOverview\_Permissions table
- 08. Permission Listing – Creates a listing of each user and their access rights in the environment
- 09. Rank by Total Permissions – Adds Ranks to the SA\_EX\_UserOverview\_Permissions table
- 10. Summarize User Message Traffic – Creates the SA\_EX\_UserOverview\_MessageTraffic table, accessible under the job’s Results node
- 11. Active Sync Devices – Updates table with User ActiveSync Devices
- 12. Message Traffic Date Ranges – Creates the SA\_EX\_MessageTraffic\_DateRange table, accessible under the job’s Results node
- 13. Summarize User Message Volume – Creates the SA\_EX\_UserOverview\_DataVolume table, accessible under the job’s Results node
- 14. RPC Volume – Updates SA\_EX\_UserOverview\_Datavolume table with RPC volume
- 15. OWA Volume – Updates SA\_EX\_UserOverview\_Datavolume table with OWA volume
- 16. ActiveSync Volume – Updates SA\_EX\_UserOverview\_Datavolume table with ActiveSync volume
- 17. Data Volume Date Ranges – Creates the SA\_EX\_TrafficOverview\_DateRange table, accessible under the job’s Results node

In addition to the tables and views created by the analysis tasks, the EX\_UserOverview job produces the following pre-configured reports:

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Top Users by Message Traffic | This report shows the top users of Exchange based on the past 30 days of message count. | None | This report is comprised of two elements:   - Bar Chart– Displays top users by 30 day message traffic - Table – Provides details on top users by 30 day message traffic |
| Top Users by Message Volume | This report shows the top users of Exchange based on the past 30 days of message volume. All statistics are in megabytes | None | This report is comprised of two elements:   - Bar Chart – Displays top users by message volume - Table – Provides details on top users by message volume |
| Top Users by Permissions  (Exchange User Access) | This report identifies users with a broad range of access across the exchange environment. | None | This report is comprised of three elements:   - Bar Chart – Displays top users by permission count - Table – Provides details on top users by permission count - Table – Provides details on permission listing by user |
