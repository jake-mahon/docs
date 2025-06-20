# File System Reports

File System reports are accessed through the Resource Audit interface. Explore the file system
resources by expanding the levels within the Resources pane and selecting the desired resource. The
data within these reports is collected by the Access Analyzer File System solution. See the File
System Solution topic in the
[Netwrix Access Analyzer Documentation](https://helpcenter.netwrix.com/category/accessanalyzer) for
additional information.

**NOTE:** In order to populate the NFS resources within the reports, the **.Active Directory
Inventory** job group must be configured to collect the `uid` and `uidNumber` attributes for user
objects. See the NFS Permissions for the Access Information Center topic in the
[Netwrix Access Analyzer Documentation](https://helpcenter.netwrix.com/category/accessanalyzer) for
more information.

File System resource reports identify the following information in the targeted file system
environment:

- What shares exist across the organization
- What permissions users and groups have on those shares
- How it all translates into effective access
- What users are doing on shares across the file system environment
- What potentially sensitive data exists across the targeted environment

If the File System DFS Auditing collection jobs are also in use, the DFS Namespaces will show at the
server level of the Resources pane with the DFS shares on the next level down the tree.

File System reports fall into the following categories:

- Access Reports

  - Report on permissions, effective access, and exceptions
  - Data collected by the Access Analyzer File System Access Auditing collection jobs

- Activity Reports

  - Report on monitored activity and alerts
  - Data collected by the Access Analyzer File System Activity Auditing collection jobs
  - Display information for a selected date range with local time stamps
  - Some of the reports also include trend graphs. Trend graphs provide a visual representation of
    the activity that occurred over the selected date range. See the
    [Activity Report Results Pane Features](/docs/accessinformationcenter/12.0/resource-auditing/navigation-guide.md#activity-report-results-pane-features)
    topic for instructions on selecting a date range and filtering the trend graphs.
  - Activity information is represented in two ways:

    - Activity Statistics – Statistics reports show the count of operation events performed for
      the selected resource within the selected date range. These events are normalized into the
      operations of Reads, Writes, Deletes, and Manages.
    - Activity Details – Details reports show the specific operation events that occurred for
      the selected resource within the selected date range

- Sensitive Content Reports

  - Report on files with potentially sensitive data
  - Data collected by the Access Analyzer File System Sensitive Data Discovery Auditing collection
    jobs

- NFS Export Reports

  - Reports on NFS shares
  - Data collected by the Access Analyzer File System Sensitive Data Discovery Auditing collection
    jobs

    - The **1-SEEK System Scans** job must be configured for NFS Exports

The following reports are available at the **File System** node:

- [Activity Summary Report](/docs/accessinformationcenter/12.0/resource-auditing/file-systems/activity-monitoring.md)
- [Exceptions Report](/docs/accessinformationcenter/12.0/resource-auditing/file-systems/index.md)
- [Sensitive Content Summary Report](/docs/accessinformationcenter/12.0/resource-auditing/sensitive-content/content-reporting.md)
- [Server Summary Report](/docs/accessinformationcenter/12.0/resource-auditing/file-systems/server-auditing.md)

# File System Reports Quick Reference Guide

The following File System reports are available for selections within the Resources pane.

## File System Node Reports

The following reports are available at the File System node level:

| Report                                                                                                                          | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Activity Summary Report](/docs/accessinformationcenter/12.0/resource-auditing/file-systems/activity-monitoring.md)             | Provides an overview of activity performed on files and folders in each of the scanned servers. It reflects the total count of operations performed in each server, including activity in folders that are not shared. This is an activity report that does not include a date range filter, as it contains totals for all operations ever monitored by Access Analyzer for the targeted environment.                                                                     |
| [Exceptions Report](/docs/accessinformationcenter/12.0/resource-auditing/file-systems/index.md)                                 | Provides a list of exceptions that were found across the targeted environment. This report includes a Details table.                                                                                                                                                                                                                                                                                                                                                      |
| [Modeled Access Changes Report](/docs/accessinformationcenter/12.0/resource-auditing/change-modeling/modeling-changes.md)       | Provides an enterprise wide view of modeled access changes. This report is blank if no changes have been modeled or if the modeled changes have no impact on the environment. This report includes the following tables: - Permission Source – Displays all of the ways the trustee has been granted rights to the resource - Activity – Displays additional information on recent activity performed by the trustee which would have been impacted by the modeled change |
| [Sensitive Content Summary Report](/docs/accessinformationcenter/12.0/resource-auditing/sensitive-content/content-reporting.md) | Provides a count of files where criteria matches were found in the targeted environment. This report includes a Details table.                                                                                                                                                                                                                                                                                                                                            |
| [Server Summary Report](/docs/accessinformationcenter/12.0/resource-auditing/file-systems/server-auditing.md)                   | Provides a top-level view of servers that have been scanned.                                                                                                                                                                                                                                                                                                                                                                                                              |

## File System > Server Level Reports

The following reports are available at the server level:

| Report                                                                                                                          | Description                                                                                                                                                                                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Activity Details Report](/docs/accessinformationcenter/12.0/resource-auditing/file-systems/activity-monitoring.md)             | Provides details on every operation logged during the selected date range. Activity on DFS Namespaces at this level is rolled up to the server hosting the DFS Namespace. This report includes a Permission Changes table.                                                                |
| [Activity Statistics Report](/docs/accessinformationcenter/12.0/resource-auditing/file-systems/activity-monitoring.md)          | Provides statistical activity event information by user on the selected server during the specified date range. Activity on DFS Namespaces at this level is rolled up to the server hosting the DFS Namespace. This report includes line graphs for Active Users Trend and Traffic Trend. |
| [Exceptions Report](/docs/accessinformationcenter/12.0/resource-auditing/file-systems/server-auditing.md)                       | Provides a list of exceptions that were found within shares on the selected server. This report includes a Details table.                                                                                                                                                                 |
| [Scan Summary Report](/docs/accessinformationcenter/12.0/resource-auditing/file-systems/server-auditing.md)                     | Provides a summary view of all shares on the selected server.                                                                                                                                                                                                                             |
| [Sensitive Content Details Report](/docs/accessinformationcenter/12.0/resource-auditing/sensitive-content/content-reporting.md) | Provides details of files where criteria matches were found on the selected resource. This report includes a Matches table.                                                                                                                                                               |
| [Sensitive Content Summary Report](/docs/accessinformationcenter/12.0/resource-auditing/sensitive-content/content-reporting.md) | Provides a count of files where criteria matches were found on the selected resource. This report includes a Details table.                                                                                                                                                               |
| [Share Activity Summary Report](/docs/accessinformationcenter/12.0/resource-auditing/file-systems/activity-monitoring.md)       | Provides statistical activity event information by share on the selected server during the specified date range. Activity on DFS Namespaces at this level is rolled up to the server hosting the DFS Namespace.                                                                           |

## File System > Server > Local Policies > Policy Level Reports

The following reports are available at the local policy level:

**NOTE:** There are no reports at the Local Policies node level.

| Report                                                                                                         | Description                                                                                                   |
| -------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| [Effective Policy Report](/docs/accessinformationcenter/12.0/resource-auditing/file-systems/local-policies.md) | Provides a list of users and groups who are effectively granted or denied access through the selected policy. |
| [Policy Report](/docs/accessinformationcenter/12.0/resource-auditing/file-systems/local-policies.md)           | Provides a list of policies assigned for the selected local policy.                                           |

## File System > Server > NFS Exports Node Report

The following report is available at the NFS Exports node level:

| Report                                                                                                     | Description                                                                        |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| [Scan Summary Report](/docs/accessinformationcenter/12.0/resource-auditing/file-systems/share-auditing.md) | Provides a summary view of all shares on the server with the share type of Shared. |

## File System > Server > NFS Exports > Share & Subfolder Levels

The following reports are available at the share and subfolder levels under the NFS Exports node:

| Report                                                                                                                  | Description                                                                                                                                                                                                                                                                                                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Activity Details Report](/docs/accessinformationcenter/12.0/resource-auditing/file-systems/activity-monitoring.md)     | Provides details on every operation logged during the selected date range. This report includes a Permission Changes table.                                                                                                                                                                                                                                                                             |
| [Activity Statistics Report](/docs/accessinformationcenter/12.0/resource-auditing/file-systems/activity-monitoring.md)  | Provides statistical activity event information by user on the selected resource during the specified date range. This report includes line graphs for Active Users Trend and Traffic Trend.                                                                                                                                                                                                            |
| [Permissions Report](/docs/accessinformationcenter/12.0/resource-auditing/file-systems/permissions-analysis.md)         | Provides a list of trustees with permissions for the selected resource and access level for each trustee.                                                                                                                                                                                                                                                                                               |
| [Sensitive Content Report](/docs/accessinformationcenter/12.0/resource-auditing/sensitive-content/content-detection.md) | Provides a list of files and a hit count per file where criteria matches were found on the selected resource. This report includes a table with criteria matches visible to Access Information Center users with either Administrator or Security Team roles. The Matches table requires the store discovered sensitive data configuration for the Access Analyzer data collection or it will be blank. |

