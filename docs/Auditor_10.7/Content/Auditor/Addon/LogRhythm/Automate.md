---
sidebar_position: 1643
title: Automate Add-On Execution
---

Filter: 

* All Files

Submit Search

# Automate Add-On Execution

After creating a task, wait for the next scheduled run or navigate to **Task Scheduler** and run the task manually. To do this, right-click a task and click **Run**.

**Step 1 –** On the computer where you want to execute the add-on, navigate to **Task Scheduler**.

**Step 2 –** On the **General** tab, specify a task name. Make sure the account that runs the task has all necessary rights and permissions.

**Step 3 –** On the **Triggers** tab, click **New** and define the schedule. This option controls how often audit data is exported from Auditor and saved to event log. Netwrixrecommends scheduling a daily task.

**Step 4 –** On the **Actions** tab, click **New** and specify action details. Review the following for additional information:

| Option | Value |
| --- | --- |
| Action | Set to "*Start a program*". |
| Program/script | Input "*Powershell.exe*". |
| Add arguments (optional) | Add a path to the add-on in double quotes and specify add-on parameters.  For example:  -file "C:\Add-ons\Netwrix\_Auditor\_Add-on\_for\_LogRhythm.ps1" -NetwrixAuditorHost 172.28.6.15 |

**Step 5 –** Save the task.

After creating a task, wait for the next scheduled run or navigate to **Task Scheduler** and run the task manually. To do this, right-click a task and click **Run**.