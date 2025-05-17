---
sidebar_position: 1628
title: Run the Add-On with PowerShell
---

Filter: 

* All Files

Submit Search

# Run the Add-On with PowerShell

First, provide a path to your add-on followed by script parameters with their values. Each parameter is preceded with a dash; a space separates a parameter name from its value. You can skip some parameters— the script uses a default value unless a parameter is explicitly defined. If necessary, modify the parameters as required.

Follow the steps to run add-on with PowerShell:

**Step 1 –** On computer where you want to execute the add-on, start Windows PowerShell.

**Step 2 –** Type a path to the add-on. Or simply drag and drop the add-on file in the console window.

**Step 3 –** Add script parameters. The console will look similar to the following:

Windows PowerShell

Copyright (C) 2014 Microsoft Corporation. All rights reserved.

PS C:\Users\AddOnUser> C:\Add-ons\Netwrix\_Auditor\_Event\_Log\_Export\_Add-on.ps1 - NetwrixAuditorHost 172.28.6.15

**NOTE:** If the script path contains spaces (e.g., *C:\Netwrix Add-ons\*), embrace it in double quotes and insert the ampersand (**&**) symbol in front (e.g., & "*C:\Netwrix Add-ons\*").

**Step 4 –** Hit **Enter**.

Depending on the number of Activity Records stored in Netwrix Auditor Audit Database execution may take a while. Ensure the script execution completed successfully. The Netwrix Auditor **Integration** event log will be created and filled with events.

By default, the Netwrix Auditor **Integration** event log size is set to **1GB**, and retention is set to "*Overwrite events as needed*".