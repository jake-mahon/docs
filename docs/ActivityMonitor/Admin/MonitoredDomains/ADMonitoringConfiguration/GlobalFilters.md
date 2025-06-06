---
id: globalfilters
title: Global Filters Tab
---

# Global Filters Tab

The Global Filters options are for excluding specific Active Directory and Authentication events from being monitored.

![Global Filters Tab](/img/activitymonitor/admin/GlobalFiltersTab.png)

The filter options are grouped by AD Global Pre-Filters, and Authentication Global Pre-Filters. Check the boxes to activate the filters. To disable for diagnostic purposes, simply uncheck the option(s) and click OK. All Authentication Global Pre-Filters options require configuration before they can be enabled.

When activated, the AD Agent(s) filters out the event data according to configuration defined in the `filters.json` file located in the installation directory.

The configurable options in the Global Filters tab are:

- Exclude ‘Noise’ Events Option
- Exclude AD DNS Events Option
- Exclude Authentication Events from Selected Hosts Option

The ‘Help’ icon (**?**) opens a window that explains the type of “noise” events being filtered.

## Exclude ‘Noise’ Events Option

This option is enabled by default to filter out login and internal low level attributes which can be considered ‘noise’ events. This option can be scoped to include any combination to the following ‘noise’ events:

- Successful AD User Logins – Excludes events with the following attributes where ‘objectClass’ does not equal computer:

  - logonCount
  - lastLogon
  - badPwdCount
  - lastLogonTimestamp
- AD User Logins with Bad Password – Excludes events with the following set of attributes where ‘objectClass’ does not equal computer:

  - badPwdCount
  - badPasswordTime
- AD Computer Logins – Excludes events with the following set of attributes where ‘objectClass’ equals computer:

  - logonCount
  - lastLogon
  - badPwdCount
  - lastLogonTimestamp
  - badPasswordTime
  - badPwdCount
- Low Level Attributes – Excludes the following attributes from event:

  - lmPwdHistory
  - dBCSPwd
  - ntPwdHistory

## Exclude AD DNS Events Option

This option is enabled by default to filter out DNS events. They must meet both of the following conditions to be excluded:

- objectClass = ‘dnsNode’ or ‘dnsZone’
- Contains the ‘dnsRecord’ or ‘dNSTombstoned’ attribute

Usage Tip

## Exclude Authentication Events from Selected Hosts Option

This option is disabled by default as it requires configuration before it can be enabled. Click the selected hosts link to open the Edit Hosts window.

![](/img/activitymonitor/admin/EditHostsExcludeSelectedHosts.png)

The Exclude Authentication Events from selected hosts collection is only accessible for configuration through the Global Filters tab. All three methods of identification for a host (IP Address, NETBIOS host name, or DNS host name) must be known in order to effectively exclude authentication from the host. Identify the host to be excluded in the textbox of the IP Address column and press the Enter or Tab to add another row on the grid. Activity Monitor attempts to discover the NETBIOS host name and the DNS host name associated with the supplied IP Address.

Repeat the process until all hosts for which Authentication event data will not be collected have been entered in the list. Then click **OK**.