---
sidebar_position: 2667
title: Microsoft Entra ID
---

# Microsoft Entra ID

Understanding Microsoft Entra ID Activity Monitoring

The Activity Monitor can be configured to monitor the following Microsoft Entra ID (formerly Azure AD) changes:

* Report Sign-In events
* Reports over 800 audit events in different categories, including:

|  |  |  |
| --- | --- | --- |

| Administrative Unit | Application Management | Authentication |
| Authorization | Authorization Policy | Contact |
| Device | Device Configuration | Directory Management |
| Entitlement Management | Group Management | Identity Protection |
| Kerberos Domain | Key Management | Label |
| Permission Grant Policy | Policy | Policy Management |
| Resource Management | Role Management | User Management |

* Reports on audit events across different services, including:

|  |  |  |  |
| --- | --- | --- | --- |

| AAD Management UX | Access Reviews | Account Provisioning | Application Proxy |
| Authentication Methods | B2C | Conditional Access | Core Directory |
| Device Registration Service | Entitlement Management | Hybrid Authentication | Identity Protection |
| Invited Users | MIM Service | MyApps | PIM |
| Self-Service Group Management | Self-service Password Management | Terms of Use |  |

It also provides the ability to feed activity data to other Netwrix products:

* Netwrix Access Analyzer (formerly Enterprise Auditor)
* Netwrix Threat Prevention
* Netwrix Threat Manager

Prior to adding aMicrosoft Entra ID host to the Activity Monitor, the prerequisites for the target environment must be met. See the [Microsoft Entra ID Activity Auditing Configuration](../../../../Config/EntraID/Activity "Entra ID Activity Auditing Configuration") topic for additional information.

*Remember,* the Activity Agent must be deployed to a Windows server that acts as a proxy for monitoring the target environment.

## Add Azure Active Directory / Entra ID Host

Follow the steps to add a Microsoft Entra ID host to be monitored.

**Step 1 –** In the Activity Monitor, go to the Monitored Hosts tab and click Add. The Add New Host window opens.

![Add Host - Choose Agent](../../../../../../../static/images/ActivityMonitor_8.0/Content/Resources/Images/ActivityMonitor/AddHost/ChooseAgent.png "Add Host - Choose Agent")

**Step 2 –** On the Choose Agent page, select the Agent to monitor the storage device.

![Add Host page](../../../../../../../static/images/ActivityMonitor_8.0/Content/Resources/Images/ActivityMonitor/AddHost/EntraID/AddHostEntraID.png "Add Host page")

**Step 3 –** On the Add Host page, select the **Azure Active Directory / Entra ID** radio button and enter the Primary domain in the **Domain name** field.

*(Optional)* Enter a comment for the Microsoft Entra ID host.

![](../../../../../../../static/images/ActivityMonitor_8.0/Content/Resources/Images/ActivityMonitor/AddHost/EntraID/EntraIDConnection.png)

**Step 4 –** On the Azure AD / Entra ID Connection page, enter a Tenant ID, Client ID, and Client Secret. Optional add a Region. Then click **Connect** to grant permissions to read the audit log. Click **Open Instruction...** for steps on registering the Activity Monitor with Microsoft Entra ID. Click **Next**.

![Add Host - Azure AD Operations page](../../../../../../../static/images/ActivityMonitor_8.0/Content/Resources/Images/ActivityMonitor/AddHost/EntraID/EntraIDOperations.png)

**Step 5 –** On the Azure AD / Entra ID Operations page, select which audit activity to monitor. Click **Next**.

![](../../../../../../../static/images/ActivityMonitor_8.0/Content/Resources/Images/ActivityMonitor/AddHost/WhereToLogGeneric.png)

**Step 6 –** On the Where To Log The Activity page, select where to send the activity events:

* Log file – Sends to a TSV or JSON file
* Syslog Server – Sends to a configured SIEM system
* Netwrix Threat Manager (StealthDEFEND) – Sends to Netwrix Threat Manager

![](../../../../../../../static/images/ActivityMonitor_8.0/Content/Resources/Images/ActivityMonitor/AddHost/EntraID/FileOutputPage.png)

**Step 7 –** If **Log Files** is selected on the **Where To Log The Activity** page, the **File Output** page can be configured. The configurable options are:

* Specify output file path – Specify the file path where log files are saved. Click the ellipses button (**...**) to open the Windows Explorer to navigate to a folder destination. Click **Test** to test if the path works.
* Period to keep Log files – Log files will be deleted after the period entered number of days entered. The default is 10 days. Use the dropdown to specify whether to keep the Log files for a set amount of Minutes, Hours, or Days.
* This log file is for Netwrix Access Analyzer (formerly Enterprise Auditor) (StealthAUDIT) – Enable this option to have Netwrix Access Analyzer (formerly Enterprise Auditor) collect this monitored host configuration

  ***RECOMMENDED:*** Identify the configuration to be read by Netwrix Access Analyzer (formerly Enterprise Auditor) when integration is available.

  * While the Activity Monitor can have multiple configurations per host, Netwrix Access Analyzer (formerly Enterprise Auditor) can only read one of them.

Click **Next**.

![](../../../../../../../static/images/ActivityMonitor_8.0/Content/Resources/Images/ActivityMonitor/AddHost/EntraID/SyslogOutputPage.png)

**Step 8 –** If Syslog Server is selected on the **Where To Log The Activity** page, the Syslog Output page can be configured. The configurable options are:

* Syslog server in SERVER[:PORT] format – Type the **Syslog server name** with a SERVER:Port format in the textbox.
  * The server name can be short name, fully qualified name (FQDN), or IP Address, as long as the organization’s environment can resolve the name format used. The Event stream is the activity being monitored according to this configuration for the monitored host.
* Syslog Protocol – Identify the **Syslog protocol** to be used for the Event stream. The drop-down menu includes:
  * UDP
  * TCP
  * TLS

  The TCP and TLS protocols add the Message framing drop-down menu. See the [Syslog Tab](../../Outputs/Syslog "Syslog Tab") topic for additional information.
* The Test button sends a test message to the Syslog server to check the connection. A green check mark or red will determine whether the test message has been sent or failed to send. Messages vary by Syslog protocol:
  * UDP – Sends a test message and does not verify connection
  * TCP/TLS – Sends test message and verifies connection
  * TLS – Shows error if TLS handshake fails

  See the [Syslog Tab](../../Outputs/Syslog "Syslog Tab") topic for additional information.

Click **Finish**.

![Azure Active Directory in Activity Monitor](../../../../../../../static/images/ActivityMonitor_8.0/Content/Resources/Images/ActivityMonitor/AddHost/EntraID/EntraIDadded.png "Azure Active Directory in Activity Monitor")

The added Microsoft Entra ID host is displayed in the monitored hosts table. Once a host has been added for monitoring, configure the desired ouptuts. See the [Output for Monitored Hosts](../Output "Output for Monitored Hosts") topic for additional information.

## Host Properties for Microsoft Entra ID

Configuration settings can be edited through the tabs in the host’s Properties window. The configurable host properties are:

* [Connection Tab](../Properties/Connection "Connection Tab")
* [Inactivity Alerts Tab](../Properties/InactivityAlerts "Inactivity Alerts Tab")

See the [Host Properties Window](../Properties/Overview "Host Properties Window") topic for additional information.