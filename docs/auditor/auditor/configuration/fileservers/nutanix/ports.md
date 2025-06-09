# Nutanix Ports

Follow the steps to open Nutanix port for inbound connections.

__Step 1 –__ On a target computer navigate to __Start__ > __Control Panel__ and select __Windows Firewall.__

__Step 2 –__ In the Help Protect your computer with Windows Firewall page, click __Advanced settings__ on the left.

__Step 3 –__ In the Windows Firewall with Advanced Security dialog, select Inbound Rules on the left.

__Step 4 –__  Click New Rule. In the New Inbound Rule wizard, complete the steps as described below.

| Option | Setting |
| --- | --- |
| Rule Type | Port |
| Protocols and Ports | - Does this rule applies to TCP or UDP—Select TCP - Specific local ports—Type required port, e.g., 9898. |
| Action | Select Allow the connection |
| Profile | Applies to Domain |
| Rule name | Rule name, for example Nutanix Files inbound rule. |

When you add the first item (_Nutanix SMB shares_) to the Nutanix monitoring plan, you will be suggested to use port __9898__. For the next _Nutanix SMB shares_ added as an item, you should specify a different TCP port and configure it for inbound connections, as described above.

### Protocols and Ports Required for Monitoring Nutanix Files

Review a full list of protocols and ports required for Netwrix Auditor for Nutanix Files.

- Allow outbound connections from the dynamic (1024 - 65535) local port on the computer where Netwrix Auditor Server resides.
- Allow outbound connections to the remote ports on the computer where Netwrix Auditor Server resides.

Tip for reading the table: For example, on the computer where Netwrix Auditor Server resides (source), allow outbound connections to remote 9898 TCP port.

| Port | Protocol | Source | Target | Purpose |
| --- | --- | --- | --- | --- |
| 9898 | TCP | Monitored Nutanix Files devices | Netwrix Auditor Server | Getting events from monitored devices |

__NOTE:__ You need to open the 9898 TCP port for inbound connections manually.

Later, you can specify any custom TCP port when editing your Nutanix Files monitoring plan. See the [File Servers](/docs/auditor/auditor/admin/monitoringplans/fileservers/overview.md) (Nutanix section) for more information.
