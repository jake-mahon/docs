# Output Types

Once a domain or a host is being monitored the event stream can be sent to multiple outputs. There are three types of outputs:

- File – Creates an activity log as a TSV or JSON file for every day of activity
- Syslog – Sends activity events to the configured SIEM server For Monitored Hosts, this options is also used to send activity events to Netwrix Threat Manager, where supported
- Netwrix Threat Manager (StealthDEFEND) – Sends activity events to Netwrix Threat Manager or receives Active Directory monitoring events from Netwrix Threat Prevention for integration with Netwrix Enterprise Auditor

  __NOTE:__ This output is only available for Monitored Domains

See the [Output for Monitored Domains](/versioned_docs/activitymonitor_7.1/activitymonitor/admin/monitoreddomains/output.md) topic and the [Output for Monitored Hosts](/versioned_docs/activitymonitor_7.1/activitymonitor/admin/monitoredhosts/output.md) topic for information on adding an output.

Output configurations vary based on the type of domain/host selected.

## For Active Directory Domains

Output Properties window has the following tabs:

- [Log Files Tab](/versioned_docs/activitymonitor_7.1/activitymonitor/admin/outputs/logfiles.md), File output only
- [Syslog Tab](/versioned_docs/activitymonitor_7.1/activitymonitor/admin/outputs/syslog.md), Syslog output only
- [Threat Manager Tab](/versioned_docs/activitymonitor_7.1/activitymonitor/admin/outputs/threatmanager.md), Netwrix Threat Manageroutput only

## For Dell Device Hosts

Output Properties window has the following tabs:

- [Account Exclusions Tab](/versioned_docs/activitymonitor_7.1/activitymonitor/admin/outputs/accountexclusions.md)
- [Additional Properties Tab](/versioned_docs/activitymonitor_7.1/activitymonitor/admin/outputs/additionalproperties.md)
- [Log Files Tab](/versioned_docs/activitymonitor_7.1/activitymonitor/admin/outputs/logfiles.md), File output only
- [Operations Tab](/versioned_docs/activitymonitor_7.1/activitymonitor/admin/outputs/operations.md)
- [Path Filtering Tab](/versioned_docs/activitymonitor_7.1/activitymonitor/admin/outputs/pathfiltering.md)
- [Protocols Tab](/versioned_docs/activitymonitor_7.1/activitymonitor/admin/outputs/protocols.md)
- [Syslog Tab](/versioned_docs/activitymonitor_7.1/activitymonitor/admin/outputs/syslog.md), Syslog output only

## For Exchange Online Hosts

Output Properties window has the following tabs:

- [Account Exclusions Tab](/versioned_docs/activitymonitor_7.1/activitymonitor/admin/outputs/accountexclusions.md)
- [Additional Properties Tab](/versioned_docs/activitymonitor_7.1/activitymonitor/admin/outputs/additionalproperties.md)
- Application Exclusions Tab
- [Log Files Tab](/versioned_docs/activitymonitor_7.1/activitymonitor/admin/outputs/logfiles.md), File output only
- Mailbox Exclusions Tab
- [Operations Tab](/versioned_docs/activitymonitor_7.1/activitymonitor/admin/outputs/operations.md)
- [Syslog Tab](/versioned_docs/activitymonitor_7.1/activitymonitor/admin/outputs/syslog.md), Syslog output only

## For Hitachi Hosts

Output Properties window has the following tabs:

- [Account Exclusions Tab](/versioned_docs/activitymonitor_7.1/activitymonitor/admin/outputs/accountexclusions.md)
- [Additional Properties Tab](/versioned_docs/activitymonitor_7.1/activitymonitor/admin/outputs/additionalproperties.md)
- [Log Files Tab](/versioned_docs/activitymonitor_7.1/activitymonitor/admin/outputs/logfiles.md), File output only
- [Operations Tab](/versioned_docs/activitymonitor_7.1/activitymonitor/admin/outputs/operations.md)
- [Path Filtering Tab](/versioned_docs/activitymonitor_7.1/activitymonitor/admin/outputs/pathfiltering.md)
- [Syslog Tab](/versioned_docs/activitymonitor_7.1/activitymonitor/admin/outputs/syslog.md), Syslog output only

## For Linux Hosts

Output Properties window has the following tabs:

