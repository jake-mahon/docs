---
title: active directory
sidebar_label: active directory
description: Documentation for active directory functionality in Access Analyzer including configuration and usage information.
---

# Active Directory Auditing Configuration

The Enterprise Auditor for Active Directory Solution is compatible with the following Active
Directory versions as targets:

- Windows Server 2016 and later
- Windows 2003 Forest level or higher

**NOTE:** See the Microsoft
[Windows Server end of support and Microsoft 365 Apps](https://learn.microsoft.com/en-us/deployoffice/endofsupport/windows-server-support)
article for additional information.

Domain Controller Requirements

The following are requirements for the domain controllers to be scanned:

- .NET Framework 4.5+ installed
- WINRM Service installed

Data Collectors

Successful use of the Enterprise Auditor Active Directory solution requires the necessary settings
and permissions in a Microsoft® Active Directory® environment described in this topic and its
subtopics. This solution employs the following data collectors to scan for groups, users, computers,
passwords, permissions, group policies, and domain information:

- [ADInventory Data Collector](/docs/accessanalyzer/11.6/data-collection/active-directory/configuration.md)
- [ActiveDirectory Data Collector](/docs/accessanalyzer/11.6/data-collection/active-directory/configuration.md)
- [ADActivity Data Collector](/docs/accessanalyzer/11.6/data-collection/active-directory/configuration.md)
- [GroupPolicy Data Collector](/docs/accessanalyzer/11.6/accessanalyzer/admin/datacollector/grouppolicy/overview.md)
- [LDAP Data Collector](/docs/accessanalyzer/11.6/data-collection/custom-collectors/ldap.md)
- [PasswordSecurity Data Collector](/docs/accessanalyzer/11.6/accessanalyzer/admin/datacollector/passwordsecurity/overview.md)
- [PowerShell Data Collector](/docs/accessanalyzer/11.6/data-collection/custom-collectors/powershell.md)
- [Registry Data Collector](/docs/accessanalyzer/11.6/accessanalyzer/admin/datacollector/registry.md)

## Permissions

- Member of the Domain Administrators group

The majority of jobs in the Active Directory solutions rely on tables with queried data from the
data collectors mentioned above to perform analysis and generate reports. The remaining jobs utilize
data collectors to scan environments, and require additional permissions on the target host.

**_RECOMMENDED:_** Use Domain/Local Administrator privileges to run Enterprise Auditor against an
Active Directory domain controller.

There is a least privilege model for scanning your domain. See the
[Least Privilege Model](#least-privilege-model) topic for additional information.

## Ports

The following firewall ports are needed:

For ADInventory Data Collector

- TCP 389
- TCP 135-139
- Randomly allocated high TCP ports

For ActiveDirectory Data Collector

- TCP 389/636
- TCP 135-139
- Randomly allocated high TCP ports

For ADActivity Data Collector

- TCP 4494 (configurable within the Netwrix Activity Monitor)

For GroupPolicy Data Collector

- TCP 389
- TCP 135-139
- Randomly allocated high TCP ports

For LDAP Data Collector

- TCP 389

For PasswordSecurity Collector

- TCP 389/636

For PowerShell Data Collector

- Randomly allocated high TCP ports

For Registry Data Collector

- TCP 135-139
- Randomly allocated high TCP ports

## Least Privilege Model

A least privilege model can be configured based on your auditing needs and the data collection jobs
you will be using. The following jobs and their corresponding data collectors can be run with a
least privilege permissions model.

1-AD_Scan Job Permissions

The ADInventory Data Collector in the .Active Directory Inventory > 1-AD_Scan Job has the following
minimum requirements, which must be configured at the Domain level in Active Directory:

- Read access to directory tree
- List Contents & Read Property on the Deleted Objects Container

  **NOTE:** See the Microsoft
  [Searching for Deleted Objects](https://technet.microsoft.com/en-us/library/cc978013.aspx)
  article and the Microsoft
  [Dsacls](<https://technet.microsoft.com/en-us/library/cc771151(v=ws.11).aspx>) article for
  additional information.

AD_WeakPasswords Job Permissions

The PasswordSecurity Data Collector in the 2.Users > AD_WeakPasswords Job has the following minimum
requirements:

- At the domain level:

  - Read
  - Replicating Directory Changes
  - Replicating Directory Changes All
  - Replicating Directory Changes in a Filtered Set
  - Replication Synchronization

AD_CPassword Job Permissions

While the PowerShell Data Collector typically requires Domain Administrator permissions when
targeting a domain controller, that level of access is not required to run the 4.Group Policy >
AD_CPasswords job. The minimum requirements for running this job are:

- Read access to SYSVOL on the targeted Domain Controller(s) and all of its children

AD_GroupPolicy Job Permissions

While the GroupPolicy Data Collector typically requires Domain Administrator permissions when
targeting a domain controller, that level of access is not required to run the 4.Group Policy >
AD_GroupPolicy Job. The minimum requirements for running this job are:

- Requires Read permissions on Group Policy Objects

AD_PasswordPolicies Job Permissions

While the LDAP Data Collector typically requires Domain Administrator permissions when targeting a
domain controller, that level of access is not required to run the 4.Group Policy >
AD_PasswordPolicies Job. The minimum requirements for running this job are:

- Requires Read permissions on the Password Settings Container

AD_DomainControllers Job Permissions

While the LDAP Data Collector and Active Directory Data Collector typically requires Domain
Administrator permissions when targeting a domain controller, that level of access is not required
to run the 5.Domains > 0.Collection > AD_DomainControllers Job. The minimum requirements for running
this job are:

- Read access to CN=Servers,%SITEDN% and its children
- Read access to: %PARTITIONDNS% and its children
- Read access to: %SCHEMADN%
- Read access to: %SITESDN% and its children

See the [Variable Definitions](#variable-definitions) for variable definitions.

AD_DSRM Job Permissions

While the Registry Data Collector typically requires Domain Administrator permissions when targeting
a domain controller, that level of access is not required to run the 5.Domains > 0.Collection >
AD_DSRM Job. The minimum requirements for running this job are:

- Requires read access to the following Registry key and its children:  
  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\Lsa

AD_TimeSync Job Permissions

While the Registry Data Collector typically requires Domain Administrator permissions when targeting
a domain controller, that level of access is not required to run the 5.Domains > 0.Collection >
AD_TimeSync Job. The minimum requirements for running this job are:

- Requires Read access to the following Registry keys and its children:
  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\W32Time

AD_DomainInfo Job Permissions

While the LDAP Data Collector and Active Directory Data Collector typically requires Domain
Administrator permissions when targeting a domain controller, that level of access is not required
to run the 5.Domains > AD_DomainInfo Job. The minimum requirements for running this job, which must
be configured at the Domain level in Active Directory, are:

- Read access to: %DOMAINDN% and its children
- Read access to: CN=System,%DOMAINDN% and its children
- Read access to: %SITEDN% and its children
- Read access to: %PARTITIONDNS% and its children

See the [Variable Definitions](#variable-definitions) for variable definitions.

AD_ActivityCollection Job Permission

The ADActivity Data Collector in the 6.Activity > 0.Collection > AD_ActivityCollection Job has the
following minimum requirements:

- Netwrix Activity Monitor API Access activity data
- Netwrix Activity Monitor API Read
- Read access to the Netwrix Activity Monitor Log Archive location

### Variable Definitions

The following variables are referenced for Active Directory Least Privileged Models:

`%PARTITIONDNS%` is the distinguished name of the accessed partition;
`CN=Partitions,CN=Configuration,DC=contoso,DC=com`

`%SITEDN%` is the distinguished name of the accessed site;
`CN=Sites,CN=Configuration,DC=contoso,DC=com`

`%CONFIGDN%` is the distinguished name of the configuration naming context;
`CN=Configuration,DC=company,DC=com`

`%SCHEMADN%` is the distinguished name of the accessed schema;
`CN=Schema,CN=Configuration,DC=company,DC=com`

`%DOMAINDN%`" is the distinguished name of the accessed domain object; `DC=company,DC=com`

# Active Directory Activity Auditing Configuration

There are two methods to configure Activity Monitor to provide Active Directory domain activity to
Enterprise Auditor:

- API Server
- File Archive Repository

See the
[File Archive Repository Option](/docs/accessanalyzer/11.6/configuration-guides/directory-services/active-directory.md)
topic for additional information on that option.

## API Server Option

In this method, you will be deploying two agents:

- First, deploy an Activity Agent to a Windows server that will act as the API server. This is a
  non-domain controller server.

  **_RECOMMENDED:_** Deploy the API Server to the same server where the Activity Monitor Console
  resides.

- Next, deploy the AD Agent to all domain controllers in the target domain.

Follow the steps to setup integration between Activity Monitor and Enterprise Auditor through an API
server.

**Step 1 –** Deploy the Activity Agent to the API server.

**Step 2 –** Deploy the AD Agent to each domain controller in the target domain.

The next step is to configure the agent deployed to the API server.

## Configure API Server Agent

Follow the steps to configure the agent deployed to the API server.

**Step 1 –** On the Agents tab of the Activity Monitor Console, select the agent deployed to the
API server.

**Step 2 –** Click **Edit**. The Agent properties window opens.

**Step 3 –** Select the **API Server** tab and configure the following:

- Select the **Enable API access on this agent** checkbox.
- The default **API server port (TCP)** is 4494, but it can be modified if desired. Ensure the
  modified port is also used by Enterprise Auditor.
- Click **Add Application**. The Add or edit API client window opens.
- Configure the following:

  - Provide a descriptive and unique **Application name**, for example `Enterprise Auditor`.
  - Select the **Read** checkbox to grant this permission to this application.
  - Click **Generate** to generate the Client ID and Client Secret.
  - Copy the Client ID value to a text file.
  - Click **Copy** and save the Client Secret value to a text file.

    **CAUTION:** It is not possible to retrieve the value after closing the Add or edit
    API client window. It must be copied first.

  - By default, the **Secret Expires** in 3 days. That means it must be used in the Enterprise
    Auditor Connection Profile within 72 hours or a new secret will need to be generated. Modify
    if desired.
  - Click **OK** to save the configuration and close the Add or edit API client window.

- If the Activity Monitor Console server is not the API Server, then click **Use this console** to
  grant the Activity Monitor the ability to manage the API server.
- The IPv4 or IPv6 allowlist allows you to limit access to the API server data to specific hosts.

**Step 4 –** Click **OK** to save the configuration and close the Agent properties window.

The next step is to configure the agents deployed to the domain controllers.

## Configure Domain Controller Agent

Follow the steps to configure the agent deployed to the domain controller.

**Step 1 –** On the Agents tab of the Activity Monitor Console, select an agent deployed to domain
controller.

**Step 2 –** Click **Edit**. The Agent properties window opens.

**Step 3 –** Select the **Archiving** tab and configure the following:

- Select the **Enable Archiving for this agent** checkbox.
- Select the **Archive log files on a UNC path** option. Click the **...** button and navigate to
  the desired network share on the API server.
- The **User name** and **User password** fields only need to be filled in if the account used to
  install the agent does not have access to this share.

  _Remember,_ The account used to install the agent on a domain controller is a Domain
  Administrator account.

- Click **Test** to ensure a successful connection to the network share.

**Step 4 –** Click **OK** to save the configuration and close the Agent properties window.

**Step 5 –** Repeat Steps 1-4 for each agent deployed to domain controller.

These agent are configured to save the Archive logs to the selected share.

## Configure Monitored Domain Output

Follow the steps configure the monitored domain output for Netwrix Enterprise Auditor.

**Step 1 –** Select the **Monitored Domains** tab.

**Step 2 –** Select the desired domain and click **Add Output**. The Add New Ouptut window opens.

**Step 3 –** Configure the following:

- Configure the desired number of days for the **Period to keep Log files**. This is the number of
  days the log files are kept on the API server configured in the sections above. This needs to be
  set to a greater value than the days between Enterprise Auditor scans.

  - For example, if Enterprise Auditor runs the **AD_ActivityCollection** Job once a week (every 7
    days), then the Activity Monitor output should be configured to retain at least 10 days of log
    files.

- Check the **This log file is for StealthAUDIT** box.
- Optionally select the **Enable periodic AD Status Check event reporting** checkbox. When enabled,
  the agent will send out status messages every five minutes to verify whether the connection is
  still active.

**Step 4 –** Click **Add Output** to save and close the Add New Output window.

Enterprise Auditor now has access to the agent log files for this domain.

## Configure Enterprise Auditor Connection Profile

Follow the steps to configure the Connection Profile in Enterprise Auditor.

_Remember,_ the Client ID and Client Secret were generated by the API server and copied to a text
file. If the secret expired before the Connection Profile is configured, it will need to be
re-generated.

**Step 1 –** On the **Settings** > **Connection** node of the Enterprise Auditor Console, select the
Connection Profile for the Active Directory solution. If you haven't yet created a Connection
Profile or desire a specific one for AD Activity, create a new one and provide a unique descriptive
name.

**Step 2 –** Click **Add User credential**. The User Credentials window opens.

**Step 3 –** Configure the following:

- Select Account Type – Select **Web Services (JWT)**
- User name – Enter the Client ID generated by the Activity Monitor API Server
- Access Token – Enter the Client Secret generated by the Activity Monitor API Server

**Step 4 –** Click **OK** to save and close the User Credentials window.

**Step 5 –** Click **Save** and then **OK** to confirm the changes to the Connection Profile.

**Step 6 –** Navigate to the **Jobs** > **Active Directory** > **6.Activity** > **0.Collection** Job
Group. Select the **Settings > Connection** node.

**Step 7 –** Select the **Select one of the following user defined profiles** option. Expand the
drop-down menu and select the Connection Profile with this credential.

**Step 8 –** Click **Save** and then **OK** to confirm the changes to the job group settings.

The Connection Profile will now be used for AD Activity collection.

## Configure the AD_ActivityCollection Job

The Enterprise Auditor requires additional configurations in order to collect domain activity data.
Follow the steps to configure the **AD_ActivityCollection** Job.

**NOTE:** Ensure that the **.Active Directory Inventory** Job Group has been successfully run
against the target domain.

**Step 1 –** Navigate to the **Jobs** > **Active Directory** > **6.Activity** > **0.Collection** >
**AD_ActivityCollection** Job. Select the **Configure** > **Queries** node.

**Step 2 –** Click **Query Properties**. The Query Properties window displays.

**Step 3 –** On the Data Source tab, select **Configure**. The Active Directory Activity DC wizard
opens.

![Active Directory Activity DC wizard Category page](/img/versioned_docs/activitymonitor_7.1/config/activedirectory/categoryimportfromnam.webp)

**Step 4 –** On the Category page, choose **Import from SAM** option and click **Next**.

![Active Directory Activity DC wizard SAM connection settings page](/img/versioned_docs/activitymonitor_7.1/config/activedirectory/namconnection.webp)

**Step 5 –** On the SAM connection page, the **Port** is set to the default 4494. This needs to
match the port configured for the Activity Monitor API Server agent.

**Step 6 –** In the **Test SAM host** textbox, enter the Activity Monitor API Server name using
fully qualified domain format. For example, `NEWYORKSRV30.NWXTech.com`. Click **Connect**.

**Step 7 –** If connection is successful, the archive location displays along with a Refresh token.
Copy the **Refresh token**. This will replace the Client Secret in the Connection Profile in the
last step.

**Step 8 –** Click **Next**.

![Active Directory Activity DC wizard Scoping and Retention page](/img/versioned_docs/activitymonitor_7.1/config/activedirectory/scope.webp)

**Step 9 –** On the Scope page, set the Timespan as desired. There are two options:

- Relative Timespan – Set the number of days of activity logs to collect when the scan is run
- Absolute Timespan – Set the date range for activity logs to collect when the scan is run

**_RECOMMENDED:_** The threshold should be set to ensure the logs are collected before the Activity
Monitor domain output log retention expires. For example, if Enterprise Auditor runs the
**AD_ActivityCollection** Job once a week (every 7 days), then the Activity Monitor output should be
configured to retain at least 10 days of log files.

**Step 10 –** Set the Retention period as desired. This is the number of days Enterprise Auditor
keeps the collected data in the SQL Server database.

**Step 11 –** Click **Next** and then **Finish** to save the changes and close the wizard.

**Step 12 –** Click **OK** to save the changes and close the Query Properties page.

**Step 13 –** Navigate to the global **Settings** > **Connection** node to update the User
Credential with the Refresh token:

- Select the Connection Profile assigned to the **6.Activity** > **0.Collection** Job Group.
- Select the Web Services (JWT) User Credential and click **Edit**.
- Replace the Access Token with the Refresh token generated by the data collector in Step 7.
- Click **OK** to save and close the User Credentials window.
- Click **Save** and then **OK** to confirm the changes to the Connection Profile.

The query is now configured to target the Activity Monitor API Server to collect domain activity
logs.

### (Optional) Configure Import of AD Activity into Netwrix Access Information Center

AD Activity data can be imported into Netwrix Access Information Center by the
**AD_ActivityCollection** Job. However, this is disabled by default. Follow the steps to enable the
importing of AD activity data into the Access Information Center.

**Step 1 –** Navigate to the **Jobs** > **Active Directory** > **6.Activity** > **0.Collection** >
**AD_ActivityCollection** Job.

**Step 2 –** On the job's Overview page, enable the import of AD Events.

- Click on the **Enable to import AD events into the AIC** parameter.
- On the Parameter Configuration window, select the **Enabled** checkbox and click **Save**.

**Step 3 –** On the job's Overview page, enable the import of authentication Events.

- Click on the **Enable to import authentication events into the AIC** parameter.
- On the Parameter Configuration window, select the **Enabled** checkbox and click **Save**.

**Step 4 –** Optionally, modify the **List of attributes to track for Object Modified changes** and
**Number of days to retain activity data in the AIC** parameters.

The **AD_ActivityCollection** Job is now configured to import both AD events and authentication
events into the Netwrix Access Information Center.

# File Archive Repository Option

As an alternative to using an API Server, Netwrix Activity Monitor can be configured to store all
archived logs to a network share. This option requires all of the domain logs to be stored in the
same share location in order for Enterprise Auditor to collect the AD Activity data.

Prerequisite

Deploy the AD Agent to each domain controller in the target domain.

## Configure Domain Controller Agent

Follow the steps to configure the agent deployed to the domain controller.

**NOTE:** These steps assume the network share where the activity log files will be archived already
exists.

**Step 1 –** On the Agents tab of the Activity Monitor Console, select an agent deployed to domain
controller.

**Step 2 –** Click Edit. The Agent properties window opens.

**Step 3 –** Select the Archiving tab and configure the following:

- Check the Enable Archiving for this agent box.
- Select the **Archive log files on a UNC path** option. Click the ... button and navigate to the
  desired network share.
- The **User name** and **User password** fields only need to be filled in if the account used to
  install the agent does not have access to this share.

  _Remember,_ The account used to install the agent on a domain controller is a Domain
  Administrator account. This is typically the credential that will be used in the Netwrix
  Enterprise Auditor Connection Profile. However, a least privilege option is a domain user
  account with Read access to this share.

- Click **Test** to ensure a successful connection to the network share.

**Step 4 –** Click OK to save the configuration and close the Agent properties window.

**Step 5 –** Repeat Steps 1-4 for each agent deployed to domain controller pointing to the same
network share in Step 3 for each agent.

These agent are configured to save the Archive logs to the selected share.

## Configure Monitored Domain Output

Follow the steps configure the monitored domain output for Netwrix Enterprise Auditor.

**Step 1 –** Select the **Monitored Domains** tab.

**Step 2 –** Select the desired domain and click **Add Output**. The Add New Ouptut window opens.

**Step 3 –** Configure the following:

- Configure the desired number of days for the **Period to keep Log files**. This is the number of
  days the log files are kept on the API server configured in the sections above. This needs to be
  set to a greater value than the days between Enterprise Auditor scans.

  - For example, if Enterprise Auditor runs the **AD_ActivityCollection** Job once a week (every 7
    days), then the Activity Monitor output should be configured to retain at least 10 days of log
    files.

- Check the **This log file is for StealthAUDIT** box.
- Optionally select the **Enable periodic AD Status Check event reporting** checkbox. When enabled,
  the agent will send out status messages every five minutes to verify whether the connection is
  still active.

**Step 4 –** Click **Add Output** to save and close the Add New Output window.

Enterprise Auditor now has access to the agent log files for this domain.

## Configure Enterprise Auditor Connection Profile

Follow the steps to configure the Connection Profile in Enterprise Auditor.

**Step 1 –** On the Settings > Connection node of the Enterprise Auditor Console, select the
Connection Profile for the Active Directory solution. If you haven't yet created a Connection
Profile or desire a specific one for AD Activity, create a new one and provide a unique descriptive
name.

**Step 2 –** Click Add User credential. The User Credentials window opens.

**Step 3 –** Configure the following:

- Select Account Type – Select **Active Directory Account**
- Domain – Select the domain where the network share resides
- User name – Enter the account with Read access to the network share
- Provide the account password:

  - Password Storage – Select the password storage location, if it is being stored in a vault,
    like CyberArk
  - Password / Confirm – Enter the account password in both fields

**Step 4 –** Click OK to save and close the User Credentials window.

**Step 5 –** Click **Save** and then **OK** to confirm the changes to the Connection Profile.

**Step 6 –** Navigate to the Jobs > Active Directory > 6.Activity > 0.Collection Job Group. Select
the **Settings > Connection** node.

**Step 7 –** Select the **Select one of the following user defined profiles** option. Expand the
drop-down menu and select the Connection Profile with this credential.

**Step 8 –** Click **Save** and then **OK** to confirm the changes to the job group settings.

The Connection Profile will now be used for AD Activity collection.

## Configure the AD_ActivityCollection Job

The Enterprise Auditor requires additional configurations in order to collect domain activity data.
Follow the steps to configure the **AD_ActivityCollection** Job.

**NOTE:** Ensure that the .Active Directory Inventory Job Group has been successfully run against
the target domain.

**Step 1 –** Navigate to the **Jobs** > **Active Directory** > **6.Activity** > **0.Collection** >
**AD_ActivityCollection** Job. Select the **Configure** > **Queries** node.

**Step 2 –** Click **Query Properties**. The Query Properties window displays.

**Step 3 –** On the Data Source tab, select **Configure**. The Active Directory Activity DC wizard
opens.

![Active Directory Activity DC wizard Category page](/img/versioned_docs/activitymonitor_7.1/config/activedirectory/categoryimportfromshare.webp)

**Step 4 –** On the Category page, choose **Import from Share** option and click **Next**.

![Active Directory Activity DC wizard Share settings page](/img/versioned_docs/activitymonitor_7.1/config/activedirectory/share.webp)

**Step 5 –** On the Share page, provide the UNC path to the AD Activity share archive location. If
there are multiple archives in the same network share, check the **Include Sub-Directories** box.
Click **Next**.

![Active Directory Activity DC wizard Scoping and Retention page](/img/versioned_docs/activitymonitor_7.1/config/activedirectory/scope.webp)

**Step 6 –** On the Scope page, set the Timespan as desired. There are two options:

- Relative Timespan – Set the number of days of activity logs to collect when the scan is run
- Absolute Timespan – Set the date range for activity logs to collect when the scan is run

**_RECOMMENDED:_** The threshold should be set to ensure the logs are collected before the Activity
Monitor domain output log retention expires. For example, if Enterprise Auditor runs the
**AD_ActivityCollection** Job once a week (every 7 days), then the Activity Monitor output should be
configured to retain at least 10 days of log files.

**Step 7 –** Set the Retention period as desired. This is the number of days Enterprise Auditor
keeps the collected data in the SQL Server database.

**Step 8 –** Click **Next** and then **Finish** to save the changes and close the wizard.

**Step 9 –** Click **OK** to save the changes and close the Query Properties page.

The query is now configured to target the network share where the Activity Monitor domain activity
logs are archived.

# Active Directory Domain Target Requirements

Netwrix Enterprise Auditor can execute scans on Active Directory domains. The Netwrix Activity
Monitor can be configured to monitor activity on Active Directory domains and make the event data
available for Enterprise Auditor Active Directory Activity scans.

## Auditing Permissions

The following permission is needed:

- Member of the Domain Administrators group

Some collection jobs do allow for a least privilege model. See the
[Active Directory Auditing Configuration](/docs/accessanalyzer/11.6/configuration-guides/directory-services/active-directory.md)
topic for additional information.

## Auditing Port Requirements

Ports vary based on the data collector being used. See the
[Active Directory Auditing Configuration](/docs/accessanalyzer/11.6/configuration-guides/directory-services/active-directory.md)
topic for additional information.

## Activity Auditing Permissions

**NOTE:** Active Directory domain activity events can also be monitored through Netwrix Threat
Prevention. This requires integration between it and Netwrix Activity Monitor to enable access to
the data for Enterprise Auditor Active Directory Activity scans. See the
[Getting Data from NTP for AD Activity Reporting](/docs/accessanalyzer/11.6/configuration-guides/directory-services/active-directory.md)
topic for additional information.

Requirements to Deploy the AD Agent on the Domain Controller

The Netwrix Activity Monitor must have an AD Agent deployed on the domain controller to be
monitored. While actively monitoring, the AD Agent generates activity log files stored on the
server. The credential used to deploy the AD Agent must have the following permissions on the
server:

- Membership in the Domain Administrators group
- READ and WRITE access to the archive location for Archiving feature only

**NOTE:** For monitoring an Active Directory domain, the AD Agent must be installed on all domain
controllers within the domain to be monitored.

For integration between the Activity Monitor and Enterprise Auditor, the credential used by
Enterprise Auditor to read the activity log files must have also have this permission.

Activity Monitor Archive Location

If the activity log files are being archived, configurable within the Netwrix Activity Monitor
Console, then the credential used by Enterprise Auditor to read the activity log files must also
have READ and WRITE permissions on the archive location.

Integration with Enterprise Auditor

See the
[Active Directory Activity Auditing Configuration](/docs/accessanalyzer/11.6/configuration-guides/directory-services/active-directory.md)
topic for target environment requirements.

## Activity Auditing Port Requirements

Firewall settings depend on the type of environment being targeted. The following firewall settings
are required for communication between the Agent server and the Netwrix Activity Monitor Console:

| Communication Direction          | Protocol | Ports | Description         |
| -------------------------------- | -------- | ----- | ------------------- |
| Activity Monitor to Agent Server | TCP      | 4498  | Agent Communication |

The Windows firewall rules need to be configured on the Windows server, which require certain
inbound rules be created if the scans are running in applet mode. These scans operate over a default
port range, which cannot be specified via an inbound rule. For more information, see the Microsoft
[Connecting to WMI on a Remote Computer](<https://msdn.microsoft.com/en-us/library/windows/desktop/aa389290(v=vs.85).aspx>)
article.

Additional Firewall Rules for Integration between Enterprise Auditor and Activity Monitor

Firewall settings are dependent upon the type of environment being targeted. The following firewall
settings are required for communication between the agent server and the Enterprise Auditor Console:

| Communication Direction            | Protocol | Ports      | Description                    |
| ---------------------------------- | -------- | ---------- | ------------------------------ |
| Enterprise Auditor to Agent Server | TCP      | 445        | SMB, used for Agent Deployment |
| Enterprise Auditor to Agent Server | TCP      | Predefined | WMI, used for Agent Deployment |

# Getting Data from NTP for AD Activity Reporting

When Netwrix Threat Prevention is configured to monitor a domain, the event data collected by the
policies can be provided to Netwrix Enterprise Auditor for Active Directory Activity reporting. This
is accomplished by configuring Threat Prevention to send data to Netwrix Activity Monitor, which in
turn creates the activity log files that Enterprise Auditor collects.

**NOTE:** Threat Prevention can only be configured to send event data to one Netwrix application,
either Netwrix Activity Monitor or Netwrix Threat Manager but not both. However, the Activity
Monitor can be configured with outputs for Enterprise Auditor and Threat Manager

Follow these steps to configure this integration.

**_RECOMMENDED:_** It is a best practice to use the API Server option of the Activity Monitor for
this integration between Threat Prevention and Enterprise Auditor.

**Step 1 –** In the Threat Prevention Administration Console, click **Configuration** > **Netwrix
Threat Manager Configuration** on the menu. The Netwrix Threat Manager Configuration window opens.

**Step 2 –** On the Event Sink tab, configure the following:

- Netwrix Threat Manager URI – Enter the name of the Activity Monitor agent host and port, which is
  4499 by default, in the following format:

  `amqp://localhost:4499`

  You must use localhost, even if Activity Monitor and Threat Prevention are installed on
  different servers.

- App Token – Leave this field blank for integration with Activity Monitor
- Policies – The table displays all policies created in Threat Prevention along with a State icon
  indicating if the policy is active. Check the **Send** box for the desired policies monitoring the
  target domain activity.

**Step 3 –** Click **Save**.

All real-time event data from the selected policies are now being sent to Activity Monitor.
Additional policies can be added to this data stream through the Netwrix Threat Manager
Configuration window or by selecting the **Send to Netwrix Threat Manager** option on the Actions
tab of the policy.
