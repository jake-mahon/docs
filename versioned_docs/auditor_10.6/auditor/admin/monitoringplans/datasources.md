# Manage Data Sources

You can fine-tune data collection for each data source. Settings that you configure for the data source will be applied to all items belonging to that data source. Using data source settings, you can, for example:

- Enable state-in-time data collection (currently supported for several data sources)
- Depending on the data source, customize the monitoring scope (e.g., enable read access auditing, monitoring of failed attempts)

To add, modify and remove data sources, enable or disable monitoring, you must be assigned the Global administrator role in the product or the Configurator role on the plan. See the [Role-Based Access and Delegation](/versioned_docs/auditor_10.6/auditor/admin/monitoringplans/delegation.md) topic for additional information.

## Modify Data Source Settings

Follow the steps to modify data source settings.

__Step 1 –__ Select the monitoring plan you need and click __Edit__.

__Step 2 –__ Within the monitoring plan window, highlight the data source (the first one is the row right under the blue table header) and click Edit data source on the right:

![Data source settings](/img/versioned_docs/auditor_10.6/auditor/admin/monitoringplans/mp_edit_data_source.png)

__Step 3 –__ Modify data source settings as you need.

__Step 4 –__ When finished, click __Save__.

Review the following for additional information:

- [Active Directory](/versioned_docs/auditor_10.6/auditor/admin/monitoringplans/activedirectory/overview.md)
- [Active Directory Federation Services ](/versioned_docs/auditor_10.6/auditor/admin/monitoringplans/adfs.md)
- [Microsoft Entra ID](/versioned_docs/auditor_10.6/auditor/admin/monitoringplans/microsoftentraid/overview.md)
- [Exchange](/versioned_docs/auditor_10.6/auditor/admin/monitoringplans/exchange/overview.md)
- [Exchange Online](/versioned_docs/auditor_10.6/auditor/admin/monitoringplans/exchangeonline/overview.md)
- [File Servers](/versioned_docs/auditor_10.6/auditor/admin/monitoringplans/fileservers/overview.md)
- [Group Policy](/versioned_docs/auditor_10.6/auditor/admin/monitoringplans/grouppolicy/overview.md)
- [Logon Activity](/versioned_docs/auditor_10.6/auditor/admin/monitoringplans/logonactivity/overview.md)
- [MS Teams](/versioned_docs/auditor_10.6/auditor/admin/monitoringplans/msteams.md)
- [Network Devices](/versioned_docs/auditor_10.6/auditor/admin/monitoringplans/networkdevices.md)
- [Oracle Database](/versioned_docs/auditor_10.6/auditor/admin/monitoringplans/oracle/overview.md)
- [SharePoint](/versioned_docs/auditor_10.6/auditor/admin/monitoringplans/sharepoint/overview.md)
- [SharePoint Online](/versioned_docs/auditor_10.6/auditor/admin/monitoringplans/sharepointonline/overview.md)
- [SQL Server](/versioned_docs/auditor_10.6/auditor/admin/monitoringplans/sqlserver/overview.md)
- [User Activity](/versioned_docs/auditor_10.6/auditor/admin/monitoringplans/useractivity/overview.md)
- [VMware](/versioned_docs/auditor_10.6/auditor/admin/monitoringplans/vmware/overview.md)
- [Windows File Share](/versioned_docs/auditor_10.6/auditor/admin/monitoringplans/fileservers/scope.md#windows-file-share)

Also, you can add a data source to the monitoring plan, or remove a data source that is no longer needed.

## Add a Data Source to an Existing Plan

Follow the steps to add a data source to existing plan.

__Step 1 –__ Select the monitoring plan you need and click Edit.

__Step 2 –__ In the right pane, select Add data source.

__Step 3 –__ Specify a data source.

__Step 4 –__ Configure settings specific to your data source.

__Step 5 –__ When finished, click the __Add__ button to save the settings.

## Add Items for Monitoring

Once you completed monitoring plan wizard and specified data sources, add items for monitoring. You can add as many items for a data source as you want. In this case, all items will share settings you specified for this data source.

Each data source has a dedicated item type. Netwrix Auditor automatically suggests item types associated with your data source.

| Data Source | Item |
| --- | --- |
| Active Directory  Group Policy  Exchange  Logon Activity | [Domain](/versioned_docs/auditor_10.6/auditor/admin/monitoringplans/activedirectory/overview.md#domain) |
| Active Directory Federation Services | [Federation Server](/versioned_docs/auditor_10.6/auditor/admin/monitoringplans/adfs.md#federation-server) |
| Microsoft Entra ID  Exchange Online  SharePoint Online  Microsoft Teams | [Microsoft Entra ID](/versioned_docs/auditor_10.6/auditor/admin/monitoringplans/microsoftentraid/overview.md#microsoft-entra-id) |
| File Servers  (including Windows file server, Dell, NetApp, Nutanix File server, Synology, and Qumulo) | [AD Container](/versioned_docs/auditor_10.6/auditor/admin/monitoringplans/activedirectory/overview.md#ad-container)  [Computer](/versioned_docs/auditor_10.6/auditor/admin/monitoringplans/fileservers/overview.md#computer)  [Dell Isilon](/versioned_docs/auditor_10.6/auditor/admin/monitoringplans/fileservers/overview.md#dell-isilon)  [Dell VNX VNXe](/versioned_docs/auditor_10.6/auditor/admin/monitoringplans/fileservers/overview.md#dell-vnx-vnxe)  [File Servers](/versioned_docs/auditor_10.6/auditor/admin/monitoringplans/fileservers/overview.md#file-servers)  [NetApp](/versioned_docs/auditor_10.6/auditor/admin/monitoringplans/fileservers/overview.md#netapp)  [Windows File Share](/versioned_docs/auditor_10.6/auditor/admin/monitoringplans/fileservers/scope.md#windows-file-share)  [Nutanix SMB Shares](/versioned_docs/auditor_10.6/auditor/admin/monitoringplans/fileservers/overview.md#nutanix-smb-shares)  [Qumulo](/versioned_docs/auditor_10.6/auditor/admin/monitoringplans/fileservers/overview.md#qumulo)  [Synology](/versioned_docs/auditor_10.6/auditor/admin/monitoringplans/fileservers/overview.md#synology)  By default, Auditor will monitor all shares stored in the specified location, except for hidden shares (both default and user-defined). If you want to monitor user-defined hidden shares, select the related option in the monitored item settings.  Remember that administrative hidden shares like default system root or Windows directory (ADMIN$), default drive shares (D$, E$), etc. will not be monitored. See the topics on the monitored items for details. |
| Network Devices | [Syslog Device](/versioned_docs/auditor_10.6/auditor/admin/monitoringplans/networkdevices.md#syslog-device)  [Cisco Meraki Dashboard](/versioned_docs/auditor_10.6/auditor/admin/monitoringplans/networkdevices.md#cisco-meraki-dashboard) |
| Oracle Database | [Oracle Database Instance](/versioned_docs/auditor_10.6/auditor/admin/monitoringplans/oracle/overview.md#oracle-database-instance) |
| SharePoint | [SharePoint Farm](/versioned_docs/auditor_10.6/auditor/admin/monitoringplans/sharepoint/overview.md#sharepoint-farm) |
| SQL Server | [SQL Server Instance](/versioned_docs/auditor_10.6/auditor/admin/monitoringplans/sqlserver/items.md#sql-server-instance)  [SQL Server Availability Group](/versioned_docs/auditor_10.6/auditor/admin/monitoringplans/sqlserver/items.md#sql-server-availability-group) |
| VMware | [VMware ESX/ESXi/vCenter](/versioned_docs/auditor_10.6/auditor/admin/monitoringplans/vmware/overview.md#vmware-esxesxivcenter) |
| Windows Server  User Activity | [Computer](/versioned_docs/auditor_10.6/auditor/admin/monitoringplans/fileservers/overview.md#computer)  [AD Container](/versioned_docs/auditor_10.6/auditor/admin/monitoringplans/activedirectory/overview.md#ad-container)  [File Servers](/versioned_docs/auditor_10.6/auditor/admin/monitoringplans/fileservers/overview.md#file-servers) |
| Netwrix API | [Integration API](/versioned_docs/auditor_10.6/auditor/api/overview.md) |

To add, modify and remove items, you must be assigned the Global administrator role in the product or the __Configurator__ role on the plan. See the [Role-Based Access and Delegation](/versioned_docs/auditor_10.6/auditor/admin/monitoringplans/delegation.md)topic for additional information.

Follow the steps to add a new item to a data source:

__Step 6 –__ Navigate to your plan settings.

__Step 7 –__ Click Add item under the data source.

__Step 8 –__ Provide the object name and configure item settings.

You can fine-tune data collection for each item individually. To do it, select an item within your monitoring plan and click Edit item. For each item, you can:

- Specify a custom account for data collection
- Customize settings specific your item (e.g., specify SharePoint site collections)

## Configure Monitoring Scope

In some environments, it may not be necessary to monitor the entire IT infrastructure. Netwrix monitoring scope can be configured on the Data Source and/or Item levels. the section below contains examples on how to use omit functionality in Auditor.

In addition to the restrictions for a monitoring plan, you can use the \*.txt files to collect more granular audit data. Note that the new monitoring scope restrictions apply together with previous exclusion settings configured in the \*.txt files. See the [Monitoring Plans](/versioned_docs/auditor_10.6/auditor/admin/monitoringplans/overview.md)topic for additional information.

| Use case | Related documentation |
| --- | --- |
| __Active Directory__ |  |
| I want to omit all activity by a specific service account or service accounts with specific naming pattern. | [Active Directory](/versioned_docs/auditor_10.6/auditor/admin/monitoringplans/activedirectory/overview.md) |
| If Netwrix user is responsible just for a limited scope within corporate AD, s/he needs to omit everything else. | [Active Directory](/versioned_docs/auditor_10.6/auditor/admin/monitoringplans/activedirectory/overview.md)   - Always both activity and state in time data are omitted. - In group/Not in group filters don’t not process groups from omitted OUs. |
| __Logon Activity__ |  |
| I want to omit domain logons by a specific service account or service accounts with specific naming pattern. | [Logon Activity](/versioned_docs/auditor_10.6/auditor/admin/monitoringplans/logonactivity/overview.md) |
| __File Servers__  (including Windows file server, Dell, NetApp, Nutanix File server) |  |
| I have a server named _StationWin16_ where I can't install .Net 4.5 in OU where I keep all member servers. I want to suppress errors from this server by excluding it from the Netwrix auditing scope. | [AD Container](/versioned_docs/auditor_10.6/auditor/admin/monitoringplans/activedirectory/overview.md#ad-container) |
| A Security Officer wants to monitor a file share but s/he does not have access to a certain folder on this share. Then, s/he does not want the product to monitor this folder at all. | [Computer](/versioned_docs/auditor_10.6/auditor/admin/monitoringplans/fileservers/overview.md#computer)  [Dell Isilon](/versioned_docs/auditor_10.6/auditor/admin/monitoringplans/fileservers/overview.md#dell-isilon)  [Dell VNX VNXe](/versioned_docs/auditor_10.6/auditor/admin/monitoringplans/fileservers/overview.md#dell-vnx-vnxe)  [NetApp](/versioned_docs/auditor_10.6/auditor/admin/monitoringplans/fileservers/overview.md#netapp)  [Windows File Share](/versioned_docs/auditor_10.6/auditor/admin/monitoringplans/fileservers/scope.md#windows-file-share)  [Nutanix SMB Shares](/versioned_docs/auditor_10.6/auditor/admin/monitoringplans/fileservers/overview.md#nutanix-smb-shares) |
| A Security Officer wants to monitor a file share but s/he does not have access to a certain folder on this share. Then, s/he does not want the product to monitor this folder at all. | [Computer](/versioned_docs/auditor_10.6/auditor/admin/monitoringplans/fileservers/overview.md#computer)  [Dell Isilon](/versioned_docs/auditor_10.6/auditor/admin/monitoringplans/fileservers/overview.md#dell-isilon)  [Dell VNX VNXe](/versioned_docs/auditor_10.6/auditor/admin/monitoringplans/fileservers/overview.md#dell-vnx-vnxe)  [NetApp](/versioned_docs/auditor_10.6/auditor/admin/monitoringplans/fileservers/overview.md#netapp)  [Windows File Share](/versioned_docs/auditor_10.6/auditor/admin/monitoringplans/fileservers/scope.md#windows-file-share)  [Nutanix SMB Shares](/versioned_docs/auditor_10.6/auditor/admin/monitoringplans/fileservers/overview.md#nutanix-smb-shares) |
| A Security Officer wants to monitor a file share, but it contains a folder with a huge amount of objects, so s/he does not want Netwrix Auditor to collect State-in-Time data for this folder. | [Computer](/versioned_docs/auditor_10.6/auditor/admin/monitoringplans/fileservers/overview.md#computer)  [Dell Isilon](/versioned_docs/auditor_10.6/auditor/admin/monitoringplans/fileservers/overview.md#dell-isilon)  [Dell VNX VNXe](/versioned_docs/auditor_10.6/auditor/admin/monitoringplans/fileservers/overview.md#dell-vnx-vnxe)  [NetApp](/versioned_docs/auditor_10.6/auditor/admin/monitoringplans/fileservers/overview.md#netapp)  [Windows File Share](/versioned_docs/auditor_10.6/auditor/admin/monitoringplans/fileservers/scope.md#windows-file-share)  [Nutanix SMB Shares](/versioned_docs/auditor_10.6/auditor/admin/monitoringplans/fileservers/overview.md#nutanix-smb-shares) |
| I want to exclude specific computers within an IP range from the Netwrix auditing scope. | [File Servers](/versioned_docs/auditor_10.6/auditor/admin/monitoringplans/fileservers/overview.md#file-servers) |
| __SQL Server__ |  |
| I want to know if _corp\administrator_ user is messing with SQL data. | [SQL Server Instance](/versioned_docs/auditor_10.6/auditor/admin/monitoringplans/sqlserver/items.md#sql-server-instance) |
| As a Auditor administrator I want to exclude the _domain\nwxserviceaccount_ service account activity from SQL server audit so that I get reports without changes made by automatic systems. | [SQL Server Instance](/versioned_docs/auditor_10.6/auditor/admin/monitoringplans/sqlserver/items.md#sql-server-instance) |
| As a Auditor administrator I want to exclude all changes performed by _MyCustomTool_. | [SQL Server Instance](/versioned_docs/auditor_10.6/auditor/admin/monitoringplans/sqlserver/items.md#sql-server-instance) |
| __SharePoint__ |  |
| I want to exclude the _domain\nwxserviceaccount_ account from data collection as it produces standard activity that doesn't require monitoring. | [SharePoint Farm](/versioned_docs/auditor_10.6/auditor/admin/monitoringplans/sharepoint/overview.md#sharepoint-farm) |
| As a Auditor Administrator I want to exclude shared _PublicList_ from read audit. | [SharePoint Farm](/versioned_docs/auditor_10.6/auditor/admin/monitoringplans/sharepoint/overview.md#sharepoint-farm) |
| Windows Server |  |
| I have a server named StationWin16 where I can't install .Net 4.5 in OU where I keep all member servers. I want to suppress errors from this server by excluding it from the Netwrix auditing scope. | [AD Container](/versioned_docs/auditor_10.6/auditor/admin/monitoringplans/activedirectory/overview.md#ad-container) |
| I want to exclude specific computers within an IP range from the Netwrix auditing scope. | [File Servers](/versioned_docs/auditor_10.6/auditor/admin/monitoringplans/fileservers/overview.md#file-servers) |
| VMware |  |
| I have a virtual machine named "testvm" I use for testing purposes, so I want to exclude it from being monitored. | [VMware ESX/ESXi/vCenter](/versioned_docs/auditor_10.6/auditor/admin/monitoringplans/vmware/overview.md#vmware-esxesxivcenter) |
