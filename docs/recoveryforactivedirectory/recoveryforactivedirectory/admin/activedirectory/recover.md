# Recover Objects

The Recycle Bin enables you to view the objects deleted in domains monitored by Recovery for Active Directory. You can recover these deleted Active Directory objects from the Recycle Bin.

Click __Active Directory__ in the left pane to open the [Active Directory Page](overview.md). Select and expand a domain in the left pane and click Recycle Bin to get a list of deleted objects in the domain.

![Recycle Bin](../../../../../static/img/product_docs/recoveryforactivedirectory/recoveryforactivedirectory/admin/activedirectory/recyclebin.webp)

You can recover deleted objects.

The page displays the following information:

- Name – The display name of the object
- Distinguished Name – The unique name identifying the object in the directory
- Last Known Parent – The path of the parent of the object
- Type – The object type, showing whether it is a container, organizational unit, computer, group, user, etc.
- Deleted On – The time and date when the object was deleted
- Time Left – The time remaining until the object is no longer recoverable

Search for an Object

There are several ways to find an object:

- Column Filters – Click a column header to organize the table alphabetically by the column header. An arrow appears by the column name. Use it to arrange the entries by ascending or descending order.
- Search box – Enter a text string in the search box to filter the table for results that contain the text.

## Recover an Object

Follow the steps to recover a deleted object.

__Step 1 –__ Click Active Directory in the left pane to open the [Active Directory Page](overview.md).

__Step 2 –__ Select and expand a domain in the left pane and click Recycle Bin.

__Step 3 –__ Do one of the following

- Select the object to restore and click the __Restore__ button.
- Right-click the object and select __Restore__ on the shortcut menu.

The Object Restore wizard opens.

![Object Restore wizard - Object Backups page](../../../../../static/img/product_docs/recoveryforactivedirectory/recoveryforactivedirectory/admin/activedirectory/objectbackups.webp)

__Step 4 –__  In the Backup Data section, select a backup date to restore from. Then click __Next__.

![Object Restore wizard - Domain Controller page](../../../../../static/img/product_docs/activitymonitor/activitymonitor/install/agent/domaincontroller.webp)

__Step 5 –__ Select a domain controller where the restore operation will get affected. Options are:

- Use any writable domain controller – The system picks any writable domain controller in the domain for the restore operation
- Use a specific domain controller – Select a domain controller from the drop-down menu for the restore operation

__Step 6 –__ Click __Next__.

![Object Restore wizard - Recovery Options page](../../../../../static/img/product_docs/recoveryforactivedirectory/recoveryforactivedirectory/admin/activedirectory/recoveryoptions.webp)

__Step 7 –__ On the Recovery Options page, select the Container and Naming Conflict actions for the recovery process.

- Container – When a container is deleted in Active Directory, all child objects are also deleted. Select a container restore option from the drop-down menu:

  - Only restore the container object – Restores the container object but no children
  - Restore the container object and the immediate children – Restores the container object and its immediate children
  - Restore the entire sub-tree – Restores the container object and all children

  __NOTE:__ Selecting the Restore the container object and the immediate children or the Restore the entire sub-tree option enables the User Options page.

- Naming Conflict – A naming conflict can occur if an object was created post-deletion that has identical values to the original object. From the drop-down menu, select an option to implement if a naming conflict occurs:

  - Skip the object – If there is a conflict with naming, do not restore and skip the object
  - Automatically use alternative values – If there is a conflict with naming, a numeric value will be appended to the name of the object being restored to create a unique name

__Step 8 –__ Click __Next__.

![Object Restore wizard - User Options page](../../../../../static/img/product_docs/recoveryforactivedirectory/recoveryforactivedirectory/admin/activedirectory/useroptions.webp)

__Step 9 –__ The User Options page is displayed when user objects are being restored. When a user object is included as a child object being restored, this page is also displayed. Select the check boxes to configure the necessary options for the user.

- Enable user – Enables the user in Active Directory
- Clear 'User must change password' flag upon restoration – Restored users do not receive an alert to change their password upon first login after a recovery. Instead, their old password prior to deletion is still active.
- Set new password – Implement a new password upon recovery. Type the new password in the text box.

  _Remember,_ when a new password is created, the user needs it to login the first time. The password should be copied and given to the restored user.

__Step 10 –__ Click __Next__.

![Object Restore wizard - Credentials page](../../../../../static/img/product_docs/activitymonitor/activitymonitor/install/agent/credentials.webp)

__Step 11 –__ The account preforming the operation must have Domain Admin privileges to access the domain tree area where the object resides. On the Credentials page:

- If the account specified during domain configuration has Domain Admin privileges, click __Next__.
- If the domain account does not have Domain Admin privileges, select the __Use alternate credentials to perform the object restore__ checkbox and enter an account with Domain Admin privileges, then click __Next__.

For a Least Privilege Access Model to provision an Active Directory security group with the permissions that are necessary to perform backups, rollbacks and recovery, see the [Least Privilege Access Model](../../requirements/targetdomain.md#least-privilege-access-model) topic.

![Object Restore wizard - Confirm page](../../../../../static/img/product_docs/recoveryforactivedirectory/recoveryforactivedirectory/admin/forest/confirm.webp)

__Step 12 –__ The Confirm page displays a summary of the settings you provided on the pages of the wizard. Use the Back button to return to a previous page and change any setting. Click __Complete__ to finish the wizard.

![Object Restore Complete message](../../../../../static/img/product_docs/recoveryforactivedirectory/recoveryforactivedirectory/admin/activedirectory/objectrestorecompleted.webp)

__Step 13 –__ A completed message is displayed when the restore is successful. Click __OK__.d

The deleted object has now been restored.
