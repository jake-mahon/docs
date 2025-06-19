# Server Summary Report

The Server Summary report at the **File System** node provides a top-level view of servers that have
been scanned.

![Server Summary report at the File System node](/img/versioned_docs/accessinformationcenter_11.6/access/informationcenter/resourceaudit/filesystem/serversummary.webp)

This report is comprised of the following columns:

- Server Name – Name of the server
- Operating System – Name of the server’s operating system
- Shares – Count of shares on the server
- Folders – Count of folders on the server
- Exceptions – Count of exceptions on the server
- Last Scanned – Date and timestamp of the last Enterprise Auditor scan

Also, the Group Membership pane displays Local Administrator and Local Group membership on the
selected server.

# Activity Summary Report

The Activity Summary report at the **File System** node provides an overview of activity performed
on files and folders in each of the scanned servers. It reflects the total count of operations
performed in each server, including operations in folders that are not shared. This activity report
does not include a date range filter as it contains totals for all operations ever monitored by
Enterprise Auditor for the targeted environment.

![Activity Summary report at the File System node](/img/versioned_docs/accessinformationcenter_11.6/access/informationcenter/resourceaudit/filesystem/activitysummary.webp)

This report is comprised of the following columns:

- Server Name – Name of the server
- Operating System – Name of the server’s operating system
- Events – Total cumulative count of all operations events monitored for the server since the first
  scan
- Statistics – Roll-up information of the number of operations that have been performed by a trustee
  on a file or folder
- Recent Events – Date of the most recently scanned operations event

# Admin Shares Node Report

The following report is available at the **Admin Shares** node:

- [Scan Summary Report](/docs/accessinformationcenter/11.6/resource-audit/file-systems/windows-shares.md)

See the
[Share & Subfolder Levels Reports](/docs/accessinformationcenter/11.6/resource-audit/file-systems/windows-shares.md)
topic for information on reports found under this node.

# Scan Summary Report

The Scan Summary report at the **Admin Shares** node provides a summary view of all shares on the
server with the share type of Admin.

![Scan Summary report at the Admin Shares node](/img/versioned_docs/accessinformationcenter_11.6/access/informationcenter/resourceaudit/filesystem/adminshares/adminsharesscansummary.webp)

This report is comprised of the following columns:

- Share Name – Name of the share
- Share Type – Admin type of share, this report is filtered to exclude Shared type of shares
- Path – Location of the share
- Subfolders – Count of subfolders within the share
- Exceptions – Count of exceptions within the share

# Shared Folders Node Report

The following report is available at the **Shared Folder** node:

- [Scan Summary Report](/docs/accessinformationcenter/11.6/resource-audit/file-systems/windows-shares.md)

See the
[Share & Subfolder Levels Reports](/docs/accessinformationcenter/11.6/resource-audit/file-systems/windows-shares.md)
topic for information on reports found under this node.

# Scan Summary Report

The Scan Summary report at the **Shared Folders** node provides a summary view of all shares on the
server with the share type of Shared.

![Scan Summary report at the Shared Folders node](/img/versioned_docs/accessinformationcenter_11.6/access/informationcenter/resourceaudit/filesystem/sharedfolders/sharedfoldersscansummary.webp)

This report is comprised of the following columns:

- Share Name – Name of the share
- Share Type – Shared type of share, this report is filtered to exclude Admin type of shares (for
  example, C$)
- Path – Location of the share
- Subfolders – Count of subfolders within the share
- Exceptions – Count of exceptions within the share

# Share & Subfolder Levels Reports

The following reports are available at the share and subfolder levels:

- [Activity Details Report](/docs/accessinformationcenter/11.6/resource-audit/file-systems/windows-shares.md)
- [Activity Statistics Report](/docs/accessinformationcenter/11.6/resource-audit/file-systems/windows-shares.md)
- [Effective Access Report](/docs/accessinformationcenter/11.6/resource-audit/file-systems/windows-shares.md)
- [Exceptions Report](/docs/accessinformationcenter/11.6/resource-audit/file-systems/exceptions.md)
- [Permissions Report](/docs/accessinformationcenter/11.6/resource-audit/file-systems/windows-shares.md)
- [Sensitive Content Report](/docs/accessinformationcenter/11.6/resource-audit/file-systems/windows-shares.md)