## File System > Server > Admin Shares Nodes Report

The following report is available at the Admin Shares node level:

| Report                                                                                                     | Description                                                                       |
| ---------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| [Scan Summary Report](/docs/accessinformationcenter/12.0/resource-auditing/file-systems/share-auditing.md) | Provides a summary view of all shares on the server with the share type of Admin. |

## File System > Server > Shared Folders Node Report

The following report is available at the Shared Folders node level:

| Report                                                                                                     | Description                                                                        |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| [Scan Summary Report](/docs/accessinformationcenter/12.0/resource-auditing/file-systems/share-auditing.md) | Provides a summary view of all shares on the server with the share type of Shared. |

## File System > Server > Shared Folders > Share & Subfolder Level Reports

The following reports are available at the share and subfolder levels:

| Report                                                                                                                  | Description                                                                                                                                                                                                                                                                                                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Activity Details Report](/docs/accessinformationcenter/12.0/resource-auditing/file-systems/activity-monitoring.md)     | Provides details on every operations logged during the selected date range. This report includes a Permission Changes table.                                                                                                                                                                                                                                                                            |
| [Activity Statistics Report](/docs/accessinformationcenter/12.0/resource-auditing/file-systems/activity-monitoring.md)  | Provides statistical activity event information by user on the selected server during the specified date range This report includes line graphs for Active Users Trend and Traffic Trend.                                                                                                                                                                                                               |
| [Effective Access Report](/docs/accessinformationcenter/12.0/resource-auditing/file-systems/permissions-analysis.md)    | Provides insight into who has what level of access to this resource through a calculation that encompasses server policies, share and folder permissions, and group membership. It contains a list of all trustees with access to the selected resource and specifies the effective access level. This report includes a Permission Source table.                                                       |
| [Exceptions Report](/docs/accessinformationcenter/12.0/resource-auditing/file-systems/share-auditing.md)                | Displays a list of all trustees with access that are causing exceptions on the selected resource. This report includes a Permission Source table.                                                                                                                                                                                                                                                       |
| [Permissions Report](/docs/accessinformationcenter/12.0/resource-auditing/file-systems/permissions-analysis.md)         | Provides a list of trustees with permissions for the selected resource. This report includes a table with trustee access levels Compared to Parent.                                                                                                                                                                                                                                                     |
| [Sensitive Content Report](/docs/accessinformationcenter/12.0/resource-auditing/sensitive-content/content-detection.md) | Provides a list of files and a hit count per file where criteria matches were found on the selected resource. This report includes a table with criteria matches visible to Access Information Center users with either Administrator or Security Team roles. The Matches table requires the store discovered sensitive data configuration for the Access Analyzer data collection or it will be blank. |

