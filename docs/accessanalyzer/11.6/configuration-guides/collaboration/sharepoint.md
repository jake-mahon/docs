---
title: sharepoint
sidebar_label: sharepoint
description: Documentation for sharepoint functionality in Access Analyzer including configuration and usage information.
---

# SharePoint Access & Sensitive Data Auditing Configuration

Permissions are required on the SharePoint Farm, Web Application, and the SharePoint Database in
order for Enterprise Auditor to execute Access Auditing (SPAA) and/or Sensitive Data Discovery
Auditing scans.

## Configure SharePoint Farm Permissions

Follow the steps to configure the SharePoint Farm level permissions on SharePoint 2013 through
SharePoint 2019 farms.

**Step 1 –** In the SharePoint Central Administration Center, navigate to the Security section.

**Step 2 –** Select the Manage the farm administrators group option under Users.

**Step 3 –** If the Farm Read group exists, add the service account to that group. If the Farm Read
group has been deleted, it is necessary to create a new group with Read privileges at the Farm
level:

- Select More under the Groups section.
- Select New Group from the New drop-down menu.
- Ensure the group has the Read – Can view pages and list items and download documents permission.
- Add the service account to this new group.

The service account has Read level access at the Farm level.

## Configure SharePoint Web Application Permissions

Follow the steps to configure the SharePoint web application level permissions on SharePoint 2013
through SharePoint 2019 farms.

**Step 1 –** In the SharePoint Central Administration Center, navigate to the Application Management
section.

**Step 2 –** Select Manage web applications option under Web Applications.

**Step 3 –** Create a new policy for the desired web application. Follow these steps:

- Click Permission Policy. The Manage Permission Policy Levels window opens.
- Click Add Permission Policy Level. Select the following:

  - Check the Site Collection Auditor permission.
  - Check the Open Items box in the Site Permissions Grant column.
  - Click Save.

**Step 4 –** Repeat Step 3 for each web application in scope. It is recommended to give these
policies the same name.

**Step 5 –** Add the service account to the newly created roles. Follow these steps:

- Select a web application with the newly created role.
- Click User Policy. The Policy for Web Application window opens.
- Click Add Users. Leave all zones select and click Next.
- Add the service account in the Users textbox.
- Check the newly created role with site collection auditor in the Permissions section. Click
  Finish.

**Step 6 –** Repeat Step 5 for each web application in scope.

The service account is provisioned as a Site Collection Auditor on all web applications to be
audited.

## Configure SharePoint Database Server Permissions

Follow the steps to configure the SharePoint database server permissions on SharePoint 2013 through
SharePoint 2019 farms.

**Step 1 –** Navigate to the SharePoint database server user configuration via SQL Management
Studio.

**Step 2 –** Provision the service account to have:

- SPDataAccess Database role membership
- This database role membership needs to be configured on:

  - SharePoint Configuration database (ShaerPoint_Config)
  - All SharePoint Content databases housing web application data (by default the content
    databases begin with WSS*Content*, but they can be customized)

The service account is provisioned with SharePoint database permissions.

# SharePoint On-Premise Activity Auditing Configuration

SharePoint Event Auditing must be enabled for each site collection to be monitored by the Netwrix
Activity Monitor and/or audited by Netwrix Enterprise Auditor.

## User Requirements

Following are the SharePoint On-Premise user requirements:

- Local Administrator on SharePoint server (that hosts Central Administration)
- SharePoint SQL server, which includes login on SharePoint Admin, Config, and all content
  databases, with the following role permissions:

  - SharePoint 2013+

    - SPDataAccess

  - SharePoint 2010

    - db_owner

## Enable Event Auditing

Follow the steps for each site collection within a SharePoint 2013 through SharePoint 2019 farm.

**Step 1 –** Select Settings > Site settings.

**Step 2 –** Under Site Collection Administration, click Go to top level site settings.

**Step 3 –** On the Site Settings page, under Site Collection Administration, select Site collection
audit settings.

**Step 4 –** On the Configure Audit Settings page, in the Documents and Items section select the
events to be audited.

**Step 5 –** Still on the Configure Audit Settings page, in the List, Libraries, and Site section
select the events to be audited.

**Step 6 –** Click OK to save the changes.

SharePoint will create the audit logs to be monitored by the Netwrix Activity Monitor and/or audited
by Enterprise Auditor. See the Microsoft
[Configure audit settings for a site collection (SharePoint 2013/2016/2019)](https://support.office.com/en-us/article/Configure-audit-settings-for-a-site-collection-a9920c97-38c0-44f2-8bcb-4cf1e2ae22d2)
article for additional information.

# SharePoint Target Requirements

Netwrix Enterprise Auditor can execute Access Auditing (SPAA) and/or Sensitive Data Discovery
Auditing scans on SharePoint farms. The Netwrix Activity Monitor can be configured to monitor
activity on SharePoint farms and make the event data available for Enterprise Auditor Activity
Auditing (SPAC) scans.

## Access & Sensitive Data Auditing Permissions

- Permissions vary based on the Scan Mode selected and target environment. See the
  [SharePoint Support](/docs/accessanalyzer/11.6/getting-started/requirements/target-requirements.md)
  topic for additional information.

See the
[SharePoint Access & Sensitive Data Auditing Configuration](/docs/accessanalyzer/11.6/configuration-guides/collaboration/sharepoint.md)
topic for instructions.

## Access & Sensitive Data Auditing Port Requirements

- Ports vary based on the Scan Mode selected and target environment. See the
  [SharePoint Scan Options](/docs/accessanalyzer/11.6/getting-started/requirements/solutions-requirements.md)
  topic for additional information.

## Activity Auditing Permissions

Requirements to Deploy the Activity Agent on the “Central Administration” SharePoint Server

The Netwrix Activity Monitor must have an Activity Agent deployed on one instance of a SharePoint
Application server that hosts the “Central Administration” component. While actively monitoring, the
Activity Agent generates activity log files stored on the server. The credential used to deploy the
Activity Agent must have the following permissions on the proxy server:

- Membership in the local Administrators group
- READ and WRITE access to the archive location for Archiving feature only

It is also necessary to enable the Remote Registry Service on the Activity Agent server.

For integration between the Activity Monitor and Enterprise Auditor, the credential used by
Enterprise Auditor to read the activity log files must have also have this permission.

SharePoint Requirements

See the
[SharePoint On-Premise Activity Auditing Configuration](/docs/accessanalyzer/11.6/configuration-guides/collaboration/sharepoint.md)
topic for instructions.

Activity Monitor Archive Location

If the activity log files are being archived, configurable within the Netwrix Activity Monitor
Console, then the credential used by Enterprise Auditor to read the activity log files must also
have READ and WRITE permissions on the archive location.

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
