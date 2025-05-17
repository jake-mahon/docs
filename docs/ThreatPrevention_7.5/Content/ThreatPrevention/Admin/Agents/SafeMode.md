---
sidebar_position: 6767
title: Agent Safe Mode
---

# Agent Safe Mode

To collect real-time activity data, the Agent hooks into (intercepts) specific Microsoft APIs in the LSASS process. Below are some considerations:

* Occasionally a Microsoft Security Bulletin impacting LSASS can interfere with the Agent instrumentation resulting in LSASS shutting down. The Agent is configured to monitor for an LSASS process termination shortly after a server reboot. The [LSASS Process Terminated](../../Troubleshooting/LSASS "LSASS Process Terminated") alert (Operations alert) is triggered in this event and the Agent is stopped. As a result, all monitoring/blocking by that Agent stops. To resolve the issue, either upgrade to the latest version of the Agent or simply upgrade SI.ActiveDirectoryMonitor.dll - commonly known as ADMonitor DLL (recommended). See the [Upgrade ADMonitor](Management/UpgradeADMonitor "Upgrade ADMonitor")topic for additional information.

  ***RECOMMENDED:***  Activate an email notification for the *LSASS process terminated* alert. See the [Enable the 'LSASS Process Terminated' Email Alert](../../Troubleshooting/LSASS#Enable "Enable the 'LSASS Process Terminated' Email Alert") topic for additional information.
* In addition to the LSASS process termination check, the Agent can be configured for a Safe Mode. In Safe Mode, the Agent records the version of the LSASS DLLs that it hooks into during installation. When an Agent is restarted, it compares the DLL versions with the recorded list. If the versions do not match, the Windows AD Events monitoring module is not loaded. The Agent’s status in the Agents interface changes to Active (Modules Pending), and all Active Directory monitoring/blocking by that Agent stops. The 'Agent Started in AD Monitor pending mode' alert (Operations alert) is triggered in this event. To resolve the issue temporarily, the Threat Prevention administrator should start the pending modules. See the [Start Pending Modules](Management/StartPendingModules "Start Pending Modules") topic for additional information. It is also recommended to upgrade SI.ActiveDirectoryMonitor.dll (commonly known as ADMonitor DLL) to resolve the issue permanently. See the [Upgrade ADMonitor](Management/UpgradeADMonitor "Upgrade ADMonitor") topic for additional information.

  ***RECOMMENDED:*** Activate an email notification for this alert. See the [Enable Agent Started in AD Monitor Pending Mode Email Alert](#_How_To_Enable "Enable Agent Started in AD Monitor Pending Mode Email Alert") topic for additional information.

*Remember,* in Safe Mode, Threat Prevention does not terminate the LSASS process; it only prevents the Active Directory monitoring/blocking module from loading on the Agent machine every time key LSASS DLLs are changed.

**NOTE:** Most Microsoft Security Bulletins that alter LSASS will not interfere with Agent instrumentation.

Active Directory monitoring/blocking will not resume until the pending modules are started. To determine if the LSASS changes will conflict with the Agent instrumentation, start the pending modules on one domain controller (see the [Start Pending Modules](Management/StartPendingModules "Start Pending Modules") topic). If there are no issues after five minutes, it is unlikely that the changes are conflicting with the Agent instrumentation. If there are any concerns about the changes, reach out to [[Netwrix Support](https://www.netwrix.com/support.html "Netwrix Support")](mailto:support@stealthbits.com "Navigates to Support@stealthbits.com") for more information. Netwrix tests Microsoft Security Bulletins affecting LSASS prior to their becoming public and sends notifications to Threat Prevention users when an issue is identified.

When the pending modules are started, the recorded versions of the LSASS DLLs the Agent hooks into are overwritten with the current versions.

## Enable Agent Started in AD Monitor Pending Mode Email Alert

Follow the steps to enable email notifications for the Agent Started in AD Monitor pending mode Operations alert.

**NOTE:** These steps require the Threat Prevention administrator role. They also assume that the [System Alerting Window](../Configuration/SystemAlerting/Overview "System Alerting Window") has been configured and email alerts have been enabled.

**Step 1 –** Clck **Configuration** > **Alerts** on the menu. The Netwrix Threat Prevention System Alerting window opens.

**Step 2 –** On the Email tab, click **Configure**.

**Step 3 –** Create a message profile for the Safe Mode notification with the recipient(s) to be notified when the AD modules are pending. See the [Create Message Profiles](../Configuration/SystemAlerting/Email#_Create_Message_Profiles "Create Message Profiles") topic for additional information.

![Netwrix Threat Prevention System Alerting window](../../../../../../static/images/ThreatPrevention_7.5/Content/Resources/Images/ThreatPrevention/Alerts/ADPendingModeAlert.png "Netwrix Threat Prevention System Alerting window")

**Step 4 –** Select **Events**, and then **Operations** on the left. Check the **Agent Started in AD Monitor pending mode** event alert and select the message profile you created in Step 3 from the drop-down menu to assign it to the alert. See the [Email Tab](../Configuration/SystemAlerting/Email "Email Tab") topic for additional information.

**Step 5 –** Ensure that the email alerts are **Enabled** and click **OK**.

When the Agent Started in AD Monitor pending mode event alert is triggered, an email notification is sent to the recipient(s) in the selected message profile.