# Recommended Configurations for the 4. Mailboxes Job Group

Dependencies

This job group requires the following items to be enabled:

- Exchange Access Auditing is enabled in the Exchange environment

  - This is required for the Logons Job Group. See the [Enable Exchange Mailbox Access Auditing](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/requirements/solutions/exchange/powershell.md#Enable-Exchange-Mailbox-Access-Auditing) topic for additional information.

The following job groups need to be successfully run:

- __.Active Directory Inventory__ Job Group
- __.Entra ID Inventory__ Job Group
- __Exchange__ > __1. HUB Metrics__ Job Group (Optional)
  - Provides data on mailbox metrics for on-premises Exchange environments and the last time a distribution list received mail
- __Exchange__ > __2. CAS Metrics__ Job Group (Optional)
  - Provides data on mailbox staleness for on-premises Exchange environments
- __Exchange__ > __8. Exchange Online__ > __Mailflow__ Job Group (Optional)
  - Provides data on distribution list metrics for Exchange Online environments and the last time a distribution list received mail

Targeted Hosts

The __Features__ > __EX\_Features__ job, __Logons__ > __0.Collection__ job group, __Permissions__ > __0.Collection__ job group, and __Sizing__ > __0.Collection__ job group have been set for Exchange on-premises to run against:

- Local host

This Job Group can target a custom host list for Exchange Online instead of targeting Exchange on-premises. However, do not try to target both types of environments.

Connection Profile

A Connection Profile must be set directly on the collection jobs within each sub-job group:

- __Features__ > __EX\_Features__ Job
- __Logons__ > __0.Collection__ > __EX\_MailboxActivity__ Job
- __Permissions__ > __0. Collection__:

  - EX\_Delegates Job
  - EX\_MBRights Job
  - EX\_Perms Job
  - EX\_SendAs Job
- __Sizing__ > __0. Collection__ > __EX\_MBSize__ Job

See the [Exchange PowerShell Permissions](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/requirements/solutions/exchange/powershell.md) topic for the required permissions. See the [Exchange Custom Connection Profile & Host List](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/datacollector/exchangeps/configurejob.md) topic for additional information.

Schedule Frequency

It is not recommended to run these jobs at the 4. Mailboxes job group level. The Logons sub-job group and Sizing job group have been designed to run daily. The Features sub-job group and Permissions job group have been designed to run weekly. See the table for recommended times:

| Job Group Name | Frequency | Recommended Time |
| --- | --- | --- |
| Logons | Daily | 4 AM |
| Sizing | Daily | 7 PM |
| Features | Weekly | No recommendation, run when desired |
| Permissions | Weekly | Fridays at 6 PM |

History Retention

History retention should not be enabled on this job group. History is kept through analysis tasks. Modify the following analysis tasks to customize the amount of history which is kept:

| Job Name | Analysis Task Name | Default History |
| --- | --- | --- |
| EX\_DMailboxLogons | SET HISTORY RETENTION | 6 Months |
| EX\_MailboxSizes | SET HISTORY RETENTION | 6 Months |

Query Configuration

The 4. Mailboxes job group is designed to be run with the default query configurations. However, the following queries can be modified:

- __Features__ > __EX\_Features__ Job – __User Mailbox Settings__ Query
- __Logons__ > __0.Collection__ > __EX\_MailboxActivity__ Job – __Exchange Mailbox Logons__ Query
- __Permissions__ > __0. Collection__ > __EX\_Delegates__ Job – __Delegates__ Query
- __Permissions__ > __0. Collection__ > __EX\_MBRights__ Job – __Mailbox Rights__ Query
- __Permissions__ > __0. Collection__ > __EX\_Perms__ Job – __Exchange Mailbox Permissions__ Query
- __Permissions__ > __0. Collection__ > __EX\_SendAs__ Job – __Send AS - Rights__ Query
- __Sizing__ > __0. Collection__ > __EX\_MBSize__ Job – __Mailbox Counts and Sizes__ Query

No other queries should be modified.

Analysis Configuration

The 4. Mailboxes job group should be run with the default analysis configurations.

__CAUTION:__ Most of these analysis tasks are preconfigured and should not be modified or deselected. There are some tasks that are deselected by default, as they are for troubleshooting purposes.

The following analysis tasks should not be deselected, but their parameters can be modified:

- __Logons__ > __EX\_MailboxLogons__ Job – __03.SET HISTORY RETENTION__ Analysis Task
- __Sizing__ > __EX\_MailboxSizes__ Job – __02.SET HISTORY RETENTION__ Analysis Task

The following analysis tasks is enabled to send Exchange mailbox permission data to the   
Netwrix Access Information Center:

- __Permissions__ > __EX\_MailboxAccess__ Job – __13.AIC Import - Export Exchange Permissions__ Analysis Task

Workflow

__Step 1 –__ Set a Connection Profile on the jobs that run data collection.

__Step 2 –__ Schedule the jobs. The following are the recommended schedules:

- Daily Execution

  - Schedule the __Logons__ job group to run daily
  - Schedule the __Sizing__ job group to run daily
- Weekly Execution

  - Schedule the __Features__ job group to run weekly
  - Schedule the __Permissions__ job group to run weekly

__Step 3 –__ Review the reports generated by the jobs.
