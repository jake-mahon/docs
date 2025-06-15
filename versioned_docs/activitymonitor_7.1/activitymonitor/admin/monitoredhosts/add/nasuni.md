# Nasuni

Understanding File Activity Monitoring

The Activity Monitor can be configured to monitor the following:

- Ability to collect all or specific file activity for specific values or specific combinations of values

It provides the ability to feed activity data to SIEM products. The following dashboards have been specifically created for Activity Monitor event data:

- For IBM® QRadar®, see the [Netwrix File Activity Monitor App for QRadar](/versioned_docs/activitymonitor_7.1/activitymonitor/siem/qradar/overview.md) for additional information.
- For Splunk®, see the [File Activity Monitor App for Splunk](/versioned_docs/activitymonitor_7.1/activitymonitor/siem/splunk/overview.md) for additional information.

It also provides the ability to feed activity data to other Netwrix products:

- Netwrix Enterprise Auditor
- Netwrix Threat Prevention
- Netwrix Threat Manager

Prior to adding a Nasuni Edge Appliance host to the Activity Monitor, the prerequisites for the target environment must be met. See the [Nasuni Edge Appliance Activity Auditing Configuration](/versioned_docs/activitymonitor_7.1/config/nasuni/activity.md) topic for additional information.

_Remember,_ the Activity Agent must be deployed to a Windows server that acts as a proxy for monitoring the target environment.

## Add Nasuni Host

Follow the steps to add a Nasuni Edge Appliance host to be monitored.

__Step 1 –__ In Activity Monitor, go to the Monitored Hosts tab and click Add. The Add New Host window opens.

![Choose Agent page](/img/versioned_docs/activitymonitor_7.1/activitymonitor/admin/monitoredhosts/add/chooseagent.png)

__Step 2 –__ On the Choose Agent page, select the __Agent__ to monitor the storage device. Click __Next__.

![Add Host page with Nasuni selected](/img/versioned_docs/activitymonitor_7.1/activitymonitor/admin/monitoredhosts/add/addhostnasuni.png)

__Step 3 –__ On the Add Host page, select the Nasuni radio button and enter the host name or IP Address of the Nasuni Edge Appliance in the Nasuni Filer textbox. If desired, add a __Comment__. Click __Next__.

![Nasuni Options page](/img/versioned_docs/activitymonitor_7.1/activitymonitor/admin/monitoredhosts/add/nasunioptions.png)

__Step 4 –__ On the Nasuni Options page, enter the __API Key Name__ and the __API Key Value__. Click Connect to validate the connection with the Nasuni device.

- Protocol – Select from the following options in the drop-down list:
  - Auto Detect
  - HTTPS
  - HTTPS, ignore certificate errors
- Connect – Click to connect using the selected protocol and validate the connection with NetApp

Click __Next__.

![Trusted Server Certificate popup window](/img/versioned_docs/activitymonitor_7.1/activitymonitor/admin/monitoredhosts/add/trustedservercertificate.png)

- HTTPS Options – Opens the Trusted server certificate window to customize the certificate verification during a TLS session
  - Import – Click to browse for a trusted server certificate
  - Remove – Click to remove the selected trusted server certificate
  - Enable hostname verification – Select this checkbox to ensure that the host name the product connects to matches the name in the certificate (CN name)
- Click OK to close the window and save the modifications.

__Step 5 –__ On the Configure Operations page, select the __File Operations, Directory Operations__, and __Link Operations__ to be monitored. Additional options include:

__CAUTION:__ Enabling the Suppress subsequent Read operations in the same folder option can result in Read events not being monitored.

- Suppress subsequent Read operations in the same folder – Logs only one Read operation when subsequent Read operations occur in the same folder. This option is provided to improve overall performance and reduce output log volume.
- Suppress reporting of File Explorer's excessive directory traversal activity – Filters out events of excessive directory traversal in File Explorer.
- Suppress Microsoft Office operations on temporary files – Filters out events for Microsoft Office temporary files. When Microsoft Office files are saved or edited, many temporary files are created. With this option enabled, events for these temporary files are ignored.

Click __Next__.

![Configure Basic Options page for Nasuni](/img/versioned_docs/activitymonitor_7.1/activitymonitor/admin/monitoredhosts/add/configurebasicoptionsnasuni.png)

__Step 6 –__ On the Configure Basic Options page, choose which settings to enable. The “Log files” are the activity logs created by the activity agent on the proxy host. Select the desired options:

- Report account names – Adds an Account Name column in the generated TSV files
- Add C:\ to the beginning of the reported file paths – Adds ‘C:\” to file paths to be displayed like a Windows file path:
  - Display example if checked – C:\Folder\file.txt
  - Display example if unchecked – /Folder/file.text
