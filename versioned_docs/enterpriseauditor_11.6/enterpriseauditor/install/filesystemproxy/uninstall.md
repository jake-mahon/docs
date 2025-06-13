# Uninstall Proxy Service Process

The process to properly uninstall the File System Proxy Service is completed through the uninstalling of the Enterprise Auditor File System Scanning Proxy program.

__Step 1 –__ Open Control Panel and select __Programs__ > __Uninstall a program__.

![Programs and Features](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/install/sensitivedatadiscovery/uninstall.png)

__Step 2 –__ Select Netwrix Enterprise Auditor File System Scanning Proxy and click __Uninstall__.

__NOTE:__ If the installation was configured to use the LocalSystem account to run the RPC service the two SPN values are removed for that machine in Active Directory. If the service is running with a supplied account, the SPN values would need to be manually removed for that machine in Active Directory (unless the uninstall was completed as part of the [Upgrade Proxy Service Procedure](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/install/filesystemproxy/upgrade.md)).

When the uninstall process is complete, this program is removed from the list.