- [Account Exclusions Tab](/versioned_docs/activitymonitor_7.1/activitymonitor/admin/outputs/accountexclusions.md)
- [Additional Properties Tab](/versioned_docs/activitymonitor_7.1/activitymonitor/admin/outputs/additionalproperties.md)
- [GID Exclusions Tab](/versioned_docs/activitymonitor_7.1/activitymonitor/admin/outputs/gidexclusions.md)
- [Log Files Tab](/versioned_docs/activitymonitor_7.1/activitymonitor/admin/outputs/logfiles.md), File output only
- [Operations Tab](/versioned_docs/activitymonitor_7.1/activitymonitor/admin/outputs/operations.md)
- [Path Filtering Tab](/versioned_docs/activitymonitor_7.1/activitymonitor/admin/outputs/pathfiltering.md)
- [Protocols Tab](/versioned_docs/activitymonitor_7.1/activitymonitor/admin/outputs/protocols.md)
- [Syslog Tab](/versioned_docs/activitymonitor_7.1/activitymonitor/admin/outputs/syslog.md), Syslog output only

## For Microsoft Entra ID Hosts

Output Properties window has the following tabs:

- [Additional Properties Tab](/versioned_docs/activitymonitor_7.1/activitymonitor/admin/outputs/additionalproperties.md)
- [Log Files Tab](/versioned_docs/activitymonitor_7.1/activitymonitor/admin/outputs/logfiles.md), File output only
- [Operations Tab](/versioned_docs/activitymonitor_7.1/activitymonitor/admin/outputs/operations.md)
- [Syslog Tab](/versioned_docs/activitymonitor_7.1/activitymonitor/admin/outputs/syslog.md), Syslog output only

## For Nasuni Hosts

Output Properties window has the following tabs:

- [Account Exclusions Tab](/versioned_docs/activitymonitor_7.1/activitymonitor/admin/outputs/accountexclusions.md)
- [Additional Properties Tab](/versioned_docs/activitymonitor_7.1/activitymonitor/admin/outputs/additionalproperties.md)
- [Log Files Tab](/versioned_docs/activitymonitor_7.1/activitymonitor/admin/outputs/logfiles.md), File output only
- [Operations Tab](/versioned_docs/activitymonitor_7.1/activitymonitor/admin/outputs/operations.md)
- [Path Filtering Tab](/versioned_docs/activitymonitor_7.1/activitymonitor/admin/outputs/pathfiltering.md)
- [Protocols Tab](/versioned_docs/activitymonitor_7.1/activitymonitor/admin/outputs/protocols.md)
- [Syslog Tab](/versioned_docs/activitymonitor_7.1/activitymonitor/admin/outputs/syslog.md), Syslog output only

## For NetApp Hosts

Output Properties window has the following tabs:

- [Account Exclusions Tab](/versioned_docs/activitymonitor_7.1/activitymonitor/admin/outputs/accountexclusions.md)
- [Additional Properties Tab](/versioned_docs/activitymonitor_7.1/activitymonitor/admin/outputs/additionalproperties.md)
- [Log Files Tab](/versioned_docs/activitymonitor_7.1/activitymonitor/admin/outputs/logfiles.md), File output only
- [Operations Tab](/versioned_docs/activitymonitor_7.1/activitymonitor/admin/outputs/operations.md)
- [Path Filtering Tab](/versioned_docs/activitymonitor_7.1/activitymonitor/admin/outputs/pathfiltering.md)
- [Protocols Tab](/versioned_docs/activitymonitor_7.1/activitymonitor/admin/outputs/protocols.md)
- [Syslog Tab](/versioned_docs/activitymonitor_7.1/activitymonitor/admin/outputs/syslog.md), Syslog output only

## For Nutanix Hosts

Output Properties window has the following tabs:

- [Account Exclusions Tab](/versioned_docs/activitymonitor_7.1/activitymonitor/admin/outputs/accountexclusions.md)
- [Additional Properties Tab](/versioned_docs/activitymonitor_7.1/activitymonitor/admin/outputs/additionalproperties.md)
- [Log Files Tab](/versioned_docs/activitymonitor_7.1/activitymonitor/admin/outputs/logfiles.md), File output only
- [Operations Tab](/versioned_docs/activitymonitor_7.1/activitymonitor/admin/outputs/operations.md)
- [Path Filtering Tab](/versioned_docs/activitymonitor_7.1/activitymonitor/admin/outputs/pathfiltering.md)
- [Protocols Tab](/versioned_docs/activitymonitor_7.1/activitymonitor/admin/outputs/protocols.md)
- [Syslog Tab](/versioned_docs/activitymonitor_7.1/activitymonitor/admin/outputs/syslog.md), Syslog output only

## For Panzura Hosts

Output Properties window has the following tabs:

- [Account Exclusions Tab](/versioned_docs/activitymonitor_7.1/activitymonitor/admin/outputs/accountexclusions.md)
- [Additional Properties Tab](/versioned_docs/activitymonitor_7.1/activitymonitor/admin/outputs/additionalproperties.md)
- [Log Files Tab](/versioned_docs/activitymonitor_7.1/activitymonitor/admin/outputs/logfiles.md), File output only
- [Operations Tab](/versioned_docs/activitymonitor_7.1/activitymonitor/admin/outputs/operations.md)
- [Path Filtering Tab](/versioned_docs/activitymonitor_7.1/activitymonitor/admin/outputs/pathfiltering.md)
- [Syslog Tab](/versioned_docs/activitymonitor_7.1/activitymonitor/admin/outputs/syslog.md), Syslog output only

