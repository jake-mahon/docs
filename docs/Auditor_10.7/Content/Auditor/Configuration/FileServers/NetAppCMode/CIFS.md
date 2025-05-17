---
sidebar_position: 1872
title: Configure Audit Settings for CIFS File Shares
---

Filter: 

* All Files

Submit Search

# Configure Audit Settings for CIFS File Shares

Netwrix Auditor can be configured to audit all access types, review the table below and select options that you want to track:

| Option | | Description |
| --- | --- | --- |
| Changes | Successful | Use this option to track changes to your data. Helps find out who made changes to your files, including their creation and deletion. |
| Failed | Use this option to detect suspicious activity on your file server. Helps identify potential intruders who tried to modify or delete files, etc., but failed to do it. |
| Read access | Successful | Use this option to supervise access to files containing confidential data intended for privileged users. Helps identify who accessed important files besides your trusted users.  Enabling this option on public shares will result in high number of events generated on your file server and the amount of data written to the AuditArchive. |
| Failed | Use this option to track suspicious activity. Helps find out who was trying to access your private data without proper justification.  Enabling this option on public shares will result in high number of events generated on your file server and the amount of data written to the AuditArchive. |

Actions reported by Netwrix Auditor vary depending on the file server type and the audited object (file, folder, or share). The changes include creation, modification, deletion, moving, renaming, and copying. To track the copy action, enable successful read access and change auditing. See the [File Servers](../Overview "File Servers") topic for additional information.

Do one of the following depending on the OS:

