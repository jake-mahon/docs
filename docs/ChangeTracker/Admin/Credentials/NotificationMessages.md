---
id: notificationmessages
title: Notification Messages Explained
---

# Notification Messages Explained

Review the tables below to see the detailed explanation of the notification and event messages.

Notification Messages

| Notification Type | Notification Trigger |
| --- | --- |
| Agent Error | Connection issues, mostly seen with agentless devices that can not be discovered. |
| Audit (Template Change) | When a new template is uploaded or modified. |
| System Error | When an event's details have been tampered with, for example, a failed hash check. |
| Audit (Device Admin) | A device was registered, deleted or group membership changed. |
| Audit (Device Details Change) | Audit of a change in agent machine name, IP address, version, etc. |

Event Messages

| Event Message | Description |
| --- | --- |
| Your backup scheduled at is complete. | This notification message is generated when a scheduled backup finishes successfully. Backup types vary from full backups, to individual sections of the software i.e. Planned Changes/Events. |
| Your backup scheduled at encountered an error. (+ error here) | This notification message is generated when a scheduled backup finishes with errors. The error message will be displayed within the events description – this information may be used by Netwrix Support to resolve the issue. |
| Your restore scheduled at is complete. | This notification message is generated when a scheduled restore finishes successfully. Restore types vary from full backups, to individual sections of the software i.e. Planned Changes/Events. |
| Your restore scheduled at encountered an error. (+ error here) | This notification message is generated when a scheduled restore finishes with errors. The error message will be displayed within the events description – this information may be used by Netwrix Support to resolve the issue. |
| Scheduled Query document size exceeds 16mb. Consider altering the saved query schedule or filter options to produce fewer results. [ ] | This notification message is generated when a report collated from the results of a saved query is too large. The end user will need to reconfigure their queries schedule to include less days or to include fewer event types – being more specific will produce fewer results. |
| Moved events from failover event queue to primary event queue. | This notification message is generated when events from a temporary failover queue are moved back to the primary queue. A temporary queue is dynamically created for redundancy purpose if the primary queue fails. |
| Moved backgrounds tasks from repository to queue | This notification message is generated when background tasks from a temporary failover queue are moved back to the primary queue. A temporary queue is dynamically created for redundancy purpose if the primary queue fails. |
| Event Pipeline component down [ ]. | This notification message is generated when a component fails. A component is a Change Tracker repository or queue. |
| Event Pipeline component is back up [ ] | This notification message is generated when a component recovers. A component is a Change Tracker™ repository or queue. |
| Error disaggregating rule result data for event , task | This notification message is generated when a rule from a compliance report errors during presentation to the events list. |
| | This notification message is generated when a change is made to a device, altering a file or setting which was included in the agent’s original baseline. Events will appear for all trackers which are enabled through the configuration template attached to the device – FIM, file content, registry, audit policy changes etc. |
| | This notification message is generated when a value that is included in the configuration template is missing on the machine being monitored. For example: a tracked registry key is missing on a 2012 R2 Server (Tracked registry value missing: ScreenSaveActive on HKEY\_USERS ) |
| | This notification message is generated when changes are made to a registered agent’s details. For example: Device is added/removed from a group, the agents IP address changes or the agent’s version number changes. |
| started | This notification message is generated when a scheduled planned change window opens. |
| ended | This notification message is generated when a scheduled planned change window closes. |
| Device Online: | This notification message is generated when a device starts communicating with the Change Tracker . |
| Device Offline: | This notification message is generated when a device stops communicating with the Change Tracker . |
| New device registered: | This notification message is generated when a device which hasn’t been seen before, registers with the Change Tracker server. This message should only be seen once per device. |
| Tests syslog message from Change Tracker server | This notification message is generated when a test syslog message is sent from the Change Tracker server to your specified syslog collector. This test is there to ensure that events captured by Change Tracker can be forwarded on successfully. |