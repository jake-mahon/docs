# Activity Summary Report

The Activity Summary report at the **File System** node provides an overview of activity performed
on files and folders in each of the scanned servers. It reflects the total count of operations
performed in each server, including operations in folders that are not shared. This activity report
does not include a date range filter as it contains totals for all operations ever monitored by
Access Analyzer for the targeted environment.

![Activity Summary report at the File System node](/img/product_docs/threatmanager/threatmanager/administration/threatdetails/activitysummary.webp)

This report is comprised of the following columns:

- Server Name – Name of the server
- Operating System – Name of the server’s operating system
- Events – Total cumulative count of all operations events monitored for the server since the first
  scan
- Statistics – Roll-up information of the number of operations that have been performed by a trustee
  on a file or folder
- Recent Events – Date of the most recently scanned operations event

# Activity Details Report

The Activity Details report at the server level provides details on every operation logged during
the selected date range. Activity on DFS Namespaces at this level is rolled up to the server hosting
the DFS Namespace. This report includes a Permission Changes table.

![Activity Details report at the server level](/img/product_docs/accessinformationcenter/access/informationcenter/resourceaudit/filesystem/server/serveractivitydetails.webp)

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

![Activity Statistics report at the server level](/img/product_docs/accessinformationcenter/access/informationcenter/resourceaudit/filesystem/server/serveractivitystatistics.webp)

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
  by the Access Analyzer data collection and analysis configuration to identify stale accounts)
- Reads – Count of view/read operations on files and subfolders
- Writes – Count of edit/modify operations on files and subfolders
- Manages – Count of permission change operations on files and subfolders
- Deletes – Count of delete operations on files and subfolders

The table data grid functions the same way as other table grids. See the
[Data Grid Features](/docs/accessinformationcenter/12.0/access-management/data-grid-operations/index.md) topic for additional information.

There are two line graphs at the bottom displaying Active Users Trend and Traffic Trend for the
selected resource.

![Active Users Trend line graph](/img/product_docs/accessinformationcenter/access/informationcenter/resourceaudit/filesystem/nfsexports/activeuserstrendgraph.webp)

The Active Users Trend line graph provides a visual representation of the number of active users
over the selected date range. It indicates how many users are performing operations per day.

![Traffic Trend line graph](/img/product_docs/accessinformationcenter/access/informationcenter/resourceaudit/filesystem/nfsexports/traffictrendgraph.webp)

The Traffic Trend line graph provides a visual representation of the number of operations events
that occurred by operation type over the selected date range. It indicates what volume of operations
occurred per day. Each operation type is shown with a different color, as indicated by the legend.

