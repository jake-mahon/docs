---
sidebar_position: 1848
title: Adjust DHCP Server Operational Log Settings
---

Filter: 

* All Files

Submit Search

# Adjust DHCP Server Operational Log Settings

If you plan to monitor DHCP changes, you may need to adjust your DHCP Server Operational log settings (size and retention method). For that, take the steps described below.

1. On the DHCP server, navigate to Event Viewer.
2. Navigate to Event Viewer tree → Applications and Services Logs → Microsoft → Windows and expand the DHCP-Server node.
3. Right-click the Operational log and select Properties.

   ![](../../../../../../static/images/Auditor_10.7/Content/Resources/Images/Auditor/ManualConfig/Manual_Config_DHCP_Log.png)
4. Make sure the **Enable logging** option is selected.
5. Set **Maximum log size** to **4 GB**.
6. Set the retention method to **Overwrite events as needed (oldest events first)**. Click **OK** to save the settings and close the dialog.