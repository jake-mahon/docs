# SharePoint

Understanding SharePoint Activity Monitoring

The Activity Monitor can be configured to monitor the following SharePoint changes:

- Document is checked out
- Document is checked in
- Object is deleted
- Object is updated
- Child object is deleted
- Child object is undeleted
- Child object is moved
- Search operation is performed
- Security group is created
- Security group is deleted
- Security principal is added to a security group
- Security principal is removed from a security group

It also provides the ability to feed activity data to other Netwrix products:

- Netwrix Access Analyzer (formerly Enterprise Auditor)

Prior to adding a SharePoint host to the Activity Monitor, the prerequisites for the target environment must be met. See the [SharePoint On-Premise Activity Auditing Configuration](/docs/product_docs/activitymonitor/config/sharepoint/activity.md) topic for additional information.

_Remember,_ the Activity Agent must be deployed to the SharePoint Application server that hosts the “Central Administration” component of the SharePoint farm.

## Add SharePoint Host

Follow the steps to add a SharePoint host to be monitored.

__Step 1 –__ In Activity Monitor, go to the Monitored Hosts tab and click Add. The Add New Host window opens.

![Choose Agent page](/static/img/product_docs/activitymonitor/activitymonitor/admin/monitoredhosts/add/chooseagent.png)

__Step 2 –__ On the Choose Agent page, select the Agent deployed on the SharePoint Application server that hosts the “Central Administration” component. Click __Next__.

![Add Host page with SharePoint selected](/static/img/product_docs/activitymonitor/activitymonitor/admin/monitoredhosts/add/addhostsharepoint.png)

__Step 3 –__ On the Add Host page, select the SharePoint radio button. If desired, add a Comment. Click __Next__.

![Add Host - SharePoint Options page](/static/img/product_docs/activitymonitor/activitymonitor/admin/monitoredhosts/add/sharepointoptions.png)

__Step 4 –__ On the SharePoint Options page, choose to audit all sites or scope the monitoring to specific site(s):

- Enable auditing on selected site collections – Enabling this option will ensure that auditing is enabled for all monitored site collections with periodic checks
- Audit all sites – Leave textbox for URLs blank

  Scope to specific sites – List URLs for sites to be monitored in the textbox. List should be semicolon separated.

  - Examples – http://sharpoint.local/sites/marketing, http://sharepoint.local/sites/personal/user1
  - Then enter the credentials configured as the provisioned activity monitoring account.
- Enter valid __User Name__ and __Password__ for a domain account with local administrative permissions
- Connect – Click Connect to verify the provided credentials

Click __Next__.

![Configure Operations page for SharePoint](/static/img/product_docs/activitymonitor/activitymonitor/admin/monitoredhosts/add/configureoperationssharepoint.png)

__Step 5 –__ On the Configure Operations page, select the SharePoint Operations and Permissions Operations to be monitored. Click __Next__.

![Where to log the activity page](/static/img/product_docs/activitymonitor/activitymonitor/admin/monitoredhosts/add/wheretologgeneric.png)

__Step 6 –__ On the Where To Log The Activity page, select whether to send the activity to either a __Log File)__ or __Syslog Server__. Click __Next__.

![File Output Page](/static/img/product_docs/activitymonitor/activitymonitor/admin/monitoredhosts/add/fileoutputpage.png)

__Step 7 –__ If __Log File__ is selected on the __Where To Log The Activity__ page, the __File Output__ page can be configured.

- Specify output file path – Specify the file path where log files are saved. Click the ellipses button (__...__) to open the Windows Explorer to navigate to a folder destination. Click __Test__ to test if the path works.
- Period to keep Log files – Log files will be deleted after the period entered number of days entered. The default is 10 days. Use the dropdown to specify whether to keep the Log files for a set amount of Minutes, Hours, or Days.
- Log file format – Select whether the log file will be saved as a JSON or TSV file
- This log file is for Access Analyzer – Enable this option to have Access Analyzer collect this monitored host configuration

  ___RECOMMENDED:___ Identify the configuration to be read by Access Analyzer when integration is available.

  - While Activity Monitor can have multiple configurations per host, Access Analyzer can only read one of them.

Click __Next__.

![Syslog Output Page](/static/img/product_docs/activitymonitor/activitymonitor/admin/monitoredhosts/add/syslogoutputpage.png)

__Step 8 –__ If Syslog Server is selected on the __Where To Log The Activity__ page, the Syslog Output page can be configured. The configurable options are:

- Syslog server in SERVER[:PORT] format – Type the __Syslog server name__ with a SERVER:Port format in the textbox.
  - The server name can be short name, fully qualified name (FQDN), or IP Address, as long as the organization’s environment can resolve the name format used. The Event stream is the activity being monitored according to this configuration for the monitored host.
- Syslog Protocol – Identify the __Syslog protocol__ to be used for the Event stream. The drop-down menu includes:
  - UDP
  - TCP
  - TLS

  The TCP and TLS protocols add the Message framing drop-down menu. See the [Syslog Tab](/docs/product_docs/activitymonitor/activitymonitor/admin/outputs/syslog.md) topic for additional information.
- The Test button sends a test message to the Syslog server to check the connection. A green check mark or red will determine whether the test message has been sent or failed to send. Messages vary by Syslog protocol:
  - UDP – Sends a test message and does not verify connection
  - TCP/TLS – Sends test message and verifies connection
  - TLS – Shows error if TLS handshake fails

  See the [Syslog Tab](/docs/product_docs/activitymonitor/activitymonitor/admin/outputs/syslog.md) topic for additional information.

Click Finish.

![Activity Monitor with SharePoint host added](/static/img/product_docs/activitymonitor/activitymonitor/admin/monitoredhosts/add/activitymonitorsharepoint.png)

The added SharePoint host is displayed in the monitored hosts table. Once a host has been added for monitoring, configure the desired ouptuts. See the [Output for Monitored Hosts](/docs/product_docs/activitymonitor/activitymonitor/admin/monitoredhosts/output.md) topic for additional information.

## Host Properties for SharePoint

Configuration settings can be edited through the tabs in the host’s Properties window. The configurable host properties are:

- [SharePoint Tab](/docs/product_docs/activitymonitor/activitymonitor/admin/monitoredhosts/properties/sharepoint.md)
- [Inactivity Alerts Tab](/docs/product_docs/activitymonitor/activitymonitor/admin/monitoredhosts/properties/inactivityalerts.md)

See the [Host Properties Window](/docs/product_docs/activitymonitor/activitymonitor/admin/monitoredhosts/properties/overview.md) topic for additional information.