# Activity Details Report

The Activity Details report at the share and subfolder levels provides details on every operations
logged during the selected date range. This report includes a Permission Changes table. The
**Include subfolders** option is active by default until removed. See the
[Results Pane](/docs/accessinformationcenter/11.6/resource-audit/navigation/overview.md#results-pane)
topic for information on changing this option.

![Activity Details report at the share and subfolder levels](/img/versioned_docs/accessinformationcenter_11.6/access/informationcenter/resourceaudit/filesystem/sharesubfolder/shareactivitydetails.webp)

This report is comprised of the following columns:

- Access Time – Date and timestamp for when the operation occurred
- Trustee Name – Owner of the trustee account
- Trustee Account – Active Directory account associated with the trustee
- Department – Department to which the trustee account belongs
- Title – Trustee’s title as read from Active Directory
- Mail – Trustee’s email account as read from Active Directory
- EmployeeId – Corporate ID for the employee as read from Active Directory
- Description – Description of the trustee object as read from Active Directory
- DistinguishedName – Distinguished name for the trustee account
- ObjectSid – Security ID of the object
- Disabled – True or False if trustee account is disabled
- Deleted – True or False if trustee account is deleted
- Resource – Resource type being accessed
- Operation – Name of operation logged
- Access – Whether the trustee was granted access to execute the operation: **Allowed** or
  **Denied**
- Path – Original location where the operation occurred
- Target Path – New location if changed by the operation. Blank if the operation does not result in
  a new path.
- Process Name – Name of the process which performed the operation

There is one table at the bottom displaying Permission Changes for the selected event. It contains
details on the trustee whose permissions were updated, added, or removed. This table is comprised of
the following columns:

- Trustee Name – Trustee whose permissions were modified
- Trustee Account – Active Directory account associated with the trustee
- ObjectSid – Security ID of the object
- Change Type – Type of change that occurred:

  - Add – Permission added to trustee
  - Remove – Permission removed from trustee
  - Update – Permission modified for trustee

- Ace Type – Whether or not the right assigned is allowed or denied
- Inheritance – Whether or not the Ace is inherited
- Ace Flags – Inheritance flag description
- Access Rights – Type of right assigned

The table data grid functions the same way as other table grids. See the
[Data Grid Features](/docs/accessinformationcenter/11.6/reference/data-grid.md) topic
for additional information.

# Activity Statistics Report

The Activity Statistics report at the share and subfolder levels provides statistical activity event
information by user on the selected server during the specified date range. This report includes
line graphs for Active Users Trend and Traffic Trend. The **Include subfolders** option is active by
default until removed. See the
[Results Pane](/docs/accessinformationcenter/11.6/resource-audit/navigation/overview.md#results-pane)
topic for information on changing this option.

![Activity Statistics report at the share and subfolder levels](/img/versioned_docs/accessinformationcenter_11.6/access/informationcenter/resourceaudit/filesystem/sharesubfolder/shareactivitystatistics.webp)

This report is comprised of the following columns:

- Trustee Name – Owner of the trustee account
- Trustee Account – Active Directory account associated with the trustee
- Department – Department to which the trustee account belongs
- Title – Trustee’s title as read from Active Directory
- Mail – Trustee’s email account as read from Active Directory
- EmployeeId – Corporate ID for the employee as read from Active Directory
- Description – Description of the trustee object as read from Active Directory
- DistinguishedName – Distinguished name for the trustee account
- ObjectSid – Security ID of the object
- Disabled – True or False if trustee account is disabled
- Deleted – True or False if trustee account is deleted
- Stale – True or False if trustee account is stale (according to the length of inactive time used
  by the Enterprise Auditor data collection and analysis configuration to identify stale accounts)
- Reads – Count of view/read operations on files and subfolders
- Writes – Count of edit/modify operations on files and subfolders
- Manages – Count of permission change operations on files and subfolders
- Deletes – Count of delete operations on files and subfolders

The table data grid functions the same way as other table grids. See the
[Data Grid Features](/docs/accessinformationcenter/11.6/reference/data-grid.md) topic
for additional information.

There are two line graphs at the bottom displaying Active Users Trend and Traffic Trend for the
selected resource.

![Active Users Trend line graph](/img/versioned_docs/accessinformationcenter_11.6/access/informationcenter/resourceaudit/filesystem/sharesubfolder/shareactiveuserstrendgraph.webp)

The Active Users Trend line graph provides a visual representation of the number of active users
over the selected date range. It indicates how many users are performing operations per day.

![Traffic Trend line graph](/img/versioned_docs/accessinformationcenter_11.6/access/informationcenter/resourceaudit/filesystem/sharesubfolder/sharetraffictrendgraph.webp)

The Traffic Trend line graph provides a visual representation of the number of operations events
that occurred by operation type over the selected date range. It indicates what volume of operations
occurred per day. Each operation type is shown with a different color, as indicated by the legend.

See the
[Activity Report Results Pane Features](/docs/accessinformationcenter/11.6/resource-audit/navigation/overview.md#activity-report-results-pane-features)
topic for instructions on filtering the trend graphs.

# Effective Access Report

The Effective Access report at the share and subfolder levels provides insight into who has what
level of access to this resource through a calculation that encompasses server policies, share and
folder permissions, and group membership. It contains a list of all trustees with access to the
selected resource and specifies the effective access level. This report includes a Permission Source
table.

![Effective Access report at the share and subfolder levels](/img/versioned_docs/accessinformationcenter_11.6/access/informationcenter/resourceaudit/filesystem/sharesubfolder/shareeffectiveaccess.webp)

This report is comprised of the following columns:

- Trustee Type – Type of the trustee (for example, Domain User or Domain Group)
- Trustee Name – Owner of the trustee account
- Trustee Account – Active Directory account associated with the trustee
- Department – Department to which the trustee account belongs
- Title – Trustee’s title as read from Active Directory
- Mail – Trustee’s email account as read from Active Directory
- EmployeeId – Corporate ID for the employee as read from Active Directory
- Description – Description of the trustee object as read from Active Directory
- DistinguishedName – Distinguished name for the trustee account
- ObjectSid – Security ID of the object
- Disabled – True or False if trustee account is disabled
- Deleted – True or False if trustee account is deleted
- Stale – True or False if trustee account is stale (according to the length of inactive time used
  by the Enterprise Auditor data collection and analysis configuration to identify stale accounts)
- Direct – True or False if the permission is directly assigned
- Changed – True or False if the trustee has changes modeled that would impact access to the
  selected resource

The following rights are a normalized representation of the Share and NTFS permissions granted to
the trustee:

- List – Right to view list of files and subfolders
- Read – Right to view/read files and subfolders
- Write – Right to add or modify files and subfolders
- Delete – Right to delete files and subfolders
- Manage – Equivalent to full control over files and subfolders

If the selected trustee in the top section of the report is a group, the Group Membership pane
displays the group membership, including nested groups.

There is one table at the bottom displaying Permission Source for the select trustee. It contains
all of the ways the selected trustee has been granted rights to the selected resource.

![Permission Source table](/img/versioned_docs/accessinformationcenter_11.6/access/informationcenter/resourceaudit/filesystem/sharesubfolder/shareeffectiveaccesstable.webp)

The number of rows for this table indicates the number of ways this trustee has been granted access.
This table is comprised of the following columns:

- Source Path – Location for which the trustee was granted rights to the selected resource, which
  can be represented two ways:

  - Directly Applied – Rights granted directly to the selected trustee
  - Access through another trustee, path starts with trustee assigned the direct rights and shows
    all nested groups leading to the selected trustee

- Source Type – Share or folder source of the permission
- Source Name – Name of the share or folder where the permission is assigned

The following rights are a normalized representation of the Share and NTFS permissions granted to
the trustee:

- List – Right to view list of files and subfolders
- Read – Right to view/read files and subfolders
- Write – Right to add or modify files and subfolders
- Delete – Right to delete files and subfolders
- Manage – Equivalent to full control over files and subfolders

The following columns display the combined direct and inherited rights:

- Allow Mask – Bitmask corresponding to Windows ACE permission bits for combined direct and
  inherited allow rights
- Deny Mask – Bitmask corresponding to Windows ACE permission bits for combined direct inherited
  deny rights

In the example above, the selected trustee has three sources of access to the selected resource. One
source is directly applied, one is through share permissions, one is through a policy. In order for
this trustee’s access to the selected resource to be changed, each of these source paths must be
taken into consideration.

# Permissions Report

The Permissions report at the share and subfolder levels provides a list of trustees with
permissions for the selected resource. This report includes a table with trustee access levels
Compared to Parent.

If activity is being monitored for the selected resource, then this report indicates where stale
permissions exist. See the [Stale Permissions](#stale-permissions) topic for additional information.

![Permissions report at the share and subfolder levels](/img/versioned_docs/accessinformationcenter_11.6/access/informationcenter/resourceaudit/filesystem/sharesubfolder/sharepermissions.webp)

This report is comprised of the following columns:

- Trustee Type – Type of the trustee (for example, Domain User or Domain Group)
- Trustee Name – Owner of the trustee account
- Trustee Account – Active Directory account associated with the trustee
- Department – Department to which the trustee account belongs
- Title – Trustee’s title as read from Active Directory
- Mail – Trustee’s email account as read from Active Directory
- EmployeeId – Corporate ID for the employee as read from Active Directory
- Description – Description of the trustee object as read from Active Directory
- DistinguishedName – Distinguished name for the trustee account
- ObjectSid – Security ID of the object
- Disabled – True or False if trustee account is disabled
- Deleted – True or False if trustee account is deleted
- Stale – True or False if trustee account is stale (according to the length of inactive time used
  by the Enterprise Auditor data collection and analysis configuration to identify stale accounts)
- Source – Share or Folder source of the permission
- Type – Direct or Inherited type of permission

The following rights are a normalized representation of the Share and NTFS permissions granted to
the trustee:

- List – Right to view list of files and subfolders
- Read – Right to view/read files and subfolders
- Write – Right to add or modify files and subfolders
- Delete – Right to delete files and subfolders
- Manage – Equivalent to full control over files and subfolders

The following columns display the combined direct and inherited rights:

- Allow Mask – Bitmask corresponding to Windows ACE permission bits for combined direct and
  inherited allow rights
- Deny Mask – Bitmask corresponding to Windows ACE permission bits for combined direct inherited
  deny rights

If the selected trustee in the top section of the report is a group, the Group Membership pane
displays the group membership, including nested groups.

There is one table at the bottom displaying Compared to Parent permissions for the select trustee.
It contains information on explicit permissions granted for the selected resource.

![Compared to Parent table](/img/versioned_docs/accessinformationcenter_11.6/access/informationcenter/resourceaudit/filesystem/sharesubfolder/sharepermissionstable.webp)

This table will be blank unless an Explicit Permissions icon is attached to the resource in the
Resources pane. See the
[Resources Pane](/docs/accessinformationcenter/11.6/resource-audit/navigation/overview.md#resources-pane)
topic for additional information. This table is comprised of the same columns as the primary report.

## Stale Permissions

The Permissions report also displays where stale permissions exists. Stale permissions provide a way
to identify when permissions assigned to a resource are unused. Unused permissions can be removed,
if desired.

A stale permission is defined as an access level not used to perform an activity on the resource
within the value set for the **ActivityDays** parameter in the `web.config` file. By default this is
set to 60 days. This feature requires the Enterprise Auditor File System Activity Auditing (FSAC)
collection jobs to be executed on a regular basis.

Select the **Highlight active permissionss** checkbox to show permissions that are in use. When a
user or effective member of a group that has permissions to a resource also has activity on the
resource, a yellow icon is displayed for the permission type to indicate the access level used to
perform the activity. Therefore, access level cells not highlighted when activity is being monitored
represent permissions that are identified as stale.

![Stale and active permissions](/img/versioned_docs/accessinformationcenter_11.6/access/informationcenter/resourceaudit/filesystem/sharesubfolder/stalepermissions.webp)

In the Permissions report, the yellow icons show permissions that are active, and the green check
marks show permissions that are stale. The example shows that Jazmina’s activity has used the List,
Write, Delete, and Manage permissions but not the Read permission. It also shows there are at least
three other trustees with stale permissions.

![Activity Statistics report](/img/versioned_docs/accessinformationcenter_11.6/access/informationcenter/resourceaudit/filesystem/sharesubfolder/stalepermissionsevents.webp)

The Activity Statisticsreport indicates that the trustee Jazmina has performed write, manage, and
delete events on the selected resource. See the
[Activity Statistics Report](/docs/accessinformationcenter/11.6/resource-audit/file-systems/windows-shares.md) topic
for additional information.

![Effective Access report](/img/versioned_docs/accessinformationcenter_11.6/access/informationcenter/resourceaudit/filesystem/sharesubfolder/stalepermissionsaccess.webp)

The Effective Access report shows that Jazmina has access to the resource through the Group_Manage
group, and the access is directly applied. See the
[Effective Access Report](/docs/accessinformationcenter/11.6/resource-audit/file-systems/windows-shares.md) topic
for additional information.

# Sensitive Content Report

The Sensitive Content report at the share and subfolder levels provides a list of files and a hit
count per file where criteria matches were found on the selected resource. This report includes a
table with criteria matches visible to Access Information Center users with either Administrator or
Security Team roles. The Matches table requires the **store discovered sensitive data**
configuration for the Enterprise Auditor data collection or it will be blank.

![Sensitive Content report at the share and subfolder levels](/img/versioned_docs/accessinformationcenter_11.6/access/informationcenter/resourceaudit/filesystem/sharesubfolder/sharesensitivecontent.webp)

This report is comprised of the following columns:

- Criteria Name – Type of potentially sensitive criteria matches found
- Criteria Type – Pattern for pattern based matches (System Criteria), and subject type based on
  Subject Profile matches (for example, Customer, Employee, and so on)
- Path – Location of the file where the criteria matches were found
- Sub File – File name if the sensitive data files reside in a PST file or a ZIP file
- Count – Number of criteria matches found within each file
- Attributes – Comma separated list of Attributes found for the identity

There is one table at the bottom displaying Matches in the files where the selected criterion value
were found:

- Prefix – Text just prior to the sensitive data match in the file
- Match – Lists any sensitive data matches found for the highlighted criteria in the top grid of the
  report
- Suffix – Text just after the sensitive data match in the file
- Sub File – File name if the sensitive data files reside in a PST file or a ZIP file

# Server Level Reports

The following reports are available at the server level:

- [Activity Details Report](/docs/accessinformationcenter/11.6/resource-audit/file-systems/windows-shares.md)
- [Activity Statistics Report](/docs/accessinformationcenter/11.6/resource-audit/file-systems/windows-shares.md)
- [Exceptions Report](/docs/accessinformationcenter/11.6/resource-audit/file-systems/exceptions.md)
- [Scan Summary Report](/docs/accessinformationcenter/11.6/resource-audit/file-systems/windows-shares.md)
- [Sensitive Content Details Report](/docs/accessinformationcenter/11.6/resource-audit/file-systems/windows-shares.md)
- [Sensitive Content Summary Report](/docs/accessinformationcenter/11.6/resource-audit/file-systems/windows-shares.md)
- [Share Activity Summary Report](/docs/accessinformationcenter/11.6/resource-audit/file-systems/windows-shares.md)

# Activity Details Report

The Activity Details report at the server level provides details on every operation logged during
the selected date range. Activity on DFS Namespaces at this level is rolled up to the server hosting
the DFS Namespace. This report includes a Permission Changes table.

![Activity Details report at the server level](/img/versioned_docs/accessinformationcenter_11.6/access/informationcenter/resourceaudit/filesystem/server/serveractivitydetails.webp)

This report is comprised of the following columns:

- Access Time – Date and timestamp for when the operation occurred
- Trustee Name – Owner of the trustee account
- Trustee Account – Active Directory account associated with the trustee
- Department – Department to which the trustee account belongs
- Title – Trustee’s title as read from Active Directory
- Mail – Trustee’s email account as read from Active Directory
- EmployeeId – Corporate ID for the employee as read from Active Directory
- Description – Description of the trustee object as read from Active Directory
- DistinguishedName – Distinguished name for the trustee account
- ObjectSid – Security ID of the object
- Disabled – True or False if trustee account is disabled
- Deleted – True or False if trustee account is deleted
- Resource – Resource type being accessed
- Operation – Name of operation logged
- Access – Whether the trustee was granted access to execute the operation: **Allowed** or
  **Denied**
- Path – Original location where the operation occurred
- Target Path – New location if changed by the operation. Blank if the operation does not result in
  a new path.
- Process Name – Name of the process which performed the operation

There is one table at the bottom displaying Permission Changes for the selected event. It contains
details on the trustee whose permissions were updated, added, or removed. This table is comprised of
the following columns:

- Trustee Name – Trustee whose permissions were modified
- Trustee Account – Active Directory account associated with the trustee
- ObjectSid – Security ID of the object
- Change Type – Type of change that occurred:

  - Add – Permission added to trustee
  - Remove – Permission removed from trustee
  - Update – Permission modified for trustee

- Ace Type – Whether or not the right assigned is allowed or denied
- Inheritance – Whether or not the Ace is inherited
- Ace Flags – Inheritance flag description
- Access Rights – Type of right assigned

# Activity Statistics Report

The Activity Statistics report at the server level provides statistical activity event information
by user on the selected server during the specified date range. Activity on DFS Namespaces at this
level is rolled up to the server hosting the DFS Namespace. This report includes line graphs for
Active Users Trend and Traffic Trend.

![Activity Statistics report at the server level](/img/versioned_docs/accessinformationcenter_11.6/access/informationcenter/resourceaudit/filesystem/server/serveractivitystatistics.webp)

This report is comprised of the following columns:

- Trustee Name – Owner of the trustee account
- Trustee Account – Active Directory account associated with the trustee
- Department – Department to which the trustee account belongs
- Title – Trustee’s title as read from Active Directory
- Mail – Trustee’s email account as read from Active Directory
- EmployeeId – Corporate ID for the employee as read from Active Directory
- Description – Description of the trustee object as read from Active Directory
- DistinguishedName – Distinguished name for the trustee account
- ObjectSid – Security ID of the object
- Disabled – True or False if trustee account is disabled
- Deleted – True or False if trustee account is deleted
- Stale – True or False if trustee account is stale (according to the length of inactive time used
  by the Enterprise Auditor data collection and analysis configuration to identify stale accounts)
- Reads – Count of view/read operations on files and subfolders
- Writes – Count of edit/modify operations on files and subfolders
- Manages – Count of permission change operations on files and subfolders
- Deletes – Count of delete operations on files and subfolders

The table data grid functions the same way as other table grids. See the
[Data Grid Features](/docs/accessinformationcenter/11.6/reference/data-grid.md) topic
for additional information.

There are two line graphs at the bottom displaying Active Users Trend and Traffic Trend for the
selected resource.

![Active Users Trend line graph](/img/versioned_docs/accessinformationcenter_11.6/access/informationcenter/resourceaudit/filesystem/nfsexports/activeuserstrendgraph.webp)

The Active Users Trend line graph provides a visual representation of the number of active users
over the selected date range. It indicates how many users are performing operations per day.

![Traffic Trend line graph](/img/versioned_docs/accessinformationcenter_11.6/access/informationcenter/resourceaudit/filesystem/nfsexports/traffictrendgraph.webp)

The Traffic Trend line graph provides a visual representation of the number of operations events
that occurred by operation type over the selected date range. It indicates what volume of operations
occurred per day. Each operation type is shown with a different color, as indicated by the legend.

See the
[Activity Report Results Pane Features](/docs/accessinformationcenter/11.6/resource-audit/navigation/overview.md#activity-report-results-pane-features)
topic for instructions on filtering the trend graphs.

# Scan Summary Report

The Scan Summary report at the server level provides a summary view of all shares on the selected
server.

![Scan Summary report at the server level](/img/versioned_docs/accessinformationcenter_11.6/access/informationcenter/resourceaudit/filesystem/server/serverscansummary.webp)

This report is comprised of the following columns:

- Share Name – Name of the share
- Share Type – Admin or Shared type of share, an Admin share is a built-in share (for example, C$)
- Path – Location of the share
- Subfolders – Count of subfolders within the share
- Exceptions – Count of exceptions within the share

# Sensitive Content Details Report

The Sensitive Content Details report at the server level provides details of files where criteria
matches were found on the selected resource. This report includes a Matches table.

![Sensitive Content Details report at the server level](/img/versioned_docs/accessinformationcenter_11.6/access/informationcenter/resourceaudit/exchange/server/serversensitivecontentdetails.webp)

This report is comprised of the following columns:

- Share Name – Name of the share
- Criteria Name – Type of potentially sensitive criteria matches found
- Criteria Type – Pattern for pattern based matches (System Criteria), and subject type based on
  Subject Profile matches (for example, Customer, Employee, and so on)
- Path – Location of the file where the criteria matches were found
- Sub File – File name if the sensitive data files reside in a PST file or a ZIP file
- Count – Number of files with criteria matches
- Attributes – Comma separated list of Attributes found for the identity

There is one table at the bottom displaying Details on the files where the selected criterion value
were found:

- Prefix – Text just prior to the sensitive data match in the file
- Match – Lists any sensitive data matches found for the highlighted criteria in the top grid of the
  report
- Suffix – Text just after the sensitive data match in the file
- Sub File – File name if the sensitive data files reside in a PST file or a ZIP file

# Sensitive Content Summary Report

The Sensitive Content Summary report at the server level provides a count of files where criteria
matches were found on the selected resource. This report includes a Details table.

![Sensitive Content Summary report at the server level](/img/versioned_docs/accessinformationcenter_11.6/access/informationcenter/resourceaudit/exchange/server/serversensitivecontentsummary.webp)

This report is comprised of the following columns:

- Share Name – Name of the share
- Criteria Name – Type of potentially sensitive criteria matches found
- Criteria Type – Pattern for pattern based matches (System Criteria), and subject type based on
  Subject Profile matches (for example, Customer, Employee, and so on)
- Count – Number of files with criteria matches

There is one table at the bottom displaying Details on the files where the selected criterion
matches were found:

- Source — For System Criteria this shows the criteria name (for example, Credit Cards). For Subject
  Profiles criteria it shows the individual identities (for example, Jon Doe).
- Path – Location of the file where the criteria matches were found
- Sub File – File name if the sensitive data files reside in a PST file or a ZIP file
- Count – Number of criteria matches found within each file
- Attributes – Comma separated list of Attributes found for the identity

# Share Activity Summary Report

The Share Activity Summary report at the server level provides statistical activity event
information by share on the selected server during the specified date range. Activity on DFS
Namespaces at this level is rolled up to the server hosting the DFS Namespace.

![Share Activity Summary report at the server level](/img/versioned_docs/accessinformationcenter_11.6/access/informationcenter/resourceaudit/filesystem/server/servershareactivitysummary.webp)

This report is comprised of the following columns:

- Share Name – Name of the share
- Path – Location of the share
- Reads – Count of view/read operations on files and subfolders
- Writes – Count of edit/modify operations on files and subfolders
- Manages – Count of permission change operations on files and subfolders
- Deletes – Count of delete operations on files and subfolders

# Sensitive Content Summary Report

The Sensitive Content Summary report at the **File System** node provides a count of files where
criteria matches were found in the targeted environment. This report includes a Details table.

![Sensitive Content Summary report at the File System node](/img/versioned_docs/accessinformationcenter_11.6/access/informationcenter/resourceaudit/postgresql/sensitivecontentsummary.webp)

This report is comprised of the following columns:

- Server Name – Name of the server
- Criteria Name – Type of potentially sensitive criteria matches found
- Criteria Type – Pattern for pattern based matches (System Criteria), and subject type based on
  Subject Profile matches (for example, Customer, Employee, and so on)
- Count – Number of files with criteria matches

There is one table at the bottom displaying Details on the files where the selected criterion
matches were found:

- Source — For System Criteria this shows the criteria name (for example, Credit Cards). For Subject
  Profiles criteria it shows the individual identities (for example, Jon Doe).
- Path – Location of the file where the criteria matches were found
- Sub File – File name if the sensitive data files reside in a PST file or a ZIP file
- Count – Number of criteria matches found within each file
- Attributes – Comma separated list of Attributes found for the identity
