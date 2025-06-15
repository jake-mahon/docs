# Hitachi

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

Prior to adding a Hitachi host to the Activity Monitor, the prerequisites for the target environment must be met. See the [Hitachi Activity Auditing Configuration](/versioned_docs/activitymonitor_7.1/config/hitachi/activity.md) topic for additional information.

_Remember,_ the Activity Agent must be deployed to a Windows server that acts as a proxy for monitoring the target environment.

## Add Hitachi NAS Host

Follow the steps to add a Hitachi host to be monitored.

__Step 1 –__ In Activity Monitor, go to the Monitored Hosts tab and click Add. The Add New Host window opens.

![Choose Agent page](/img/versioned_docs/activitymonitor_7.1/activitymonitor/admin/monitoredhosts/add/chooseagent.png)

__Step 2 –__ On the Choose Agent page, select the Agent to monitor the storage device. Click __Next__.

![Add Host page with Hitachi NAS selected](/img/versioned_docs/activitymonitor_7.1/activitymonitor/admin/monitoredhosts/add/addhosthitachi.png)

__Step 3 –__ On the Add Host page, select the Hitachi NAS radio button and enter the __EVS or file system name__ for the device. If desired, add a __Comment__. Click __Next__.

![Hitachi NAS Options page](/img/versioned_docs/activitymonitor_7.1/activitymonitor/admin/monitoredhosts/add/hitachinasoptions.png)

__Step 4 –__ On the Hitachi NAS Options page, enter the __Logs path (UNC)__ and the __Active Log file name__. Then enter the credentials to access the HNAS Log files. Click Connect to validate the connection with the Hitachi device. Click __Next__.

![Configure Operations page for Hitachi NAS](/img/versioned_docs/activitymonitor_7.1/activitymonitor/admin/monitoredhosts/add/configureoperationshitachi.png)

__Step 5 –__ On the Configure Operations page, select the __File Operations__ and __Directory Operations__ to be monitored. Click __Next__.

![Configure Basic Options page for Hitachi NAS](/img/versioned_docs/activitymonitor_7.1/activitymonitor/admin/monitoredhosts/add/configurebasicoptionshitachi.png)

__Step 6 –__ On the Configure Basic Options page, choose which settings to enable. The “Log files” are the activity logs created by the activity agent on the proxy host. Select the desired options:

- Report UNC paths – Adds a UNC Path column and a Rename UNC Path column in the generated TSV files
  - This option corresponds to the REPORT_UNC_PATH parameter in the INI file. It is disabled by default. The UNC Path is in the following format:
    - For CIFS activity – \\[HOST]\[SHARE]\[PATH]
    - Example CIFS activity – \\ExampleHost\TestShare\DocTeam\Temp.txt
    - For NFS activity – [HOST]:/[VOLUME]/[PATH]
    - Example NFS activity – ExampleHost:/ExampleVolume/DocTeam/Temp.txt
  - When the option is enabled, the added columns are populated when a file is accessed remotely through the UNC Path. If a file is accessed locally, these columns are empty. These columns have also been added as Syslog macros.
- Report operations with millisecond precision – Changes the timestamps of events being recorded in the TSV log file for better ordering of events if multiple events occur within the same second

Click __Next__.

![Where To Log The Activity](/img/versioned_docs/activitymonitor_7.1/activitymonitor/admin/monitoredhosts/add/wheretologtheactivity.png)

__Step 7 –__ On the Where To Log The Activity page, select whether to send the activity to either a __Log File)__ or __Syslog Server__. Click __Next__.

![File Output Page](/img/versioned_docs/activitymonitor_7.1/activitymonitor/admin/monitoredhosts/add/fileoutputpage.png)

__Step 8 –__ If __Log File__ is selected on the __Where To Log The Activity__ page, the __File Output__ page can be configured.

- Specify output file path – Specify the file path where log files are saved. Click the ellipses button (__...__) to open the Windows Explorer to navigate to a folder destination. Click __Test__ to test if the path works.
- Period to keep Log files – Log files will be deleted after the period entered number of days entered. The default is 10 days. Use the dropdown to specify whether to keep the Log files for a set amount of Minutes, Hours, or Days.
- This log file is for Enterprise Auditor – Enable this option to have Netwrix Enterprise Auditor collect this monitored host configuration

  ___RECOMMENDED:___ Identify the configuration to be read by Netwrix Enterprise Auditor when integration is available.

  - While Activity Monitor can have multiple configurations per host, Netwrix Enterprise Auditor can only read one of them.
- Add header to Log files – Adds headers to TSV files. This is used to feed data into Splunk.

Click __Next__.

![syslogoutput](/img/versioned_docs/activitymonitor_7.1/activitymonitor/admin/monitoredhosts/add/syslogoutput.png)

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

![Activity Monitor with Hitachi Host added](/img/versioned_docs/activitymonitor_7.1/activitymonitor/admin/monitoredhosts/add/activitymonitorhitachi.png)

The added Hitachi host is displayed in the monitored hosts table. Once a host has been added for monitoring, configure the desired ouptuts. See the [Output for Monitored Hosts](/versioned_docs/activitymonitor_7.1/activitymonitor/admin/monitoredhosts/output.md) topic for additional information.

## Host Properties for Hitachi

Configuration settings can be edited through the tabs in the host’s Properties window. The configurable host properties are:

- [Hitachi NAS Tab](/versioned_docs/activitymonitor_7.1/activitymonitor/admin/monitoredhosts/properties/hitachinas.md)
- [Inactivity Alerts Tab](/versioned_docs/activitymonitor_7.1/activitymonitor/admin/monitoredhosts/properties/inactivityalerts.md)

See the [Host Properties Window](/versioned_docs/activitymonitor_7.1/activitymonitor/admin/monitoredhosts/properties/overview.md) topic for additional information.
