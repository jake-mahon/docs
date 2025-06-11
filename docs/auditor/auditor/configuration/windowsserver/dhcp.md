# Adjust DHCP Server Operational Log Settings

If you plan to monitor DHCP changes, you may need to adjust your DHCP Server Operational log settings (size and retention method). For that, take the steps described below.

1. On the DHCP server, navigate to Event Viewer.
2. Navigate to Event Viewer tree → Applications and Services Logs → Microsoft → Windows and expand the DHCP-Server node.
3. Right-click the Operational log and select Properties.

   ![manual_config_dhcp_log](/img/product_docs/auditor/auditor/configuration/windowsserver/manual_config_dhcp_log.webp)
4. Make sure the __Enable logging__ option is selected.
5. Set __Maximum log size__ to __4 GB__.
6. Set the retention method to __Overwrite events as needed (oldest events first)__. Click __OK__ to save the settings and close the dialog.
