# Logon Activity Ports

Review a full list of protocols and ports required for monitoring Logon Activity.

- Allow outbound connections from the dynamic (1024 - 65535) local port on the computer where Netwrix Auditor Server resides.
- Allow outbound connections to remote ports on the source and inbound connections to local ports on the target.

Tip for reading the table: For example, on the computer where Netwrix Auditor Server resides (source), allow outbound connections to remote 389 TCP port. On domain controllers in your domain (target), allow inbound connections to local 389 TCP port.

| Port | Protocol | Source | Target | Purpose |
| --- | --- | --- | --- | --- |
| 389 | TCP | Netwrix Auditor Server | Domain controllers | LDAP  DC query  Account resolve |
| 53 | TCP | Netwrix Auditor Server | DNS Server | DNS Client |
| 135  + Dynamic:  1024 -65535 | TCP | Netwrix Auditor Server | Domain controllers | Windows Management Instrumentation  Firewall configuration |
| 135 | TCP | Netwrix Auditor Server | Domain controllers | Service Control Manager Remote Protocol (RPC)  Core Service installation |
| 137 through 139 | UDP | Netwrix Auditor Server | Domain controllers | Service Control Manager Remote Protocol (RPC)  Core Service installation |
| 445 | TCP | Netwrix Auditor Server | Domain controllers | SMB 2.0/3.0 |

## Configure Windows Firewall Inbound Connection Rules

For successful data collection, Netwrix Auditor may have to create inbound Firewall rules. If you do not enable the Network traffic compression option, the product will try creating these rules automatically and will notify you it fails to do so. In this case, you have to configure Windows Firewall inbound rules manually.

__Step 1 –__ On every domain controller, navigate to __Start → Control Panel__ and select __Windows Firewall__.

__Step 2 –__ In the __Help Protect your computer with Windows Firewall__ page, click __Advanced settings__ on the left.

__Step 3 –__ In the Windows Firewall with Advanced Security dialog, select Inbound Rules on the left.

![manualconfig_nla_inbound_connections2016](/img/product_docs/1secure/configuration/logonactivity/manualconfig_nla_inbound_connections2016.png)

__Step 4 –__ Enable the following inbound connection rules:

- Remote Event Log Management (NP-In)
- Remote Event Log Management (RPC)
- Remote Event Log Management (RPC-EPMAP)
