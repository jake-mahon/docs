---
sidebar_position: 1519
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

PS C:\Users\AddOnUser> C:\Add-ons\Netwrix\_Auditor\_CEF\_Export\_Add-on.ps1 -OutputFolder C:\CEF\_Export -NetwrixAuditorHost 172.28.6.15

**NOTE:** If the script path contains spaces (e.g., *C:\Netwrix Add-ons\*), embrace it in double quotes and insert the ampersand (**&**) symbol in front (e.g., & "*C:\Netwrix Add-ons\*").

**Step 4 –** Hit **Enter**.

Depending on the number of Activity Records stored in Auditor Audit Database execution may take a while. Ensure the script execution completed successfully. The CEF log file will be created in the destination folder. Note that details (or 'msg' in CEF terms) exceeding 16000 symbols are trimmed.

Every time you run the script, Auditor makes a timestamp. The next time you run the script, it will start retrieving new Activity Records.