## For Qumulo Hosts

Output Properties window has the following tabs:

- [Account Exclusions Tab](/versioned_docs/activitymonitor_7.1/activitymonitor/admin/outputs/accountexclusions.md)
- [Additional Properties Tab](/versioned_docs/activitymonitor_7.1/activitymonitor/admin/outputs/additionalproperties.md)
- [Log Files Tab](/versioned_docs/activitymonitor_7.1/activitymonitor/admin/outputs/logfiles.md), File output only
- [Operations Tab](/versioned_docs/activitymonitor_7.1/activitymonitor/admin/outputs/operations.md)
- [Path Filtering Tab](/versioned_docs/activitymonitor_7.1/activitymonitor/admin/outputs/pathfiltering.md)
- [Protocols Tab](/versioned_docs/activitymonitor_7.1/activitymonitor/admin/outputs/protocols.md)
- [Syslog Tab](/versioned_docs/activitymonitor_7.1/activitymonitor/admin/outputs/syslog.md), Syslog output only

## For SharePoint Hosts

Output Properties window has the following tabs:

- [Account Exclusions Tab](/versioned_docs/activitymonitor_7.1/activitymonitor/admin/outputs/accountexclusions.md)
- [Additional Properties Tab](/versioned_docs/activitymonitor_7.1/activitymonitor/admin/outputs/additionalproperties.md)
- [Log Files Tab](/versioned_docs/activitymonitor_7.1/activitymonitor/admin/outputs/logfiles.md), File output only
- [Operations Tab](/versioned_docs/activitymonitor_7.1/activitymonitor/admin/outputs/operations.md)
- [Path Filtering Tab](/versioned_docs/activitymonitor_7.1/activitymonitor/admin/outputs/pathfiltering.md)
- [Syslog Tab](/versioned_docs/activitymonitor_7.1/activitymonitor/admin/outputs/syslog.md), Syslog output only

## For SharePoint Online Hosts

Output Properties window has the following tabs:

- [Additional Properties Tab](/versioned_docs/activitymonitor_7.1/activitymonitor/admin/outputs/additionalproperties.md)
- [Log Files Tab](/versioned_docs/activitymonitor_7.1/activitymonitor/admin/outputs/logfiles.md), File output only
- [Operations Tab](/versioned_docs/activitymonitor_7.1/activitymonitor/admin/outputs/operations.md)
- [Syslog Tab](/versioned_docs/activitymonitor_7.1/activitymonitor/admin/outputs/syslog.md), Syslog output only

## For SQL Server Hosts

Output Properties window has the following tabs:

- [Account Exclusions Tab](/versioned_docs/activitymonitor_7.1/activitymonitor/admin/outputs/accountexclusions.md)
- [Additional Properties Tab](/versioned_docs/activitymonitor_7.1/activitymonitor/admin/outputs/additionalproperties.md)
- [Log Files Tab](/versioned_docs/activitymonitor_7.1/activitymonitor/admin/outputs/logfiles.md), File output only
- [Operations Tab](/versioned_docs/activitymonitor_7.1/activitymonitor/admin/outputs/operations.md)
- [Objects Tab](/versioned_docs/activitymonitor_7.1/activitymonitor/admin/outputs/objects.md)
- [Syslog Tab](/versioned_docs/activitymonitor_7.1/activitymonitor/admin/outputs/syslog.md), Syslog output only

## For Windows File Server Hosts

Output Properties window has the following tabs:

- [Account Exclusions Tab](/versioned_docs/activitymonitor_7.1/activitymonitor/admin/outputs/accountexclusions.md)
- [Additional Properties Tab](/versioned_docs/activitymonitor_7.1/activitymonitor/admin/outputs/additionalproperties.md)
- [Log Files Tab](/versioned_docs/activitymonitor_7.1/activitymonitor/admin/outputs/logfiles.md), File output only
- [Operations Tab](/versioned_docs/activitymonitor_7.1/activitymonitor/admin/outputs/operations.md)
- [Path Filtering Tab](/versioned_docs/activitymonitor_7.1/activitymonitor/admin/outputs/pathfiltering.md)
- [Protocols Tab](/versioned_docs/activitymonitor_7.1/activitymonitor/admin/outputs/protocols.md)
- [Process Exclusions Tab](/versioned_docs/activitymonitor_7.1/activitymonitor/admin/outputs/processexclusions.md)
- [Syslog Tab](/versioned_docs/activitymonitor_7.1/activitymonitor/admin/outputs/syslog.md), Syslog output only