See the
[Activity Report Results Pane Features](/docs/accessinformationcenter/12.0/resource-auditing/navigation-guide.md#activity-report-results-pane-features)
topic for instructions on filtering the trend graphs.

# Share Activity Summary Report

The Share Activity Summary report at the server level provides statistical activity event
information by share on the selected server during the specified date range. Activity on DFS
Namespaces at this level is rolled up to the server hosting the DFS Namespace.

![Share Activity Summary report at the server level](/img/product_docs/accessinformationcenter/access/informationcenter/resourceaudit/filesystem/server/servershareactivitysummary.webp)

This report is comprised of the following columns:

- Share Name – Name of the share
- Path – Location of the share
- Reads – Count of view/read operations on files and subfolders
- Writes – Count of edit/modify operations on files and subfolders
- Manages – Count of permission change operations on files and subfolders
- Deletes – Count of delete operations on files and subfolders

# Activity Details Report

The Activity Details report at the share and subfolder levels provides details on every operations
logged during the selected date range. This report includes a Permission Changes table. The
**Include subfolders** option is active by default until removed. See the
[Results Pane](/docs/accessinformationcenter/12.0/resource-auditing/navigation-guide.md#results-pane) topic for information on changing this
option.

![Activity Details report at the share and subfolder levels](/img/product_docs/accessinformationcenter/access/informationcenter/resourceaudit/filesystem/sharesubfolder/shareactivitydetails.webp)

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
[Data Grid Features](/docs/accessinformationcenter/12.0/access-management/data-grid-operations/index.md) topic for additional information.

# Activity Statistics Report

The Activity Statistics report at the share and subfolder levels provides statistical activity event
information by user on the selected server during the specified date range. This report includes
line graphs for Active Users Trend and Traffic Trend. The **Include subfolders** option is active by
default until removed. See the [Results Pane](/docs/accessinformationcenter/12.0/resource-auditing/navigation-guide.md#results-pane) topic for
information on changing this option.

![Activity Statistics report at the share and subfolder levels](/img/product_docs/accessinformationcenter/access/informationcenter/resourceaudit/filesystem/sharesubfolder/shareactivitystatistics.webp)

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
  by the Access Analyzer data collection and analysis configuration to identify stale accounts)
- Reads – Count of view/read operations on files and subfolders
- Writes – Count of edit/modify operations on files and subfolders
- Manages – Count of permission change operations on files and subfolders
- Deletes – Count of delete operations on files and subfolders

The table data grid functions the same way as other table grids. See the
[Data Grid Features](/docs/accessinformationcenter/12.0/access-management/data-grid-operations/index.md) topic for additional information.

There are two line graphs at the bottom displaying Active Users Trend and Traffic Trend for the
selected resource.

![Active Users Trend line graph](/img/product_docs/accessinformationcenter/access/informationcenter/resourceaudit/filesystem/sharesubfolder/shareactiveuserstrendgraph.webp)

The Active Users Trend line graph provides a visual representation of the number of active users
over the selected date range. It indicates how many users are performing operations per day.

![Traffic Trend line graph](/img/product_docs/accessinformationcenter/access/informationcenter/resourceaudit/filesystem/sharesubfolder/sharetraffictrendgraph.webp)

The Traffic Trend line graph provides a visual representation of the number of operations events
that occurred by operation type over the selected date range. It indicates what volume of operations
occurred per day. Each operation type is shown with a different color, as indicated by the legend.

See the
[Activity Report Results Pane Features](/docs/accessinformationcenter/12.0/resource-auditing/navigation-guide.md#activity-report-results-pane-features)
topic for instructions on filtering the trend graphs.

# Activity Details Report

The Activity Details report at the NFS Exports share and subfolder levels provides details on every
operations logged during the selected date range. This report includes a Permission Changes table.
The **Include subfolders** option is active by default until removed. See the
[Results Pane](/docs/accessinformationcenter/12.0/resource-auditing/navigation-guide.md#results-pane) topic for information on changing this
option.

![Activity Details report at the NFS Exports share and subfolder levels](/img/product_docs/accessinformationcenter/access/informationcenter/resourceaudit/filesystem/nfsexports/nfsactivitydetails.webp)

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
[Data Grid Features](/docs/accessinformationcenter/12.0/access-management/data-grid-operations/index.md) topic for additional information.

# Activity Statistics Report

The Activity Statistics report at the NFS Exports share and subfolder levels provides statistical
activity event information by user on the selected resource during the specified date range. This
report includes line graphs for Active Users Trend and Traffic Trend. The **Include subfolders**
option is active by default until removed. See the
[Results Pane](/docs/accessinformationcenter/12.0/resource-auditing/navigation-guide.md#results-pane) topic for information on changing this
option.

![Activity Statistics report at the NFS Exports share and subfolder levels](/img/product_docs/accessinformationcenter/access/informationcenter/resourceaudit/filesystem/nfsexports/nfsactivitystatistics.webp)

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
  used by the Access Analyzer data collection and analysis configuration to identify stale accounts)
- Reads – Count of view/read operations on files and subfolders
- Writes – Count of edit/modify operations on files and subfolders
- Manages – Count of permission change operations on files and subfolders
- Deletes – Count of delete operations on files and subfolders

The table data grid functions the same way as other table grids. See the
[Data Grid Features](/docs/accessinformationcenter/12.0/access-management/data-grid-operations/index.md) topic for additional information.

There are two line graphs at the bottom displaying Active Users Trend and Traffic Trend for the
selected resource.

![Active Users Trend line graph](/img/product_docs/accessinformationcenter/access/informationcenter/resourceaudit/filesystem/nfsexports/activeuserstrendgraph.webp)

The Active Users Trend line graph provides a visual representation of the number of active users
over the selected date range. It indicates how many users are performing operations per day.

![Traffic Trend line graph](/img/product_docs/accessinformationcenter/access/informationcenter/resourceaudit/filesystem/nfsexports/traffictrendgraph.webp)

The Traffic Trend line graph provides a visual representation of the number of operations events
that occurred by operation type over the selected date range. It indicates what volume of operations
occurred per day. Each operation type is shown with a different color, as indicated by the legend.

See the
[Activity Report Results Pane Features](/docs/accessinformationcenter/12.0/resource-auditing/navigation-guide.md#activity-report-results-pane-features)
topic for instructions on filtering the trend graphs.
