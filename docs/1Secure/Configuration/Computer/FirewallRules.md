---
id: firewallrules
title: Configure Windows Firewall Inbound Connection Rules
---

# Configure Windows Firewall Inbound Connection Rules

`Computer Configuration > Administrative Templates > Network > Network Connections > Windows Firewall`

Select Domain Profile or Standard Profile (depending on the profile that is active on the host). Then enable the Allow inbound remote administration exception.

**Step 1 –** On each computer audited by 1Secure, navigate to Start > Control Panel and select Windows Firewall.

**Step 3 –** In the Windows Firewall with Advanced Security dialog, select Inbound Rules on the left.

![Windows Firewall Advanced Security window](/img/1secure/configuration/ManualConfig_NLA_Inbound_Connections2016.png "Windows Firewall Advanced Security window")

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