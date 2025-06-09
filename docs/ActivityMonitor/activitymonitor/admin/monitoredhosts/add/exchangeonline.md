# Exchange Online

Prior to adding an Exchange Online host to the Activity Monitor, the prerequisites for the target environment must be met. See the [Exchange Online Activity Auditing Configuration](/docs/activitymonitor/config/exchangeonline/activity.md) topic for additional information.

_Remember,_ the Activity Agent must be deployed to a Windows server that acts as a proxy for monitoring the target environment.

## Add Exchange Online Host

Follow the steps to add an Exchange Online host to be monitored.

__Step 1 –__ In the Activity Monitor, go to the Monitored Hosts tab and click Add. The Add New Host window opens.

![Add Host - Choose Agent](/img/product_docs/activitymonitor/activitymonitor/admin/monitoredhosts/add/chooseagent.png)

__Step 2 –__ On the Choose Agent page, select the Agent to monitor the storage device.

![Add Host Page](/img/product_docs/activitymonitor/activitymonitor/admin/monitoredhosts/add/addexchangeonline.png)

__Step 3 –__ On the Add Host page, select the Exchange Online radio button and enter the domain name.

_(Optional)_ Enter a comment for the Exchange Online host.

![Azure AD Connection - Exchange Online](/img/product_docs/activitymonitor/activitymonitor/admin/monitoredhosts/add/connection.png)

__Step 4 –__ On the Azure AD / Entra ID Connection page, enter Tenant ID, Client ID, Client Secret, and Region(optional) then click __Connect__ to verify the connection.. Click __Open Instruction...__ for steps on registering the Activity Monitor with Microsoft Azure. Click __Next__.

![operations](/img/product_docs/activitymonitor/activitymonitor/admin/monitoreddomains/admonitoringconfiguration/operations.png)

__Step 5 –__ On the Exchange Online Operations page, configure the options found in the following tabs:

- Admin Activity
- Mailbox Audit
- DLP
- Other

These options can be configured again in a Exchange Online host's properties window. See the [Operations Tab](/docs/activitymonitor/activitymonitor/admin/outputs/operations.md) for additional information. Click __Next__.

![Mailboxes to Exclude](/img/product_docs/activitymonitor/activitymonitor/admin/monitoredhosts/add/mailboxesexclude.png)

__Step 6 –__ Click __Add Mailbox__ to display the Select User dialog box. Specify the mailboxes that will be filtered during collection. Click __Next__.

![usersexclude](/img/product_docs/activitymonitor/activitymonitor/admin/monitoredhosts/add/usersexclude.png)

__Step 7 –__ Click __Add User__ to display the Select User dialog box. Specify the user or email that will be filtered during collection. Click __Next__.

![Where to log activity - Exchange Online](/img/product_docs/activitymonitor/activitymonitor/admin/monitoredhosts/add/wheretologactivity.png)

__Step 8 –__ On the Where To Log The Activity page, select whether to send the activity to either a __Log File__ or __Syslog Server__.

![File Output - Exchange Online](/img/product_docs/activitymonitor/activitymonitor/admin/monitoredhosts/add/fileoutput.png)

__Step 9 –__ If __Log Files__ is selected on the __Where To Log The Activity__ page, the __File Output__ page can be configured. The configurable options are:

- Specify output file path – Specify the file path where log files are saved. Click the ellipses button (__...__) to open the Windows Explorer to navigate to a folder destination. Click __Test__ to test if the path works.
- Period to keep Log files – Log files will be deleted after the period entered number of days entered. The default is 10 days. Use the dropdown to specify whether to keep the Log files for a set amount of Minutes, Hours, or Days.
- This log file is for Netwrix Access Analyzer (formerly Enterprise Auditor) (StealthAUDIT) – Enable this option to have Netwrix Access Analyzer (formerly Enterprise Auditor) collect this monitored host configuration

  ___RECOMMENDED:___ Identify the configuration to be read by Netwrix Access Analyzer (formerly Enterprise Auditor) when integration is available.

  - While the Activity Monitor can have multiple outputs per host, Netwrix Access Analyzer (formerly Enterprise Auditor) can only read one of them.

Click __Next__.

![Syslog Output - Exchange Online](/img/product_docs/activitymonitor/activitymonitor/admin/monitoredhosts/add/syslogoutput.png)

__Step 10 –__ If Syslog Server is selected on the __Where To Log The Activity__ page, the Syslog Output page can be configured. The configurable options are:

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

![Exchange Online in Activity Monitor](/img/product_docs/activitymonitor/activitymonitor/admin/monitoredhosts/add/exchangeonline.png)

The added Exchange Online host is displayed in the monitored hosts table. Once a host has been added for monitoring, configure the desired outputs. See the [Output for Monitored Hosts](/docs/activitymonitor/activitymonitor/admin/monitoredhosts/output.md) topic for additional information.

## Host Properties for Exchange Online

Configuration settings can be edited through the tabs in the host’s Properties window. The configurable host properties are:

- [Connection Tab](/docs/activitymonitor/activitymonitor/admin/monitoredhosts/properties/connection.md)
- [Inactivity Alerts Tab](/docs/activitymonitor/activitymonitor/admin/monitoredhosts/properties/inactivityalerts.md)

See the [Host Properties Window](/docs/activitymonitor/activitymonitor/admin/monitoredhosts/properties/overview.md) topic for additional information.
