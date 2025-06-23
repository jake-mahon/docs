# Active Directory Monitoring Scope

You can fine-tune Netwrix Auditor by specifying data that you want to exclude from the Active
Directory monitoring scope. You can apply restrictions to monitoring scope via the UI. See the
[Objects](/docs/auditor/10.6/monitoring-plans/data-sources-config.md)
topic for additional information.

**_RECOMMENDED:_** Configure monitoring scope restrictions on the Active Directory monitoring plan
page. See the
[Active Directory](/docs/auditor/10.6/monitoring-plans/data-sources-config.md)
topic for additional information.

Follow the steps to exclude data from the Active Directory monitoring scope:

**Step 1 –** Navigate to the _%Netwrix Auditor installation folder%\Active Directory Auditing_
folder.

**Step 2 –** Edit the \*.txt files, based on the following guidelines:

- Each entry must be a separate line.
- A wildcard (\*) is supported. You can use \* for cmdlets and their parameters.
- Lines that start with the # sign are treated as comments and are ignored.

| File                       | Description                                                                                                                                                                                                                                                                                                                     | Syntax                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| addprops.txt               | Contains a list of properties that should be included for newly created AD objects. When a new object is added, Auditor does not show any data in the Details column in the Activity Summary emails. If you want to see the information on certain attributes of a newly created object, specify these attributes in this file. | `Object type:property:` For example, to show a group description on this group’s creation, add the following line: `group:description:`                                                                                                                                                                                                                                                                                                                                                                   |
| allowedpathlist.txt        | Contains a list of AD paths to be included in Activity Summaries, reports, and search results.                                                                                                                                                                                                                                  | `Path` The path must be provided in the same format as it is displayed in the What column. For example, if you only want to monitor specific OU(s) in the AD domain, but not the entire domain. You can put a wildcard (\*) in the omitpathlist.txt file to exclude all paths, and then specify the OU(s) you want to monitor in the allowedpathlist.txt file. Adding the widlcard (\*) to omitpathlist.txt will not allow Netwrix Auditor to run AD state-in-time data collection.                       |
| omitallowedpathlist.txt    | Contains a list of AD paths to be excluded from Activity Summaries, reports, and search results. This file can be used if you want to exclude certain paths inside those specified in the allowedpathlist.txt file.                                                                                                             | `Path` The path must be provided in the same format as it is displayed in the What column. For example, you can put a wildcard (\*) in the omitpathlist.txt file to exclude all paths, then specify the OU(s) you want to monitor in the allowedpathlist.txt file, and then specify the paths you want to exclude from within them in the omitallowedpathlist.txt file. Adding the widlcard (\*) to omitpathlist.txt will not allow Netwrix Auditor to run AD state-in-time data collection.              |
| omitexchangeserverlist.txt | Specify the Microsoft Exchange 2010 servers to be excluded from data collection.                                                                                                                                                                                                                                                | `FQDN_server_name` **NOTE:** You can use the wildcard (\*) when specifying servers for exclusion.                                                                                                                                                                                                                                                                                                                                                                                                         |
| omitobjlist.txt            | Contains a list of object types to be excluded from Activity Summaries, reports, and search results.                                                                                                                                                                                                                            | `Object type` For example, to omit changes to the printQueue object, add the following line: `printQueue`.                                                                                                                                                                                                                                                                                                                                                                                                |
| omitpathlist.txt           | Contains a list of AD paths to be excluded from Activity Summaries, reports, and search results.                                                                                                                                                                                                                                | `Path` The path must be provided in the same format as it is displayed in the What column. For example, to exclude changes to the Service Desk OU, add the following line: `*\Service Desk\*`.                                                                                                                                                                                                                                                                                                            |
| omitproplist.txt           | Contains a list of object types and properties to be excluded from Activity Summaries, reports, and search results.                                                                                                                                                                                                             | `object_type.property_name` If there is no separator (.) between an object type and a property, the whole entry is treated as an object type. For example to exclude the adminCount property from reports, add the following line: `*.adminCount`.                                                                                                                                                                                                                                                        |
| omitreporterrors.txt       | Contains a list of errors to be excluded from Netwrix Health Log. Thus, these errors will not appear in the Activity Summary emails.                                                                                                                                                                                            | `Error message text` For example, if you have advanced audit settings applied to your domain controllers policy, the following error will be returned in the Activity Summary emails: `Auditing of Directory Service Access is not enabled for this DC. Adjust the audit policy settings using the Active Directory Audit Configuration Wizard or see the product documentation for more information.` Add the text of this error message to this file to stop getting it in the Activity Summary emails. |
| omitsnapshotpathlist.txt   | Contains a list of AD paths to be excluded from AD snapshots.                                                                                                                                                                                                                                                                   | `Path` The path must be provided in the same format as it is displayed in the What column. For example, to exclude data on the Disabled Accounts OU from the Snapshot report, add the following line:` *\Disabled Accounts*`.                                                                                                                                                                                                                                                                             |
| omitstorelist.txt          | Contains a list of object types and properties to be excluded from AD snapshots.                                                                                                                                                                                                                                                | `object_type.property_name` If there is no separator (.) between an object type and a property, the whole entry is treated as an object type. For example to exclude data on the AD adminDescription property, add the following line: `*.adminDescription`.                                                                                                                                                                                                                                              |
| omituserlist.txt           | Contains a list of users you want to exclude from search results, reports and Activity Summaries.                                                                                                                                                                                                                               | `domain\username` For example, `*\administrator`.                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| processaddedprops.txt      | Contains a list of properties that should be included for newly created AD objects. When a new object is created, Auditor does not show any data in the Details column in reports. If you want to see the information on certain attributes of a newly created object, specify these attributes in this file.                   | `object type:property:` For example, if you want a user’s Description property to be displayed in the reports when a user is added, add the following line: `User:Description:`                                                                                                                                                                                                                                                                                                                           |
| processdeletedprops.txt    | Contains a list of properties that should be included for deleted AD objects. When an object is deleted, Auditor does not show any data in the Details column in reports. If you want to see the information on certain attributes of a deleted object, specify these attributes in this file.                                  | `object type:property:` For example, if you want a user’s Description property to be displayed in the reports when a user is deleted, add the following line: `User:Description:`                                                                                                                                                                                                                                                                                                                         |
| propnames.txt              | Contains a list of human-readable names for object types and properties to be displayed in Activity Summaries, reports, and search results.                                                                                                                                                                                     | `classname.attrname=   intelligiblename` For example, if you want the adminDescription property to be displayed in the reports as Admin Screen Description, add the following line: `*.adminDesciption=Admin Screen Description`                                                                                                                                                                                                                                                                          |

