---
sidebar_position: 1594
title: Create Custom Report
---

Filter: 

* All Files

Submit Search

# Create Custom Report

To speed up data review process and help you find the latest logons faster, Netwrix created an additional script, **Netwrix\_Auditor\_Saved\_Search\_for\_RADIUS\_Server\_Logons.ps1**. It is shipped with the add-on and creates the RADIUS server logons since yesterday custom search-based report in the Auditor client.

Follow the steps to create a custom report with the script.

**Step 1 –** Copy the **Netwrix\_Auditor\_Saved\_Search\_for\_RADIUS\_Server\_Logons.ps1** script to the Auditor Server.

**Step 2 –** Start **Windows PowerShell** and specify a path to the script.

**Step 3 –** Run the script.

**NOTE:** The user running the script must be a member of the **Netwrix Auditor Administrators** group.

After running the script, the RADIUS server logons since yesterday custom report appears in **Reports** > **Custom**. You can access the search instantly to receive it on a regular basis.

![](../../../../../../static/images/Auditor_10.7/Content/Resources/Images/Auditor/Search/AddonData/RADIUSFilters.png)

Clicking the saved search tile opens the search with preset filters, which shows RADIUS logon activity data for 2 days (yesterday and today).