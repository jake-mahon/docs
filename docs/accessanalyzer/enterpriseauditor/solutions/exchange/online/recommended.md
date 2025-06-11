# Recommended Configurations for the 8. Exchange Online Job Group

Dependencies

The following Access Analyzer job groups need to be successfully run:

- .Active Directory Inventory
- .Entra ID Inventory

Targeted Hosts

The Mailflow job group uses Remote PowerShell through the ExchangePS Data Collector and the PowerShell Data Collector. The host list needs to be set to one of the following:

- Local Host
- Custom Host List for Exchange Online

  - The host list should include the tenant name of the Microsoft Entra tenant used to connect to Exchange Online. See the [Exchange Online Host List](/docs/accessanalyzer/enterpriseauditor/admin/datacollector/exchangeps/configurejob.md#exchange-online-host-list) topic for additional information.

Connection Profile

See the [Exchange PowerShell Permissions](/docs/accessanalyzer/enterpriseauditor/requirements/solutions/exchange/powershell.md) topic for the EX\_Mailflow job requirements.

Additionally, the Exchange Online job group needs access to the following Exchange Online URLs to perform collection:

- Exchange PowerShell – https://ps.outlook.com/PowerShell
- Autodiscover – https://autodiscover-s.outlook.com/autodiscover/autodiscover.svc
- EWS – https://outlook.office365.com/EWS/Exchange.asmx

See the [Exchange Custom Connection Profile & Host List](/docs/accessanalyzer/enterpriseauditor/admin/datacollector/exchangeps/configurejob.md) topic for additional information.

Schedule Frequency

This job group has been designed to run daily.

___RECOMMENDED:___ Run this job group at 1:00 AM.

Query Configuration

The 8. Exchange Online job group is designed to be run with the default query configurations. However, the following queries can be modified:

- __Mailflow__ > __0. Collection__ > __EX\_Mailflow__ Job – __MailFlow__ Query
- __EX\_ASPolicies__ Job – __Exchange Settings__ Query

No other queries should be modified.

Analysis Configuration

The 8. Exchange Online job group should be run with the default analysis configurations. Most of these analysis tasks are preconfigured and should never be modified or deselected. There are some that are deselected by default, as they are for troubleshooting purposes.

The following analysis tasks should not be deselected, but their parameters can be modified:

- __Mailflow__ > __0. Collection__ > __EX\_Mailflow__ Job – __03. SET HISTORY RETENTION__ Analysis Task
- __Mailflow__ > __EX\_Mailflow\_Domain__ Job – __Mailflow Domain__ Analysis Task
- __Mailflow__ > __EX\_Mailflow\_Mailbox__ Job – __User Mailboxes By Message Count__ Analysis Task
- __Mailflow__ > __EX\_Mailflow\_Mailbox__ Job – __User Mailboxes by Message Size__ Analysis Task
- __Mailflow__ > __EX\_Mailflow\_OrgOverview__ Job – __Organization Overview__ Analysis Task

Workflow

__Step 1 –__ Set the host on the EX\_Mailflow job.

- The __Mailflow__ > __0. Collection__ > __EX\_Mailflow__ job needs to be set to run against one of the following:

  - Local Host
  - Custom Host List

__Step 2 –__ Set a Connection Profile on the jobs which run data collection.

__Step 3 –__ Schedule the 8. Exchange Online job group to run as desired.
