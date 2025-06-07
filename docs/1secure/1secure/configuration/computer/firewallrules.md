# Configure Windows Firewall Inbound Connection Rules

You need to configure the inbound connection rules in Windows Firewall on each target computer, where 'target computer' refers to a computer audited by 1Secure. These Windows Firewall settings can be managed through Group Policy settings. To do this, edit the GPO affecting your firewall settings. Navigate to:

```Computer Configuration > Administrative Templates > Network > Network Connections > Windows Firewall```

Select Domain Profile or Standard Profile (depending on the profile that is active on the host). Then enable the Allow inbound remote administration exception.

__Step 1 –__ On each computer audited by 1Secure, navigate to Start > Control Panel and select Windows Firewall.

__Step 2 –__ In the Help Protect your computer with Windows Firewall page, click __Advanced settings__ on the left.

__Step 3 –__ In the Windows Firewall with Advanced Security dialog, select Inbound Rules on the left.

![Windows Firewall Advanced Security window](/static/img/product_docs/1secure/1secure/configuration/logonactivity/manualconfig_nla_inbound_connections2016.png)

__Step 4 –__ Enable the following inbound connection rules:

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
