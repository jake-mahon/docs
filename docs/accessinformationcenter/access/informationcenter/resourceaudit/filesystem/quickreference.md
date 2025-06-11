# File System Reports Quick Reference Guide

The following File System reports are available for selections within the Resources pane.

## File System Node Reports

The following reports are available at the File System node level:

| Report | Description |
| --- | --- |
| [Activity Summary Report](/docs/accessinformationcenter/access/informationcenter/resourceaudit/filesystem/activitysummary.md) | Provides an overview of activity performed on files and folders in each of the scanned servers. It reflects the total count of operations performed in each server, including activity in folders that are not shared. This is an activity report that does not include a date range filter, as it contains totals for all operations ever monitored by Access Analyzer for the targeted environment. |
| [Exceptions Report](/docs/accessinformationcenter/access/informationcenter/resourceaudit/filesystem/exceptions.md) | Provides a list of exceptions that were found across the targeted environment. This report includes a Details table. |
| [Modeled Access Changes Report](/docs/accessinformationcenter/access/informationcenter/resourceaudit/changemodeling/modeledaccesschanges.md) | Provides an enterprise wide view of modeled access changes. This report is blank if no changes have been modeled or if the modeled changes have no impact on the environment. This report includes the following tables:   - Permission Source – Displays all of the ways the trustee has been granted rights to the resource - Activity – Displays additional information on recent activity performed by the trustee which would have been impacted by the modeled change |
| [Sensitive Content Summary Report](/docs/accessinformationcenter/access/informationcenter/resourceaudit/filesystem/sensitivecontentsummary.md) | Provides a count of files where criteria matches were found in the targeted environment. This report includes a Details table. |
| [Server Summary Report](/docs/accessinformationcenter/access/informationcenter/resourceaudit/filesystem/serversummary.md) | Provides a top-level view of servers that have been scanned. |

## File System > Server Level Reports

The following reports are available at the server level:

| Report | Description |
| --- | --- |
| [Activity Details Report](/docs/accessinformationcenter/access/informationcenter/resourceaudit/filesystem/server/activitydetails.md) | Provides details on every operation logged during the selected date range. Activity on DFS Namespaces at this level is rolled up to the server hosting the DFS Namespace. This report includes a Permission Changes table. |
| [Activity Statistics Report](/docs/accessinformationcenter/access/informationcenter/resourceaudit/filesystem/server/activitystatistics.md) | Provides statistical activity event information by user on the selected server during the specified date range. Activity on DFS Namespaces at this level is rolled up to the server hosting the DFS Namespace. This report includes line graphs for Active Users Trend and Traffic Trend. |
| [Exceptions Report](/docs/accessinformationcenter/access/informationcenter/resourceaudit/filesystem/server/exceptions.md) | Provides a list of exceptions that were found within shares on the selected server. This report includes a Details table. |
| [Scan Summary Report](/docs/accessinformationcenter/access/informationcenter/resourceaudit/filesystem/server/scansummary.md) | Provides a summary view of all shares on the selected server. |
| [Sensitive Content Details Report](/docs/accessinformationcenter/access/informationcenter/resourceaudit/filesystem/server/sensitivecontentdetails.md) | Provides details of files where criteria matches were found on the selected resource. This report includes a Matches table. |
| [Sensitive Content Summary Report](/docs/accessinformationcenter/access/informationcenter/resourceaudit/filesystem/server/sensitivecontentsummary.md) | Provides a count of files where criteria matches were found on the selected resource. This report includes a Details table. |
| [Share Activity Summary Report](/docs/accessinformationcenter/access/informationcenter/resourceaudit/filesystem/server/shareactivitysummary.md) | Provides statistical activity event information by share on the selected server during the specified date range. Activity on DFS Namespaces at this level is rolled up to the server hosting the DFS Namespace. |

## File System > Server > Local Policies > Policy Level Reports

The following reports are available at the local policy level:

__NOTE:__ There are no reports at the Local Policies node level.

| Report | Description |
| --- | --- |
| [Effective Policy Report](/docs/accessinformationcenter/access/informationcenter/resourceaudit/filesystem/localpolicies/effectivepolicy.md) | Provides a list of users and groups who are effectively granted or denied access through the selected policy. |
| [Policy Report](/docs/accessinformationcenter/access/informationcenter/resourceaudit/filesystem/localpolicies/policy.md) | Provides a list of policies assigned for the selected local policy. |

## File System > Server > NFS Exports Node Report

The following report is available at the NFS Exports node level:

| Report | Description |
| --- | --- |
| [Scan Summary Report](/docs/accessinformationcenter/access/informationcenter/resourceaudit/filesystem/nfsexports/scansummary.md) | Provides a summary view of all shares on the server with the share type of Shared. |

