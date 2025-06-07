# Panzura

Understanding File Activity Monitoring

The Activity Monitor can be configured to monitor the following:

- Ability to collect all or specific file activity for specific values or specific combinations of values

It provides the ability to feed activity data to SIEM products. The following dashboards have been specifically created for Activity Monitor event data:

- For IBM® QRadar®, see the [Netwrix File Activity Monitor App for QRadar](/docs/product_docs/activitymonitor/activitymonitor/siem/qradar/overview.md) for additional information.
- For Splunk®, see the [File Activity Monitor App for Splunk](/docs/product_docs/activitymonitor/activitymonitor/siem/splunk/overview.md) for additional information.

It also provides the ability to feed activity data to other Netwrix products:

- Netwrix Threat Prevention
- Netwrix Threat Manager

## Add Panzura Host

Prior to adding a Panzura host to the Activity Monitor, the prerequisites for the target environment must be met. See the [Panzura CloudFS Monitoring](/docs/product_docs/activitymonitor/config/panzura/activity.md) topic for additional information.

_Remember,_ the Activity Agent must be deployed to a Windows server that acts as a proxy for monitoring the target environment.

Follow the steps to add a Panzura host to be monitored.

__Step 1 –__ In Activity Monitor, go to the Monitored Hosts tab and click Add. The Add New Host window opens.

![Choose Agent](/static/img/product_docs/activitymonitor/activitymonitor/admin/monitoredhosts/add/chooseagent.png)

__Step 2 –__ On the Choose Agent page, select the __Agent__ to monitor the storage device. Click __Next__.

![Add Host](/static/img/product_docs/activitymonitor/activitymonitor/admin/monitoredhosts/add/addhostpanzura.png)

__Step 3 –__ On the Add Host page, select the __Panzura__ radio button and enter the __Panzura filer name__. Click __Next__.

![Panzura Properties](/static/img/product_docs/activitymonitor/activitymonitor/admin/monitoredhosts/add/panzuraoptions.png)

__Step 4 –__ On the Panzura Options page, enter the __Username__, __Password__, and select the __Protocol__ to be used by the Panzura host.

- The different protocols that can be selected are:
  - Auto Detect (Default)
  - HTTPS
  - HTTPS, ignore certificate errors

  Click __HTTPS Options__ to open the Trusted server certificate window.

Click __Next__.

![Customize Certifiacte Verification](/static/img/product_docs/activitymonitor/activitymonitor/admin/monitoredhosts/add/trustedservercertificate.png)

- HTTPS Options – Opens the Trusted server certificate window to customize the certificate verification during a TLS session
  - Import – Click to browse for a trusted server certificate
  - Remove – Click to remove selected trusted server certificate
  - Enable hostname verification – Select this checkbox to ensure that the host name the product connects to matches the name in the certificate (CN name)
  - Click OK to close the window and save the modifications

  Click __Connect__ to connect to the Panzura device. Click __Next__.

![Configure Operations](/static/img/product_docs/activitymonitor/activitymonitor/admin/monitoredhosts/add/panzuraconfigureoperations.png)

__Step 5 –__ On the Configure Operations page, select the __File Operations__ and __Directory Operations__ to be monitored.

- Suppress Microsoft Office operations on temporary files – Filters out events for Microsoft Office temporary files. When Microsoft Office files are saved or edited, many temporary files are created. With this option enabled, events for these temporary files are ignored.

Click __Next__.

![configurebasicoptionspanzura](/static/img/product_docs/activitymonitor/activitymonitor/admin/monitoredhosts/add/configurebasicoptionspanzura.png)

__Step 6 –__ On the Configure Basic Options page, choose which of the following settings to enable:

- Add C:\ to the beginning of the reported file paths - Adds ‘C:\” to file paths to be displayed like a Windows file path:
  - Display example if checked – C:\Folder\file.txt
  - Display example if unchecked – /Folder/file.text
- Report UNC paths - Adds a UNC Path column and a Rename UNC Path column in the generated TSV files
  - This option corresponds to the REPORT\_UNC\_PATH parameter in the INI file. It is disabled by default. The UNC Path is in the following format:
    - For CIFS activity – \\[HOST]\[SHARE]\[PATH]
    - Example CIFS activity – \\ExampleHost\TestShare\DocTeam\Temp.txt
    - For NFS activity – [HOST]:/[VOLUME]/[PATH]
    - Example NFS activity – ExampleHost:/ExampleVolume/DocTeam/Temp.txt
  - When the option is enabled, the added columns are populated when a file is accessed remotely through the UNC Path. If a file is accessed locally, these columns are empty. These columns have also been added as Syslog macros.
