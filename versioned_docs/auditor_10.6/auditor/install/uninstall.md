# Uninstall Netwrix Auditor

This topic provides instructions to uninstall Netwrix Auditor.

__NOTE:__ If you enabled network traffic compression for data collection, make sure to disable it before uninstalling the product. Some network compression services must be removed manually. See the [Uninstall Compression and Core Services](#Uninstall-Compression-and-Core-Services) topic for additional information.

Follow the steps to uninstall Auditor.

__Step 1 –__ On the computer where Auditor is installed, navigate to __Start > Control Panel > Programs and Features__.

__Step 2 –__ Select Netwrix Auditor and click __Uninstall__.

If you uninstall an instance on Auditor that includes Server part (full installation), all remote client consoles will become inoperable.

## Uninstall Compression and Core Services

Perform the procedures below if you used Compression Services and Core Services for data collection (i.e., the __Network traffic compression__ option was enabled).

Some Auditor Compression services are stopped but not removed when the product is uninstalled. You need to delete them manually prior to uninstalling Auditor.

### Delete Netwrix Auditor for Active Directory Compression Service

Follow the steps to uninstall the service.

__Step 1 –__ Navigate to the Active Directory monitoring plan you are using. In the command prompt, execute the following command:

__Step 2 –__ Select your Active Directory data source.

__Step 3 –__ Click __Edit data source__ on the right.

__Step 4 –__ Uncheck the __Enable network traffic compression__ checkbox.

__Step 5 –__ Remove the network traffic compression service on the domain controller by executing the following command:

```
sc delete adcrsvc
```

### Delete Netwrix Auditor for SharePoint Core Service

Follow the steps to delete the Netwrix Auditor for the SharePoint Core Service.

__Step 1 –__ In the audited SharePoint farm, navigate to the computer where Central Administration is installed and where the Netwrix Auditor for SharePoint Core Service resides.

__Step 2 –__ Navigate to __Start > Control Panel > Programs and Features__.

__Step 3 –__ Select the Netwrix Auditor __for SharePoint Core Service__ and click Uninstall.

__CAUTION:__ Once you click Uninstall you cannot cancel the uninstallation. The Netwrix Auditor __for SharePoint Core Service__ will be uninstalled even if you click Cancel.

### Delete Netwrix Auditor for Windows Server Compression Service

__NOTE:__ Perform this procedure only if you enabled the Compression Service for data collection.

Follow the steps to delete the Netwrix Auditor for Windows Server Compression Service.

__Step 1 –__ On the target servers, navigate to __Start > Control Panel > Programs and Features__.

__Step 2 –__ Select __Netwrix Auditor for Windows Server__ __Compression Service__ and click __Uninstall__.

### Delete Netwrix Auditor Mailbox Access Core Service

Follow the steps to delete a Netwrix Auditor Mailbox Access Core Service.

__Step 1 –__ In the command prompt, execute the following command:

```
sc delete "Netwrix Auditor Mailbox Access Core Service"
```

__Step 2 –__ Remove the following folder: _%SYSTEMROOT%\Netwrix Auditor\Netwrix Auditor Mailbox Access Core Service_

If any argument contains spaces, use double quotes.

### Delete Netwrix Auditor User Activity Core Service

Follow the steps to remove the Core Service via Auditor client on the computer where the Auditor Server resides:

__Step 1 –__ In Auditor client, navigate to All __monitoring plans__ and specify the plan.

__Step 2 –__ In the right pane, select the __Items__ tab.

__Step 3 –__ Select a computer in the list and click __Remove__. The Netwrix Auditor __User Activity Core Service__ will be deleted from the selected computer. Perform this action with other computers.

__Step 4 –__ In the left pane navigate to __All monitoring plans >____User Activity monitoring plan > Monitored Computers.__ Make sure that the computers you have removed from auditing are no longer present in the list.

__Step 5 –__ In case some computers are still present in the list, select them one by one and click __Retry Uninstallation__. If this does not help, remove the Core Services manually from the target computers through __Programs and Features__.

Remove the Netwrix Auditor User Activity Core Service manually on each audited computer:

__Step 1 –__ Navigate to __Start > Control Panel > Programs and Features__.

__Step 2 –__ Select the __Netwrix Auditor User Activity__ __Core Service__  and click __Uninstall__.

### Delete the Netwrix Auditor Application Deployment Service

The Netwrix Auditor __Application Deployment Service__ allows collecting file events and data. The service runs on the target servers.

__NOTE:__ Perform this procedure only if you enabled the Network traffic compression option for Windows File Servers data collection.

Follow the steps to delete the Netwrix Auditor Application Deployment Service.

__Step 1 –__ On the target server, navigate to __Start > Registry Editor > Programs and Features__.

__Step 2 –__ Delete the __HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\NwxExecSvc__ registry key.

__Step 3 –__ Restart your machine and the service will be removed.

### Delete Netwrix Auditor for File Servers Compression Service

The Netwrix Auditor for File Servers Compression Service runs on the Auditor Server host as designed.

__NOTE:__ This is applicable for NetApp and Dell Data Storage sources. Delete the service irrespective of the Network traffic compression option for Dell Isilon source.

Follow the steps to delete the Netwrix Auditor for File Servers Compression Service.

__Step 1 –__ On the computer where AuditorServer resides, navigate to __Start > Control Panel > Programs and Features__.

__Step 2 –__ Select Netwrix Auditor__for File Servers Compression Service__ and click __Uninstall__.

__NOTE:__ This is applicable to NetApp and Dell Data Storage only if the service was installed on the Auditor Server. For a Windows File Server, the service is the Netwrix Auditor Application Deployment Service and runs on the File Server directly.

### Delete the Netwrix Auditor Event Log Compression Service

Follow the steps to delete the Netwrix Auditor Event Log Compression Service.

__Step 1 –__ Navigate to __Start > Control Panel > Programs and Features__.

__Step 2 –__ Select __Netwrix Auditor Event Log Compression__ >  __Service__  and click __Uninstall__.