## Example

To exclude the "_corp/Administrator_" user from being audited, use the following syntax in the
**omitusers.txt** file:

```
# Specify users whose activity you want to exclude from Active Directory search results, reports and Activity Summaries.
# Syntax: Domain\Username
# Note: Wildcard * is supported and can replace any number of characters.
# Example:
# Corp\Administrator
```

# Exchange Monitoring Scope

You can fine-tune Auditor by specifying data that you want to exclude from the Exchange monitoring
scope. In addition, you can exclude data from non-owner access auditing.

Follow the steps to exclude data from the Exchange monitoring scope:

**Step 1 –** Navigate to the _%Netwrix Auditor installation folder%\Active Directory Auditing_
folder.

**Step 2 –** Edit the \*.txt files, based on the following guidelines:

- Each entry must be a separate line.
- A wildcard (\*) is supported. You can use \* for cmdlets and their parameters.
- Lines that start with the # sign are treated as comments and are ignored.

| File                     | Description                                                                                                                                                                                                                                                     | Syntax                                                                                                                                                                                                                                                                  |
| ------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| aal_omitlist.txt         | For Exchange 2010 and above, the file contains a list of changes performed by cmdlets. To exclude a change from reports, specify name of a cmdlet and the attribute that is changed by the selected cmdlet.                                                     | `cmdlet.attrname` For example: `Set-User` `Set-ContactSet-Group` `#Update-AddressList` `Add-ADPermissionRemove-ADPermission` `#RBAC:` `*-MailboxAuditLogSearch` `*-AdminAuditLogSearch`                                                                                 |
| aal_propnames.txt        | For Exchange 2010 and above, the file contains a list of human-readable names of changed attributes to be displayed in change reports. To exclude a change from the reports, specify name of a cmdlet and the attribute that is changed by the selected cmdlet. | `classname.attrname=   intelligiblename` For example: `*-OutlookAnywhere.SSLOffloading = Allow secure channel (SSL) offloading`                                                                                                                                         |
| omitobjlist_ecr.txt      | Contains a list of human-readable names of object classes to be excluded from change reports.                                                                                                                                                                   | `Classname` For example: `exchangeAdminService` `msExchMessageDeliveryConfig` `Exchange_DSAccessDC`                                                                                                                                                                     |
| omitpathlist_ecr.txt     | Contains a list of AD paths to be excluded from change reports.                                                                                                                                                                                                 | `Path` For example: `*\Microsoft Exchange System Objects\SystemMailbox*`                                                                                                                                                                                                |
| omitproplist_ecr.txt     | Contains a list of object types and properties to be excluded from change reports.                                                                                                                                                                              | `object_type.property_name` If there is no separator (.) between an object type and a property, the whole entry is treated as an object type. For example: `msExchSystemMailbox.*` `*.msExchEdgeSyncCredential` `*.msExchMailboxMoveTargetMDBLink` `*.adminDescription` |
| omitreporterrors_ecr.txt | Contains a list of errors to be excluded from Activity Summaries.                                                                                                                                                                                               | `Error message text` For example, to omit the error “The HTTP service used by Public Folders is not available, possible causes are that Public stores are not mounted and the Information Store service is not running. ID no: c1030af3”, add `*c1030af3*` to the file. |
| omitstorelist_ecr.txt    | Contains a list of classes and attributes names to be excluded from Exchange snapshots.                                                                                                                                                                         | `object_type.property_name` If there is no separator (.) between an object type and a property, the whole entry is treated as an object type. For example: `Exchange_Server.AdministrativeGroup` `Exchange_Server.AdministrativeNote` `Exchange_Server.CreationTime`    |
| propnames_ecr2007.txt    | Contains a list of human-readable names for object classes and attributes of Exchange 2007 to be displayed in change reports.                                                                                                                                   | `classname.attrname=   intelligiblename` For example: `msExchMDBAvailabilityGroup= Database Availability Group`                                                                                                                                                         |

## To exclude users or mailboxes from the Mailbox Access monitoring scope

Auditor  allows specifying users and mailboxes that you do not want to monitor for non-owner mailbox
access events. To do this, edit the mailboxestoexclude.txt, userstoexclude.txt, and
agentomitusers.txt files.

Follow the steps to exclude data from Exchange Online monitoring scope

**Step 1 –** Navigate to the _%Netwrix Auditor installation folder%\Non-owner Mailbox Access
Reporter for Exchange_ folder.

**Step 2 –** Edit mailboxestoexclude.txt, userstoexclude.txt, or agentomitusers.txt files, based on
the following guidelines:

- Each entry must be a separate line.
- A wildcard (\*) is supported. You can use \* for cmdlets and their parameters.
- Lines that start with the # sign are treated as comments and are ignored.

You can also limit your reports by specific mailboxes. Edit the mailboxestoinclude.txt file to
specify mailboxes.

