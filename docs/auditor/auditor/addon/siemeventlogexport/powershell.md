# Run the Add-On with PowerShell

First, provide a path to your add-on followed by script parameters with their values. Each parameter is preceded with a dash; a space separates a parameter name from its value. You can skip some parameters— the script uses a default value unless a parameter is explicitly defined. If necessary, modify the parameters as required.

Follow the steps to run add-on with PowerShell:

__Step 1 –__ On computer where you want to execute the add-on, start Windows PowerShell.

__Step 2 –__ Type a path to the add-on. Or simply drag and drop the add-on file in the console window.

__Step 3 –__ Add script parameters. The console will look similar to the following:

Windows PowerShell

Copyright (C) 2014 Microsoft Corporation. All rights reserved.

PS C:\Users\AddOnUser> C:\Add-ons\Netwrix_Auditor_Event_Log_Export_Add-on.ps1 - NetwrixAuditorHost 172.28.6.15

__NOTE:__ If the script path contains spaces (e.g., _C:\Netwrix Add-ons_), embrace it in double quotes and insert the ampersand (__&__) symbol in front (e.g., & "_C:\Netwrix Add-ons_").

__Step 4 –__ Hit __Enter__.

Depending on the number of Activity Records stored in Netwrix Auditor Audit Database execution may take a while. Ensure the script execution completed successfully. The Netwrix Auditor __Integration__ event log will be created and filled with events.

By default, the Netwrix Auditor __Integration__ event log size is set to __1GB__, and retention is set to "_Overwrite events as needed_".
