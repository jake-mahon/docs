---
sidebar_position: 1847
title: Internet Information Services (IIS)
---

Filter: 

* All Files

Submit Search

# Internet Information Services (IIS)

To be able to process Internet Information Services (IIS) events, you must enable the Remote Registry service on the target computers. [Windows Server](Overview "Windows Servers")

To configure the Operational log size and retention method

1. On the computer where IIS is installed, navigate to Start > Windows Administrative Tools → Event Viewer.
2. Navigate to Event Viewer tree → Applications and Services Logs → Microsoft → Windows and expand the IIS-Configuration node.
3. Right-click the Operational log and select Properties.

   ![](../../../../../../static/images/Auditor_10.7/Content/Resources/Images/Auditor/ManualConfig/ManualConfig_IIS2016.png)
4. Make sure **Enable logging** is enabled.
5. Set **Maximum log size** to 4 GB.
6. Make sure **Do not overwrite events (Clear logs manually)** is cleared. If selected, change the retention method to **Overwrite events as needed (oldest events first)**.