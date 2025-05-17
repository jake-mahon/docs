---
sidebar_position: 5546
title: Recommended Configurations for the 4. Mailboxes Job Group
---

# Recommended Configurations for the 4. Mailboxes Job Group

Dependencies

This job group requires the following items to be enabled:

* Exchange Access Auditing is enabled in the Exchange environment

  * This is required for the Logons Job Group. See the [Enable Exchange Mailbox Access Auditing](../../../Requirements/Solutions/Exchange/PowerShell#Enable3 "Enable Exchange Mailbox Access Auditing") topic for additional information.

The following job groups need to be successfully run:

* **.Active Directory Inventory** Job Group
* **.Entra ID Inventory** Job Group
* **Exchange** > **1. HUB Metrics** Job Group (Optional)
  * Provides data on mailbox metrics for on-premises Exchange environments and the last time a distribution list received mail
* **Exchange** > **2. CAS Metrics** Job Group (Optional)
  * Provides data on mailbox staleness for on-premises Exchange environments
* **Exchange** > **8. Exchange Online** > **Mailflow** Job Group (Optional)
  * Provides data on distribution list metrics for Exchange Online environments and the last time a distribution list received mail

Targeted Hosts

The **Features** > **EX\_Features** job, **Logons** > **0.Collection** job group, **Permissions** > **0.Collection** job group, and **Sizing** > **0.Collection** job group have been set for Exchange on-premises to run against:

* Local host

This Job Group can target a custom host list for Exchange Online instead of targeting Exchange on-premises. However, do not try to target both types of environments.

Connection Profile

A Connection Profile must be set directly on the collection jobs within each sub-job group:

* **Features** > **EX\_Features** Job
* **Logons** > **0.Collection** > **EX\_MailboxActivity** Job
* **Permissions** > **0. Collection**:

  * EX\_Delegates Job
  * EX\_MBRights Job
  * EX\_Perms Job
  * EX\_SendAs Job
* **Sizing** > **0. Collection** > **EX\_MBSize** Job

See the [Exchange PowerShell Permissions](../../../Requirements/Solutions/Exchange/PowerShell "Exchange PowerShell Permissions") topic for the required permissions. See the [Exchange Custom Connection Profile & Host List](../../../Admin/DataCollector/ExchangePS/ConfigureJob "Exchange Custom Connection Profile & Host List") topic for additional information.

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

* **Features** > **EX\_Features** Job – **User Mailbox Settings** Query
* **Logons** > **0.Collection** > **EX\_MailboxActivity** Job – **Exchange Mailbox Logons** Query
* **Permissions** > **0. Collection** > **EX\_Delegates** Job – **Delegates** Query
* **Permissions** > **0. Collection** > **EX\_MBRights** Job – **Mailbox Rights** Query
* **Permissions** > **0. Collection** > **EX\_Perms** Job – **Exchange Mailbox Permissions** Query
* **Permissions** > **0. Collection** > **EX\_SendAs** Job – **Send AS - Rights** Query
* **Sizing** > **0. Collection** > **EX\_MBSize** Job – **Mailbox Counts and Sizes** Query

No other queries should be modified.

Analysis Configuration

The 4. Mailboxes job group should be run with the default analysis configurations.

**CAUTION:** Most of these analysis tasks are preconfigured and should not be modified or deselected. There are some tasks that are deselected by default, as they are for troubleshooting purposes.

The following analysis tasks should not be deselected, but their parameters can be modified:

* **Logons** > **EX\_MailboxLogons** Job – **03.SET HISTORY RETENTION** Analysis Task
* **Sizing** > **EX\_MailboxSizes** Job – **02.SET HISTORY RETENTION** Analysis Task

The following analysis tasks is enabled to send Exchange mailbox permission data to the   
Netwrix Access Information Center:

* **Permissions** > **EX\_MailboxAccess** Job – **13.AIC Import - Export Exchange Permissions** Analysis Task

Workflow

**Step 1 –** Set a Connection Profile on the jobs that run data collection.

**Step 2 –** Schedule the jobs. The following are the recommended schedules:

* Daily Execution

  * Schedule the **Logons** job group to run daily
  * Schedule the **Sizing** job group to run daily
* Weekly Execution

  * Schedule the **Features** job group to run weekly
  * Schedule the **Permissions** job group to run weekly

**Step 3 –** Review the reports generated by the jobs.