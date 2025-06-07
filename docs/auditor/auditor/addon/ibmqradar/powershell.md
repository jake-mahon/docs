# Run the Add-On with PowerShell

First, provide a path to your add-on followed by script parameters with their values. Each parameter is preceded with a dash; a space separates a parameter name from its value. You can skip some parameters— the script uses a default value unless a parameter is explicitly defined. If necessary, modify the parameters as required.

Follow the steps to run add-on with PowerShell:

__Step 1 –__ On computer where you want to execute the add-on, start Windows PowerShell.

__Step 2 –__ Type a path to the add-on. Or simply drag and drop the add-on file in the console window.

__Step 3 –__ Add script parameters. The console will look similar to the following:

Windows PowerShell

Copyright (C) 2014 Microsoft Corporation. All rights reserved.

PS C:\Users\AddOnUser> C:\Add-ons\Netwrix\_Auditor\_Add-on\_for\_IBM\_QRadar.ps1 - NetwrixAuditorHost 172.28.6.15

__NOTE:__ If the script path contains spaces (e.g., _C:\Netwrix Add-ons\_), embrace it in double quotes and insert the ampersand (__&__) symbol in front (e.g., & "_C:\Netwrix Add-ons\_").

__Step 4 –__ Hit __Enter__.

Depending on the number of Activity Records stored in Netwrix Auditor Audit Database execution may take a while. Ensure the script execution completed successfully. The Netwrix Auditor __Integration__ event log will be created and filled with events.

By default, the Netwrix Auditor __Integration__ event log size is set to __1GB__, and retention is set to "_Overwrite events as needed_". See the [Integration Event Log Fields](/docs/product_docs/auditor/auditor/addon/ibmqradar/integrationeventlog.md) topic for additional information.

__NOTE:__ Event records with more than 30,000 characters length will be trimmed.

At the end of each run, the script creates the __Netwrix\_Auditor\_Event\_Log\_Export\_Add-on\_EventIDs.txt__ file. It defines mapping between the Activity Records and related Event IDs . You can use this file to track possible duplicates of Event IDs created at each script execution. Duplicates, if any, are written to the __Netwrix\_Auditor\_Event\_Log\_Export\_Add-on\_EventIDsDuplicates.txt__ file.

Similarly, the add-on also creates the __Netwrix\_Auditor\_Event\_Log\_Export\_Add-on\_CategoriesIDs.txt__ file that defines mapping between the Data Source and related Category ID.

## Applying Filters

Every time you run the script, Auditor makes a timestamp. The next time you run the script, it will start retrieving new Activity Records. Consider the following:

- By default, the add-on does not apply any filters when exporting Activity Records. If you are running the add-on for the first time (there is no timestamp yet) with no filters, it will export Activity Records for the last month only. This helps to optimize solution performance during the first run. At the end of the first run, the timestamp will be created, and the next run will start export from that timestamp.

- However, if you have specified a time period for Activity Records to be exported, then this filter will be applied at the add-on first run and the runs that follow.
