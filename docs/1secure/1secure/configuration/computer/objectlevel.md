# Configure Object-Level Access Auditing

Netwrix 1Secure can be configured to audit all the access types mentioned below:

![Advanced Activity Selection options](/static/img/product_docs/1secure/1secure/configuration/computer/objectlevelaccessaudit.png)

## Configure Object-level Access Auditing on Windows Server 2012 and Above

Follow the steps to configure Object-level access auditing on Windows Server 2012 and above.

__Step 1 –__ Navigate to the target file share, right-click it and select __Properties__.

__Step 2 –__ In the <Share\_Name> Properties dialog box, select the Security tab and click __Advanced__.

__Step 3 –__ In the Advanced Security Settings for <Share\_Name> dialog box, navigate to the Auditing tab.

![Advanced Security Settings for <Share_Name> dialog box](/static/img/product_docs/1secure/1secure/configuration/computer/auditing_entries_netapp_2016.png)

__Step 4 –__ Click __Add__ to add a new principal. You can select __Everyone__ (or another user-defined group containing users that are granted special permissions) and click __Edit__.

__Step 5 –__ In the Auditing Entry for <Folder\_Name> dialog box, click the __Select a principal__ link and specify __Everyone__.

__NOTE:__ You can specify any other group as needed. The product will audit only user accounts that are members of the selected group.

__Step 6 –__ Apply settings to your Auditing Entries depending on the access types you want to audit. If you want to audit all access types, you need to add separate Auditing Entries for each file share. Otherwise, reports will contain limited data and warning messages.
