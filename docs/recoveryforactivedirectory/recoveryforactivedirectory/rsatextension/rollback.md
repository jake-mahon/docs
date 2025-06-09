# Object Rollback

The Rollback feature in the Active Directory Users and Computers (ADUC) console allows you to revert an Active Directory object to a previous state of a Recovery for Active Directory backup.

## Prerequisites

The following prerequisites must be met before you can rollback or recover an object using ADUC:

- You must register the RSAT Extension on the Recovery Application Server to add the Rollback and Restore options to the ADUC console. See the [Register/Unregister the RSAT Extension](/docs/recoveryforactivedirectory/recoveryforactivedirectory/install/configurationutility.md#RegisterUnregister-the-RSAT-Extension) topic for additional information.
- At least one backup of the domain must be available in the Recovery for Active Directory Console. See the [Domains Page](/docs/recoveryforactivedirectory/recoveryforactivedirectory/admin/configuration/domain.md) topic for additional information.

## Rollback an Object Using ADUC

Follow the steps to roll back an Active Directory object, including user accounts, groups, and organizational units.

__NOTE:__  Repeat these steps as needed after a multi-select for rolling back multiple objects.

__Step 1 –__ Open ADUC and select one or more objects to rollback. Right-click on the object(s) and select __Rollback__ on the menu.

![Rollback selection in ADUC](/img/product_docs/recoveryforactivedirectory/recoveryforactivedirectory/rsatextension/aducrollback.png)

The Object Rollback wizard opens.

![Object Rollback wizard - Object Backups Page](/img/product_docs/recoveryforactivedirectory/recoveryforactivedirectory/admin/activedirectory/objectbackups.png)

__Step 2 –__  On the Object Backups page, select a backup date and then select the object and attribute(s) to rollback. This page consists of two sections:

- Objects – Lists the objects selected for rollback
- Backups – Lists the backup(s) with their respective details

  - Backup Date – Select the desired date timestamp to identify the backup for rollback. Multiple backups may be available for a single day depending on the configured schedule.
  - Attribute List – Select the attribute(s) to rollback. The table displays the current value and backup value. Attributes where these two values are different are highlighted in blue.
  - Only show attributes that have changed – Select this option to display only blue highlighted attributes that were changed when the selected backup was performed

You can click on different backup dates to see attribute values for each of those points in time. However, only one backup date can be selected in order to select attributes for rollback.

Click __Next__.

![Object Rollback wizard - Domian Controller Page](/img/product_docs/recoveryforactivedirectory/recoveryforactivedirectory/rsatextension/domiancontroller.png)

__Step 3 –__ On the Domain Controller page, select the Domain Controller to run the rollback action. This page consists of two sections:

- Domain Controller

  - Use the current domain controller
  - Use any writable domain controller
  - Use the selected domain controller – Select a domain controller from the drop-down menu
- Details – Provides information about the selected domain controller

Click __Next__.

![Object Rollback wizard - Alternate Credentials Page](/img/product_docs/recoveryforactivedirectory/recoveryforactivedirectory/rsatextension/alternatecredentials.png)

__Step 4 –__ The account preforming the operation must have Domain Admin privileges to access the domain tree area where the object resides. On the Alternate Credentials page:

- If the account specified during domain configuration has Domain Admin privileges, click __Next__.
- If the domain account does not have Domain Admin privileges, select the __Use alternate credentials for the rollback operation__ checkbox and enter an account with Domain Admin privileges, then click __Next__.

For a Least Privilege Access Model to provision an Active Directory security group with the permissions that are necessary to perform backups, rollbacks and recovery, see the [Least Privilege Access Model](/docs/recoveryforactivedirectory/recoveryforactivedirectory/requirements/targetdomain.md#Least-Privilege-Access-Model) topic.

![Object Rollback wizard - Confirm Page](/img/product_docs/recoveryforactivedirectory/recoveryforactivedirectory/admin/forest/confirm.png)

__Step 5 –__ On the Confirm page, review the object information, changes, and the domain controller selection. Click __Finish__ to rollback the object.

![Successful Rollback window](/img/product_docs/recoveryforactivedirectory/recoveryforactivedirectory/rsatextension/rollbacksuccessful.png)

__Step 6 –__ The Rollback window displays the action status. Click __Close__ to exit.

The ADUC object has been successfully rolled back to a previous state.
