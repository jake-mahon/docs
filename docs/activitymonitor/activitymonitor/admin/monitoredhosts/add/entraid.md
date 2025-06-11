# Microsoft Entra ID

Understanding Microsoft Entra ID Activity Monitoring

The Activity Monitor can be configured to monitor the following Microsoft Entra ID (formerly Azure AD) changes:

- Report Sign-In events
- Reports over 800 audit events in different categories, including:

|  |  |  |
| --- | --- | --- |
| Administrative Unit | Application Management | Authentication |
| Authorization | Authorization Policy | Contact |
| Device | Device Configuration | Directory Management |
| Entitlement Management | Group Management | Identity Protection |
| Kerberos Domain | Key Management | Label |
| Permission Grant Policy | Policy | Policy Management |
| Resource Management | Role Management | User Management |

- Reports on audit events across different services, including:

|  |  |  |  |
| --- | --- | --- | --- |
| AAD Management UX | Access Reviews | Account Provisioning | Application Proxy |
| Authentication Methods | B2C | Conditional Access | Core Directory |
| Device Registration Service | Entitlement Management | Hybrid Authentication | Identity Protection |
| Invited Users | MIM Service | MyApps | PIM |
| Self-Service Group Management | Self-service Password Management | Terms of Use |  |

It also provides the ability to feed activity data to other Netwrix products:

- Netwrix Access Analyzer (formerly Enterprise Auditor)
- Netwrix Threat Prevention
- Netwrix Threat Manager

Prior to adding aMicrosoft Entra ID host to the Activity Monitor, the prerequisites for the target environment must be met. See the [Microsoft Entra ID Activity Auditing Configuration](/docs/activitymonitor/config/entraid/activity.md) topic for additional information.

_Remember,_ the Activity Agent must be deployed to a Windows server that acts as a proxy for monitoring the target environment.

## Add Azure Active Directory / Entra ID Host

Follow the steps to add a Microsoft Entra ID host to be monitored.

__Step 1 –__ In the Activity Monitor, go to the Monitored Hosts tab and click Add. The Add New Host window opens.

![Add Host - Choose Agent](/img/product_docs/activitymonitor/activitymonitor/admin/monitoredhosts/add/chooseagent.webp)

__Step 2 –__ On the Choose Agent page, select the Agent to monitor the storage device.

![Add Host page](/img/product_docs/activitymonitor/activitymonitor/admin/monitoredhosts/add/addhostentraid.webp)

__Step 3 –__ On the Add Host page, select the __Azure Active Directory / Entra ID__ radio button and enter the Primary domain in the __Domain name__ field.

_(Optional)_ Enter a comment for the Microsoft Entra ID host.

![entraidconnection](/img/product_docs/activitymonitor/activitymonitor/admin/monitoredhosts/add/entraidconnection.webp)

__Step 4 –__ On the Azure AD / Entra ID Connection page, enter a Tenant ID, Client ID, and Client Secret. Optional add a Region. Then click __Connect__ to grant permissions to read the audit log. Click __Open Instruction...__ for steps on registering the Activity Monitor with Microsoft Entra ID. Click __Next__.

![Add Host - Azure AD Operations page](/img/product_docs/activitymonitor/activitymonitor/admin/monitoredhosts/add/entraidoperations.webp)

__Step 5 –__ On the Azure AD / Entra ID Operations page, select which audit activity to monitor. Click __Next__.

![wheretologgeneric](/img/product_docs/activitymonitor/activitymonitor/admin/monitoredhosts/add/wheretologgeneric.webp)

__Step 6 –__ On the Where To Log The Activity page, select where to send the activity events:

- Log file – Sends to a TSV or JSON file
- Syslog Server – Sends to a configured SIEM system
- Netwrix Threat Manager (StealthDEFEND) – Sends to Netwrix Threat Manager

![fileoutputpage](/img/product_docs/activitymonitor/activitymonitor/admin/monitoredhosts/add/fileoutputpage.webp)

__Step 7 –__ If __Log Files__ is selected on the __Where To Log The Activity__ page, the __File Output__ page can be configured. The configurable options are:

- Specify output file path – Specify the file path where log files are saved. Click the ellipses button (__...__) to open the Windows Explorer to navigate to a folder destination. Click __Test__ to test if the path works.
- Period to keep Log files – Log files will be deleted after the period entered number of days entered. The default is 10 days. Use the dropdown to specify whether to keep the Log files for a set amount of Minutes, Hours, or Days.
- This log file is for Netwrix Access Analyzer (formerly Enterprise Auditor) (StealthAUDIT) – Enable this option to have Netwrix Access Analyzer (formerly Enterprise Auditor) collect this monitored host configuration

  ___RECOMMENDED:___ Identify the configuration to be read by Netwrix Access Analyzer (formerly Enterprise Auditor) when integration is available.

  - While the Activity Monitor can have multiple configurations per host, Netwrix Access Analyzer (formerly Enterprise Auditor) can only read one of them.

Click __Next__.

![syslogoutputpage](/img/product_docs/activitymonitor/activitymonitor/admin/monitoredhosts/add/syslogoutputpage.webp)

__Step 8 –__ If Syslog Server is selected on the __Where To Log The Activity__ page, the Syslog Output page can be configured. The configurable options are:

- Syslog server in SERVER[:PORT] format – Type the __Syslog server name__ with a SERVER:Port format in the textbox.
  - The server name can be short name, fully qualified name (FQDN), or IP Address, as long as the organization’s environment can resolve the name format used. The Event stream is the activity being monitored according to this configuration for the monitored host.
- Syslog Protocol – Identify the __Syslog protocol__ to be used for the Event stream. The drop-down menu includes:
  - UDP
  - TCP
  - TLS

  The TCP and TLS protocols add the Message framing drop-down menu. See the [Syslog Tab](/docs/activitymonitor/activitymonitor/admin/outputs/syslog.md) topic for additional information.
- The Test button sends a test message to the Syslog server to check the connection. A green check mark or red will determine whether the test message has been sent or failed to send. Messages vary by Syslog protocol:
  - UDP – Sends a test message and does not verify connection
  - TCP/TLS – Sends test message and verifies connection
  - TLS – Shows error if TLS handshake fails

  See the [Syslog Tab](/docs/activitymonitor/activitymonitor/admin/outputs/syslog.md) topic for additional information.

Click __Finish__.

![Azure Active Directory in Activity Monitor](/img/product_docs/activitymonitor/activitymonitor/admin/monitoredhosts/add/entraidadded.webp)

The added Microsoft Entra ID host is displayed in the monitored hosts table. Once a host has been added for monitoring, configure the desired ouptuts. See the [Output for Monitored Hosts](/docs/activitymonitor/activitymonitor/admin/monitoredhosts/output.md) topic for additional information.

## Host Properties for Microsoft Entra ID

Configuration settings can be edited through the tabs in the host’s Properties window. The configurable host properties are:

- [Connection Tab](/docs/activitymonitor/activitymonitor/admin/monitoredhosts/properties/connection.md)
- [Inactivity Alerts Tab](/docs/activitymonitor/activitymonitor/admin/monitoredhosts/properties/inactivityalerts.md)

See the [Host Properties Window](/docs/activitymonitor/activitymonitor/admin/monitoredhosts/properties/overview.md) topic for additional information.
