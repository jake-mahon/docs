---
sidebar_position: 7722
title: Ports
---

# Ports

Configure appropriate firewall rules to allow these connections to Privilege Secure.

## Dynamic Port Range

In Windows Server 2008 and later versions, and in Windows Vista and later versions, the default dynamic port range changed to the following range:

* Start port: 49152
* End port: 65535

Windows 2000, Windows XP, and Windows Server 2003 use the following dynamic port range:

* Start port: 1025
* End port: 5000

See Microsoft's article [Service overview and network port requirements for Windows](https://learn.microsoft.com/en-us/troubleshoot/windows-server/networking/service-overview-and-network-port-requirements "Service overview and network port requirements for Windows") for additional information.

## Application Server Firewall Rules

The requirements for the (Privilege Secure) application server are:

* Make sure that you have configured the Antivirus exclusions according to the following Netwrix knowledge base article: [SbPAM: Exclusions for Antivirus (AV) & Endpoint Software](https://kb.netwrix.com/5938 "SbPAM: Exclusions for Antivirus (AV) & Endpoint Software")
* The following ports must be open for communication between Privilege Secure and Active Directory domain controllers:

| Port | Protocol | Source | Direction | Target | Purpose |
| --- | --- | --- | --- | --- | --- |
| 135 | TCP | Privilege Secure server |  | Domain Controller | MS-RPC |
| 389  636 | TCP  UDP | Privilege Secure server |  | Domain Controller | LDAP/LDAPS |
| 53 | TCP  UDP | Privilege Secure server |  | DNS Service | DNS |
| 137  138 | UDP | Privilege Secure server |  | Domain Controller | Net BIOS related |
| **9389** | TCP | Privilege Secure server |  | Domain Controller | Active Directory Web Services  Make sure that you have configured the Antivirus exclusions according to the following Netwrix knowledge base article: [SbPAM: Exclusions for Antivirus (AV) & Endpoint Software](https://kb.netwrix.com/5938 "SbPAM: Exclusions for Antivirus (AV) & Endpoint Software") |
| **88** | UDP | Privilege Secure server |  | Domain Controller | Kerberos |

**NOTE:** Privilege Secure must be able to reach the following URLs via HTTPS (port 443)

* https://login.microsoftonline.com
* https://graph.microsoft.com

## Proxy Firewall Rules

The following ports must be open for communication between the proxy and Privilege Secure.

Proxy Server Sizing for Windows/Linux/Docker

| Administrators | Concurrent Sessions | Memory | CPU Cores | Disk (max) |
| --- | --- | --- | --- | --- |
| 450 | 150 | 16 GB | 4 cores | 21 GB per day |
| 900 | 300 | 32 GB | 8 cores | 42 GB per day |
| 1800 | 600 | 64 GB | 16 cores | 84 G per day |

Additional Considerations for SSH and RDP Clients

The following ports must be open for communication between the Client and Privilege Secure:

| Port | Protocol | Source | Direction | Target | Purpose |
| --- | --- | --- | --- | --- | --- |
| 4422 | TCP | SSH Client |  | SbPAM server | SSH Proxy |
| 4489 | TCP | RDP Client |  | SbPAM server | RDP Proxy |

## Target Environment Firewall Rules

The following ports must be open for communication between Privilege Secure and the platform:

| Port | Protocol | Source | Direction | Target | Purpose |
| --- | --- | --- | --- | --- | --- |
| 3389 | TCP | Privilege Secure server |  | Windows Hosts | RDP Proxy |
| 5985  5986 | TCP | Privilege Secure server |  | Windows Hosts | PowerShell Remoting |
| 5985  5986 | TCP | Privilege Secure server |  | Windows Hosts | Password Change via Powershell Remoting |
| 22 | TCP | Privilege Secure server |  | Linux Hosts | SSH Proxy / Password change |
| 6520 | TCP | Privilege Secure server |  | Remote Proxy | Register Proxy Service |
| 6500 | TCP | Privilege Secure server |  | Remote Action Service | Register Action Service |
| **443** | HTTPS (TCP) | Privilege Secure Server |  | Azure | Azure Graph API Access |
| 6523 | TCP | Privilege Secure Server |  | Remote Proxy | Leaf Nodes |
| 6524 | TCP | Privilege Secure Server |  | Remote Proxy | Cluster Nodes |