| File                   | Description                                                                                                                                                                                                                                                                                                                    | Syntax                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| mailboxestoexclude.txt | This file contains a list of mailboxes and folders that must be excluded from data collection.                                                                                                                                                                                                                                 | Each entry must be a separate line. Wildcards (\*) can be used to replace any number of characters. - To exclude the certain user's mailbox, enter `username@domainname` , e.g.`john.smith@acme.com` - To exclude the certian folder, enter `username@domainname/foldername` , e.g. `john.smith@acme.com/Drafts  ` - Use \*to exclude multiple mailboxes or folders, e.g. `*/foldername` will exclude the specified folder when processing all mailboxes. Examples: `*admin*@corp.com` `*/Drafts` - exclude _Drafts_ folder (for all mailboxes) `*/Testfolder/*` - exclude subfolders of _Testfolder_ (for all mailboxes) |
| mailboxestoinclude.txt | This file contains a list of mailboxes that must be included when collecting data. For the mailboxes added to this list, the reports will contain only non-owner access events.                                                                                                                                                | Specify email address to be included in the list as `username@domainname.` Example: `analyst@enterprise.com`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| userstoexclude.txt     | This file contains a list of users who must be excluded from reports if they perform non-owner access attempt for mailboxes (audit data on these users will still be stored in the state-in-time snapshots). If a user is removed from this list, the information on this user’s actions can be viewed with the Report Viewer. | `DOMAIN\username`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| agentomitusers.txt     | This file contains a list of users who must be excluded from reports and snapshots. If a user is removed from this list, audit data on this user will only be available after the next data collection. Writing new users to this file affects reports and snapshots only if Network traffic compression is enabled.           | `DOMAIN\username`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |

# Exchange Online Monitoring Scope

You can fine-tune Netwrix Auditor by specifying data that you want to exclude from the Exchange
Online monitoring scope.

Follow the steps to exclude data from Exchange Online monitoring scope:

**Step 1 –** Navigate to the _%Netwrix Auditor installation folder%\Exchange Online Auditing_
folder.

**Step 2 –** Edit the \*.txt files, based on the following guidelines:

- Each entry must be a separate line.
- A wildcard (\*) is supported. You can use \* for cmdlets and their parameters.
- Lines that start with the # sign are treated as comments and are ignored.

| File             | Description                                                                                                                                                                                                           | Syntax                                                                                                                                                                                                                                                                                                                   |
| ---------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| omitlist.txt     | The file contains a list of changes performed by cmdlets. To exclude a change from reports, search results and Activity Summaries, specify name of a cmdlet and the attribute that is changed by the selected cmdlet. | `cmdlet` For example: `Enable-OrganizationCustomization` `New-AdminAuditLogSearch` `New-MailboxAuditLogSearch` `cmdlet.param` For example: `*.Identity` `*.DomainController` `*.Organization` `*.IgnoreDefaultScope` `*.Force` `*.Confirm` `*.Password` `*-ManagementRoleEntry.Parameters` `Remove-PublicFolder.Recurse` |
| omitpathlist.txt | Contains a list of paths to be excluded from reports, search results and Activity Summaries.                                                                                                                          | `path` For example: `SystemMailbox{*}` `DiscoverySearchMailbox{*}` `FederatedEmail.*` You can use a wildcard (\*) to replace any number of characters in the path.                                                                                                                                                       |
| omituserlist.txt | Contains a list of user names to be excluded from reports, search results and Activity Summaries.                                                                                                                     | `domain\user` For example: `Enterprise\analyst` `email address` For example: `analyst@Enterprise.onmicrosoft.com`                                                                                                                                                                                                        |
| propnames.txt    | Contains a list of human-readable names for object classes and their and their properties to be displayed in search results, reports and Activity Summaries.                                                          | `cmdletobject=friendlyname` `cmdlet.param=friendlyname` For example: `RoleGroupMember = Role Group` `UMHuntGroup = Unified Messaging Hunt Group`                                                                                                                                                                         |

# File Servers Monitoring Scope

You can specify data that you want to include into / exclude from the Windows File Server, NetApp
Filer, and Dell Data Storage monitoring scope. For that, you can configure monitoring scope in
Auditor client UI, as explained in the related section:

