# NFS Exports Reports

NFS share data can be imported into the Access Information Center through configuration of
Enterprise Auditor File System Sensitive Data Discovery Auditing collection jobs. The following
report is available at the **NFS Exports** node:

- [Scan Summary Report](/docs/accessinformationcenter/11.6/resource-audit/file-systems/nfs-exports.md)

The following reports are available at the share and subfolder levels below the NFS Exports node:

- [Activity Details Report](/docs/accessinformationcenter/11.6/resource-audit/file-systems/nfs-exports.md)
- [Activity Statistics Report](/docs/accessinformationcenter/11.6/resource-audit/file-systems/nfs-exports.md)
- [Permissions Report](/docs/accessinformationcenter/11.6/resource-audit/file-systems/nfs-exports.md)
- [Sensitive Content Report](/docs/accessinformationcenter/11.6/resource-audit/file-systems/nfs-exports.md)

# Activity Details Report

The Activity Details report at the NFS Exports share and subfolder levels provides details on every
operations logged during the selected date range. This report includes a Permission Changes table.
The **Include subfolders** option is active by default until removed. See the
[Results Pane](/docs/accessinformationcenter/11.6/resource-audit/navigation/overview.md#results-pane)
topic for information on changing this option.

![Activity Details report at the NFS Exports share and subfolder levels](/img/versioned_docs/accessinformationcenter_11.6/access/informationcenter/resourceaudit/filesystem/nfsexports/nfsactivitydetails.webp)

This report is comprised of the following columns:

- Trustee Name – Owner of the trustee account
- Trustee Account – Active Directory account associated with the trustee
- Department – Department to which the trustee account belongs
- Title – Trustee’s title as read from Active Directory
- Mail – Trustee’s email account as read from Active Directory
- EmployeeId – Corporate ID for the employee as read from Active Directory
- Description – Description of the trustee object as read from Active Directory
- DistinguishedName – Distinguished name for the trustee account
- Trustee Sid – Security ID of the object
- Is Disabled – True or False if trustee account is disabled
- Is Deleted – True or False if trustee account is deleted
- Access Time – Date and timestamp for when the operation occurred
- Resource – Resource type being accessed
- Operation – Name of operation logged
- Access – Whether the trustee was granted access to execute the operation: **Allowed** or
  **Denied**
- Path – Original location where the operation occurred
- File Name – Name of the file the operation occurred on. Blank if the operation was not on a file
  resource type.
- Target Path – New location if changed by the operation. Blank if the operation does not result in
  a new path.
- Process Name – Name of the process which performed the operation

There is one table at the bottom displaying Permission Changes for the selected event. It contains
details on the trustee whose permissions were updated, added, or removed. This table is comprised of
the following columns:

- Trustee Name – Trustee whose permissions were modified
- Trustee Account – Active Directory account associated with the trustee
- Trustee Sid – Security ID of the object
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

The Activity Statistics report at the NFS Exports share and subfolder levels provides statistical
activity event information by user on the selected resource during the specified date range. This
report includes line graphs for Active Users Trend and Traffic Trend. The **Include subfolders**
option is active by default until removed. See the
[Results Pane](/docs/accessinformationcenter/11.6/resource-audit/navigation/overview.md#results-pane)
topic for information on changing this option.

![Activity Statistics report at the NFS Exports share and subfolder levels](/img/versioned_docs/accessinformationcenter_11.6/access/informationcenter/resourceaudit/filesystem/nfsexports/nfsactivitystatistics.webp)

This report is comprised of the following columns:

- Trustee Name – Owner of the trustee account
- Trustee Account – Active Directory account associated with the trustee
- Department – Department to which the trustee account belongs
- Title – Trustee’s title as read from Active Directory
- Mail – Trustee’s email account as read from Active Directory
- EmployeeId – Corporate ID for the employee as read from Active Directory
- Description – Description of the trustee object as read from Active Directory
- DistinguishedName – Distinguished name for the trustee account
- Trustee Sid – Security ID of the object
- Is Disabled – True or False if trustee account is disabled
- Is Deleted – True or False if trustee account is deleted
- Is Stale – True or False if trustee account is stale (according to the length of inactive time
  used by the Enterprise Auditor data collection and analysis configuration to identify stale
  accounts)
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

# Permissions Report

The Permissions report at the NFS Exports share and subfolder levels provides a list of trustees
with permissions for the selected resource and access level for each trustee.

![Permissions report at the NFS Exports share and subfolder levels](/img/versioned_docs/accessinformationcenter_11.6/access/informationcenter/resourceaudit/filesystem/nfsexports/nfspermissions.webp)

This report is comprised of the following columns:

- Trustee Name – Owner of the trustee account
- Trustee Account – Active Directory account associated with the trustee
- Trustee Sid – Security ID of the object
- Type – Direct or Inherited type of permission

The following rights are a normalized representation of the Share and NTFS permissions granted to
the trustee:

- List – Right to view list of files and subfolders
- Read – Right to view/read files and subfolders
- Write – Right to add or modify files and subfolders
- Delete – Right to delete files and subfolders
- Manage – Equivalent to full control over files and subfolders
- Allow – Granular rights allowed through the Share and NTFS permissions

# Scan Summary Report

The Scan Summary report at the **NFS Exports** node provides a summary view of all shares on the
server with the share type of Shared.

![Scan Summary report at the NFS Exports node](/img/versioned_docs/accessinformationcenter_11.6/access/informationcenter/resourceaudit/filesystem/nfsexports/nfsscansummary.webp)

This report is comprised of the following columns:

- Share Name – Name of the share
- Share Type – Shared type of share, this report is filtered to exclude Admin type of shares (for
  example, C$)
- Path – Location of the share
- Subfolders – Count of subfolders within the share
- Exceptions – Count of exceptions within the share

# Sensitive Content Report

The Sensitive Content report at the NFS Exports share and subfolder levels provides a list of files
and a hit count per file where criteria matches were found on the selected resource. This report
includes a table with criteria matches visible to Access Information Center users with either
Administrator or Security Team roles. The Matches table requires the **store discovered sensitive
data** configuration for the Enterprise Auditor data collection or it will be blank.

![Sensitive Content report at the NFS Exports share and subfolder levels](/img/versioned_docs/accessinformationcenter_11.6/access/informationcenter/resourceaudit/filesystem/nfsexports/nfssensitivecontent.webp)

This report is comprised of the following columns:

- Criteria Name – Type of potentially sensitive criteria matches found
- Path – Location of the file where the criteria matches were found
- Count – Number of criteria matches found within each file

There is one table at the bottom displaying Matches in the files where the selected criterion value
were found.

- Prefix – Text just prior to the sensitive data match in the file
- Match – Lists any sensitive data matches found for the highlighted criteria in the top grid of the
  report
- Suffix – Text just after the sensitive data match in the file
- Sub File – File name if the sensitive data files reside in a PST file or a ZIP file

**NOTE:** Up to five matches per file can be displayed.
