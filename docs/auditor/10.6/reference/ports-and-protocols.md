---
title: ports and protocols
sidebar_label: ports-and-protocols
description: Auditor 10.6 documentation for ports and protocols with configuration details, usage instructions, and implementation guidance.
---

# Active Directory Ports

Review a full list of protocols and ports required for monitoring Active Directory.

- Allow outbound connections from the dynamic (1024 - 65535) local port on the computer where
  Netwrix Auditor Server resides.
- Allow outbound connections to remote ports on the source and inbound connections to local ports on
  the target.

Tip for reading the table: For example, on the computer where Netwrix Auditor Server resides
(source), allow outbound connections to remote 389 TCP port. On domain controllers in your domain
(target), allow inbound connections to the local 389 TCP port.

| Port                               | Protocol | Source                 | Target             | Purpose                                                                                        |
| ---------------------------------- | -------- | ---------------------- | ------------------ | ---------------------------------------------------------------------------------------------- |
| 389                                | TCP\UDP  | Netwrix Auditor Server | Domain controllers | LDAP Common queries                                                                            |
| 3268                               | TCP      | Netwrix Auditor Server | Domain controllers | LDAP Group membership GC search                                                                |
| 3269                               | TCP      | Netwrix Auditor Server | Domain controllers | Global catalog LDAP over SSL                                                                   |
| 88                                 | TCP/UDP  | Netwrix Auditor Server | Domain controllers | Kerberos authentication                                                                        |
| 135 and dynamic range: 1024 -65535 | TCP      | Netwrix Auditor Server | Domain controllers | Windows Management Instrumentation. `gpupdate /force `                                         |
| 445                                | TCP      | Netwrix Auditor Server | Domain controllers | SMB 2.0/3.0 Authenticated communication between Netwrix Auditor Server and domain controllers. |
| 53                                 | UDP      | Netwrix Auditor Server | DNS Server         | DNS Client                                                                                     |

\* - for Exchange 2010 only

# AD FS Ports

Review a full list of protocols and ports required for monitoring logon activities performed using
Active Directory Federation Services (AD FS).

- Allow outbound connections from the dynamic (1024 - 65535) local port on the computer where
  Netwrix Auditor Server resides.
- Allow outbound connections to remote ports on the source and inbound connections to local ports on
  the target.

Tip for reading the table: For example, on the computer where Netwrix Auditor Server resides
(source), allow outbound connections to remote 389 TCP port. On domain controllers in your domain
(target), allow inbound connections to local 389 TCP port.

| Port                             | Protocol | Source                 | Target             | Purpose                                                                 |
| -------------------------------- | -------- | ---------------------- | ------------------ | ----------------------------------------------------------------------- |
| 389                              | TCP      | Netwrix Auditor Server | Domain controllers | LDAP DC query Account resolve                                           |
| 53                               | TCP      | Netwrix Auditor Server | DNS Server         | DNS Client                                                              |
| 135 + Dynamic: 1024 -65535       | TCP      | Netwrix Auditor Server | Domain controllers | Windows Management Instrumentation Firewall configuration               |
| 135                              | TCP      | Netwrix Auditor Server | Domain controllers | Service Control Manager Remote Protocol (RPC) Core Service installation |
| 137 through 139                  | UDP      | Netwrix Auditor Server | Domain controllers | Service Control Manager Remote Protocol (RPC) Core Service installation |
| 445                              | TCP      | Netwrix Auditor Server | Domain controllers | SMB 2.0/3.0                                                             |
| 5985 (for HTTP) 5986 (for HTTPS) | TCP      | Netwrix Auditor Server | AD FS servers      | Windows Remote Management (WinRM)                                       |

# Exchange Ports

Review a full list of protocols and ports required for monitoring Exchange.

- Allow outbound connections from the dynamic (1024 - 65535) local port on the computer where
  Netwrix Auditor Server resides.
- Allow outbound connections to remote ports on the source and inbound connections to local ports on
  the target.

Tip for reading the table: For example, on the computer where Netwrix Auditor Server resides
(source), allow outbound connections to remote 389 TCP port. On domain controllers in your domain
(target), allow inbound connections to the local 389 TCP port.

| Port                               | Protocol | Source                 | Target          | Purpose                                                                                                                |
| ---------------------------------- | -------- | ---------------------- | --------------- | ---------------------------------------------------------------------------------------------------------------------- |
| 135 and dynamic range: 1024 -65535 | TCP      | Netwrix Auditor Server | Exchange Server | - Windows Management Instrumentation. - Retrieve Exchange Server configuration settings\* - Run `gpupdate /force   `\* |
| 5985 5986                          | TCP      | Netwrix Auditor Server | Exchange server | - Windows Remote Management. - PowerShell connections: - 5985 - for HTTP - 5986 - for HTTPS                            |
| 80 443                             | TCP      | Netwrix Auditor Server | Exchange server | PowerShell connections                                                                                                 |

\* - for Exchange 2010 only

# Dell Data Storage Ports

Review a full list of Dell Data Storage protocols and ports required for Netwrix Auditor for File
Servers.

- Allow outbound connections from the dynamic (1024 - 65535) local port on the computer where
  Netwrix Auditor Server resides.
- Allow outbound connections to remote ports on the source and inbound connections to local ports on
  the target.

Tip for reading the table: For example, on the computer where Netwrix Auditor Server resides
(source), allow outbound connections to remote 389 TCP port. On domain controllers in your domain
(target), allow inbound connections to local 389 TCP port.

