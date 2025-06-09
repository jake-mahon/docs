# EX\_MailboxAccess Job

The EX\_MailboxAccess job provides visibility into access granted to each mailbox in the environment taking into consideration Mailbox Rights, Active Directory Permissions, Delegation, and Folder Permissions.

## Analysis Tasks for the EX\_Mailbox Access Job

View the analysis tasks by navigating to the __Exchange__ > __4. Mailboxes__ > __Permissions__ > __EX\_MailboxAccess__ > __Configure__ node and select __Analysis__.

__CAUTION:__ Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the EX_Mailbox Access Job](/img/product_docs/accessanalyzer/enterpriseauditor/solutions/exchange/mailboxes/permissions/mailboxaccessanalysis.png)

The following analysis tasks are selected by default:

- 00.Regional Send As Rights – Creates the SA\_EX\_MailboxAccess\_SendAs table, accessible under the job’s Results node
- 01.Regional Full Control Rights – Creates an interim processing table in the database for use by downstream analysis and report generation
- 02.Regional Delegates – Creates the SA\_EX\_MailboxAccess\_Delegates table, accessible under the job’s Results node
- 03.Regional Mailbox Permissions – Creates the SA\_EX\_MailboxAccess\_Permissions table, accessible under the job’s Results node
- 04.Regional Delegated Access – Creates the SA\_EX\_MailboxAccess\_DelegatedAccess table, accessible under the job’s Results node
- 05.Regional Mailbox Rights – Creates the SA\_EX\_MailboxAccess\_Rights table, accessible under the job’s Results node
- 06.Missing Anonymous Permissions – Creates the SA\_EX\_MailboxAccess\_MissingAnon table, accessible under the job’s Results node
- 07.Incorrect Default/Anonymous Rights – Creates the SA\_EX\_MailboxAccess\_DefaultAnonIssues table, accessible under the job’s Results node
- 08.Expanded Rights – Creates the SA\_EX\_MailboxAccess\_ExpandedRights table, accessible under the job’s Results node
- 09.Incorrect Default/Anonymous Permissions Summary – Creates the SA\_EX\_MailboxAccess\_DefaultAnonSummary table, accessible under the job’s Results node
- 10.Permissions Summary – Creates the SA\_EX\_MailboxAccess\_PermissionSummary table, accessible under the job’s Results node
- 11.Full Control Summary – Creates the SA\_EX\_MailboxAccess\_FullControlSummary table, accessible under the job’s Results node
- 12.Send As Summary – Creates the SA\_EX\_MailboxAccess\_SendAsSummary table accessible under the job’s Results node

The following analysis tasks is selected to export data to the AIC:

- 13.AIC Import - Export Exchange Permissions – Exports delegates, Send AS rights, mailbox permissions, and Active Directory rights to the Access Information Center

  __NOTE:__ This task sends data to the Access Information Center during future job executions. See the User Reports and the Group Reports topics in the [Netwrix Access Information Center Documentation](https://helpcenter.netwrix.com/category/accessinformationcenter) for additional information.

In addition to the tables and views created by the analysis tasks, the EX\_MailboxAccess Job produces the following pre-configured reports:

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Delegation  (Delegates) | This report identifies users where Delegate/Send on Behalf Of rights have been assigned and which objects the users have been given rights to. | None | This report is comprised of two elements:   - Bar Chart – Displays top users by number of delegates - Table – Provides details on top users by number of delegates |
| Full Control Access  (Mailboxes with Full Control) | This report identifies users with the largest amount of Full Control rights assigned to other individuals. | None | This report is comprised of two elements:   - Bar Chart – Displays top users with full control granted - Table – Provides details on top users with full control granted |
| Incorrect Default And Anon Permissions | This report identifies where Default or Anonymous have any role assignment other than __None__ or __Free/Busy time__. | None | This report is comprised of three elements:   - Bar Chart – Displays top users with incorrect default/anon permissions - Table – Provides details on top users with incorrect default/anon permissions - Table – Provides role details |
| Missing Anonymous Permissions | This report identifies folders where Anonymous permissions are not assigned. | None | This report is comprised of one element:   - Table – Provides details on missing anonymous permissions |
| Send As  (Send-As Rights) | This report identifies which users have the highest number of users with Send-As rights to their mailbox. | None | This report is comprised of three elements:   - Stacked Bar Chart – Displays top users by send as rights granted - Table – Provides details on top users by send as right granted - Table – Provides additional details |
