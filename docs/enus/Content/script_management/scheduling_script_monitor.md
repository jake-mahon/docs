---
sidebar_position: 1415
title: Scheduling the Script Monitor
---

# Scheduling the Script Monitor

Deploy the Strongpoint Script Monitor ResultData SS script to capture script data.
This script populates data such as:

* Employees using customization
* Departments using customization
* Locations using customization
  **Used by** system such as, other scripts)
* Used by external such as. customers and vendors)
* # of daily script execution
* # of daily script uses
* Script Average Run Time (for scripts with End Tags)

To schedule the script:

1. Open **Customization** > **Scripting** > **Scripts**.
2. Expand **Filters** and select **Scheduled** for **Type**.
3. Locate the **Strongpoint Script Monitor ResultData SS** (id customscript\_flo\_script\_result\_data\_ss) script.
4. Click **Deployments** link.
5. Click **Edit** link for **customdeploy\_flo\_script\_utilisation\_data**
6. Set **Status** to **Scheduled**.
7. Set **Start Date** to the current date. You can modify the schedule as needed.
8. Click **Save**