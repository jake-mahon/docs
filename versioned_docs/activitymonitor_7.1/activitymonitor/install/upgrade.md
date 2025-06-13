# Upgrade Procedure

The purpose of this chapter is to provide the basic steps needed for upgrading Activity Monitor. See the [Software Compatibility & Versions](/versioned_docs/activitymonitor_7.1/activitymonitor/install/overview.md#software-compatibility--versions) section for information on integration with other Netwrix products.

## Considerations

While it is strongly recommended to match the versions of both the console and the activity agent, activity agent(s) V3.1+ can be managed by Activity Monitor Console V4.0+. Older versions of activity agents will be limited in monitoring capability until upgraded.

The installation and configuration paths for Netwrix Activity Monitor 7.1 have been updated from Activity Monitor 7.0. See the [Netwrix Activity Monitor 7.1 Paths](https://helpcenter.netwrix.com/bundle/z-kb-articles-salesforce/page/kA04u00000111AOCAY.html) article for additional information.

## Activity Monitor Upgrade Procedure

Follow the steps to upgrade from the Netwrix Activity Monitor V7.0 to Netwrix Activity Monitor 7.1.

_Prerequisite_ – Ensure console and agent servers have .NET Framework 4.7.2 installed.

__Step 1 –__ Install the Activity Monitor 7.1 on the same machine where the V7.0 console resides following the instructions in the [Install Application](/versioned_docs/activitymonitor_7.1/activitymonitor/install/application.md) section.

__CAUTION:__ Launch the Activity Monitor Console and navigate to the Agents tab.

___RECOMMENDED:___ Update the activity agents in batches to ensure continuity of monitoring.

__Step 2 –__ Select the activity agent(s) to be upgraded. The Windows Ctrl-select option can be used to select multiple activity agents. Then click Upgrade.

__Step 3 –__ (_Optional_) Deploy AD agents to monitor domains.

__NOTE:__ Upgraded licenses are required to monitor SharePoint and Active Directory search events when upgrading to Activity Monitor 7.1.

The selected activity agents are updated to V7.1. If a Threat Prevention Agent is also installed on the Windows server for monitoring file systems, the Monitored Hosts tab identifies the host as being “Managed by Threat Prevention”, and that ‘monitored host’ is not editable. However, multiple outputs can be configured for hosts. Add the Windows host to the Monitored Hosts tab to monitor file system for outputs to Enterprise Auditor, Threat Manager, and/or SIEM products.