- Report UNC paths – Adds a __UNC Path__ column and a __Rename UNC Path__ column in the generated TSV files
  - This option corresponds to the REPORT_UNC_PATH parameter in the INI file. It is disabled by default. The UNC Path is in the following format:
    - For CIFS activity – \\[HOST]\[SHARE]\[PATH]
    - Example CIFS activity – \\ExampleHost\TestShare\DocTeam\Temp.txt
    - For NFS activity – [HOST]:/[VOLUME]/[PATH]
    - Example NFS activity – ExampleHost:/ExampleVolume/DocTeam/Temp.txt
  - When the option is enabled, the added columns are populated when a file is accessed remotely through the UNC Path. These columns have also been added as Syslog macros.
- Report operations with millisecond precision – Changes the timestamps of events being recorded in the TSV log file for better ordering of events if multiple events occur within the same second

Click __Next__.

![Where to log the activity page](/img/versioned_docs/activitymonitor_7.1/activitymonitor/admin/monitoredhosts/add/wheretologgeneric.png)

__Step 7 –__ On the Where To Log The Activity page, select whether to send the activity to either a __Log File)__ or __Syslog Server__. Click __Next__.

![File Output Page](/img/versioned_docs/activitymonitor_7.1/activitymonitor/admin/monitoredhosts/add/fileoutputpage.png)

__Step 8 –__ If __Log File__ is selected on the __Where To Log The Activity__ page, the __File Output__ page can be configured.

- Specify output file path – Specify the file path where log files are saved. Click the ellipses button (__...__) to open the Windows Explorer to navigate to a folder destination. Click __Test__ to test if the path works.
- Period to keep Log files – Log files will be deleted after the period entered number of days entered. The default is 10 days. Use the dropdown to specify whether to keep the Log files for a set amount of Minutes, Hours, or Days.
- This log file is for Enterprise Auditor – Enable this option to have Enterprise Auditor collect this monitored host configuration

  ___RECOMMENDED:___ Identify the configuration to be read by Enterprise Auditor  when integration is available.

  - While Activity Monitor can have multiple configurations per host, Enterprise Auditor can only read one of them.
- Add header to Log files – Adds headers to TSV files. This is used to feed data into Splunk.

Click __Next__.

![Syslog Output page](/img/versioned_docs/activitymonitor_7.1/activitymonitor/admin/monitoredhosts/add/syslogoutputpage.png)

__Step 9 –__ If Syslog Server is selected on the __Where To Log The Activity__ page, the Syslog Output page can be configured.

- Syslog server in SERVER[:PORT] format – Type the __Syslog server name__ with a SERVER:Port format in the textbox.
  - The server name can be short name, fully qualified name (FQDN), or IP Address, as long as the organization’s environment can resolve the name format used. The Event stream is the activity being monitored according to this configuration for the monitored host.
- Syslog Protocol – Identify the __Syslog protocol__ to be used for the Event stream. The drop-down menu includes:
  - UDP
  - TCP
  - TLS

  The TCP and TLS protocols add the Message framing drop-down menu. See the [Syslog Tab](/versioned_docs/activitymonitor_7.1/activitymonitor/admin/outputs/syslog.md) topic for additional information.
- The Test button sends a test message to the Syslog server to check the connection. A green check mark or red will determine whether the test message has been sent or failed to send. Messages vary by Syslog protocol:
  - UDP – Sends a test message and does not verify connection
  - TCP/TLS – Sends test message and verifies connection
  - TLS – Shows error if TLS handshake fails

  See the [Syslog Tab](/versioned_docs/activitymonitor_7.1/activitymonitor/admin/outputs/syslog.md) topic for additional information.

Click __Finish__.

![Activity Monitor with Nasuni host added](/img/versioned_docs/activitymonitor_7.1/activitymonitor/admin/monitoredhosts/add/activitymonitornasuni.png)

The added Nasuni host is displayed in the monitored hosts table. Once a host has been added for monitoring, configure the desired ouptuts. See the [Output for Monitored Hosts](/versioned_docs/activitymonitor_7.1/activitymonitor/admin/monitoredhosts/output.md) topic for additional information.

## Host Properties for Nasuni

Configuration settings can be edited through the tabs in the host’s Properties window. The configurable host properties are:

- [Nasuni Tab](/versioned_docs/activitymonitor_7.1/activitymonitor/admin/monitoredhosts/properties/nasuni.md)
- [Unix IDs Tab](/versioned_docs/activitymonitor_7.1/activitymonitor/admin/monitoredhosts/properties/unixids.md)
- [Inactivity Alerts Tab](/versioned_docs/activitymonitor_7.1/activitymonitor/admin/monitoredhosts/properties/inactivityalerts.md)

See the [Host Properties Window](/versioned_docs/activitymonitor_7.1/activitymonitor/admin/monitoredhosts/properties/overview.md) topic for additional information.
