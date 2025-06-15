# Automate Add-On Execution

After creating a task, wait for the next scheduled run or navigate to __Task Scheduler__ and run the task manually. To do this, right-click a task and click __Run__.

__Step 1 –__ On the computer where you want to execute the add-on, navigate to __Task Scheduler__.

__Step 2 –__ On the __General__ tab, specify a task name. Make sure the account that runs the task has all necessary rights and permissions.

__Step 3 –__ On the __Triggers__ tab, click __New__ and define the schedule. This option controls how often audit data is exported from Auditor and saved to event log. Netwrixrecommends scheduling a daily task.

__Step 4 –__ On the __Actions__ tab, click __New__ and specify action details. Review the following for additional information:

| Option | Value |
| --- | --- |
| Action | Set to "_Start a program_". |
| Program/script | Input "_Powershell.exe_". |
| Add arguments (optional) | Add a path to the add-on in double quotes and specify add-on parameters.  For example:  -file "C:\Add-ons\Netwrix_Auditor_Add-on_for_LogRhythm.ps1" -NetwrixAuditorHost 172.28.6.15 |

__Step 5 –__ Save the task.

After creating a task, wait for the next scheduled run or navigate to __Task Scheduler__ and run the task manually. To do this, right-click a task and click __Run__.
