# Manage Data Sources

You can fine-tune data collection for each data source. Settings that you configure for the data source will be applied to all items belonging to that data source. Using data source settings, you can, for example:

- Enable state-in-time data collection (currently supported for several data sources)
- Depending on the data source, customize the monitoring scope (e.g., enable read access auditing, monitoring of failed attempts)

To add, modify and remove data sources, enable or disable monitoring, you must be assigned the Global administrator role in the product or the Configurator role on the plan. See the [Role-Based Access and Delegation](/docs/auditor/auditor/admin/monitoringplans/delegation.md) topic for additional information.

## Modify Data Source Settings

Follow the steps to modify data source settings.

__Step 1 –__ Select the monitoring plan you need and click __Edit__.

__Step 2 –__ Within the monitoring plan window, highlight the data source (the first one is the row right under the blue table header) and click Edit data source on the right:

[![Data source settings](/img/product_docs/auditor/auditor/admin/monitoringplans/mp_edit_data_source_thumb_0_0.png)](/docs/auditor/resources/images/auditor/monitoringplans/mp_edit_data_source.png)

__Step 3 –__ Modify data source settings as you need.

__Step 4 –__ When finished, click __Save__.

Review the following for additional information:

- [Active Directory](/docs/auditor/auditor/admin/monitoringplans/activedirectory/overview.md)
- [Active Directory Federation Services ](/docs/auditor/auditor/admin/monitoringplans/adfs.md)
- [Microsoft Entra ID](/docs/auditor/auditor/admin/monitoringplans/microsoftentraid/overview.md)
- [Exchange](/docs/auditor/auditor/admin/monitoringplans/exchange/overview.md)
- [Exchange Online](/docs/auditor/auditor/admin/monitoringplans/exchangeonline/overview.md)
- [File Servers](/docs/auditor/auditor/admin/monitoringplans/fileservers/overview.md)
- [Group Policy](/docs/auditor/auditor/admin/monitoringplans/grouppolicy/overview.md)
- [Logon Activity](/docs/auditor/auditor/admin/monitoringplans/logonactivity/overview.md)
- [MS Teams](/docs/auditor/auditor/admin/monitoringplans/msteams.md)
- [Network Devices](/docs/auditor/auditor/admin/monitoringplans/networkdevices.md)
- [Oracle Database](/docs/auditor/auditor/admin/monitoringplans/oracle/overview.md)
- [SharePoint](/docs/auditor/auditor/admin/monitoringplans/sharepoint/overview.md)
- [SharePoint Online](/docs/auditor/auditor/admin/monitoringplans/sharepointonline/overview.md)
- [SQL Server](/docs/auditor/auditor/admin/monitoringplans/sqlserver/overview.md)
- [User Activity](/docs/auditor/auditor/admin/monitoringplans/useractivity/overview.md)
- [VMware](/docs/auditor/auditor/admin/monitoringplans/vmware/overview.md)
- [Windows File Share](/docs/auditor/auditor/admin/monitoringplans/fileservers/scope.md#Windows-File-Share)

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
| Active Directory  Group Policy  Exchange  Logon Activity | [Domain](/docs/auditor/auditor/admin/monitoringplans/activedirectory/overview.md#Domain) |
| Active Directory Federation Services | [Federation Server](/docs/auditor/auditor/admin/monitoringplans/adfs.md#Federation-Server) |
| Microsoft Entra ID  Exchange Online  SharePoint Online  Microsoft Teams | [Microsoft Entra ID](/docs/auditor/auditor/admin/monitoringplans/microsoftentraid/overview.md#Microsoft-Entra-ID) |
| File Servers  (including Windows file server, Dell, NetApp, Nutanix File server, Synology, and Qumulo) | [AD Container](/docs/auditor/auditor/admin/monitoringplans/activedirectory/overview.md#AD-Container)  [File Servers](/docs/auditor/auditor/admin/monitoringplans/fileservers/overview.md#File-Servers)  [Dell Isilon](/docs/auditor/auditor/admin/monitoringplans/fileservers/overview.md#Dell-Isilon)  [Dell VNX VNXe](/docs/auditor/auditor/admin/monitoringplans/fileservers/overview.md#Dell-VNX-VNXe)  [File Servers](/docs/auditor/auditor/admin/monitoringplans/fileservers/overview.md#File-Servers)  [NetApp](/docs/auditor/auditor/admin/monitoringplans/fileservers/overview.md#NetApp)  [Windows File Share](/docs/auditor/auditor/admin/monitoringplans/fileservers/scope.md#Windows-File-Share)  [Nutanix SMB Shares](/docs/auditor/auditor/admin/monitoringplans/fileservers/overview.md#Nutanix-SMB-Shares)  [Qumulo](/docs/auditor/auditor/admin/monitoringplans/fileservers/overview.md#Qumulo)  [Synology](/docs/auditor/auditor/admin/monitoringplans/fileservers/overview.md#Synology)  By default, Auditor will monitor all shares stored in the specified location, except for hidden shares (both default and user-defined). If you want to monitor user-defined hidden shares, select the related option in the monitored item settings.  Remember that administrative hidden shares like default system root or Windows directory (ADMIN$), default drive shares (D$, E$), etc. will not be monitored. See the topics on the monitored items for details. |
| Network Devices | [Syslog Device](/docs/auditor/auditor/admin/monitoringplans/networkdevices.md#Syslog-Device)  [Cisco Meraki Dashboard](/docs/auditor/auditor/admin/monitoringplans/networkdevices.md#Cisco-Meraki-Dashboard) |
| Oracle Database | [Oracle Database Instance](/docs/auditor/auditor/admin/monitoringplans/oracle/overview.md#Oracle-Database-Instance) |
| SharePoint | [SharePoint Farm](/docs/auditor/auditor/admin/monitoringplans/sharepoint/overview.md#SharePoint-Farm) |
| SQL Server | [SQL Server Instance](/docs/auditor/auditor/admin/monitoringplans/sqlserver/items.md#SQL-Server-Instance)  [SQL Server Availability Group](/docs/auditor/auditor/admin/monitoringplans/sqlserver/items.md#SQL-Server-Availability-Group) |
| VMware | [VMware ESX/ESXi/vCenter](/docs/auditor/auditor/admin/monitoringplans/vmware/overview.md#VMware-ESXESXivCenter) |
| Windows Server  User Activity | [File Servers](/docs/auditor/auditor/admin/monitoringplans/fileservers/overview.md#File-Servers)  [AD Container](/docs/auditor/auditor/admin/monitoringplans/activedirectory/overview.md#AD-Container)  [File Servers](/docs/auditor/auditor/admin/monitoringplans/fileservers/overview.md#File-Servers) |
| Netwrix API | [Integration API](/docs/auditor/auditor/api/overview.md) |

To add, modify and remove items, you must be assigned the Global administrator role in the product or the __Configurator__ role on the plan. See the [Role-Based Access and Delegation](/docs/auditor/auditor/admin/monitoringplans/delegation.md)topic for additional information.

Follow the steps to add a new item to a data source:

__Step 6 –__ Navigate to your plan settings.

__Step 7 –__ Click Add item under the data source.

__Step 8 –__ Provide the object name and configure item settings.

You can fine-tune data collection for each item individually. To do it, select an item within your monitoring plan and click Edit item. For each item, you can:

- Specify a custom account for data collection
- Customize settings specific your item (e.g., specify SharePoint site collections)

## Configure Monitoring Scope

In some environments, it may not be necessary to monitor the entire IT infrastructure. Netwrix monitoring scope can be configured on the Data Source and/or Item levels. the section below contains examples on how to use omit functionality in Auditor.

In addition to the restrictions for a monitoring plan, you can use the \*.txt files to collect more granular audit data. Note that the new monitoring scope restrictions apply together with previous exclusion settings configured in the \*.txt files. See the [Monitoring Plans](/docs/auditor/auditor/admin/monitoringplans/overview.md)topic for additional information.

| Use case | Related documentation |
| --- | --- |
| __Active Directory__ |  |
| I want to omit all activity by a specific service account or service accounts with specific naming pattern. | [Active Directory](/docs/auditor/auditor/admin/monitoringplans/activedirectory/overview.md) |
| If Netwrix user is responsible just for a limited scope within corporate AD, s/he needs to omit everything else. | [Active Directory](/docs/auditor/auditor/admin/monitoringplans/activedirectory/overview.md)   - Always both activity and state in time data are omitted. - In group/Not in group filters don’t not process groups from omitted OUs. |
| __Logon Activity__ |  |
| I want to omit domain logons by a specific service account or service accounts with specific naming pattern. | [Logon Activity](/docs/auditor/auditor/admin/monitoringplans/logonactivity/overview.md) |
| __File Servers__  (including Windows file server, Dell, NetApp, Nutanix File server) |  |
| I have a server named _StationWin16_ where I can't install .Net 4.5 in OU where I keep all member servers. I want to suppress errors from this server by excluding it from the Netwrix auditing scope. | [AD Container](/docs/auditor/auditor/admin/monitoringplans/activedirectory/overview.md#AD-Container) |
| A Security Officer wants to monitor a file share but s/he does not have access to a certain folder on this share. Then, s/he does not want the product to monitor this folder at all. | [File Servers](/docs/auditor/auditor/admin/monitoringplans/fileservers/overview.md#File-Servers)  [Dell Isilon](/docs/auditor/auditor/admin/monitoringplans/fileservers/overview.md#Dell-Isilon)  [Dell VNX VNXe](/docs/auditor/auditor/admin/monitoringplans/fileservers/overview.md#Dell-VNX-VNXe)  [NetApp](/docs/auditor/auditor/admin/monitoringplans/fileservers/overview.md#NetApp)  [Windows File Share](/docs/auditor/auditor/admin/monitoringplans/fileservers/scope.md#Windows-File-Share)  [Nutanix SMB Shares](/docs/auditor/auditor/admin/monitoringplans/fileservers/overview.md#Nutanix-SMB-Shares) |
| A Security Officer wants to monitor a file share but s/he does not have access to a certain folder on this share. Then, s/he does not want the product to monitor this folder at all. | [File Servers](/docs/auditor/auditor/admin/monitoringplans/fileservers/overview.md#File-Servers)  [Dell Isilon](/docs/auditor/auditor/admin/monitoringplans/fileservers/overview.md#Dell-Isilon)  [Dell VNX VNXe](/docs/auditor/auditor/admin/monitoringplans/fileservers/overview.md#Dell-VNX-VNXe)  [NetApp](/docs/auditor/auditor/admin/monitoringplans/fileservers/overview.md#NetApp)  [Windows File Share](/docs/auditor/auditor/admin/monitoringplans/fileservers/scope.md#Windows-File-Share)  [Nutanix SMB Shares](/docs/auditor/auditor/admin/monitoringplans/fileservers/overview.md#Nutanix-SMB-Shares) |
| A Security Officer wants to monitor a file share, but it contains a folder with a huge amount of objects, so s/he does not want Netwrix Auditor to collect State-in-Time data for this folder. | [File Servers](/docs/auditor/auditor/admin/monitoringplans/fileservers/overview.md#File-Servers)  [Dell Isilon](/docs/auditor/auditor/admin/monitoringplans/fileservers/overview.md#Dell-Isilon)  [Dell VNX VNXe](/docs/auditor/auditor/admin/monitoringplans/fileservers/overview.md#Dell-VNX-VNXe)  [NetApp](/docs/auditor/auditor/admin/monitoringplans/fileservers/overview.md#NetApp)  [Windows File Share](/docs/auditor/auditor/admin/monitoringplans/fileservers/scope.md#Windows-File-Share)  [Nutanix SMB Shares](/docs/auditor/auditor/admin/monitoringplans/fileservers/overview.md#Nutanix-SMB-Shares) |
| I want to exclude specific computers within an IP range from the Netwrix auditing scope. | [File Servers](/docs/auditor/auditor/admin/monitoringplans/fileservers/overview.md#File-Servers) |
| __SQL Server__ |  |
| I want to know if _corp\administrator_ user is messing with SQL data. | [SQL Server Instance](/docs/auditor/auditor/admin/monitoringplans/sqlserver/items.md#SQL-Server-Instance) |
| As a Auditor administrator I want to exclude the _domain\nwxserviceaccount_ service account activity from SQL server audit so that I get reports without changes made by automatic systems. | [SQL Server Instance](/docs/auditor/auditor/admin/monitoringplans/sqlserver/items.md#SQL-Server-Instance) |
| As a Auditor administrator I want to exclude all changes performed by _MyCustomTool_. | [SQL Server Instance](/docs/auditor/auditor/admin/monitoringplans/sqlserver/items.md#SQL-Server-Instance) |
| __SharePoint__ |  |
| I want to exclude the _domain\nwxserviceaccount_ account from data collection as it produces standard activity that doesn't require monitoring. | [SharePoint Farm](/docs/auditor/auditor/admin/monitoringplans/sharepoint/overview.md#SharePoint-Farm) |
| As a Auditor Administrator I want to exclude shared _PublicList_ from read audit. | [](/docs/auditor/auditor/solutions/items/sharepointfarm.md)[SharePoint Farm](/docs/auditor/auditor/admin/monitoringplans/sharepoint/overview.md#SharePoint-Farm) |
| Windows Server |  |
| I have a server named StationWin16 where I can't install .Net 4.5 in OU where I keep all member servers. I want to suppress errors from this server by excluding it from the Netwrix auditing scope. | [AD Container](/docs/auditor/auditor/admin/monitoringplans/activedirectory/overview.md#AD-Container) |
| I want to exclude specific computers within an IP range from the Netwrix auditing scope. | [File Servers](/docs/auditor/auditor/admin/monitoringplans/fileservers/overview.md#File-Servers) |
| VMware |  |
| I have a virtual machine named "testvm" I use for testing purposes, so I want to exclude it from being monitored. | [VMware ESX/ESXi/vCenter](/docs/auditor/auditor/admin/monitoringplans/vmware/overview.md#VMware-ESXESXivCenter) |