| Port        | Protocol | Source                 | Target         | Purpose                                               |
| ----------- | -------- | ---------------------- | -------------- | ----------------------------------------------------- |
| Dell Isilon |          |                        |                |                                                       |
| 8080        | TCP      | Netwrix Auditor Server | Isilon cluster | HTTPS Used to connect to the Isilon Management Server |

# Dell Isilon/PowerScale Ports

Review a full list of protocols and ports required for Netwrix Auditor for Dell Isilon/PowerScale:

- Allow outbound connections from the dynamic (1024 - 65535) local port on the computer where
  Netwrix Auditor Server resides.
- Allow outbound connections to remote ports on the source and inbound connections to local ports on
  the target.

| Port | Protocol | Source                 | Target                    | Purpose                                                          |
| ---- | -------- | ---------------------- | ------------------------- | ---------------------------------------------------------------- |
| 8080 | TCP      | Netwrix Auditor Server | Isilon/PowerScale cluster | HTTPS Used to connect to the Isilon/PowerScale Management Server |

# Configure System Service Firewall Policies

Configure firewall to make file shares and Clustered Data ONTAP HTTP/HTTPS ports accessible from the
computer where Netwrix Auditor Server is installed. Your firewall configuration depends on network
settings and security policies in your organization. Below is an example of configuration:

