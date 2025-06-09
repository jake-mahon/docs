# Rollback Objects

You can revert an Active Directory object to its previous state.

Follow the steps to roll back an Active Directory object, including user accounts, groups, and organizational units.

__Step 1 –__ Click Active Directory in the left pane to open the [Active Directory Page](/docs/recoveryforactivedirectory/recoveryforactivedirectory/admin/activedirectory/overview.md).

__Step 2 –__ Select and expand a domain in the left pane and locate the object you want to rollback.

__Step 3 –__ Do one of the following:

- Select the object to rollback and click the __Rollback__ button.
- Right-click the object and select __Rollback__ on the shortcut menu.

The Object Rollback wizard opens.

![Object Rollback wizard - Object Backup page](/img/product_docs/recoveryforactivedirectory/recoveryforactivedirectory/admin/activedirectory/objectbackups.png)

__Step 4 –__ In the Backup Date section, select a backup to use for the rollback operation. Then select the checkbox(es) for the attributes you want to roll back. Click __Next__.

![Object Rollback wizard - Options page](/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/install/application/options.png)

__Step 5 –__ Select a domain controller where the rollback changes will get affected. Options are:

- Use any writable domain controller – The system picks any writable domain controller in the domain for the rollback operation
- Use a specific domain controller – Select a domain controller from the drop-down menu for the rollback operation

__Step 6 –__ Click __Next__.

![Object Rollback wizard - Credentials page](/img/product_docs/activitymonitor/activitymonitor/install/agent/credentials.png)

__Step 7 –__ The account preforming the operation must have Domain Admin privileges to access the domain tree area where the object resides. On the Credentials page:

- If the account specified during domain configuration has Domain Admin privileges, click __Next__.
- If the domain account does not have Domain Admin privileges, select the __Use alternate credentials to perform the object rollback__ checkbox and enter an account with Domain Admin privileges, then click __Next__.

For a Least Privilege Access Model to provision an Active Directory security group with the permissions that are necessary to perform backups, rollbacks and recovery, see the [Least Privilege Access Model](/docs/recoveryforactivedirectory/recoveryforactivedirectory/requirements/targetdomain.md#Least-Privilege-Access-Model) topic.

![Object Rollback wizard - Confirm page](/img/product_docs/recoveryforactivedirectory/recoveryforactivedirectory/admin/forest/confirm.png)

__Step 8 –__ The Confirm page displays a summary of the settings you provided on the pages of the wizard. Use the Back button to return to a previous page and change any setting. Click __Complete__ to finish the wizard.

![Object Rollback Sucessful message](/img/product_docs/recoveryforactivedirectory/recoveryforactivedirectory/admin/activedirectory/objectrollbackcompleted.png)

__Step 9 –__ A completed message is displayed when the rollback is successful. Click __OK__.

The object has been rolled back.
