# Export Activity Records

## Export Activity Records Associated with the Alert

To export only important audit data, that is, the Activity Records that led to the alert triggering, configure the alert response action, providing path to __Netwrix_Auditor_Alerts_to_Event_Log_Add-on.ps1__. See the [SIEM](/versioned_docs/auditor_10.6/auditor/addon/siem/overview.md) topic for additional information.

## Export Activity Records in Bulk

As said, Netwrix recommends exporting the most important data, using the script described above. However, if you need to export all Activity Records in bulk, follow the recommendations below.

First, provide a path to your add-on followed by script parameters with their values. Each parameter is preceded with a dash; a space separates a parameter name from its value. You can skip some parameters—the script uses a default value unless a parameter is explicitly defined. If necessary, modify the parameters as required.

Follow the steps to run add-on with PowerShell:

__Step 1 –__ On computer where you want to execute the add-on, start Windows PowerShell.

__Step 2 –__ Type a path to the add-on. Or simply drag and drop the add-on file in the console window.

__Step 3 –__ Add script parameters. The console will look similar to the following:

Windows PowerShell

Copyright (C) 2014 Microsoft Corporation. All rights reserved.

PS C:\Users\AddOnUser> C:\Add-ons\Netwrix_Auditor_Activity_Records_to_Event_Log_Add-on.ps1.ps1

If the script path contains spaces (e.g., ```C:\Netwrix Add-ons\```), embrace it in double quotes and insert the ampersand (&) symbol in front (e.g., ```& "C:\Netwrix Add-ons\"```).

__Step 4 –__ Hit __Enter__.

Depending on the number of Activity Records stored in Auditor Audit Database execution may take a while. Ensure the script execution completed successfully. The Netwrix Auditor Integration event log will be created and filled with events.

By default, the Netwrix Auditor Integration event log size is set to _1GB_, and retention is set to _"Overwrite events as needed"_. See the [Integration Event Log Fields](/versioned_docs/auditor_10.6/auditor/addon/siem/integrationeventlog.md) topic for additional information.

Event records with more than 30,000 characters length will be trimmed.

At the end of each run, the script creates the __Netwrix_Auditor_Event_Log_Export_Add-on_EventIDs.txt__ file. It defines mapping between the Activity Records and related Event IDs .

You can use this file to track possible duplicates of Event IDs created at each script execution. Duplicates, if any, are written to the __Netwrix_Auditor_Event_Log_Export_Add-on_EventIDsDuplicates.txt__ file.

Similarly, the add-on also creates the __Netwrix_Auditor_Event_Log_Export_Add-on_CategoriesIDs.txt__ file that defines mapping between the Data Source and related Category ID.

### Apply Filters

Every time you run the script, Auditor makes a timestamp. The next time you run the script, it will start retrieving new Activity Records. Consider the following:

- By default, the add-on does not apply any filters when exporting Activity Records. If you are running the add-on for the first time (there is no timestamp yet) with no filters, it will export Activity Records for the last month only. This helps to optimize solution performance during the first run. At the end of the first run, the timestamp will be created, and the next run will start export from that timestamp.
- However, if you have specified a time period for Activity Records to be exported, then this filter will be applied at the add-on first run and the runs that follow.

### Automate Add-On Execution

To ensure you feed the most recent data to your SIEM solution, you can schedule a daily task for running the Activity Records to Event Log add-on.

To ensure you feed the most recent data to your SIEM solution, Netwrix recommends scheduling a daily task for running the add-on.

__Perform the following steps to create a scheduled task:__

__Step 1 –__ On the computer where you want to execute the add-on, navigate to __Task Scheduler__.Task Scheduler.

__Step 2 –__ On the __General__ tab, specify a task name. Make sure the account that runs the task has all necessary rights and permissions.

__Step 3 –__ On the __Triggers__ tab, click __New__ and define the schedule. This option controls how often audit data is exported from Auditor and saved to event log. Netwrixrecommends scheduling a daily task.

__Step 4 –__ On the __Actions__ tab, click __New__ and specify action details. Review the following for additional information:

| Option | Value |
| --- | --- |
| Action | Set to _"Start a program"_. |
| Program/script | Input _"Powershell.exe"_. |
| Add arguments (optional) | Add a path to the add-on in double quotes and specify add-on parameters. For example:  -file "C:\Add-ons\Netwrix_Auditor_Audit_Records_to_Event_Log_Add-on.ps1" |

__Step 5 –__ Save the task.

After creating a task, wait for the next scheduled run or navigate to __Task Scheduler__ and run the task manually. To do this, right-click a task and click __Run__.