**NOTE:** For NetApp ONTAP 9.10.1 and higher, the command context system services firewall policy is
deprecated and might be removed in a future ONTAP release. Review the NetApp
[ONTAP 9.10.1 commands](https://docs.netapp.com/us-en/ontap-cli-9101/) article for additional
information.

1. Navigate to your cluster command prompt through the SSH/Telnet connection.
2. Log in as a cluster administrator and review your current firewall configuration. For example:

   |                                           |              |         |
   | ----------------------------------------- | ------------ | ------- |
   | cluster1::> system services firewall show |              |         |
   | Node                                      | Enabled      | Logging |
   | ------------                              | ------------ | ------- |
   | cluster1-01                               | true         | false   |

3. Create firewall policy or edit existing policy to allow HTTP/HTTPS (note that modifying a policy
   you may overwrite some settings). For example:

   | To...                                             | Execute...                                                                                                                                                                                                                                                                                   |
   | ------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
   | NetApp Clustered Data ONTAP 8.2                   |                                                                                                                                                                                                                                                                                              |
   | Create a policy                                   | `cluster1::> system services firewall policy create -policy netwrix_policy -service http -vserver svm1 -action allow -ip-list 192.168.1.0/24` `cluster1::> system services firewall policy create -policy netwrix_policy -service https -vserver svm1 -action allow -ip-list 192.168.1.0/24` |
   | Modify existing policy                            | `cluster1::> system services firewall policy modify -policy netwrix_policy -service http -vserver svm1 -action allow -ip-list 192.168.1.0/24` `cluster1::> system services firewall policy modify -policy netwrix_policy -service https -vserver svm1 -action allow -ip-list 192.168.1.0/24` |
   | NetApp Clustered Data ONTAP 8.3, ONTAP 9.0 - 9.10 |                                                                                                                                                                                                                                                                                              |
   | Create a policy                                   | `cluster1::> system services firewall policy create -policy netwrix_policy -service http -vserver svm1 -allow-list 192.168.1.0/24` `cluster1::> system services firewall policy create -policy netwrix_policy -service https -vserver svm1 -allow-list 192.168.1.0/24`                       |
   | Modify existing policy                            | `cluster1::> system services firewall policy modify -policy netwrix_policy -service http -vserver svm1 -allow-list 192.168.1.0/24` `cluster1::> system services firewall policy modify -policy netwrix_policy -service https -vserver svm1 -allow-list 192.168.1.0/24`                       |

   where `pol1` is your Firewall policy name and `192.168.1.0/24` is your subnet where Netwrix
   Auditor Server resides.

4. Apply the firewall policy to a LIF.

   `cluster1::>network interface modify -vserver svm -lif vs1-cifs-lif1 -firewall-policy netwrix_policy`

   To verify the policy was applied correctly, execute the following:

   `cluster1::>network interface show -fields firewall-policy`

# Nutanix Ports

Follow the steps to open Nutanix port for inbound connections.

**Step 1 –** On a target computer navigate to **Start** > **Control Panel** and select **Windows
Firewall.**

**Step 2 –** In the Help Protect your computer with Windows Firewall page, click **Advanced
settings** on the left.

**Step 3 –** In the Windows Firewall with Advanced Security dialog, select Inbound Rules on the
left.

**Step 4 –** Click New Rule. In the New Inbound Rule wizard, complete the steps as described below.

| Option              | Setting                                                                                                  |
| ------------------- | -------------------------------------------------------------------------------------------------------- |
| Rule Type           | Port                                                                                                     |
| Protocols and Ports | - Does this rule applies to TCP or UDP—Select TCP - Specific local ports—Type required port, e.g., 9898. |
| Action              | Select Allow the connection                                                                              |
| Profile             | Applies to Domain                                                                                        |
| Rule name           | Rule name, for example Nutanix Files inbound rule.                                                       |

When you add the first item (_Nutanix SMB shares_) to the Nutanix monitoring plan, you will be
suggested to use port **9898**. For the next _Nutanix SMB shares_ added as an item, you should
specify a different TCP port and configure it for inbound connections, as described above.

### Protocols and Ports Required for Monitoring Nutanix Files

Review a full list of protocols and ports required for Netwrix Auditor for Nutanix Files.

- Allow outbound connections from the dynamic (1024 - 65535) local port on the computer where
  Netwrix Auditor Server resides.
- Allow outbound connections to the remote ports on the computer where Netwrix Auditor Server
  resides.

Tip for reading the table: For example, on the computer where Netwrix Auditor Server resides
(source), allow outbound connections to remote 9898 TCP port.

| Port | Protocol | Source                          | Target                 | Purpose                               |
| ---- | -------- | ------------------------------- | ---------------------- | ------------------------------------- |
| 9898 | TCP      | Monitored Nutanix Files devices | Netwrix Auditor Server | Getting events from monitored devices |

**NOTE:** You need to open the 9898 TCP port for inbound connections manually.

Later, you can specify any custom TCP port when editing your Nutanix Files monitoring plan. See the
[File Servers](/docs/auditor/10.6/monitoring-plans/data-sources-config.md)
(Nutanix section) for more information.

# Qumulo Ports

Review a full list of protocols and ports required for Netwrix Auditor for Qumulo.

- Allow outbound connections from the dynamic (1024 - 65535) local port on the computer where
  Netwrix Auditor Server resides.
- Allow outbound connections to remote ports on the source and inbound connections to local ports on
  the target.

Tip for reading the table: For example, on the computer where Netwrix Auditor Server resides
(source), allow outbound connections to remote 514 UDP port.

| Port | Protocol  | Source                 | Target                 | Purpose                                    |
| ---- | --------- | ---------------------- | ---------------------- | ------------------------------------------ |
| 514  | UDP / TCP | Monitored file servers | Netwrix Auditor Server | Getting events from monitored file servers |

# Synology Ports

Review a full list of protocols and ports required for Netwrix Auditor for Synology.

- Allow outbound connections from the dynamic (1024 - 65535) local port on the computer where
  Netwrix Auditor Server resides.
- Allow outbound connections to remote ports on the source and inbound connections to local ports on
  the target.

Tip for reading the table: For example, on the computer where Netwrix Auditor Server resides
(source), allow outbound connections to remote 514 UDP port.

| Port | Protocol  | Source                 | Target                 | Purpose                                    |
| ---- | --------- | ---------------------- | ---------------------- | ------------------------------------------ |
| 514  | UDP / TCP | Monitored file servers | Netwrix Auditor Server | Getting events from monitored file servers |

# Windows File Server Ports

Review a full list of Windows File Server protocols and ports required for Netwrix Auditor for File
Servers.

- Allow outbound connections from the dynamic (1024 - 65535) local port on the computer where
  Netwrix Auditor Server resides.
- Allow outbound connections to remote ports on the source and inbound connections to local ports on
  the target.

Tip for reading the table: For example, on the computer where Netwrix Auditor Server resides
(source), allow outbound connections to remote 389 TCP port. On domain controllers in your domain
(target), allow inbound connections to local 389 TCP port.

| Port                       | Protocol | Source                 | Target             | Purpose                                                                              |
| -------------------------- | -------- | ---------------------- | ------------------ | ------------------------------------------------------------------------------------ |
| Windows File Servers       |          |                        |                    |                                                                                      |
| 389                        | TCP/UDP  | Netwrix Auditor Server | Domain controllers | LDAP DC query Account resolve                                                        |
| 135 + Dynamic: 1024 -65535 | TCP      | Netwrix Auditor Server | Monitored computer | Windows Management Instrumentation Firewall configuration Core Service communication |
| 135                        | TCP      | Netwrix Auditor Server | Monitored computer | Service Control Manager Remote Protocol Core Service installation                    |
| 137                        | UDP      | Netwrix Auditor Server | Monitored computer | File and Printer Sharing (NetBIOS Name Resolution)                                   |
| 138                        | UDP      | Netwrix Auditor Server | Monitored computer | File and Printer Sharing (NetBIOS Datagram Service)                                  |
| 139                        | TCP      | Netwrix Auditor Server | Monitored computer | File and Printer Sharing (NetBIOS Session Service)                                   |
| 445                        | TCP      | Netwrix Auditor Server | Monitored computer | SMB 2.0/3.0                                                                          |
| 3268                       | TCP      | Netwrix Auditor Server | Domain controllers | LDAP Group membership GC search                                                      |

## Configure Windows Firewall Inbound Connection Rules

You can also configure Windows Firewall settings through Group Policy settings. To do this, edit the
GPO affecting your firewall settings. Navigate to Computer Configuration > Administrative
Templates > Network >Network Connections > Windows Firewall, select Domain Profile or Standard
Profile. Then, enable the Allow inbound remote administration exception.

**Step 1 –** On each audited server, navigate to **Start** > **Control Panel** and select **Windows
Firewall**.

**Step 2 –** In the Help Protect your computer with Windows Firewall page, click **Advanced
settings** on the left.

**Step 3 –** In the Windows Firewall with Advanced Security dialog, select **Inbound Rules** on the
left.

![manualconfig_nla_inbound_connections2016](/img/versioned_docs/auditor_10.6/auditor/configuration/fileservers/windows/manualconfig_nla_inbound_connections2016.webp)

**Step 4 –** Enable the following inbound connection rules:

- Remote Event Log Management (NP-In)
- Remote Event Log Management (RPC)
- Remote Event Log Management (RPC-EPMAP)
- Windows Management Instrumentation (ASync-In)
- Windows Management Instrumentation (DCOM-In)
- Windows Management Instrumentation (WMI-In)
- Network Discovery (NB-Name-In)
- File and Printer Sharing (NB-Name-In)
- File and Printer Sharing (Echo Request - ICMPv4-In)
- File and Printer Sharing (Echo Request - ICMPv6-In)
- Remote Service Management (NP-In)
- Remote Service Management (RPC)
- Performance Logs and Alerts (DCOM-In)
- Performance Logs and Alerts (Tcp-In)

# Group Policy Ports

Review a full list of protocols and ports required for monitoring Active Directory, Exchange, and
Group Policy.

- Allow outbound connections from the dynamic (1024 - 65535) local port on the computer where
  Netwrix Auditor Server resides.
- Allow outbound connections to remote ports on the source and inbound connections to local ports on
  the target.

Tip for reading the table: For example, on the computer where Netwrix Auditor Server resides
(source), allow outbound connections to remote 389 TCP port. On domain controllers in your domain
(target), allow inbound connections to the local 389 TCP port.

| Port                               | Protocol | Source                 | Target             | Purpose                                                                                        |
| ---------------------------------- | -------- | ---------------------- | ------------------ | ---------------------------------------------------------------------------------------------- |
| 389                                | TCP/UDP  | Netwrix Auditor Server | Domain controllers | LDAP Common queries                                                                            |
| 3268                               | TCP      | Netwrix Auditor Server | Domain controllers | LDAP Group membership GC search                                                                |
| 3269                               | TCP      | Netwrix Auditor Server | Domain controllers | Global catalog LDAP over SSL                                                                   |
| 88                                 | TCP/UDP  | Netwrix Auditor Server | Domain controllers | Kerberos authentication                                                                        |
| 135 and dynamic range: 1024 -65535 | TCP      | Netwrix Auditor Server | Domain controllers | Windows Management Instrumentation. `gpupdate /force `                                         |
| 445                                | TCP      | Netwrix Auditor Server | Domain controllers | SMB 2.0/3.0 Authenticated communication between Netwrix Auditor Server and domain controllers. |
| 53                                 | UDP      | Netwrix Auditor Server | DNS Server         | DNS Client                                                                                     |

# Logon Activity Ports

Review a full list of protocols and ports required for monitoring Logon Activity.

- Allow outbound connections from the dynamic (1024 - 65535) local port on the computer where
  Netwrix Auditor Server resides.
- Allow outbound connections to remote ports on the source and inbound connections to local ports on
  the target.

Tip for reading the table: For example, on the computer where Netwrix Auditor Server resides
(source), allow outbound connections to remote 389 TCP port. On domain controllers in your domain
(target), allow inbound connections to local 389 TCP port.

| Port                       | Protocol | Source                 | Target             | Purpose                                                                 |
| -------------------------- | -------- | ---------------------- | ------------------ | ----------------------------------------------------------------------- |
| 389                        | TCP      | Netwrix Auditor Server | Domain controllers | LDAP DC query Account resolve                                           |
| 53                         | TCP      | Netwrix Auditor Server | DNS Server         | DNS Client                                                              |
| 135 + Dynamic: 1024 -65535 | TCP      | Netwrix Auditor Server | Domain controllers | Windows Management Instrumentation Firewall configuration               |
| 135                        | TCP      | Netwrix Auditor Server | Domain controllers | Service Control Manager Remote Protocol (RPC) Core Service installation |
| 137 through 139            | UDP      | Netwrix Auditor Server | Domain controllers | Service Control Manager Remote Protocol (RPC) Core Service installation |
| 445                        | TCP      | Netwrix Auditor Server | Domain controllers | SMB 2.0/3.0                                                             |

## Configure Windows Firewall Inbound Connection Rules

For successful data collection, Netwrix Auditor may have to create inbound Firewall rules. If you do
not enable the Network traffic compression option, the product will try creating these rules
automatically and will notify you it fails to do so. In this case, you have to configure Windows
Firewall inbound rules manually.

**Step 1 –** On every domain controller, navigate to **Start → Control Panel** and select **Windows
Firewall**.

**Step 2 –** In the **Help Protect your computer with Windows Firewall** page, click **Advanced
settings** on the left.

**Step 3 –** In the Windows Firewall with Advanced Security dialog, select Inbound Rules on the
left.

![manualconfig_nla_inbound_connections2016](/img/versioned_docs/auditor_10.6/auditor/configuration/fileservers/windows/manualconfig_nla_inbound_connections2016.webp)

**Step 4 –** Enable the following inbound connection rules:

- Remote Event Log Management (NP-In)
- Remote Event Log Management (RPC)
- Remote Event Log Management (RPC-EPMAP)

# Exchange Online Ports

Review a full list of protocols and ports required for Netwrix Auditor for Microsoft 365.

- Allow outbound connections from the dynamic (1024 - 65535) local port on the computer where
  Netwrix Auditor Server resides.
- Allow outbound connections to the remote ports on the computer where Netwrix Auditor Server
  resides.

Tip for reading the table: For example, on the computer where Netwrix Auditor Server resides
(source), allow outbound connections to remote 80 TCP port.

| Port            | Protocol | Source                 | Target                                                                                                                                                                                                                                                   | Purpose                                                         |
| --------------- | -------- | ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------- |
| Exchange Online |          |                        |                                                                                                                                                                                                                                                          |                                                                 |
| 80              | TCP      | Netwrix Auditor Server | For a full list of Microsoft 365 URLs, refer to the following Microsoft support article: [Microsoft 365 URLs and IP address ranges](https://support.office.com/en-us/article/Office-365-URLs-and-IP-address-ranges-8548a211-3fe7-47cb-abb1-355ea5aa88a2) | outlook.microsoft365.com graph.windows.net manage.microsoft.com |
| 443             | TCP      | Netwrix Auditor Server | For a full list of Microsoft 365 URLs, refer to the following Microsoft support article: [Microsoft 365 URLs and IP address ranges](https://support.office.com/en-us/article/Office-365-URLs-and-IP-address-ranges-8548a211-3fe7-47cb-abb1-355ea5aa88a2) | outlook.microsoft365.com graph.windows.net manage.microsoft.com |

# Microsoft Entra ID Ports

Review a full list of protocols and ports required for Netwrix Auditor for Microsoft Entra ID
(formerly Azure AD).

- Allow outbound connections from the dynamic (1024 - 65535) local port on the computer where
  Netwrix Auditor Server resides.
- Allow outbound connections to the remote ports on the computer where Netwrix Auditor Server
  resides.

Tip for reading the table: For example, on the computer where Netwrix Auditor Server resides
(source), allow outbound connections to remote 80 TCP port.

| Port | Protocol | Source                 | Target                                                                                                                                                                                                                                                        | Purpose                                                     |
| ---- | -------- | ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------- |
| 80   | TCP/UDP  | Netwrix Auditor Server | For a full list of Microsoft Entra ID URLs, refer to the following Microsoft support article: [Microsoft 365 URLs and IP address ranges](https://support.office.com/en-us/article/Office-365-URLs-and-IP-address-ranges-8548a211-3fe7-47cb-abb1-355ea5aa88a2) | login.windows.net graph.windows.net manage.microsoft365.com |
| 443  | TCP/UDP  | Netwrix Auditor Server | For a full list of Microsoft Entra ID URLs, refer to the following Microsoft support article: [Microsoft 365 URLs and IP address ranges](https://support.office.com/en-us/article/Office-365-URLs-and-IP-address-ranges-8548a211-3fe7-47cb-abb1-355ea5aa88a2) | login.windows.net graph.windows.net manage.microsoft365.com |

# SharePoint Online Ports

Review a full list of protocols and ports required for Netwrix Auditor for Microsoft 365.

- Allow outbound connections from the dynamic (1024 - 65535) local port on the computer where
  Netwrix Auditor Server resides.
- Allow outbound connections to the remote ports on the computer where Netwrix Auditor Server
  resides.

Tip for reading the table: For example, on the computer where Netwrix Auditor Server resides
(source), allow outbound connections to remote 80 TCP port.

| Port | Protocol | Source                 | Target                                                                                                                                                                                                                                                   | Purpose                                               |
| ---- | -------- | ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------- |
| 80   | TCP      | Netwrix Auditor Server | For a full list of Microsoft 365 URLs, refer to the following Microsoft support article: [Microsoft 365 URLs and IP address ranges](https://support.office.com/en-us/article/Office-365-URLs-and-IP-address-ranges-8548a211-3fe7-47cb-abb1-355ea5aa88a2) | login.windows.net graph.windows.net manage.office.com |
| 443  | TCP      | Netwrix Auditor Server | For a full list of Microsoft 365 URLs, refer to the following Microsoft support article: [Microsoft 365 URLs and IP address ranges](https://support.office.com/en-us/article/Office-365-URLs-and-IP-address-ranges-8548a211-3fe7-47cb-abb1-355ea5aa88a2) | login.windows.net graph.windows.net manage.office.com |

# Teams Ports

Review a full list of protocols and ports required for Netwrix Auditor for Microsoft Teams.

- Allow outbound connections from the dynamic (1024 - 65535) local port on the computer where
  Netwrix Auditor Server resides.
- Allow outbound connections to the remote ports on the computer where Netwrix Auditor Server
  resides.

Tip for reading the table: For example, on the computer where Netwrix Auditor Server resides
(source), allow outbound connections to remote 80 TCP port.

| Port | Protocol | Source                 | Target                                                                                                                                                                                                                                                   | Purpose                                                      |
| ---- | -------- | ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| 80   | TCP      | Netwrix Auditor Server | For a full list of Microsoft 365 URLs, refer to the following Microsoft support article: [Microsoft 365 URLs and IP address ranges](https://support.office.com/en-us/article/Office-365-URLs-and-IP-address-ranges-8548a211-3fe7-47cb-abb1-355ea5aa88a2) | outlook.microsoft365.com graph.windows.net manage.office.com |
| 443  | TCP      | Netwrix Auditor Server | For a full list of Microsoft 365 URLs, refer to the following Microsoft support article: [Microsoft 365 URLs and IP address ranges](https://support.office.com/en-us/article/Office-365-URLs-and-IP-address-ranges-8548a211-3fe7-47cb-abb1-355ea5aa88a2) | outlook.microsoft365.com graph.windows.net manage.office.com |

# Network Devices Ports

Review a full list of protocols and ports required for Netwrix Auditor for Network Devices.

- Allow outbound connections from the dynamic (1024 - 65535) local port on the computer where
  Netwrix Auditor Server resides.
- Allow outbound connections to the remote ports on the computer where Netwrix Auditor Server
  resides.

Tip for reading the table: For example, on the computer where Netwrix Auditor Server resides
(source), allow outbound connections to remote 514 UDP port.

| Port | Protocol | Source                    | Target                 | Purpose                               |
| ---- | -------- | ------------------------- | ---------------------- | ------------------------------------- |
| 514  | UDP      | Monitored network devices | Netwrix Auditor Server | Getting events from monitored devices |
| 443  | TCP      | Netwrix Auditor Server    | Cisco Meraki Dashboard | \*.meraki.com                         |

# Oracle Database Ports

Review a full list of protocols and ports required for Netwrix Auditor for Oracle Database.

- Allow outbound connections from the dynamic (1024 - 65535) local port on the computer where
  Netwrix Auditor Server resides.
- Allow outbound connections to remote ports on the source and inbound connections to local ports on
  the target.

Tip for reading the table: For example, on the computer where Netwrix Auditor Server resides
(source), allow outbound connections to remote 1521 TCP port. On your Oracle Database Server
(target), allow inbound connections to local 1521 TCP port.

| Port | Protocol | Source                 | Target                 | Purpose                                                                                                                                                                                                                                                                             |
| ---- | -------- | ---------------------- | ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1521 | TCP      | Netwrix Auditor Server | Oracle Database Server | Allows Oracle client connections to the database via the Oracle's SQL\*Net protocol. You can configure it during installation. Port 1521 is the default client connections port, however, you can configure another TCP port via the Oracle configuration and administration tools. |
| 2484 | TCP      | Netwrix Auditor Server | Oracle Database Server | The default SSL port for secured Oracle client connections to the database via the Oracle's SQL\*Net protocol. Open this port if you need secure connection.                                                                                                                        |
| 53   | UDP      | Netwrix Auditor Server | DNS Server             | DNS Client                                                                                                                                                                                                                                                                          |

# SharePoint Ports

Review a full list of protocols and ports required for Netwrix Auditor for SharePoint.

- Allow outbound connections from the dynamic (1024 - 65535) local port on the computer where
  Netwrix Auditor Server resides.
- Allow outbound connections to remote ports on the source and inbound connections to local ports on
  the target.

Tip for reading the table: For example, on the computer where Netwrix Auditor Server resides
(source), allow outbound connections to remote 137 UDP port. On front end server (target), allow
inbound connections to local 137 UDP port.

| Port        | Protocol | Source                 | Target                                   | Purpose                                                          |
| ----------- | -------- | ---------------------- | ---------------------------------------- | ---------------------------------------------------------------- |
| 137 138 445 | UDP      | Netwrix Auditor Server | Windows Server running FrontEnd Server   | Core Service installation                                        |
| 139 445     | TCP      | Netwrix Auditor Server | Windows Server running FrontEnd Server   | Core Service installation                                        |
| Custom port | TCP      | Netwrix Auditor Server | Central Administration – FrontEnd Server | HTTP/ HTTPS Used to connect to SharePoint Central Administration |

# SQL Server Ports

Review a full list of protocols and ports required for Netwrix Auditor for SQL Server.

- Allow outbound connections from the dynamic (1024 - 65535) local port on the computer where
  Netwrix Auditor Server resides.
- Allow outbound connections to remote ports on the source and inbound connections to local ports on
  the target.

Tip for reading the table: For example, on the computer where Netwrix Auditor Server resides
(source), allow outbound connections to remote 1433 TCP port. On the computer hosting default SQL
Server instance (target), allow inbound connections to local 1433 TCP port.

| Port                 | Protocol | Source                 | Target                      | Purpose                                                                                                                                  |
| -------------------- | -------- | ---------------------- | --------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| 1433                 | TCP      | Netwrix Auditor Server | Default SQL Server Instance | Connection to the default named instance server. Port 1433 is the default connections port, however, you can configure another TCP port. |
| 1434                 | UDP      | Netwrix Auditor Server | SQL Server Browser Service  | Service which helps resolving named instance servers                                                                                     |
| Dynamic: 1024 -65535 | TCP      | Netwrix Auditor Server | Named SQL Server Instance   | Connection to the named instance servers                                                                                                 |

# User Activity Ports

Review a full list of protocols and ports required for monitoring User Activity.

- Allow outbound connections from the dynamic (1024 - 65535) local port on the computer where
  Netwrix Auditor Server resides.
- Allow outbound connections to remote ports on the source and inbound connections to local ports on
  the target.

Tip for reading the table: For example, on any monitored computer (source), allow outbound
connections to remote 9004 TCP port. On the computer where Netwrix Auditor Server resides (target),
allow inbound connections to local 9004 TCP port.

| Port                 | Protocol | Source                 | Target                 | Purpose                                                                 |
| -------------------- | -------- | ---------------------- | ---------------------- | ----------------------------------------------------------------------- |
| 9004                 | TCP      | Monitored computer     | Netwrix Auditor Server | Core Service communications                                             |
| 9003                 | TCP      | Netwrix Auditor Server | Monitored computer     | Core Service communications                                             |
| 139 445              | TCP      | Netwrix Auditor Server | Monitored computer     | Service Control Manager Remote Protocol (RPC) Remote registry           |
| Dynamic: 1024 -65535 | TCP      | Netwrix Auditor Server | Monitored computer     | Windows Management Instrumentation                                      |
| 135                  | TCP      | Netwrix Auditor Server | Monitored computer     | Service Control Manager Remote Protocol (RPC) Core Service installation |
| 137 through 139      | UDP      | Netwrix Auditor Server | Monitored computer     | Service Control Manager Remote Protocol (RPC) Core Service installation |
| 445                  | TCP      | Netwrix Auditor Server | Monitored computer     | SMB 2.0/3.0 Video files copy                                            |
| –                    | ICMP     | Netwrix Auditor Server | Monitored computer     | Core Service communications                                             |

# VMware Ports

Review a full list of protocols and ports required for Netwrix Auditor for VMware.

- Allow outbound connections from the dynamic (1024 - 65535) local port on the computer where
  Netwrix Auditor Server resides.
- Allow outbound connections to remote ports on the source and inbound connections to local ports on
  the target.

Tip for reading the table: For example, on the computer where Netwrix Auditor Server resides
(source), allow outbound connections to remote 443 TCP port. On the VMware server (target), allow
inbound connections to local 443 TCP port.

| Port | Protocol | Source                 | Target | Purpose                                    |
| ---- | -------- | ---------------------- | ------ | ------------------------------------------ |
| 443  | TCP      | Netwrix Auditor Server | VMware | HTTPS Connection to VMware VSphere via SDK |

# Windows Server Ports

Review a full list of protocols and ports required for Netwrix Auditor for Windows Server.

- Allow outbound connections from the dynamic (1024 - 65535) local port on the computer where
  Netwrix Auditor Server resides.
- Allow outbound connections to remote ports on the source and inbound connections to local ports on
  the target.

Tip for reading the table: For example, on the computer where Netwrix Auditor Server resides
(source), allow outbound connections to remote 139 TCP port. On monitored computers (target), allow
inbound connections to local 139 TCP port.

| Port                       | Protocol | Source                                                                         | Target                 | Purpose                                                                                                             |
| -------------------------- | -------- | ------------------------------------------------------------------------------ | ---------------------- | ------------------------------------------------------------------------------------------------------------------- |
| 139 445                    | TCP      | Netwrix Auditor Server                                                         | Monitored computer     | Service Control Manager Remote Protocol (RPC) Remote registry                                                       |
| 135 + Dynamic: 1024 -65535 | TCP      | Netwrix Auditor Server                                                         | Monitored computer     | Windows Management Instrumentation Collect objects                                                                  |
| 135 + Dynamic: 1024 -65535 | TCP      | Netwrix Auditor Server                                                         | Monitored computer     | Collect removable storage insertions. Allow the following process to use the port: %systemroot%\system32\plasrv.exe |
| 135                        | TCP      | Netwrix Auditor Server                                                         | Monitored computer     | Service Control Manager Remote Protocol (RPC) Core Service installation                                             |
| 137 through 139            | UDP      | Netwrix Auditor Server                                                         | Monitored computer     | Service Control Manager Remote Protocol (RPC) Core Service installation                                             |
| 445                        | TCP      | Netwrix Auditor Server                                                         | Monitored computer     | SMB 2.0/3.0                                                                                                         |
| 9011                       | TCP      | Computers where Netwrix Auditor for Windows Server Compression Services reside | Netwrix Auditor Server | Network traffic compression and interaction with services                                                           |

## Configure Windows Firewall Inbound Connection Rules

You can also configure Windows Firewall settings through Group Policy settings. To do this, edit the
GPO affecting your firewall settings. Navigate to Computer Configuration > Administrative
Templates > Network >Network Connections > Windows Firewall, select Domain Profile or Standard
Profile. Then, enable the Allow inbound remote administration exception.

**Step 1 –** On each audited server, navigate to **Start** > **Control Panel** and select **Windows
Firewall**.

**Step 2 –** In the Help Protect your computer with Windows Firewall page, click **Advanced
settings** on the left.

**Step 3 –** In the Windows Firewall with Advanced Security dialog, select **Inbound Rules** on the
left.

![manualconfig_nla_inbound_connections2016](/img/versioned_docs/auditor_10.6/auditor/configuration/fileservers/windows/manualconfig_nla_inbound_connections2016.webp)

**Step 4 –** Enable the following inbound connection rules:

- Remote Event Log Management (NP-In)
- Remote Event Log Management (RPC)
- Remote Event Log Management (RPC-EPMAP)
- Windows Management Instrumentation (ASync-In)
- Windows Management Instrumentation (DCOM-In)
- Windows Management Instrumentation (WMI-In)
- Network Discovery (NB-Name-In)
- File and Printer Sharing (NB-Name-In)
- File and Printer Sharing (Echo Request - ICMPv4-In)
- File and Printer Sharing (Echo Request - ICMPv6-In)
- Remote Service Management (NP-In)
- Remote Service Management (RPC)
- Performance Logs and Alerts (DCOM-In)
- Performance Logs and Alerts (Tcp-In)

If you plan to audit Windows Server 2019 or Windows 10 Update 1803 without network compression
service, make sure the following inbound connection rules are enabled:

- Remote Scheduled Tasks Management (RPC)
- Remote Scheduled Tasks Management (RPC-EMAP)

# Protocols and Ports Required

To ensure successful data collection and activity monitoring, Auditor has to communicate through
firewall and requires some ports to be opened for inbound and outbound connections.

**_RECOMMENDED:_** Netwrix recommends reviewing your current port configuration after every
re-installation or upgrade.

| If you use...        | Do the following...                                                                                                                                                                                                                                                                                                                                                                             |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Windows Firewall     | If you are running Windows Firewall on the computer where Auditor Server is going to be installed, the 135, 9004, 9699, 9011, and one dynamic port will be opened automatically for inbound connections during Auditor installation. For outbound rules, create or enable predefined Windows Firewall rules. Before installing Auditor, make sure that the Windows Firewall service is started. |
| Third-party Firewall | If you use a third-party firewall, you must create rules manually.                                                                                                                                                                                                                                                                                                                              |

Follow the steps to create Firewall rules manually.

The example below applies to Windows Firewall and explains how to create a rule for inbound
connection.

**Step 1 –** Start the Windows Firewall service.

**Step 2 –** Navigate to **Start** > **Control Panel** and select **Windows Firewall**.

**Step 3 –** In the **Help Protect your computer with Windows Firewall** page, click **Advanced
settings** on the left.

**Step 4 –** In the Windows Firewall with Advanced Security dialog, select Inbound Rules on the
left.

**Step 5 –** Click New Rule. In the New Inbound Rule wizard, complete the following steps:

- On the Rule Type step, select Port.
- On the Protocol and Ports step, select TCP or UDP. In the Specific local ports field specify the
  port number.
- On the Action step, select the Allow the connection action.
- On the Profile step, make sure that the rule applies to all profiles (Domain, Private, Public).
- On the Name step, specify the rule's name, for example Netwrix Auditor TCP port_number Access.

In most cases, this configuration is enough to ensure successful data collection and processing. If
your organization policy requires you to provide a justification for each particular port, review
the following for a full list of ports to be opened on the computer where Auditor Server is going to
be installed and on your target servers.

- [Active Directory Ports](/docs/auditor/10.6/reference/ports-and-protocols.md)
- [AD FS Ports](/docs/auditor/10.6/reference/ports-and-protocols.md)
- [Microsoft Entra ID Ports](/docs/auditor/10.6/reference/ports-and-protocols.md)
- [Dell Data Storage Ports](/docs/auditor/10.6/reference/ports-and-protocols.md)
- [Exchange Ports](/docs/auditor/10.6/reference/ports-and-protocols.md)
- [Exchange Online Ports](/docs/auditor/10.6/reference/ports-and-protocols.md)
- [Group Policy Ports](/docs/auditor/10.6/reference/ports-and-protocols.md)
- [Integration API Ports](/docs/auditor/10.6/api/reference.md)
- [ Logon Activity Ports](/docs/auditor/10.6/reference/ports-and-protocols.md)
- [Nutanix Ports](/docs/auditor/10.6/reference/ports-and-protocols.md)
- [Oracle Database Ports](/docs/auditor/10.6/reference/ports-and-protocols.md)
- [Qumulo Ports](/docs/auditor/10.6/reference/ports-and-protocols.md)
- [SharePoint Ports](/docs/auditor/10.6/reference/ports-and-protocols.md)
- [SharePoint Online Ports](/docs/auditor/10.6/reference/ports-and-protocols.md)
- [SQL Server Ports](/docs/auditor/10.6/reference/ports-and-protocols.md)
- [Synology Ports](/docs/auditor/10.6/reference/ports-and-protocols.md)
- [Teams Ports](/docs/auditor/10.6/reference/ports-and-protocols.md)
- [User Activity Ports](/docs/auditor/10.6/reference/ports-and-protocols.md)
- [VMware Ports](/docs/auditor/10.6/reference/ports-and-protocols.md)
- [Windows File Server Ports](/docs/auditor/10.6/reference/ports-and-protocols.md)
- [Windows Server Ports](/docs/auditor/10.6/reference/ports-and-protocols.md)

## Netwrix Auditor Server

During installation, Netwrix Auditor automatically creates inbound Windows Firewall rules for the
essential ports required for the product to function properly. If you use a third-party firewall,
make sure to allow inbound connections to local ports on the target and outbound connections to
remote ports on the source.

Tip for reading the table: For example, on the computer where Netwrix Auditor client is installed
(source), allow outbound connections to remote 135 TCP port. On the computer where Netwrix Auditor
Server resides (target), allow inbound connections to local 135 TCP port.

| Port                               | Protocol | Source                                                                          | Target                 | Purpose                                                                                                                                                           |
| ---------------------------------- | -------- | ------------------------------------------------------------------------------- | ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 135                                | TCP      | Computer where Netwrix Auditor client is installed                              | Netwrix Auditor Server | Netwrix Auditor remote client console                                                                                                                             |
| 9004                               | TCP      | Monitored computers                                                             | Netwrix Auditor Server | Core services responsible for user activity monitoring                                                                                                            |
| 9011                               | TCP      | Computers where Netwrix Auditor for Windows Server Compression Services reside  | Netwrix Auditor Server | Network traffic compression and interaction with hubs and services                                                                                                |
| 9699                               | TCP      | Script / query host                                                             | Netwrix Auditor Server | Netwrix Auditor Integration API                                                                                                                                   |
| Dynamic: 1024 -65535               | TCP      | Computers where Netwrix Auditor Server and Netwrix Auditor client are installed | Netwrix Auditor Server | Netwrix Auditor internal components interaction. Allow C:\Program Files (x86)\Netwrix Auditor\Audit Core\NwCoreSvc.exe to use the port.                           |
| For Managed Service Providers: 443 | TCP      | Netwrix Auditor Server                                                          | Netwrix Partner Portal | Reporting on active MSP licenses                                                                                                                                  |
| - 80 for http - 443 for https      | TCP      | SSRS                                                                            | Netwrix Auditor Server | Reports **NOTE:** If your environment is configured differently, we recommend that you check with your DBA or the SSRS settings through the Configuration Manage. |

In most environments, the rules are created automatically and you do not need to open more ports to
ensure successful data collection.

In rare cases, for example if your security policies require you to provide a justification for
opening each particular port, you might need a more detailed overview.