- Report operations with millisecond precision - Changes the timestamps of events being recorded in the TSV log file for better ordering of events if multiple events occur within the same second.
  - Access Analyzer 8.1+ is required to use this feature.

Click __Next__.

![wheretologgeneric](/static/img/product_docs/activitymonitor/activitymonitor/admin/monitoredhosts/add/wheretologgeneric.png)

__Step 7 –__ On the Where To Log The Activity page, select whether to send the activity to either a __Log File)__ or __Syslog Server__. Click __Next__.

__NOTE:__ An option must be selected before moving to the next step.

![fileoutput](/static/img/product_docs/activitymonitor/activitymonitor/admin/monitoredhosts/add/fileoutput.png)

__Step 8 –__ If __Log File)__ is selected on the __Where To Log The Activity__ page, the __File Output__ page can be configured.

- Specify output file path – Specify the file path where TSV log files are saved on the agent's server. Click the ellipses button (...) to open the Windows Explorer to navigate to a folder destination. Click __Test__ to test if the path works.
- Period to keep Log files – Log files will be deleted after the period entered as the number of days elapses. The default is 10 days. Use the dropdown to specify whether to keep the Log files for a set amount of Minutes, Hours, or Days.
- This log file is for Access Analyzer – Enable this option to have Access Analyzer collect this monitored host configuration

  ___RECOMMENDED:___ Identify the configuration to be read by Access Analyzer when integration is available.

  - While Activity Monitor can have multiple configurations per host, Access Analyzer can only read one of them.
- Add header to Log files – Adds headers to TSV files. This is used to feed data into Splunk.

Click __Next__.

![syslogoutput](/static/img/product_docs/activitymonitor/activitymonitor/admin/monitoredhosts/add/syslogoutput.png)

__Step 9 –__ If Syslog Server is selected on the __Where To Log The Activity__ page, the Syslog Output page can be configured.

- Syslog server in SERVER[:PORT] format – Type the __Syslog server name__ with a SERVER:Port format in the textbox.
  - The server name can be short name, fully qualified name (FQDN), or IP Address, as long as the organization’s environment can resolve the name format used. The Event stream is the activity being monitored according to this configuration for the monitored host.
- Syslog Protocol – Identify the __Syslog protocol__ to be used for the Event stream. The drop-down menu includes:
  - UDP
  - TCP
  - TLS

  The TCP and TLS protocols add the __Message framing__ drop-down menu. See the [Syslog Tab](/docs/product_docs/activitymonitor/activitymonitor/admin/outputs/syslog.md) topic for additional information.
- The Test button sends a test message to the Syslog server to check the connection. A green check mark or red will determine whether the test message has been sent or failed to send. Messages vary by Syslog protocol:
  - UDP – Sends a test message and does not verify connection
  - TCP/TLS – Sends test message and verifies connection
  - TLS – Shows error if TLS handshake fails

  See the [Syslog Tab](/docs/product_docs/activitymonitor/activitymonitor/admin/outputs/syslog.md) topic for additional information.

Click __Finish__.

![activitymonitorpanzura](/static/img/product_docs/activitymonitor/activitymonitor/admin/monitoredhosts/add/activitymonitorpanzura.png)

The added Panzura host is displayed in the monitored hosts table. Once a host has been added for monitoring, configure the desired ouptuts. See the [Output for Monitored Hosts](/docs/product_docs/activitymonitor/activitymonitor/admin/monitoredhosts/output.md) topic for additional information.

## Host Properties for Panzura

Configuration settings can be edited through the tabs in the host’s Properties window. The configurable host properties are:

- [Panzura Tab](/docs/product_docs/activitymonitor/activitymonitor/admin/monitoredhosts/properties/panzura.md)
- [Inactivity Alerts Tab](/docs/product_docs/activitymonitor/activitymonitor/admin/monitoredhosts/properties/inactivityalerts.md)

See the [Host Properties Window](/docs/product_docs/activitymonitor/activitymonitor/admin/monitoredhosts/properties/overview.md) topic for additional information.