## File System > Server > Exceptions Node Report

The following report is available at the Exceptions node level:

| Report                                                                                          | Description                                                                              |
| ----------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| [Exceptions Report](/docs/accessinformationcenter/12.0/resource-auditing/file-systems/index.md) | Provides a list of exceptions found on the server. This report includes a Details table. |

## File System > Server > Exceptions > Exception Type Level Report

The following report is available at the exceptions type level:

| Report                                                                                                  | Description                                                                                      |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| [Exceptions Report by Type](/docs/accessinformationcenter/12.0/resource-auditing/file-systems/index.md) | Provides details on the selected exception type. This report includes a Permission Source table. |

# Exceptions Report

The Exceptions report at the **File System** node provides a list of exceptions that were found
across the targeted environment. This report includes a Details table.

![Exceptions report at the File System node](/img/product_docs/accessinformationcenter/access/informationcenter/resourceaudit/activedirectory/exceptions.webp)

An exception is defined as a problem or risk to data governance security. Exceptions include open
shares and permissions granted to stale or disabled users. This table is blank if no exceptions were
found within the targeted file systems. This report is comprised of the following columns:

- Server Name – Name of the server
- Name – Type of exception found
- Description – Description of the exception type
- Count – Number of this type of exception found on the server

There is one table at the bottom displaying Details for the selected exception:

