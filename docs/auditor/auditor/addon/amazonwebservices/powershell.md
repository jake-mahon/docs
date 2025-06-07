# Run the Add-On with PowerShell

Follow the steps to run add-on with PowerShell:

__Step 1 –__ On computer where you want to execute the add-on, start Windows PowerShell.

__Step 2 –__ Type a path to the add-on. Or simply drag and drop the add-on file in the console window.

__Step 3 –__ Add script parameters. The console will look similar to the following:

Windows PowerShell

Copyright (C) 2014 Microsoft Corporation. All rights reserved.

PS C:\Users\AddOnUser> C:\Add-ons\Netwrix\_Auditor\_Add-on\_for\_Amazon\_Web\_Services.ps1 - NetwrixAuditorHost 172.28.6.15

__NOTE:__ If the script path contains spaces (e.g., ```C:\Netwrix Add-ons\```), embrace it in double quotes and insert the ampersand (&) symbol in front (e.g., & "```C:\Netwrix Add-ons\```").

__Step 4 –__ Hit __Enter__.

Depending on the number of events logged by CloudTrail it may take a while. Ensure the script execution completed successfully. Every time you run a script, Auditor makes a checkpoint with the last imported event. The next time you run the script, it will start retrieving new events.

__NOTE:__ By default, CloudTrail keeps events for __7__ days.
