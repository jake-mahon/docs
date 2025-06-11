# Run the Add-On with PowerShell

Follow the steps to run add-on with PowerShell:

__Step 1 –__ On computer where you want to execute the add-on, start Windows PowerShell.

__Step 2 –__ Type a path to the add-on. Or simply drag and drop the add-on file in the console window.

__Step 3 –__ Add script parameters. The console will look similar to the following:

Windows PowerShell PS C:\Users\AddOnUser> C:\Add-ons\Netwrix\_Auditor\_Add-on\_for\_HPE\_ArcSight.ps1 - ArcSightHost 172.28.6.24 -NetwrixAuditorHost 172.28.6.15

__NOTE:__ If the script path contains spaces (e.g., _C:\Netwrix Add-ons\_), embrace it in double quotes and insert the ampersand (__&__) symbol in front (e.g., & "_C:\Netwrix Add-ons\_").

__Step 4 –__ Hit __Enter__.

Depending on the number of Activity Records stored in the Audit Database execution may take a while. Ensure the script execution completed successfully. As a result, data will be exported to ArcSight. Note that events exceeding 4000 symbols are trimmed.

Every time you run the script, Auditor makes a timestamp. The next time you run the script, it will start retrieving new Activity Records.