- [File Servers](/docs/auditor/10.6/monitoring-plans/data-sources-config.md)
- [Windows File Share](#windows-file-share)

Besides, you can configure exclusions for file servers audit using the special txt files (omit
lists), as explained below.

Monitoring scope restrictions set up in the UI will apply together with the exclusion settings
configured in the \*.txt files.

**Follow the steps to exclude data from file server monitoring scope:**

**Step 1 –** Navigate to the _%Netwrix Auditor installation folder%\File Server Auditing_ folder.

**Step 2 –** Edit the \*.txt files, based on the following guidelines:

- Each entry must be a separate line.
- A wildcard (\*) is supported. You can use \* for cmdlets and their parameters.
- Lines that start with the # sign are treated as comments and are ignored.

| File                     | Description                                                                                                                                                   | Syntax                                                                                                                                                                                                                                                                                             |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| omitcollectlist.txt      | Contains a list of objects to be excluded from being monitored.                                                                                               | `Monitoring plan name,server name, resource path` Wildcards are not supported for the Server Name field. To disable filtering for this field, specify an empty string. For example: `*,,\\\\*\\System Volume Information*`                                                                         |
| omiterrors.txt           | Contains a list of errors and warnings to be omitted from logging to the Netwrix Auditor System Health event log.                                             | `Monitoring plan name,``````server name,error text` For example: `*,productionserver1.corp.local, *Access is denied*`                                                                                                                                                                              |
| omitreportlist.txt       | Contains a list of objects to be excluded from reports and Activity Summary emails. In this case audit data is still being collected.                         | `Monitoring plan name,action,who,object type,resource path,property name` Wildcards are not supported for the action and property name fields. To disable filtering for these fields, specify an empty string. For example: `*,,CORP\\jsmith,*,*,`                                                 |
| omitstorelist.txt        | Contains a list of objects to be excluded from being stored to the Audit Archive and showing up in reports. In this case audit data is still being collected. | `Monitoring plan name,action,who ,object type,resource path,property name` Wildcards are not supported for the Change Type and Property Name fields. To disable filtering for these fields, specify an empty string. For example: `*,,*,*,\\\\productionserver1.corp.local\\builds\\*, Attributes` |
| omitstoreprocesslist.txt | Contains a list of processes to be excluded from being stored to the Audit Archive and showing up in reports.                                                 | `Monitoring plan name,resource path, executable path` Only local applications can be excluded. For example: `*,*,*notepad.exe`                                                                                                                                                                     |

## Windows File Share

Complete the following fields:

| Option                                  | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| General                                 |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| Specify Windows file share              | Provide UNC path to a shared resource. See the section below for special considerations. Do not specify a default file share mapped to a local drive (e.g., \\Server\e$).                                                                                                                                                                                                                                                                                                                                                                                                                    |
| Specify the account for collecting data |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| Scope                                   |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| Specify monitoring restrictions         | Refer to [Configure Scope](#configure-scope) for detailed instructions on how to narrow your monitoring scope. By default, Netwrix Auditor will monitor all shares stored in the specified location, except for hidden shares (both default and user-defined). If you want to monitor user-defined hidden shares, select the related option in the monitored item settings. Remember that administrative hidden shares like default system root or Windows directory (ADMIN$), default drive shares (D$, E$), etc. will not be monitored. See the topics on the monitored items for details. |

### Configure Scope

You can narrow your monitoring scope by adding exclusions.

Click Add Exclusion. Then, in the Specify Filters dialog, do the following:

**Step 3 –** Provide the path to the file share where you are going to exclude some audit data. Use
the path format as it appears in the "_What_" column of reports and Activity Summaries — for
example, _\\corpsrv\shared_.

**Step 4 –** You can use a wildcard (\*) only if you need to exclude user activity on this file
share. For other data types (_state-in-time_ or _all data_) wildcards are not supported. This refers
to the specified shared folder, its subfolders and files.

**Step 5 –** Select what type of data you want to exclude:

| Option            | Description                                                                                                                                                                                                                                                       | Example                                                                                                                                                                                |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **All Data**      | Select if you want to completely exclude the specified file share from being audited. The product will not collect any user activity or state-in-time data. **NOTE:** In this case,Auditor does not adjust audit settings automatically for the selected folders. | A Security Officer wants to monitor a file share but s/he does not have access to a certain folder on this share. Thus, s/he configures the product not to monitor this folder at all. |
| State-in-Time     | Select to configure Auditor to exclude data for the state-in-time reports from the monitoring scope.                                                                                                                                                              | A Security Officer wants to monitor a file share, but it contains a folder with a huge amount of objects, so s/he does not want Auditor to collect state-in-time data for this folder. |
| **User Activity** | Select to exclude actions performed by specific users on the selected file share. See the procedure below for details. **NOTE:** In this case, the product still collects stat-in-time data for this share.                                                       | A Security Officer wants to monitor a file share that contains a public folder for which s/he does not want to collect _Read_ operations.                                              |

**Follow the steps to exclude specific user activity.**

**Step 1 –** Specify what user accounts should be excluded:

- All Users — Select to exclude the activity of any user on the file share you specified.
- These users— Select to exclude specific users' activity. Provide user names as shown in the
  "_Who_" column in reports and Activity Summaries, e.g., _MyDomain\user1_. To enter multiple
  accounts, use comma as a separator.

**Step 2 –** Specify what actions should be excluded:

- All actions — Exclude all actions of the selected users
- These actions — Use the drop-down list to select the actions to exclude, e.g. _Added_ and _Moved_.

![Specify Filters](/img/versioned_docs/auditor_10.6/auditor/admin/monitoringplans/fileservers/item_computer_exclude_users.webp)

**Step 3 –** After configuring all filters, click **Add** to save them and return to the item
settings.

### Working with DFS File Shares

Netwrix Auditor supports auditing of DFS and clustered file servers if Object Access Auditing is
enabled on DFS file shares or on every cluster node.

- When adding a cluster file server for auditing, it is recommended to specify a server name of the
  **Role** server or a UNC path of the shared folder located on the **Role** server.
- When adding a DFS file share for auditing, specify a Windows file share item and provide the UNC
  path of the whole namespace or UNC path of the DFS link (folder). For example:
  - _"\\domain\dfsnamespace\"_ (domain-based namespace) or _"\\server\dfsnamespace\"_ (in case of
    stand-alone namespace);
  - _"\\domain\dfsnamespace\link"_ (domain-based namespace) or _"\\server\dfsnamespace\link"_ (in
    case of stand-alone namespace).
- For recommendations on configuring DFS replication, refer to
  [this Knowledge Base article](https://www.netwrix.com/kb/2103).

### Working with Mount Points

You can specify a mount point as a monitored item. However, consider the following:

- If a mount point represents a shared folder, then the objects in its root will be initially
  collected by Netwrix Auditor and appear as processed by _System_ account. Wait for the next data
  collections - then all actions for these objects will be monitored in a normal way.
- To monitor the mount points targeted at the subfolder of a file share, provide network path to the
  target subfolder.

# Group Policy Monitoring Scope

You can fine-tune Netwrix Auditor by specifying data that you want to exclude from the Group Policy
monitoring scope. To do it, edit the omitobjlist_gp.txt, omitproplist_gp.txt and omituserlist_gp.txt
files.

Follow the steps to exclude data from the Group Policy monitoring scope:

**Step 1 –** Navigate to the _%Netwrix Auditor installation folder%\Active Directory Auditing_
folder.

**Step 2 –** Edit the \*.txt files, based on the following guidelines:

- Each entry must be a separate line.
- A wildcard (\*) is supported. You can use \* for cmdlets and their parameters.
- Lines that start with the # sign are treated as comments and are ignored.

| File                | Description                                                                                         | Syntax                                                                                                                                                  |
| ------------------- | --------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| omitobjlist_gp.txt  | The file contains a list of the Group Policy Object (GPO) names to be excluded from change reports. | `<object name>` For example, to exclude changes to the Default Domain Policy GPO, add the following line: `Default Domain Policy`.                      |
| omitproplist_gp.txt | The file contains a list of the Group Policy Object settings to be excluded from change reports.    | `<settingname>` For example, to exclude data on changes made to the Maximum password length setting, add the following line: `Maximum password length`. |
| omituserlist_gp     | The file contains a list of user names to be excluded from change reports.                          | `<domain\user>` For example, to exclude changes made by the user “usertest” in the domain “domaintest”, add the following line: `domaintest\usertest`.  |

# Logon Activity Monitoring Scope

You can fine-tune Netwrix Auditor by specifying data that you want to exclude from the Logon
Activity monitoring scope.

Follow the steps to exclude data from the Logon Activity monitoring scope:

**Step 1 –** Navigate to the _%working folder%\\NLA\Settings_ folder and locate your monitoring plan
GUID.

**NOTE:** If you have several monitoring plans for monitoring Logon Activity, configure omitlist for
each monitoring plan separately.

**Step 2 –** Edit the Settings.cfg file based on the following guidelines:

- Each entry must be a separate line.
- A wildcard (\*) is supported. You can use \* for cmdlets and their parameters.
- Lines that start with the # sign are treated as comments and are ignored.

| Configuration String                        | Description                                                                                                                                                                                       | Syntax                                                                                                                                                                                                                                                                                                                           |
| ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `<n n="DCOmitList">`                        | Contains a list of DCs to be excluded from being monitored.                                                                                                                                       | `DC_name` For example: `<v v= "*ROOTDC1*"/>`                                                                                                                                                                                                                                                                                     |
| `<n n="Hubs">`                              | Determines whether to enable network traffic compression for a Domain Controller or not. If configured, overrides the Enable network traffic compression option in monitoring plan configuration. | `<n n="localhost"> `````` <a n="DCWithCompressionService" t="258"> `````` <v v="DomainControllerNameInFQDNFormat1"/> `````` </a> `````` <a n="DCWithoutCompressionService" t="258"> `````` <v v="DomainControllerNameInFQDNFormat2"/> `````` </a> `````` <a n="DataCollectionIntervalInSeconds" v="0"/> `````` </n> `````` </n>` |
| `<n n="UserOmitList"> `````` <a n="Names">` | Contains a list of users to be excluded from being monitored. Allows specifying a user by name.                                                                                                   | `User name` For example: `<v v="*NT AUTHORITY*"/>`                                                                                                                                                                                                                                                                               |
| `<a n="SIDs">`                              | Contains a list of users to be excluded from being monitored. Allows specifying a user by security identifier (SID).                                                                              | `User SID` For example: `<v v="*S-1-5-21-1180699209 `````` -877415012-318292XXXX-XXX*"/>`                                                                                                                                                                                                                                        |

The file must be formatted in accordance with XML standard. The following symbols must be replaced
with corresponding XML entities: & (ampersand), " (double quotes), ' (single quotes), < (less than),
and > (greater than) symbols.

| Symbol                        | XML entity                                   |
| ----------------------------- | -------------------------------------------- |
| & e.g., Ally & Sons           | &amp; e.g., Ally &amp; Sons                  |
| " e.g., Domain1\Users\"Stars" | &quot; e.g., Domain1\Users\&quot;Stars&quot; |
| ' e.g., Domain1\Users\O'Hara  | &apos; e.g., Domain1\Users\O&apos;Hara       |
| < e.g., `CompanyDC<100`       | &lt; e.g., CompanyDC&lt;100                  |
| > e.g., `ID>500`              | &gt; e.g., ID&gt;500                         |

# Microsoft Entra ID Monitoring Scope

You can fine-tune Netwrix Auditor by specifying data that you want to exclude from the Microsoft
Entra ID (formerly Azure AD) monitoring scope or modify the way it will be displayed.

**NOTE:** Omitting user accounts does not decrease the license consumption count for Microsoft Entra
ID.

Follow the steps to exclude data from the Microsoft Entra ID monitoring scope:

**Step 1 –** Navigate to the _%Netwrix Auditor installation folder%\Entra ID Auditing_ folder.

**Step 2 –** Edit the \*.txt files, based on the following guidelines:

- Each entry must be a separate line.
- A wildcard (\*) is supported. You can use \* for cmdlets and their parameters.
- Lines that start with the # sign are treated as comments and are ignored.

| File                    | Description                                                                                                                                                                                                                                                                                                                                    | Syntax                                                                                              |
| ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| omituserlist.txt        | Contains a list of users you want to exclude from Microsoft Entra ID search results, Azure AD Changesreports and Activity Summaries.                                                                                                                                                                                                           | user@tenant.com                                                                                     |
| adomiteventuserlist.txt | Contains a list of users whose user names you want to exclude from Microsoft Entra ID search results, reports and Activity Summaries. The rest of change details (action, object type, etc.) will be reported, but the Who value will be "system".                                                                                             | user@tenant.com                                                                                     |
| exomiteventuserlist.txt | Contains a list of Exchange whose user names you want to exclude from Microsoft Entra ID search results, reports and Activity Summaries. The rest of change details (action, object type, etc.) will be reported, but the Who value will be "system". This list omits changes made by users through Exchange admin center.                     | user@tenant.com                                                                                     |
| maapioperationtypes.txt | Contains an overall list of object types that will be displayed in search results, reports, and Activity Summaries for each particular operation. By default, the list contains mapping for the most frequent operations (e.g., add user, update policy, remove member). The rest will be reported with Microsoft Entra ID object object type. | operation = object type For example: add owner to group = Group                                     |
| omitproplist.txt        | Contains a list of object classes and attributes to be excluded from Microsoft Entra ID search results, reports and Activity Summaries.                                                                                                                                                                                                        | classname.attrname If there is no full stop, the entire line is considered a class name.            |
| propnames.txt           | Contains a list of human-readable names for object types and attributes to be displayed in search results, reports, and Activity Summaries.                                                                                                                                                                                                    | object=friendlyname object.property=friendlyname For example: \*.PasswordChanged = Password Changed |
| proptypes.txt           | Defines how values will be displayed in the Details columns in Microsoft Entra ID search results, reports, and Activity Summaries.                                                                                                                                                                                                             | For example: \*.Role.DisplayName = MultiValued                                                      |

# Oracle Database Monitoring Scope

You can fine-tune Netwrix Auditor by specifying users that you want to exclude from the Oracle
Database monitoring scope.

Follow the steps to exclude data from the Oracle Database monitoring scope:

**Step 1 –** In Auditor, navigate to your Oracle Database monitoring plan and click Edit.

**Step 2 –** In the right pane, select Edit data source.

**Step 3 –** Navigate to Users tab and click Add next to Exclude.

**Step 4 –** In the Add User dialog, type name of the user you want to exclude and select its type
(OS user or Database user).

**Step 5 –** Click Add to exclude selected user from being monitored.

# SharePoint Monitoring Scope

You can fine-tune Netwrix Auditor by specifying data that you want to exclude from the SharePoint
monitoring scope.

Follow the steps to exclude data from the SharePoint monitoring scope:

**Step 1 –** Navigate to the _%working folder%\Netwrix Auditor for SharePoint\Configuration\GUID_
folder, where omit lists are located.

If you have several monitoring plans for monitoring SharePoint farms, configure omit lists for each
monitoring plan separately.

**Step 2 –** Edit the \*.txt files, based on the following guidelines:

- Each entry must be a separate line.
- A wildcard (\*) is supported. You can use \* for cmdlets and their parameters.
- Lines that start with the # sign are treated as comments and are ignored.

| File                      | Description                                                                                      | Syntax                                                                                                                                                                                                                                                                                                                                                                                    |
| ------------------------- | ------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| omiteventloglist.txt      | Contains a list of event IDs to be excluded from the Netwrix Auditor System Health event log.    | `event ID` For example: `1001` Only add known error or warning events, otherwise you may lose important data.                                                                                                                                                                                                                                                                             |
| omitscreadaccesslist.txt  | Contains a list of site collections for which the product will not monitor read access attempts. | `http(s)://URL` Enter the root web site URLs. If you have alternate access mapping configured in your SharePoint farm, and one web application has different URLs for different zones, you can use any of these URLs to specify a child site collection. For example: `http://sharepointsrv:3333/`                                                                                        |
| omitscstorelist.txt       | Contains a list of site collections to be excluded from audit data collection.                   | `http(s)://URL` Enter the root web site URLs. If you have alternate access mapping configured in your SharePoint farm, and one web application has different URLs for different zones, you can use any of these URLs to specify a child site collection. For example: `https://siteColl*`                                                                                                 |
| omitsitscstorelist.txt    | Lists site collections to exclude from being monitored and reported in state-in-time report.     | http(s)://URL Enter root web site URLs. If you have alternate access mapping configured in your SharePoint farm, and one web application has different URLs for different zones, you can use any of these URLs to specify a child site collection. You can use a wildcard (\*) to replace any number of characters. Examples: `http://siteCollection1:3333/ ``````  https://siteColl*`    |
| omitsitstorelist.txt      | Contains SharePoint lists and list items that you want to exclude from being audited.            | URI Reference URI Reference does not include site collection URL. For example, to exclude the list item with URL _http://sitecollection/list/document.docx_, specify only "_list/document.docx_" instead of full URL. Wildcard (\*) is supported to replace any number of characters. Examples: \*list/document.docx \*/\_catalogs/\* \*/\_vti_inf.html \*/Style Library\* \*/SitePages\* |
| omituserviewstorelist.txt | Contains a list of user or service accounts to be excluded from read access monitoring.          | Login name For example: SHAREPOINT\System                                                                                                                                                                                                                                                                                                                                                 |
| omitviewstorelist.txt     | Contains lists and list items to be excluded from being monitored for read access.               | URI Reference Only specify URI reference to a list or list item without `https:\\<siteCollection_name>` part. \*list/document.docx For example:                                                                                                                                                                                                                                           |
| omitwastorelist.txt       | Contains a list of web applications to be excluded from audit data collection.                   | `http(s)://URL` Enter the root web site URLs. If you have alternate access mapping configured in your SharePoint farm, and one web application has different URLs for different zones, you can use any of these URLs. For example: `http://webApplication1:3333/`                                                                                                                         |

# SharePoint Online Monitoring Scope

You can fine-tune Netwrix Auditor by specifying data that you want to exclude from the SharePoint
Online monitoring scope.

Follow the steps to exclude data from the SharePoint monitoring scope:

**Step 1 –** Navigate to the _%ProgramData%\Netwrix Auditor\Netwrix Auditor for SharePoint
Online\Configuration_ folder and locate your monitoring plan.

If you have several monitoring plans for monitoring SharePoint Online, configure omitlists for each
monitoring plan separately.

**Step 2 –** Edit the \*.txt files, based on the following guidelines:

- Each entry must be a separate line.
- A wildcard (\*) is supported. You can use \* for cmdlets and their parameters.
- Lines that start with the # sign are treated as comments and are ignored.

| File                      | Description                                                                                                 | Syntax                                                                                                                                                                                                                                                                                                                                       |
| ------------------------- | ----------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| omitstorelist.txt         | Contains a list URLs of SharePoint Online objects to be excluded from audit data collection.                | `https://URL` For example: `https://Corp.sharepoint.com/*`                                                                                                                                                                                                                                                                                   |
| omiteventloglist.txt      | Contains a list of event IDs to be excluded from the Netwrix Auditor System Health event log.               | `event ID` For example: `1001` Only add known error or warning events, otherwise you may lose important data.                                                                                                                                                                                                                                |
| omitreadstorelist.txt     | Contains the SharePoint Online lists, documents, etc., to be excluded from being monitored for read access. | `https://URL` For example: `https://Corp.sharepoint.com/*` `*list/document.docx`                                                                                                                                                                                                                                                             |
| omituserreadstorelist.txt | Contains a list of user accounts to be excluded from read access monitoring.                                | Provide user name in the UPN format. For example: `account@example.*.com`                                                                                                                                                                                                                                                                    |
| omitSitScStoreList.txt    | Contains a list of SharePoint Online site collections to be excluded from state-in-time data collection.    | Enter root web site URLs. For example: `https://URL`                                                                                                                                                                                                                                                                                         |
| omitSitStoreList.txt      | Contains SharePoint Online lists and list items to be excluded from state-in-time data collection.          | Enter list or list item URI (Unique resource identifier, or endpoint) reference. Note that URI Reference does not include site collection URL. For example, to exclude a list item with the `https://sitecollection.sharepoint.com/list/document.docx`, URL, you should specify the corresponding endpoint (URI), i.e. `list/document.docx`. |

# SQL Server Monitoring Scope

You can fine-tune Netwrix Auditor by specifying data that you want to exclude from the SQL Server
monitoring scope.

Follow the steps to exclude data from the SQL Server monitoring scope.

**Step 1 –** Navigate to the _%Netwrix Auditor install folder%\SQL Server Auditing_ folder.

**Step 2 –** Edit the \*.txt files, based on the following guidelines:

- Each entry must be a separate line.
- A wildcard (\*) is supported. You can use \* for cmdlets and their parameters.
- Lines that start with the # sign are treated as comments and are ignored.

| File              | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Syntax                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| omitarlist.txt    | Lists activity records to exclude from showing up in reports, search, and activity summaries. This omit list does not affect triggerless data collection mode, SELECT statements auditing and SQL logons monitoring. Use the _omitlogonlist.txt_ to exclude SQL logons from monitoring. Use the _omitreadaccess.txt_ to exclude SELECT statements from monitoring.                                                                                                                                                               | Specify the following fields of the activity records to exclude: `Monitoring plan name, `````` SQL Server instance,object type, `````` account,workstation,application name` Wildcard (\*) is supported and can replace any number of characters. For the account, workstation, application name fields, you can specify a mixed expression that contains both a value and a wildcard (e.g., Admin\*). For example: `SQLPlan,Ent-SQL,Table,guest,WksSQL,MyInternalApp`                                                                                                                                                                                                                             |
| omiterrorlist.txt | Contains a list of errors and warnings to be excluded from logging to the Netwrix Auditor System Health event log.                                                                                                                                                                                                                                                                                                                                                                                                               | Monitoring plan name,item name,error text Wildcard (\*) is supported and can replace any number of characters. For example: \*,sqlserver1.corp.local, \*Access is denied\*                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| omitlogonlist.txt | Contains a list of logons to exclude from monitoring.                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | `monitoring plan name,SQL Server instance,logon type,account,workstation,application name` For the `account`, `workstation`, `application name` fields, you can specify a mixed expression that contains both a value and a wildcard (e.g., `Admin*`). The following logon types are supported: - `NtLogon `— Successful logon attempt made through Windows authentication. - `SqlLogon `— Successful logon attempt made through SQL Server authentication. - `NtFailedLogon `— Failed logon attempt made through Windows authentication. - `SqlFailedLogon `— Failed logon attempt made through SQL Server authentication. For example: `DB_M0,Ent-SQL,SQLFailedLogon,guest,WksSQL,MyInternalApp` |
| omitobjlist.txt   | Contains a list of object to exclude from showing up in reports, search results and activity summaries. Audit data, however, will still be collected and saved to Long-Term Archive. This omit list does not affect SELECT statements auditing, data changes auditing and logon activity auditing. Use the _omitlogonlist.txt_ to exclude logon activity from monitoring. Use the _omitreadaccess.txt_ to exclude SELECT statements from monitoring.                                                                             | `object_type_name` Available object types can be found in the "Object type" column in reports. For example: `Database` `Column`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| omitpathlist.txt  | Specify the resource paths to objects that you want to exclude from showing up in search, reports and activity summaries. Audit data, however, will still be collected and saved to Long-Term Archive. This omit list does not affect triggerless data collection mode, SELECT statements auditing and logon activity auditing. Use the _omitlogonlist.txt_ to exclude logon activity from monitoring. Use the _omitreadaccess.txt_ to exclude SELECT statements from monitoring.                                                | `server_instance:resource_path` where: - `server_instance` — SQL Server instance, use \* for all servers - `resource_path` — resource path as shown in the "**What**" column of SQL Server report, or in search results Wildcard \* is supported and can replace any part of the path. For example, to exclude information about databases whose names start with "tmp" on the SQL Server instance "PROD.SQL2012": `PROD.SQL2012:Databases\tmp*`.                                                                                                                                                                                                                                                  |
| omitproplist.txt  | Contains a list of attributes to be excluded from being monitored and stored to the Audit Archive.                                                                                                                                                                                                                                                                                                                                                                                                                               | `object_type_name.property_name.attribute_name` where: - `object_type_name`—Can be found in the found in the Object Type column in change reports. - `property_name`—Can be found in the Details column (property name is bold). - `attribute_name`—Can be found in the Details column (attribute name is not bold). If an object does not have an attribute name, use the \* character. For example to exclude information about the Size attribute of the Database File property in all databases: `Database.Database File.Size`.                                                                                                                                                                |
| omitstorelist.txt | Contains a list of SQL Server objects that you want to exclude from data collection and reporting. This list is only relevant to operations with SQL Server objects; it does not affect triggerless data collection mode, SELECT statements auditing and logon activity auditing. To configure exclusions for logon activity auditing (Windows or SQL logons), use the _omitlogonlist.txt_. Use the _omitreadaccess.txt_ to exclude SELECT statements from monitoring.                                                           | `server_instance:resource_path` where: - `server_instance` — SQL Server instance. For all instances, use wildcard (\*). - ` resource_path` — path as shown in the "**What**" column of SQL Server report, or in search results. Wildcard (\*) can be used to replace any number of characters. For example, to exclude information about server roles on the SQL Server instances whose names start with _njsqlsrv23_, enter: `njsqlsrv23*:Security\Server Roles\*`                                                                                                                                                                                                                                |
| omittracelist.txt | If you do not want the product to enable SQL tracing on some of your SQL Server instances, specify their names in this omitlist. In this case the "Who", "Workstation" and "When" values will not be reported correctly (except for content changes). This omit list does not affect triggerless data collection mode, SELECT statements auditing and logon activity auditing. Use the _omitlogonlist.txt_ to exclude logon activity from monitoring. Use the _omitreadaccess.txt_ to exclude SELECT statements from monitoring. | Enter the name of SQL Server instance, use \* for all servers: `server\instance name` Wildcard (\*) is supported and can replace any number of characters, e.g., MYSERVER_SQL\* Examples: \* \*\SQLExpress MYSERVER\\\*                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| propnames.txt     | Contains a list of human-readable names for object types and properties to be displayed in the change reports.                                                                                                                                                                                                                                                                                                                                                                                                                   | `object_type_name.property_name=friendlyname` For example: `*.Date modified=Modification Time`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |

# VMware Monitoring Scope

You can fine-tune Netwrix Auditor by specifying various data types that you want to exclude/include
from/in the VMware reports.

Follow the steps to exclude data from the VMware monitoring scope:

**Step 1 –** Navigate to the _%Netwrix Auditor installation folder%\Vmware Auditing_ folder.

**Step 2 –** Edit the \*.txt files, based on the following guidelines:

- Each entry must be a separate line.
- A wildcard (\*) is supported. You can use \* for cmdlets and their parameters.
- Lines that start with the # sign are treated as comments and are ignored.

| File               | Description                                                                                                                               | Syntax                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| omitproplist.txt   | Contains a list of object types and properties to be excluded from change reports.                                                        | `object_type.property_name` If there is no separator (.) between an object type and aproperty, the whole entry is treated as an object type. For example, to exclude the config.flags.monitorType property from reports, add the following line: `*.config.flags.monitorType`.                                                                                                                                                                                                                                             |
| hidepropvalues.txt | Contains a list of object types and properties to be excluded from the reports when the property is set to certain value.                 | `object_type.property_name=property_value:object_type.hidden_property` For example, to exclude the config.cpuAllocation.shares.level property when it equals to _"Low"_, add the following line: `*.config.cpuAllocation.shares .level=low:` `*.config.cpuAllocation.shares.shares`.                                                                                                                                                                                                                                       |
| proplist.txt       | Contains a list of human-readable names for object types and properties to be displayed in the reports.                                   | `inner_type:object_type.property=intelligiblename` `Inner_type` is optional. For example, if you want the configStatus property to be displayed in the reports as Configuration Status, add the following line: `*.configStatus=Configuration Status.`                                                                                                                                                                                                                                                                     |
| omitstorelist.txt  | Contains a list of objects to be excluded from being saved to data storage and showing up in reports. Audit data will still be collected. | Monitoring plan name, who, where, object type, what, property name, property value For example, to exclude internal logons: `*,*,*,Logon,*,UserAgent,VMware vim-java*` The following characters must be preceded with a backslash (\) if they are a part of an entry value: `*` `,` `\` `?` Characters may be also specified with hex value using _\xnnnn_ template. The spaces are trimmed. If they are required, use hex notation. For example: `Word\x0020 where \x0020 `(with space at the end) means blank character. |

# Windows Server Monitoring Scope

You can fine-tune Netwrix Auditor by specifying data that you want to exclude from the Windows
Server monitoring scope.

Follow the steps to exclude data from the Windows Server monitoring scope:

**Step 1 –** Navigate to the _%Netwrix Auditor installation folder%\Windows Server Auditing_ folder.

**Step 2 –** Edit the \*.txt files, based on the following guidelines:

- Each entry must be a separate line.
- Wildcards (\* and ?) are supported. A backslash (\) must be put in front of (\*), (?), (,), and
  (\) if they are a part of an entry value.
- Lines that start with the # sign are treated as comments and are ignored.

| File                   | Description                                                                                                                                                                                                            | Syntax                                                                                                                                                                                                                                                                                                                              |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| omitcollectlist.txt    | Contains a list of objects and their properties to be excluded from being monitored. If you want to restart monitoring these objects, remove them from the omitcollectlist.txt and run data collection at least twice. | `monitoring plan name,server name,class name,property name,property value` `class name` is a mandatory parameter, it cannot be replaced with a wildcard. `property name` and `property value` are optional, but cannot be replaced with wildcards either. For example: `#*,server,MicrosoftDNS_Server `````` #*,*,StdServerRegProv` |
| omiterrors.txt         | Contains a list of errors/warnings to be omitted from logging to the Netwrix Auditor System Health event log.                                                                                                          | `monitoring plan name,server name,error text` For example: `*,productionserver1.corp.local,*Access is denied*`                                                                                                                                                                                                                      |
| omitreportlist.txt     | Contains a list of objects to be excluded from reports and Activity Summary emails. In this case audit data is still being collected.                                                                                  | `monitoring plan name,who,where,object type,what,property name` For example: `*,CORP\\jsmith,*,*,*,*`                                                                                                                                                                                                                               |
| omitsitcollectlist.txt | Contains a list of objects to be excluded from State-in-time reports.                                                                                                                                                  | `monitoring planname,server name,class name,property name,property value` `class name` is a mandatory parameter, it cannot be replaced with a wildcard. `property name` and `property value` are optional, but cannot be replaced with wildcards either. For example: `*,server,MicrosoftDNS_Server` `*,*,StdServerRegProv`         |
| omitstorelist.txt      | Contains a list of objects to be excluded from being stored to the Audit Archive and showing up in reports. In this case audit data is still being collected.                                                          | `monitoring plan name,who,where,object type,what,property name` For example: `*,*,*,Scheduled task,Scheduled Tasks\\User_Feed_Synchronization*,*`                                                                                                                                                                                   |
