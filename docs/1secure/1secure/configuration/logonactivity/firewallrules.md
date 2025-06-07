# Configure Windows Firewall Inbound Connection Rules

For successful data collection, Netwrix 1Secure may have to create inbound Firewall rules. If you do not enable the Network traffic compression option, the product will try creating these rules automatically and will notify you it fails to do so. In this case, you have to configure Windows Firewall inbound rules manually.

Follow the steps to configure Windows Firewall Inbound Connection Rules.

__Step 1 –__ On every domain controller, navigate to __Start__ > __Control Panel__ and select __Windows Firewall__.

__Step 2 –__ In the __Help Protect your computer with Windows Firewall__ page, click __Advanced settings__ on the left.

__Step 3 –__ In the Windows Firewall with Advanced Security dialog, select Inbound Rules on the left.

![manualconfig_nla_inbound_connections2016](/static/img/product_docs/1secure/1secure/configuration/logonactivity/manualconfig_nla_inbound_connections2016.png)

__Step 4 –__ Enable the following inbound connection rules:

- Remote Event Log Management (NP-In)
- Remote Event Log Management (RPC)
- Remote Event Log Management (RPC-EPMAP)
