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

- Netwrix Enterprise Auditor

Prior to adding a SharePoint host to the Activity Monitor, the prerequisites for the target
environment must be met. See the
[SharePoint On-Premise Activity Auditing Configuration](/versioned_docs/activitymonitor_7.1/config/sharepoint/activity.md)
topic for additional information.

_Remember,_ the Activity Agent must be deployed to the SharePoint Application server that hosts the
“Central Administration” component of the SharePoint farm.

## Add SharePoint Host

Follow the steps to add a SharePoint host to be monitored.

**Step 1 –** In Activity Monitor, go to the Monitored Hosts tab and click Add. The Add New Host
window opens.

![Choose Agent page](/img/versioned_docs/activitymonitor_7.1/activitymonitor/admin/monitoredhosts/add/chooseagent.png)

**Step 2 –** On the Choose Agent page, select the Agent deployed on the SharePoint Application
server that hosts the “Central Administration” component. Click **Next**.

![Add Host page with SharePoint selected](/img/versioned_docs/activitymonitor_7.1/activitymonitor/admin/monitoredhosts/add/addhostsharepoint.png)

**Step 3 –** On the Add Host page, select the SharePoint radio button. If desired, add a Comment.
Click **Next**.

![Add Host - SharePoint Options page](/img/versioned_docs/activitymonitor_7.1/activitymonitor/admin/monitoredhosts/add/sharepointoptions.png)

**Step 4 –** On the SharePoint Options page, choose to audit all sites or scope the monitoring to
specific site(s):

- Enable auditing on selected site collections – Enabling this option will ensure that auditing is
  enabled for all monitored site collections with periodic checks
- Audit all sites – Leave textbox for URLs blank

    Scope to specific sites – List URLs for sites to be monitored in the textbox. List should be
    semicolon separated.

    - Examples – http://sharpoint.local/sites/marketing,
      http://sharepoint.local/sites/personal/user1
    - Then enter the credentials configured as the provisioned activity monitoring account.

- Enter valid **User Name** and **Password** for a domain account with local administrative
  permissions
- Connect – Click Connect to verify the provided credentials

Click **Next**.

![Configure Operations page for SharePoint](/img/versioned_docs/activitymonitor_7.1/activitymonitor/admin/monitoredhosts/add/configureoperationssharepoint.png)

**Step 5 –** On the Configure Operations page, select the SharePoint Operations and Permissions
Operations to be monitored. Click **Next**.

![Where to log the activity page](/img/versioned_docs/activitymonitor_7.1/activitymonitor/admin/monitoredhosts/add/wheretologgeneric.png)

**Step 6 –** On the Where To Log The Activity page, select whether to send the activity to either a
**Log File)** or **Syslog Server**. Click **Next**.

![File Output Page](/img/versioned_docs/activitymonitor_7.1/activitymonitor/admin/monitoredhosts/add/fileoutputpage.png)

**Step 7 –** If **Log File** is selected on the **Where To Log The Activity** page, the **File
Output** page can be configured.

- Specify output file path – Specify the file path where log files are saved. Click the ellipses
  button (**...**) to open the Windows Explorer to navigate to a folder destination. Click **Test**
  to test if the path works.
- Period to keep Log files – Log files will be deleted after the period entered number of days
  entered. The default is 10 days. Use the dropdown to specify whether to keep the Log files for a
  set amount of Minutes, Hours, or Days.
- Log file format – Select whether the log file will be saved as a JSON or TSV file
- This log file is for Enterprise Auditor – Enable this option to have Enterprise Auditor collect
  this monitored host configuration

    **_RECOMMENDED:_** Identify the configuration to be read by Enterprise Auditor when integration
    is available.

    - While Activity Monitor can have multiple configurations per host, Enterprise Auditor can only
      read one of them.

Click **Next**.

![Syslog Output Page](/img/versioned_docs/activitymonitor_7.1/activitymonitor/admin/monitoredhosts/add/syslogoutputpage.png)

**Step 8 –** If Syslog Server is selected on the **Where To Log The Activity** page, the Syslog
Output page can be configured. The configurable options are:

- Syslog server in SERVER[:PORT] format – Type the **Syslog server name** with a SERVER:Port format
  in the textbox.
    - The server name can be short name, fully qualified name (FQDN), or IP Address, as long as the
      organization’s environment can resolve the name format used. The Event stream is the activity
      being monitored according to this configuration for the monitored host.
- Syslog Protocol – Identify the **Syslog protocol** to be used for the Event stream. The drop-down
  menu includes:

    - UDP
    - TCP
    - TLS

    The TCP and TLS protocols add the Message framing drop-down menu. See the
    [Syslog Tab](/versioned_docs/activitymonitor_7.1/activitymonitor/admin/outputs/syslog.md) topic
    for additional information.

- The Test button sends a test message to the Syslog server to check the connection. A green check
  mark or red will determine whether the test message has been sent or failed to send. Messages vary
  by Syslog protocol:

    - UDP – Sends a test message and does not verify connection
    - TCP/TLS – Sends test message and verifies connection
    - TLS – Shows error if TLS handshake fails

    See the
    [Syslog Tab](/versioned_docs/activitymonitor_7.1/activitymonitor/admin/outputs/syslog.md) topic
    for additional information.

Click Finish.

![Activity Monitor with SharePoint host added](/img/versioned_docs/activitymonitor_7.1/activitymonitor/admin/monitoredhosts/add/activitymonitorsharepoint.png)

The added SharePoint host is displayed in the monitored hosts table. Once a host has been added for
monitoring, configure the desired ouptuts. See the
[Output for Monitored Hosts](/versioned_docs/activitymonitor_7.1/activitymonitor/admin/monitoredhosts/output.md)
topic for additional information.

## Host Properties for SharePoint

Configuration settings can be edited through the tabs in the host’s Properties window. The
configurable host properties are:

- [SharePoint Tab](/versioned_docs/activitymonitor_7.1/activitymonitor/admin/monitoredhosts/properties/sharepoint.md)
- [Inactivity Alerts Tab](/versioned_docs/activitymonitor_7.1/activitymonitor/admin/monitoredhosts/properties/inactivityalerts.md)

See the
[Host Properties Window](/versioned_docs/activitymonitor_7.1/activitymonitor/admin/monitoredhosts/properties/overview.md)
topic for additional information.
