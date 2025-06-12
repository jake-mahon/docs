# Create Custom Report

To speed up data review process and help you find the latest logons faster, Netwrix created an additional script, __Netwrix\_Auditor\_Saved\_Search\_for\_RADIUS\_Server\_Logons.ps1__. It is shipped with the add-on and creates the RADIUS server logons since yesterday custom search-based report in the Auditor client.

Follow the steps to create a custom report with the script.

__Step 1 –__ Copy the __Netwrix\_Auditor\_Saved\_Search\_for\_RADIUS\_Server\_Logons.ps1__ script to the Auditor Server.

__Step 2 –__ Start __Windows PowerShell__ and specify a path to the script.

__Step 3 –__ Run the script.

__NOTE:__ The user running the script must be a member of the __Netwrix Auditor Administrators__ group.

After running the script, the RADIUS server logons since yesterday custom report appears in __Reports__ > __Custom__. You can access the search instantly to receive it on a regular basis.

![radiusfilters](/img/versioned_docs/auditor_10.6/auditor/addon/radius/radiusfilters.png)

Clicking the saved search tile opens the search with preset filters, which shows RADIUS logon activity data for 2 days (yesterday and today).