- Trustee Name – Owner of the trustee account
- Path – Location of the resource where the exception existss

# Exceptions Node Reports

The following report is available at the **Exceptions** node:

- [Exceptions Report](/docs/accessinformationcenter/12.0/resource-auditing/file-systems/index.md)

The **Exceptions** node displays when exceptions have been identified on the selected server. When
it is present, it can be expanded to view the exception type level reports. The following nodes may
show under the Exceptions node for a file system resource when that exception type has been
identified:

- Disabled Users – Folders where disabled users have been granted access
- Open resources – Folders that are openly accessible through file shares
- Stale Users – Folders where stale users have been granted access

The Exceptions report for each exception type level displays filtered exception information. See the
[Exceptions Report by Type](/docs/accessinformationcenter/12.0/resource-auditing/file-systems/index.md) topic for the report details.

# Exceptions Report

The Exceptions report at the **Exceptions** node provides a list of exceptions found on the server.
This report includes a Details table.

![Exceptions report at the Exceptions node](/img/product_docs/accessinformationcenter/access/informationcenter/resourceaudit/activedirectory/exceptions/exceptionsexceptions.webp)

An exception is defined as a problem or risk to data governance security. Exceptions include open
shares and permissions granted to stale or disabled users. This report is comprised of the following
columns:

- Server Name – Name of the server
- Name – Type of exception found
- Description – Description of the exception type
- Count – Number of this type of exception found

There is one table at the bottom displaying Details for the selected exception:

- Trustee Name – Owner of the trustee account
- Path – Location of the resource where the exception exists

# Exceptions Report by Type

The Exceptions report at the exception type level provides details on the selected exception type.
This report includes a Permission Source table.

![Exceptions report at the exception type level](/img/product_docs/accessinformationcenter/access/informationcenter/resourceaudit/activedirectory/exceptions/exceptionsbytype.webp)

An exception is defined as a problem or risk to data governance security. This report is comprised
of the following columns:

- Trustee Name – Owner of the trustee account
- Path – Location of the resource where the exception exists

If the selected trustee in the top section of the report is a group, the Group Membership pane
displays the group membership, including nested groups.

There is one table at the bottom displaying Permission Source for the select trustee. It contains
all of the ways the selected trustee has been granted rights to the selected resource.

![Permission Source table](/img/product_docs/accessinformationcenter/access/informationcenter/resourceaudit/filesystem/exceptions/exceptionsbytypetable.webp)

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
