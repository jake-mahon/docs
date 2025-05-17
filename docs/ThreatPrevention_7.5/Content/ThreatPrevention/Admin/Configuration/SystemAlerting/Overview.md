---
sidebar_position: 6889
title: System Alerting Window
---

# System Alerting Window

The System Alerting window is only available to administrators, enabling them to configure and manage all alerting avenues. Click **Configuration** > **Alerts** on the menu to open it.

![Netwrix Threat Prevention System Alerting window](../../../../../../../static/images/ThreatPrevention_7.5/Content/Resources/Images/ThreatPrevention/Alerts/SystemAlerting.png "Netwrix Threat Prevention System Alerting window")

Alerts can be sent to recipients via email, to Windows Event Log, and to SIEM products. Alerts are grouped into five types:

* Security – Provides alerts on things that impact:

  * What data is collected
  * The ability to collect the data
  * Changes to who can access it
* Operations – Provides alerts on internal operations of the product that are not directly influenced by a user
* Configuration – Provides alerts on changes to general configuration settings
* Analytics – Provides alerts when an analytic incident is triggered. These alerts are not available for Event Log alerts.
* Policies – Provides alerts when a policy monitors or blocks an event. These alerts are not available for Event Log alerts.

## Email and SIEM Alert Notifications for Policy Events

Email and SIEM alert notifications for policy events can be enabled through:

* The System Alerting window
* The [Actions Tab](../../Policies/Actions/Overview "Actions Tab") of a policy
* The [Actions Tab](../../Templates/Actions "Actions Tab") of a policy template

In any case, configuration must first be set through the System Alerting window. The [Alerts Interface](../../Alerts/Overview "Alerts Interface") allows you to quickly view recent alerts in a centralized location.

## Email and SIEM Alert Notifications for Analytic Incidents

Email and SIEM alert notifications for Analytic incidents can be configured through the System Alerting window to send Ongoing Attack Alerts. In this case, Threat Prevention sends periodic reminders of an ongoing attack if it continues after the initial notification has been sent.

## View the Alert Notifications

Notifications are generated for the alerts you enable on the the System Alerting window.

* All Security, Configuration, and Operation alert notifications are displayed on the [Alerts Interface](../../Alerts/Overview "Alerts Interface").
* All Analytics incidents are displayed on the [Analytics Interface](../../Analytics/Overview "Analytics Interface").
* All Policies events are displayed on the [Investigate Interface](../../Investigate/Overview "Investigate Interface").

## General Considerations

Below are some considerations:

* Occasionally a Microsoft Security Bulletin impacting LSASS can interfere with the Agent instrumentation resulting in LSASS shutting down. The Agent is configured to monitor for an LSASS process termination shortly after a server reboot. The [LSASS Process Terminated](../../../Troubleshooting/LSASS "LSASS Process Terminated") alert (Operations alert) is triggered in this event and the Agent is stopped. As a result, all monitoring/blocking by that Agent stops. To resolve the issue, either upgrade to the latest version of the Agent or simply upgrade SI.ActiveDirectoryMonitor.dll - commonly known as ADMonitor DLL (recommended). See the [Upgrade ADMonitor](../../Agents/Management/UpgradeADMonitor "Upgrade ADMonitor")topic for additional information.

  ***RECOMMENDED:***  Activate an email notification for the *LSASS process terminated* alert. See the [Enable the 'LSASS Process Terminated' Email Alert](../../../Troubleshooting/LSASS#Enable "Enable the 'LSASS Process Terminated' Email Alert") topic for additional information.
* In addition to the LSASS process termination check, the Agent can be configured for a Safe Mode. In Safe Mode, the Agent records the version of the LSASS DLLs that it hooks into during installation. When an Agent is restarted, it compares the DLL versions with the recorded list. If the versions do not match, the Windows AD Events monitoring module is not loaded. The Agent’s status in the Agents interface changes to Active (Modules Pending), and all Active Directory monitoring/blocking by that Agent stops. The 'Agent Started in AD Monitor pending mode' alert (Operations alert) is triggered in this event. To resolve the issue temporarily, the Threat Prevention administrator should start the pending modules. See the [Start Pending Modules](../../Agents/Management/StartPendingModules "Start Pending Modules") topic for additional information. It is also recommended to upgrade SI.ActiveDirectoryMonitor.dll (commonly known as ADMonitor DLL) to resolve the issue permanently. See the [Upgrade ADMonitor](../../Agents/Management/UpgradeADMonitor "Upgrade ADMonitor") topic for additional information.

  ***RECOMMENDED:*** Activate an email notification for this alert. See the [Enable Agent Started in AD Monitor Pending Mode Email Alert](../../Agents/SafeMode#_How_To_Enable "Enable Agent Started in AD Monitor Pending Mode Email Alert") topic and the [Agent Safe Mode](../../Agents/SafeMode "Agent Safe Mode") topic for additional information.