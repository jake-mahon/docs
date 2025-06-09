# Configure Audit Settings for CIFS File Shares on Dell Data Storage

Dell VNX, VNXe, Celerra, and Unity NAS devices are collectively referred to as Dell Data Storage.

Auditor  can be configured to audit all access types, review the table below and select options that you want to track:

| Option |  | Description |
| --- | --- | --- |
| Changes | Successful | Use this option to track changes to your data. Helps find out who made changes to your files, including their creation and deletion. |
| Failed | Use this option to detect suspicious activity on your file server. Helps identify potential intruders who tried to modify or delete files, etc., but failed to do it. |  |
| Read access | Successful | Use this option to supervise access to files containing confidential data intended for privileged users. Helps identify who accessed important files besides your trusted users.  Enabling this option on public shares will result in high number of events generated on your file server and the amount of data written to the Audit Archive. |
| Failed | Use this option to track suspicious activity. Helps find out who was trying to access your private data without proper justification.  Enabling this option on public shares will result in high number of events generated on your file server and the amount of data written to the Audit Archive. |  |

Actions reported by Auditor vary depending on the file server type and the audited object (file, folder, or share). The changes include creation, modification, deletion, moving, renaming, and copying. See the [Dell Data Storage](/docs/auditor/auditor/configuration/fileservers/delldatastorage/overview.md) topic for additional information.

## Configure Audit Settings for the CIFS File Shares Pre-Windows Server 2012

Perform the following steps:

__Step 1 –__ Navigate to the target file share, right-click it and select __Properties__.

__Step 2 –__ In the __`<Share_Name>` Properties__ dialog, select the __Security__ tab and click __Advanced__.

__Step 3 –__ In the __Advanced Security Settings for `<Share_Name>`__ dialog, navigate to the __Auditing__ tab, click Edit.

__Step 4 –__ In a separate __Advanced Security Settings for `<Share_Name>`__ dialog, click Add to add a principal. You can select __Everyone__ (or another user-defined group containing users that are granted special permissions) and click __Edit__.

__Step 5 –__  You can specify any other user group, but in this case Netwrix Auditor will send emails with errors on incorrect audit configuration. This will not affect the reports or data searches performed in the Auditor client and the product will only audit user accounts that belong to the selected group.

__Step 6 –__ Apply settings to your Auditing Entries depending on the access types that you want to audit. If you want to audit all access types (successful reads and changes as well as failed read and change attempts), you need to add separate Auditing Entries for each file share. Otherwise, reports will contain limited data and warning messages. Review the following for additional information:

- [Successful reads](#Successful-reads)
- [Successful changes](#Successful-changes)
- [Failed read attempts](#Failed-read-attempts)
- [Failed change attempts](#Failed-change-attempts)

| Auditing Entry |
| --- |
| __Successful reads__ |
| The Auditing Entry below shows Advanced Permissions for auditing successful reads only:   - Apply onto—Select _"Files only"_. - Check _"Successful"_ and _"Failed"_ next to List folder / read data. - Make sure that the __Apply these auditing entries to objects and/or containers within this container only__ checkbox is cleared. |
| __Successful changes__ |
| The Auditing Entry below shows Advanced Permissions for auditing successful changes only:   - Apply onto—Select _"This folder, subfolders and files"_. - Check _"Successful"_ next to the following permissions:    - Create files / write data   - Create folders / append data   - Write extended attributes   - Delete subfolders and files   - Delete   - Change permissions   - Take ownership  - Make sure that the __Apply these auditing entries to objects and/or containers within this container only__ checkbox is cleared. |
| __Failed read attempts__ |
| The Auditing Entry below shows Advanced Permissions for auditing failed read attempts only:   - Apply onto—Select _"This folder, subfolders and files"_. - Check _"Failed"_ next to List folder / read data.  - Make sure that the __Apply these auditing entries to objects and/or containers within this container only__ checkbox is cleared. |
| __Failed change attempts__ |
| The Auditing Entry below shows Advanced Permissions for auditing failed change attempts only:   - Apply onto—Select _"This folder, subfolders and files"_. - Check _"Failed"_ next to the following permissions:    - Create files / write data   - Create folders / append data   - Write extended attributes   - Delete subfolders and files   - Delete   - Change permissions   - Take ownership  - Make sure that the __Apply these auditing entries to objects and/or containers within this container only__ checkbox is cleared. |

## Configure Audit Settings for the CIFS File Shares Windows Server 2012 and Above

Follow the steps to configure audit settings.

__Step 7 –__ Navigate to the target file share, right-click it and select __Properties__.

__Step 8 –__ In the __`<Share_Name>` Properties__ dialog, select the __Security__ tab and click __Advanced__.

__Step 9 –__ In the __Advanced Security Settings for `<Share_Name>`__ dialog, navigate to the __Auditing__ tab.

![auditing_entries_netapp_2016](/img/product_docs/1secure/1secure/configuration/computer/auditing_entries_netapp_2016.png)

__Step 10 –__ Click Add to add a new principal. You can select Everyone (or another user-defined group containing users that are granted special permissions) and click Edit.

__Step 11 –__  In the Auditing Entry for `<Folder_Name>` dialog, click the Select a principal link and specify Everyone.

__Step 12 –__ You can specify any other user group, but in this case Netwrix Auditor will send emails with warnings on incorrect audit configuration. The product will audit only user accounts that belong to the selected group.

__Step 13 –__ Apply settings to your Auditing Entries depending on the access types that you want to audit. If you want to audit all access types (successful reads, modification as well as failed read and modification attempts), you need to add separate Auditing Entries for each file share. Otherwise, reports will contain limited data and warning messages. Review the following for additional information:

- [Successful reads](#Successful-reads)
- [Successful changes](#Successful-changes)
- [Failed read attempts](#Failed-read-attempts)
- [Failed change attempts](#Failed-change-attempts)

| Auditing Entry |  |
| --- | --- |
| __Successful reads__ |  |
| The Auditing Entry below shows Advanced Permissions for auditing successful reads only:  ![manualconfig_fileserver_auditingentry_1_2016](/img/product_docs/auditor/auditor/configuration/fileservers/netappcmode/manualconfig_fileserver_auditingentry_1_2016.png)   - Type—Set to _"Success"_. - Applies to—Set to _"Files only"_. - Advanced permissions—Select List folder / read data. - Make sure that the Only apply these auditing settings to objects and/or containers within this container checkbox is cleared. |  |
| __Successful changes__ |  |
| The Auditing Entry below shows Advanced Permissions for auditing successful changes only:  ![manualconfig_fileserver_emc_auditingentry](/img/product_docs/auditor/auditor/configuration/fileservers/delldatastorage/manualconfig_fileserver_emc_auditingentry.png)   - Type—Set to _"Success"_. - Applies to—Set to _"This folder, subfolders and files"_. - Advanced permissions:   - Create files / write data   - Create folders / append data   - Write attributes   - Write extended attributes   - Delete subfolders and files   - Delete   - Change permissions   - Take ownership - Make sure that the Only apply these auditing settings to objects and/or containers within this container checkbox is cleared. |  |
| __Failed read attempts__ |  |
| The Auditing Entry below shows Advanced Permissions for auditing failed read attempts:  ![manualconfig_fileserver_auditingentry_3_2016](/img/product_docs/auditor/auditor/configuration/fileservers/netappcmode/manualconfig_fileserver_auditingentry_3_2016.png)   - Type—Set to _"Fail"_. - Applies to—Set to _"This folder, subfolders and files"_. - Advanced permissions—Select List folder / read data.  - Make sure that the Only apply these auditing settings to objects and/or containers within this container checkbox is cleared. |  |
| __Failed change attempts__ |  |
| The Auditing Entry below shows Advanced Permissions for auditing failed change attempts:  ![manualconfig_fileserver_emc_auditingentry_fail](/img/product_docs/auditor/auditor/configuration/fileservers/delldatastorage/manualconfig_fileserver_emc_auditingentry_fail.png)   - Type—Set to _"Fail"_. - Applies to—Set to _"This folder, subfolders and files"_. - Advanced permissions:   - Create files / write data   - Create folders / append data   - Write attributes   - Write extended attributes   - Delete subfolders and files   - Delete   - Change permissions   - Take ownership  - Make sure that the Only apply these auditing settings to objects and/or containers within this container checkbox is cleared. | Successful reads | Successful modifications | Failed read attempts | Failed modifications attempts |  | --- | --- | --- | --- |  | Applies to |  |  |  |  | Files only | This folder, subfolders and files | This folder, subfolders and files | This folder, subfolders and files |  | Type |  |  |  |  | Success | Success | Fail | Fail |  | Advanced permissions |  |  |  |  | - List Folder / Read Data | - Create Files / Write Data - Create Folders / Append Data - Write Attributes - Write Extended Attributes - Delete Subfolders and Files - Delete - Change Permissions - Take Ownership | - List Folder / Read Data | - Create Files / Write Data - Create Folders / Append Data - Write Attributes - Write Extended Attributes - Delete Subfolders and Files - Delete - Change Permissions - Take Ownership |  |  |