## File System > Server > NFS Exports > Share & Subfolder Levels

The following reports are available at the share and subfolder levels under the NFS Exports node:

| Report | Description |
| --- | --- |
| [Activity Details Report](/docs/accessinformationcenter/access/informationcenter/resourceaudit/filesystem/nfsexports/activitydetails.md) | Provides details on every operation logged during the selected date range. This report includes a Permission Changes table. |
| [Activity Statistics Report](/docs/accessinformationcenter/access/informationcenter/resourceaudit/filesystem/nfsexports/activitystatistics.md) | Provides statistical activity event information by user on the selected resource during the specified date range. This report includes line graphs for Active Users Trend and Traffic Trend. |
| [Permissions Report](/docs/accessinformationcenter/access/informationcenter/resourceaudit/filesystem/nfsexports/permissions.md) | Provides a list of trustees with permissions for the selected resource and access level for each trustee. |
| [Sensitive Content Report](/docs/accessinformationcenter/access/informationcenter/resourceaudit/filesystem/nfsexports/sensitivecontent.md) | Provides a list of files and a hit count per file where criteria matches were found on the selected resource. This report includes a table with criteria matches visible to Access Information Center users with either Administrator or Security Team roles. The Matches table requires the store discovered sensitive data configuration for the Access Analyzer data collection or it will be blank. |

## File System > Server > Admin Shares Nodes Report

The following report is available at the Admin Shares node level:

| Report | Description |
| --- | --- |
| [Scan Summary Report](/docs/accessinformationcenter/access/informationcenter/resourceaudit/filesystem/adminshares/scansummary.md) | Provides a summary view of all shares on the server with the share type of Admin. |

## File System > Server > Shared Folders Node Report

The following report is available at the Shared Folders node level:

| Report | Description |
| --- | --- |
| [Scan Summary Report](/docs/accessinformationcenter/access/informationcenter/resourceaudit/filesystem/sharedfolders/scansummary.md) | Provides a summary view of all shares on the server with the share type of Shared. |

## File System > Server > Shared Folders > Share & Subfolder Level Reports

The following reports are available at the share and subfolder levels:

| Report | Description |
| --- | --- |
| [Activity Details Report](/docs/accessinformationcenter/access/informationcenter/resourceaudit/filesystem/sharesubfolder/activitydetails.md) | Provides details on every operations logged during the selected date range. This report includes a Permission Changes table. |
| [Activity Statistics Report](/docs/accessinformationcenter/access/informationcenter/resourceaudit/filesystem/sharesubfolder/activitystatistics.md) | Provides statistical activity event information by user on the selected server during the specified date range This report includes line graphs for Active Users Trend and Traffic Trend. |
| [Effective Access Report](/docs/accessinformationcenter/access/informationcenter/resourceaudit/filesystem/sharesubfolder/effectiveaccess.md) | Provides insight into who has what level of access to this resource through a calculation that encompasses server policies, share and folder permissions, and group membership. It contains a list of all trustees with access to the selected resource and specifies the effective access level. This report includes a Permission Source table. |
| [Exceptions Report](/docs/accessinformationcenter/access/informationcenter/resourceaudit/filesystem/sharesubfolder/exceptions.md) | Displays a list of all trustees with access that are causing exceptions on the selected resource. This report includes a Permission Source table. |
| [Permissions Report](/docs/accessinformationcenter/access/informationcenter/resourceaudit/filesystem/sharesubfolder/permissions.md) | Provides a list of trustees with permissions for the selected resource. This report includes a table with trustee access levels Compared to Parent. |
| [Sensitive Content Report](/docs/accessinformationcenter/access/informationcenter/resourceaudit/filesystem/sharesubfolder/sensitivecontent.md) | Provides a list of files and a hit count per file where criteria matches were found on the selected resource. This report includes a table with criteria matches visible to Access Information Center users with either Administrator or Security Team roles. The Matches table requires the store discovered sensitive data configuration for the Access Analyzer data collection or it will be blank. |

## File System > Server > Exceptions Node Report

The following report is available at the Exceptions node level:

| Report | Description |
| --- | --- |
| [Exceptions Report](/docs/accessinformationcenter/access/informationcenter/resourceaudit/filesystem/exceptions/exceptions.md) | Provides a list of exceptions found on the server. This report includes a Details table. |

## File System > Server > Exceptions > Exception Type Level Report

The following report is available at the exceptions type level:

| Report | Description |
| --- | --- |
| [Exceptions Report by Type](/docs/accessinformationcenter/access/informationcenter/resourceaudit/filesystem/exceptions/exceptionsbytype.md) | Provides details on the selected exception type. This report includes a Permission Source table. |