* [To configure audit settings for the CIFS file shares from computers running pre-Windows Server 2012 versions](#To_configure_audit_settings_for_the_CIFS_file_shares_on_pre-Windows_Server_2012_versions "To configure audit settings for the CIFS file shares from computers running pre-Windows Server 2012 versions")
* [To configure audit settings for the CIFS file shares from computers running Windows Server 2012 and above](#To_configure_audit_settings_for_the_CIFS_file_shares_on_Windows_Server_2012_and_above "To configure audit settings for the CIFS file shares from computers running Windows Server 2012 and above")

## To configure audit settings for the CIFS file shares from computers running pre-Windows Server 2012 versions

1. Navigate to the root share folder, right-click it and select **Properties**.
2. In the ** Properties** dialog, select the **Security** tab and click **Advanced**.

   If there is no such tab, it means a wrong security style has been specified for the volume holding this file share.
3. In the **Advanced Security Settings for ** dialog, navigate to the **Auditing** tab, click Edit.

   ![](../../../../Resources/Images/Auditor/ManualConfig/Auditing_Entries_NetApp.PNG)
4. In a separate **Advanced Security Settings for ** dialog, click Add to add a principal. You can also select **Everyone** (or another user-defined group containing users that are granted special permissions) and click **Edit**.

   You can specify any other user group, but in this case Netwrix Auditor will send emails with warnings on incorrect audit configuration. This will not affect the Reports functionality and the product will only audit user accounts that belong to the selected group.
5. Apply settings to your Auditing Entries depending on actions that you want to audit. If you want to audit all actions (successful reads and changes as well as failed read and change attempts), you need to add three separate Auditing Entries for each file share. Otherwise, reports will contain limited data and warning messages.

   | Auditing Entry |
   | --- |
   | Successful reads |
   | The Auditing Entry below shows Advanced Permissions for auditing successful reads only:  * Apply onto—Select *"Files only"*. * Check *"Successful"* and *"Failed"* next to List folder / read data. * Make sure that the **Apply these auditing entries to objects and/or containers within this container only** checkbox is cleared. |
   | Successful changes |
   | The Auditing Entry below shows Advanced Permissions for auditing successful changes only:  * Apply onto—Select *"This folder, subfolders and files"*. * Check *"Successful"* next to the following permissions:    * Create files / write data   * Create folders / append data   * Write extended attributes   * Delete subfolders and files   * Delete   * Change permissions   * Take ownership * Make sure that the **Apply these auditing entries to objects and/or containers within this container only** checkbox is cleared. |
   | Failed read attempts |
   | The Auditing Entry below shows Advanced Permissions for auditing failed read attempts only:  * Apply onto—Select *"This folder, subfolders and files"*. * Check *"Failed"* next to List folder / read data. * Make sure that the **Apply these auditing entries to objects and/or containers within this container only** checkbox is cleared. |
   | Failed change attempts |
   | The Auditing Entry below shows Advanced Permissions for auditing failed change attempts only:  * Apply onto—Select *"This folder, subfolders and files"*. * Check *"Failed"* next to the following permissions:    * Create files / write data   * Create folders / append data   * Write extended attributes   * Delete subfolders and files   * Delete   * Change permissions   * Take ownership * Make sure that the **Apply these auditing entries to objects and/or containers within this container only** checkbox is cleared. |

## To configure audit settings for the CIFS file shares from computers running Windows Server 2012 and above

1. Navigate to the root shared folder, right-click it and select Properties.
2. In the ** Properties** dialog, select the **Security** tab and click **Advanced**.

   If there is no such tab, it means a wrong security style has been specified for the volume holding this file share.
3. In the **Advanced Security Settings for ** dialog, navigate to the **Auditing** tab, click Edit.

   ![](../../../../../../../static/images/Auditor_10.7/Content/Resources/Images/Auditor/ManualConfig/Auditing_Entries_NetApp_2016.png)
4. Click Add to add a new principal. You can also select Everyone (or another user-defined group containing users that are granted special permissions) and click Edit.
5. In the Auditing Entry for  dialog, click the Select a principal link and specify Everyone.

   You can specify any other user group, but in this case Netwrix Auditor will send emails with warnings on incorrect audit configuration. In this case, the product will only monitor user accounts that belong to the selected group.
6. Apply settings to your Auditing Entries depending on actions that you want to audit. If you want to audit all actions (successful reads and changes as well as failed read and change attempts), you need to add three separate Auditing Entries for each file share. Otherwise, reports will contain limited data and warning messages. Review the following for additional information:

   * [Successful reads](#Successful_reads2012)
   * [Successful changes](#Successful_permissions2012)
   * [Failed read attempts](#Failed_reads2012)
   * [Failed change attempts](#Failed_modification2012)

   | Auditing Entry | |
   | --- | --- |
   | Successful reads | |
   | The Auditing Entry below shows Advanced Permissions for auditing successful reads only:    * Type—Set to*"Success"*. * Applies to—Set to*"Files only"*. * Advanced permissions—SelectList folder / read data. * Make sure that theOnly apply these auditing settings to objects and/or containers within this containercheckbox is cleared. | |
   | Successful changes | |
   | The Auditing Entry below shows Advanced Permissions for auditing successful changes only:    * Type—Set to*"Success"*. * Applies to—Set to*"This folder, subfolders and files"*. * Advanced permissions:   * Create files / write data   * Create folders / append data   * Write extended attributes   * Delete subfolders and files   * Delete   * Change permissions   * Take ownership * Make sure that theOnly apply these auditing settings to objects and/or containers within this containercheckbox is cleared. | |
   | Failed read attempts | |
   | The Auditing Entry below shows Advanced Permissions for auditing failed read attempts:    * Type—Set to*"Fail"*. * Applies to—Set to*"This folder, subfolders and files"*. * Advanced permissions—SelectList folder / read data. * Make sure that theOnly apply these auditing settings to objects and/or containers within this containercheckbox is cleared. | |
   | Failed change attempts | |
   | The Auditing Entry below shows Advanced Permissions for auditing failed change attempts:    * Type—Set to*"Fail"*. * Applies to—Set to*"This folder, subfolders and files"*. * Advanced permissions:   * Create files / write data   * Create folders / append data   * Write extended attributes   * Delete subfolders and files   * Delete   * Change permissions   * Take ownership * Make sure that theOnly apply these auditing settings to objects and/or containers within this containercheckbox is cleared. To audit successful changes on NetApp 8.x or earlier, also selectWrite Attributesin the**Advanced permissions**list in the auditing entry settings. | |